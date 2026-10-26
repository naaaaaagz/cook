/* "Tell us what you got in the fridge": a voice (or typed) ingredient panel on
   the recipe list. Said ingredients become chips (keyed like the recipes'
   ingredients); when you stop talking the panel shrinks and the recipe list
   shows what you can cook. Element ids start with "fv-".

   Speech language: the user's country (looked up from the IP address once,
   1.5 s at most), else the browser's language, else English (US). The
   language picker and the browser checks only show up when something is wrong.
   Spoken words per language come from js/voice/<lang>.js, loaded on demand.
   Nothing is stored on the device. */
(function () {
'use strict';

/* ---------- Languages ---------- */
// Site language -> speech recognition language.
var SPEECH = {
  'en-US': 'en-US', 'en-GB': 'en-GB', hu: 'hu-HU', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', it: 'it-IT', nl: 'nl-NL',
  ca: 'ca-ES', 'pt-PT': 'pt-PT', 'pt-BR': 'pt-BR', da: 'da-DK', no: 'nb-NO', sv: 'sv-SE', is: 'is-IS', fi: 'fi-FI',
  pl: 'pl-PL', cs: 'cs-CZ', sk: 'sk-SK', sl: 'sl-SI', hr: 'hr-HR', sr: 'sr-RS', bg: 'bg-BG', ro: 'ro-RO', sq: 'sq-AL',
  el: 'el-GR', et: 'et-EE', lv: 'lv-LV', lt: 'lt-LT', ru: 'ru-RU', uk: 'uk-UA', tr: 'tr-TR', he: 'he-IL', ar: 'ar-SA',
  hi: 'hi-IN', ka: 'ka-GE', hy: 'hy-AM', ja: 'ja-JP', ko: 'ko-KR', 'zh-Hans': 'zh-CN', 'zh-Hant': 'zh-TW', th: 'th-TH',
  vi: 'vi-VN', id: 'id-ID', ms: 'ms-MY', fil: 'fil-PH'
};
// Country (ISO code) -> site language.
var COUNTRY = {
  HU: 'hu', DE: 'de', AT: 'de', CH: 'de', LI: 'de', FR: 'fr', LU: 'fr', MC: 'fr', BE: 'nl', NL: 'nl', ES: 'es', IT: 'it', SM: 'it', VA: 'it',
  PT: 'pt-PT', AO: 'pt-PT', MZ: 'pt-PT', BR: 'pt-BR', AD: 'ca', DK: 'da', NO: 'no', SE: 'sv', IS: 'is', FI: 'fi', PL: 'pl', CZ: 'cs',
  SK: 'sk', SI: 'sl', HR: 'hr', BA: 'hr', RS: 'sr', ME: 'sr', BG: 'bg', RO: 'ro', MD: 'ro', AL: 'sq', XK: 'sq', GR: 'el', CY: 'el',
  EE: 'et', LV: 'lv', LT: 'lt', RU: 'ru', BY: 'ru', KZ: 'ru', UA: 'uk', TR: 'tr', IL: 'he', IN: 'hi', GE: 'ka', AM: 'hy', JP: 'ja',
  KR: 'ko', CN: 'zh-Hans', SG: 'zh-Hans', TW: 'zh-Hant', HK: 'zh-Hant', MO: 'zh-Hant', TH: 'th', VN: 'vi', ID: 'id', MY: 'ms', PH: 'fil',
  US: 'en-US', CA: 'en-US', GB: 'en-GB', IE: 'en-GB', AU: 'en-GB', NZ: 'en-GB', ZA: 'en-GB',
  MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es',
  SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', PR: 'es',
  SA: 'ar', AE: 'ar', EG: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar', JO: 'ar', LB: 'ar', IQ: 'ar', SY: 'ar', KW: 'ar', QA: 'ar', BH: 'ar',
  OM: 'ar', YE: 'ar', LY: 'ar', SD: 'ar', PS: 'ar'
};
// Browser language tag (e.g. "hu-HU", "zh-TW", "nb") -> site language, or null.
function fromTag(tag) {
  if (!tag) return null;
  var t = String(tag).toLowerCase(), base = t.split('-')[0], region = (t.split('-')[1] || '').toUpperCase();
  if (base === 'en') return region === 'GB' || region === 'IE' || region === 'AU' || region === 'NZ' ? 'en-GB' : 'en-US';
  if (base === 'pt') return region === 'BR' ? 'pt-BR' : 'pt-PT';
  if (base === 'zh') return /hant|tw|hk|mo/.test(t) ? 'zh-Hant' : 'zh-Hans';
  if (base === 'nb' || base === 'nn' || base === 'no') return 'no';
  if (base === 'tl' || base === 'fil') return 'fil';
  if (base === 'iw') return 'he';
  if (base === 'bs' || base === 'sh') return 'hr';
  return SPEECH[base] ? base : null;
}
// The user's country from the IP address. Asked once; gives up after 1.5 s.
var countryAsked = null;
function askCountry() {
  if (countryAsked) return countryAsked;
  countryAsked = new Promise(function (resolve) {
    var done = false, ctl = 'AbortController' in window ? new AbortController() : null;
    var timer = setTimeout(function () { if (!done) { done = true; if (ctl) ctl.abort(); resolve(null); } }, 1500);
    fetch('https://api.country.is/', { signal: ctl ? ctl.signal : undefined, credentials: 'omit', referrerPolicy: 'no-referrer' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (!done) { done = true; clearTimeout(timer); resolve(j && j.country ? String(j.country).toUpperCase() : null); } })
      .catch(function () { if (!done) { done = true; clearTimeout(timer); resolve(null); } });
  });
  return countryAsked;
}

/* ---------- Spoken words ---------- */
var NOSPACE = { ja: 1, 'zh-Hans': 1, 'zh-Hant': 1, th: 1 };
var packLoads = {};
function loadPack(code) {
  if (window.VOICE_PACKS && window.VOICE_PACKS[code]) return Promise.resolve(window.VOICE_PACKS[code]);
  if (packLoads[code]) return packLoads[code];
  packLoads[code] = new Promise(function (resolve) {
    var sc = document.createElement('script');
    sc.src = 'js/voice/' + code + '.js';
    sc.onload = function () { sc.remove(); resolve((window.VOICE_PACKS || {})[code] || null); };
    sc.onerror = function () { sc.remove(); delete packLoads[code]; resolve(null); };
    document.head.appendChild(sc);
  });
  return packLoads[code];
}
function norm(s) { return String(s).toLowerCase().normalize('NFC').replace(/œ/g, 'oe').replace(/æ/g, 'ae'); }
function tokenize(s) { return norm(s).replace(/[^\p{L}\p{N}\p{M}]+/gu, ' ').trim().split(/\s+/).filter(Boolean); }
// Longest words first, so "chicken stock" wins over "chicken".
function buildIndex(pack, code) {
  var list = [];
  Object.keys(pack || {}).forEach(function (key) {
    pack[key].forEach(function (w) {
      var variants = [w];
      // Hungarian: a final a/e lengthens before a suffix (tészta -> tésztát)
      if (code === 'hu' && /[ae]$/.test(w)) variants.push(w.slice(0, -1) + (/a$/.test(w) ? 'á' : 'é'));
      variants.forEach(function (v) {
        list.push(NOSPACE[code] ? { key: key, text: norm(v).replace(/\s+/g, '') } : { key: key, tokens: tokenize(v) });
      });
    });
  });
  list.sort(function (a, b) {
    return NOSPACE[code] ? b.text.length - a.text.length
      : (b.tokens.length - a.tokens.length) || (b.tokens.join(' ').length - a.tokens.join(' ').length);
  });
  return list.filter(function (e) { return NOSPACE[code] ? e.text.length > 0 : e.tokens.length > 0; });
}
// Word endings: the last word may carry a suffix ("tojást", "Tomaten", "eggs").
// A changed ending counts too ("яйцо" / "яйца", "jajko" / "jajka").
function tokMatch(tok, word, isLast) {
  if (!isLast) return tok === word;
  if (word.length <= 3) return tok === word || (tok.length <= word.length + 2 && tok.indexOf(word) === 0);
  if (tok.indexOf(word) === 0) return true;
  var p = 0;
  while (p < tok.length && p < word.length && tok[p] === word[p]) p++;
  return p >= Math.max(3, word.length - 2) && tok.length >= word.length - 1 && tok.length <= word.length + 3;
}
function matchText(text, index, code) {
  var found = [];
  if (NOSPACE[code]) {
    var s = norm(text).replace(/\s+/g, ''), used = new Array(s.length);
    index.forEach(function (e) {
      var from = 0, at;
      while ((at = s.indexOf(e.text, from)) >= 0) {
        var free = true;
        for (var i = at; i < at + e.text.length; i++) if (used[i]) { free = false; break; }
        if (free) {
          for (var j = at; j < at + e.text.length; j++) used[j] = true;
          if (found.indexOf(e.key) < 0) found.push(e.key);
        }
        from = at + 1;
      }
    });
    return found;
  }
  var toks = tokenize(text), taken = new Array(toks.length);
  index.forEach(function (e) {
    var n = e.tokens.length;
    for (var i = 0; i + n <= toks.length; i++) {
      var ok = true;
      for (var k = 0; k < n; k++) {
        if (taken[i + k] || !tokMatch(toks[i + k], e.tokens[k], k === n - 1)) { ok = false; break; }
      }
      if (ok) {
        for (var m = 0; m < n; m++) taken[i + m] = true;
        if (found.indexOf(e.key) < 0) found.push(e.key);
      }
    }
  });
  return found;
}

/* ---------- Panel ---------- */
var SILENCE_MS = 2500; // this long without new speech after a hit = "done talking"
var opts = null, ui = null;

function setup() {
  var $ = function (id) { return document.getElementById('fv-' + id); };
  var t = opts.t;
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var panel = document.getElementById('fridge-panel');
  var t0 = performance.now();

  var code = 'en-US', speech = 'en-US', index = [], ready = null;
  var pantry = [];                       // ingredient keys, in the order they were said
  var transcript = [], interim = '';
  var rec = null, want = false, fatal = false, silence = null, wakeLock = null, prevFinal = '';
  var sessionHit = false;

  /* ----- debug log (closed by default) ----- */
  var logLines = [];
  function log(kind, msg) {
    var ms = ((performance.now() - t0) / 1000).toFixed(2);
    logLines.push({ ms: ms, kind: kind, msg: msg, at: new Date() });
    if (logLines.length > 400) logLines.shift();
    var el = $('log'), line = document.createElement('div'), ts = document.createElement('span'), body = document.createElement('span');
    ts.className = 't'; ts.textContent = ms + 's ';
    if (kind === 'err') body.className = 'err';
    if (kind === 'final') body.className = 'fin';
    body.textContent = '[' + kind + '] ' + msg;
    line.appendChild(ts); line.appendChild(body); el.appendChild(line);
    while (el.childNodes.length > 400) el.removeChild(el.firstChild);
  }

  /* ----- problems: only then are the checks and the language picker shown ----- */
  function pill(label, value, ok) {
    var p = document.createElement('span'), d = document.createElement('span'), l = document.createElement('span'), b = document.createElement('b');
    p.className = 'pill'; d.className = 'dot ' + (ok ? 'ok' : 'bad'); l.textContent = label + ': '; b.textContent = value;
    l.appendChild(b); p.appendChild(d); p.appendChild(l); return p;
  }
  function problem(msg, showLang) {
    var b = $('banner');
    b.textContent = msg || ''; b.hidden = !msg;
    $('settings').hidden = !msg;
    $('langWrap').hidden = !showLang;
    var st = $('status'); st.textContent = '';
    if (msg) {
      var proto = location.protocol.replace(':', ''), secure = window.isSecureContext && proto !== 'file';
      st.appendChild(pill('Speech recognition', SR ? 'supported' : 'not supported', !!SR));
      st.appendChild(pill('Page', proto + (secure ? ' (secure)' : ' (not secure)'), secure));
      st.appendChild(pill('Language', speech, !showLang));
    }
  }
  function langName(c) {
    var hit = opts.langs.filter(function (l) { return l && l[0] === c; })[0];
    return hit ? hit[1] : c;
  }
  // The picker lists the languages there are spoken words for.
  var sel = $('lang');
  sel.innerHTML = '';
  opts.langs.forEach(function (l) {
    if (!l || !SPEECH[l[0]]) return;
    var o = document.createElement('option'); o.value = l[0]; o.textContent = l[1]; sel.appendChild(o);
  });
  sel.addEventListener('change', function () {
    useLang(sel.value, true).then(function () { problem(''); if (SR) startListening(); });
  });

  function useLang(c, picked) {
    code = c; speech = SPEECH[c] || 'en-US'; sel.value = c;
    log('info', 'language → ' + c + ' (' + speech + ')' + (picked ? ' picked by hand' : ''));
    return loadPack(c).then(function (pack) {
      if (!pack && c !== 'en-US') { log('err', 'no spoken words for ' + c + ', using English'); return useLang('en-US'); }
      index = buildIndex(pack, c);
      log('info', index.length + ' spoken words loaded');
      renderChips();
    });
  }
  // IP country first, then the browser, then English (US).
  function resolveLang() {
    return askCountry().then(function (country) {
      var fromIp = country ? COUNTRY[country] : null;
      var browser = (navigator.languages || [navigator.language]).map(fromTag).filter(Boolean)[0] || null;
      log('info', 'country ' + (country || 'unknown') + ' → ' + (fromIp || '–') + ', browser ' + (navigator.language || '–') + ' → ' + (browser || '–'));
      var c = fromIp || browser || 'en-US';
      var supported = !!(fromIp || browser) || !country;
      return useLang(c).then(function () {
        // A country whose language isn't on the list: English, and the picker shows.
        if (country && !fromIp && !browser) {
          var where = country;
          try { where = new Intl.DisplayNames([document.documentElement.lang || 'en'], { type: 'region' }).of(country) || country; } catch (e) {}
          problem(t('fvLangUnavailable', { x: where }), true);
        }
        return supported;
      });
    });
  }

  /* ----- drawing ----- */
  function setState(text, live) {
    $('state').textContent = text;
    ['mic', 'micMini'].forEach(function (id) {
      var m = $(id);
      m.classList.toggle('live', !!live);
      m.setAttribute('aria-label', t(live ? 'fvStop' : 'fvStart'));
    });
  }
  function setHearing(on) { $('speechDot').classList.toggle('on', !!on); }
  function renderTranscript() {
    var el = $('transcript'); el.textContent = '';
    if (!transcript.length && !interim) {
      var e = document.createElement('span'); e.className = 'empty'; e.textContent = t('fvNothingYet'); el.appendChild(e); return;
    }
    el.appendChild(document.createTextNode(transcript.join(' ') + ' '));
    if (interim) { var s = document.createElement('span'); s.className = 'interim'; s.textContent = interim; el.appendChild(s); }
    el.scrollTop = el.scrollHeight;
  }
  function chip(key, ghost) {
    var c = document.createElement('span');
    c.className = 'chip' + (ghost ? ' ghost' : '');
    var n = document.createElement('span');
    n.textContent = opts.nameOf(key) + (ghost ? '…' : '');
    c.appendChild(n);
    if (!ghost) {
      var x = document.createElement('button');
      x.type = 'button'; x.textContent = '×';
      x.setAttribute('aria-label', t('fvRemove', { x: n.textContent }));
      x.addEventListener('click', function () {
        pantry.splice(pantry.indexOf(key), 1);
        log('info', 'removed ' + key);
        renderChips(); changed('edit');
      });
      c.appendChild(x);
    }
    return c;
  }
  function renderChips() {
    ['chips', 'chipsMini'].forEach(function (id) {
      var el = $(id); el.textContent = '';
      pantry.forEach(function (k) { el.appendChild(chip(k)); });
    });
    var ghosts = interim ? matchText(interim, index, code).filter(function (k) { return pantry.indexOf(k) < 0; }) : [];
    ghosts.forEach(function (k) { $('chips').appendChild(chip(k, true)); });
    if (!pantry.length && !ghosts.length) {
      var e = document.createElement('span'); e.className = 'note'; e.textContent = t('fvNothingYet'); $('chips').appendChild(e);
    }
    $('clearBtn').hidden = !pantry.length;
  }
  function changed(why) { opts.onChange(pantry.slice(), why); }

  function addFrom(text, source) {
    var keys = matchText(text, index, code), added = keys.filter(function (k) { return pantry.indexOf(k) < 0; });
    added.forEach(function (k) { pantry.push(k); });
    log('match', '“' + text + '” → ' + (keys.length ? keys.join(', ') : 'no match'));
    if (added.length) sessionHit = true;
    renderChips();
    return added.length;
  }

  /* ----- small / large ----- */
  function minimize(on) {
    panel.classList.toggle('is-mini', !!on);
    $('full').hidden = !!on;
    $('mini').hidden = !on;
  }

  /* ----- recognition ----- */
  function armSilence() {
    clearTimeout(silence);
    if (pantry.length && sessionHit) silence = setTimeout(function () { log('info', 'silence → done talking'); finish(); }, SILENCE_MS);
  }
  function makeRec() {
    var r = new SR();
    r.lang = speech; r.continuous = true; r.interimResults = true; r.maxAlternatives = 1;
    r.onstart = function () { log('event', 'start (' + r.lang + ')'); setState(t('fvListening'), true); };
    r.onspeechstart = function () { log('event', 'speechstart'); setHearing(true); };
    r.onspeechend = function () { log('event', 'speechend'); setHearing(false); };
    r.onresult = function (e) {
      var live = '';
      for (var i = e.resultIndex; i < e.results.length; i++) {
        var res = e.results[i], txt = res[0].transcript.trim();
        if (res.isFinal) { log('final', '“' + txt + '”'); handleFinal(txt); }
        else live += ' ' + txt;
      }
      interim = live.trim();
      renderTranscript(); renderChips();
      armSilence();
    };
    r.onerror = function (e) {
      log('err', 'error: ' + e.error + (e.message ? ' – ' + e.message : ''));
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { fatal = true; problem(t('fvMicBlocked')); }
      else if (e.error === 'audio-capture' || e.error === 'network') { fatal = true; problem(t('fvMicError')); }
      else if (e.error === 'language-not-supported') { fatal = true; problem(t('fvLangUnavailable', { x: langName(code) }), true); }
    };
    // No automatic restart (each restart beeps on phones): a stop with something
    // said means "done"; otherwise the mic waits for a tap.
    r.onend = function () {
      log('event', 'end');
      setHearing(false); interim = ''; renderTranscript(); renderChips();
      rec = null;
      if (want && !fatal && pantry.length && sessionHit) { finish(); return; }
      stopUI();
    };
    return r;
  }
  function handleFinal(txt) {
    // Android Chrome may repeat earlier text in a later result: keep the new part only.
    var lt = txt.toLowerCase(), lp = prevFinal.toLowerCase(), delta = txt;
    if (lp && lt.indexOf(lp) === 0) delta = txt.slice(prevFinal.length).trim();
    else if (lp && lp.indexOf(lt) === 0) delta = '';
    prevFinal = txt;
    if (!delta) return;
    transcript.push(delta);
    addFrom(delta, 'voice');
  }
  function startListening() {
    if (!SR || want) return;
    want = true; fatal = false; prevFinal = ''; sessionHit = false;
    minimize(false);
    setState(t('fvStarting'), true);
    try { if ('wakeLock' in navigator) navigator.wakeLock.request('screen').then(function (w) { wakeLock = w; }).catch(function () {}); } catch (e) {}
    try { rec = makeRec(); rec.start(); }
    catch (e) { log('err', 'start() threw: ' + e); stopUI(); }
  }
  function stopListening() {
    want = false; clearTimeout(silence);
    if (rec) { try { rec.stop(); } catch (e) {} }
    stopUI();
  }
  function stopUI() {
    want = false; clearTimeout(silence); setHearing(false);
    setState(pantry.length ? t('fvTapToAdd') : t('fvTapToStart'), false);
    if (wakeLock) { wakeLock.release().catch(function () {}); wakeLock = null; }
  }
  // Done talking: stop, shrink the panel, show the recipes.
  function finish() {
    stopListening();
    if (!pantry.length) return;
    minimize(true);
    changed('finish');
  }

  /* ----- controls ----- */
  $('mic').addEventListener('click', function () { if (want) { if (pantry.length) finish(); else stopListening(); } else startListening(); });
  $('micMini').addEventListener('click', function () { ready.then(startListening); });
  $('expand').addEventListener('click', function () { minimize(false); });
  $('close').addEventListener('click', function () { api.close(); });
  function addTyped() {
    var v = $('typed').value.trim(); if (!v) return;
    transcript.push(v); renderTranscript();
    $('typed').value = '';
    if (addFrom(v, 'typed')) changed('finish');
  }
  $('addBtn').addEventListener('click', addTyped);
  $('typed').addEventListener('keydown', function (e) { if (e.key === 'Enter') addTyped(); });
  $('clearBtn').addEventListener('click', function () {
    pantry = []; transcript = []; interim = '';
    renderChips(); renderTranscript(); minimize(false); changed('clear');
    log('info', 'cleared');
  });
  $('copyLog').addEventListener('click', function () {
    var text = logLines.map(function (l) { return l.ms + 's [' + l.kind + '] ' + l.msg; }).join('\n');
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
  });
  $('clearLog').addEventListener('click', function () { logLines = []; $('log').textContent = ''; });

  log('info', 'UA: ' + navigator.userAgent);
  log('info', 'SpeechRecognition: ' + (window.SpeechRecognition ? 'yes' : window.webkitSpeechRecognition ? 'webkit' : 'missing') + ' · secure=' + window.isSecureContext);

  ready = resolveLang();
  var api = {
    open: function () {
      panel.hidden = false; minimize(false);
      renderChips(); renderTranscript();
      if (!SR) { problem(t('fvNoSR')); $('mic').disabled = true; $('micMini').disabled = true; setState(t('fvNoSRShort'), false); return; }
      if (!window.isSecureContext) { problem(t('fvMicBlocked')); }
      setState(t('fvStarting'), true);
      ready.then(function (ok) { if (ok !== false) startListening(); else stopUI(); });
    },
    stop: function () { if (want) stopListening(); },
    close: function () { stopListening(); panel.hidden = true; opts.onClose(); },
    redraw: function () { renderChips(); renderTranscript(); if (!want) stopUI(); else setState(t('fvListening'), true); }
  };
  return api;
}

window.Fridge = {
  // opts: { t, nameOf(key), langs, onChange(keys, why), onClose() }
  init: function (o) { opts = o; },
  open: function () { if (!ui) ui = setup(); ui.open(); },
  stop: function () { if (ui) ui.stop(); },
  redraw: function () { if (ui) ui.redraw(); },
  // For tests: the matcher on its own.
  _match: function (text, pack, code) { return matchText(text, buildIndex(pack, code), code); }
};
})();
