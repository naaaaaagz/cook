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
  var theme = read().theme;
  if (typeof document !== 'undefined' && ['light', 'dark', 'system'].indexOf(theme) >= 0) {
    document.documentElement.setAttribute('data-theme', theme);
  }
})();
