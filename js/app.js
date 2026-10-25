(function () {
  'use strict';

  // ---------- Text: English (US) is built in, other languages are in js/i18n/ ----------
  var STRINGS = {
    en: {
      options: 'Options',
      theme: 'Theme',
      themeSystem: 'System',
      themeLight: 'Light',
      themeDark: 'Dark',
      close: 'Close',
      save: 'Save',
      share: 'Share',
      language: 'Language',
      kitchenLayout: 'Kitchen layout',
      setupLayout: 'Set up kitchen layout',
      editLayout: 'Edit kitchen layout',
      seeRecipe: 'See recipe →',
      equipmentNeed: 'Equipment you need:',
      setupLayoutMap: 'Set up kitchen layout for Map view',
      editLayoutMap: 'Edit kitchen layout for Map view',
      units: 'Units',
      metric: 'Metric',
      imperial: 'Imperial',
      takes: 'Takes {x}',
      timesUp: "⏰ Time's up: {x}",
      perServingNote: 'per person',
      fatSat: 'Fat / Saturated',
      ingCat_meat: 'Meat',
      ingCat_egg: 'Eggs',
      ingCat_dairy: 'Dairy',
      ingCat_grain: 'Pasta, rice & grains',
      ingCat_bread: 'Bread',
      ingCat_legume: 'Beans',
      ingCat_veg: 'Vegetables',
      ingCat_fruit: 'Fruit',
      ingCat_nuts: 'Nuts & seeds',
      ingCat_herbs: 'Herbs',
      ingCat_spices: 'Spices',
      ingCat_sauces: 'Sauces & condiments',
      ingCat_sweet: 'Sweeteners',
      ingCat_alcohol: 'Alcohol',
      ingCat_baking: 'Baking',
      ingCat_oil: 'Oil & fat',
      ingCat_water: 'Water',
      layoutHelp: 'Drag to move, drag the corner to resize. Things can only overlap the countertop.',
      cancel: 'Cancel',
      rotateScreen: 'Rotate the screen',
      back: 'Back',
      pickRecipe: 'Pick a recipe',
      filters: 'Filters',
      noResults: 'No recipes match these filters.',
      mostPopular: 'Most popular',
      cat_soup: 'Soup',
      cat_main: 'Main',
      cat_dessert: 'Dessert',
      cat_side: 'Side dish',
      readInstead: 'Read instead',
      toggleTheme: 'Switch light / dark',
      min: 'min',
      hours: '{h} h {m} min',
      diet_vegan: 'Vegan',
      diet_veg: 'Vegetarian',
      diet_lacto: 'Lacto-Vegetarian',
      diet_ovo: 'Ovo-Vegetarian',
      diet_lactoOvo: 'Lacto-Ovo Vegetarian',
      diet_pesc: 'Pescatarian',
      meat: 'Meat',
      pork: 'Pork',
      fish: 'Fish',
      containsLabel: 'Contains',
      kcal: 'Energy',
      carbs: 'Carbohydrate',
      protein: 'Protein',
      fat: 'Fat',
      satFat: 'of which saturated',
      fiber: 'Fiber',
      salt: 'Salt',
      carbsShort: 'carbs',
      proteinShort: 'protein',
      perServing: 'per person',
      perServing_jar: 'per jar',
      perServing_batch: 'per batch',
      perPerson: 'Per person (estimated)',
      perPerson_jar: 'Per jar (estimated)',
      perPerson_batch: 'Per batch (estimated)',
      guideMode: 'Do you need guidance for every single step?',
      modeDetailed: 'Detail every step',
      modeQuick: "I know what I'm doing",
      howMany: 'For how many people?',
      howMany_jar: 'How many jars?',
      howMany_batch: 'How many batches?',
      adults: 'Adults',
      adults_jar: 'Jars',
      adults_batch: 'Batches',
      children: 'Children',
      kidsNote: 'Children get half a portion.',
      fewer: 'Fewer',
      more: 'More',
      hazard_alcohol: 'alcohol',
      hazard_spicy: 'hot spices',
      hazard_rawEgg: 'raw egg',
      kidsOmitted: 'this recipe has {x}, we have omitted it in the recipe options below.',
      kidsSure: 'this recipe has {x}. Are you sure you want to serve this for kids?',
      warning: 'Warning:',
      and: 'and',
      yourWay: 'Do it your way!',
      ingredients: 'Ingredients',
      ingredientsFor: 'Ingredients for {x}',
      n_adults: '{n} adults',
      one_adult: '1 adult',
      n_children: '{n} children',
      one_child: '1 child',
      n_jar: '{n} jars',
      one_jar: '1 jar',
      n_batch: '{n} batches',
      one_batch: '1 batch',
      addShopping: 'Add to shopping list',
      gotEverything: "I got everything, let's start!",
      exit: 'Exit',
      giveUp: 'You want to give up?',
      no: 'No',
      yes: 'Yes',
      jumpBottom: 'Jump to the bottom',
      elapsed: 'Time',
      timeLeft: 'Time left',
      startNow: 'Start now',
      stepsDone: '{d} of {n} steps done',
      mapView: 'Map view',
      listView: 'List view',
      noLayout: 'No kitchen layout set up. Do it before your next cooking!',
      start: 'Start',
      done: 'Done!',
      doneNext: 'Done, Next!',
      chooseFirst: 'Choose before you start',
      method: 'Method',
      cookingVersion: "This is the version you're cooking.",
      youAreHere: 'You are here now!',
      tapInfo: 'Tap for info',
      resizeSeam: 'Drag to resize both',
      aboutTime: 'about {t}',
      doneWhen: 'Done when: ',
      left: 'left',
      over: 'over',
      newThing: 'New thing to do!',
      dontOverdo: "Don't overdo!",
      ingredientsHere: 'Ingredients here',
      tip: 'Tip',
      tipPlaceholder: 'Tip placeholder',
      dismissTip: 'Dismiss tip',
      finishedTitle: 'You did it! Bon appétit!',
      howTaste: 'How does it taste?',
      stars: '{n} of 5 stars',
      star1: 'total fail',
      star2: 'had worse',
      star3: 'room for improvement',
      star4: 'pretty good',
      star5: 'am I chef now?',
      uploadPhoto: 'Upload photo',
      backHome: 'Back to home',
      skipStep: 'Skip this step',
      tellFridge: "Tell me what's in the fridge (voice recognition)",
      justRecipes: 'Just take me to the recipes',
      backToRecipes: 'Back to recipes',
      moveHint: 'arrow keys move, Alt + arrow keys resize',
      moveArea: 'Move {a} (drag, or use arrow keys)',
      stove: 'Stove',
      oven: 'Oven',
      countertop: 'Countertop',
      board: 'Cutting board',
      sink: 'Kitchen sink',
      fridge: 'Fridge',
      freezer: 'Freezer',
      me: 'Me',
      allergen_Celery: 'Celery',
      allergen_Crustaceans: 'Crustaceans',
      allergen_Molluscs: 'Molluscs',
      allergen_Peanuts: 'Peanuts',
      allergen_Egg: 'Egg',
      allergen_Fish: 'Fish',
      allergen_Gluten: 'Gluten',
      allergen_Milk: 'Milk',
      allergen_Mustard: 'Mustard',
      allergen_Nuts: 'Nuts',
      allergen_Sesame: 'Sesame',
      allergen_Soy: 'Soy',
      allergen_Sulphites: 'Sulfites',
      cuisine_Italian: 'Italian',
      cuisine_Asian: 'Asian',
      cuisine_Greek: 'Greek',
      cuisine_French: 'French',
      cuisine_Mexican: 'Mexican',
      cuisine_American: 'American',
      cuisine_Indian: 'Indian',
      'cuisine_Middle Eastern': 'Middle Eastern',
      'cuisine_Latin American': 'Latin American',
      cuisine_African: 'African'
    }
  };
  // Languages: English (US) first (the default), then the most used ones, then
  // the rest by name. Each file in js/i18n/<code>.js sets window.I18N[code] =
  // { strings: UI texts, names: ingredient names by image key (from the
  // ingredients sheet), uk: US -> UK words (English (UK) only) }.
  // Recipe texts (steps, notes) are English for now; English (UK) swaps words.
  var LANGS = [
    ['en-US', 'English (US)'], ['en-GB', 'English (UK)'], ['de', 'Deutsch'], ['es', 'Español'], ['fr', 'Français'], ['it', 'Italiano'],
    null,
    ['sq', 'Shqip'], ['ar', 'العربية'], ['hy', 'Հայերեն'], ['bg', 'Български'], ['ca', 'Català'], ['cs', 'Čeština'],
    ['da', 'Dansk'], ['et', 'Eesti'], ['el', 'Ελληνικά'], ['fil', 'Filipino'], ['hr', 'Hrvatski'], ['id', 'Bahasa Indonesia'],
    ['is', 'Íslenska'], ['ka', 'ქართული'], ['he', 'עברית'], ['hi', 'हिन्दी'], ['lv', 'Latviešu'], ['lt', 'Lietuvių'],
    ['hu', 'Magyar'], ['ms', 'Bahasa Melayu'], ['nl', 'Nederlands'], ['no', 'Norsk'], ['pl', 'Polski'],
    ['pt-PT', 'Português (Portugal)'], ['pt-BR', 'Português (Brasil)'], ['ro', 'Română'], ['ru', 'Русский'],
    ['sk', 'Slovenčina'], ['sl', 'Slovenščina'], ['sr', 'Srpski'], ['fi', 'Suomi'], ['sv', 'Svenska'],
    ['th', 'ไทย'], ['vi', 'Tiếng Việt'], ['tr', 'Türkçe'], ['uk', 'Українська'], ['ja', '日本語'],
    ['zh-Hans', '中文（简体）'], ['zh-Hant', '中文（繁體）'], ['ko', '한국어']
  ];
  var RTL = ['ar', 'he'];
  window.I18N = window.I18N || {};
  var lang = 'en-US';
  function pack() { return window.I18N[lang] || {}; }

  function t(key, vars) {
    var s = (pack().strings || {})[key];
    if (s === undefined) s = STRINGS.en[key];
    if (s === undefined) s = key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', function () { return vars[k]; }); });
    return s;
  }

  function applyStrings() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-label')));
    });
  }

  // English (UK): US words in recipe texts become UK ones, keeping capitals.
  var ukRe = null;
  function L(text) {
    var uk = pack().uk;
    if (!uk || !text) return text;
    if (!ukRe) {
      ukRe = new RegExp('\\b(' + Object.keys(uk).sort(function (a, b) { return b.length - a.length; })
        .map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b', 'gi');
    }
    return String(text).replace(ukRe, function (m) {
      var to = uk[m.toLowerCase()];
      return m.charAt(0) === m.charAt(0).toUpperCase() ? to.charAt(0).toUpperCase() + to.slice(1) : to;
    });
  }
  // A recipe's name in the chosen language. Well-known names (Spaghetti
  // Carbonara, Bibimbap, …) have no translation and stay as they are.
  function recipeName(r) {
    return (pack().recipes || {})[r.id] || L(r.name);
  }
  // An ingredient's name in the chosen language (from the ingredients sheet), else the recipe's own.
  function ingName(key, fallback) {
    var n = (pack().names || {})[key];
    return n || L(fallback);
  }
  // Recipe data keeps its English text in "_field"; this (re)writes the shown text.
  function localizeObj(o, fields) {
    fields.forEach(function (f) {
      if (!(('_' + f) in o)) { if (o[f] === undefined) return; o['_' + f] = o[f]; }
      o[f] = L(o['_' + f]);
    });
  }
  function localizeBuilt(b) {
    b.ingredients.forEach(function (i) {
      localizeObj(i, ['note']);
      if (!('_name' in i)) i._name = i.name;
      i.name = ingName(i.key || i.id, i._name);
    });
    b.steps.forEach(function (s) {
      localizeObj(s, ['title', 'text', 'doneWhen']);
      (s.parts || []).forEach(function (p) { localizeObj(p, ['title', 'text']); });
      (s.ings || []).forEach(function (i) {
        if (!('_label' in i)) i._label = i.label;
        var n = (pack().names || {})[i.key || i.id];
        i.label = n || (i._label ? L(i._label) : i._label);
      });
    });
    return b;
  }
  window.RECIPES.forEach(function (r) {
    var build = r.build;
    r.build = function (c) { return localizeBuilt(build(c)); };
  });

  var $ = function (id) { return document.getElementById(id); };
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  // Translations are plain text, including when used inside generated HTML.
  function ht(key, vars) { return esc(t(key, vars)); }

  // In memory only: this is a one-shot test, nothing is stored on the device.
  var state = {
    screen: 'recipes',
    layout: null,
    layoutSaved: false,
    recipe: null,
    choices: null,
    built: null,
    mapView: false, // desktop toggle
    filters: { starred: true, cat: [], cuisine: [] }, // starred: "Most popular" filter, on by default for now
    picks: {}, // the options picked per recipe, shared by "Read instead", the recipe page and cooking
    units: 'metric'
  };

  // ---------- Screens ----------
  // Every screen change is a browser history entry, so Back (in the page or the
  // browser) goes to the previous screen. Each screen has its own address in the
  // same page: index.html (welcome, step 1), #start (step 2), #fridge, #recipes
  // (recipe list), #recipe/<id>, #cook/<id> and #kitchen.
  var SCREENS = ['welcome', 'start', 'fridge', 'recipes', 'layout', 'details', 'cook'];
  function screenUrl(name) {
    var base = location.pathname + location.search;
    if (name === 'details' && state.recipe) return base + '#recipe/' + encodeURIComponent(state.recipe.id);
    if (name === 'cook' && state.recipe) return base + '#cook/' + encodeURIComponent(state.recipe.id);
    if (name === 'layout') return base + '#kitchen';
    if (name === 'start' || name === 'fridge' || name === 'recipes') return base + '#' + name;
    return base;
  }
  // The address tells which screen (and recipe) to show.
  function route() {
    var h = location.hash.slice(1);
    try { h = decodeURIComponent(h); } catch (e) { h = ''; }
    var m = h.match(/^(recipe|cook)\/(.+)$/);
    if (h === '') return { screen: 'welcome' };
    if (h === 'kitchen') return { screen: 'layout' };
    if (h === 'start' || h === 'fridge') return { screen: h };
    var r = m && window.RECIPES.filter(function (x) { return x.id === m[2]; })[0];
    if (r) return { screen: m[1] === 'cook' ? 'cook' : 'details', recipe: r };
    return { screen: 'recipes' };
  }
  // The browser tab names the screen too.
  function updateTitle() {
    var name = state.screen;
    document.title = (name === 'details' || name === 'cook') && state.recipe ? recipeName(state.recipe) + ' \u2013 Cook'
      : name === 'layout' ? t('kitchenLayout') + ' \u2013 Cook' : 'Cook';
  }
  function show(name, fromHistory) {
    // The microphone must not keep listening after the fridge screen is left.
    if (state.screen === 'fridge' && name !== 'fridge') window.Fridge.stop();
    state.screen = name;
    SCREENS.forEach(function (s) { $('screen-' + s).hidden = s !== name; });
    $('btn-options').hidden = name === 'layout';
    if (name !== 'layout') leaveFullscreen();
    if (!fromHistory) history.pushState({ screen: name }, '', screenUrl(name));
    updateTitle();
    window.scrollTo(0, 0);
    if (typeof updateJump === 'function') setTimeout(updateJump, 0);
    if (name === 'details') layoutEquipment();
    if (name === 'fridge') window.Fridge.open(lang);
  }

  window.addEventListener('popstate', function () {
    var where = route(), target = where.screen;
    if (cook && state.screen === 'cook' && target !== 'cook' && cookFinished()) {
      // All done: Back simply goes home.
      stopCooking();
      show('recipes');
      return;
    }
    if (cook && state.screen === 'cook' && target !== 'cook') {
      // Going back while cooking: stay for now and ask first.
      history.pushState({ screen: 'cook' }, '', screenUrl('cook'));
      askGiveUp();
      return;
    }
    // A cook can't be picked up again from history: show its recipe page instead.
    if (target === 'cook' && !cook) {
      if (where.recipe) { openDetails(where.recipe, true); history.replaceState({ screen: 'details' }, '', screenUrl('details')); }
      else show('recipes', true);
      return;
    }
    if (target === 'details' && where.recipe !== state.recipe) { openDetails(where.recipe, true); return; }
    if (target === 'layout') { openLayout(true); return; }
    show(target, true);
  });

  document.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) {
      stopCooking();
      show(go.getAttribute('data-go'));
    }
    if (e.target.closest('[data-back]')) history.back();
  });

  // Dialogs close when you click outside them.
  document.querySelectorAll('dialog').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', function () { document.documentElement.classList.remove('no-scroll'); });
  });
  function openDialog(d) {
    document.documentElement.classList.add('no-scroll');
    if (!d.open) d.showModal();
  }

  // ---------- Options: theme, language, kitchen layout ----------
  $('btn-options').addEventListener('click', function () { openDialog($('options-dialog')); });
  document.querySelectorAll('input[name="theme"]').forEach(function (r) {
    r.addEventListener('change', function () { document.documentElement.setAttribute('data-theme', r.value); });
  });
  document.querySelectorAll('input[name="units"]').forEach(function (r) {
    r.addEventListener('change', function () {
      state.units = r.value;
      if (state.recipe) updateDetails();
      if (cook) {
        redrawCooking();
      }
    });
  });
  (function () {
    var sel = $('lang-select');
    sel.innerHTML = LANGS.map(function (l) {
      return l ? '<option value="' + l[0] + '">' + l[1] + '</option>' : '<option disabled>──────────</option>';
    }).join('');
    sel.value = lang;
  })();
  var requestedLang = lang;
  var languageLoads = Object.create(null);
  function setLang(code) {
    if (!LANGS.some(function (entry) { return entry && entry[0] === code; })) return;
    requestedLang = code;
    if (code === 'en-US' || window.I18N[code]) { applyLang(code); return; }
    if (languageLoads[code]) return;
    var sc = document.createElement('script');
    languageLoads[code] = sc;
    sc.src = 'js/i18n/' + code + '.js';
    sc.onload = function () {
      delete languageLoads[code];
      sc.remove();
      if (requestedLang === code && window.I18N[code]) applyLang(code);
    };
    sc.onerror = function () {
      delete languageLoads[code];
      sc.remove();
      if (requestedLang === code) { requestedLang = lang; $('lang-select').value = lang; }
    };
    document.head.appendChild(sc);
  }
  function applyLang(code) {
    lang = code;
    $('lang-select').value = code;
    ukRe = null;
    document.documentElement.dir = RTL.indexOf(code) >= 0 ? 'rtl' : 'ltr';
    applyStrings();
    refreshTexts();
  }
  function redrawCooking() {
    closePop();
    Object.keys(cook.els).forEach(function (id) { cook.els[id].remove(); });
    Object.keys(cook.notifs).forEach(function (id) { cook.notifs[id].remove(); });
    cook.els = {};
    cook.notifs = {};
    $('cook-map').innerHTML = '';
    render();
    tick();
  }
  // Redraws everything that shows text in the new language.
  function refreshTexts() {
    updateTitle();
    renderFilters();
    renderRecipes();
    starLabels.forEach(function (l, i) { l.querySelector('input').setAttribute('aria-label', t('stars', { n: i + 1 }) + ': ' + t('star' + (i + 1))); });
    if (state.built) localizeBuilt(state.built);
    if (state.recipe) {
      $('det-name').textContent = recipeName(state.recipe);
      if (state.screen === 'details') { renderOptions(); updateDetails(); }
    }
    if (state.screen === 'layout') buildCanvas();
    if (cook) {
      localizeBuilt({ ingredients: cook.ingredients, steps: cook.steps });
      $('cook-name').textContent = recipeName(state.recipe);
      redrawCooking();
    }
    if (reading && $('read-dialog').open) { $('read-title').textContent = recipeName(reading.recipe); renderRead(); }
  }
  $('lang-select').addEventListener('change', function (e) { setLang(e.target.value); });
  $('btn-layout').addEventListener('click', function () {
    $('options-dialog').close();
    openLayout();
  });
  $('btn-layout-home').addEventListener('click', openLayout);

  // ---------- Metric / imperial ----------
  // Amounts are stored metric; with "Imperial" chosen, grams, millilitres,
  // litres, centimetres and °C in any text are converted and rounded.
  function quarter(x) {
    var q = Math.max(0.25, Math.round(x * 4) / 4), whole = Math.floor(q);
    return (whole || '') + ({ 0.25: '¼', 0.5: '½', 0.75: '¾' }[q - whole] || '');
  }
  function toImperial(n, unit) {
    if (unit === '°C') return Math.round((n * 9 / 5 + 32) / 5) * 5 + ' °F';
    if (unit === 'cm') return quarter(n / 2.54) + ' in';
    if (unit === 'kg') n *= 1000, unit = 'g';
    if (unit === 'L') n *= 1000, unit = 'ml';
    if (unit === 'g') { var oz = n / 28.35; return oz >= 16 ? quarter(oz / 16) + ' lb' : quarter(oz) + ' oz'; }
    if (n >= 950) return quarter(n / 946) + ' qt';
    if (n >= 60) return quarter(n / 240) + ' cup';
    return quarter(n / 15) + ' tbsp';
  }
  function units(text) {
    if (state.units !== 'imperial' || !text) return text;
    var num = '(\\d+(?:\\.\\d+)?)';
    var re = new RegExp(num + '(?:(\\s*(?:to|-|–)\\s*)' + num + ')?\\s*(°C|kg|g|ml|L|cm)\\b', 'g');
    return String(text).replace(re, function (m, a, sep, b, u) {
      if (b) return toImperial(Number(a), u).replace(/\s.*$/, '') + sep + toImperial(Number(b), u);
      return toImperial(Number(a), u);
    });
  }

  // ---------- Written-out recipe ("Read instead") ----------
  // Written from the same recipe data as the cooking guide, so it follows the
  // options picked here, on the recipe page or before cooking. While cooking it
  // shows the version being cooked and the options can't be changed.
  var reading = null;

  // When each step can start if everything runs as soon as possible (seconds).
  function startTimes(steps) { return window.CookCore.schedule(steps).start; }

  function openRead(r) {
    reading = { recipe: r, locked: !!cook && state.recipe === r };
    $('read-title').textContent = recipeName(r);
    $('here-badge').hidden = true;
    renderRead();
    openDialog($('read-dialog'));
    $('read-body').scrollTop = 0;
    if (reading.locked && cook.t0) showWhereYouAre();
  }

  function renderRead() {
    var r = reading.recipe, c = picksFor(r), body = $('read-body'), keep = body.scrollTop;
    // The marker sits inside the step it points at; keep it out of the rebuild.
    var badge = $('here-badge');
    if (body.contains(badge)) { badge.hidden = true; $('read-dialog').appendChild(badge); }
    setServings(r, c);
    var built = r.build(Object.assign({}, c, { mode: 'detailed' }));
    var starts = startTimes(built.steps);
    var steps = built.steps.map(function (s, i) { return { s: s, i: i }; })
      .sort(function (a, b) { return starts[a.s.id] - starts[b.s.id] || a.i - b.i; })
      .map(function (x) { return x.s; });

    var html = '';
    if (r.options.length) {
      html += '<h3>' + ht('chooseFirst') + '</h3>' +
        (reading.locked ? '<p class="hint">' + ht('cookingVersion') + '</p>' : '') +
        '<div class="read-options">' + optionsHtml(r, c, 'read_', reading.locked) + '</div>';
    }
    html += '<h3>' + ht('ingredientsFor', { x: whoText(r, c) }) + '</h3>';
    groupIngredients(built.ingredients).forEach(function (g) {
      html += '<h4>' + ht('ingCat_' + g.cat) + '</h4><ul>' + g.items.map(function (i) {
        return '<li><b>' + esc(units(i.amount)) + '</b> ' + esc(i.name) + (i.note ? ' <span class="hint">(' + esc(units(i.note)) + ')</span>' : '') + '</li>';
      }).join('') + '</ul>';
    });
    // While cooking: the steps already done are greyed and the first open one is "here".
    var doneIds = {}, here = -1;
    if (reading.locked && cook) {
      cook.steps.forEach(function (s) {
        if (isDone(s.id)) (s.members || [s.id]).forEach(function (id) { doneIds[id] = true; });
      });
      steps.some(function (s, i) { if (!doneIds[s.id]) { here = i; return true; } return false; });
      // Nothing done yet (or not started): no marker, nothing greyed.
      if (here <= 0 || !cook.t0) here = -1;
    }
    html += '<h3>' + ht('method') + '</h3><ol class="read-method">' + steps.map(function (s, i) {
      var cls = here < 0 ? '' : i < here ? ' class="is-past"' : i === here ? ' class="is-here"' : '';
      return '<li' + cls + '><b>' + esc(s.title) + '.</b> ' + linkRecipes(units(s.text), r) +
        ' <span class="hint">(' + ht('aboutTime', { t: fmtMinutes(Math.max(1, Math.round(s.duration / 60))) }) + ')</span></li>';
    }).join('') + '</ol>';
    body.innerHTML = html;
    body.scrollTop = keep;
    return here;
  }

  // Opened while cooking: scroll to where you are and say so.
  function showWhereYouAre() {
    var body = $('read-body'), li = body.querySelector('.is-here');
    if (!li) return;
    // The current step lands a little below the middle, with the marker right above it.
    var top = li.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
    body.scrollTop = Math.max(0, top - body.clientHeight * 0.55);
    var badge = $('here-badge');
    li.appendChild(badge);
    badge.hidden = false;
    badge.classList.remove('show');
    void badge.offsetWidth;
    badge.classList.add('show');
  }
  $('here-badge').addEventListener('animationend', function () { $('here-badge').hidden = true; });

  $('read-body').addEventListener('change', function (e) {
    if (e.target.type !== 'radio' || !reading || reading.locked) return;
    var r = reading.recipe;
    picksFor(r)[e.target.name.replace(/^read_/, '')] = e.target.value;
    renderRead();
    if (state.recipe === r && state.screen === 'details') { renderOptions(); updateDetails(); }
  });

  $('read-close').addEventListener('click', function () { $('read-dialog').close(); });
  document.querySelectorAll('.btn-read').forEach(function (b) {
    b.addEventListener('click', function () { if (state.recipe) openRead(state.recipe); });
  });

  // ---------- Kitchen areas ----------
  function svgUri(body) {
    return 'data:image/svg+xml,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1c1917" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>');
  }
  // Stand-ins until these get icon files: countertop, sink, fridge, freezer and the "Me" figure.
  var ICON = {
    countertop: svgUri('<rect x="2.5" y="6" width="19" height="3" rx="1"/><rect x="4" y="9" width="16" height="10.5" rx="1"/><path d="M12 9v10.5M10 14h.01M14 14h.01"/>'),
    sink: svgUri('<path d="M3 13.5h18v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"/><path d="M9 13.5V6.5a3 3 0 0 1 6 0v1.5"/><path d="M7 10.5h4"/>'),
    fridge: svgUri('<rect x="5.5" y="2.5" width="13" height="19" rx="2"/><path d="M5.5 9.5h13M8.5 5.5v2M8.5 12.5v3"/>'),
    freezer: svgUri('<rect x="5.5" y="2.5" width="13" height="19" rx="2"/><path d="M8.5 5.5v2M12 10.5v7M9 12.25l6 3.5M9 15.75l6-3.5"/>'),
    me: svgUri('<circle cx="12" cy="6.5" r="3"/><path d="M6.5 20.5v-4.5a5.5 5.5 0 0 1 11 0v4.5z"/>')
  };
  var MOVE_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/></svg>';

  // Listed back to front: the countertop is always behind; the sink and the
  // chopping board can sit on it (or stand on their own).
  var AREAS = {
    countertop: { icon: ICON.countertop },
    stove: { icon: 'icons/stovetop.svg' },
    oven: { icon: 'icons/oven.svg' },
    fridge: { icon: ICON.fridge },
    freezer: { icon: ICON.freezer },
    sink: { icon: ICON.sink },
    board: { icon: 'icons/chopping-board.svg' }
  };
  var AREA_KEYS = Object.keys(AREAS);
  var LAYOUT_KEYS = AREA_KEYS.concat(['me']);
  var Z = { countertop: 1, stove: 2, oven: 2, fridge: 2, freezer: 2, sink: 3, board: 3, me: 4 };
  // Smallest size per block in pixels, so blocks keep their shape in landscape and portrait.
  var MIN_PX = {
    countertop: { w: 160, h: 110 },
    stove: { w: 140, h: 120 },
    oven: { w: 110, h: 80 },
    fridge: { w: 70, h: 90 },
    freezer: { w: 70, h: 90 },
    board: { w: 90, h: 60 },
    sink: { w: 80, h: 60 },
    me: { w: 64, h: 64 }
  };
  var ME_PX = 64; // "Me" is always a 64 px circle
  function minSize(key, container) {
    var w = container.clientWidth || 800, h = container.clientHeight || 450;
    return { w: Math.min(0.9, MIN_PX[key].w / w), h: Math.min(0.9, MIN_PX[key].h / h) };
  }

  // Positions and sizes as fractions of the canvas. No overlaps except on the countertop.
  var DEFAULT_LAYOUT = {
    countertop: { x: 0.30, y: 0.04, w: 0.40, h: 0.54 },
    stove: { x: 0.03, y: 0.04, w: 0.24, h: 0.40 },
    oven: { x: 0.03, y: 0.50, w: 0.24, h: 0.30 },
    fridge: { x: 0.73, y: 0.04, w: 0.12, h: 0.40 },
    freezer: { x: 0.86, y: 0.04, w: 0.11, h: 0.40 },
    board: { x: 0.51, y: 0.24, w: 0.17, h: 0.30 },
    sink: { x: 0.32, y: 0.24, w: 0.17, h: 0.30 },
    me: { x: 0.45, y: 0.60, w: 0.10, h: 0.18 }
  };
  // The same kitchen for a canvas that is taller than wide.
  var DEFAULT_LAYOUT_PORTRAIT = {
    stove: { x: 0.05, y: 0.03, w: 0.42, h: 0.22 },
    oven: { x: 0.05, y: 0.28, w: 0.42, h: 0.16 },
    countertop: { x: 0.53, y: 0.03, w: 0.42, h: 0.41 },
    board: { x: 0.58, y: 0.25, w: 0.32, h: 0.11 },
    sink: { x: 0.58, y: 0.10, w: 0.32, h: 0.11 },
    fridge: { x: 0.05, y: 0.50, w: 0.25, h: 0.20 },
    freezer: { x: 0.33, y: 0.50, w: 0.25, h: 0.20 },
    me: { x: 0.62, y: 0.55, w: 0.18, h: 0.09 }
  };
  state.layout = clone(DEFAULT_LAYOUT);

  function overlaps(a, b) {
    var e = 0.001;
    return a.x < b.x + b.w - e && b.x < a.x + a.w - e && a.y < b.y + b.h - e && b.y < a.y + a.h - e;
  }

  // Only the countertop may be overlapped.
  // "Me" is just where you stand: it moves freely and never blocks or pushes anything.
  function collides(layout, key, rect, keys) {
    if (key === 'countertop' || key === 'me') return false;
    return keys.some(function (other) {
      return other !== key && other !== 'countertop' && other !== 'me' && overlaps(rect, layout[other]);
    });
  }

  // Tries the move, then each axis on its own, so blocks slide along each other.
  // A block that already overlaps something (an older layout) may always move.
  function tryPlace(layout, key, rect, keys) {
    var cur = layout[key];
    var stuck = collides(layout, key, cur, keys);
    var candidates = [rect, { x: rect.x, y: cur.y, w: rect.w, h: rect.h }, { x: cur.x, y: rect.y, w: rect.w, h: rect.h }];
    for (var i = 0; i < candidates.length; i++) {
      if (stuck || !collides(layout, key, candidates[i], keys)) {
        layout[key] = candidates[i];
        return true;
      }
    }
    return false;
  }

  function placeEl(el, r) {
    el.style.left = (r.x * 100) + '%';
    el.style.top = (r.y * 100) + '%';
    el.style.width = (r.w * 100) + '%';
    el.style.height = (r.h * 100) + '%';
  }

  /*
    Makes el movable inside container with the pointer and arrow keys.
    opts.handle: element that starts a move (default el)
    opts.resizer: element that starts a resize (optional; Alt + arrows resize too)
    opts.onChange: called while it moves; opts.onEnd: called when a move is finished
  */
  // Layout editor: while dragging, an area snaps to the canvas edges and to
  // nearby areas, and pushes an area it runs into out of the way when there is
  // room for it. The chopping board and "Me" don't snap.
  var SNAP_PX = 12;
  function snappable(k) { return k !== 'board' && k !== 'me'; }

  function snapRect(layout, key, r, keys, container) {
    if (!snappable(key)) return r;
    var tx = SNAP_PX / (container.clientWidth || 800), ty = SNAP_PX / (container.clientHeight || 450);
    var bx = null, by = null;
    function tryX(target, edge) { var d = target - (r.x + edge); if (Math.abs(d) <= tx && (bx === null || Math.abs(d) < Math.abs(bx))) bx = d; }
    function tryY(target, edge) { var d = target - (r.y + edge); if (Math.abs(d) <= ty && (by === null || Math.abs(d) < Math.abs(by))) by = d; }
    tryX(0, 0); tryX(1, r.w); tryY(0, 0); tryY(1, r.h);
    keys.forEach(function (k) {
      if (k === key || !snappable(k)) return;
      var o = layout[k];
      var sideBySide = r.y < o.y + o.h + ty && o.y < r.y + r.h + ty;
      var stacked = r.x < o.x + o.w + tx && o.x < r.x + r.w + tx;
      if (sideBySide) { tryX(o.x + o.w, 0); tryX(o.x, r.w); tryX(o.x, 0); tryX(o.x + o.w, r.w); }
      if (stacked) { tryY(o.y + o.h, 0); tryY(o.y, r.h); tryY(o.y, 0); tryY(o.y + o.h, r.h); }
    });
    return {
      x: clamp(r.x + (bx || 0), 0, 1 - r.w),
      y: clamp(r.y + (by || 0), 0, 1 - r.h),
      w: r.w,
      h: r.h
    };
  }

  // Moves the areas that next runs into out of its way: each one goes to the
  // closest free place (pushed left, right, up or down, else the nearest free
  // spot on the canvas). Returns false when one has nowhere to go; then nothing changes.
  function pushOthers(layout, key, next, keys) {
    if (key === 'countertop' || key === 'me') return false;
    var hits = keys.filter(function (k) { return k !== key && k !== 'countertop' && k !== 'me' && overlaps(next, layout[k]); });
    if (!hits.length) return false;
    var test = Object.assign({}, layout);
    test[key] = next;
    function free(k, c) {
      return c.x > -1e-6 && c.y > -1e-6 && c.x + c.w < 1 + 1e-6 && c.y + c.h < 1 + 1e-6 && !collides(test, k, c, keys);
    }
    var ok = hits.every(function (k) {
      var o = test[k], e = 0.002;
      var cands = [
        { x: next.x + next.w + e, y: o.y }, { x: next.x - o.w - e, y: o.y },
        { x: o.x, y: next.y + next.h + e }, { x: o.x, y: next.y - o.h - e }
      ];
      for (var gy = 0; gy <= 1 - o.h + 1e-9; gy += 0.02) {
        for (var gx = 0; gx <= 1 - o.w + 1e-9; gx += 0.02) cands.push({ x: gx, y: gy });
      }
      var best = null, bestD = Infinity;
      cands.forEach(function (p, i) {
        var c = { x: p.x, y: p.y, w: o.w, h: o.h };
        if (!free(k, c)) return;
        // The four pushes win over a jump across the canvas at the same distance.
        var d = Math.hypot(c.x - o.x, c.y - o.y) + (i < 4 ? 0 : 0.05);
        if (d < bestD) { bestD = d; best = c; }
      });
      if (!best) return false;
      test[k] = best;
      return true;
    });
    if (!ok) return false;
    hits.forEach(function (k) { layout[k] = test[k]; });
    layout[key] = next;
    return true;
  }

  function makeMovable(el, key, container, layout, keys, opts) {
    var handle = opts.handle || el;
    var drag = null;

    function start(e, mode) {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.setPointerCapture(e.pointerId);
      var c = container.getBoundingClientRect();
      drag = { mode: mode, sx: e.clientX, sy: e.clientY, cw: c.width, ch: c.height, r: clone(layout[key]) };
      el.classList.add('dragging');
      handle.focus();
    }
    function move(e) {
      if (!drag) return;
      var dx = (e.clientX - drag.sx) / drag.cw, dy = (e.clientY - drag.sy) / drag.ch, r = drag.r, next;
      if (drag.mode === 'move') {
        next = { x: clamp(r.x + dx, 0, 1 - r.w), y: clamp(r.y + dy, 0, 1 - r.h), w: r.w, h: r.h };
        if (opts.snap) next = snapRect(layout, key, next, keys, container);
      } else {
        var m = minSize(key, container);
        next = { x: r.x, y: r.y, w: clamp(r.w + dx, m.w, 1 - r.x), h: clamp(r.h + dy, m.h, 1 - r.y) };
      }
      if (!(opts.snap && drag.mode === 'move' && pushOthers(layout, key, next, keys))) tryPlace(layout, key, next, keys);
      placeEl(el, layout[key]);
      if (opts.onChange) opts.onChange();
    }
    function end() {
      if (!drag) return;
      drag = null;
      el.classList.remove('dragging');
      if (opts.onEnd) opts.onEnd();
    }

    [[handle, 'move'], [opts.resizer, 'resize']].forEach(function (pair) {
      if (!pair[0]) return;
      pair[0].addEventListener('pointerdown', function (e) { start(e, pair[1]); });
      pair[0].addEventListener('pointermove', move);
      pair[0].addEventListener('pointerup', end);
      pair[0].addEventListener('pointercancel', end);
    });

    handle.addEventListener('keydown', function (e) {
      var s = e.shiftKey ? 0.1 : 0.02;
      var d = { ArrowLeft: [-s, 0], ArrowRight: [s, 0], ArrowUp: [0, -s], ArrowDown: [0, s] }[e.key];
      if (!d) return;
      e.preventDefault();
      var r = layout[key], next;
      if (e.altKey && opts.resizer) {
        var mk = minSize(key, container);
        next = { x: r.x, y: r.y, w: clamp(r.w + d[0], mk.w, 1 - r.x), h: clamp(r.h + d[1], mk.h, 1 - r.y) };
      } else {
        next = { x: clamp(r.x + d[0], 0, 1 - r.w), y: clamp(r.y + d[1], 0, 1 - r.h), w: r.w, h: r.h };
      }
      if (!tryPlace(layout, key, next, keys)) {
        el.classList.remove('blocked');
        void el.offsetWidth;
        el.classList.add('blocked');
      }
      placeEl(el, layout[key]);
      if (opts.onChange) opts.onChange();
      if (opts.onEnd) opts.onEnd();
    });
  }

  // ---------- Kitchen layout editor ----------
  var draft = null;

  // On phones and tablets the layout editor and the cooking map go full screen
  // (no browser bar) and lock the screen to landscape or portrait. The rotate
  // button switches between the two; the phone's own turning doesn't.
  // Browsers may refuse; everything still works without.
  function fullscreenTo(orientation) {
    if (!window.matchMedia('(pointer: coarse)').matches) return;
    var root = document.documentElement;
    var req = root.requestFullscreen || root.webkitRequestFullscreen;
    var inFull = document.fullscreenElement || document.webkitFullscreenElement;
    var ready = null;
    try { ready = inFull ? Promise.resolve() : (req ? req.call(root, { navigationUI: 'hide' }) : null); } catch (e) { ready = null; }
    if (!ready || !ready.then) ready = Promise.resolve();
    ready.then(function () {
      if (orientation && screen.orientation && screen.orientation.lock) return screen.orientation.lock(orientation);
    }).catch(function () {});
  }
  document.querySelectorAll('.btn-rotate').forEach(function (b) {
    b.addEventListener('click', function () {
      fullscreenTo(window.matchMedia('(orientation: landscape)').matches ? 'portrait' : 'landscape');
    });
  });
  function leaveFullscreen() {
    var el = document.fullscreenElement || document.webkitFullscreenElement;
    if (!el) return;
    if (screen.orientation && screen.orientation.unlock) { try { screen.orientation.unlock(); } catch (e) { /* ignore */ } }
    (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  }

  function setTheme(value) {
    document.documentElement.setAttribute('data-theme', value);
    document.querySelectorAll('input[name="theme"]').forEach(function (r) { r.checked = r.value === value; });
  }
  $('btn-layout-theme').addEventListener('click', function () {
    var dark = getComputedStyle(document.documentElement).colorScheme.indexOf('dark') >= 0;
    setTheme(dark ? 'light' : 'dark');
  });

  // Where the kitchen layout editor was opened from: from the welcome step, Save
  // and Cancel continue to step 2 instead of going back.
  var layoutFrom = null;
  function openLayout(fromHistory) {
    layoutFrom = state.screen;
    draft = clone(state.layout);
    fullscreenTo('landscape');
    show('layout', fromHistory === true);
    buildCanvas();
  }

  // Until you move something, the editor shows the default arrangement for the
  // canvas shape (landscape or portrait), also after rotating.
  function buildCanvas() {
    var canvas = $('layout-canvas');
    var tall = canvas.clientHeight > canvas.clientWidth;
    if (!state.layoutTouched) draft = clone(tall ? DEFAULT_LAYOUT_PORTRAIT : DEFAULT_LAYOUT);
    // "Me" keeps its round shape whatever the canvas proportions.
    draft.me.w = Math.min(0.5, ME_PX / (canvas.clientWidth || 800));
    draft.me.h = Math.min(0.5, ME_PX / (canvas.clientHeight || 450));
    draft.me.x = clamp(draft.me.x, 0, 1 - draft.me.w);
    draft.me.y = clamp(draft.me.y, 0, 1 - draft.me.h);
    canvas.innerHTML = '';
    blockEls = {};
    LAYOUT_KEYS.forEach(function (key) {
      var el = document.createElement('div');
      blockEls[key] = el;
      el.className = 'block area-' + key + (key === 'me' ? ' block-me' : '');
      el.style.zIndex = Z[key];
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', t(key) + ', ' + t('moveHint'));
      el.innerHTML = '<img class="icon" alt="" src="' + (key === 'me' ? ICON.me : AREAS[key].icon) + '"><span>' + ht(key) + '</span>' +
        (key === 'me' ? '' : '<span class="resize" aria-hidden="true"></span>');
      placeEl(el, draft[key]);
      makeMovable(el, key, canvas, draft, LAYOUT_KEYS, {
        resizer: el.querySelector('.resize'),
        snap: true,
        onChange: function () {
          state.layoutTouched = true;
          LAYOUT_KEYS.forEach(function (k) { placeEl(blockEls[k], draft[k]); });
        },
        onEnd: updateSeams
      });
      canvas.appendChild(el);
    });
    updateSeams();
  }

  // Where two areas touch, a seam with a grip appears on the shared edge.
  // Dragging it (or arrow keys) moves that edge: one area grows, the other shrinks.
  var blockEls = {};
  function updateSeams() {
    var canvas = $('layout-canvas');
    canvas.querySelectorAll('.seam').forEach(function (n) { n.remove(); });
    var cw = canvas.clientWidth || 800, ch = canvas.clientHeight || 450;
    var ex = 3 / cw, ey = 3 / ch, keys = LAYOUT_KEYS.filter(snappable);
    keys.forEach(function (ka, i) {
      keys.slice(i + 1).forEach(function (kb) {
        [[ka, kb], [kb, ka]].forEach(function (pair) {
          var a = draft[pair[0]], b = draft[pair[1]];
          // a on the left of b, sharing a vertical edge
          if (Math.abs(a.x + a.w - b.x) < ex) {
            var y1 = Math.max(a.y, b.y), y2 = Math.min(a.y + a.h, b.y + b.h);
            if ((y2 - y1) * ch > 24) addSeam('v', pair[0], pair[1], b.x, y1, y2);
          }
          // a above b, sharing a horizontal edge
          if (Math.abs(a.y + a.h - b.y) < ey) {
            var x1 = Math.max(a.x, b.x), x2 = Math.min(a.x + a.w, b.x + b.w);
            if ((x2 - x1) * cw > 24) addSeam('h', pair[0], pair[1], b.y, x1, x2);
          }
        });
      });
    });
  }

  function addSeam(dir, ka, kb, at, from, to) {
    var canvas = $('layout-canvas');
    var seam = document.createElement('div');
    seam.className = 'seam seam-' + dir;
    seam.tabIndex = 0;
    seam.setAttribute('role', 'separator');
    seam.setAttribute('aria-orientation', dir === 'v' ? 'vertical' : 'horizontal');
    seam.setAttribute('aria-label', t(ka) + ' / ' + t(kb) + ': ' + t('resizeSeam'));
    seam.innerHTML = '<span class="seam-grip"></span>';
    function place(pos) {
      if (dir === 'v') { seam.style.left = (pos * 100) + '%'; seam.style.top = (from * 100) + '%'; seam.style.height = ((to - from) * 100) + '%'; }
      else { seam.style.top = (pos * 100) + '%'; seam.style.left = (from * 100) + '%'; seam.style.width = ((to - from) * 100) + '%'; }
    }
    place(at);
    function moveEdge(pos) {
      var a = draft[ka], b = draft[kb], ma = minSize(ka, canvas), mb = minSize(kb, canvas), na, nb;
      if (dir === 'v') {
        pos = clamp(pos, a.x + ma.w, b.x + b.w - mb.w);
        na = { x: a.x, y: a.y, w: pos - a.x, h: a.h };
        nb = { x: pos, y: b.y, w: b.x + b.w - pos, h: b.h };
      } else {
        pos = clamp(pos, a.y + ma.h, b.y + b.h - mb.h);
        na = { x: a.x, y: a.y, w: a.w, h: pos - a.y };
        nb = { x: b.x, y: pos, w: b.w, h: b.y + b.h - pos };
      }
      var test = Object.assign({}, draft);
      test[ka] = na; test[kb] = nb;
      if (collides(test, ka, na, LAYOUT_KEYS) || collides(test, kb, nb, LAYOUT_KEYS)) return;
      draft[ka] = na; draft[kb] = nb;
      state.layoutTouched = true;
      placeEl(blockEls[ka], na); placeEl(blockEls[kb], nb);
      place(pos);
    }
    var drag = null;
    seam.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      seam.setPointerCapture(e.pointerId);
      var c = canvas.getBoundingClientRect();
      drag = { s: dir === 'v' ? e.clientX : e.clientY, size: dir === 'v' ? c.width : c.height,
        at: dir === 'v' ? draft[kb].x : draft[kb].y };
      seam.classList.add('active');
    });
    seam.addEventListener('pointermove', function (e) {
      if (!drag) return;
      moveEdge(drag.at + ((dir === 'v' ? e.clientX : e.clientY) - drag.s) / drag.size);
    });
    function end() { if (!drag) return; drag = null; seam.classList.remove('active'); updateSeams(); }
    seam.addEventListener('pointerup', end);
    seam.addEventListener('pointercancel', end);
    seam.addEventListener('keydown', function (e) {
      var d = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
      if (!d) return;
      e.preventDefault();
      moveEdge((dir === 'v' ? draft[kb].x : draft[kb].y) + d * (e.shiftKey ? 0.05 : 0.01));
    });
    canvas.appendChild(seam);
  }
  // Long-pressing an area on a phone moves it; no "open image / copy image" menu.
  ['layout-canvas', 'cook-map'].forEach(function (id) {
    $(id).addEventListener('contextmenu', function (e) { e.preventDefault(); });
  });
  window.addEventListener('resize', function () {
    if (state.screen === 'layout') buildCanvas();
  });

  function leaveLayout() {
    if (layoutFrom !== 'welcome') { history.back(); return; }
    show('start', true);
    history.replaceState({ screen: 'start' }, '', screenUrl('start'));
  }
  $('btn-layout-cancel').addEventListener('click', leaveLayout);
  $('btn-layout-save').addEventListener('click', function () {
    state.layout = draft;
    state.layoutSaved = true;
    // Remember the shape of the kitchen: the map opens in landscape when it is wider than tall.
    var canvas = $('layout-canvas');
    state.layoutWide = canvas.clientWidth >= canvas.clientHeight;
    var setup = $('btn-layout');
    setup.setAttribute('data-i18n', 'editLayout');
    setup.textContent = t('editLayout');
    var label = $('layout-home-label');
    label.setAttribute('data-i18n', 'editLayoutMap');
    label.textContent = t('editLayoutMap');
    document.querySelector('.layout-check').hidden = false;
    leaveLayout();
    if (cook) {
      $('cook-map').innerHTML = '';
      render();
    }
  });

  // ---------- Recipe facts: time, diet, allergens, nutrition, kids ----------
  function depsOf(steps, step) { return window.CookCore.graph(steps).deps[step.id]; }

  // "Done, Next!" when another step waits for this one, "Done!" at the end of its chain.
  function doneLabel(step) {
    var next = window.CookCore.graph(cook.steps).next[step.id].length > 0;
    return t(next ? 'doneNext' : 'done');
  }

  // Earliest possible finish, respecting explicit dependencies and thread order.
  function scheduleSeconds(steps, remaining) { return window.CookCore.schedule(steps, remaining).total; }

  function estimateMinutes(steps) { return Math.round(scheduleSeconds(steps) / 60); }

  function fmtMinutes(min) {
    return min < 60 ? min + ' ' + t('min') : t('hours', { h: Math.floor(min / 60), m: min % 60 });
  }

  // Text that depends on what one serving is: a person (default), a jar or a batch.
  function unitText(r, key, vars) {
    return t(key + (r.unit && r.unit !== 'person' ? '_' + r.unit : ''), vars);
  }

  function infoFor(i) { return window.INGREDIENT_INFO[i.key || i.id]; }

  function tagsOf(built) {
    var tags = {}, allergens = [];
    built.ingredients.forEach(function (i) {
      var info = infoFor(i);
      if (!info) return;
      info.tags.forEach(function (tg) { tags[tg] = true; });
      info.allergens.forEach(function (a) { if (allergens.indexOf(a) < 0) allergens.push(a); });
    });
    return { tags: tags, allergens: allergens };
  }

  // Diet label (shown next to the title) and the "contains" list (meat, pork, fish, allergens).
  function dietInfo(built) {
    var x = tagsOf(built), tags = x.tags, label = null;
    if (!tags.meat) {
      if (tags.fish) label = 'pesc';
      else if (tags.dairy && tags.egg) label = 'lactoOvo';
      else if (tags.dairy) label = 'lacto';
      else if (tags.egg) label = 'ovo';
      else if (tags.honey) label = 'veg';
      else label = 'vegan';
    }
    var contains = [];
    if (tags.meat) contains.push(t('meat'));
    if (tags.pork) contains.push(t('pork'));
    if (tags.fish) contains.push(t('fish'));
    x.allergens.forEach(function (a) {
      if (a === 'Fish' && tags.fish) return;
      var name = t('allergen_' + a);
      if (contains.indexOf(name) < 0) contains.push(name);
    });
    return { label: label, contains: contains };
  }

  // A five-pointed star (filled with currentColor) for "Most popular" recipes.
  function starSvg(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">' +
      '<path fill="currentColor" d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z"/></svg>';
  }

  function dietBadge(info) {
    if (!info.label) return '';
    var cls = info.label === 'vegan' ? 'diet-vegan' : info.label === 'pesc' ? 'diet-pesc' : 'diet-veg';
    return '<span class="diet-badge ' + cls + '">' + ht('diet_' + info.label) + '</span>';
  }

  function containsRow(info) {
    if (!info.contains.length) return '';
    return '<span class="warn-icon" role="img" aria-label="' + ht('containsLabel') + '">❗</span> ' +
      '<span>' + info.contains.map(esc).join(', ') + '</span>';
  }

  function nutritionPerPerson(built) {
    var keys = ['kcal', 'carbs', 'protein', 'fat', 'satFat', 'fiber', 'salt'], tot = {};
    keys.forEach(function (k) { tot[k] = 0; });
    built.ingredients.forEach(function (i) {
      var info = infoFor(i);
      if (!info || !i.grams) return;
      keys.forEach(function (k) { tot[k] += info[k] * i.grams / 100; });
    });
    keys.forEach(function (k) { tot[k] /= built.servings; });
    return tot;
  }
  function kcal5(n) { return Math.round(n / 5) * 5; }

  // Things children shouldn't get: alcohol, hot spices, raw egg.
  function hazards(r, c, built) {
    var x = tagsOf(built).tags, out = [];
    if (x.alcohol) out.push('alcohol');
    if (x.spicy || (x.chili && /^(hot|spicier)$/.test(c.opt_heat || ''))) out.push('spicy');
    if (r.rawEgg(c)) out.push('rawEgg');
    return out;
  }

  function listWords(keys) {
    var w = keys.map(function (k) { return t('hazard_' + k); });
    return w.length > 1 ? w.slice(0, -1).join(', ') + ' ' + t('and') + ' ' + w[w.length - 1] : w[0];
  }

  // ---------- Photos ----------
  function photoEl(r, size, cls) {
    var img = document.createElement('img');
    img.className = 'photo ' + (cls || '');
    img.alt = '';
    img.decoding = 'async';
    if (size === 350) img.loading = 'lazy';
    img.src = 'img/ready/webp' + size + '/' + r.id + '.webp';
    img.addEventListener('error', function () {
      var ph = document.createElement('div');
      ph.className = 'photo photo-placeholder ' + (cls || '');
      if (img.id) ph.id = img.id;
      img.replaceWith(ph);
    });
    return img;
  }

  // ---------- Recipe list ----------
  var CATEGORIES = ['soup', 'main', 'dessert', 'side'];
  var CUISINES = ['Italian', 'Asian', 'Indian', 'Middle Eastern', 'Greek', 'French', 'Mexican', 'Latin American', 'American', 'African'];
  var defaultBuilds = {};

  function defaultChoices(r) {
    var c = { adults: r.defaultServings || 2, kids: 0, mode: 'detailed' };
    r.options.forEach(function (o) {
      c[o.id] = o.choices.filter(function (ch) { return ch.isDefault; })[0].id;
    });
    c.servings = c.adults;
    return c;
  }

  function renderFilters() {
    var box = $('filters');
    box.innerHTML = '';
    var rows = { cat: document.createElement('div'), cuisine: document.createElement('div') };
    rows.cat.className = rows.cuisine.className = 'filter-row';
    // "Most popular": only starred recipes while pressed (on by default)
    var top = document.createElement('div');
    top.className = 'filter-row';
    var star = document.createElement('button');
    star.type = 'button';
    star.className = 'chip chip-star';
    star.innerHTML = starSvg('star-icon') + '<span>' + ht('mostPopular') + '</span>';
    star.setAttribute('aria-pressed', String(state.filters.starred));
    star.addEventListener('click', function () {
      state.filters.starred = !state.filters.starred;
      star.setAttribute('aria-pressed', String(state.filters.starred));
      renderRecipes();
    });
    top.appendChild(star);
    box.appendChild(top);
    box.appendChild(rows.cat);
    box.appendChild(rows.cuisine);
    function chip(group, value, label) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = label;
      b.setAttribute('aria-pressed', String(state.filters[group].indexOf(value) >= 0));
      b.addEventListener('click', function () {
        var list = state.filters[group], i = list.indexOf(value);
        if (i >= 0) list.splice(i, 1); else list.push(value);
        b.setAttribute('aria-pressed', String(i < 0));
        renderRecipes();
      });
      rows[group].appendChild(b);
    }
    CATEGORIES.forEach(function (c) { chip('cat', c, t('cat_' + c)); });
    CUISINES.forEach(function (c) { chip('cuisine', c, t('cuisine_' + c)); });
  }

  function renderRecipes() {
    var wrap = $('recipe-sections'), f = state.filters, any = false;
    wrap.innerHTML = '';
    CATEGORIES.forEach(function (cat) {
      if (f.cat.length && f.cat.indexOf(cat) < 0) return;
      var recipes = window.RECIPES.filter(function (r) {
        return r.category === cat && (!f.starred || r.starred === 1) && (!f.cuisine.length || r.cuisine.some(function (c) { return f.cuisine.indexOf(c) >= 0; }));
      });
      if (!recipes.length) return;
      any = true;
      var h = document.createElement('h2');
      h.className = 'category-title';
      h.textContent = t('cat_' + cat);
      var ul = document.createElement('ul');
      ul.className = 'recipe-list';
      recipes.forEach(function (r) {
        var built = defaultBuilds[r.id] || (defaultBuilds[r.id] = r.build(defaultChoices(r)));
        var info = dietInfo(built), n = nutritionPerPerson(built);
        var li = document.createElement('li');
        li.className = 'recipe-item';
        li.innerHTML =
          '<button class="recipe-card" type="button">' +
          '<span class="recipe-card-body">' +
          '<span class="title-row"><span>' + esc(recipeName(r)) + '</span>' + dietBadge(info) + '</span>' +
          '<span class="meta-line time-line">⏱️ ' + esc(fmtMinutes(estimateMinutes(built.steps))) + '</span>' +
          '<span class="meta-line nutri-line">📊 ' + kcal5(n.kcal) + ' kcal · ' +
          Math.round(n.carbs) + ' g ' + ht('carbsShort') + ' · ' + Math.round(n.protein) + ' g ' + ht('proteinShort') +
          '<small>' + esc(unitText(r, 'perServing')) + '</small></span>' +
          '<span class="warn-row">' + containsRow(info) + '</span>' +
          '</span></button>' +
          '<button class="btn btn-secondary btn-read-card" type="button" aria-label="' + ht('readInstead') + '" title="' + ht('readInstead') + '">' +
          document.querySelector('.book-icon').outerHTML + '</button>';
        var card = li.querySelector('.recipe-card');
        var wrap = document.createElement('span');
        wrap.className = 'photo-wrap';
        wrap.appendChild(photoEl(r, 350));
        var time = document.createElement('span');
        time.className = 'photo-time';
        time.textContent = fmtMinutes(estimateMinutes(built.steps));
        wrap.appendChild(time);
        if (r.starred === 1) {
          var badge = document.createElement('span');
          badge.className = 'photo-star';
          badge.title = t('mostPopular');
          badge.innerHTML = starSvg('star-icon');
          wrap.appendChild(badge);
        }
        card.insertBefore(wrap, card.firstChild);
        card.addEventListener('click', function () { openDetails(r); });
        li.querySelector('.btn-read-card').addEventListener('click', function () { openRead(r); });
        ul.appendChild(li);
      });
      wrap.appendChild(h);
      wrap.appendChild(ul);
    });
    $('no-results').hidden = any;
  }

  // ---------- Recipe page: guidance, people, options, ingredients ----------
  // A chevron in the corner jumps to the bottom (the start button); it hides near the bottom.
  function updateJump() {
    var near = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
    $('jump-bottom').hidden = state.screen !== 'details' || near;
  }
  window.addEventListener('scroll', updateJump, { passive: true });
  window.addEventListener('resize', updateJump);
  // Animated by hand (about half a second): a smooth scrollTo started from a tap
  // is dropped by some browsers.
  $('jump-bottom').addEventListener('click', function () {
    var from = window.scrollY, to = document.documentElement.scrollHeight - window.innerHeight, t0 = null;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { window.scrollTo(0, to); return; }
    function frame(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / 500), ease = 1 - Math.pow(1 - p, 3);
      window.scrollTo(0, from + (to - from) * ease);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
  function picksFor(r) {
    return state.picks[r.id] || (state.picks[r.id] = defaultChoices(r));
  }

  function openDetails(r, fromHistory) {
    state.recipe = r;
    state.choices = picksFor(r);
    $('det-name').textContent = recipeName(r);
    var detStar = $('det-star');
    detStar.hidden = r.starred !== 1;
    detStar.innerHTML = r.starred === 1 ? starSvg('star-icon') : '';
    detStar.title = t('mostPopular');
    var photo = $('det-photo');
    var img = photoEl(r, 500, 'photo-hero');
    img.id = 'det-photo';
    photo.replaceWith(img);
    renderOptions();
    document.querySelectorAll('input[name="mode"]').forEach(function (i) { i.checked = i.value === state.choices.mode; });
    updateDetails();
    show('details', fromHistory === true);
  }

  // Option chips show a short name with the detail in small grey text under it.
  // "Name (detail)" and "Name: detail" are split automatically; LABELS covers the rest.
  var LABELS = {
    'caesar_salad:opt_chicken:cutlets': ['Thin cutlets', 'thick fillets halved; faster, more even'],
    'summer_salad:opt_dressing:honey': ['With honey', '1 tsp per 4; softer, rounder'],
    'tomato_soup:opt_finish:cream_basil': ['Cream or basil', 'a splash of cream or a few fresh basil leaves'],
    'overnight_oats:opt_milk:canned': ['Canned coconut milk', 'mixed 1:1 with water; richer'],
    'semolina_pudding:opt_spice:with': ['With spices', 'cardamom and rosewater'],
    'burger:opt_sauce_heat:with': ['Spicy sauce', 'with chili or cayenne']
  };
  function labelParts(r, optId, ch) {
    var fixed = LABELS[r.id + ':' + optId + ':' + ch.id];
    if (fixed) return fixed;
    var m = ch.label.match(/^(.*?)\s*\((.*)\)\s*$/) || ch.label.match(/^([^:]{1,30}):\s+(.+)$/);
    return m ? [m[1], m[2]] : [ch.label, ''];
  }

  // Another recipe used in this one ("see Homemade Mayonnaise", "from the
  // Homemade Mayonnaise recipe") becomes a link that opens it in the reading window.
  function recipeNamed(name) {
    return window.RECIPES.filter(function (x) { return x.name.toLowerCase() === name.trim().toLowerCase(); })[0] || null;
  }
  // Match plain text once; escape both unmatched text and link attributes.
  function linkRecipes(text, self) {
    var recipes = window.RECIPES.filter(function (r) { return r !== self; })
      .map(function (r) { return { name: L(r.name), id: r.id }; })
      .sort(function (a, b) { return b.name.length - a.name.length; });
    if (!recipes.length) return esc(text);
    var byName = Object.create(null);
    recipes.forEach(function (r) { byName[r.name] = r; });
    var pattern = recipes.map(function (r) {
      return r.name.replace(/[^a-zA-Z0-9_ ]/g, function (c) { return '\\' + c; });
    }).join('|');
    var re = new RegExp(pattern, 'g'), result = '', end = 0, match;
    while ((match = re.exec(String(text)))) {
      result += esc(String(text).slice(end, match.index)) + '<button type="button" class="recipe-link" data-recipe="' +
        esc(byName[match[0]].id) + '">' + esc(match[0]) + '</button>';
      end = re.lastIndex;
    }
    return result + esc(String(text).slice(end));
  }
  // Capture phase, so the click doesn't also pick the option or tap the card.
  document.addEventListener('click', function (e) {
    var link = e.target.closest('.see-recipe, .recipe-link');
    if (!link) return;
    e.preventDefault();
    e.stopPropagation();
    var r = window.RECIPES.filter(function (x) { return x.id === link.getAttribute('data-recipe'); })[0];
    if (r) openRead(r);
  }, true);

  // prefix keeps the radio groups of the reading window apart from the recipe page's.
  function optionsHtml(r, c, prefix, disabled) {
    return r.options.map(function (o) {
      return '<fieldset class="choices"><legend>' + esc(L(o.question)) + '</legend><div class="choices-row">' + o.choices.map(function (ch) {
        var parts = labelParts(r, o.id, ch);
        var see = parts[1].match(/^see (.+)$/i), sub = see && recipeNamed(see[1]);
        return '<label class="choice"><input type="radio" name="' + esc(prefix + o.id) + '" value="' + esc(ch.id) + '"' +
          (c[o.id] === ch.id ? ' checked' : '') + (disabled ? ' disabled' : '') + '> <span class="choice-text"><span>' + esc(L(parts[0])) + '</span>' +
          (sub ? '<button type="button" class="see-recipe" data-recipe="' + esc(sub.id) + '">' + ht('seeRecipe') + '</button>'
            : parts[1] ? '<small>' + esc(L(parts[1])) + '</small>' : '') + '</span></label>';
      }).join('') + '</div></fieldset>';
    }).join('');
  }

  function renderOptions() {
    var r = state.recipe;
    $('det-options').innerHTML = optionsHtml(r, state.choices, '', false);
    $('det-forks').hidden = !r.options.length;
  }

  function isPerson(r) { return !r.unit || r.unit === 'person'; }

  function setServings(r, c) { c.servings = isPerson(r) ? c.adults + 0.5 * c.kids : c.adults; }

  function whoText(r, c) {
    return isPerson(r)
      ? [c.adults ? (c.adults === 1 ? t('one_adult') : t('n_adults', { n: c.adults })) : '',
        c.kids ? (c.kids === 1 ? t('one_child') : t('n_children', { n: c.kids })) : ''].filter(Boolean).join(' + ')
      : (c.adults === 1 ? t('one_' + r.unit) : t('n_' + r.unit, { n: c.adults }));
  }

  // Ingredients by category: [{ cat, items }]
  function groupIngredients(ingredients) {
    return window.INGREDIENT_INFO.CATEGORY_ORDER.map(function (cat) {
      return { cat: cat, items: ingredients.filter(function (i) { return (infoFor(i) || { category: 'sauces' }).category === cat; }) };
    }).filter(function (g) { return g.items.length; });
  }

  // Equipment cards: one row if they fit, else the fewest rows with the same
  // number of cards in each (the last row may have one fewer).
  var EQ_MIN = 48, EQ_MAX = 96, EQ_GAP = 6;
  function layoutEquipment() {
    var ul = $('det-equipment'), n = ul.children.length, wAll = ul.clientWidth;
    if (!n || !wAll) return;
    var fit = Math.max(1, Math.floor((wAll + EQ_GAP) / (EQ_MIN + EQ_GAP)));
    var perRow = Math.ceil(n / Math.ceil(n / fit));
    ul.style.setProperty('--eq-w', Math.min(EQ_MAX, (wAll - EQ_GAP * (perRow - 1)) / perRow) + 'px');
  }
  window.addEventListener('resize', function () { if (state.screen === 'details') layoutEquipment(); });

  function updateDetails() {
    var c = state.choices, r = state.recipe, person = isPerson(r);
    setServings(r, c);
    var built = state.built = r.build(c);

    $('det-time').textContent = '⏱️ ' + fmtMinutes(estimateMinutes(built.steps));
    var info = dietInfo(built);
    $('det-diet').innerHTML = dietBadge(info);
    $('det-warnings').innerHTML = containsRow(info);
    $('det-warnings').hidden = !info.contains.length;

    var n = nutritionPerPerson(built);
    $('det-per').textContent = unitText(r, 'perPerson');
    var rows = [['kcal', kcal5(n.kcal) + ' kcal'], ['carbs', Math.round(n.carbs) + ' g'], ['protein', Math.round(n.protein) + ' g'],
      ['fatSat', Math.round(n.fat) + ' g / ' + Math.round(n.satFat) + ' g'], ['fiber', n.fiber.toFixed(1) + ' g'], ['salt', n.salt.toFixed(1) + ' g']];
    $('det-nutrition').innerHTML = rows.map(function (x) {
      return '<div><dt>' + ht(x[0]) + '</dt><dd>' + x[1] + '</dd></div>';
    }).join('');

    // Equipment: every tool the steps use (with the options picked), in order of first use.
    var tools = [];
    built.steps.forEach(function (s) {
      (s.tools || []).forEach(function (id) { if (window.EQUIPMENT[id] && tools.indexOf(id) < 0) tools.push(id); });
    });
    $('det-equipment').innerHTML = tools.map(function (id) {
      var eq = window.EQUIPMENT[id];
      return '<li>' + (eq.icon ? '<img class="icon" src="' + esc(eq.icon) + '" alt="">' : '') + '<span>' + esc(L(eq.name)) + '</span></li>';
    }).join('');
    document.querySelector('.equipment').hidden = !tools.length;
    layoutEquipment();

    // People
    $('det-howmany').textContent = unitText(r, 'howMany');
    $('adults-label').textContent = unitText(r, 'adults');
    $('adults-value').textContent = c.adults;
    $('kids-value').textContent = c.kids;
    $('adults-minus').disabled = c.adults <= (c.kids ? 0 : 1);
    $('adults-plus').disabled = c.adults >= (r.maxServings || 8);
    $('kids-minus').disabled = c.kids <= 0 || (c.kids <= 1 && c.adults === 0);
    $('kids-plus').disabled = c.kids >= 8;
    $('kids-counter').hidden = !person;
    $('kids-note').hidden = !person || !c.kids;

    // Kids warning
    var warn = $('kids-warning');
    if (person && c.kids) {
      var base = Object.assign({}, c);
      var defaults = defaultChoices(r);
      Object.keys(r.kids).forEach(function (k) { base[k] = defaults[k]; });
      var before = hazards(r, base, r.build(base)), now = hazards(r, c, built);
      var omitted = before.filter(function (h) { return now.indexOf(h) < 0; });
      var html = '';
      if (omitted.length) html += '<p><strong>' + ht('warning') + '</strong> ' + ht('kidsOmitted', { x: listWords(omitted) }) + '</p>';
      if (now.length) html += '<p><strong>' + ht('warning') + '</strong> ' + ht('kidsSure', { x: listWords(now) }) + '</p>';
      warn.innerHTML = html;
      warn.hidden = !html;
    } else {
      warn.hidden = true;
    }

    // Ingredients
    $('ing-meta').textContent = t('ingredientsFor', { x: whoText(r, c) });
    var list = $('ing-list');
    list.innerHTML = '';
    groupIngredients(built.ingredients).forEach(function (g) {
      var h = document.createElement('li');
      h.className = 'ing-group';
      h.textContent = t('ingCat_' + g.cat);
      list.appendChild(h);
      g.items.forEach(function (ing) {
        var li = document.createElement('li');
        li.className = 'ing-card';
        li.innerHTML =
          ingImg(ing) +
          '<span class="name">' + esc(ing.name) + (ing.note ? '<span class="note">' + esc(units(ing.note)) + '</span>' : '') + '</span>' +
          '<span class="amount">' + esc(units(ing.amount)) + '</span>';
        list.appendChild(li);
      });
    });
  }

  $('screen-details').addEventListener('change', function (e) {
    if (e.target.type !== 'radio') return;
    state.choices[e.target.name] = e.target.value;
    updateDetails();
  });

  function setPeople(adults, kids) {
    var c = state.choices, hadKids = c.kids > 0;
    c.adults = adults;
    c.kids = kids;
    // Adding children switches on the child-friendly options.
    if (!hadKids && kids > 0) {
      Object.keys(state.recipe.kids).forEach(function (k) { c[k] = state.recipe.kids[k]; });
      renderOptions();
    }
    updateDetails();
  }
  $('adults-minus').addEventListener('click', function () { setPeople(state.choices.adults - 1, state.choices.kids); });
  $('adults-plus').addEventListener('click', function () { setPeople(state.choices.adults + 1, state.choices.kids); });
  $('kids-minus').addEventListener('click', function () { setPeople(state.choices.adults, state.choices.kids - 1); });
  $('kids-plus').addEventListener('click', function () { setPeople(state.choices.adults, state.choices.kids + 1); });

  function imgFor(i) { return 'img/350/' + (i.key || i.id) + '.webp'; }
  // Ingredients without a photo yet get the same pot placeholder as the meals.
  function ingImg(i) {
    return i.noImage ? '<span class="ing-ph" aria-hidden="true"></span>' : '<img alt="" src="' + esc(imgFor(i)) + '">';
  }

  $('btn-start-cooking').addEventListener('click', startCooking);

  // ---------- Cooking ----------
  var cook = null;
  var tickTimer = null;
  var coarse = window.matchMedia('(pointer: coarse)');
  var landscape = window.matchMedia('(orientation: landscape)');
  var RING = 2 * Math.PI * 40;

  function isMap() {
    return state.layoutSaved && state.mapView;
  }

  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = String(sec % 60).padStart(2, '0');
    return h ? h + ':' + String(m).padStart(2, '0') + ':' + s : m + ':' + s;
  }

  function stepById(id) { return cook.byId[id]; }
  function allDeps(step) { return depsOf(cook.steps, step); }
  function isDone(id) { return cook.done.has(id); }

  /*
    Each step is one of:
    hidden   not shown yet: something it needs isn't done
    active   ready to do
    gone     done: the card fades out and frees its space
  */
  function statusOf(step) {
    if (isDone(step.id)) return 'gone';
    return allDeps(step).every(isDone) ? 'active' : 'hidden';
  }

  // Works out which cards are shown. A new card takes the place of the finished
  // card of its thread (or goes after that thread's last card), so the order stays
  // logical and cards move as little as possible.
  function refresh() {
    var fresh = [], nowActive = [], freed = {};
    cook.steps.forEach(function (s) {
      var st = statusOf(s), old = cook.status[s.id];
      cook.status[s.id] = st;
      if (st === 'active' && old !== 'active') nowActive.push(s);
      var at = cook.slots.indexOf(s.id);
      if (st !== 'active' && at >= 0) {
        cook.slots.splice(at, 1);
        if (!(s.thread in freed)) freed[s.thread] = at;
        if (popStep === s.id) closePop();
        if (cook.els[s.id]) { leave(cook.els[s.id]); delete cook.els[s.id]; }
        if (cook.notifs[s.id]) { leave(cook.notifs[s.id]); delete cook.notifs[s.id]; }
      }
    });
    cook.steps.forEach(function (s) {
      if (cook.status[s.id] !== 'active' || cook.slots.indexOf(s.id) >= 0) return;
      var after = -1;
      cook.slots.forEach(function (id, i) { if (stepById(id).thread === s.thread) after = i; });
      if (after >= 0) cook.slots.splice(after + 1, 0, s.id);
      else if (s.thread in freed) cook.slots.splice(Math.min(freed[s.thread], cook.slots.length), 0, s.id);
      else cook.slots.push(s.id);
      fresh.push(s);
    });
    return { fresh: fresh, active: nowActive };
  }

  // A card that is no longer needed fades out over a second while the cards
  // below slide up into its place.
  function leave(el) {
    var gap = parseFloat(getComputedStyle(el.parentNode || document.body).rowGap) || 0;
    el.classList.add('leaving');
    el.style.height = el.offsetHeight + 'px';
    void el.offsetHeight;
    el.style.height = '0px';
    el.style.paddingTop = el.style.paddingBottom = '0px';
    el.style.marginBottom = -gap + 'px';
    el.style.opacity = '0';
    setTimeout(function () { el.remove(); }, 1000);
  }

  function startCooking() {
    var b = state.built;
    var byId = {};
    b.steps.forEach(function (s) { byId[s.id] = s; });
    cook = { steps: b.steps, byId: byId, ingredients: b.ingredients, done: new Set(), slots: [], status: {},
      started: {}, els: {}, notifs: {}, t0: null, tipsShown: new Set(), view: null };
    $('cook-name').textContent = recipeName(state.recipe);
    $('cook-list').innerHTML = '';
    $('cook-map').innerHTML = '';
    $('cook-finished').hidden = true;
    $('start-overlay').hidden = false;
    $('btn-start-now').hidden = false;
    $('countdown').hidden = true;
    $('start-takes').textContent = t('takes', { x: fmtMinutes(estimateMinutes(b.steps)) });
    $('cook-clock').textContent = '0:00';
    resetStars();
    show('cook');
    refresh();
    render();
    updateClocks();
    $('btn-start-now').focus();
  }

  // "Start now" counts down 3, 2, 1 (rings close in around the number), then the clock runs.
  var countdownTimer = null;
  $('btn-start-now').addEventListener('click', function () {
    var n = 3, box = $('countdown'), num = $('countdown-num');
    $('btn-start-now').hidden = true;
    box.hidden = false;
    function step() {
      if (!cook) return;
      if (n === 0) {
        box.hidden = true;
        beginCooking();
        return;
      }
      num.textContent = n;
      box.classList.remove('go');
      void box.offsetWidth;
      box.classList.add('go');
      n -= 1;
      countdownTimer = setTimeout(step, 1000);
    }
    step();
  });

  function beginCooking() {
    cook.t0 = Date.now();
    $('start-overlay').hidden = true;
    showTips(cook.steps.filter(function (s) { return cook.status[s.id] === 'active'; }));
    tick();
    tickTimer = setInterval(tick, 500);
  }

  // The finish: a warm flash, a big star that pops and shoots up, little
  // stars bursting out, then the rating screen rises in.
  function celebrate() {
    var fin = $('cook-finished');
    fin.classList.remove('enter');
    void fin.offsetWidth;
    fin.classList.add('enter');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var box = document.createElement('div');
    box.className = 'celebrate';
    box.setAttribute('aria-hidden', 'true');
    var html = '<div class="celebrate-flash"></div><span class="celebrate-star">★</span>';
    for (var i = 0; i < 16; i++) {
      var a = i / 16 * Math.PI * 2 + Math.random() * 0.3, d = 110 + Math.random() * 130;
      html += '<span class="celebrate-spark" style="--dx:' + Math.round(Math.cos(a) * d) + 'px;--dy:' + Math.round(Math.sin(a) * d - 30) +
        'px;--d:' + (0.15 + Math.random() * 0.25).toFixed(2) + 's;font-size:' + Math.round(14 + Math.random() * 18) + 'px">★</span>';
    }
    box.innerHTML = html;
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 2000);
  }

  function stopCooking() {
    clearTimeout(countdownTimer);
    closePop();
    clearInterval(tickTimer);
    tickTimer = null;
    cook = null;
    document.body.classList.remove('overdo');
    $('due-toast').hidden = true;
    hideTip(true);
  }

  function cookFinished() { return !!cook && cook.done.size === cook.steps.length; }

  // "You want to give up?" No keeps cooking, Yes leaves to the recipe page.
  // Once everything is done there is nothing to give up: Exit goes home.
  function askGiveUp() {
    if (cookFinished()) { stopCooking(); show('recipes'); return; }
    var d = $('exit-dialog');
    if (!d.open) openDialog(d);
    $('exit-no').focus();
  }
  $('btn-cook-exit').addEventListener('click', askGiveUp);
  $('exit-no').addEventListener('click', function () { $('exit-dialog').close(); });
  $('exit-yes').addEventListener('click', function () {
    $('exit-dialog').close();
    stopCooking();
    history.back();
  });

  // Map view needs a saved kitchen layout; until then the button explains why.
  var viewTipTimer = null;
  function showViewTip() {
    $('view-tip').hidden = false;
    clearTimeout(viewTipTimer);
    viewTipTimer = setTimeout(function () { $('view-tip').hidden = true; }, 3500);
  }
  $('btn-view').addEventListener('click', function () {
    if (!state.layoutSaved) { showViewTip(); return; }
    state.mapView = !state.mapView;
    if (state.mapView) fullscreenTo(state.layoutWide === false ? 'portrait' : 'landscape');
    else leaveFullscreen();
    render();
  });
  $('btn-view').addEventListener('mouseenter', function () { if (!state.layoutSaved) showViewTip(); });
  $('btn-view').addEventListener('focus', function () { if (!state.layoutSaved) showViewTip(); });
  $('btn-view').addEventListener('mouseleave', function () { $('view-tip').hidden = true; });

  // The rotate buttons show the shape they switch to.
  function markOrientation() { document.documentElement.classList.toggle('is-landscape', landscape.matches); }
  markOrientation();
  landscape.addEventListener('change', function () {
    markOrientation();
    if (cook) render();
  });
  window.addEventListener('resize', function () { if (cook && isMap()) render(); });

  function ingItem(i) {
    var base = cook.ingredients.filter(function (x) { return x.id === i.id; })[0];
    var name = (i.label || (base ? base.name : i.id)).replace(/\s*\([^)]*\)/g, '');
    return '<li>' + ingImg(i) + '<span>' + esc(name) + '</span>' + (i.qty ? '<b>' + esc(units(i.qty)) + '</b>' : '') + '</li>';
  }

  function cardFor(step) {
    if (cook.els[step.id]) return cook.els[step.id];
    var el = document.createElement('article');
    el.className = 'step';
    el.setAttribute('data-area', step.area);
    el.setAttribute('data-step', step.id);

    var tools = step.tools.map(function (id) {
      var eq = window.EQUIPMENT[id];
      return eq.icon ? '<img class="icon" src="' + esc(eq.icon) + '" alt="' + esc(L(eq.name)) + '" title="' + esc(L(eq.name)) + '">' :
        '<span class="tool-label">' + esc(L(eq.name)) + '</span>';
    }).join('');
    var ings = step.ings.map(ingItem).join('');
    var body = step.parts
      ? '<ol class="step-parts">' + step.parts.map(function (p) { return '<li><b>' + esc(p.title) + ':</b> ' + linkRecipes(units(p.text)) + '</li>'; }).join('') + '</ol>'
      : '<p class="step-text">' + linkRecipes(units(step.text)) + '</p>';

    el.innerHTML =
      '<div class="step-head">' +
        '<span class="area-badge"><span><img class="icon" alt="" src="' + AREAS[step.area].icon + '"></span>' + ht(step.area) + '</span>' +
        '<span class="step-tools">' + tools + '</span>' +
      '</div>' +
      '<h3>' + esc(step.title) + '</h3>' +
      body +
      (ings ? '<ul class="step-ings">' + ings + '</ul>' : '') +
      '<p class="done-when">' + ht('doneWhen') + esc(units(step.doneWhen)) + '</p>' +
      (step.overcook ? '<p class="overdo-note" role="alert">' + ht('dontOverdo') + '</p>' : '') +
      '<div class="step-foot">' +
        '<div class="ring">' +
          '<svg viewBox="0 0 92 92" aria-hidden="true"><circle class="ring-track" cx="46" cy="46" r="40"/>' +
          '<circle class="ring-fill" cx="46" cy="46" r="40" stroke-dasharray="' + RING + '" stroke-dashoffset="' + RING + '"/></svg>' +
          '<div class="ring-center">' +
            '<button class="btn-start" type="button">' + ht('start') + '<br>' + fmt(step.duration) + '</button>' +
            '<span class="ring-time" hidden></span>' +
          '</div>' +
        '</div>' +
        '<button class="btn btn-primary btn-done" type="button">' + esc(doneLabel(step)) + '</button>' +
      '</div>';

    el.querySelector('.btn-start').addEventListener('click', function (e) {
      if (cook.status[step.id] !== 'active') return;
      cook.started[step.id] = Date.now();
      e.currentTarget.hidden = true;
      el.querySelector('.ring-time').hidden = false;
      tick();
    });
    el.querySelector('.btn-done').addEventListener('click', function () { finishStep(step); });
    // Compact map cards (short screens) open and close by tapping the title.
    el.querySelector('h3').addEventListener('click', function () {
      el.classList.toggle('expanded');
      if (isMap()) render();
    });
    cook.els[step.id] = el;
    return el;
  }

  // Classes and texts that follow the step's status.
  function updateCard(step, el) {
    var st = cook.status[step.id];
    var running = !!cook.started[step.id];
    el.querySelector('.btn-start').disabled = st !== 'active';
    el.querySelector('.btn-start').hidden = running;
    el.querySelector('.ring-time').hidden = !running;
  }

  function finishStep(step) {
    if (cook.status[step.id] !== 'active') return;
    cook.done.add(step.id);
    delete cook.started[step.id];
    var el = cook.els[step.id];
    if (el) el.classList.remove('time-up', 'expanded');
    var r = refresh();
    render();
    markNew(r.fresh);
    showTips(r.active);
    updateClocks();
  }

  // Puts the cards into a container in the given order, only moving what changed.
  function syncChildren(container, els) {
    els.forEach(function (el, i) {
      var kids = Array.prototype.filter.call(container.children, function (c) { return !c.classList.contains('leaving'); });
      if (kids[i] !== el) container.insertBefore(el, kids[i] || null);
    });
  }

  function render() {
    if (!cook) return;
    refresh();
    var map = isMap();
    var total = cook.steps.length;
    $('cook-count').textContent = t('stepsDone', { d: cook.done.size, n: total });
    $('cook-progress').style.width = (cook.done.size / total * 100) + '%';
    var vb = $('btn-view');
    vb.setAttribute('aria-label', map ? t('listView') : t('mapView'));
    vb.setAttribute('aria-pressed', String(map));
    $('screen-cook').classList.toggle('is-map', map);
    vb.classList.toggle('is-disabled', !state.layoutSaved);
    vb.classList.toggle('is-ready', state.layoutSaved);
    vb.setAttribute('aria-disabled', String(!state.layoutSaved));

    var finished = cook.done.size === total;
    $('screen-cook').classList.toggle('is-finished', finished);
    $('cook-finished').hidden = !finished;
    $('cook-list').hidden = map || finished;
    $('cook-map').hidden = !map || finished;
    if (finished) {
      if (!cook.celebrated) { cook.celebrated = true; celebrate(); }
      clearInterval(tickTimer);
      document.body.classList.remove('overdo');
      hideTip(true);
      return;
    }

    var els = cook.slots.map(function (id) {
      var s = stepById(id), el = cardFor(s);
      updateCard(s, el);
      return el;
    });
    if (map) {
      renderMap(cook.slots.map(function (id) { return notifFor(stepById(id)); }));
    } else {
      closePop();
      syncChildren($('cook-list'), els);
    }
  }

  // ---------- Map notifications ----------
  // On the map every open step is a small notification on its area: a moving
  // icon, the step's title, its timer, and Start / Done. Tapping it opens the
  // full card in a popup next to the area.
  var NOTIF_RING = 2 * Math.PI * 16;
  function notifFor(step) {
    if (cook.notifs[step.id]) return cook.notifs[step.id];
    var n = document.createElement('div');
    n.className = 'notif';
    n.setAttribute('data-step', step.id);
    n.setAttribute('data-area', step.area);
    var toolWithIcon = step.tools.map(function (id) { return window.EQUIPMENT[id]; }).filter(function (eq) { return eq.icon; })[0];
    var icon = toolWithIcon ? toolWithIcon.icon : AREAS[step.area].icon;
    n.innerHTML =
      '<span class="notif-icon"><svg class="notif-ring" viewBox="0 0 36 36" aria-hidden="true">' +
      '<circle class="nr-track" cx="18" cy="18" r="16"/><circle class="nr-fill" cx="18" cy="18" r="16" ' +
      'stroke-dasharray="' + NOTIF_RING + '" stroke-dashoffset="0"/></svg><img class="icon" alt="" src="' + icon + '"></span>' +
      '<button class="notif-open" type="button"><span class="notif-title">' + esc(step.title) + '</span>' +
      '<span class="notif-meta"><span class="notif-time">' + fmt(step.duration) + '</span> · <span class="notif-hint">' + ht('tapInfo') + '</span></span></button>' +
      '<button class="notif-btn notif-start" type="button" aria-label="' + ht('start') + '">▶</button>' +
      '<button class="notif-btn notif-done" type="button" aria-label="' + esc(doneLabel(step)) + '">✓</button>';
    n.querySelector('.notif-open').addEventListener('click', function () { openPop(step, n); });
    n.querySelector('.notif-start').addEventListener('click', function (e) {
      cardFor(step).querySelector('.btn-start').click();
      e.currentTarget.hidden = true;
      n.classList.add('is-running');
    });
    n.querySelector('.notif-done').addEventListener('click', function () { finishStep(step); });
    n.querySelector('.notif-start').hidden = !!cook.started[step.id];
    n.classList.toggle('is-running', !!cook.started[step.id]);
    cook.notifs[step.id] = n;
    return n;
  }

  var popStep = null;
  function openPop(step, anchor) {
    var pop = $('step-pop'), body = $('step-pop-body');
    var card = cardFor(step);
    updateCard(step, card);
    body.innerHTML = '';
    body.appendChild(card);
    // The card is open now: no need for its "New thing to do!" label.
    card.querySelectorAll('.new-badge').forEach(function (b) { b.remove(); });
    pop.hidden = false;
    popStep = step.id;
    // Next to the notification's area: to the right if it fits, else to the left, else centred.
    var area = anchor.closest('.map-area') || anchor;
    var a = area.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    var vw = window.innerWidth, vh = window.innerHeight, left;
    if (a.right + 8 + w <= vw - 8) left = a.right + 8;
    else if (a.left - 8 - w >= 8) left = a.left - 8 - w;
    else left = (vw - w) / 2;
    pop.style.left = Math.round(left) + 'px';
    pop.style.top = Math.round(clamp(a.top, 8, Math.max(8, vh - h - 8))) + 'px';
    card.querySelector('.btn-done').focus();
  }
  function closePop() {
    var pop = $('step-pop');
    if (pop.hidden) return;
    pop.hidden = true;
    var body = $('step-pop-body');
    while (body.firstChild) body.removeChild(body.firstChild);
    popStep = null;
  }
  $('step-pop-close').addEventListener('click', closePop);
  document.addEventListener('pointerdown', function (e) {
    if (!$('step-pop').hidden && !e.target.closest('#step-pop') && !e.target.closest('.notif-open')) closePop();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(); });

  // Only the areas this recipe uses, back to front.
  function usedAreas() {
    return AREA_KEYS.filter(function (key) {
      return cook.steps.some(function (s) { return s.area === key; });
    });
  }

  // Stretches and centres the used areas so they fill the map, with empty
  // space around the arrangement cut away. Writes into cook.view.
  function fitView(keys) {
    var minX = 1, minY = 1, maxX = 0, maxY = 0, pad = 0.01;
    keys.forEach(function (k) {
      var r = state.layout[k];
      minX = Math.min(minX, r.x); minY = Math.min(minY, r.y);
      maxX = Math.max(maxX, r.x + r.w); maxY = Math.max(maxY, r.y + r.h);
    });
    var sx = Math.min((1 - 2 * pad) / (maxX - minX), 3), sy = Math.min((1 - 2 * pad) / (maxY - minY), 3);
    var f = cook.fit = { sx: sx, sy: sy, minX: minX, minY: minY, ox: (1 - (maxX - minX) * sx) / 2, oy: (1 - (maxY - minY) * sy) / 2 };
    keys.forEach(function (k) {
      var r = state.layout[k];
      cook.view[k] = { x: f.ox + (r.x - f.minX) * sx, y: f.oy + (r.y - f.minY) * sy, w: r.w * sx, h: r.h * sy };
    });
  }

  // Map position back to the saved layout.
  function fromView(v) {
    var f = cook.fit, w = Math.min(1, v.w / f.sx), h = Math.min(1, v.h / f.sy);
    return {
      x: clamp((v.x - f.ox) / f.sx + f.minX, 0, 1 - w),
      y: clamp((v.y - f.oy) / f.sy + f.minY, 0, 1 - h),
      w: w,
      h: h
    };
  }

  // els: the notifications to place on the map.
  function renderMap(els) {
    var mapEl = $('cook-map');
    var keys = usedAreas();
    mapEl.style.setProperty('--head-h', document.querySelector('.cook-head').offsetHeight + 'px');
    if (!cook.view) cook.view = {};
    // Keep the view still while an area is being dragged; refit afterwards.
    // All areas count for the fit, so unused ones stay (faintly) in view too.
    if (!mapEl.querySelector('.map-area.dragging')) fitView(AREA_KEYS);
    if (!mapEl.children.length) {
      AREA_KEYS.forEach(function (key) {
        var used = keys.indexOf(key) >= 0;
        var a = document.createElement('section');
        a.className = 'map-area area-' + key + (used ? '' : ' unused');
        a.style.zIndex = Z[key];
        a.setAttribute('data-area', key);
        a.setAttribute('aria-label', t(key));
        if (!used) a.setAttribute('aria-hidden', 'true');
        a.innerHTML =
          '<div class="map-area-head"><img class="icon" alt="" src="' + AREAS[key].icon + '"><span class="label">' + ht(key) + '</span>' +
          (used ? '<button class="area-move" type="button" aria-label="' + ht('moveArea', { a: t(key) }) + '">' + MOVE_ICON + '</button>' : '') +
          '</div>';
        mapEl.appendChild(a);
        if (used) {
          makeMovable(a, key, mapEl, cook.view, AREA_KEYS, {
            handle: a.querySelector('.area-move'),
            onChange: function () { state.layout[key] = fromView(cook.view[key]); },
            onEnd: render
          });
        }
      });
      // Notifications sit on their own layer above every area, so no area can cover them.
      var layer = document.createElement('div');
      layer.className = 'map-layer';
      keys.forEach(function (key) {
        var g = document.createElement('div');
        g.className = 'map-group';
        g.setAttribute('data-area', key);
        layer.appendChild(g);
      });
      mapEl.appendChild(layer);
    }
    AREA_KEYS.forEach(function (key) {
      placeEl(mapEl.querySelector('.map-area[data-area="' + key + '"]'), cook.view[key]);
    });
    keys.forEach(function (key) {
      var a = mapEl.querySelector('.map-area[data-area="' + key + '"]');
      var mine = els.filter(function (el) { return el.getAttribute('data-area') === key; });
      var g = mapEl.querySelector('.map-group[data-area="' + key + '"]');
      syncChildren(g, mine);
      a.classList.toggle('is-empty', mine.length === 0);
    });

    // Notification groups may cover areas, but not each other: a group that would cover
    // another moves below it (or above it) when there is room, and no group runs
    // past the bottom of the map.
    // Each group hangs below its area's name; groups on the right half hang leftwards.
    var mapW = mapEl.clientWidth, mapH = mapEl.clientHeight, gap = 8, placed = [];
    keys.map(function (key) { return mapEl.querySelector('.map-group[data-area="' + key + '"]'); })
      .filter(function (g) { return g.children.length; })
      .map(function (g) { return { g: g, a: mapEl.querySelector('.map-area[data-area="' + g.getAttribute('data-area') + '"]') }; })
      .sort(function (p, q) { return p.a.offsetTop - q.a.offsetTop; })
      .forEach(function (p) {
        var a = p.a, cards = p.g, v = cook.view[a.getAttribute('data-area')];
        var w = Math.min(mapW, Math.max(a.offsetWidth, 230));
        var left = v.x + v.w / 2 > 0.5 ? a.offsetLeft + a.offsetWidth - w : a.offsetLeft;
        left = clamp(left, 0, Math.max(0, mapW - w));
        cards.style.width = w + 'px';
        cards.style.left = left + 'px';
        var r = { left: left, top: a.offsetTop + 40, w: w, h: cards.offsetHeight };
        function fitTop(top) { return Math.max(0, Math.min(top, mapH - r.h)); }
        function fitLeft(l) { return Math.max(0, Math.min(l, mapW - r.w)); }
        function hit(top, l) {
          return placed.some(function (p) {
            return l < p.left + p.w + gap && p.left < l + r.w + gap && top < p.top + p.h + gap && p.top < top + r.h + gap;
          });
        }
        // Try its own spot first, then below, above, right of and left of each placed group;
        // the free spot closest to its area wins. With no free spot it stays and overlaps.
        var spots = [{ top: fitTop(r.top), left: r.left }];
        placed.forEach(function (p) {
          spots.push({ top: p.top + p.h + gap, left: r.left }, { top: p.top - r.h - gap, left: r.left },
            { top: fitTop(r.top), left: p.left + p.w + gap }, { top: fitTop(r.top), left: p.left - r.w - gap });
        });
        var best = null;
        spots.forEach(function (sp) {
          if (sp.top < 0 || sp.top + r.h > mapH || sp.left < 0 || sp.left + r.w > mapW || hit(sp.top, sp.left)) return;
          var d = Math.abs(sp.top - r.top) + Math.abs(sp.left - r.left);
          if (!best || d < best.d) best = { top: sp.top, left: sp.left, d: d };
        });
        // Still nothing: scan the whole map height (at its own, the left and the right edge).
        if (!best) {
          [fitLeft(r.left), 0, fitLeft(mapW - r.w)].forEach(function (l) {
            for (var y = 0; y + r.h <= mapH; y += 8) {
              if (hit(y, l)) continue;
              var d = Math.abs(y - r.top) + Math.abs(l - r.left);
              if (!best || d < best.d) best = { top: y, left: l, d: d };
            }
          });
        }
        var top = best ? best.top : fitTop(r.top), gl = best ? best.left : fitLeft(r.left);
        cards.style.top = top + 'px';
        cards.style.left = gl + 'px';
        placed.push({ left: gl, top: top, w: r.w, h: r.h });
      });
  }

  // Time left: what is still open, scheduled from now. Steps that are running
  // count only their remaining time; late steps count as nothing left.
  function updateClocks() {
    if (!cook) return;
    var now = Date.now();
    var left = scheduleSeconds(cook.steps, function (s) {
      if (isDone(s.id)) return 0;
      if (cook.started[s.id]) return Math.max(0, s.duration - (now - cook.started[s.id]) / 1000);
      return s.duration;
    });
    $('cook-left').textContent = fmt(left);
    if (cook.t0) $('cook-clock').textContent = fmt((now - cook.t0) / 1000);
  }

  function tick() {
    if (!cook) return;
    updateClocks();
    var overdo = false;
    Object.keys(cook.started).forEach(function (id) {
      var el = cook.els[id];
      if (!el) return;
      var step = stepById(id);
      var elapsed = (Date.now() - cook.started[id]) / 1000;
      var left = step.duration - elapsed;
      var up = left <= 0;
      el.querySelector('.ring-time').innerHTML = (up ? '+' + fmt(-left) : fmt(left)) + '<small>' + (up ? ht('over') : ht('left')) + '</small>';
      el.querySelector('.ring-fill').setAttribute('stroke-dashoffset', String(RING * (1 - Math.min(1, elapsed / step.duration))));
      // Haptic feedback (navigator.vibrate) comes in a later iteration.
      el.classList.toggle('time-up', up);
      var n = cook.notifs[id];
      if (n) {
        // The ring empties clockwise as time runs out: yellow in the last quarter,
        // red (with a nudge) in the last tenth.
        var share = Math.max(0, left) / step.duration;
        n.querySelector('.notif-time').textContent = up ? '+' + fmt(-left) : fmt(left);
        n.querySelector('.nr-fill').setAttribute('stroke-dashoffset', String(NOTIF_RING * (1 - share)));
        n.classList.toggle('ring-warn', share <= 0.25 && share > 0.10);
        n.classList.toggle('ring-late', share <= 0.10);
        n.classList.toggle('time-up', up);
      }
      if (up && step.overcook) overdo = true;
    });
    // Something on the heat is past its time: the whole screen pulses red.
    document.body.classList.toggle('overdo', overdo);
    dueToast();
  }

  // ---------- "Time's up" pop-over ----------
  // When a card's time is up but the card is off screen, a pop-over says so; tap it to go there.
  var dueTarget = null;

  function visibleEnough(el) {
    var r = el.getBoundingClientRect();
    var top = Math.max(r.top, document.querySelector('.cook-head').getBoundingClientRect().bottom);
    var bottom = Math.min(r.bottom, window.innerHeight);
    var box = el.closest('.map-area-cards');
    if (box) {
      var b = box.getBoundingClientRect();
      top = Math.max(top, b.top);
      bottom = Math.min(bottom, b.bottom);
    }
    return bottom - top >= Math.min(80, r.height * 0.5);
  }

  function dueToast() {
    var toast = $('due-toast');
    if (isMap()) { toast.hidden = true; return; }
    var late = Object.keys(cook.started).map(function (id) { return cook.els[id]; }).filter(function (el) {
      return el && el.classList.contains('time-up') && !visibleEnough(el);
    });
    dueTarget = late[0] || null;
    if (!dueTarget) { toast.hidden = true; return; }
    var step = stepById(dueTarget.getAttribute('data-step'));
    toast.textContent = t('timesUp', { x: step.title }) + (step.overcook ? ' · ' + t('dontOverdo') : '');
    toast.hidden = false;
  }

  $('due-toast').addEventListener('click', function () {
    if (!dueTarget) return;
    dueTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('due-toast').hidden = true;
  });

  // ---------- "New thing to do!" ----------
  // A label pops up on each new card and fades out within 10 seconds.
  function markNew(fresh) {
    fresh.forEach(function (s) {
      var el = cook.els[s.id];
      if (!el) return;
      var badge = document.createElement('span');
      badge.className = 'new-badge';
      badge.textContent = t('newThing');
      badge.addEventListener('animationend', function () { badge.remove(); });
      el.appendChild(badge);
      var n = cook.notifs[s.id];
      if (n) n.classList.add('is-new');
    });
  }

  // ---------- Tips ----------
  var tipQueue = [];
  var tipTimer = null;
  var tipOpen = false;

  function showTips(steps) {
    if (!cook || !cook.t0) return;
    steps.forEach(function (s) {
      if (s.tip && !cook.tipsShown.has(s.id)) {
        cook.tipsShown.add(s.id);
        tipQueue.push({ label: t('tip') + ' · ' + s.title, text: s.tipText || t('tipPlaceholder') });
      }
    });
    nextTip();
  }

  function nextTip() {
    if (tipOpen || !tipQueue.length) return;
    var item = tipQueue.shift();
    var tip = $('tip');
    $('tip-label').textContent = item.label;
    $('tip-text').textContent = item.text;
    tip.style.transform = '';
    tip.style.opacity = '';
    tip.hidden = false;
    tipOpen = true;
    tipTimer = setTimeout(function () { hideTip(false, 1); }, 10000);
  }

  // dir: 1 = slide out right, -1 = left
  function hideTip(now, dir) {
    clearTimeout(tipTimer);
    var tip = $('tip');
    if (now) {
      tipQueue = [];
      tip.hidden = true;
      tipOpen = false;
      return;
    }
    if (!tipOpen) return;
    tip.style.transform = 'translateX(calc(-50% + ' + (dir || 1) * 120 + 'vw))';
    tip.style.opacity = '0';
    setTimeout(function () {
      tip.hidden = true;
      tipOpen = false;
      nextTip();
    }, 300);
  }

  $('tip-close').addEventListener('click', function () { hideTip(false, 1); });

  (function swipeTip() {
    var tip = $('tip');
    var startX = null, dx = 0;
    tip.addEventListener('pointerdown', function (e) {
      if (e.target.closest('.tip-close')) return;
      startX = e.clientX;
      dx = 0;
      tip.setPointerCapture(e.pointerId);
      tip.classList.add('dragging');
    });
    tip.addEventListener('pointermove', function (e) {
      if (startX === null) return;
      dx = e.clientX - startX;
      tip.style.transform = 'translateX(calc(-50% + ' + dx + 'px))';
      tip.style.opacity = String(1 - Math.min(Math.abs(dx) / 300, 0.7));
    });
    function end() {
      if (startX === null) return;
      startX = null;
      tip.classList.remove('dragging');
      if (Math.abs(dx) > 80) {
        hideTip(false, dx > 0 ? 1 : -1);
      } else {
        tip.style.transform = '';
        tip.style.opacity = '';
      }
    }
    tip.addEventListener('pointerup', end);
    tip.addEventListener('pointercancel', end);
  })();

  // ---------- "How does it taste?" 1 to 5 stars ----------
  // Hovering fills the stars up to the one under the pointer and shows its words; a click sets the rating.
  var starRow = document.querySelector('#taste .stars-row');
  for (var n = 1; n <= 5; n++) {
    var lbl = document.createElement('label');
    lbl.className = 'star';
    lbl.innerHTML = '<input type="radio" name="taste" value="' + n + '"><span aria-hidden="true">★</span>';
    lbl.querySelector('input').setAttribute('aria-label', t('stars', { n: n }) + ': ' + t('star' + n));
    starRow.appendChild(lbl);
  }
  var starLabels = starRow.querySelectorAll('.star');

  function paintStars(count) {
    starLabels.forEach(function (l, i) { l.classList.toggle('lit', i < count); });
    $('star-text').textContent = count ? t('star' + count) : '';
  }
  function currentStars() {
    var c = starRow.querySelector('input:checked');
    return c ? Number(c.value) : 0;
  }
  function resetStars() {
    starRow.querySelectorAll('input').forEach(function (i) { i.checked = false; });
    paintStars(0);
  }
  starLabels.forEach(function (l, i) {
    l.addEventListener('mouseenter', function () { paintStars(i + 1); });
  });
  starRow.addEventListener('mouseleave', function () { paintStars(currentStars()); });
  starRow.addEventListener('change', function (e) {
    paintStars(currentStars());
    var star = e.target.closest('.star');
    var pop = document.createElement('span');
    pop.className = 'star-pop';
    pop.setAttribute('aria-hidden', 'true');
    pop.textContent = '★';
    star.appendChild(pop);
    pop.addEventListener('animationend', function () { pop.remove(); });
  });

  // ---------- Start ----------
  applyStrings();
  renderFilters();
  renderRecipes();
  // The app sets the scroll position per screen itself; the browser shouldn't restore old ones.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  // Welcome steps: 1) kitchen layout or skip, 2) fridge or straight to the recipes.
  $('btn-welcome-layout').addEventListener('click', function () { openLayout(); });
  $('btn-welcome-skip').addEventListener('click', function () { show('start'); });
  $('btn-start-fridge').addEventListener('click', function () { show('fridge'); });
  $('btn-start-recipes').addEventListener('click', function () { show('recipes'); });
  $('btn-fridge-back').addEventListener('click', function () { show('recipes'); });

  // The plain address opens the welcome step. A link to another screen opens it
  // on top of the recipe list, so Back still leads to the list. A running cook
  // can't be restored after a reload.
  var start = route();
  if (start.screen === 'welcome') {
    show('welcome', true);
    history.replaceState({ screen: 'welcome' }, '', screenUrl('welcome'));
  } else {
    show('recipes', true);
    history.replaceState({ screen: 'recipes' }, '', screenUrl('recipes'));
    if (start.recipe) openDetails(start.recipe);
    else if (start.screen === 'layout') openLayout();
    else if (start.screen === 'start' || start.screen === 'fridge') show(start.screen);
  }
})();
