/* Tab-scoped state for the separate static pages. No cookies or server writes. */
(function () {
  'use strict';
  var key = 'cook:page-session:v1:' + location.pathname.replace(/[^/]*$/, '');
  function read() {
    try {
      var text = sessionStorage.getItem(key);
      if (!text || text.length > 500000) return {};
      var value = JSON.parse(text);
      return value && value.version === 1 && value.data && typeof value.data === 'object' ? value.data : {};
    } catch (e) { return {}; }
  }
  function save(data) {
    try { sessionStorage.setItem(key, JSON.stringify({ version: 1, data: data })); return true; }
    catch (e) { return false; }
  }
  window.CookSession = { read: read, save: save };
  // This file loads in <head>: apply the saved theme before the page is drawn, so a dark
  // theme does not flash light first. app.js applies the same value again later.
  // A new tab has no saved choices yet: use what "Stay signed in" kept, if anything.
  var dir = location.pathname.replace(/[^/]*$/, ''), saved = read();
  function kept(name) { try { return localStorage.getItem('cook:' + name + ':v1:' + dir); } catch (e) { return null; } }
  var theme = saved.theme || kept('theme');
  if (typeof document !== 'undefined' && ['light', 'dark', 'system'].indexOf(theme) >= 0) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  // The language pack loads here, before the page is drawn, so it never shows English first.
  // The page stays hidden until app.js has applied the language (at most 3 seconds).
  var language = typeof saved.lang === 'string' ? saved.lang : kept('lang');
  window.CookSession.earlyLang = null;
  if (typeof document !== 'undefined' && typeof language === 'string' && language !== 'en-US' &&
      /^[a-z]{2,3}(-[A-Za-z]{2,4})?$/.test(language)) {
    window.CookSession.earlyLang = language;
    document.documentElement.setAttribute('lang', language);
    if (['ar', 'he'].indexOf(language) >= 0) document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('i18n-wait');
    setTimeout(function () { document.documentElement.classList.remove('i18n-wait'); }, 3000);
    document.write('<script src="js/i18n/' + language + '.js"><\/script>');
  }
})();
