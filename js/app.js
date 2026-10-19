(function () {
  'use strict';

  // ---------- Text (English only for now) ----------
  var STRINGS = {
    en: {
      appName: 'Cook',
      welcome: "Let's get you set up.",
      options: 'Options',
      theme: 'Theme',
      themeSystem: 'System',
      themeLight: 'Light',
      themeDark: 'Dark',
      close: 'Close',
      language: 'Language',
      kitchenLayout: 'Kitchen layout',
      optional: '(optional)',
      setupLayout: 'Set up kitchen layout',
      layoutDefault: 'Using the default layout.',
      layoutSaved: 'Your kitchen layout is saved.',
      continue: 'Continue',
      landscapeNote: 'Use your device in landscape mode to set up!',
      layoutHelp: 'Drag to move, drag the corner to resize. Things can only overlap the countertop.',
      cancel: 'Cancel',
      save: 'Save',
      rotate: 'Turn your device sideways to set up your kitchen.',
      back: 'Back',
      pickRecipe: 'Pick a recipe',
      people: 'people',
      min: 'min',
      diet: 'Diet',
      allergens: 'Allergens',
      perPerson: 'Per person (estimated)',
      perPerson_jar: 'Per jar (estimated)',
      perPerson_batch: 'Per batch (estimated)',
      howMany: 'For how many people?',
      howMany_jar: 'How many jars?',
      howMany_batch: 'How many batches?',
      count: '{n} people',
      count_jar: '{n} jars',
      count_batch: '{n} batches',
      count1: '1 person',
      count1_jar: '1 jar',
      count1_batch: '1 batch',
      perServing: 'per person',
      perServing_jar: 'per jar',
      perServing_batch: 'per batch',
      hours: '{h} h {m} min',
      carbsShort: 'carbs',
      proteinShort: 'protein',
      guideMode: 'How should we guide you?',
      modeDetailed: 'Detail every step',
      modeQuick: "I know what I'm doing",
      showIngredients: 'Show ingredients',
      hasMeat: 'Has meat',
      noMeat: 'No meat',
      pork: 'pork',
      hasSeafood: 'Has seafood',
      noSeafood: 'No seafood',
      vegetarian: 'Vegetarian',
      notVegetarian: 'Not vegetarian',
      vegan: 'Vegan',
      notVegan: 'Not vegan',
      none: 'None',
      kcal: 'Energy',
      carbs: 'Carbohydrate',
      protein: 'Protein',
      fat: 'Fat',
      satFat: 'of which saturated',
      fiber: 'Fibre',
      salt: 'Salt',
      ingredientsFor: 'Ingredients for {x}',
      addShopping: 'Add to shopping list',
      gotEverything: "I got everything, let's start!",
      exit: 'Exit',
      exitConfirm: 'Stop cooking? Your progress will be lost.',
      stepsDone: '{d} of {n} steps done',
      mapView: 'Map view',
      listView: 'List view',
      start: 'Start',
      done: "I'm done",
      doneWhen: 'Done when: ',
      about: 'about {t}',
      left: '{t} left',
      over: "Time's up +{t}",
      newThing: 'New thing to do!',
      ingredientsHere: 'Ingredients here',
      dontOverdo: "Don't overdo!",
      stars: '{n} of 5 stars',
      tip: 'Tip',
      tipPlaceholder: 'Tip placeholder',
      dismissTip: 'Dismiss tip',
      finishedTitle: 'You did it! Bon appétit!',
      howTaste: 'How does it taste?',
      uploadPhoto: 'Upload photo',
      share: 'Share',
      backHome: 'Back to home',
      moveHint: 'arrow keys move, Alt + arrow keys resize',
      moveArea: 'Move {a} (drag, or use arrow keys)',
      stove: 'Stove',
      oven: 'Oven',
      countertop: 'Countertop',
      board: 'Chopping board',
      fridge: 'Fridge',
      freezer: 'Freezer',
      me: 'Me'
    }
  };
  var lang = 'en';

  function t(key, vars) {
    var s = STRINGS[lang][key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
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

  var $ = function (id) { return document.getElementById(id); };
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // ---------- Options: theme and language ----------
  // In memory only: this is a one-shot test, nothing is stored on the device.
  // Changes apply right away; Save or a click outside the popup closes it.
  $('btn-options').addEventListener('click', function () { $('options-dialog').showModal(); });
  $('options-dialog').addEventListener('click', function (e) {
    if (e.target === e.currentTarget) e.currentTarget.close();
  });
  document.querySelectorAll('input[name="theme"]').forEach(function (r) {
    r.addEventListener('change', function () { document.documentElement.setAttribute('data-theme', r.value); });
  });
  document.querySelectorAll('.lang-select').forEach(function (sel) {
    sel.addEventListener('change', function () {
      lang = sel.value;
      document.querySelectorAll('.lang-select').forEach(function (s) { s.value = lang; });
      applyStrings();
    });
  });

  // ---------- Kitchen areas ----------
  function svgUri(body) {
    return 'data:image/svg+xml,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1c1917" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>');
  }
  // Stand-ins until these get icon files: countertop, fridge, freezer and the "Me" figure.
  var ICON = {
    countertop: svgUri('<rect x="2.5" y="6" width="19" height="3" rx="1"/><rect x="4" y="9" width="16" height="10.5" rx="1"/><path d="M12 9v10.5M10 14h.01M14 14h.01"/>'),
    fridge: svgUri('<rect x="5.5" y="2.5" width="13" height="19" rx="2"/><path d="M5.5 9.5h13M8.5 5.5v2M8.5 12.5v3"/>'),
    freezer: svgUri('<rect x="5.5" y="2.5" width="13" height="19" rx="2"/><path d="M8.5 5.5v2M12 10.5v7M9 12.25l6 3.5M9 15.75l6-3.5"/>'),
    me: svgUri('<circle cx="12" cy="6.5" r="3"/><path d="M6.5 20.5v-4.5a5.5 5.5 0 0 1 11 0v4.5z"/>')
  };
  var MOVE_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/></svg>';

  // Listed back to front: the countertop is always behind, the chopping board always on top.
  var AREAS = {
    countertop: { icon: ICON.countertop },
    stove: { icon: 'icons/stovetop.svg' },
    oven: { icon: 'icons/oven.svg' },
    fridge: { icon: ICON.fridge },
    freezer: { icon: ICON.freezer },
    board: { icon: 'icons/chopping-board.svg' }
  };
  var AREA_KEYS = Object.keys(AREAS);
  var LAYOUT_KEYS = AREA_KEYS.concat(['me']);
  var Z = { countertop: 1, stove: 2, oven: 2, fridge: 2, freezer: 2, me: 2, board: 3 };
  // Smallest size per block; areas that hold several cards (stove, countertop) stay taller.
  var MIN = {
    countertop: { w: 0.20, h: 0.30 },
    stove: { w: 0.18, h: 0.40 },
    oven: { w: 0.14, h: 0.22 },
    fridge: { w: 0.10, h: 0.25 },
    freezer: { w: 0.10, h: 0.25 },
    board: { w: 0.12, h: 0.18 },
    me: { w: 0.06, h: 0.10 }
  };

  // Positions and sizes as fractions of the canvas. No overlaps except on the countertop.
  var DEFAULT_LAYOUT = {
    countertop: { x: 0.30, y: 0.04, w: 0.40, h: 0.44 },
    stove: { x: 0.03, y: 0.04, w: 0.24, h: 0.40 },
    oven: { x: 0.03, y: 0.50, w: 0.24, h: 0.30 },
    fridge: { x: 0.73, y: 0.04, w: 0.12, h: 0.40 },
    freezer: { x: 0.86, y: 0.04, w: 0.11, h: 0.40 },
    board: { x: 0.52, y: 0.24, w: 0.16, h: 0.22 },
    me: { x: 0.45, y: 0.60, w: 0.10, h: 0.18 }
  };

  function overlaps(a, b) {
    var e = 0.001;
    return a.x < b.x + b.w - e && b.x < a.x + a.w - e && a.y < b.y + b.h - e && b.y < a.y + a.h - e;
  }

  // Only the countertop may be overlapped.
  function collides(layout, key, rect, keys) {
    if (key === 'countertop') return false;
    return keys.some(function (other) {
      return other !== key && other !== 'countertop' && overlaps(rect, layout[other]);
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
      } else {
        next = { x: r.x, y: r.y, w: clamp(r.w + dx, MIN[key].w, 1 - r.x), h: clamp(r.h + dy, MIN[key].h, 1 - r.y) };
      }
      tryPlace(layout, key, next, keys);
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
        next = { x: r.x, y: r.y, w: clamp(r.w + d[0], MIN[key].w, 1 - r.x), h: clamp(r.h + d[1], MIN[key].h, 1 - r.y) };
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

  var state = {
    layout: clone(DEFAULT_LAYOUT),
    recipe: null,
    choices: null,
    built: null,
    mapView: false // desktop toggle
  };

  // ---------- Screens ----------
  var SCREENS = ['setup', 'layout', 'recipes', 'details', 'ingredients', 'cook'];
  function show(name) {
    SCREENS.forEach(function (s) { $('screen-' + s).hidden = s !== name; });
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) {
      stopCooking();
      show(go.getAttribute('data-go'));
    }
  });

  // ---------- Setup ----------
  $('btn-layout').addEventListener('click', openLayout);
  $('btn-setup-continue').addEventListener('click', function () {
    renderRecipes();
    show('recipes');
  });

  // ---------- Kitchen layout editor ----------
  var draft = null;

  function openLayout() {
    draft = clone(state.layout);
    show('layout');
    var canvas = $('layout-canvas');
    canvas.innerHTML = '';
    LAYOUT_KEYS.forEach(function (key) {
      var el = document.createElement('div');
      el.className = 'block area-' + key + (key === 'me' ? ' block-me' : '');
      el.style.zIndex = Z[key];
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', t(key) + ', ' + t('moveHint'));
      el.innerHTML = '<img class="icon" alt="" src="' + (key === 'me' ? ICON.me : AREAS[key].icon) + '"><span>' + t(key) + '</span>' +
        (key === 'me' ? '' : '<span class="resize" aria-hidden="true"></span>');
      placeEl(el, draft[key]);
      makeMovable(el, key, canvas, draft, LAYOUT_KEYS, { resizer: el.querySelector('.resize') });
      canvas.appendChild(el);
    });
  }

  $('btn-layout-cancel').addEventListener('click', function () { show('setup'); });
  $('btn-layout-save').addEventListener('click', function () {
    state.layout = draft;
    var status = $('layout-status');
    status.setAttribute('data-i18n', 'layoutSaved');
    status.textContent = t('layoutSaved');
    show('setup');
  });

  // ---------- Recipes ----------
  function defaultChoices(r) {
    var c = { servings: r.defaultServings || 2, mode: 'detailed' };
    r.options.forEach(function (o) {
      c[o.id] = o.choices.filter(function (ch) { return ch.isDefault; })[0].id;
    });
    return c;
  }

  function prevInThread(steps, step) {
    var prev = null;
    for (var i = 0; i < steps.length && steps[i] !== step; i++) {
      if (steps[i].thread === step.thread) prev = steps[i];
    }
    return prev;
  }

  function depsOf(steps, step) {
    var prev = prevInThread(steps, step);
    return step.deps.concat(prev ? [prev.id] : []);
  }

  // Rough total: every step starts as soon as the steps it needs are done.
  // Repeats until nothing changes, so the order of the steps doesn't matter.
  function estimateMinutes(steps) {
    var end = {}, total = 0, changed = true, rounds = 0;
    while (changed && rounds++ <= steps.length) {
      changed = false;
      steps.forEach(function (s) {
        var start = depsOf(steps, s).reduce(function (m, d) { return Math.max(m, end[d] || 0); }, 0);
        if (end[s.id] !== start + s.duration) { end[s.id] = start + s.duration; changed = true; }
      });
    }
    steps.forEach(function (s) { total = Math.max(total, end[s.id]); });
    return Math.round(total / 60);
  }

  function fmtMinutes(min) {
    return min < 60 ? min + ' ' + t('min') : t('hours', { h: Math.floor(min / 60), m: min % 60 });
  }

  // Text that depends on what one serving is: a person (default), a jar or a batch.
  function unitText(r, key, vars) {
    var k = key + (r.unit && r.unit !== 'person' ? '_' + r.unit : '');
    return t(k, vars);
  }

  function infoFor(i) { return window.INGREDIENT_INFO[i.key || i.id]; }

  function dietInfo(built) {
    var tags = {}, allergens = [];
    built.ingredients.forEach(function (i) {
      var info = infoFor(i);
      if (!info) return;
      info.tags.forEach(function (tg) { tags[tg] = true; });
      info.allergens.forEach(function (a) { if (allergens.indexOf(a) < 0) allergens.push(a); });
    });
    var meat = !!tags.meat, seafood = !!(tags.fish || tags.seafood);
    var vegetarian = !meat && !seafood;
    var vegan = vegetarian && !tags.egg && !tags.dairy && !tags.honey;
    return {
      allergens: allergens,
      main: vegan ? [t('vegan')] : vegetarian ? [t('vegetarian')]
        : [meat ? t('hasMeat') + (tags.pork ? ' (' + t('pork') + ')' : '') : '', seafood ? t('hasSeafood') : ''].filter(Boolean),
      keywords: [
        meat ? t('hasMeat') + (tags.pork ? ' (' + t('pork') + ')' : '') : t('noMeat'),
        seafood ? t('hasSeafood') : t('noSeafood'),
        vegetarian ? t('vegetarian') : t('notVegetarian'),
        vegan ? t('vegan') : t('notVegan')
      ]
    };
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

  function renderRecipes() {
    var list = $('recipe-list');
    list.innerHTML = '';
    window.RECIPES.forEach(function (r) {
      var built = r.build(defaultChoices(r));
      var info = dietInfo(built), n = nutritionPerPerson(built);
      var chips = info.main.map(function (k) { return '<span class="keyword">' + k + '</span>'; })
        .concat(info.allergens.map(function (a) { return '<span class="keyword keyword-allergen">' + a + '</span>'; })).join('');
      var li = document.createElement('li');
      li.innerHTML =
        '<button class="recipe-card" type="button">' +
        '<img alt="" src="' + r.image + '">' +
        '<span class="recipe-card-body"><strong>' + r.name + '</strong>' +
        '<span class="hint">≈ ' + fmtMinutes(estimateMinutes(built.steps)) + '</span>' +
        '<span class="recipe-card-nutri">' + Math.round(n.kcal) + ' kcal · ' + Math.round(n.carbs) + ' g ' + t('carbsShort') +
        ' · ' + Math.round(n.protein) + ' g ' + t('proteinShort') + ' <span class="hint">' + unitText(r, 'perServing') + '</span></span>' +
        '<span class="keywords">' + chips + '</span></span>' +
        '</button>';
      li.firstChild.addEventListener('click', function () { openDetails(r); });
      list.appendChild(li);
    });
  }

  // ---------- Recipe details ----------
  function openDetails(r) {
    if (state.recipe !== r) {
      state.recipe = r;
      state.choices = defaultChoices(r);
    }
    $('det-img').src = r.image;
    $('det-name').textContent = r.name;

    var box = $('det-options');
    box.innerHTML = '';
    r.options.forEach(function (o) {
      var fs = document.createElement('fieldset');
      fs.className = 'choices';
      fs.innerHTML = '<legend>' + o.question + '</legend>' + o.choices.map(function (ch) {
        return '<label class="choice"><input type="radio" name="' + o.id + '" value="' + ch.id + '"' +
          (state.choices[o.id] === ch.id ? ' checked' : '') + '> <span>' + ch.label + '</span></label>';
      }).join('');
      box.appendChild(fs);
    });
    document.querySelectorAll('input[name="mode"]').forEach(function (i) { i.checked = i.value === state.choices.mode; });
    updateDetails();
    show('details');
  }

  function updateDetails() {
    var c = state.choices, r = state.recipe;
    state.built = r.build(c);
    $('srv-value').textContent = c.servings;
    $('srv-minus').disabled = c.servings <= 1;
    $('srv-plus').disabled = c.servings >= (r.maxServings || 8);
    $('det-time').textContent = '≈ ' + fmtMinutes(estimateMinutes(state.built.steps));
    $('det-howmany').textContent = unitText(r, 'howMany');
    $('det-per').textContent = unitText(r, 'perPerson');

    var info = dietInfo(state.built);
    $('det-diet').innerHTML = info.keywords.map(function (k) { return '<span class="keyword">' + k + '</span>'; }).join('');
    $('det-allergens').innerHTML = (info.allergens.length ? info.allergens : [t('none')])
      .map(function (a) { return '<span class="keyword">' + a + '</span>'; }).join('');

    var n = nutritionPerPerson(state.built);
    var rows = [['kcal', Math.round(n.kcal) + ' kcal'], ['carbs', Math.round(n.carbs) + ' g'], ['protein', Math.round(n.protein) + ' g'],
      ['fat', Math.round(n.fat) + ' g'], ['satFat', Math.round(n.satFat) + ' g'], ['fiber', n.fiber.toFixed(1) + ' g'], ['salt', n.salt.toFixed(1) + ' g']];
    $('det-nutrition').innerHTML = rows.map(function (r) { return '<div><dt>' + t(r[0]) + '</dt><dd>' + r[1] + '</dd></div>'; }).join('');
  }

  $('screen-details').addEventListener('change', function (e) {
    if (e.target.type !== 'radio') return;
    state.choices[e.target.name] = e.target.value;
    updateDetails();
  });
  $('srv-minus').addEventListener('click', function () { state.choices.servings = Math.max(1, state.choices.servings - 1); updateDetails(); });
  $('srv-plus').addEventListener('click', function () {
    state.choices.servings = Math.min(state.recipe.maxServings || 8, state.choices.servings + 1);
    updateDetails();
  });
  $('btn-show-ingredients').addEventListener('click', openIngredients);

  // ---------- Ingredients ----------
  function imgFor(i) { return 'img/350/' + (i.key || i.id) + '.webp'; }

  function openIngredients() {
    var b = state.built;
    $('ing-title').textContent = state.recipe.name;
    $('ing-meta').textContent = t('ingredientsFor', { x: unitText(state.recipe, b.servings === 1 ? 'count1' : 'count', { n: b.servings }) });
    var list = $('ing-list');
    list.innerHTML = '';
    b.ingredients.forEach(function (ing) {
      var li = document.createElement('li');
      li.className = 'ing-card';
      li.innerHTML =
        '<img alt="" src="' + imgFor(ing) + '">' +
        '<span class="name">' + ing.name + (ing.note ? '<span class="note">' + ing.note + '</span>' : '') + '</span>' +
        '<span class="amount">' + ing.amount + '</span>';
      list.appendChild(li);
    });
    show('ingredients');
  }

  $('btn-start-cooking').addEventListener('click', startCooking);

  // ---------- Cooking ----------
  var cook = null;
  var tickTimer = null;
  var coarse = window.matchMedia('(pointer: coarse)');
  var landscape = window.matchMedia('(orientation: landscape)');

  function isMap() {
    // Phones and tablets follow the orientation; desktop uses the toggle.
    return coarse.matches ? landscape.matches : state.mapView;
  }

  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  }

  function stepById(id) {
    return cook.steps.filter(function (s) { return s.id === id; })[0];
  }

  function isReady(step) {
    if (cook.done.has(step.id) || cook.slots.indexOf(step.id) >= 0) return false;
    return depsOf(cook.steps, step).every(function (d) { return cook.done.has(d); });
  }

  // Adds newly ready steps to the card order. A follow-up step of the same
  // thread takes the place of the step that just finished, so cards move as
  // little as possible; other new steps fill a free place or go to the end.
  function activate(freeIndex, finishedThread) {
    var fresh = cook.steps.filter(isReady);
    var placed = [];
    fresh.forEach(function (s) {
      if (freeIndex >= 0 && s.thread === finishedThread) {
        cook.slots.splice(freeIndex, 0, s.id);
        placed.push(s);
        freeIndex = -1;
      }
    });
    fresh.forEach(function (s) {
      if (placed.indexOf(s) >= 0) return;
      if (freeIndex >= 0) {
        cook.slots.splice(freeIndex, 0, s.id);
        freeIndex = -1;
      } else {
        cook.slots.push(s.id);
      }
    });
    return fresh;
  }

  function startCooking() {
    var b = state.built;
    cook = { steps: b.steps, ingredients: b.ingredients, done: new Set(), slots: [], started: {}, els: {}, t0: Date.now(), tipsShown: new Set() };
    $('cook-name').textContent = state.recipe.name;
    $('cook-total').textContent = '/ ≈ ' + fmtMinutes(estimateMinutes(b.steps));
    $('cook-list').innerHTML = '';
    $('cook-map').innerHTML = '';
    $('cook-finished').hidden = true;
    resetStars();
    show('cook');
    var fresh = activate(-1, null);
    render();
    showTips(fresh);
    tick();
    tickTimer = setInterval(tick, 500);
  }

  function stopCooking() {
    clearInterval(tickTimer);
    tickTimer = null;
    cook = null;
    document.body.classList.remove("overdo");
    hideTip(true);
  }

  $('btn-cook-exit').addEventListener('click', function () {
    if (window.confirm(t('exitConfirm'))) {
      stopCooking();
      show('ingredients');
    }
  });

  $('btn-view').addEventListener('click', function () {
    state.mapView = !state.mapView;
    render();
  });
  landscape.addEventListener('change', function () { if (cook) render(); });
  window.addEventListener('resize', function () { if (cook && isMap()) render(); });

  function cardFor(step) {
    if (cook.els[step.id]) return cook.els[step.id];
    var el = document.createElement('article');
    el.className = 'step';
    el.setAttribute('data-area', step.area);
    el.setAttribute('data-step', step.id);

    var tools = step.tools.map(function (id) {
      var eq = window.EQUIPMENT[id];
      return '<img class="icon" src="' + eq.icon + '" alt="' + eq.name + '" title="' + eq.name + '">';
    }).join('');

    var ings = step.ings.map(ingItem).join('');

    el.innerHTML =
      '<div class="step-head">' +
        '<span class="area-badge"><span><img class="icon" alt="" src="' + AREAS[step.area].icon + '"></span>' + t(step.area) + '</span>' +
        '<span class="step-tools">' + tools + '</span>' +
      '</div>' +
      '<h3>' + step.title + '</h3>' +
      '<p class="step-text">' + step.text + '</p>' +
      (ings ? '<ul class="step-ings">' + ings + '</ul>' : '') +
      '<p class="done-when">' + t('doneWhen') + step.doneWhen + '</p>' +
      '<div class="timer"><span class="timer-time">' + t('about', { t: fmt(step.duration) }) + '</span><span class="timer-bar"><i></i></span></div>' +
      (step.overcook ? '<p class="overdo-note" role="alert">' + t('dontOverdo') + '</p>' : '') +
      '<div class="step-actions">' +
        '<button class="btn btn-start" type="button">' + t('start') + '</button>' +
        '<button class="btn btn-primary btn-done" type="button">' + t('done') + '</button>' +
      '</div>';

    el.querySelector('.btn-start').addEventListener('click', function (e) {
      cook.started[step.id] = Date.now();
      e.currentTarget.disabled = true;
      tick();
    });
    el.querySelector('.btn-done').addEventListener('click', function () { finishStep(step); });
    cook.els[step.id] = el;
    return el;
  }

  function ingItem(i) {
    var base = cook.ingredients.filter(function (x) { return x.id === i.id; })[0];
    var name = i.label || (base ? base.name : i.id);
    return '<li><img alt="" src="' + imgFor(i) + '"><span>' + name + '</span>' + (i.qty ? '<b>' + i.qty + '</b>' : '') + '</li>';
  }

  function finishStep(step) {
    var idx = cook.slots.indexOf(step.id);
    cook.slots.splice(idx, 1);
    cook.done.add(step.id);
    delete cook.started[step.id];
    cook.els[step.id].remove();
    delete cook.els[step.id];
    var fresh = activate(idx, step.thread);
    render();
    markNew(fresh);
    showTips(fresh);
  }

  // Puts the cards into a container in the given order, only moving what changed.
  function syncChildren(container, els) {
    els.forEach(function (el, i) {
      if (container.children[i] !== el) container.insertBefore(el, container.children[i] || null);
    });
  }

  function render() {
    if (!cook) return;
    var map = isMap();
    var total = cook.steps.length;
    $('cook-count').textContent = t('stepsDone', { d: cook.done.size, n: total });
    $('cook-progress').style.width = (cook.done.size / total * 100) + '%';
    $('btn-view').textContent = map ? t('listView') : t('mapView');

    var finished = cook.done.size === total;
    $('cook-finished').hidden = !finished;
    $('cook-list').hidden = map || finished;
    $('cook-map').hidden = !map || finished;
    if (finished) {
      clearInterval(tickTimer);
      document.body.classList.remove('overdo');
      hideTip(true);
      return;
    }

    var els = cook.slots.map(function (id) { return cardFor(stepById(id)); });
    if (map) {
      renderMap(els);
    } else {
      syncChildren($('cook-list'), els);
    }
  }

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

  // Things standing on the countertop cover part of it. Returns the biggest
  // uncovered strip (left, right, above or below them), relative to the countertop.
  function freeStrip(ct, others, pxW, pxH) {
    var cover = null;
    others.forEach(function (o) {
      var x1 = Math.max(ct.x, o.x), y1 = Math.max(ct.y, o.y);
      var x2 = Math.min(ct.x + ct.w, o.x + o.w), y2 = Math.min(ct.y + ct.h, o.y + o.h);
      if (x2 <= x1 || y2 <= y1) return;
      cover = cover
        ? { x1: Math.min(cover.x1, x1), y1: Math.min(cover.y1, y1), x2: Math.max(cover.x2, x2), y2: Math.max(cover.y2, y2) }
        : { x1: x1, y1: y1, x2: x2, y2: y2 };
    });
    if (!cover) return null;
    var right = ct.x + ct.w, bottom = ct.y + ct.h;
    var strips = [
      { x: ct.x, y: ct.y, w: cover.x1 - ct.x, h: ct.h },
      { x: cover.x2, y: ct.y, w: right - cover.x2, h: ct.h },
      { x: ct.x, y: ct.y, w: ct.w, h: cover.y1 - ct.y },
      { x: ct.x, y: cover.y2, w: ct.w, h: bottom - cover.y2 }
    ];
    var best = strips.reduce(function (a, b) { return b.w * pxW * b.h * pxH > a.w * pxW * a.h * pxH ? b : a; });
    return { x: (best.x - ct.x) / ct.w, y: (best.y - ct.y) / ct.h, w: best.w / ct.w, h: best.h / ct.h };
  }

  function renderMap(els) {
    var mapEl = $('cook-map');
    var keys = usedAreas();
    mapEl.style.setProperty('--head-h', document.querySelector('.cook-head').offsetHeight + 'px');
    if (!cook.view) cook.view = {};
    // Keep the view still while an area is being dragged; refit afterwards.
    if (!mapEl.querySelector('.map-area.dragging')) fitView(keys);
    if (!mapEl.children.length) {
      keys.forEach(function (key) {
        var a = document.createElement('section');
        a.className = 'map-area area-' + key;
        a.style.zIndex = Z[key];
        a.setAttribute('data-area', key);
        a.setAttribute('aria-label', t(key));
        a.innerHTML =
          '<div class="map-area-head"><img class="icon" alt="" src="' + AREAS[key].icon + '"><span class="label">' + t(key) + '</span>' +
          '<button class="area-move" type="button" aria-label="' + t('moveArea', { a: t(key) }) + '">' + MOVE_ICON + '</button></div>' +
          '<ul class="map-area-ings" aria-label="' + t('ingredientsHere') + '"></ul>' +
          '<div class="map-area-cards"></div>';
        mapEl.appendChild(a);
        makeMovable(a, key, mapEl, cook.view, keys, {
          handle: a.querySelector('.area-move'),
          onChange: function () { state.layout[key] = fromView(cook.view[key]); },
          onEnd: render
        });
      });
    }
    keys.forEach(function (key) {
      var a = mapEl.querySelector('.map-area[data-area="' + key + '"]');
      placeEl(a, cook.view[key]);
      var mine = els.filter(function (el) { return el.getAttribute('data-area') === key; });
      syncChildren(a.querySelector('.map-area-cards'), mine);
      a.classList.toggle('is-empty', mine.length === 0);

      // The ingredients for the cards here are shown on the area itself (display only).
      var seen = {}, ings = [];
      mine.forEach(function (el) {
        stepById(el.getAttribute('data-step')).ings.forEach(function (i) {
          if (!seen[i.id + i.qty]) { seen[i.id + i.qty] = true; ings.push(i); }
        });
      });
      var html = ings.map(ingItem).join('');
      var list = a.querySelector('.map-area-ings');
      if (list.innerHTML !== html) list.innerHTML = html;
      list.hidden = !ings.length;
    });

    // Countertop cards go where nothing stands on the countertop.
    if (keys.indexOf('countertop') >= 0) {
      var cards = mapEl.querySelector('.map-area[data-area="countertop"] .map-area-cards');
      var others = keys.filter(function (k) { return k !== 'countertop'; }).map(function (k) { return cook.view[k]; });
      var free = freeStrip(cook.view.countertop, others, mapEl.clientWidth, mapEl.clientHeight);
      cards.classList.toggle('in-strip', !!free);
      if (free) {
        cards.style.left = (free.x * 100) + '%';
        var ingsList = cards.previousElementSibling;
        var below = ingsList.hidden ? 40 : ingsList.offsetTop + ingsList.offsetHeight;
        cards.style.top = 'max(' + (free.y * 100) + '%, ' + below + 'px)';
        cards.style.width = (free.w * 100) + '%';
        cards.style.bottom = ((1 - free.y - free.h) * 100) + '%';
      }
    }
  }

  function tick() {
    if (!cook) return;
    $('cook-clock').textContent = fmt((Date.now() - cook.t0) / 1000);
    var overdo = false;
    Object.keys(cook.started).forEach(function (id) {
      var el = cook.els[id];
      if (!el) return;
      var step = stepById(id);
      var elapsed = (Date.now() - cook.started[id]) / 1000;
      var left = step.duration - elapsed;
      var up = left <= 0;
      el.querySelector('.timer-time').textContent = up ? t('over', { t: fmt(-left) }) : t('left', { t: fmt(left) });
      el.querySelector('.timer-bar i').style.width = Math.min(100, elapsed / step.duration * 100) + '%';
      // Haptic feedback (navigator.vibrate) comes in a later iteration.
      el.classList.toggle('time-up', up);
      if (up && step.overcook) overdo = true;
    });
    // Something on the heat is past its time: the whole screen pulses red.
    document.body.classList.toggle('overdo', overdo);
  }

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
    });
  }

  // ---------- Tips ----------
  var tipQueue = [];
  var tipTimer = null;
  var tipOpen = false;

  function showTips(fresh) {
    fresh.forEach(function (s) {
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
  // Hovering lights the stars up to the one under the pointer; a click sets the rating.
  var starBox = $('taste');
  for (var n = 1; n <= 5; n++) {
    var lbl = document.createElement('label');
    lbl.className = 'star';
    lbl.innerHTML = '<input type="radio" name="taste" value="' + n + '"><span aria-hidden="true">★</span>';
    lbl.querySelector('input').setAttribute('aria-label', t('stars', { n: n }));
    starBox.appendChild(lbl);
  }
  var starLabels = starBox.querySelectorAll('.star');

  function paintStars(count) {
    starLabels.forEach(function (l, i) { l.classList.toggle('lit', i < count); });
  }
  function currentStars() {
    var c = starBox.querySelector('input:checked');
    return c ? Number(c.value) : 0;
  }
  function resetStars() {
    starBox.querySelectorAll('input').forEach(function (i) { i.checked = false; });
    paintStars(0);
  }
  starLabels.forEach(function (l, i) {
    l.addEventListener('mouseenter', function () { paintStars(i + 1); });
  });
  starBox.addEventListener('mouseleave', function () { paintStars(currentStars()); });
  starBox.addEventListener('change', function () { paintStars(currentStars()); });

  // ---------- Start ----------
  applyStrings();
  show('setup');
})();
