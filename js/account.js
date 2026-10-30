/* Managed authentication via the locally bundled official Supabase client.
   Passwords and session tokens never enter kitchen snapshots or account exports. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var config = window.COOK_ACCOUNT_CONFIG || {};
  var scope = location.pathname.replace(/[^/]*$/, '');
  var noticeKey = 'cook:storage-notice:v1:' + scope;
  var ownerKey = 'cook:account-owner:v1:' + scope;
  var pendingKey = 'cook:account-message:v1:' + scope; // a message to show after moving to another page
  // Where the sign-in session is kept: this tab only, or (with "Stay signed in") this browser
  // until signing out. The account's theme is kept with it, so a reopened tab starts in that theme.
  var authKey = 'cook:auth:v1:' + scope, persistKey = 'cook:auth-persist:v1:' + scope, themeKey = 'cook:theme:v1:' + scope;
  function persistent() { try { return localStorage.getItem(persistKey) === '1'; } catch (e) { return false; } }
  function setPersistent(on) {
    try { if (on) localStorage.setItem(persistKey, '1'); else { localStorage.removeItem(persistKey); localStorage.removeItem(themeKey); } }
    catch (e) { /* browser storage blocked: the session stays in this tab */ }
  }
  var authStorage = {
    getItem: function (key) { try { return (persistent() ? localStorage : sessionStorage).getItem(key); } catch (e) { return null; } },
    setItem: function (key, value) { (persistent() ? localStorage : sessionStorage).setItem(key, value); },
    removeItem: function (key) {
      try { localStorage.removeItem(key); } catch (e) { /* nothing stored there */ }
      try { sessionStorage.removeItem(key); } catch (e) { /* nothing stored there */ }
    }
  };
  // Removes every stored sign-in item (both places) and the kept theme.
  function clearAuth() {
    [authKey, authKey + '-code-verifier', authKey + '-user'].forEach(authStorage.removeItem);
    setPersistent(false);
  }
  function rememberTheme() {
    try { if (persistent()) localStorage.setItem(themeKey, preferences().theme); } catch (e) { /* optional */ }
  }
  var mode = 'login', client = null, user = null, ready = false, recovery = false;
  var saving = Promise.resolve(), busy = false, savedFingerprint = null;
  var parameters = new URLSearchParams(location.hash.slice(1));
  var tokenHash = parameters.get('token_hash'), tokenType = parameters.get('type');
  // Strip credentials before any account network request. Never trust a success flag.
  if (tokenHash || parameters.has('access_token') || parameters.has('error')) history.replaceState(null, '', location.pathname + location.search);
  // Texts are translation keys; tr() looks them up in the current language.
  function tr(key) { return window.CookI18n ? window.CookI18n.t(key) : key; }
  var lastStatus = null, lastDetail = '', lastMessage = null;
  // detail: a short technical error code shown after the text, so problems can be diagnosed.
  function status(key, detail) {
    lastStatus = key; lastDetail = detail || '';
    $('account-status').textContent = key ? tr(key) + (lastDetail ? ' (' + lastDetail + ')' : '') : '';
  }
  function open(id) { if (!$(id).open) $(id).showModal(); }
  // Messages slide up at the bottom of the page, like the storage notice.
  // While the account window is open the page behind it can't be clicked, so the message shows there.
  // fade: good news (verified, deleted) fades out by itself after 5 seconds.
  var fadeTimer = null;
  function hideMessage() {
    clearTimeout(fadeTimer);
    $('account-message').hidden = true;
    $('account-message').classList.remove('is-fading');
    lastMessage = null;
  }
  function message(key, fade) {
    if ($('account-dialog').open) { status(key); return; }
    hideMessage();
    lastMessage = key;
    $('account-message-text').textContent = tr(key);
    $('account-message').hidden = false;
    if (fade) fadeTimer = setTimeout(function () {
      $('account-message').classList.add('is-fading');
      fadeTimer = setTimeout(hideMessage, 600);
    }, 5000);
  }
  $('account-message-ok').addEventListener('click', hideMessage);
  // After signing in (or confirming a new account) show the recipe list.
  // On a recipe or cooking page the visitor stays where they were.
  function showRecipes(key) {
    var page = document.body.getAttribute('data-page');
    if (page === 'recipes' || page === 'details' || page === 'cook') {
      if ($('account-dialog').open) $('account-dialog').close();
      if (key) message(key, true);
      return;
    }
    try { if (key) sessionStorage.setItem(pendingKey, key); } catch (e) { /* the message is optional */ }
    location.assign('recipes.html');
  }
  try {
    var pending = sessionStorage.getItem(pendingKey);
    sessionStorage.removeItem(pendingKey);
    if (pending === 'accConfirmed' || pending === 'accDeleted') message(pending, true);
  } catch (e) { /* storage blocked: no message to carry */ }
  function dismissNotice() {
    $('storage-notice').hidden = true;
    try { sessionStorage.setItem(noticeKey, 'dismissed'); } catch (e) { /* Tab-only dismissal still works. */ }
  }
  $('storage-ok').addEventListener('click', dismissNotice);
  $('storage-close').addEventListener('click', dismissNotice);
  $('storage-reopen').addEventListener('click', function () { $('storage-notice').hidden = false; });
  try { $('storage-notice').hidden = sessionStorage.getItem(noticeKey) === 'dismissed'; }
  catch (e) { $('storage-notice').hidden = false; }
  document.querySelectorAll('[data-open-privacy]').forEach(function (el) { el.addEventListener('click', function () { open('privacy-dialog'); }); });
  document.querySelectorAll('[data-close]').forEach(function (el) { el.addEventListener('click', function () { $(el.dataset.close).close(); }); });
  ['account-dialog', 'privacy-dialog'].forEach(function (id) {
    $(id).addEventListener('click', function (event) { if (event.target === $(id)) $(id).close(); });
  });
  $('btn-account').addEventListener('click', function () { open('account-dialog'); });
  var SUBMIT = { login: 'accSignIn', signup: 'accCreate', reset: 'accSendReset', resend: 'accResend' };
  // The less prominent button under the main one switches between signing in and creating an account.
  function drawMode() {
    $('account-submit').textContent = tr(SUBMIT[mode]);
    $('account-switch').textContent = tr(mode === 'login' ? 'accCreate' : 'accSignIn');
  }
  function setMode(value) {
    mode = value;
    $('account-password-field').hidden = value === 'reset' || value === 'resend';
    $('account-password').required = !$('account-password-field').hidden;
    $('account-password').minLength = value === 'signup' ? 12 : 1;
    $('account-password').autocomplete = value === 'signup' ? 'new-password' : 'current-password';
    $('account-password').value = '';
    $('account-stay-field').hidden = value !== 'login';
    drawMode();
    status(null);
  }
  document.querySelectorAll('[data-account-mode]').forEach(function (el) { el.addEventListener('click', function () { setMode(el.dataset.accountMode); }); });
  $('account-switch').addEventListener('click', function () { setMode(mode === 'login' ? 'signup' : 'login'); });
  function hideDelete() { $('account-delete').hidden = true; $('account-delete-open').hidden = false; $('account-delete-password').value = ''; }
  function draw() {
    $('account-guest').hidden = !!user || recovery;
    $('account-member').hidden = !user || recovery;
    $('account-recovery').hidden = !recovery;
    var label = tr(user ? 'accMyAccount' : 'accAccount');
    $('btn-account').setAttribute('aria-label', label);
    $('btn-account').title = label;
    $('account-email-display').textContent = user ? user.email : '';
    $('account-recovery-email').textContent = user ? user.email : '';
    if (!user) hideDelete();
    // app.js shows favorites only for a signed-in, loaded account.
    document.dispatchEvent(new Event('cook:account'));
  }
  // Supabase error codes → a reason the visitor can act on. Unknown errors keep their code visible.
  function failure(e, action) {
    var code = (e && e.code) || '', st = (e && e.status) || 0, text = (e && e.message) || '';
    // Server errors (5xx) arrive without a code; their short message is the useful detail.
    var detail = code || String(text).slice(0, 80) || String(st || '');
    if (code === 'over_email_send_rate_limit' || code === 'over_request_rate_limit' || st === 429) return ['accTooMany', detail];
    if (code === 'weak_password') return ['accPasswordRule', detail];
    if (code === 'email_address_invalid' || code === 'validation_failed') return ['accEmailInvalid', detail];
    if (action !== 'login' && (code === 'email_address_not_authorized' || st >= 500 || /sending|smtp/i.test(text))) return ['accEmailFailed', detail];
    return [action === 'login' ? 'accLoginFailed' : 'accRequestFailed', detail];
  }
  function validConfig() {
    try {
      var endpoint = new URL(config.supabaseUrl), site = new URL(config.siteUrl);
      var key = config.publishableKey || '', publicKey = /^sb_publishable_[A-Za-z0-9_-]+$/.test(key);
      if (key.split('.').length === 3) publicKey = JSON.parse(atob(key.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))).role === 'anon';
      return config.registrationEnabled === true && publicKey && endpoint.protocol === 'https:' &&
        /^[a-z0-9-]+\.supabase\.co$/.test(endpoint.hostname) && endpoint.pathname === '/' &&
        !endpoint.username && !endpoint.password && !endpoint.search && !endpoint.hash &&
        (site.protocol === 'https:' || (site.protocol === 'http:' && site.hostname === 'localhost')) &&
        site.origin === location.origin && !site.search && !site.hash && !site.username && !site.password;
    } catch (e) { return false; }
  }
  function check(result) { if (result.error) throw result.error; return result.data; }
  function passwordOK(password) { return password.length >= 12 && new TextEncoder().encode(password).length <= 72; }
  function preferences() { return window.CookPreferences.read(); }
  async function loadSettings() {
    ready = false;
    var revision = window.CookPreferences.revision();
    var data = check(await client.from('user_settings').select('preferences').eq('user_id', user.id).maybeSingle());
    if (revision !== window.CookPreferences.revision()) throw new Error('local_changes');
    if (data) window.CookPreferences.apply(data.preferences);
    // An empty account starts with the current guest kitchen only on explicit sign-in/save.
    sessionStorage.setItem(ownerKey, user.id);
    savedFingerprint = JSON.stringify(preferences());
    ready = true;
    rememberTheme();
    status(data ? 'accLoaded' : 'accSignedInEmpty');
    document.dispatchEvent(new Event('cook:account'));
  }
  function savePreferences() {
    if (!user) return Promise.resolve(true);
    if (!ready) { message('accNotLoadedYet'); return Promise.resolve(false); }
    var snapshot = preferences(), accountId = user.id;
    // Serialise writes so a slow old request cannot overwrite a later snapshot.
    saving = saving.then(async function () {
      if (!user || user.id !== accountId) return false;
      status('accSaving');
      try {
        check(await client.from('user_settings').upsert({ user_id: accountId, preferences: snapshot }, { onConflict: 'user_id' }));
        savedFingerprint = JSON.stringify(snapshot);
        rememberTheme();
        status('accSaved');
        return true;
      } catch (e) {
        status('accRetrySave');
        message('accSaveFailed');
        return false;
      }
    });
    return saving;
  }
  window.CookAccount = {
    savePreferences: savePreferences,
    flushPending: function () {
      return saving.then(function (ok) {
        if (ok === false) return false;
        // A dialog's close event can arrive after a navigation click. Capture changes now.
        return user && JSON.stringify(preferences()) !== savedFingerprint ? savePreferences() : true;
      });
    },
    // Signed in with settings loaded: favorites can be shown and saved.
    signedIn: function () { return !!user && ready; },
    // Opens the account window with a reason, e.g. "Sign in to save favorites."
    prompt: function (key) {
      if (!user) setMode('login');
      status(key);
      open('account-dialog');
    }
  };
  $('account-save').addEventListener('click', savePreferences);
  $('options-dialog').addEventListener('close', function () { if (user) savePreferences(); });
  $('account-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!client || busy) return;
    var email = $('account-email').value.trim(); // Never remove +tags or Gmail dots.
    var password = $('account-password').value;
    $('account-password').value = '';
    var action = mode;
    if (action === 'signup' && !passwordOK(password)) { status('accPasswordRule'); return; }
    busy = true; $('account-submit').disabled = true;
    status('accWait');
    try {
      if (action === 'signup') {
        check(await client.auth.signUp({ email: email, password: password, options: { emailRedirectTo: config.siteUrl } }));
        status('accSignupSent');
      } else if (action === 'login') {
        clearAuth();
        setPersistent($('account-stay').checked);
        var signedIn = check(await client.auth.signInWithPassword({ email: email, password: password }));
        var verified = check(await client.auth.getUser()).user;
        if (!verified || !verified.email_confirmed_at || !signedIn.session) throw new Error('unconfirmed');
        // If a different account was previously used in this tab, discard its private snapshot.
        var previousOwner = sessionStorage.getItem(ownerKey);
        if (previousOwner && previousOwner !== verified.id) window.CookPreferences.reset();
        user = verified; draw(); await loadSettings();
        showRecipes();
      } else if (action === 'reset') {
        check(await client.auth.resetPasswordForEmail(email, { redirectTo: config.siteUrl }));
        status('accResetSent');
      } else {
        check(await client.auth.resend({ type: 'signup', email: email, options: { emailRedirectTo: config.siteUrl } }));
        status('accResendSent');
      }
    } catch (e) {
      var why = failure(e, action);
      status(why[0], why[1]);
      if (user && !ready) status('accLoadFailed');
    } finally { password = ''; busy = false; $('account-submit').disabled = false; }
  });
  // Password reset link: show the address, ask for the new password twice.
  $('account-recovery').addEventListener('submit', async function (event) {
    event.preventDefault();
    var password = $('account-new-password').value, again = $('account-new-password2').value;
    if (password !== again) { status('accMismatch'); return; }
    if (!passwordOK(password)) { status('accPasswordRule'); return; }
    if (busy) return;
    busy = true;
    try {
      // Managed Auth stores only a secure hash of the new password.
      check(await client.auth.updateUser({ password: password }));
      $('account-new-password').value = ''; $('account-new-password2').value = '';
      recovery = false; draw(); await loadSettings(); status('accPasswordUpdated');
    } catch (e) {
      var why = failure(e, 'recovery');
      status(why[0] === 'accPasswordRule' ? 'accPasswordRule' : 'accPasswordFailed', why[1]);
    } finally { password = ''; again = ''; busy = false; }
  });
  // Removes this tab's authentication data and Cook choices.
  async function signOutLocally() {
    await client.auth.signOut({ scope: 'local' }).catch(function () {});
    clearAuth();
    sessionStorage.removeItem(ownerKey);
    window.CookPreferences.reset();
    user = null; ready = false;
  }
  $('account-logout').addEventListener('click', async function () {
    if (busy) return;
    busy = true;
    await saving;
    var result = await client.auth.signOut({ scope: 'local' });
    // Even if the network is unavailable, remove this tab's authentication data.
    if (result.error) await client.auth.signOut({ scope: 'local' }).catch(function () {});
    clearAuth();
    sessionStorage.removeItem(ownerKey);
    window.CookPreferences.reset();
    user = null; ready = false;
    location.assign('index.html');
  });
  // Delete account: confirm with the password. The database checks it against the stored hash.
  $('account-delete-open').addEventListener('click', function () {
    $('account-delete').hidden = false; $('account-delete-open').hidden = true;
    $('account-delete-password').focus();
  });
  $('account-delete-cancel').addEventListener('click', function () { hideDelete(); status(null); });
  $('account-delete').addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!client || !user || busy) return;
    var password = $('account-delete-password').value;
    $('account-delete-password').value = '';
    busy = true;
    status('accWait');
    try {
      await saving;
      var removed = check(await client.rpc('cook_delete_account', { p_password: password }));
      if (removed !== true) { status('accDeleteWrong'); return; }
      await signOutLocally();
      draw();
      $('account-dialog').close();
      status(null);
      message('accDeleted', true);
    } catch (e) {
      status('accDeleteFailed', (e && e.code) || '');
    } finally { password = ''; busy = false; }
  });
  $('account-export').addEventListener('click', function () {
    var blob = new Blob([JSON.stringify({ email: user.email, settings: preferences() }, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = 'cook-settings.json'; link.click(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });
  async function start() {
    if (!validConfig()) {
      status('accUnavailable');
      $('account-form').querySelectorAll('input,button[type="submit"]').forEach(function (el) { el.disabled = true; });
      $('account-switch').disabled = true;
      if (tokenHash) message('accVerifyUnavailable');
      return;
    }
    try {
      var probe = 'cook:storage-probe:' + scope;
      sessionStorage.setItem(probe, '1'); sessionStorage.removeItem(probe);
      client = window.supabase.createClient(config.supabaseUrl, config.publishableKey, { auth: {
        storage: authStorage, storageKey: authKey, persistSession: true,
        autoRefreshToken: true, detectSessionInUrl: false, flowType: 'pkce'
      } });
      if (tokenHash && tokenType !== 'email' && tokenType !== 'recovery') throw new Error('invalid_link_type');
      if (tokenHash) {
        check(await client.auth.verifyOtp({ token_hash: tokenHash, type: tokenType }));
        tokenHash = null;
        var confirmed = check(await client.auth.getUser()).user;
        if (!confirmed || !confirmed.email_confirmed_at) throw new Error('unconfirmed');
        var oldOwner = sessionStorage.getItem(ownerKey);
        if (oldOwner && oldOwner !== confirmed.id) window.CookPreferences.reset();
        user = confirmed; recovery = tokenType === 'recovery'; draw();
        if (recovery) { status(null); open('account-dialog'); $('account-new-password').focus(); }
        else {
          try { await loadSettings(); showRecipes('accConfirmed'); }
          catch (e) { status('accConfirmedLoadFailed'); message('accConfirmed', true); }
        }
      } else {
        var session = check(await client.auth.getSession()).session;
        if (session) {
          user = check(await client.auth.getUser()).user;
          if (!user || !user.email_confirmed_at) throw new Error('unconfirmed');
          draw(); await loadSettings();
        } else {
          if (sessionStorage.getItem(ownerKey)) { window.CookPreferences.reset(); sessionStorage.removeItem(ownerKey); }
          status(null);
        }
      }
      client.auth.onAuthStateChange(function (event) {
        // Avoid SDK calls in this callback (the SDK holds its session lock).
        if (event === 'SIGNED_OUT' && user && !busy) {
          user = null; ready = false; clearAuth(); draw(); window.CookPreferences.reset();
          sessionStorage.removeItem(ownerKey); status('accSessionEnded');
        }
      });
    } catch (e) {
      ready = false;
      status('accLoadError');
      if (tokenHash) message('accLinkFailed');
    }
  }
  // Redraw this file's texts after a language change in app.js.
  document.addEventListener('cook:lang', function () {
    draw();
    drawMode();
    if (lastStatus) status(lastStatus, lastDetail);
    if (lastMessage) $('account-message-text').textContent = tr(lastMessage);
  });
  drawMode();
  draw();
  start();
})();
