/* Managed authentication via the locally bundled official Supabase client.
   Passwords and session tokens never enter kitchen snapshots or account exports. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var config = window.COOK_ACCOUNT_CONFIG || {};
  var scope = location.pathname.replace(/[^/]*$/, '');
  var noticeKey = 'cook:storage-notice:v1:' + scope;
  var ownerKey = 'cook:account-owner:v1:' + scope;
  var mode = 'login', client = null, user = null, ready = false, recovery = false;
  var saving = Promise.resolve(), busy = false, savedFingerprint = null;
  var parameters = new URLSearchParams(location.hash.slice(1));
  var tokenHash = parameters.get('token_hash'), tokenType = parameters.get('type');
  // Strip credentials before any account network request. Never trust a success flag.
  if (tokenHash || parameters.has('access_token') || parameters.has('error')) history.replaceState(null, '', location.pathname + location.search);
  function status(message) { $('account-status').textContent = message; }
  function open(id) { if (!$(id).open) $(id).showModal(); }
  function message(title, text) {
    $('account-message-title').textContent = title;
    $('account-message-text').textContent = text;
    open('account-message');
  }
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
  ['account-dialog', 'account-message', 'privacy-dialog'].forEach(function (id) {
    $(id).addEventListener('click', function (event) { if (event.target === $(id)) $(id).close(); });
  });
  $('btn-account').addEventListener('click', function () { open('account-dialog'); });
  function setMode(value) {
    mode = value;
    $('account-password-field').hidden = value === 'reset' || value === 'resend';
    $('account-password').required = !$('account-password-field').hidden;
    $('account-password').minLength = value === 'signup' ? 12 : 1;
    $('account-password').autocomplete = value === 'signup' ? 'new-password' : 'current-password';
    $('account-signup-note').hidden = value !== 'signup';
    $('account-submit').textContent = { login: 'Sign in', signup: 'Create account', reset: 'Send reset link', resend: 'Resend confirmation' }[value];
    $('account-password').value = '';
  }
  document.querySelectorAll('[data-account-mode]').forEach(function (el) { el.addEventListener('click', function () { setMode(el.dataset.accountMode); }); });
  function draw() {
    $('account-guest').hidden = !!user || recovery;
    $('account-member').hidden = !user || recovery;
    $('account-recovery').hidden = !recovery;
    $('btn-account').textContent = user ? 'My account' : 'Account';
    $('account-email-display').textContent = user ? user.email : '';
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
    status(data ? 'Your saved kitchen and settings are loaded.' : 'Signed in. Save your kitchen and settings to back them up.');
  }
  function savePreferences() {
    if (!user) return Promise.resolve(true);
    if (!ready) { message('Settings not saved', 'Your account settings have not loaded yet. Open Account and sign in again before saving.'); return Promise.resolve(false); }
    var snapshot = preferences(), accountId = user.id;
    // Serialise writes so a slow old request cannot overwrite a later snapshot.
    saving = saving.then(async function () {
      if (!user || user.id !== accountId) return false;
      status('Saving settings…');
      try {
        check(await client.from('user_settings').upsert({ user_id: accountId, preferences: snapshot }, { onConflict: 'user_id' }));
        savedFingerprint = JSON.stringify(snapshot);
        status('Kitchen and settings saved.');
        return true;
      } catch (e) {
        status('Settings could not be saved. Your changes are still in this tab.');
        message('Settings not saved', 'Please check your connection and try “Save kitchen and settings” in Account again.');
        return false;
      }
    });
    return saving;
  }
  window.CookAccount = { savePreferences: savePreferences, flushPending: function () {
    return saving.then(function (ok) {
      if (ok === false) return false;
      // A dialog's close event can arrive after a navigation click. Capture changes now.
      return user && JSON.stringify(preferences()) !== savedFingerprint ? savePreferences() : true;
    });
  } };
  $('account-save').addEventListener('click', savePreferences);
  $('options-dialog').addEventListener('close', function () { if (user) savePreferences(); });
  $('account-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!client || busy) return;
    var email = $('account-email').value.trim(); // Never remove +tags or Gmail dots.
    var password = $('account-password').value;
    $('account-password').value = '';
    var action = mode;
    if (action === 'signup' && !passwordOK(password)) { status('Use at least 12 characters. If your password is very long, shorten it.'); return; }
    busy = true; $('account-submit').disabled = true;
    status('Please wait…');
    try {
      if (action === 'signup') {
        check(await client.auth.signUp({ email: email, password: password, options: { emailRedirectTo: config.siteUrl } }));
        status('If registration is available for this address, a confirmation email is on its way. Check your inbox and spam folder.');
      } else if (action === 'login') {
        var signedIn = check(await client.auth.signInWithPassword({ email: email, password: password }));
        var verified = check(await client.auth.getUser()).user;
        if (!verified || !verified.email_confirmed_at || !signedIn.session) throw new Error('unconfirmed');
        // If a different account was previously used in this tab, discard its private snapshot.
        var previousOwner = sessionStorage.getItem(ownerKey);
        if (previousOwner && previousOwner !== verified.id) window.CookPreferences.reset();
        user = verified; draw(); await loadSettings();
      } else if (action === 'reset') {
        check(await client.auth.resetPasswordForEmail(email, { redirectTo: config.siteUrl }));
        status('If this address has an account, a password-reset email is on its way.');
      } else {
        check(await client.auth.resend({ type: 'signup', email: email, options: { emailRedirectTo: config.siteUrl } }));
        status('If confirmation is needed for this address, an email is on its way.');
      }
    } catch (e) {
      status(action === 'login' ? 'Sign-in or loading settings failed. Check your email/password and confirm your email, then try again.' : 'The request could not be completed. Please try again later.');
      if (user && !ready) status('Signed in, but settings could not be loaded. Sign out and try again. Nothing has been overwritten.');
    } finally { password = ''; busy = false; $('account-submit').disabled = false; }
  });
  $('account-recovery').addEventListener('submit', async function (event) {
    event.preventDefault();
    var password = $('account-new-password').value;
    $('account-new-password').value = '';
    if (!passwordOK(password)) { status('Use at least 12 characters. If your password is very long, shorten it.'); return; }
    if (busy) return;
    busy = true;
    try {
      check(await client.auth.updateUser({ password: password }));
      recovery = false; draw(); await loadSettings(); status('Your password has been updated.');
    } catch (e) { status('The password could not be updated. Request a new reset link and try again.'); }
    finally { password = ''; busy = false; }
  });
  $('account-logout').addEventListener('click', async function () {
    if (busy) return;
    busy = true;
    await saving;
    var result = await client.auth.signOut({ scope: 'local' });
    // Even if the network is unavailable, remove this tab's authentication data.
    if (result.error) await client.auth.signOut({ scope: 'local' }).catch(function () {});
    sessionStorage.removeItem('cook:auth:v1:' + scope);
    sessionStorage.removeItem(ownerKey);
    window.CookPreferences.reset();
    user = null; ready = false;
    location.assign('index.html');
  });
  $('account-export').addEventListener('click', function () {
    var blob = new Blob([JSON.stringify({ email: user.email, settings: preferences() }, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = 'cook-settings.json'; link.click(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });
  async function start() {
    if (!validConfig()) {
      status('Accounts are not available yet. You can keep using Cook without an account.');
      $('account-form').querySelectorAll('input,button[type="submit"]').forEach(function (el) { el.disabled = true; });
      if (tokenHash) message('Verification unavailable', 'Account setup is not complete. Please try the email link again once registration is available.');
      return;
    }
    try {
      var probe = 'cook:storage-probe:' + scope;
      sessionStorage.setItem(probe, '1'); sessionStorage.removeItem(probe);
      client = window.supabase.createClient(config.supabaseUrl, config.publishableKey, { auth: {
        storage: sessionStorage, storageKey: 'cook:auth:v1:' + scope, persistSession: true,
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
        if (recovery) { status('Choose a new password.'); open('account-dialog'); }
        else {
          try { await loadSettings(); } catch (e) { status('Your email is confirmed, but settings could not be loaded. Sign out and try again.'); }
          message('Registration confirmed', 'Your account has been verified!');
        }
      } else {
        var session = check(await client.auth.getSession()).session;
        if (session) {
          user = check(await client.auth.getUser()).user;
          if (!user || !user.email_confirmed_at) throw new Error('unconfirmed');
          draw(); await loadSettings();
        } else {
          if (sessionStorage.getItem(ownerKey)) { window.CookPreferences.reset(); sessionStorage.removeItem(ownerKey); }
          status('Sign in or create an account to save your kitchen across devices.');
        }
      }
      client.auth.onAuthStateChange(function (event) {
        // Avoid SDK calls in this callback (the SDK holds its session lock).
        if (event === 'SIGNED_OUT' && user && !busy) {
          user = null; ready = false; draw(); window.CookPreferences.reset();
          sessionStorage.removeItem(ownerKey); status('Your session ended. Please sign in again.');
        }
      });
    } catch (e) {
      ready = false;
      status('Accounts could not be loaded. Check your connection and allow tab storage, then reload.');
      if (tokenHash) message('Link could not be verified', 'This link may have expired or already been used. Open Account to sign in or request a new email.');
    }
  }
  start();
})();
