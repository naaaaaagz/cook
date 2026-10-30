(function () {
  'use strict';

  // ---------- Text: English (US) is built in, other languages are in js/i18n/ ----------
  var STRINGS = {
    en: {
      sessionUnavailable: 'Your browser has blocked session storage. Allow storage for this site to carry your choices between pages.',
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
      searchLabel: 'Search recipes',
      searchPlaceholder: 'Search recipes, ingredients, utensils…',
      searchSuggestions: 'Suggestions',
      kindRecipe: 'Recipe',
      kindIngredient: 'Ingredient',
      kindUtensil: 'Utensil',
      kindMethod: 'Step',
      kindLabel: 'Label',
      oneRecipe: '1 recipe',
      nRecipes: '{n} recipes',
      mostPopular: 'Most popular',
      fridgeBtn: 'Tell us what you got in the fridge',
      fridgeBtnSub: '(voice recognition)',
      basedOnSaid: 'Based on what you said',
      alsoNeed: 'You also need:',
      fvListening: 'Listening… say what you have',
      fvStarting: 'Starting…',
      fvTapToStart: 'Tap the microphone to start',
      fvTapToAdd: 'Tap the microphone to add more',
      fvStart: 'Start listening',
      fvStop: 'Stop listening',
      fvHeard: 'What we heard',
      fvYourIngredients: 'Your ingredients',
      fvNothingYet: 'Nothing recognized yet.',
      fvTypePh: 'Or type ingredients, e.g. eggs, milk, tomatoes',
      fvAdd: 'Add',
      fvClear: 'Clear all',
      fvEdit: 'Edit',
      fvRemove: 'Remove {x}',
      fvAssumed: 'We assume you have salt, pepper, sugar, flour, oil and water.',
      fvNoSR: "This browser can't recognize speech. Type what you have instead.",
      fvNoSRShort: 'No speech recognition',
      fvLangUnavailable: "Speech recognition isn't available for {x}. Pick a language:",
      fvLanguage: 'Speech language',
      fvMicBlocked: "The microphone is blocked. Allow it in the browser's address bar, then tap the microphone again.",
      fvMicError: "The microphone or the speech service isn't working right now. You can type instead.",
      fvNoRecipes: 'No recipe fits yet. Add a few more ingredients.',
      cat_soup: 'Soup',
      cat_main: 'Main',
      cat_dessert: 'Dessert',
      cat_side: 'Side dish',
      cat_breakfast: 'Breakfast',
      cat_salad: 'Salad',
      cat_dip: 'Dips & sauces',
      method_airfryer: 'Air fryer',
      method_slowcooker: 'Slow cooker',
      method_nocook: 'No-cook',
      favOnly: 'Favorites only',
      favAdd: 'Add to favorites',
      favAdded: 'Added to favorites',
      favSignIn: 'Sign in to save favorites.',
      favNone: 'You have no favorites saved yet.',
      favShowAll: 'Check all recipes',
      accLogOut: 'Log out',
      accDelete: 'Delete account',
      accDeleteConfirm: 'Are you sure? Your account will be permanently removed! Please enter your password to confirm:',
      accDeleteNow: 'Delete my account',
      accDeleteWrong: 'Wrong password. Your account was not deleted.',
      accDeleteFailed: 'Your account could not be deleted. Please try again later.',
      accDeleted: 'Your account has been deleted.',
      accEnterNew: 'Enter your new password',
      accRepeat: 'Repeat password',
      accMismatch: 'The passwords do not match.',
      accEmailFailed: 'The email could not be sent. Please try again later.',
      accTooMany: 'Too many emails were sent. Please wait a while and try again.',
      accEmailInvalid: 'This email address is not accepted.',
      accOk: 'OK',
      accAccount: 'Account',
      accMyAccount: 'My account',
      accTitle: 'Your Cook account',
      accClose: 'Close account',
      accActionGroup: 'Account action',
      accSignIn: 'Sign in',
      accCreate: 'Create account',
      accEmail: 'Email address',
      accPassword: 'Password',
      accSignupNote: 'Use 12 or more characters. We will send a confirmation link. Sign in to save your kitchen and preferences.',
      accPrivacyLink: 'Privacy notice',
      accForgot: 'Forgot password?',
      accResend: 'Resend confirmation',
      accSendReset: 'Send reset link',
      accMemberNote: 'Your kitchen layout, language, theme and units are saved when you save your kitchen or close Options. You can also save them here.',
      accSave: 'Save kitchen and settings',
      accExport: 'Download my settings',
      accSignOut: 'Sign out',
      accNewPassword: 'New password',
      accSaveNewPassword: 'Save new password',
      accLoaded: 'Your saved kitchen and settings are loaded.',
      accSignedInEmpty: 'Signed in. Save your kitchen and settings to back them up.',
      accNotSavedTitle: 'Settings not saved',
      accNotLoadedYet: 'Your account settings have not loaded yet. Open Account and sign in again before saving.',
      accSaving: 'Saving settings…',
      accSaved: 'Kitchen and settings saved.',
      accSaveFailed: 'Settings could not be saved. Your changes are still in this tab.',
      accRetrySave: 'Please check your connection and try “Save kitchen and settings” in Account again.',
      accPasswordRule: 'Use at least 12 characters. If your password is very long, shorten it.',
      accWait: 'Please wait…',
      accSignupSent: 'If registration is available for this address, a confirmation email is on its way. Check your inbox and spam folder.',
      accResetSent: 'If this address has an account, a password-reset email is on its way.',
      accResendSent: 'If confirmation is needed for this address, an email is on its way.',
      accLoginFailed: 'Sign-in or loading settings failed. Check your email/password and confirm your email, then try again.',
      accRequestFailed: 'The request could not be completed. Please try again later.',
      accLoadFailed: 'Signed in, but settings could not be loaded. Sign out and try again. Nothing has been overwritten.',
      accPasswordUpdated: 'Your password has been updated.',
      accPasswordFailed: 'The password could not be updated. Request a new reset link and try again.',
      accUnavailable: 'Accounts are not available yet. You can keep using Cook without an account.',
      accVerifyUnavailableTitle: 'Verification unavailable',
      accVerifyUnavailable: 'Account setup is not complete. Please try the email link again once registration is available.',
      accChooseNew: 'Choose a new password.',
      accConfirmedLoadFailed: 'Your email is confirmed, but settings could not be loaded. Sign out and try again.',
      accConfirmedTitle: 'Registration confirmed',
      accConfirmed: 'Your account has been verified!',
      accPrompt: 'Sign in or create an account to save your kitchen across devices.',
      accSessionEnded: 'Your session ended. Please sign in again.',
      accLoadError: 'Accounts could not be loaded. Check your connection and allow tab storage, then reload.',
      accLinkFailedTitle: 'Link could not be verified',
      accLinkFailed: 'This link may have expired or already been used. Open Account to sign in or request a new email.',
      privFooter: 'Privacy & storage',
      privTitle: 'Privacy and browser storage',
      privClose: 'Close privacy notice',
      privWho: 'Who is responsible?',
      privWhat: 'What we use and why',
      privStorage: 'Browser storage',
      privOther: 'Other existing features',
      privProviders: 'Service providers and international transfers',
      privRetention: 'Retention and deletion',
      privRights: 'Your rights',
      privDraftLabel: "Draft — updated 28 October 2026.",
      privDraft: "Account features are currently being tested. The operator and service details below must be completed before public launch.",
      privWho1: "Cook is operated by [operator's legal name and postal address]. Contact [privacy email address] for privacy questions and requests. These details must be completed before registration opens.",
      privWhat1: "When you create an account, we use your email, an account identifier, password authentication records and verification status to provide and secure your account. Passwords are handled by the authentication provider as secure hashes; Cook does not store readable passwords. We store your kitchen layout, selected language, theme and measurement units to restore your settings across devices. Providing an account email and password is necessary for an account; you can browse recipes without one.",
      privWhat2: "Account and settings processing is necessary to provide the account service you request (GDPR Article 6(1)(b)). Limited security and abuse-prevention records may be processed under legitimate interests (Article 6(1)(f)), subject to necessity and balancing. Verification and password-reset emails are service messages, not marketing. No advertising or analytics is added by the account feature.",
      privStorage1: "Cook uses sessionStorage to carry your kitchen, cooking progress and choices between pages in the same tab. When signed in, it also holds your authentication session. The browser normally clears this when the tab session ends, but browser session restoration can retain it. Signing out clears Cook's tab data. The storage-notice dismissal is kept in that tab only. Cook's own scripts do not set cookies. Your hosting or service providers may have separate security processing that must be documented before launch.",
      privStorage2: "OK and the close button on the storage notice only dismiss the notice. They do not authorise analytics, advertising or other optional tracking. Any future non-essential storage requires a separate choice before it starts, with an equally easy refusal and withdrawal.",
      privOther1: "The current recipe-list speech feature requests an approximate country from country.is using your IP address to choose a speech language. If you use microphone recognition, your browser may send audio to its speech-service provider. Typed ingredient entry is available instead. These providers, their policies and the legal basis for these features must be reviewed before public launch.",
      privProviders1: "Planned account provider: Supabase (managed PostgreSQL and authentication), using a selected EU database region. Email provider: [provider]. Website host: [provider]. The operator must confirm the actual providers, processing agreements, subprocessors, log locations and any transfers outside the EEA. An EU database region does not by itself rule out international transfers. Where relevant, identify the applicable adequacy decision or contractual safeguards and how to obtain a copy.",
      privRetention1: "Account settings are kept while your account is active. You may request deletion using the privacy contact above. Before launch the operator must specify the deletion response process, unverified-account expiry, security-log retention and backup-expiry periods. Deleted data may remain in restricted backups until the documented backup retention period ends.",
      privRights1: "Depending on the applicable conditions, you may request access, correction, deletion, restriction, portability, or object to legitimate-interest processing. Contact the operator above; requests are normally answered within one month, with any lawful extension explained. You can complain to your supervisory authority, including Hungary's NAIH at naih.hu. Cook does not use account settings for automated decisions with legal or similarly significant effects.",
      noticeReopen: 'Storage notice',
      noticeLabel: 'Browser storage notice',
      noticeText: 'Cook uses browser storage for your requested cooking and sign-in features. No advertising or analytics storage is added.',
      noticeClose: 'Close storage notice',
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
      toggleTextures: 'Textures on / off',
      noLayoutAsk: "You don't have the kitchen layout set up. Continue in list view only?",
      noSetUp: "No, let's set it up",
      moveHint: 'arrow keys move, Alt + arrow keys resize',
      moveArea: 'Move {a} (drag, or use arrow keys)',
      stove: 'Stove',
      oven: 'Oven',
      countertop: 'Countertop',
      board: 'Cutting board',
      microwave: 'Microwave',
      airfryer: 'Air fryer',
      mixer: 'Stand mixer',
      blender: 'Blender',
      kettle: 'Kettle',
      toaster: 'Toaster',
      ricecooker: 'Rice cooker',
      slowcooker: 'Slow cooker',
      pressurecooker: 'Pressure cooker',
      foodprocessor: 'Food processor',
      addToKitchen: 'Add to the kitchen',
      doFirst: 'Do this first!',
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
      cuisine_Chinese: 'Chinese',
      cuisine_Japanese: 'Japanese',
      cuisine_Korean: 'Korean',
      cuisine_Thai: 'Thai',
      cuisine_Vietnamese: 'Vietnamese',
      cuisine_Indonesian: 'Indonesian',
      cuisine_Filipino: 'Filipino',
      cuisine_Nigerian: 'Nigerian',
      cuisine_Moroccan: 'Moroccan',
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
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
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
  function on(id, event, handler) {
    var element = $(id);
    if (element) element.addEventListener(event, handler);
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  // Translations are plain text, including when used inside generated HTML.
  function ht(key, vars) { return esc(t(key, vars)); }

  // Choices and preferences travel between documents in this tab's session.
  var state = {
    screen: 'recipes',
    layout: null,
    layoutSaved: false,
    recipe: null,
    choices: null,
    built: null,
    mapView: true, // map or list; map needs a saved layout
    favorites: [], // recipe ids; saved with the account
    filters: { fav: false, diet: [], cat: [], cuisine: [], method: [], voice: false }, // fav: "Favorites only" (signed in)
    search: '', // text in the recipe search box
    voice: [], // ingredient keys said (or typed) in the fridge panel
    picks: {}, // the options picked per recipe, shared by "Read instead", the recipe page and cooking
    units: 'metric'
  };

  // ---------- Separate document navigation ----------
  var PAGES = { welcome: 'index.html', recipes: 'recipes.html', details: 'recipe.html', layout: 'kitchen.html', cook: 'cook.html' };
  var pageScreen = document.body.getAttribute('data-page') || 'welcome';
  var savedSession = window.CookSession.read(), activeCookRecord = savedSession.cooking || null;
  var internalNavigation = false;
  var pageParams = new URLSearchParams(location.search);
  function screenUrl(name, recipe) {
    var file = PAGES[name] || PAGES.recipes, r = recipe || state.recipe;
    return file + ((name === 'details' || name === 'cook') && r ? '?id=' + encodeURIComponent(r.id) : '');
  }
  function route() {
    var id = pageParams.get('id');
    var r = window.RECIPES.filter(function (x) { return x.id === id; })[0];
    return { screen: pageScreen, recipe: r || null };
  }
  function updateTitle() {
    var name = state.screen;
    document.title = (name === 'details' || name === 'cook') && state.recipe ? recipeName(state.recipe) + ' – Cook'
      : name === 'layout' ? t('kitchenLayout') + ' – Cook' : 'Cook';
  }
  async function navigate(name, replace) {
    if (window.Fridge) window.Fridge.stop();
    if (!saveSession()) { window.alert(t('sessionUnavailable')); return; }
    if (window.CookAccount && !await window.CookAccount.flushPending()) return;
    internalNavigation = true;
    location[replace ? 'replace' : 'assign'](screenUrl(name));
  }
  function show(name) {
    if (name !== pageScreen) { navigate(name); return; }
    state.screen = name;
    var section = $('screen-' + name);
    if (section) section.hidden = false;
    document.querySelector('.top-icons').hidden = name === 'layout';
    updateTitle();
    window.scrollTo(0, 0);
    if (typeof updateJump === 'function') setTimeout(updateJump, 0);
    if (name === 'details') layoutEquipment();
  }
  function goBack() { navigate(state.screen === 'cook' && state.recipe ? 'details' : 'recipes'); }

  document.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) {
      stopCooking();
      show(go.getAttribute('data-go'));
    }
    if (e.target.closest('[data-back]')) goBack();
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
  on('btn-options', 'click', function () { openDialog($('options-dialog')); });
  document.querySelectorAll('input[name="theme"]').forEach(function (r) {
    r.addEventListener('change', function () { document.documentElement.setAttribute('data-theme', r.value); });
  });
  document.querySelectorAll('input[name="units"]').forEach(function (r) {
    r.addEventListener('change', function () {
      state.units = r.value;
      if (state.recipe && $('screen-details')) updateDetails();
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
    // account.js redraws its own texts (status, buttons) on this event.
    document.dispatchEvent(new Event('cook:lang'));
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
    if (window.Fridge && $('fridge-panel')) window.Fridge.redraw();
    renderFilters();
    renderRecipes();
    starLabels.forEach(function (l, i) { l.querySelector('input').setAttribute('aria-label', t('stars', { n: i + 1 }) + ': ' + t('star' + (i + 1))); });
    if (state.built) localizeBuilt(state.built);
    if (state.recipe && $('screen-details')) {
      $('det-name').textContent = recipeName(state.recipe);
      if (state.screen === 'details') { renderOptions(); updateDetails(); }
    }
    if (state.screen === 'layout') buildCanvas();
    if (cook) {
      localizeBuilt({ ingredients: cook.ingredients, steps: cook.steps });
      $('cook-name').textContent = recipeName(state.recipe);
      $('start-takes').textContent = t('takes', { x: fmtMinutes(estimateMinutes(cook.steps)) });
      redrawCooking();
    }
    if (reading && $('read-dialog').open) { $('read-title').textContent = recipeName(reading.recipe); renderRead(); }
    paintFavs();
  }
  on('lang-select', 'change', function (e) { setLang(e.target.value); });
  on('btn-layout', 'click', function () {
    $('options-dialog').close();
    openLayout();
  });
  on('btn-layout-home', 'click', openLayout);

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
  on('here-badge', 'animationend', function () { $('here-badge').hidden = true; });

  on('read-body', 'change', function (e) {
    if (e.target.type !== 'radio' || !reading || reading.locked) return;
    var r = reading.recipe;
    picksFor(r)[e.target.name.replace(/^read_/, '')] = e.target.value;
    renderRead();
    if (state.recipe === r && state.screen === 'details') { renderOptions(); updateDetails(); }
  });

  on('read-close', 'click', function () { $('read-dialog').close(); });
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
  // Every possible area, back to front. A kitchen has the base set; the plus
  // button adds up to two more countertops (countertop2, countertop3, shown as
  // "Countertop") and small appliances.
  var AREAS = {
    countertop: { icon: ICON.countertop },
    countertop2: { icon: ICON.countertop },
    countertop3: { icon: ICON.countertop },
    stove: { icon: 'icons/stovetop.svg' },
    oven: { icon: 'icons/oven.svg' },
    fridge: { icon: ICON.fridge },
    freezer: { icon: ICON.freezer },
    microwave: { icon: 'icons/microwave-oven.svg' },
    sink: { icon: ICON.sink },
    board: { icon: 'icons/chopping-board.svg' },
    airfryer: { icon: 'icons/air-fryer.svg' },
    mixer: { icon: 'icons/stand-mixer.svg' },
    blender: { icon: 'icons/blender.svg' },
    kettle: { icon: 'icons/kettle.svg' },
    toaster: { icon: 'icons/toaster.svg' },
    ricecooker: { icon: 'icons/rice-cooker.svg' },
    slowcooker: { icon: 'icons/slow-cooker.svg' },
    pressurecooker: { icon: 'icons/pressure-cooker.svg' },
    foodprocessor: { icon: 'icons/food-processor.svg' }
  };
  var AREA_KEYS = Object.keys(AREAS);
  var ALL_KEYS = AREA_KEYS.concat(['me']);
  // The areas (and "Me") a layout has, back to front.
  function keysOf(layout) { return ALL_KEYS.filter(function (k) { return layout[k]; }); }
  function areaKeysOf(layout) { return AREA_KEYS.filter(function (k) { return layout[k]; }); }
  // countertop2 and countertop3 are countertops too (same look, name and rules).
  function baseKey(k) { return k.replace(/\d+$/, ''); }
  function isCounter(k) { return baseKey(k) === 'countertop'; }
  // These may stand on a countertop; the fridge, freezer and oven may not.
  var APPLIANCES = ['microwave', 'airfryer', 'mixer', 'blender', 'kettle', 'toaster', 'ricecooker', 'slowcooker', 'pressurecooker', 'foodprocessor'];
  var ON_COUNTER = ['stove', 'sink', 'board'].concat(APPLIANCES);
  function canOverlap(a, b) {
    if (a === 'me' || b === 'me') return true;
    if (isCounter(a) && isCounter(b)) return false;
    if (isCounter(a)) return ON_COUNTER.indexOf(baseKey(b)) >= 0;
    if (isCounter(b)) return ON_COUNTER.indexOf(baseKey(a)) >= 0;
    return false;
  }
  var Z = { countertop: 1, stove: 2, oven: 2, fridge: 2, freezer: 2, microwave: 3, sink: 3, board: 3, airfryer: 3, mixer: 3, blender: 3, kettle: 3, toaster: 3, ricecooker: 3, slowcooker: 3, pressurecooker: 3, foodprocessor: 3, me: 4 };
  // Smallest size per block in pixels, so blocks keep their shape in landscape and portrait.
  var MIN_PX = {
    countertop: { w: 160, h: 110 },
    stove: { w: 140, h: 120 },
    oven: { w: 110, h: 80 },
    fridge: { w: 70, h: 90 },
    freezer: { w: 70, h: 90 },
    board: { w: 90, h: 60 },
    sink: { w: 80, h: 60 },
    microwave: { w: 90, h: 60 },
    airfryer: { w: 64, h: 64 },
    mixer: { w: 64, h: 64 },
    blender: { w: 56, h: 56 },
    kettle: { w: 56, h: 56 },
    toaster: { w: 64, h: 56 },
    ricecooker: { w: 64, h: 64 },
    slowcooker: { w: 70, h: 64 },
    pressurecooker: { w: 70, h: 64 },
    foodprocessor: { w: 64, h: 64 },
    me: { w: 64, h: 64 }
  };
  var ME_PX = 64; // "Me" is always a 64 px circle
  function minSize(key, container) {
    var w = container.clientWidth || 800, h = container.clientHeight || 450;
    var m = MIN_PX[baseKey(key)];
    return { w: Math.min(0.9, m.w / w), h: Math.min(0.9, m.h / h) };
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
    microwave: { x: 0.73, y: 0.50, w: 0.13, h: 0.17 },
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
    microwave: { x: 0.62, y: 0.70, w: 0.30, h: 0.10 },
    me: { x: 0.62, y: 0.55, w: 0.18, h: 0.09 }
  };
  state.layout = clone(DEFAULT_LAYOUT);

  function overlaps(a, b) {
    var e = 0.001;
    return a.x < b.x + b.w - e && b.x < a.x + a.w - e && a.y < b.y + b.h - e && b.y < a.y + a.h - e;
  }

  // Only countertops may be overlapped, and only by what can stand on them.
  // "Me" is just where you stand: it moves freely and never blocks or pushes anything.
  function collides(layout, key, rect, keys) {
    if (key === 'me') return false;
    return keys.some(function (other) {
      return other !== key && layout[other] && !canOverlap(key, other) && overlaps(rect, layout[other]);
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
  function snappable(k) { return k !== 'board' && k !== 'me' && APPLIANCES.indexOf(k) < 0; }

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
    if (key === 'me') return false;
    var hits = keys.filter(function (k) { return k !== key && !canOverlap(key, k) && overlaps(next, layout[k]); });
    // A countertop is never pushed: what stands on it would be left behind.
    if (!hits.length || hits.some(isCounter)) return false;
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
  on('btn-layout-theme', 'click', function () {
    var dark = getComputedStyle(document.documentElement).colorScheme.indexOf('dark') >= 0;
    setTheme(dark ? 'light' : 'dark');
  });

  // Where the kitchen layout editor was opened from: from the welcome step, Save
  // and Cancel continue to step 2 instead of going back.
  var layoutFrom = null;
  async function openLayout(fromHistory) {
    if (pageScreen !== 'layout') {
      if (!saveSession()) { window.alert(t('sessionUnavailable')); return; }
      if (window.CookAccount && !await window.CookAccount.flushPending()) return;
      internalNavigation = true;
      location.assign('kitchen.html?from=' + encodeURIComponent(state.screen) +
        (state.recipe ? '&id=' + encodeURIComponent(state.recipe.id) : ''));
      return;
    }
    layoutFrom = pageParams.get('from') || 'recipes';
    draft = clone(state.layout);
    fullscreenTo('landscape');
    show('layout', fromHistory === true);
    buildCanvas();
  }

  // Textures hint at the real kitchen (floor tiles, ceramic stove, wood, steel...).
  // On by default; the paintbrush button in the editor turns them off and on.
  var textures = true;
  function applyTextures() {
    $('layout-canvas').classList.toggle('textured', textures);
    $('btn-layout-textures').setAttribute('aria-pressed', String(textures));
  }
  on('btn-layout-textures', 'click', function () { textures = !textures; applyTextures(); });

  // Plus button: adds another countertop (up to 3 in all) or a small appliance.
  // A new item goes to the free spot nearest the middle of a
  // countertop (appliances) or of the kitchen (countertops).
  var ADDABLE = ['countertop', 'airfryer', 'mixer', 'blender', 'kettle', 'toaster', 'ricecooker', 'slowcooker', 'pressurecooker', 'foodprocessor'];
  function addKey(kind) {
    if (kind !== 'countertop') return draft[kind] ? null : kind;
    return ['countertop2', 'countertop3'].filter(function (k) { return !draft[k]; })[0] || null;
  }
  function addItem(kind) {
    var key = addKey(kind), canvas = $('layout-canvas');
    if (!key) return;
    state.layoutTouched = true;
    var cw = canvas.clientWidth || 800, ch = canvas.clientHeight || 450, m = MIN_PX[kind];
    var w = Math.min(0.9, m.w * 1.25 / cw), h = Math.min(0.9, m.h * 1.25 / ch);
    var keys = keysOf(draft).concat([key]);
    var targets = kind === 'countertop' ? [{ x: 0, y: 0, w: 1, h: 1 }]
      : keysOf(draft).filter(isCounter).map(function (k) { return draft[k]; }).concat([{ x: 0, y: 0, w: 1, h: 1 }]);
    var best = null;
    targets.some(function (t) {
      var cx = t.x + t.w / 2, cy = t.y + t.h / 2;
      for (var y = t.y; y + h <= t.y + t.h + 1e-9; y += 0.02) {
        for (var x = t.x; x + w <= t.x + t.w + 1e-9; x += 0.02) {
          var r = { x: x, y: y, w: w, h: h };
          if (x + w > 1 || y + h > 1 || collides(draft, key, r, keys)) continue;
          var d = Math.hypot(x + w / 2 - cx, y + h / 2 - cy);
          if (!best || d < best.d) best = { r: r, d: d };
        }
      }
      return !!best;
    });
    draft[key] = best ? best.r : { x: (1 - w) / 2, y: (1 - h) / 2, w: w, h: h };
    buildCanvas();
  }
  function renderAddMenu() {
    var menu = $('layout-add-menu');
    menu.innerHTML = '';
    ADDABLE.forEach(function (kind) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'add-item';
      b.innerHTML = '<img class="icon" alt="" src="' + AREAS[kind].icon + '"><span>' + ht(kind) + '</span>';
      b.disabled = !addKey(kind);
      b.addEventListener('click', function () { menu.hidden = true; addItem(kind); });
      menu.appendChild(b);
    });
  }
  on('btn-layout-add', 'click', function () {
    var menu = $('layout-add-menu');
    if (menu.hidden) renderAddMenu();
    menu.hidden = !menu.hidden;
  });
  document.addEventListener('pointerdown', function (e) {
    if ($('layout-add-menu') && !e.target.closest('#layout-add-menu') && !e.target.closest('#btn-layout-add')) $('layout-add-menu').hidden = true;
  });

  // The sink's tap sits in the middle of a long side: the one facing away from "Me".
  function updateSinkTap() {
    var el = blockEls.sink, canvas = $('layout-canvas');
    if (!el || !draft) return;
    var s = draft.sink, me = draft.me, cw = canvas.clientWidth || 800, ch = canvas.clientHeight || 450;
    var sx = s.x + s.w / 2, sy = s.y + s.h / 2, mx = me.x + me.w / 2, my = me.y + me.h / 2;
    var wide = s.w * cw >= s.h * ch;
    el.setAttribute('data-tap', wide ? (my > sy ? 'top' : 'bottom') : (mx > sx ? 'left' : 'right'));
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
    var keys = keysOf(draft);
    keys.forEach(function (key) {
      var el = document.createElement('div');
      blockEls[key] = el;
      el.className = 'block area-' + baseKey(key) + (key === 'me' ? ' block-me' : '') + (APPLIANCES.indexOf(key) > 0 ? ' small-appliance' : '');
      el.setAttribute('data-key', key);
      el.style.zIndex = Z[baseKey(key)];
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', t(baseKey(key)) + ', ' + t('moveHint'));
      el.innerHTML = '<img class="icon" alt="" src="' + (key === 'me' ? ICON.me : AREAS[key].icon) + '"><span>' + ht(baseKey(key)) + '</span>' +
        (key === 'me' ? '' : '<span class="resize" aria-hidden="true"></span>');
      placeEl(el, draft[key]);
      makeMovable(el, key, canvas, draft, keys, {
        resizer: el.querySelector('.resize'),
        snap: true,
        onChange: function () {
          state.layoutTouched = true;
          keys.forEach(function (k) { placeEl(blockEls[k], draft[k]); });
          updateSinkTap();
        },
        onEnd: updateSeams
      });
      canvas.appendChild(el);
    });
    updateSeams();
    updateSinkTap();
    applyTextures();
  }

  // Where two areas touch, a seam with a grip appears on the shared edge.
  // Dragging it (or arrow keys) moves that edge: one area grows, the other shrinks.
  var blockEls = {};
  function updateSeams() {
    var canvas = $('layout-canvas');
    canvas.querySelectorAll('.seam').forEach(function (n) { n.remove(); });
    var cw = canvas.clientWidth || 800, ch = canvas.clientHeight || 450;
    var ex = 3 / cw, ey = 3 / ch, keys = keysOf(draft).filter(snappable);
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
    seam.setAttribute('aria-label', t(baseKey(ka)) + ' / ' + t(baseKey(kb)) + ': ' + t('resizeSeam'));
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
      if (collides(test, ka, na, keysOf(draft)) || collides(test, kb, nb, keysOf(draft))) return;
      draft[ka] = na; draft[kb] = nb;
      state.layoutTouched = true;
      placeEl(blockEls[ka], na); placeEl(blockEls[kb], nb);
      updateSinkTap();
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
    on(id, 'contextmenu', function (e) { e.preventDefault(); });
  });
  window.addEventListener('resize', function () {
    if (state.screen === 'layout') buildCanvas();
  });

  function leaveLayout() {
    navigate(['details', 'cook'].indexOf(layoutFrom) >= 0 && state.recipe ? layoutFrom : 'recipes');
  }
  on('btn-layout-cancel', 'click', leaveLayout);
  on('btn-layout-save', 'click', async function () {
    state.layout = draft;
    state.layoutSaved = true;
    var canvas = $('layout-canvas');
    state.layoutWide = canvas.clientWidth >= canvas.clientHeight;
    preferencesRevision++;
    saveSession();
    if (window.CookAccount && !await window.CookAccount.savePreferences()) return;
    leaveLayout();
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

  // A five-pointed star for favorites: filled with currentColor, or an outline when not a favorite.
  function starSvg(cls, outline) {
    return '<svg class="' + cls + '" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">' +
      '<path ' + (outline ? 'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"' : 'fill="currentColor"') + ' d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z"/></svg>';
  }

  // ---------- Favorites (saved with the account; only while signed in) ----------
  function signedIn() { return !!(window.CookAccount && window.CookAccount.signedIn()); }
  function isFav(r) { return state.favorites.indexOf(r.id) >= 0; }
  function cleanFavorites(list) {
    var known = window.RECIPES.map(function (r) { return r.id; });
    return list.filter(function (id, i) { return known.indexOf(id) >= 0 && list.indexOf(id) === i; }).slice(0, 500);
  }
  function toggleFav(r) {
    if (!signedIn()) { window.CookAccount && window.CookAccount.prompt('favSignIn'); return; }
    if (isFav(r)) state.favorites = state.favorites.filter(function (id) { return id !== r.id; });
    else state.favorites = state.favorites.concat(r.id);
    preferencesRevision++;
    saveSession();
    paintFavs();
    if (state.filters.fav && state.screen === 'recipes') renderRecipes();
    window.CookAccount.savePreferences();
  }
  // The small star on a recipe card's photo: filled when a favorite.
  function paintFavButton(button, r) {
    var fav = signedIn() && isFav(r);
    button.innerHTML = starSvg('star-icon', !fav);
    button.setAttribute('aria-pressed', String(fav));
    button.setAttribute('aria-label', t(fav ? 'favAdded' : 'favAdd'));
    button.title = t(fav ? 'favAdded' : 'favAdd');
  }
  // "Add to favorites" / "Added to favorites" buttons and the star after the recipe name.
  function paintFavs() {
    document.querySelectorAll('[data-fav]').forEach(function (button) {
      var r = window.RECIPES.filter(function (x) { return x.id === button.getAttribute('data-fav'); })[0];
      if (r) paintFavButton(button, r);
    });
    var r = state.recipe, fav = !!r && signedIn() && isFav(r);
    ['btn-fav', 'btn-fav-done'].forEach(function (id) {
      var button = $(id);
      if (!button) return;
      button.setAttribute('aria-pressed', String(fav));
      button.querySelector('.fav-icon').innerHTML = starSvg('star-icon', !fav);
      button.querySelector('.btn-label').textContent = t(fav ? 'favAdded' : 'favAdd');
    });
    var star = $('det-star');
    if (star) {
      star.hidden = !fav;
      star.innerHTML = fav ? starSvg('star-icon') : '';
      star.title = t('favAdded');
    }
  }
  on('btn-fav', 'click', function () { if (state.recipe) toggleFav(state.recipe); });
  // "Check all recipes": clears every filter and the search text.
  on('btn-fav-all', 'click', function () {
    state.filters = { fav: false, diet: [], cat: [], cuisine: [], method: [], voice: false };
    state.search = '';
    if ($('recipe-search')) $('recipe-search').value = '';
    saveSession();
    renderFilters();
    renderRecipes();
  });
  on('btn-fav-done', 'click', function () { if (state.recipe) toggleFav(state.recipe); });
  // Signing in or out changes which favorites (and the "Favorites only" filter) show.
  document.addEventListener('cook:account', function () {
    if ($('filters')) renderFilters();
    if (state.filters.fav && $('screen-recipes')) renderRecipes();
    paintFavs();
  });

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
  // Dish photos are named after the recipe id, except where one photo serves under another name.
  var PHOTO_FILE = { homemade_mayonnaise: 'mayonnaise' };
  function photoEl(r, size, cls) {
    var img = document.createElement('img');
    img.className = 'photo ' + (cls || '');
    img.alt = '';
    img.decoding = 'async';
    if (size === 350) img.loading = 'lazy';
    img.src = 'img/ready/webp' + size + '/' + (PHOTO_FILE[r.id] || r.id) + '.webp';
    img.addEventListener('error', function () {
      var ph = document.createElement('div');
      ph.className = 'photo photo-placeholder ' + (cls || '');
      if (img.id) ph.id = img.id;
      img.replaceWith(ph);
    });
    return img;
  }

  // ---------- Recipe list ----------
  var CATEGORIES = ['breakfast', 'soup', 'salad', 'main', 'side', 'dip', 'dessert'];
  // Cuisine filters: regions, each with its countries that have 2 or more recipes,
  // shown as "Asian (Chinese · Japanese · …)".
  var CUISINE_GROUPS = [
    ['Italian'], ['Asian', ['Chinese', 'Japanese', 'Korean', 'Thai', 'Vietnamese', 'Indonesian', 'Filipino']],
    ['Indian'], ['Middle Eastern'], ['Greek'], ['French'], ['Mexican'], ['Latin American'], ['American'],
    ['African', ['Nigerian', 'Moroccan']]
  ];
  // Diet filters: Vegetarian also lists the vegan recipes (judged with the default options).
  var DIETS = ['veg', 'vegan'];
  // Cooking-method filters (judged with the default options):
  // Air fryer / Slow cooker: that appliance is the only heat (no stovetop, no oven).
  // No-cook: no stovetop, oven or heating appliance at all.
  var METHODS = ['airfryer', 'slowcooker', 'nocook'];
  var HEAT_TOOLS = ['slow_cooker', 'air_fryer', 'waffle_iron', 'panini_press', 'microwave'];
  function methodOf(r, m) {
    var steps = defaultBuild(r).steps;
    var areas = steps.map(function (s) { return s.area; });
    var tools = [].concat.apply([], steps.map(function (s) { return s.tools || []; }));
    var stoveOrOven = areas.indexOf('stove') >= 0 || areas.indexOf('oven') >= 0;
    if (m === 'airfryer') return tools.indexOf('air_fryer') >= 0 && !stoveOrOven;
    if (m === 'slowcooker') return tools.indexOf('slow_cooker') >= 0 && !stoveOrOven;
    return !stoveOrOven && !tools.some(function (t) { return HEAT_TOOLS.indexOf(t) >= 0; });
  }
  function methodOk(r, list) { return !list.length || list.some(function (m) { return methodOf(r, m); }); }
  var VEGETARIAN = ['vegan', 'veg', 'lacto', 'ovo', 'lactoOvo'];
  function defaultBuild(r) { return defaultBuilds[r.id] || (defaultBuilds[r.id] = r.build(defaultChoices(r))); }
  function dietOk(r, diets) {
    if (!diets.length) return true;
    var label = dietInfo(defaultBuild(r)).label;
    return diets.some(function (d) { return d === 'vegan' ? label === 'vegan' : VEGETARIAN.indexOf(label) >= 0; });
  }
  var defaultBuilds = {};

  function defaultChoices(r) {
    var c = { adults: r.defaultServings || 2, kids: 0, mode: 'detailed' };
    r.options.forEach(function (o) {
      c[o.id] = o.choices.filter(function (ch) { return ch.isDefault; })[0].id;
    });
    c.servings = c.adults;
    return c;
  }

  // Filters are words separated by interpuncts (·); a picked word is highlighted.
  // Rows: Most popular · diets, then dish types, then cuisines.
  function renderFilters() {
    var box = $('filters');
    if (!box) return;
    box.innerHTML = '';
    var rows = {};
    ['diet', 'cat', 'cuisine', 'method'].forEach(function (g) {
      rows[g] = document.createElement('div');
      rows[g].className = 'filter-row filter-row-' + g;
      box.appendChild(rows[g]);
    });
    function text(group, str, cls) {
      var span = document.createElement('span');
      span.className = 'filter-sep' + (cls ? ' ' + cls : '');
      span.setAttribute('aria-hidden', 'true');
      span.textContent = str;
      rows[group].appendChild(span);
    }
    function word(group, value, label) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'filter-word';
      b.textContent = label;
      b.setAttribute('data-value', value);
      b.setAttribute('aria-pressed', String(state.filters[group].indexOf(value) >= 0));
      // One choice per row: picking a word replaces the row's earlier pick; picking it again clears it.
      b.addEventListener('click', function () {
        var on = state.filters[group].indexOf(value) < 0;
        state.filters[group] = on ? [value] : [];
        rows[group].querySelectorAll('.filter-word').forEach(function (x) {
          x.setAttribute('aria-pressed', String(on && x.getAttribute('data-value') === value));
        });
        renderRecipes();
      });
      rows[group].appendChild(b);
    }
    // "Favorites only": shown while signed in
    if (signedIn()) {
      var star = document.createElement('button');
      star.type = 'button';
      star.className = 'filter-word filter-star';
      star.innerHTML = starSvg('star-icon') + '<span>' + ht('favOnly') + '</span>';
      star.setAttribute('aria-pressed', String(state.filters.fav));
      star.addEventListener('click', function () {
        state.filters.fav = !state.filters.fav;
        star.setAttribute('aria-pressed', String(state.filters.fav));
        renderRecipes();
      });
      rows.diet.appendChild(star);
    }
    DIETS.forEach(function (d) { text('diet', '\u00b7'); word('diet', d, t('diet_' + d)); });
    CATEGORIES.forEach(function (c, i) { if (i) text('cat', '\u00b7'); word('cat', c, t('cat_' + c)); });
    CUISINE_GROUPS.forEach(function (g, i) {
      if (i) text('cuisine', '\u00b7');
      word('cuisine', g[0], t('cuisine_' + g[0]));
      if (!g[1]) return;
      text('cuisine', '(', 'filter-open');
      g[1].forEach(function (c, j) { if (j) text('cuisine', '\u00b7'); word('cuisine', c, t('cuisine_' + c)); });
      text('cuisine', ')', 'filter-close');
    });
    METHODS.forEach(function (m, i) { if (i) text('method', '·'); word('method', m, t('method_' + m)); });
    // "Based on what you said": appears once something was said in the fridge panel.
    if (state.voice.length) {
      var row = document.createElement('div');
      row.className = 'filter-row filter-row-voice';
      var vb = document.createElement('button');
      vb.type = 'button';
      vb.className = 'filter-word filter-voice';
      vb.innerHTML = '<svg class="mic-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg><span>' + ht('basedOnSaid') + '</span>';
      vb.setAttribute('aria-pressed', String(state.filters.voice));
      vb.addEventListener('click', function () {
        state.filters.voice = !state.filters.voice;
        vb.setAttribute('aria-pressed', String(state.filters.voice));
        renderRecipes();
      });
      row.appendChild(vb);
      box.appendChild(row);
    }
  }

  // ---------- What's in the fridge: which recipes fit ----------
  // Assumed to be in every kitchen; never listed as missing.
  var ESSENTIALS = ['salt', 'ground_black_pepper', 'black_peppercorn', 'white_pepper', 'sugar', 'brown_sugar', 'flour',
    'oil', 'olive_oil', 'extra_virgin_olive_oil', 'water', 'ice', 'baking_powder', 'baking_soda'];
  // Saying one of these counts for all of them ("chicken" fits chicken thighs too).
  var KINDS = [
    ['chicken_breast', 'chicken_legs', 'chicken_wings', 'whole_chicken'],
    ['white_rice', 'jasmine_rice', 'basmati_rice', 'short_grain_rice', 'arborio_rice', 'brown_rice'],
    ['spaghetti', 'penne', 'macaroni', 'fettuccine'], ['onion', 'white_onion', 'red_onion'], ['tomato', 'cherry_tomato'],
    ['bell_pepper', 'red_bell_pepper', 'green_bell_pepper'], ['grated_cheese', 'cheddar', 'cheese_slice'],
    ['lettuce', 'romaine_lettuce'], ['green_onion', 'spring_onion'], ['kidney_beans', 'black_beans', 'white_beans'],
    ['light_soy_sauce', 'dark_soy_sauce'], ['white_mushroom', 'oyster_mushroom', 'shiitake_mushroom', 'portobello_mushroom']
  ];
  var MAX_MISSING = 4;
  var fitCache = { sig: '', fits: {} };
  function voiceHave() {
    var have = {};
    state.voice.forEach(function (k) {
      have[k] = true;
      KINDS.forEach(function (kind) { if (kind.indexOf(k) >= 0) kind.forEach(function (m) { have[m] = true; }); });
    });
    return have;
  }
  // Every combination of the recipe's options (24 at most here).
  function optionCombos(r) {
    var list = [{}];
    r.options.forEach(function (o) {
      var next = [];
      list.forEach(function (c) { o.choices.forEach(function (ch) { var x = Object.assign({}, c); x[o.id] = ch.id; next.push(x); }); });
      list = next.length > 64 ? list : next;
    });
    return list;
  }
  // The options that need the fewest extra ingredients: { missing: [{ key, name }], hits, choices }.
  function voiceFit(r) {
    var sig = state.voice.slice().sort().join(',') + '|' + lang;
    if (fitCache.sig !== sig) fitCache = { sig: sig, fits: {} };
    if (fitCache.fits[r.id]) return fitCache.fits[r.id];
    var have = voiceHave(), best = null;
    optionCombos(r).forEach(function (combo) {
      var c = Object.assign(defaultChoices(r), combo);
      var built = r.build(c), seen = {}, missing = [], hits = 0;
      built.ingredients.forEach(function (i) {
        var k = i.key || i.id;
        if (seen[k] || ESSENTIALS.indexOf(k) >= 0) return;
        seen[k] = true;
        if (have[k]) hits++;
        else if (!/optional/i.test(i._name || '')) missing.push({ key: k, name: shortName(i.name) });
      });
      if (!best || missing.length < best.missing.length || (missing.length === best.missing.length && hits > best.hits)) {
        best = { missing: missing, hits: hits, choices: c };
      }
    });
    return (fitCache.fits[r.id] = best);
  }
  function voiceOk(r) { var f = voiceFit(r); return f.hits > 0 && f.missing.length <= MAX_MISSING; }
  // "Egg, large, room temperature" -> "Egg"; "Milk (or cream)" -> "Milk".
  function shortName(n) { var x = String(n).split(/,|\(/)[0].trim(); return x || String(n); }
  // A chip's name: the ingredient name in the site language.
  var englishNames = null;
  function ingredientName(key) {
    if (!englishNames) {
      englishNames = {};
      window.RECIPES.forEach(function (r) {
        defaultBuild(r).ingredients.forEach(function (i) {
          var k = i.key || i.id, n = shortName(i._name || i.name);
          if (!englishNames[k] || n.length < englishNames[k].length) englishNames[k] = n;
        });
      });
    }
    var en = englishNames[key] || key.replace(/_/g, ' ');
    return ingName(key, en.charAt(0).toUpperCase() + en.slice(1));
  }
  window.Fridge.init({
    t: t,
    keys: function () { return state.voice.slice(); },
    nameOf: ingredientName,
    langs: LANGS,
    onChange: function (keys, why) {
      state.voice = keys;
      if (why === 'finish' && keys.length) {
        state.filters.voice = true;
        state.filters.fav = false; // the answer should not be limited to favorites
      }
      if (!keys.length) state.filters.voice = false;
      renderFilters();
      renderRecipes();
      if (why === 'finish') {
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        $('filters').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      }
    },
    onClose: function () { $('btn-fridge').hidden = false; }
  });
  on('btn-fridge', 'click', function () {
    $('btn-fridge').hidden = true;
    window.Fridge.open();
  });

  // The filters (not the search text): favorites, diet, dish type, cuisine, "what you said".
  function filtersOk(r) {
    var f = state.filters;
    return (!f.cat.length || f.cat.indexOf(r.category) >= 0) && (!f.fav || !signedIn() || isFav(r)) && dietOk(r, f.diet) &&
      (!f.cuisine.length || r.cuisine.some(function (c) { return f.cuisine.indexOf(c) >= 0; })) && methodOk(r, f.method) &&
      (!(f.voice && state.voice.length) || voiceOk(r));
  }

  // ---------- Recipe search ----------
  // Finds recipes by name, ingredient, utensil, step (method) or label (dish type,
  // cuisine, diet, cooking method), using the words the site shows in the chosen
  // language (where something has no translation, its English text).
  // From 3 characters on, a list of matching recipes opens under the box and the
  // recipe list narrows down as you type.
  var SEARCH_MIN = 3;
  var KIND_ORDER = ['recipe', 'ingredient', 'label', 'utensil', 'method'];
  var KIND_LABEL = { recipe: 'kindRecipe', ingredient: 'kindIngredient', utensil: 'kindUtensil', method: 'kindMethod', label: 'kindLabel' };
  var searchIndex = null; // { lang, entries: [...], hay: { recipeId: 'all terms' } }, rebuilt when the language changes
  function norm(text) {
    return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }
  // The builds a recipe can have: the default choices, and each other choice of each option.
  function searchBuilds(r) {
    // The cached default build may still carry an earlier language's names.
    var base = defaultChoices(r), out = [localizeBuilt(defaultBuild(r))];
    r.options.forEach(function (o) {
      o.choices.forEach(function (ch) {
        if (ch.id === base[o.id]) return;
        var c = Object.assign({}, base);
        c[o.id] = ch.id;
        try { out.push(r.build(c)); } catch (e) { /* skip a choice that can't be built */ }
      });
    });
    return out;
  }
  function index() {
    if (!searchIndex || searchIndex.lang !== lang) searchIndex = buildSearchIndex();
    return searchIndex;
  }
  function buildSearchIndex() {
    var byKey = {}, entries = [], hay = {};
    function add(kind, text, r) {
      var n = norm(text);
      if (!n) return;
      var key = kind + '|' + n + (kind === 'recipe' ? '|' + r.id : '');
      var e = byKey[key];
      if (!e) { e = byKey[key] = { kind: kind, text: String(text).trim(), norm: n, ids: {} }; entries.push(e); }
      e.ids[r.id] = true;
      hay[r.id] = (hay[r.id] || '') + '\u0001' + n;
    }
    window.RECIPES.forEach(function (r) {
      add('recipe', recipeName(r), r);
      searchBuilds(r).forEach(function (b) {
        b.ingredients.forEach(function (i) { add('ingredient', i.name, r); });
        b.steps.forEach(function (st) {
          add('method', st.title, r);
          (st.tools || []).forEach(function (id) { if (window.EQUIPMENT[id]) add('utensil', L(window.EQUIPMENT[id].name), r); });
        });
      });
      add('label', t('cat_' + r.category), r);
      r.cuisine.forEach(function (c) { add('label', t('cuisine_' + c), r); });
      var diet = dietInfo(defaultBuild(r)).label;
      if (diet) add('label', t('diet_' + diet), r);
      METHODS.forEach(function (m) { if (methodOf(r, m)) add('label', t('method_' + m), r); });
    });
    return { lang: lang, entries: entries, hay: hay };
  }
  function searchOk(r) {
    var q = norm(state.search);
    if (q.length < SEARCH_MIN) return true;
    return (index().hay[r.id] || '').indexOf(q) >= 0;
  }
  // Suggestions for the text: best matches first (start of the text, then start of a
  // word, then anywhere), recipe names before ingredients, labels, utensils and steps.
  function suggestions(text) {
    var q = norm(text);
    if (q.length < SEARCH_MIN) return [];
    var allowed = {};
    window.RECIPES.forEach(function (r) { if (filtersOk(r)) allowed[r.id] = true; });
    var word = new RegExp('(^|[\\s\\-(,/])' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    var seenRecipe = {}, hits = [];
    index().entries.forEach(function (e) {
      var at = e.norm.indexOf(q);
      if (at < 0) return;
      var ids = Object.keys(e.ids).filter(function (id) { return allowed[id]; });
      if (!ids.length) return;
      hits.push({ e: e, ids: ids, score: at === 0 ? 0 : word.test(e.norm) ? 1 : 2 });
    });
    hits.sort(function (a, b) {
      return (a.score - b.score) || (KIND_ORDER.indexOf(a.e.kind) - KIND_ORDER.indexOf(b.e.kind)) ||
        (a.e.text.length - b.e.text.length) || a.e.text.localeCompare(b.e.text);
    });
    // Only recipes are listed: each one once, with its best matching word.
    var out = [];
    hits.forEach(function (h) {
      h.ids.forEach(function (id) {
        if (seenRecipe[id]) return;
        seenRecipe[id] = true;
        out.push({ r: window.RECIPES.filter(function (x) { return x.id === id; })[0], e: h.e });
      });
    });
    return out.slice(0, 8);
  }
  // The text with the matching part in <mark>; accents and case don't matter.
  function markMatch(text, q) {
    var map = [], flat = '';
    Array.from(text).forEach(function (ch, i, chars) {
      var n = norm(ch) || '';
      for (var k = 0; k < n.length; k++) map.push(i);
      flat += n;
    });
    var chars = Array.from(text), at = flat.indexOf(q);
    if (at < 0 || !q) return esc(text);
    var from = map[at], to = map[at + q.length - 1] + 1;
    return esc(chars.slice(0, from).join('')) + '<mark>' + esc(chars.slice(from, to).join('')) + '</mark>' + esc(chars.slice(to).join(''));
  }
  var searchHits = [], searchActive = -1;
  function closeSuggestions() {
    if (!$('recipe-search')) return;
    $('search-list').hidden = true;
    $('recipe-search').setAttribute('aria-expanded', 'false');
    $('recipe-search').removeAttribute('aria-activedescendant');
    searchActive = -1;
  }
  function showSuggestions() {
    var input = $('recipe-search'), list = $('search-list'), q = norm(input.value);
    searchHits = suggestions(input.value);
    searchActive = -1;
    input.removeAttribute('aria-activedescendant');
    list.innerHTML = '';
    if (!searchHits.length) { closeSuggestions(); return; }
    searchHits.forEach(function (h, i) {
      var li = document.createElement('li');
      li.id = 'search-opt-' + i;
      li.className = 'search-opt';
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      // The recipe's name; beside it, what matched when it isn't the name itself
      // (its name in another language, an ingredient, a utensil, a step or a label).
      var name = recipeName(h.r), why = '';
      if (norm(name).indexOf(q) < 0) {
        why = h.e.kind === 'recipe' ? markMatch(h.e.text, q) : ht(KIND_LABEL[h.e.kind]) + ': ' + markMatch(h.e.text, q);
      }
      li.innerHTML = '<span class="search-opt-text">' + markMatch(name, q) + '</span>' +
        (why ? '<span class="search-opt-kind">' + why + '</span>' : '');
      // pointerdown keeps the focus in the box; the pick happens on click.
      li.addEventListener('pointerdown', function (e) { e.preventDefault(); });
      li.addEventListener('click', function () { pickSuggestion(i); });
      list.appendChild(li);
    });
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }
  function setActive(i) {
    var opts = $('search-list').querySelectorAll('.search-opt');
    if (!opts.length) return;
    searchActive = (i + opts.length) % opts.length;
    opts.forEach(function (o, k) { o.setAttribute('aria-selected', String(k === searchActive)); });
    opts[searchActive].scrollIntoView({ block: 'nearest' });
    $('recipe-search').setAttribute('aria-activedescendant', opts[searchActive].id);
  }
  // Picking a suggestion opens that recipe.
  function pickSuggestion(i) {
    var h = searchHits[i];
    if (!h) return;
    closeSuggestions();
    if (h.r) openDetails(h.r);
  }
  function runSearch() {
    var input = $('recipe-search');
    if (!input) return;
    state.search = input.value;
    renderRecipes();
    if (document.activeElement === input) showSuggestions();
  }
  on('recipe-search', 'input', runSearch);
  on('recipe-search', 'keydown', function (e) {
    var open = !$('search-list').hidden;
    if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) showSuggestions(); else setActive(searchActive + 1); }
    else if (e.key === 'ArrowUp') { if (open) { e.preventDefault(); setActive(searchActive - 1); } }
    else if (e.key === 'Enter') { if (open && searchActive >= 0) { e.preventDefault(); pickSuggestion(searchActive); } else closeSuggestions(); }
    else if (e.key === 'Escape') { if (open) { e.preventDefault(); closeSuggestions(); } }
  });
  // The box's own clear (×) button and Escape on an empty list empty the search.
  on('recipe-search', 'search', runSearch);
  on('recipe-search', 'blur', closeSuggestions);

  function renderRecipes() {
    var wrap = $('recipe-sections'), f = state.filters, any = false;
    if (!wrap) return;
    wrap.innerHTML = '';
    CATEGORIES.forEach(function (cat) {
      if (f.cat.length && f.cat.indexOf(cat) < 0) return;
      var voice = f.voice && state.voice.length;
      var recipes = window.RECIPES.filter(function (r) {
        return r.category === cat && filtersOk(r) && searchOk(r);
      });
      // Based on what you said: the fewest extra ingredients first.
      if (voice) recipes.sort(function (a, b) {
        var x = voiceFit(a), y = voiceFit(b);
        return (x.missing.length - y.missing.length) || (y.hits - x.hits);
      });
      if (!recipes.length) return;
      any = true;
      var h = document.createElement('h2');
      h.className = 'category-title';
      h.textContent = t('cat_' + cat);
      var ul = document.createElement('ul');
      ul.className = 'recipe-list';
      recipes.forEach(function (r) {
        var built = defaultBuild(r);
        var info = dietInfo(built), n = nutritionPerPerson(built);
        var li = document.createElement('li');
        li.className = 'recipe-item';
        li.innerHTML =
          '<a class="recipe-card" href="' + esc(screenUrl('details', r)) + '">' +
          '<span class="recipe-card-body">' +
          '<span class="title-row"><span>' + esc(recipeName(r)) + '</span>' + dietBadge(info) + '</span>' +
          '<span class="meta-line time-line">⏱️ ' + esc(fmtMinutes(estimateMinutes(built.steps))) + '</span>' +
          '<span class="meta-line nutri-line">📊 ' + kcal5(n.kcal) + ' kcal · ' +
          Math.round(n.carbs) + ' g ' + ht('carbsShort') + ' · ' + Math.round(n.protein) + ' g ' + ht('proteinShort') +
          '<small>' + esc(unitText(r, 'perServing')) + '</small></span>' +
          '<span class="warn-row">' + containsRow(info) + '</span>' +
          (voice && voiceFit(r).missing.length ? '<span class="need-line"><b>' + ht('alsoNeed') + '</b> ' +
            voiceFit(r).missing.map(function (m) { return esc(m.name); }).join(', ') + '</span>' : '') +
          '</span></a>' +
          '<button class="btn btn-secondary btn-read-card" type="button" aria-label="' + ht('readInstead') + '" title="' + ht('readInstead') + '">' +
          "<svg class=\"book-icon\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2zM12 6.5v13\"/></svg>" + '</button>';
        var card = li.querySelector('.recipe-card');
        var wrap = document.createElement('span');
        wrap.className = 'photo-wrap';
        wrap.appendChild(photoEl(r, 350));
        var time = document.createElement('span');
        time.className = 'photo-time';
        time.textContent = fmtMinutes(estimateMinutes(built.steps));
        wrap.appendChild(time);
        card.insertBefore(wrap, card.firstChild);
        card.addEventListener('click', function (e) {
          if (e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
          e.preventDefault();
          // From "Based on what you said": open it with the options that fit.
          if (voice) state.picks[r.id] = Object.assign({}, voiceFit(r).choices, { mode: picksFor(r).mode || 'detailed' });
          openDetails(r);
        });
        li.querySelector('.btn-read-card').addEventListener('click', function () { openRead(r); });
        // Favorite toggle on the photo (outside the link, so it is its own button)
        var fav = document.createElement('button');
        fav.type = 'button';
        fav.className = 'fav-card';
        fav.setAttribute('data-fav', r.id);
        fav.addEventListener('click', function () { toggleFav(r); });
        li.appendChild(fav);
        paintFavButton(fav, r);
        ul.appendChild(li);
      });
      wrap.appendChild(h);
      wrap.appendChild(ul);
    });
    // "Favorites only" with no favorites yet: a large, dimmed note and a way back to all recipes.
    var favEmpty = f.fav && signedIn() && !state.favorites.length;
    $('fav-empty').hidden = !favEmpty;
    $('no-results').hidden = any || favEmpty;
    $('no-results').textContent = t(f.voice && state.voice.length ? 'fvNoRecipes' : 'noResults');
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
  on('jump-bottom', 'click', function () {
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
    if (pageScreen !== 'details') { navigate('details'); return; }
    $('det-name').textContent = recipeName(r);
    paintFavs();
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
    var ul = $('det-equipment');
    if (!ul) return;
    var n = ul.children.length, wAll = ul.clientWidth;
    if (!n || !wAll) return;
    var fit = Math.max(1, Math.floor((wAll + EQ_GAP) / (EQ_MIN + EQ_GAP)));
    var perRow = Math.ceil(n / Math.ceil(n / fit));
    ul.style.setProperty('--eq-w', Math.min(EQ_MAX, (wAll - EQ_GAP * (perRow - 1)) / perRow) + 'px');
  }
  window.addEventListener('resize', function () { if (state.screen === 'details') layoutEquipment(); });

  function updateDetails() {
    if (!$('screen-details') || !state.recipe) return;
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

  on('screen-details', 'change', function (e) {
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
  on('adults-minus', 'click', function () { setPeople(state.choices.adults - 1, state.choices.kids); });
  on('adults-plus', 'click', function () { setPeople(state.choices.adults + 1, state.choices.kids); });
  on('kids-minus', 'click', function () { setPeople(state.choices.adults, state.choices.kids - 1); });
  on('kids-plus', 'click', function () { setPeople(state.choices.adults, state.choices.kids + 1); });

  function imgFor(i) { return 'img/350/' + (i.key || i.id) + '.webp'; }
  // Ingredients without a photo yet get the same pot placeholder as the meals.
  function ingImg(i) {
    return i.noImage ? '<span class="ing-ph" aria-hidden="true"></span>' : '<img alt="" src="' + esc(imgFor(i)) + '">';
  }

  // No kitchen layout yet: ask first. Yes cooks in list view; No opens the layout
  // editor, which returns to this recipe page (saved or cancelled).
  on('btn-start-cooking', 'click', function () {
    if (state.layoutSaved) { startCooking(); return; }
    openDialog($('nolayout-dialog'));
    $('nolayout-setup').focus();
  });
  on('nolayout-yes', 'click', function () { $('nolayout-dialog').close(); startCooking(); });
  on('nolayout-setup', 'click', function () { $('nolayout-dialog').close(); openLayout(); });

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

  // "Do this first!": when two or more open steps have not been started yet, the
  // one with the most work left after it (its own time plus the longest chain of
  // steps that wait for it) goes first, so the slow parts start early.
  function workLeft(id, memo) {
    if (id in memo) return memo[id];
    var next = CookCore.graph(cook.steps).next[id];
    var most = 0;
    next.forEach(function (n) { most = Math.max(most, workLeft(n, memo)); });
    return (memo[id] = (stepById(id).duration || 0) + most);
  }
  function doFirstId() {
    var open = cook.slots.filter(function (id) { return !cook.started[id]; });
    if (open.length < 2) return null;
    var memo = {}, best = null;
    open.forEach(function (id) { if (best === null || workLeft(id, memo) > workLeft(best, memo)) best = id; });
    return best;
  }
  function firstFirst(ids, first) {
    var at = ids.indexOf(first);
    return at > 0 ? [first].concat(ids.slice(0, at), ids.slice(at + 1)) : ids;
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
    if (pageScreen !== 'cook') {
      activeCookRecord = { recipe: state.recipe.id, choices: clone(state.choices),
        steps: state.built.steps.map(function (step) { return step.id; }), done: [], started: {}, t0: null, tipsShown: [] };
      navigate('cook');
      return;
    }
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
    if (isMap()) fullscreenTo(state.layoutWide === false ? 'portrait' : 'landscape');
    refresh();
    render();
    updateClocks();
    $('btn-start-now').focus();
  }

  // "Start now" counts down 3, 2, 1 (rings close in around the number), then the clock runs.
  var countdownTimer = null;
  on('btn-start-now', 'click', function () {
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
    saveSession();
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
    activeCookRecord = null;
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
  on('btn-cook-exit', 'click', askGiveUp);
  on('exit-no', 'click', function () { $('exit-dialog').close(); });
  on('exit-yes', 'click', function () {
    $('exit-dialog').close();
    stopCooking();
    navigate('details');
  });

  // Map view needs a saved kitchen layout; until then the button explains why.
  var viewTipTimer = null;
  function showViewTip() {
    $('view-tip').hidden = false;
    clearTimeout(viewTipTimer);
    viewTipTimer = setTimeout(function () { $('view-tip').hidden = true; }, 3500);
  }
  on('btn-view', 'click', function () {
    if (!state.layoutSaved) { showViewTip(); return; }
    state.mapView = !state.mapView;
    if (state.mapView) fullscreenTo(state.layoutWide === false ? 'portrait' : 'landscape');
    else leaveFullscreen();
    render();
  });
  on('btn-view', 'mouseenter', function () { if (!state.layoutSaved) showViewTip(); });
  on('btn-view', 'focus', function () { if (!state.layoutSaved) showViewTip(); });
  on('btn-view', 'mouseleave', function () { $('view-tip').hidden = true; });

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
            animHtml(step, 'ring-anim') +
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
      el.classList.add('is-running');
      tick();
      saveSession();
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
    el.classList.toggle('is-running', running);
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
    saveSession();
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

    var first = doFirstId(), ids = firstFirst(cook.slots, first);
    var els = ids.map(function (id) {
      var s = stepById(id), el = cardFor(s);
      updateCard(s, el);
      markFirst(el, id === first);
      return el;
    });
    if (map) {
      renderMap(ids.map(function (id) {
        var n = notifFor(stepById(id));
        markFirst(n, id === first);
        return n;
      }));
    } else {
      closePop();
      syncChildren($('cook-list'), els);
    }
  }

  function markFirst(el, on) {
    var b = el.querySelector(':scope > .first-badge');
    el.classList.toggle('is-first', on);
    if (on && !b) {
      b = document.createElement('span');
      b.className = 'first-badge';
      b.textContent = t('doFirst');
      el.appendChild(b);
    } else if (!on && b) b.remove();
    else if (b) b.textContent = t('doFirst');
  }

  // ---------- Map notifications ----------
  // On the map every open step is a small notification on its area: a moving
  // icon, the step's title, its timer, and Start / Done. Tapping it opens the
  // full card in a popup next to the area.
  var NOTIF_RING = 2 * Math.PI * 16;

  // While a step runs, its ring shows a two-frame picture of the work
  // (icons/anim/NAME-1.svg and -2.svg, 0.4 s each). The picture is picked from
  // the step's area, tools and (English) title; steps that match nothing keep
  // the still area icon.
  function animOf(step) {
    var title = (step._title || step.title || '').toLowerCase();
    var tools = step.tools || [];
    function has() { return Array.prototype.some.call(arguments, function (t) { return tools.indexOf(t) >= 0; }); }
    function says(re) { return re.test(title); }
    if (step.area === 'fridge') return 'fridge';
    if (step.area === 'sink') {
      if (says(/drain|strain/) || has('colander', 'sieve')) return 'drain';
      if (says(/fill|water/)) return 'pour-water';
      return 'wash';
    }
    if (has('mortar_and_pestle')) return 'grind-in-mortar';
    if (says(/drain|strain/) || has('colander')) return 'drain';
    if (has('cheese_grater', 'microplane') || says(/grate|zest/)) return 'grate';
    if (has('vegetable_peeler') || says(/\bpeel/)) return 'peel';
    if (has('blender', 'immersion_blender') || says(/blend|pur[eé]e/)) return 'blend';
    if (has('whisk') || says(/whisk|\bbeat/)) return 'whisk';
    if (has('rolling_pin') || says(/knead|roll out/)) return 'knead';
    if (says(/serve|plate/)) return 'plate';
    if (step.area === 'board' || has('chef_knife', 'knife')) return 'chop';
    if (step.area === 'oven') return 'bake';
    if (says(/\bfill|pour/)) return 'pour-water';
    if (step.area === 'stove' && says(/flip|turn/)) return 'flip-in-pan';
    if (has('pan', 'wok')) return 'stir-pan';
    if (has('cooking_pot', 'saucepan')) return says(/boil|simmer|bring|cook the (pasta|noodles|rice)/) ? 'boil' : 'add-to-pot';
    if (has('bowl') || says(/\bstir|\bmix|combine|toss/)) return 'mix-in-bowl';
    return null;
  }
  function animHtml(step, cls) {
    var a = animOf(step);
    if (!a) return '';
    return '<span class="anim ' + cls + '" aria-hidden="true"><img alt="" src="icons/anim/' + a + '-1.svg"><img alt="" src="icons/anim/' + a + '-2.svg"></span>';
  }
  function notifFor(step) {
    if (cook.notifs[step.id]) return cook.notifs[step.id];
    var n = document.createElement('div');
    n.className = 'notif';
    n.setAttribute('data-step', step.id);
    n.setAttribute('data-area', step.area);
    var tools = step.tools.map(function (id) { return window.EQUIPMENT[id]; }).filter(function (eq) { return eq && eq.icon; });
    var icon = (AREAS[step.area] || AREAS.countertop).icon;
    var toolIcons = tools.map(function (eq) { return '<img class="notif-tool" alt="" src="' + eq.icon + '">'; }).join('');
    n.innerHTML =
      '<span class="notif-icon"><svg class="notif-ring" viewBox="0 0 36 36" aria-hidden="true">' +
      '<circle class="nr-track" cx="18" cy="18" r="16"/><circle class="nr-fill" cx="18" cy="18" r="16" ' +
      'stroke-dasharray="' + NOTIF_RING + '" stroke-dashoffset="0"/></svg><img class="icon" alt="" src="' + icon + '">' + animHtml(step, 'notif-anim') + '</span>' +
      '<button class="notif-open" type="button"><span class="notif-title">' + esc(step.title) + (toolIcons ? ' <span class="notif-tools">' + toolIcons + '</span>' : '') + '</span>' +
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
    placePop(anchor);
    card.querySelector('.btn-done').focus();
  }
  // Under the notification if the card fits there, else above it, else on the
  // roomier side with a scrollbar. The pointer (arrow) joins it to the notification.
  function placePop(anchor) {
    var pop = $('step-pop'), arrow = $('step-pop-arrow'), gap = 12, edge = 8;
    pop.style.maxHeight = '';
    var a = anchor.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    var vw = window.innerWidth, vh = window.innerHeight;
    var below = vh - edge - (a.bottom + gap), above = a.top - gap - edge;
    var under = h <= below || (h > above && below >= above);
    if (h > (under ? below : above)) { pop.style.maxHeight = Math.max(120, under ? below : above) + 'px'; h = pop.offsetHeight; }
    var left = clamp(a.left + a.width / 2 - w / 2, edge, Math.max(edge, vw - w - edge));
    var top = under ? a.bottom + gap : a.top - gap - h;
    pop.style.left = Math.round(left) + 'px';
    pop.style.top = Math.round(top) + 'px';
    arrow.hidden = false;
    arrow.classList.toggle('is-up', under);
    arrow.style.left = Math.round(clamp(a.left + a.width / 2, left + 20, left + w - 20)) + 'px';
    arrow.style.top = Math.round(under ? a.bottom + gap : a.top - gap) + 'px';
  }
  function closePop() {
    var pop = $('step-pop');
    if (pop.hidden) return;
    pop.hidden = true;
    $('step-pop-arrow').hidden = true;
    var body = $('step-pop-body');
    while (body.firstChild) body.removeChild(body.firstChild);
    popStep = null;
  }
  on('step-pop-close', 'click', closePop);
  document.addEventListener('pointerdown', function (e) {
    if (!$('step-pop').hidden && !e.target.closest('#step-pop') && !e.target.closest('.notif-open')) closePop();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(); });

  // Only the areas this recipe uses, back to front.
  function usedAreas() {
    return areaKeysOf(state.layout).filter(function (key) {
      return cook.steps.some(function (s) { return s.area === key; });
    });
  }

  // Zooms in on the areas the recipe uses (fitKeys), centred with a small gap
  // around them, so unused areas may show at the edges or fall outside.
  // Writes every area's map position into cook.view.
  function fitView(fitKeys, keys) {
    var minX = 1, minY = 1, maxX = 0, maxY = 0, pad = 0.05;
    fitKeys.forEach(function (k) {
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
    // The fit zooms in on the used areas; unused ones show faintly where they fall.
    var all = areaKeysOf(state.layout);
    if (!mapEl.querySelector('.map-area.dragging')) fitView(keys.length ? keys : all, all);
    if (!mapEl.children.length) {
      all.forEach(function (key) {
        var used = keys.indexOf(key) >= 0;
        var a = document.createElement('section');
        a.className = 'map-area area-' + baseKey(key) + (used ? '' : ' unused');
        a.style.zIndex = Z[baseKey(key)];
        a.setAttribute('data-area', key);
        a.setAttribute('aria-label', t(baseKey(key)));
        if (!used) a.setAttribute('aria-hidden', 'true');
        a.innerHTML =
          '<div class="map-area-head"><img class="icon" alt="" src="' + AREAS[key].icon + '"><span class="label">' + ht(baseKey(key)) + '</span>' +
          (used ? '<button class="area-move" type="button" aria-label="' + ht('moveArea', { a: t(baseKey(key)) }) + '">' + MOVE_ICON + '</button>' : '') +
          '</div>';
        mapEl.appendChild(a);
        if (used) {
          makeMovable(a, key, mapEl, cook.view, all, {
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
    all.forEach(function (key) {
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
        var inset = 10, w = Math.min(mapW, 280, Math.max(a.offsetWidth - 2 * inset, 200));
        var left = v.x + v.w / 2 > 0.5 ? a.offsetLeft + a.offsetWidth - inset - w : a.offsetLeft + inset;
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
        n.classList.add('is-running');
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

  on('due-toast', 'click', function () {
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

  on('tip-close', 'click', function () { hideTip(false, 1); });

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
  for (var n = 1; starRow && n <= 5; n++) {
    var lbl = document.createElement('label');
    lbl.className = 'star';
    lbl.innerHTML = '<input type="radio" name="taste" value="' + n + '"><span aria-hidden="true">★</span>';
    lbl.querySelector('input').setAttribute('aria-label', t('stars', { n: n }) + ': ' + t('star' + n));
    starRow.appendChild(lbl);
  }
  var starLabels = starRow ? starRow.querySelectorAll('.star') : [];

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
  if (starRow) starRow.addEventListener('mouseleave', function () { paintStars(currentStars()); });
  if (starRow) starRow.addEventListener('change', function (e) {
    paintStars(currentStars());
    var star = e.target.closest('.star');
    var pop = document.createElement('span');
    pop.className = 'star-pop';
    pop.setAttribute('aria-hidden', 'true');
    pop.textContent = '★';
    star.appendChild(pop);
    pop.addEventListener('animationend', function () { pop.remove(); });
  });


  // ---------- Tab session ----------
  function cleanChoices(r, value) {
    var c = defaultChoices(r);
    if (!value || typeof value !== 'object') return c;
    c.adults = Number.isInteger(value.adults) ? clamp(value.adults, 0, r.maxServings || 8) : c.adults;
    c.kids = isPerson(r) && Number.isInteger(value.kids) ? clamp(value.kids, 0, 8) : 0;
    if (!c.adults && !c.kids) c.adults = 1;
    c.mode = value.mode === 'quick' ? 'quick' : 'detailed';
    r.options.forEach(function (o) {
      if (o.choices.some(function (ch) { return ch.id === value[o.id]; })) c[o.id] = value[o.id];
    });
    setServings(r, c);
    return c;
  }
  function restoreSession() {
    var value = savedSession;
    if (value.picks && typeof value.picks === 'object') {
      window.RECIPES.forEach(function (r) {
        if (Object.prototype.hasOwnProperty.call(value.picks, r.id)) state.picks[r.id] = cleanChoices(r, value.picks[r.id]);
      });
    }
    state.units = value.units === 'imperial' ? 'imperial' : 'metric';
    state.mapView = value.mapView !== false;
    if (typeof value.search === 'string') state.search = value.search.slice(0, 200);
    if (Array.isArray(value.favorites)) state.favorites = cleanFavorites(value.favorites);
    if (Array.isArray(value.voice)) state.voice = value.voice.filter(function (key) { return typeof key === 'string' && /^[a-z0-9_]+$/.test(key); }).slice(0, 500);
    if (value.filters && typeof value.filters === 'object') {
      ['diet', 'cat', 'cuisine', 'method'].forEach(function (key) {
        var allowed = key === 'diet' ? DIETS : key === 'cat' ? CATEGORIES : key === 'method' ? METHODS : [];
        if (key === 'cuisine') window.RECIPES.forEach(function (r) { allowed = allowed.concat(r.cuisine); });
        if (Array.isArray(value.filters[key])) state.filters[key] = value.filters[key].filter(function (x) { return allowed.indexOf(x) >= 0; }).slice(0, 1);
      });
      state.filters.fav = value.filters.fav === true;
      state.filters.voice = value.filters.voice === true && !!state.voice.length;
    }
    if (value.layout && typeof value.layout === 'object') {
      var layout = {}, valid = true;
      ALL_KEYS.forEach(function (key) {
        var rect = value.layout[key];
        if (!rect) { if (DEFAULT_LAYOUT[key]) valid = false; return; }
        if (!['x', 'y', 'w', 'h'].every(function (field) { return Number.isFinite(rect[field]); }) ||
          rect.x < 0 || rect.y < 0 || rect.w <= 0 || rect.h <= 0 || rect.x + rect.w > 1.001 || rect.y + rect.h > 1.001) { valid = false; return; }
        layout[key] = { x: rect.x, y: rect.y, w: rect.w, h: rect.h };
      });
      if (valid) {
        state.layout = layout;
        state.layoutSaved = value.layoutSaved === true;
        state.layoutTouched = value.layoutTouched === true;
        state.layoutWide = value.layoutWide !== false;
      }
    }
    textures = value.textures !== false;
    setTheme(['light', 'dark', 'system'].indexOf(value.theme) >= 0 ? value.theme : 'light');
    document.querySelectorAll('input[name="units"]').forEach(function (radio) { radio.checked = radio.value === state.units; });
    if ($('recipe-search')) $('recipe-search').value = state.search;
  }
  function cookingRecord() {
    if (!cook) return activeCookRecord;
    return { recipe: state.recipe.id, choices: clone(state.choices), steps: cook.steps.map(function (s) { return s.id; }),
      done: Array.from(cook.done), started: cook.started, t0: cook.t0, celebrated: !!cook.celebrated,
      tipsShown: Array.from(cook.tipsShown), stars: currentStars() };
  }
  function saveSession() {
    return window.CookSession.save({
      picks: state.picks, units: state.units, mapView: state.mapView, filters: state.filters, search: state.search,
      voice: state.voice, favorites: state.favorites, layout: state.layout, layoutSaved: state.layoutSaved, layoutTouched: !!state.layoutTouched,
      layoutWide: state.layoutWide, textures: textures, lang: requestedLang || lang,
      theme: document.documentElement.getAttribute('data-theme'), cooking: cookingRecord()
    });
  }
  function restoreCooking(record) {
    if (!record || record.recipe !== state.recipe.id || !Array.isArray(record.steps)) return false;
    var choices = cleanChoices(state.recipe, record.choices);
    var built = state.recipe.build(choices);
    if (JSON.stringify(record.steps) !== JSON.stringify(built.steps.map(function (s) { return s.id; }))) return false;
    state.choices = state.picks[state.recipe.id] = choices;
    state.built = built;
    startCooking();
    var ids = Object.keys(cook.byId), now = Date.now();
    cook.done = new Set((Array.isArray(record.done) ? record.done : []).filter(function (id) { return ids.indexOf(id) >= 0; }));
    cook.started = {};
    if (record.started && typeof record.started === 'object') ids.forEach(function (id) {
      var stamp = record.started[id];
      if (!cook.done.has(id) && Number.isFinite(stamp) && stamp > 0 && stamp <= now) cook.started[id] = stamp;
    });
    cook.t0 = Number.isFinite(record.t0) && record.t0 > 0 && record.t0 <= now ? record.t0 : null;
    cook.tipsShown = new Set((Array.isArray(record.tipsShown) ? record.tipsShown : []).filter(function (id) { return ids.indexOf(id) >= 0; }));
    cook.celebrated = record.celebrated === true;
    redrawCooking();
    if (cook.t0) {
      $('start-overlay').hidden = true;
      if (!cookFinished()) tickTimer = setInterval(tick, 500);
    }
    if (Number.isInteger(record.stars) && record.stars >= 1 && record.stars <= 5) {
      starRow.querySelector('input[value="' + record.stars + '"]').checked = true;
      paintStars(record.stars);
    }
    return true;
  }
  window.addEventListener('pagehide', function () {
    saveSession();
    if (window.Fridge) window.Fridge.stop();
  });
  // A cached document would otherwise restore old choices after Back/Forward.
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) { internalNavigation = true; location.reload(); }
  });
  if (pageScreen === 'cook') window.addEventListener('beforeunload', function (event) {
    if (!internalNavigation && cook && cook.t0 && !cookFinished()) {
      saveSession();
      event.preventDefault();
      event.returnValue = '';
    }
  });

  // Account snapshots contain only settings, never cooking history or credentials.
  var preferencesRevision = 0;
  var preferenceFields = ['layout', 'layoutSaved', 'layoutTouched', 'layoutWide', 'textures', 'lang', 'theme', 'units', 'favorites'];
  function accountPreferences() {
    var prefs = { layout: state.layoutSaved ? clone(state.layout) : null, layoutSaved: state.layoutSaved,
      layoutTouched: !!state.layoutTouched, layoutWide: state.layoutWide !== false, textures: textures,
      lang: requestedLang || lang, theme: document.documentElement.getAttribute('data-theme'), units: state.units };
    // Favorites are sent only when there are some, so saves keep working with the older database check.
    if (state.favorites.length) prefs.favorites = state.favorites.slice();
    return prefs;
  }
  window.CookI18n = { t: t };
  window.CookPreferences = {
    read: accountPreferences,
    revision: function () { return preferencesRevision; },
    apply: function (preferences) {
      if (!preferences || typeof preferences !== 'object') return;
      // Keep unrelated tab choices/timers, then use the existing layout validation.
      saveSession();
      savedSession = window.CookSession.read();
      preferenceFields.forEach(function (key) { if (Object.prototype.hasOwnProperty.call(preferences, key)) savedSession[key] = preferences[key]; });
      state.layout = clone(DEFAULT_LAYOUT); state.layoutSaved = false; state.layoutTouched = false; state.layoutWide = true;
      restoreSession();
      setLang(typeof savedSession.lang === 'string' ? savedSession.lang : 'en-US');
      if (pageScreen === 'layout') { draft = clone(state.layout); buildCanvas(); }
      $('btn-layout').setAttribute('data-i18n', state.layoutSaved ? 'editLayout' : 'setupLayout');
      $('btn-layout').textContent = t(state.layoutSaved ? 'editLayout' : 'setupLayout');
      if ($('layout-home-label')) {
        $('layout-home-label').setAttribute('data-i18n', state.layoutSaved ? 'editLayoutMap' : 'setupLayoutMap');
        $('layout-home-label').textContent = t(state.layoutSaved ? 'editLayoutMap' : 'setupLayoutMap');
        document.querySelector('.layout-check').hidden = !state.layoutSaved;
      }
      saveSession();
    },
    reset: function () {
      // Clear only this Cook tab's snapshot, preserving other sites and notice state.
      stopCooking();
      window.CookSession.save({}); savedSession = {};
      state.layout = clone(DEFAULT_LAYOUT); state.layoutSaved = false; state.layoutTouched = false;
      state.layoutWide = true; state.picks = {}; state.voice = []; state.search = '';
      state.filters = { fav: false, diet: [], cat: [], cuisine: [], method: [], voice: false };
      state.favorites = [];
      activeCookRecord = null;
      restoreSession(); setLang('en-US');
      if (pageScreen === 'layout') { draft = clone(state.layout); buildCanvas(); }
      saveSession();
    }
  };
  $('options-dialog').addEventListener('close', function () { preferencesRevision++; saveSession(); });
  $('options-dialog').addEventListener('change', function () { preferencesRevision++; });
  on('layout-canvas', 'pointerdown', function () { preferencesRevision++; });
  on('layout-canvas', 'keydown', function () { preferencesRevision++; });

  // ---------- Start ----------
  restoreSession();
  applyStrings();
  renderFilters();
  renderRecipes();
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  on('btn-welcome-layout', 'click', function () { openLayout(); });
  on('btn-welcome-skip', 'click', function () { show('recipes'); });
  if (state.layoutSaved) {
    $('btn-layout').setAttribute('data-i18n', 'editLayout');
    $('btn-layout').textContent = t('editLayout');
    if ($('layout-home-label')) {
      $('layout-home-label').setAttribute('data-i18n', 'editLayoutMap');
      $('layout-home-label').textContent = t('editLayoutMap');
      document.querySelector('.layout-check').hidden = false;
    }
  }
  var start = route();
  state.screen = pageScreen;
  if ((pageScreen === 'details' || pageScreen === 'cook') && !start.recipe) {
    navigate('recipes', true);
  } else {
    if (start.recipe) {
      state.recipe = start.recipe;
      state.choices = picksFor(start.recipe);
    }
    if (pageScreen === 'details') openDetails(start.recipe, true);
    else if (pageScreen === 'layout') openLayout(true);
    else if (pageScreen === 'cook') {
      state.built = state.recipe.build(state.choices);
      if (!restoreCooking(activeCookRecord)) navigate('details', true);
    } else show(pageScreen);
  }
  if (typeof savedSession.lang === 'string') setLang(savedSession.lang);
})();
