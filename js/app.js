(function () {
  'use strict';

  // ---------- Text (English only for now) ----------
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
      layoutNone: 'Not set up yet.',
      layoutSaved: 'Your kitchen layout is saved.',
      landscapeNote: 'Use your device in landscape mode to set up!',
      layoutHelp: 'Drag to move, drag the corner to resize. Things can only overlap the countertop.',
      cancel: 'Cancel',
      rotate: 'Turn your device sideways to set up your kitchen.',
      back: 'Back',
      pickRecipe: 'Pick a recipe',
      filters: 'Filters',
      noResults: 'No recipes match these filters.',
      cat_soup: 'Soup',
      cat_main: 'Main',
      cat_dessert: 'Dessert',
      cat_side: 'Side dish',
      readInstead: 'Read instead',
      min: 'min',
      hours: '{h} h {m} min',
      diet_vegan: 'Vegan',
      diet_veg: 'Vegetarian',
      diet_lacto: 'Lacto-Vegetarian',
      diet_ovo: 'Ovo-Vegetarian',
      diet_lactoOvo: 'Lacto-Ovo Vegetarian',
      diet_pesc: 'Pescetarian',
      meat: 'Meat',
      pork: 'Pork',
      fish: 'Fish',
      containsLabel: 'Contains',
      kcal: 'Energy',
      carbs: 'Carbohydrate',
      protein: 'Protein',
      fat: 'Fat',
      satFat: 'of which saturated',
      fiber: 'Fibre',
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
      exitConfirm: 'Stop cooking? Your progress will be lost.',
      elapsed: 'Time',
      timeLeft: 'Time left',
      startNow: 'Start now',
      stepsDone: '{d} of {n} steps done',
      mapView: 'Map view',
      listView: 'List view',
      noLayout: 'No kitchen layout set up. Do it before your next cooking!',
      start: 'Start',
      done: "I'm done",
      doneMark: '✓ Done',
      reopen: 'Show past steps',
      fold: 'Hide past steps',
      doneWhen: 'Done when: ',
      waitingFor: 'Waiting for: {x}',
      firstOthers: 'Finish other steps first!',
      doThis: 'Do this!',
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
    var s = STRINGS[lang][key];
    if (s === undefined) s = key;
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
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  // In memory only: this is a one-shot test, nothing is stored on the device.
  var state = {
    screen: 'recipes',
    layout: null,
    layoutSaved: false,
    recipe: null,
    choices: null,
    built: null,
    mapView: false, // desktop toggle
    filters: { cat: [], cuisine: [] },
    units: 'metric'
  };

  // ---------- Screens ----------
  // Every screen change is a browser history entry, so Back (in the page or the
  // browser) goes to the previous screen.
  var SCREENS = ['recipes', 'layout', 'details', 'cook'];
  function show(name, fromHistory) {
    state.screen = name;
    SCREENS.forEach(function (s) { $('screen-' + s).hidden = s !== name; });
    if (!fromHistory) history.pushState({ screen: name }, '');
    window.scrollTo(0, 0);
  }

  window.addEventListener('popstate', function (e) {
    var target = (e.state && e.state.screen) || 'recipes';
    if (cook && state.screen === 'cook' && target !== 'cook') {
      if (!window.confirm(t('exitConfirm'))) {
        history.pushState({ screen: 'cook' }, '');
        return;
      }
      stopCooking();
    }
    if (target === 'cook' && !cook) target = state.recipe ? 'details' : 'recipes';
    if (target === 'details' && !state.recipe) target = 'recipes';
    if (target === 'layout') target = 'recipes';
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
    d.showModal();
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
        Object.keys(cook.els).forEach(function (id) { cook.els[id].remove(); });
        cook.els = {};
        render();
        tick();
      }
    });
  });
  $('lang-select').addEventListener('change', function (e) {
    lang = e.target.value;
    applyStrings();
  });
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
  function openRead(r) {
    $('read-title').textContent = r.name;
    var body = $('read-body');
    body.innerHTML = '';
    var text = (window.RECIPE_TEXTS || {})[r.id] || '';
    text.split(/\n\s*\n/).forEach(function (block) {
      var lines = block.split('\n').filter(function (l) { return l.trim(); });
      var list = null;
      lines.forEach(function (line, i) {
        line = line.trim();
        if (/^•/.test(line)) {
          if (!list) { list = document.createElement('ul'); body.appendChild(list); }
          var li = document.createElement('li');
          li.textContent = units(line.replace(/^•\s*/, ''));
          list.appendChild(li);
          return;
        }
        list = null;
        var el = document.createElement(i === 0 && /:$/.test(line) ? 'h3' : 'p');
        el.textContent = units(line);
        body.appendChild(el);
      });
    });
    openDialog($('read-dialog'));
    body.scrollTop = 0;
  }
  $('read-close').addEventListener('click', function () { $('read-dialog').close(); });
  document.querySelectorAll('.btn-read').forEach(function (b) {
    b.addEventListener('click', function () { if (state.recipe) openRead(state.recipe); });
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
  state.layout = clone(DEFAULT_LAYOUT);

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

  $('btn-layout-cancel').addEventListener('click', function () { history.back(); });
  $('btn-layout-save').addEventListener('click', function () {
    state.layout = draft;
    state.layoutSaved = true;
    var status = $('layout-status');
    status.setAttribute('data-i18n', 'layoutSaved');
    status.textContent = t('layoutSaved');
    var home = $('btn-layout-home');
    home.setAttribute('data-i18n', 'editLayoutMap');
    home.textContent = t('editLayoutMap');
    history.back();
    if (cook) {
      $('cook-map').innerHTML = '';
      render();
    }
  });

  // ---------- Recipe facts: time, diet, allergens, nutrition, kids ----------
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
  // remaining(step) gives the seconds still needed (default: its full duration).
  function scheduleSeconds(steps, remaining) {
    var end = {}, total = 0, changed = true, rounds = 0;
    while (changed && rounds++ <= steps.length) {
      changed = false;
      steps.forEach(function (s) {
        var start = depsOf(steps, s).reduce(function (m, d) { return Math.max(m, end[d] || 0); }, 0);
        var e = start + (remaining ? remaining(s) : s.duration);
        if (end[s.id] !== e) { end[s.id] = e; changed = true; }
      });
    }
    steps.forEach(function (s) { total = Math.max(total, end[s.id]); });
    return total;
  }

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
      if (!contains.some(function (c) { return c.toLowerCase() === a.toLowerCase(); })) contains.push(a);
    });
    return { label: label, contains: contains };
  }

  function dietBadge(info) {
    if (!info.label) return '';
    var cls = info.label === 'vegan' ? 'diet-vegan' : info.label === 'pesc' ? 'diet-pesc' : 'diet-veg';
    return '<span class="diet-badge ' + cls + '">' + t('diet_' + info.label) + '</span>';
  }

  function containsRow(info) {
    if (!info.contains.length) return '';
    return '<span class="warn-icon" role="img" aria-label="' + t('containsLabel') + '">❗</span> ' +
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
  var CUISINES = ['Italian', 'Asian', 'Greek', 'French', 'Mexican', 'American'];
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
      box.appendChild(b);
    }
    CATEGORIES.forEach(function (c) { chip('cat', c, t('cat_' + c)); });
    var div = document.createElement('span');
    div.className = 'divider';
    box.appendChild(div);
    CUISINES.forEach(function (c) { chip('cuisine', c, c); });
  }

  function renderRecipes() {
    var wrap = $('recipe-sections'), f = state.filters, any = false;
    wrap.innerHTML = '';
    CATEGORIES.forEach(function (cat) {
      if (f.cat.length && f.cat.indexOf(cat) < 0) return;
      var recipes = window.RECIPES.filter(function (r) {
        return r.category === cat && (!f.cuisine.length || r.cuisine.some(function (c) { return f.cuisine.indexOf(c) >= 0; }));
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
          '<span class="title-row"><span>' + esc(r.name) + '</span>' + dietBadge(info) + '</span>' +
          '<span class="meta-line">⏱️ ' + fmtMinutes(estimateMinutes(built.steps)) + '</span>' +
          '<span class="meta-line nutri-line">📊 ' + kcal5(n.kcal) + ' kcal · ' +
          Math.round(n.carbs) + ' g ' + t('carbsShort') + ' · ' + Math.round(n.protein) + ' g ' + t('proteinShort') +
          '<small>' + unitText(r, 'perServing') + '</small></span>' +
          '<span class="warn-row">' + containsRow(info) + '</span>' +
          '</span></button>' +
          '<button class="btn btn-secondary btn-small btn-read-card" type="button">' + t('readInstead') + '</button>';
        var card = li.querySelector('.recipe-card');
        card.insertBefore(photoEl(r, 350), card.firstChild);
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
  function openDetails(r) {
    state.recipe = r;
    state.choices = defaultChoices(r);
    $('det-name').textContent = r.name;
    var photo = $('det-photo');
    var img = photoEl(r, 500, 'photo-hero');
    img.id = 'det-photo';
    photo.replaceWith(img);
    renderOptions();
    document.querySelectorAll('input[name="mode"]').forEach(function (i) { i.checked = i.value === state.choices.mode; });
    updateDetails();
    show('details');
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

  function renderOptions() {
    var r = state.recipe, box = $('det-options');
    box.innerHTML = '';
    r.options.forEach(function (o) {
      var fs = document.createElement('fieldset');
      fs.className = 'choices';
      fs.innerHTML = '<legend>' + esc(o.question) + '</legend><div class="choices-row">' + o.choices.map(function (ch) {
        var parts = labelParts(r, o.id, ch);
        return '<label class="choice"><input type="radio" name="' + o.id + '" value="' + ch.id + '"' +
          (state.choices[o.id] === ch.id ? ' checked' : '') + '> <span class="choice-text"><span>' + esc(parts[0]) + '</span>' +
          (parts[1] ? '<small>' + esc(parts[1]) + '</small>' : '') + '</span></label>';
      }).join('') + '</div>';
      box.appendChild(fs);
    });
    $('det-forks').hidden = !r.options.length;
  }

  function updateDetails() {
    var c = state.choices, r = state.recipe, person = !r.unit || r.unit === 'person';
    c.servings = person ? c.adults + 0.5 * c.kids : c.adults;
    var built = state.built = r.build(c);

    $('det-time').textContent = '⏱️ ' + fmtMinutes(estimateMinutes(built.steps));
    var info = dietInfo(built);
    $('det-diet').innerHTML = dietBadge(info);
    $('det-warnings').innerHTML = containsRow(info);
    $('det-warnings').hidden = !info.contains.length;

    var per = Object.assign({}, c, { adults: r.defaultServings || 2, kids: 0 });
    per.servings = per.adults;
    var n = nutritionPerPerson(r.build(per));
    $('det-per').textContent = unitText(r, 'perPerson');
    var rows = [['kcal', kcal5(n.kcal) + ' kcal'], ['carbs', Math.round(n.carbs) + ' g'], ['protein', Math.round(n.protein) + ' g'],
      ['fatSat', Math.round(n.fat) + ' g / ' + Math.round(n.satFat) + ' g'], ['fiber', n.fiber.toFixed(1) + ' g'], ['salt', n.salt.toFixed(1) + ' g']];
    $('det-nutrition').innerHTML = rows.map(function (x) {
      return '<div><dt>' + t(x[0]) + '</dt><dd>' + x[1] + '</dd></div>';
    }).join('');

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
      if (omitted.length) html += '<p><strong>' + t('warning') + '</strong> ' + t('kidsOmitted', { x: listWords(omitted) }) + '</p>';
      if (now.length) html += '<p><strong>' + t('warning') + '</strong> ' + t('kidsSure', { x: listWords(now) }) + '</p>';
      warn.innerHTML = html;
      warn.hidden = !html;
    } else {
      warn.hidden = true;
    }

    // Ingredients
    var who = person
      ? [c.adults ? (c.adults === 1 ? t('one_adult') : t('n_adults', { n: c.adults })) : '',
        c.kids ? (c.kids === 1 ? t('one_child') : t('n_children', { n: c.kids })) : ''].filter(Boolean).join(' + ')
      : (c.adults === 1 ? t('one_' + r.unit) : t('n_' + r.unit, { n: c.adults }));
    $('ing-meta').textContent = t('ingredientsFor', { x: who });
    var list = $('ing-list');
    list.innerHTML = '';
    window.INGREDIENT_INFO.CATEGORY_ORDER.forEach(function (cat) {
      var mine = built.ingredients.filter(function (i) { return (infoFor(i) || { category: 'sauces' }).category === cat; });
      if (!mine.length) return;
      var h = document.createElement('li');
      h.className = 'ing-group';
      h.textContent = t('ingCat_' + cat);
      list.appendChild(h);
      mine.forEach(function (ing) {
        var li = document.createElement('li');
        li.className = 'ing-card';
        li.innerHTML =
          '<img alt="" src="' + imgFor(ing) + '">' +
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

  $('btn-start-cooking').addEventListener('click', startCooking);

  // ---------- Cooking ----------
  var cook = null;
  var tickTimer = null;
  var coarse = window.matchMedia('(pointer: coarse)');
  var landscape = window.matchMedia('(orientation: landscape)');
  var RING = 2 * Math.PI * 40;

  function isMap() {
    if (!state.layoutSaved) return false;
    // Phones and tablets follow the orientation; desktop uses the toggle.
    return coarse.matches ? landscape.matches : state.mapView;
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
    hidden   not shown yet
    waiting  shown, but still waits for a step that is on screen and ready to do
    active   ready to do
    kept     done, but a step that needs it is still open: greyed and folded
    gone     done and no longer needed
  */
  function statusOf(step) {
    if (isDone(step.id)) {
      var needed = cook.steps.some(function (o) { return !isDone(o.id) && allDeps(o).indexOf(step.id) >= 0; });
      return needed ? 'kept' : 'gone';
    }
    if (allDeps(step).every(isDone)) return 'active';
    // Shown early only when everything it still waits for is a card you can do right now.
    var open = allDeps(step).filter(function (d) { return !isDone(d); });
    if (open.every(function (d) { return allDeps(stepById(d)).every(isDone); })) return 'waiting';
    return 'hidden';
  }

  // Works out which cards are shown. A new card goes right after the last card
  // of its thread, so the order stays logical and cards move as little as possible.
  function refresh() {
    var fresh = [], nowActive = [];
    cook.steps.forEach(function (s) {
      var st = statusOf(s), old = cook.status[s.id];
      cook.status[s.id] = st;
      if (st === 'active' && old !== 'active') nowActive.push(s);
      var visible = st === 'active' || st === 'waiting' || (st === 'kept' && !isMap());
      var at = cook.slots.indexOf(s.id);
      if (visible && at < 0) {
        var after = -1;
        cook.slots.forEach(function (id, i) { if (stepById(id).thread === s.thread) after = i; });
        if (after >= 0) cook.slots.splice(after + 1, 0, s.id); else cook.slots.push(s.id);
        fresh.push(s);
      } else if (!visible && at >= 0) {
        cook.slots.splice(at, 1);
        if (cook.els[s.id]) { leave(cook.els[s.id]); delete cook.els[s.id]; }
      }
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
      started: {}, els: {}, t0: null, tipsShown: new Set(), view: null };
    $('cook-name').textContent = state.recipe.name;
    $('cook-list').innerHTML = '';
    $('cook-map').innerHTML = '';
    $('cook-finished').hidden = true;
    $('start-overlay').hidden = false;
    $('start-takes').textContent = t('takes', { x: fmtMinutes(estimateMinutes(b.steps)) });
    $('cook-clock').textContent = '0:00';
    resetStars();
    show('cook');
    refresh();
    render();
    updateClocks();
    $('btn-start-now').focus();
  }

  $('btn-start-now').addEventListener('click', function () {
    cook.t0 = Date.now();
    $('start-overlay').hidden = true;
    showTips(cook.steps.filter(function (s) { return cook.status[s.id] === 'active'; }));
    tick();
    tickTimer = setInterval(tick, 500);
  });

  function stopCooking() {
    clearInterval(tickTimer);
    tickTimer = null;
    cook = null;
    document.body.classList.remove('overdo');
    $('due-toast').hidden = true;
    hideTip(true);
  }

  $('btn-cook-exit').addEventListener('click', function () {
    if (window.confirm(t('exitConfirm'))) {
      stopCooking();
      history.back();
    }
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
    render();
  });
  $('btn-view').addEventListener('mouseenter', function () { if (!state.layoutSaved) showViewTip(); });
  $('btn-view').addEventListener('focus', function () { if (!state.layoutSaved) showViewTip(); });
  $('btn-view').addEventListener('mouseleave', function () { $('view-tip').hidden = true; });

  landscape.addEventListener('change', function () { if (cook) render(); });
  window.addEventListener('resize', function () { if (cook && isMap()) render(); });

  function ingItem(i) {
    var base = cook.ingredients.filter(function (x) { return x.id === i.id; })[0];
    var name = (i.label || (base ? base.name : i.id)).replace(/\s*\([^)]*\)/g, '');
    return '<li><img alt="" src="' + imgFor(i) + '"><span>' + esc(name) + '</span>' + (i.qty ? '<b>' + esc(units(i.qty)) + '</b>' : '') + '</li>';
  }

  function cardFor(step) {
    if (cook.els[step.id]) return cook.els[step.id];
    var el = document.createElement('article');
    el.className = 'step';
    el.setAttribute('data-area', step.area);
    el.setAttribute('data-step', step.id);

    var tools = step.tools.map(function (id) {
      var eq = window.EQUIPMENT[id];
      return '<img class="icon" src="' + eq.icon + '" alt="' + esc(eq.name) + '" title="' + esc(eq.name) + '">';
    }).join('');
    var ings = step.ings.map(ingItem).join('');
    var body = step.parts
      ? '<ol class="step-parts">' + step.parts.map(function (p) { return '<li><b>' + esc(p.title) + ':</b> ' + esc(units(p.text)) + '</li>'; }).join('') + '</ol>'
      : '<p class="step-text">' + esc(units(step.text)) + '</p>';

    el.innerHTML =
      '<div class="step-head">' +
        '<span class="area-badge"><span><img class="icon" alt="" src="' + AREAS[step.area].icon + '"></span>' + t(step.area) + '</span>' +
        '<span class="step-tools">' + tools + '</span>' +
      '</div>' +
      '<h3>' + esc(step.title) + '</h3>' +
      '<p class="done-row"><span>' + t('doneMark') + '</span><button class="btn-reopen" type="button">' + t('reopen') + '</button></p>' +
      body +
      (ings ? '<ul class="step-ings">' + ings + '</ul>' : '') +
      '<p class="done-when">' + t('doneWhen') + esc(units(step.doneWhen)) + '</p>' +
      '<p class="waiting-for" hidden></p>' +
      (step.overcook ? '<p class="overdo-note" role="alert">' + t('dontOverdo') + '</p>' : '') +
      '<div class="step-foot">' +
        '<div class="ring">' +
          '<svg viewBox="0 0 92 92" aria-hidden="true"><circle class="ring-track" cx="46" cy="46" r="40"/>' +
          '<circle class="ring-fill" cx="46" cy="46" r="40" stroke-dasharray="' + RING + '" stroke-dashoffset="' + RING + '"/></svg>' +
          '<div class="ring-center">' +
            '<button class="btn-start" type="button">' + t('start') + '<br>' + fmt(step.duration) + '</button>' +
            '<span class="ring-time" hidden></span>' +
          '</div>' +
        '</div>' +
        '<button class="btn btn-primary btn-done" type="button">' + t('done') + '</button>' +
      '</div>';

    el.querySelector('.btn-start').addEventListener('click', function (e) {
      if (cook.status[step.id] !== 'active') return;
      cook.started[step.id] = Date.now();
      e.currentTarget.hidden = true;
      el.querySelector('.ring-time').hidden = false;
      tick();
    });
    el.querySelector('.btn-done').addEventListener('click', function () { finishStep(step); });
    el.querySelector('.btn-reopen').addEventListener('click', function (e) {
      var open = el.classList.toggle('expanded');
      e.currentTarget.textContent = open ? t('fold') : t('reopen');
    });
    cook.els[step.id] = el;
    return el;
  }

  // Classes and texts that follow the step's status.
  function updateCard(step, el) {
    var st = cook.status[step.id];
    el.classList.toggle('is-waiting', st === 'waiting');
    el.classList.toggle('is-done', st === 'kept');
    el.querySelector('.btn-start').disabled = st !== 'active';
    var w = el.querySelector('.waiting-for');
    if (st === 'waiting') {
      var open = allDeps(step).filter(function (d) { return !isDone(d); }).map(function (d) { return stepById(d).title; });
      w.textContent = t('waitingFor', { x: open.join(', ') });
      w.hidden = false;
    } else {
      w.hidden = true;
    }
  }

  function finishStep(step) {
    if (cook.status[step.id] !== 'active') { blocked(step); return; }
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

  // "I'm done" on a step that still waits: explain, and point at what to do first.
  function blocked(step) {
    var el = cook.els[step.id];
    var tip = document.createElement('span');
    tip.className = 'tooltip step-tooltip';
    tip.setAttribute('role', 'status');
    tip.textContent = t('firstOthers');
    el.appendChild(tip);
    setTimeout(function () { tip.remove(); }, 2500);

    var todo = [], seen = {};
    (function walk(s) {
      allDeps(s).forEach(function (d) {
        if (isDone(d) || seen[d]) return;
        seen[d] = true;
        if (cook.status[d] === 'active') todo.push(d); else walk(stepById(d));
      });
    })(step);
    todo.forEach(function (id) {
      var card = cook.els[id];
      if (!card) return;
      card.classList.remove('do-this');
      void card.offsetWidth;
      card.classList.add('do-this');
      var badge = document.createElement('span');
      badge.className = 'do-this-badge';
      badge.textContent = t('doThis');
      card.appendChild(badge);
      setTimeout(function () { badge.remove(); card.classList.remove('do-this'); }, 3500);
    });
    if (todo[0] && cook.els[todo[0]]) cook.els[todo[0]].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
    vb.textContent = map ? t('listView') : t('mapView');
    vb.classList.toggle('is-disabled', !state.layoutSaved);
    vb.classList.toggle('is-ready', state.layoutSaved);
    vb.setAttribute('aria-disabled', String(!state.layoutSaved));

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

    var els = cook.slots.map(function (id) {
      var s = stepById(id), el = cardFor(s);
      updateCard(s, el);
      return el;
    });
    if (map) renderMap(els); else syncChildren($('cook-list'), els);
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
    });

    // Countertop cards go where nothing stands on the countertop.
    if (keys.indexOf('countertop') >= 0) {
      var cards = mapEl.querySelector('.map-area[data-area="countertop"] .map-area-cards');
      var others = keys.filter(function (k) { return k !== 'countertop'; }).map(function (k) { return cook.view[k]; });
      var free = freeStrip(cook.view.countertop, others, mapEl.clientWidth, mapEl.clientHeight);
      cards.classList.toggle('in-strip', !!free);
      if (free) {
        var below = cards.previousElementSibling.offsetHeight;
        cards.style.left = (free.x * 100) + '%';
        cards.style.top = 'max(' + (free.y * 100) + '%, ' + below + 'px)';
        cards.style.width = (free.w * 100) + '%';
        cards.style.bottom = ((1 - free.y - free.h) * 100) + '%';
      }
    }
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
      el.querySelector('.ring-time').innerHTML = (up ? '+' + fmt(-left) : fmt(left)) + '<small>' + (up ? t('over') : t('left')) + '</small>';
      el.querySelector('.ring-fill').setAttribute('stroke-dashoffset', String(RING * (1 - Math.min(1, elapsed / step.duration))));
      // Haptic feedback (navigator.vibrate) comes in a later iteration.
      el.classList.toggle('time-up', up);
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
  show('recipes', true);
  history.replaceState({ screen: 'recipes' }, '');
})();
