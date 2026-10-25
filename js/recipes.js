/*
  Recipe data for the one-shot test.
  Source: "Recipes" sheet, tab "Spaghetti Carbonara" (schema cook-recipe v0.1).

  Each recipe has a build(choices) function that turns the user's answers
  (servings, options, guide mode) into an ingredient list and step cards.
  Amounts and durations follow the sheet's formulas; skill level is fixed
  at "home cook" (factor 1). Durations are in seconds.

  Step fields:
  area:  where in the kitchen it happens (stove, oven, countertop, board, sink, fridge, freezer)
  deps:  steps that must be done first (the previous step of the same thread is added automatically)
  tools: equipment ids (see EQUIPMENT)
  ings:  ingredient ids with the amount used in this step; "label" overrides the ingredient name
  tip:   show a tip when the step comes up
  overcook: cooking on heat; when its time is up the screen warns "Don't overdo!"
*/
window.EQUIPMENT = {
  cooking_pot: { name: 'Large cooking pot', icon: 'icons/cooking-pot.svg' },
  pan: { name: 'Large frying pan', icon: 'icons/pan.svg' },
  chef_knife: { name: "Chef's knife", icon: 'icons/chef-knife.svg' },
  chopping_board: { name: 'Chopping board', icon: 'icons/chopping-board.svg' },
  mortar_and_pestle: { name: 'Mortar and pestle', icon: 'icons/mortar-and-pestle.svg' },
  sieve: { name: 'Fine sieve', icon: 'icons/sieve.svg' },
  cheese_grater: { name: 'Cheese grater', icon: 'icons/cheese-grater.svg' },
  bowl: { name: 'Mixing bowl', icon: 'icons/bowl.svg' },
  fork: { name: 'Fork', icon: 'icons/fork.svg' },
  wooden_spoon: { name: 'Wooden spoon', icon: 'icons/wooden-spoon.svg' },
  tongs: { name: 'Tongs', icon: 'icons/tongs.svg' },
  ladle: { name: 'Ladle', icon: 'icons/ladle.svg' },
  spatula: { name: 'Spatula', icon: 'icons/spatula.svg' },
  colander: { name: 'Colander', icon: 'icons/colander.svg' },
  spoon: { name: 'Spoon', icon: 'icons/spoon.svg' },
  knife: { name: 'Knife', icon: 'icons/knife.svg' },
  microplane: { name: 'Fine grater', icon: 'icons/microplane.svg' },
  immersion_blender: { name: 'Immersion blender', icon: 'icons/immersion-blender.svg' },
  vegetable_peeler: { name: 'Vegetable peeler', icon: 'icons/vegetable-peeler.svg' },
  muffin_tin: { name: 'Muffin pan', icon: 'icons/muffin-tin.svg' },
  whisk: { name: 'Whisk', icon: 'icons/whisk.svg' },
  slow_cooker: { name: 'Slow cooker', icon: 'icons/slow-cooker.svg' },
  skewers: { name: 'Skewers', icon: 'icons/skewers.svg' },
  // Sheet equipment without a dedicated first-party icon remains visible as text.
  plates: { name: 'Plates', icon: null },
  salad_spinner: { name: 'Salad spinner or kitchen towel', icon: null },
  jar: { name: 'Jar with lid', icon: null },
  panini_press: { name: 'Panini press (adjustable gap)', icon: null },
  tray: { name: 'Baking tray', icon: 'icons/baking-tray.svg' },
  tall_container: { name: 'Tall, narrow container', icon: null },
  lidded_container: { name: 'Lidded container', icon: null },
  saucepan: { name: "Saucepan", icon: "icons/saucepan.svg" },
  waffle_iron: { name: "Waffle iron", icon: null },
  plastic_wrap: { name: "Cling film", icon: "icons/plastic-wrap.svg" },
  loaf_pan: { name: "Loaf pan", icon: "icons/loaf-pan.svg" },
  baking_dish: { name: "Baking dish", icon: null },
  tin_foil: { name: "Aluminium foil", icon: "icons/tin-foil.svg" },
  blender: { name: "Blender", icon: "icons/blender.svg" },
  parchment_paper: { name: "Baking paper", icon: "icons/parchment-paper.svg" },
  rolling_pin: { name: "Rolling pin", icon: "icons/rolling-pin.svg" },
  meat_tenderizer: { name: "Meat mallet", icon: "icons/meat-tenderizer.svg" },
  steamer: { name: "Steamer", icon: null },
  wok: { name: "Wok or large frying pan", icon: "icons/pan.svg" },
  chopsticks: { name: "Chopsticks", icon: "icons/chopsticks.svg" },
  kitchen_scissors: { name: "Kitchen scissors", icon: "icons/kitchen-scissors.svg" },
  citrus_juicer: { name: "Citrus juicer", icon: "icons/citrus-juicer.svg" },
  mixer: { name: "Hand mixer", icon: null },
  pie_dish: { name: "Pie dish", icon: null },
  cake_tin: { name: "Round cake tin", icon: null },
  ramekins: { name: "Ramekins", icon: null }
};

/*
  Nutrition per 100 g, allergens (EU list) and diet tags, keyed by the
  ingredient's image name (so "oil_marinade" uses "oil").
  ESTIMATES: generic textbook values, not from a vetted database yet.
  Columns: kcal, carbohydrate, protein, fat, saturated fat, fibre, salt | allergens | tags
  Tags: meat, pork, fish, egg, dairy, honey (diet labels); alcohol, spicy, chili (kids warning)
*/
window.INGREDIENT_INFO = (function () {
  var rows = {
    spaghetti: '359 72 13 1.5 0.3 3.2 0|Gluten|',
    guanciale: '655 0 9 69 25 0 3.5||meat pork',
    bacon: '458 0 15 44 16 0 4||meat pork',
    ham: '145 1.5 21 6 2 0 2.5||meat pork',
    ground_pork: '263 0 17 21 8 0 0.15||meat pork',
    ground_beef: '254 0 17 20 8 0 0.18||meat',
    beef: '200 0 19 14 5.5 0 0.16||meat',
    chicken_breast: '120 0 22.5 2.6 0.6 0 0.17||meat',
    beef_stock: '7 0.5 1 0.2 0.1 0 0.8|Celery|meat',
    chicken_stock: '6 0.5 0.8 0.2 0.1 0 0.8|Celery|meat',
    vegetable_stock: '5 0.8 0.2 0.1 0 0 0.8|Celery|',
    egg: '143 0.7 12.6 9.5 3.1 0 0.36|Egg|egg',
    egg_yolk: '322 3.6 15.9 26.5 9.6 0 0.12|Egg|egg',
    mayonnaise: '680 0.6 1 75 11 0 1.6|Egg|egg',
    pecorino_romano: '387 3.6 32 27 17 0 4.8|Milk|dairy',
    parmesan: '392 3.2 36 26 16 0 1.6|Milk|dairy',
    cheddar: '403 1.3 25 33 21 0 1.6|Milk|dairy',
    mozzarella: '280 2.2 22 20 13 0 1.2|Milk|dairy',
    grated_cheese: '400 0.4 28 32 19 0 1.2|Milk|dairy',
    cheese_slice: '330 5 18 26 16 0 2.5|Milk|dairy',
    feta_cheese: '264 4 14 21 15 0 2.8|Milk|dairy',
    sour_cream: '198 3.4 2.4 19 12 0 0.1|Milk|dairy',
    cream: '206 3.4 2.5 20 13 0 0.08|Milk|dairy',
    milk: '64 4.8 3.4 3.6 2.3 0 0.1|Milk|dairy',
    yogurt: '120 4 4 10 6.5 0 0.1|Milk|dairy',
    butter: '717 0.1 0.9 81 51 0 0.03|Milk|dairy',
    honey: '304 82 0.3 0 0 0.2 0.01||honey',
    worcestershire_sauce: '78 19 0 0 0 0 2.5|Fish|fish',
    black_peppercorn: '251 64 10 3.3 1.4 25 0.05||',
    ground_black_pepper: '251 64 10 3.3 1.4 25 0.05||',
    white_pepper: '296 69 10 2.1 0.6 26 0.01||',
    garlic: '149 33 6.4 0.5 0.1 2.1 0.04||',
    garlic_powder: '331 73 17 0.7 0.2 9 0.15||',
    oil: '884 0 0 100 10 0 0||',
    olive_oil: '884 0 0 100 14 0 0||',
    extra_virgin_olive_oil: '884 0 0 100 14 0 0||',
    toasted_sesame_oil: '884 0 0 100 14 0 0|Sesame|',
    salt: '0 0 0 0 0 0 100||',
    msg: '0 0 0 0 0 0 30||',
    water: '0 0 0 0 0 0 0||',
    onion: '40 9.3 1.1 0.1 0 1.7 0.01||',
    red_onion: '40 9.3 1.1 0.1 0 1.7 0.01||',
    white_onion: '40 9.3 1.1 0.1 0 1.7 0.01||',
    red_bell_pepper: '31 6 1 0.3 0 2.1 0.01||',
    tomato: '18 3.9 0.9 0.2 0 1.2 0.01||',
    cherry_tomato: '18 3.9 0.9 0.2 0 1.2 0.01||',
    tomato_paste: '82 19 4.3 0.5 0.1 4.1 0.15||',
    tomato_passata: '30 5.5 1.4 0.2 0 1.5 0.1||',
    kidney_beans: '110 15 7 0.6 0.1 6 0.5||',
    corn: '80 15 2.5 1 0.2 2.5 0.5||',
    carrot: '41 9.6 0.9 0.2 0 2.8 0.17||',
    cucumber: '15 3.6 0.7 0.1 0 0.5 0.01||',
    bok_choy: '13 2.2 1.5 0.2 0 1 0.16||',
    green_onion: '32 7.3 1.8 0.2 0 2.6 0.04||',
    white_mushroom: '22 3.3 3.1 0.3 0 1 0.01||',
    romaine_lettuce: '17 3.3 1.2 0.3 0 2.1 0.02||',
    lettuce: '15 2.9 1.4 0.2 0 1.3 0.07||',
    pickles: '12 2.3 0.5 0.2 0 1.2 2.4|Mustard|',
    pickle_juice: '5 1 0 0 0 0 3.5||',
    lime: '30 10.5 0.7 0.2 0 2.8 0||',
    lemon_juice: '22 6.9 0.4 0.2 0 0.3 0||',
    blueberry: '57 14 0.7 0.3 0 2.4 0||',
    basil: '23 2.7 3.2 0.6 0 1.6 0.01||',
    mint: '70 15 3.8 0.9 0.2 8 0.08||',
    dill: '43 7 3.5 1.1 0.1 2.1 0.15||',
    cilantro: '23 3.7 2.1 0.5 0 2.8 0.12||',
    rosemary: '131 21 3.3 5.9 2.8 14 0.07||',
    parsley: '292 51 27 5.5 1.4 27 1.1||',
    tarragon: '295 50 23 7.2 1.9 7.4 0.16||',
    oregano: '265 69 9 4.3 1.6 43 0.06||',
    thyme: '276 64 9 7.4 2.7 37 0.14||',
    bay_leaf: '313 75 7.6 8.4 2.3 26 0.06||',
    paprika_powder: '282 54 14 13 2 35 0.2||',
    smoked_paprika: '282 54 14 13 2 35 0.2||',
    chili_powder: '282 50 13 14 2.5 35 2.5||chili',
    cayenne_pepper: '318 57 12 17 3.3 27 0.08||spicy',
    cumin: '375 44 18 22 1.5 11 0.4||',
    cinnamon: '247 81 4 1.2 0.3 53 0.03||',
    nutmeg: '525 49 6 36 26 21 0.04||',
    cardamom: '311 68 11 6.7 0.7 28 0.05||',
    coriander_seeds: '298 55 12 18 1 42 0.09||',
    dark_chocolate: '600 24 10 50 30 12 0.05||',
    cocoa_powder: '228 58 20 14 8 37 0.05||',
    sugar: '400 100 0 0 0 0 0||',
    brown_sugar: '380 98 0.1 0 0 0 0.07||',
    erythritol: '0 0 0 0 0 0 0||',
    rosewater: '0 0 0 0 0 0 0||',
    flour: '364 76 10 1 0.2 2.7 0|Gluten|',
    semolina: '360 73 12.7 1 0.2 3.9 0|Gluten|',
    bread: '270 52 9 3 0.7 2.7 1.3|Gluten|',
    hamburger_buns: '280 50 9.5 4.5 1.2 2.5 1.2|Gluten|',
    croutons: '407 74 12 6.6 1.5 5 1.7|Gluten|',
    tortilla: '310 51 8.5 7.5 3 3 1.2|Gluten|',
    rolled_oats: '379 68 13 6.5 1.1 10 0.01|Gluten|',
    white_rice: '360 79 6.6 0.6 0.2 1.3 0||',
    jasmine_rice: '360 79 6.6 0.6 0.2 1.3 0||',
    beer: '43 3.6 0.5 0 0 0 0.01|Gluten|alcohol',
    white_wine: '82 2.6 0.1 0 0 0 0.01|Sulphites|alcohol',
    red_wine: '85 2.6 0.1 0 0 0 0.01|Sulphites|alcohol',
    balsamic_vinegar: '88 17 0.5 0 0 0 0.06|Sulphites|',
    white_vinegar: '18 0.3 0 0 0 0 0.01|Sulphites|',
    apple_cider_vinegar: '21 0.9 0 0 0 0 0.01||',
    rice_vinegar: '18 0 0.3 0 0 0 0||',
    light_soy_sauce: '53 5 8 0.5 0.1 0.8 14.5|Soy, Gluten|',
    gochujang: '200 40 5 2 0.3 2 6|Soy, Gluten|spicy',
    mustard: '150 6 7 10 0.6 3 5.5|Mustard|',
    ketchup: '112 26 1 0.1 0 0.3 2.3||',
    sesame_seeds: '573 23 17.7 50 7 11.8 0.03|Sesame|',
    pine_nuts: '673 13 14 68 4.9 3.7 0|Nuts|',
    chia_seeds: '486 42 17 31 3.3 34 0.04||',
    coconut_milk: '20 2.7 0.1 0.9 0.9 0.1 0.1||',
    // Added with the 150-recipe list (estimates, same caveat as above)
    chicken_legs: '190 0 18 13 3.5 0 0.2||meat',
    whole_chicken: '215 0 18.6 15 4.3 0 0.2||meat',
    pork: '240 0 17 19 7 0 0.15||meat pork',
    pork_belly: '518 0 9.3 53 19 0 0.08||meat pork',
    ground_lamb: '282 0 16.6 23 10 0 0.18||meat',
    sausage: '300 2 13 27 10 0 2||meat pork',
    tofu: '144 2.8 15.8 8.7 1.3 2.3 0.03|Soy|',
    tempeh: '193 9.4 20 10.8 2.2 5 0.02|Soy|',
    fish: '200 0 38 5 1.2 0 3|Fish|fish',
    salmon: '208 0 20 13 3.1 0 0.15|Fish|fish',
    tuna: '116 0 26 1 0.3 0 0.9|Fish|fish',
    shrimp: '85 0.2 20 0.5 0.1 0 0.6|Crustaceans|fish',
    egg_white: '52 0.7 10.9 0.2 0 0 0.42|Egg|egg',
    buttermilk: '40 4.8 3.3 0.9 0.5 0 0.25|Milk|dairy',
    cream_cheese: '342 4 6 34 20 0 0.8|Milk|dairy',
    mascarpone: '429 3.6 4.8 44 30 0 0.1|Milk|dairy',
    ricotta: '174 3 11 13 8.3 0 0.2|Milk|dairy',
    paneer: '296 3.6 21 22 14 0 0.05|Milk|dairy',
    ghee: '900 0 0.3 99.5 62 0 0|Milk|dairy',
    condensed_milk: '321 54 7.9 8.7 5.5 0 0.32|Milk|dairy',
    evaporated_milk: '134 10 6.8 7.6 4.6 0 0.27|Milk|dairy',
    basmati_rice: '355 78 8 0.6 0.2 1.3 0||',
    short_grain_rice: '360 79 6.5 0.5 0.2 1.4 0||',
    arborio_rice: '355 79 6.5 0.6 0.2 1.4 0||',
    bulgur: '342 76 12 1.3 0.2 18 0.04|Gluten|',
    couscous: '376 77 12.8 0.6 0.1 5 0.03|Gluten|',
    quinoa: '368 64 14 6 0.7 7 0.01||',
    lentil: '352 63 25 1.1 0.2 11 0.02||',
    penne: '359 72 13 1.5 0.3 3.2 0|Gluten|',
    macaroni: '359 72 13 1.5 0.3 3.2 0|Gluten|',
    fettuccine: '365 71 14 2.5 0.6 3 0.05|Gluten, Egg|egg',
    lasagna_noodles: '359 72 13 1.5 0.3 3.2 0|Gluten|',
    gnocchi: '150 33 3.5 0.3 0.1 1.6 0.9|Gluten|',
    egg_noodles: '384 71 14 4.4 1.2 3.3 0.05|Gluten, Egg|egg',
    rice_noodles: '364 80 6 0.6 0.2 1.6 0.4||',
    precooked_cornmeal: '370 79 7 1.5 0.2 4 0.01||',
    whole_wheat_flour: '340 61 13 2.5 0.4 11 0|Gluten|',
    urad_dal: '341 59 25 1.6 0.1 18 0.1||',
    dosa_batter: '160 33 5 0.6 0.1 2 0.5||',
    pita: '275 56 9 1.2 0.2 2.2 1.3|Gluten|',
    corn_tortilla: '218 45 5.7 2.9 0.4 6.3 0.1||',
    breadcrumb: '395 72 13 5.3 1.2 4.5 1.8|Gluten|',
    phyllo_dough: '299 53 7 6 1.5 1.9 1.2|Gluten|',
    puff_pastry: '550 45 7.4 38 18 1.5 1|Gluten, Milk|dairy',
    dough: '420 45 6 24 13 1.8 0.9|Gluten, Milk|dairy',
    ladyfingers: '365 73 10.6 3.6 1.2 1 0.4|Gluten, Egg|egg',
    digestive_biscuits: '480 63 7 21 9.8 3.6 1|Gluten|',
    rice_paper: '333 82 1 0.3 0.1 1 0.7||',
    injera: '120 23 4 0.7 0.1 3 0.2|Gluten|',
    chickpea: '139 16 7.2 2.6 0.3 7.6 0.6||',
    black_beans: '91 12 6 0.4 0.1 7 0.6||',
    white_beans: '100 13 7 0.5 0.1 6 0.6||',
    red_lentil: '358 60 24 1.5 0.2 11 0.02||',
    pea: '81 14 5.4 0.4 0.1 5.7 0.01||',
    peanut: '585 16 24 50 7 8 0.02|Peanuts|',
    potato: '77 17 2 0.1 0 2.2 0.01||',
    sweet_potato: '86 20 1.6 0.1 0 3 0.14||',
    spinach: '23 3.6 2.9 0.4 0.1 2.2 0.2||',
    cabbage: '25 5.8 1.3 0.1 0 2.5 0.05||',
    zucchini: '17 3.1 1.2 0.3 0.1 1 0.02||',
    eggplant: '25 5.9 1 0.2 0 3 0.01||',
    bell_pepper: '31 6 1 0.3 0 2.1 0.01||',
    green_bell_pepper: '20 4.6 0.9 0.2 0 1.7 0.01||',
    broccoli: '34 6.6 2.8 0.4 0 2.6 0.08||',
    cauliflower: '25 5 1.9 0.3 0.1 2 0.08||',
    green_beans: '31 7 1.8 0.2 0 2.7 0.01||',
    okra: '33 7.5 1.9 0.2 0 3.2 0.02||',
    squash: '45 12 1 0.1 0 2 0.01||',
    celery_stalk: '16 3 0.7 0.2 0 1.6 0.2||',
    shallot: '72 17 2.5 0.1 0 3.2 0.03||',
    chili_pepper: '40 9 1.9 0.4 0 1.5 0.02||chili',
    dried_red_chilies: '324 57 12 6 0.8 29 0.2||chili',
    ginger_root: '80 18 1.8 0.8 0.2 2 0.03||',
    galangal: '70 15 1 0.5 0.1 2 0.02||',
    lemongrass: '99 25 1.8 0.5 0.1 0 0.01||',
    daikon: '18 4.1 0.6 0.1 0 1.6 0.05||',
    collard_greens: '32 5.4 3 0.6 0.1 4 0.04||',
    bean_sprouts: '30 6 3 0.2 0 1.8 0.01||',
    olives: '145 3.8 1 15 2 3.3 3.9||',
    capers: '23 4.9 2.4 0.9 0.2 3.2 7.5||',
    kimchi: '23 4 1.1 0.5 0.1 1.6 1.7|Fish, Crustaceans|fish chili',
    wakame: '45 9 3 0.6 0.1 0.5 2.2||',
    nori_sheet: '35 5 6 0.3 0.1 0.3 1.2||',
    plantain: '122 32 1.3 0.4 0.1 2.3 0.01||',
    avocado: '160 8.5 2 14.7 2.1 6.7 0.02||',
    oyster_mushroom: '33 6 3.3 0.4 0.1 2.3 0.05||',
    shiitake_mushroom: '34 6.8 2.2 0.5 0.1 2.5 0.02||',
    apple: '52 14 0.3 0.2 0 2.4 0||',
    banana: '89 23 1.1 0.3 0.1 2.6 0||',
    lemon: '29 9.3 1.1 0.3 0 2.8 0||',
    orange: '47 12 0.9 0.1 0 2.4 0||',
    pear: '57 15 0.4 0.1 0 3.1 0||',
    pineapple: '50 13 0.5 0.1 0 1.4 0||',
    kiwi: '61 15 1.1 0.5 0 3 0.01||',
    strawberry: '32 7.7 0.7 0.3 0 2 0||',
    raspberry: '52 12 1.2 0.7 0 6.5 0||',
    raisins: '299 79 3.1 0.5 0.1 3.7 0.03||',
    tamarind: '239 63 2.8 0.6 0.3 5.1 0.07||',
    preserved_lemon: '30 6 1 0.4 0 3 9||',
    kaffir_lime_leaves: '30 7 1 0.3 0 4 0||',
    lemon_zest: '47 16 1.5 0.3 0 10.6 0.02||',
    almond: '579 22 21 50 3.8 12.5 0|Nuts|',
    walnut: '654 14 15 65 6 6.7 0|Nuts|',
    egusi_seeds: '560 10 28 47 9 3 0.03||',
    thai_basil: '23 2.7 3.2 0.6 0 1.6 0.01||',
    chives: '30 4.4 3.3 0.7 0.1 2.5 0.01||',
    sage: '315 61 10.6 12.8 7 40 0.03||',
    curry_leaves: '108 18.7 6.1 1 0.1 6.4 0.02||',
    dried_fenugreek_leaves: '323 58 23 6.4 1.5 25 0.17||',
    allspice: '263 72 6 8.7 2.6 22 0.2||',
    cloves: '274 66 6 13 4 34 0.6||',
    ginger_powder: '335 72 9 4.2 2.6 14 0.07||',
    turmeric_powder: '312 67 9.7 3.3 1.8 22 0.07||',
    star_anise: '337 50 18 16 0.6 15 0.04||',
    saffron: '310 65 11 6 1.6 3.9 0.37||',
    curry_powder: '325 56 14 14 2.2 53 0.13||',
    garam_masala: '379 45 15 15 1 31 0.24||',
    fenugreek_seeds: '323 58 23 6.4 1.5 25 0.17||',
    mustard_seed: '508 28 26 36 2 12 0.03|Mustard|',
    asafoetida: '297 68 4 1.1 0.5 4 0.4|Gluten|',
    ras_el_hanout: '330 55 12 12 1.5 30 0.1||',
    berbere: '320 55 12 10 1.5 28 2||spicy',
    chili_flakes: '318 57 12 17 3.3 27 0.08||chili',
    sichuan_peppercorn: '330 70 10 8 1 30 0.03||',
    vanilla: '288 13 0.1 0.1 0 0 0.02||',
    fish_sauce: '35 3.6 5 0 0 0 24|Fish|fish',
    oyster_sauce: '51 11 1.4 0.3 0.1 0.3 9|Molluscs, Soy, Gluten|fish',
    dark_soy_sauce: '60 9 6 0.1 0 0.8 13|Soy, Gluten|',
    kecap_manis: '250 60 3 0 0 0 7|Soy, Gluten|',
    hoisin_sauce: '220 44 3.3 3.4 0.6 2.8 4.5|Soy, Gluten, Sesame|',
    doubanjiang: '180 20 9 7 1 6 15|Soy, Gluten|spicy',
    miso_paste: '199 26 12 6 1 5.4 11|Soy|',
    dashi: '250 30 25 1 0.2 0 40|Fish|fish',
    curry_roux: '510 45 6 34 16 2 10|Gluten, Milk, Soy|',
    green_curry_paste: '110 15 2.5 4.5 0.6 6 9|Crustaceans|fish spicy',
    laksa_paste: '200 18 4 13 4 5 7|Crustaceans|fish spicy',
    thai_chili_paste: '350 30 6 23 3 5 5|Crustaceans, Fish|fish spicy',
    peanut_butter: '588 20 25 50 10 6 0.4|Peanuts|',
    tahini: '595 21 17 54 7.5 9.3 0.1|Sesame|',
    pesto: '440 6 5 44 8 2 2|Milk, Nuts|dairy',
    hot_sauce: '20 4 0.8 0.5 0.1 1.5 6||spicy',
    apricot_jam: '242 64 0.7 0.2 0 0.9 0.07||',
    red_wine_vinegar: '19 0.3 0 0 0 0 0.02|Sulphites|',
    bouillon_cube: '250 15 15 15 6 0 60|Celery|',
    mirin: '240 43 0.2 0 0 0 0.01||alcohol',
    coffee: '1 0 0.1 0 0 0 0||',
    powdered_sugar: '389 100 0 0 0 0 0||',
    maple_syrup: '260 67 0 0.1 0 0 0.03||',
    rum: '231 0 0 0 0 0 0||alcohol',
    shaoxing_wine: '120 4 1.6 0 0 0 1.5|Gluten, Sulphites|alcohol',
    baking_powder: '53 28 0 0 0 0 27||',
    baking_soda: '0 0 0 0 0 0 68||',
    cornstarch: '381 91 0.3 0.1 0 0.9 0.02||',
    yeast: '325 41 40 7.6 1 27 0.13||',
    chocolate_chips: '480 63 4.2 24 14 6 0.03|Milk, Soy|dairy',
    red_palm_oil: '884 0 0 100 49 0 0||',
    ice: '0 0 0 0 0 0 0||'
  };
  var CATEGORY = {
    meat: 'guanciale bacon ham ground_pork ground_beef beef chicken_breast',
    egg: 'egg egg_yolk',
    dairy: 'pecorino_romano parmesan cheddar mozzarella grated_cheese cheese_slice feta_cheese sour_cream cream milk yogurt butter',
    grain: 'spaghetti white_rice jasmine_rice rolled_oats semolina',
    bread: 'bread hamburger_buns croutons tortilla',
    legume: 'kidney_beans',
    veg: 'onion red_onion white_onion garlic red_bell_pepper tomato cherry_tomato carrot cucumber bok_choy green_onion ' +
      'romaine_lettuce lettuce pickles corn white_mushroom',
    fruit: 'lime blueberry',
    nuts: 'sesame_seeds pine_nuts chia_seeds',
    herbs: 'basil mint dill cilantro rosemary parsley tarragon oregano thyme bay_leaf',
    spices: 'black_peppercorn ground_black_pepper white_pepper salt msg paprika_powder smoked_paprika chili_powder ' +
      'cayenne_pepper cumin cinnamon nutmeg cardamom coriander_seeds garlic_powder',
    sauces: 'tomato_paste tomato_passata beef_stock chicken_stock vegetable_stock mayonnaise worcestershire_sauce ' +
      'light_soy_sauce gochujang mustard ketchup pickle_juice lemon_juice apple_cider_vinegar balsamic_vinegar ' +
      'white_vinegar rice_vinegar rosewater coconut_milk',
    sweet: 'honey sugar brown_sugar erythritol',
    alcohol: 'beer white_wine red_wine',
    baking: 'flour cocoa_powder dark_chocolate',
    oil: 'oil olive_oil extra_virgin_olive_oil toasted_sesame_oil',
    water: 'water'
  };
  // Ingredients added with the 150-recipe list
  var MORE = {
    meat: "chicken_legs whole_chicken pork pork_belly ground_lamb sausage tofu tempeh",
    fish: "fish salmon tuna shrimp",
    egg: "egg_white",
    dairy: "buttermilk cream_cheese mascarpone ricotta paneer ghee condensed_milk evaporated_milk",
    grain: "basmati_rice short_grain_rice arborio_rice bulgur couscous quinoa lentil penne macaroni fettuccine lasagna_noodles gnocchi egg_noodles rice_noodles precooked_cornmeal whole_wheat_flour urad_dal dosa_batter",
    bread: "pita corn_tortilla breadcrumb phyllo_dough puff_pastry dough ladyfingers digestive_biscuits rice_paper injera",
    legume: "chickpea black_beans white_beans red_lentil pea peanut",
    veg: "potato sweet_potato spinach cabbage zucchini eggplant bell_pepper green_bell_pepper broccoli cauliflower green_beans okra squash celery_stalk shallot chili_pepper dried_red_chilies ginger_root galangal lemongrass daikon collard_greens bean_sprouts olives capers kimchi wakame nori_sheet plantain avocado oyster_mushroom shiitake_mushroom",
    fruit: "apple banana lemon orange pear pineapple kiwi strawberry raspberry raisins tamarind preserved_lemon kaffir_lime_leaves lemon_zest",
    nuts: "almond walnut egusi_seeds",
    herbs: "thai_basil chives sage curry_leaves dried_fenugreek_leaves",
    spices: "allspice cloves ginger_powder turmeric_powder star_anise saffron curry_powder garam_masala fenugreek_seeds mustard_seed asafoetida ras_el_hanout berbere chili_flakes sichuan_peppercorn vanilla",
    sauces: "fish_sauce oyster_sauce dark_soy_sauce kecap_manis hoisin_sauce doubanjiang miso_paste dashi curry_roux green_curry_paste laksa_paste thai_chili_paste peanut_butter tahini pesto hot_sauce apricot_jam red_wine_vinegar bouillon_cube mirin coffee",
    sweet: "powdered_sugar maple_syrup",
    alcohol: "rum shaoxing_wine",
    baking: "baking_powder baking_soda cornstarch yeast chocolate_chips",
    oil: "red_palm_oil",
    water: "ice"
  };
  Object.keys(MORE).forEach(function (c) { CATEGORY[c] += ' ' + MORE[c]; });
  var catOf = {};
  Object.keys(CATEGORY).forEach(function (c) { CATEGORY[c].split(' ').forEach(function (k) { catOf[k] = c; }); });

  var info = {};
  Object.keys(rows).forEach(function (k) {
    var p = rows[k].split('|'), n = p[0].split(' ').map(Number);
    info[k] = {
      kcal: n[0], carbs: n[1], protein: n[2], fat: n[3], satFat: n[4], fiber: n[5], salt: n[6],
      allergens: p[1] ? p[1].split(', ') : [],
      tags: p[2] ? p[2].split(' ') : [],
      category: catOf[k] || 'sauces'
    };
  });
  info.CATEGORY_ORDER = Object.keys(CATEGORY);
  return info;
})();

(function () {
  function tsp(n) {
    var q = Math.round(n * 4) / 4, whole = Math.floor(q), rest = q - whole;
    if (!q) return 'a pinch';
    return (whole || '') + ({ 0.25: '¼', 0.5: '½', 0.75: '¾' }[rest] || '') + ' tsp';
  }

  function g(n) { return Math.round(n) + ' g'; }

  function carbonara(c) {
    var s = c.servings;
    var waterL = Math.max(2, Math.ceil(s));
    var saltG = Math.round(7 * waterL);
    var rich = c.opt_eggs === 'rich';
    var garlic = c.opt_garlic === 'with';
    var fine = c.opt_pepper === 'fine';
    var meatId = c.opt_meat === 'guanciale' ? 'guanciale' : 'bacon';
    var meat = meatId === 'guanciale' ? 'guanciale' : 'pancetta';
    var Meat = meat.charAt(0).toUpperCase() + meat.slice(1);
    var eggs = rich ? Math.ceil(0.5 * s) : Math.ceil(s);
    var yolks = rich ? Math.ceil(s) : 0;
    var eggText = rich ? 'the yolks and whole eggs' : 'the eggs';
    var eggIngs = [{ id: 'egg', qty: String(eggs) }].concat(rich ? [{ id: 'egg_yolk', qty: String(yolks) }] : []);

    // grams = the amount that ends up eaten (used for nutrition); 0 = not eaten.
    var ingredients = [
      { id: meatId, name: meatId === 'guanciale' ? 'Guanciale' : 'Pancetta or smoked bacon', amount: g(50 * s), grams: 50 * s },
      { id: 'pecorino_romano', name: 'Pecorino Romano', amount: g(30 * s), grams: 30 * s },
      { id: 'egg', name: 'Egg, large, room temperature', amount: String(eggs), grams: 55 * eggs }
    ];
    if (rich) ingredients.push({ id: 'egg_yolk', name: 'Egg yolk', amount: String(yolks), grams: 18 * yolks, note: 'whites not used' });
    ingredients.push({ id: 'spaghetti', name: 'Spaghetti (dry)', amount: g(100 * s), grams: 100 * s });
    if (garlic) ingredients.push({ id: 'garlic', name: 'Garlic clove', amount: '1', grams: 0, note: 'removed before serving' });
    ingredients.push(
      { id: 'black_peppercorn', name: 'Black peppercorns, whole', amount: tsp(0.5 * s), grams: 1.25 * s },
      { id: 'salt', name: 'Coarse salt', amount: saltG + ' g', grams: 0, note: 'for the pasta water' },
      { id: 'oil', name: 'Neutral oil', amount: '1 tsp', grams: 0, note: 'only if the ' + meat + ' is lean' },
      { id: 'water', name: 'Water (for the pasta)', amount: waterL + ' L', grams: 0 }
    );

    var d = {
      P1: 20 + 20 * waterL, P2: 15, P3: 180 + 150 * waterL, P4: 15, P5: 30, P6: 540, P7: 10,
      B1: 15, B2: 60 + 120 * s, B3: 60 + 30 * s, B4: fine ? 30 : 0, B5: 40 + 80 * s,
      E1: 45 + 15 * s, E2: 30,
      G1: 30, G2: 540, G3: 30, G4: 10,
      F1: 60 + 30 * s, F2: 45, F3: 60, F4: 20, F5: 30 + 30 * s
    };
    var grindText = fine
      ? 'Grind the whole peppercorns in the mortar to a powder.'
      : 'Coarsely crack the whole peppercorns in the mortar.';
    var g1Ings = [{ id: meatId, qty: g(50 * s), label: Meat + ', diced' }, { id: 'oil', qty: '1 tsp', label: 'Oil, if lean' }]
      .concat(garlic ? [{ id: 'garlic', qty: '1', label: 'Garlic, crushed' }] : []);
    var g1Text = 'Put the diced ' + meat + ' into the COLD pan, then turn the burner to LOW. Lean ' + meat + '? Add 1 tsp neutral oil first.' +
      (garlic ? ' Add the lightly crushed whole garlic clove.' : '');
    var g3Title = garlic ? 'Pepper in, garlic out' : 'Pepper in';
    var g3Text = 'Stir in about half of the ground pepper.' + (garlic ? ' Take the garlic clove out if it is golden brown.' : '');
    var pepperStep = fine ? 'B4' : 'B3';

    if (c.mode === 'quick') {
      return {
        servings: s,
        ingredients: ingredients,
        steps: [
          { id: 'Q1', members: ['P1', 'P2', 'P3', 'P4'], thread: 'P', area: 'stove', title: 'Boil salted water',
            text: 'Fill the large pot with ' + waterL + ' L cold water, put it on the largest burner on HIGH with the lid on. When it boils, add the salt.',
            duration: d.P1 + d.P2 + d.P3 + d.P4, deps: [], tools: ['cooking_pot'],
            ings: [{ id: 'water', qty: waterL + ' L' }, { id: 'salt', qty: saltG + ' g' }], doneWhen: 'Boiling and salted', overcook: true },
          { id: 'Q2', members: ['B1'], thread: 'B', area: 'fridge', title: 'Eggs out of the fridge',
            text: 'Take the eggs out so they warm up.',
            duration: d.B1, deps: [], tools: [], ings: eggIngs, doneWhen: 'Eggs on the counter' },
          { id: 'Q3', members: ['B2'], thread: 'B', area: 'board', title: 'Dice the ' + meat,
            text: 'Cut into 1 cm cubes.',
            duration: d.B2, deps: [], tools: ['chef_knife'], ings: [{ id: meatId, qty: g(50 * s) }], doneWhen: 'All in about 1 cm cubes' },
          { id: 'Q4', members: ['B3', 'B4', 'B5'], thread: 'B', area: 'countertop', title: 'Pepper and cheese',
            text: (fine ? 'Grind the peppercorns to a powder and sieve it.' : 'Coarsely crack the peppercorns.') + ' Finely grate the pecorino.',
            duration: d.B3 + d.B4 + d.B5, deps: [], tools: ['mortar_and_pestle'].concat(fine ? ['sieve'] : []).concat(['cheese_grater']),
            ings: [{ id: 'black_peppercorn', qty: tsp(0.5 * s) }, { id: 'pecorino_romano', qty: g(30 * s) }], doneWhen: 'Pepper ground, cheese grated' },
          { id: 'Q5', members: ['E1'], thread: 'E', area: 'countertop', title: 'Mix eggs and cheese',
            text: 'Beat ' + eggText + ' with most of the pecorino until smooth. Keep the rest for serving.',
            duration: d.E1, deps: ['Q2', 'Q4'], tools: ['bowl', 'fork'],
            ings: eggIngs.concat([{ id: 'pecorino_romano', qty: g(25 * s), label: 'Pecorino, grated' }]), doneWhen: 'Smooth, thick, no lumps' },
          { id: 'Q6', members: ['E2'], thread: 'E', area: 'sink', title: 'Warm the plates',
            text: 'Rinse the plates with hot water and dry them.',
            duration: d.E2, deps: ['Q9'], tools: [], ings: [], doneWhen: 'Plates warm to the touch' },
          { id: 'Q7', members: ['G1', 'G2'], thread: 'G', area: 'stove', title: 'Render the ' + meat,
            text: g1Text + ' Let the fat melt out slowly for about 9 minutes, stirring now and then.',
            duration: d.G1 + d.G2, deps: ['Q3', 'Q1'], tools: ['pan', 'wooden_spoon'], ings: g1Ings,
            doneWhen: 'Cubes golden, fat melted and clear', tip: true, overcook: true },
          { id: 'Q8', members: ['P5', 'P6'], thread: 'P', area: 'stove', title: 'Cook the spaghetti',
            text: "Add the spaghetti, stir once, and boil 1 minute less than the package says. Keep the water, don't drain!",
            duration: d.P5 + d.P6, deps: [], tools: ['cooking_pot', 'tongs'], ings: [{ id: 'spaghetti', qty: g(100 * s) }],
            doneWhen: 'Bite test: slightly firm center', tip: true, overcook: true },
          { id: 'Q9', members: ['G3', 'G4'], thread: 'G', area: 'stove', title: g3Title + ', heat off',
            text: g3Text + ' Then turn off the burner and take the pan off the heat.',
            duration: d.G3 + d.G4, deps: ['Q4'], tools: ['pan'],
            ings: [{ id: 'black_peppercorn', qty: 'half', label: 'Ground pepper' }], doneWhen: 'Pan off the heat' },
          { id: 'Q10', members: ['P7', 'F1', 'F2'], thread: 'F', area: 'stove', title: 'Pasta into the pan',
            text: 'Turn off the pasta. With tongs, move it into the pan and toss with pasta water, a ladle at a time, until creamy. Wait until the pan stops sizzling.',
            duration: d.P7 + d.F1 + d.F2, deps: ['Q8', 'Q9'], tools: ['pan', 'tongs', 'ladle'],
            ings: [{ id: 'spaghetti', qty: g(100 * s), label: 'Spaghetti, al dente' }, { id: 'water', qty: Math.ceil(s) + ' ladles', label: 'Pasta water' }],
            doneWhen: 'Creamy and no longer sizzling' },
          { id: 'Q11', members: ['F3', 'F4'], thread: 'F', area: 'stove', title: 'Add the egg mix',
            text: 'Off the heat, pour in the egg mix and toss well. Too thick? Add a little pasta water.',
            duration: d.F3 + d.F4, deps: ['Q5'], tools: ['pan', 'tongs', 'ladle'],
            ings: [{ id: 'egg', qty: 'all', label: 'Egg & cheese mix' }], doneWhen: 'Silky sauce, no scrambled bits', tip: true },
          { id: 'Q12', members: ['F5'], thread: 'F', area: 'countertop', title: 'Plate and serve',
            text: 'Twirl onto the warm plates. Top with the remaining pecorino and pepper.',
            duration: d.F5, deps: ['Q6'], tools: ['tongs'],
            ings: [{ id: 'pecorino_romano', qty: g(5 * s), label: 'Pecorino, grated' }, { id: 'black_peppercorn', qty: 'rest', label: 'Ground pepper' }],
            doneWhen: 'Served' }
        ]
      };
    }

    var steps = [
      { id: 'P1', thread: 'P', area: 'sink', title: 'Fill the pot',
        text: 'Fill the large pot with ' + waterL + " L cold water. Don't add oil.",
        duration: d.P1, deps: [], tools: ['cooking_pot'], ings: [{ id: 'water', qty: waterL + ' L' }], doneWhen: 'Pot filled' },
      { id: 'P2', thread: 'P', area: 'stove', title: 'Put it on the stove',
        text: 'Put the pot on the largest burner, turn it to HIGH and put the lid on (it boils faster).',
        duration: d.P2, deps: [], tools: ['cooking_pot'], ings: [], doneWhen: 'Lid on, burner on high' },
      { id: 'P3', thread: 'P', area: 'stove', title: 'Wait for the boil',
        text: 'Let the water come to a full rolling boil. Meanwhile, start the prep.',
        duration: d.P3, deps: [], tools: ['cooking_pot'], ings: [], doneWhen: 'Big bubbles break the surface all the time', overcook: true },

      { id: 'B1', thread: 'B', area: 'fridge', title: 'Eggs out of the fridge',
        text: 'Take the eggs out of the fridge so they warm up.',
        duration: d.B1, deps: [], tools: [], ings: eggIngs, doneWhen: 'Eggs on the counter' },
      { id: 'B2', thread: 'B', area: 'board', title: 'Dice the ' + meat,
        text: 'Cut the ' + meat + ' into 1 cm cubes.',
        duration: d.B2, deps: [], tools: ['chef_knife'], ings: [{ id: meatId, qty: g(50 * s) }], doneWhen: 'All in about 1 cm cubes' },
      { id: 'B3', thread: 'B', area: 'countertop', title: 'Grind the pepper',
        text: grindText,
        duration: d.B3, deps: [], tools: ['mortar_and_pestle'], ings: [{ id: 'black_peppercorn', qty: tsp(0.5 * s) }], doneWhen: 'Evenly ground' }
    ];
    if (fine) {
      steps.push({ id: 'B4', thread: 'B', area: 'countertop', title: 'Sieve the pepper',
        text: 'Shake the ground pepper through the sieve. Throw away the husks, keep the fine powder.',
        duration: d.B4, deps: [], tools: ['sieve'], ings: [], doneWhen: 'Only fine powder left' });
    }
    steps.push(
      { id: 'B5', thread: 'B', area: 'countertop', title: 'Grate the pecorino',
        text: 'Grate the Pecorino Romano on the finest side of the grater.',
        duration: d.B5, deps: [], tools: ['cheese_grater'], ings: [{ id: 'pecorino_romano', qty: g(30 * s) }], doneWhen: 'Fine, fluffy cheese' },

      { id: 'E1', thread: 'E', area: 'countertop', title: 'Mix eggs and cheese',
        text: 'In the bowl, beat ' + eggText + ' with most of the grated pecorino until smooth. Keep the rest for serving.',
        duration: d.E1, deps: ['B1', 'B5'], tools: ['bowl', 'fork'],
        ings: eggIngs.concat([{ id: 'pecorino_romano', qty: g(25 * s), label: 'Pecorino, grated' }]), doneWhen: 'Smooth, thick, no lumps' },
      // Warm plates only help when the food is nearly ready: after the pan comes off the heat.
      { id: 'E2', thread: 'E', area: 'sink', title: 'Warm the plates',
        text: 'Make the plates slightly warm, e.g. rinse them with hot water and dry them.',
        duration: d.E2, deps: ['G4'], tools: [], ings: [], doneWhen: 'Plates warm to the touch' },

      // G1 waits for the boil (P3) so the meat is ready about when the pasta is.
      { id: 'G1', thread: 'G', area: 'stove', title: Meat + ' into a cold pan',
        text: g1Text, duration: d.G1, deps: ['B2', 'P3'], tools: ['pan'], ings: g1Ings, doneWhen: 'Pan on low, cubes spread out' },
      { id: 'G2', thread: 'G', area: 'stove', title: 'Render the ' + meat,
        text: 'Let the fat melt out slowly on low heat. Stir now and then.',
        duration: d.G2, deps: [], tools: ['pan', 'wooden_spoon'], ings: [], doneWhen: 'Cubes golden, fat melted and clear', tip: true, overcook: true },

      { id: 'P4', thread: 'P', area: 'stove', title: 'Salt the water',
        text: 'Now that it boils, add the coarse salt.',
        duration: d.P4, deps: [], tools: ['cooking_pot'], ings: [{ id: 'salt', qty: saltG + ' g' }], doneWhen: 'Salt dissolved' },
      { id: 'P5', thread: 'P', area: 'stove', title: 'Add the spaghetti',
        text: "Drop the spaghetti in with a twisting motion so it fans out, then stir once, slowly, so it doesn't stick.",
        duration: d.P5, deps: [], tools: ['cooking_pot', 'tongs'], ings: [{ id: 'spaghetti', qty: g(100 * s) }],
        doneWhen: 'All spaghetti under water', tip: true },
      { id: 'P6', thread: 'P', area: 'stove', title: 'Cook until al dente',
        text: "Boil 1 minute less than the package says. Keep the water, don't drain!",
        duration: d.P6, deps: [], tools: ['cooking_pot'], ings: [], doneWhen: 'Bite test: slightly firm center', overcook: true },

      { id: 'G3', thread: 'G', area: 'stove', title: g3Title,
        text: g3Text, duration: d.G3, deps: [pepperStep], tools: ['pan'],
        ings: [{ id: 'black_peppercorn', qty: 'half', label: 'Ground pepper' }], doneWhen: 'Pepper smells fragrant' },
      { id: 'G4', thread: 'G', area: 'stove', title: 'Pan off the heat',
        text: 'Turn off the burner and take the pan off the heat.',
        duration: d.G4, deps: [], tools: ['pan'], ings: [], doneWhen: 'Pan off the heat' },

      { id: 'P7', thread: 'P', area: 'stove', title: 'Turn off the pasta',
        text: "Turn off the heat under the pot. Move the pasta right away, don't let it sit in the hot water.",
        duration: d.P7, deps: [], tools: ['cooking_pot'], ings: [], doneWhen: 'Burner off' },

      { id: 'F1', thread: 'F', area: 'stove', title: 'Pasta into the pan',
        text: 'With tongs, move the spaghetti straight into the pan. Add pasta water a ladle at a time while tossing, until creamy.',
        duration: d.F1, deps: ['P7', 'G4'], tools: ['pan', 'tongs', 'ladle'],
        ings: [{ id: 'spaghetti', qty: g(100 * s), label: 'Spaghetti, al dente' }, { id: 'water', qty: Math.ceil(s) + ' ladles', label: 'Pasta water' }],
        doneWhen: 'Glossy, creamy coating' },
      { id: 'F2', thread: 'F', area: 'stove', title: 'Let it calm down',
        text: 'Wait until the pan has just stopped sizzling but is still warm. Too hot = scrambled eggs.',
        duration: d.F2, deps: [], tools: ['pan'], ings: [], doneWhen: 'No more sizzling sound' },
      { id: 'F3', thread: 'F', area: 'stove', title: 'Add the egg mix',
        text: 'Pour in the egg and pecorino mix, off the heat, and mix really well with the tongs.',
        duration: d.F3, deps: ['E1'], tools: ['pan', 'tongs'],
        ings: [{ id: 'egg', qty: 'all', label: 'Egg & cheese mix' }], doneWhen: 'Silky sauce, no scrambled bits', tip: true },
      { id: 'F4', thread: 'F', area: 'stove', title: 'Check the texture',
        text: 'Too thick? Add a little more pasta water while mixing.',
        duration: d.F4, deps: [], tools: ['ladle', 'tongs'],
        ings: [{ id: 'water', qty: 'as needed', label: 'Pasta water' }], doneWhen: 'Sauce flows slowly and coats the pasta' },
      { id: 'F5', thread: 'F', area: 'countertop', title: 'Plate and serve',
        text: 'Twirl onto the warm plates. Top with the remaining pecorino and pepper.',
        duration: d.F5, deps: ['E2'], tools: ['tongs'],
        ings: [{ id: 'pecorino_romano', qty: g(5 * s), label: 'Pecorino, grated' }, { id: 'black_peppercorn', qty: 'rest', label: 'Ground pepper' }],
        doneWhen: 'Served' }
    );
    return { servings: s, ingredients: ingredients, steps: steps };
  }

  window.RECIPES = [
    {
      id: 'spaghetti_carbonara',
      name: 'Spaghetti Carbonara',
      image: 'img/350/spaghetti.webp',
      // "Forks": choices asked before cooking (OPTIONS table in the sheet).
      options: [
        { id: 'opt_meat', question: 'Meat', choices: [
          { id: 'guanciale', label: 'Guanciale', isDefault: true },
          { id: 'pancetta_bacon', label: 'Pancetta or smoked bacon (if no guanciale)' }] },
        { id: 'opt_eggs', question: 'Eggs', choices: [
          { id: 'whole', label: 'Whole eggs (lighter)', isDefault: true },
          { id: 'rich', label: 'Yolks + some whole eggs (richer, more golden)' }] },
        { id: 'opt_pepper', question: 'Pepper', choices: [
          { id: 'fine', label: 'Sieved fine powder', isDefault: true },
          { id: 'coarse', label: 'Coarsely cracked (traditional)' }] },
        { id: 'opt_garlic', question: 'Garlic', choices: [
          { id: 'without', label: 'Without garlic (traditional)', isDefault: true },
          { id: 'with', label: 'With a crushed clove (removed before serving)' }] }
      ],
      build: carbonara
    }
  ].concat((window.SHEET_RECIPES || []).map(fromSheet));

  /*
    category: soup, main, dessert or side (the recipe list sections)
    cuisine:  filter tags (to be adjusted)
    kids:     options switched on when children are added, to make it child-friendly
    rawEgg:   true when the chosen options leave the egg raw
    starred:  1 = shown as "Most popular" (star on the photo, blue star by the name), 0 = not
  */
  var META = {
    spaghetti_carbonara: { starred: 1, category: 'main', cuisine: ['Italian'] },
    chilli_con_carne: { starred: 1, category: 'main', cuisine: ['Mexican'], kids: { opt_heat: 'mild' } },
    semolina_pudding: { starred: 1, category: 'dessert' },
    bibimbap: { starred: 1, category: 'main', cuisine: ['Asian'] },
    honey_tarragon_chicken: { starred: 1, category: 'main', kids: { opt_wine: 'alcohol_free' } },
    caesar_salad: { starred: 1, category: 'main', cuisine: ['American'], kids: { opt_mayo: 'store' },
      rawEgg: function (c) { return c.opt_mayo === 'homemade'; } },
    breakfast_muffin: { starred: 1, category: 'main' },
    summer_salad: { starred: 1, category: 'side' },
    tozza: { starred: 1, category: 'main' },
    tomato_soup: { starred: 1, category: 'soup' },
    french_onion_soup: { starred: 1, category: 'soup', cuisine: ['French'] },
    tzatziki: { starred: 1, category: 'side', cuisine: ['Greek'] },
    overnight_oats: { starred: 1, category: 'main' },
    slow_cooked_beef: { starred: 1, category: 'main', kids: { opt_heat: 'mild' } },
    burger: { starred: 1, category: 'main', cuisine: ['American'], kids: { opt_sauce_heat: 'without', opt_mayo: 'store' },
      rawEgg: function (c) { return c.opt_mayo === 'homemade'; } },
    homemade_mayonnaise: { starred: 1, category: 'side', kids: { opt_egg: 'pasteurized' },
      rawEgg: function (c) { return c.opt_egg === 'fresh'; } },
    // Added 2026-10-25 from the 150-recipe list (not "Most popular" yet)
    scrambled_eggs: { starred: 0, category: "main" },
    omelette: { starred: 0, category: "main", cuisine: ['French'] },
    pancakes: { starred: 0, category: "dessert", cuisine: ['American'] },
    crepes: { starred: 0, category: "dessert", cuisine: ['French'] },
    french_toast: { starred: 0, category: "main", cuisine: ['French'] },
    oatmeal_porridge: { starred: 0, category: "main" },
    waffles: { starred: 0, category: "dessert", cuisine: ['American'] },
    frittata: { starred: 0, category: "main", cuisine: ['Italian'] },
    grilled_cheese_sandwich: { starred: 0, category: "main", cuisine: ['American'] },
    homemade_white_bread: { starred: 0, category: "side" },
    spaghetti_bolognese: { starred: 0, category: "main", cuisine: ['Italian'], kids: { 'opt_wine': 'no_wine' } },
    lasagna: { starred: 0, category: "main", cuisine: ['Italian'] },
    pasta_with_tomato_sauce: { starred: 0, category: "main", cuisine: ['Italian'] },
    pasta_with_basil_pesto: { starred: 0, category: "main", cuisine: ['Italian'] },
    spaghetti_aglio_e_olio: { starred: 0, category: "main", cuisine: ['Italian'], kids: { 'opt_heat': 'mild' } },
    fettuccine_alfredo: { starred: 0, category: "main", cuisine: ['Italian'] },
    macaroni_and_cheese: { starred: 0, category: "main", cuisine: ['American'] },
    potato_gnocchi: { starred: 0, category: "main", cuisine: ['Italian'] },
    mushroom_risotto: { starred: 0, category: "main", cuisine: ['Italian'], kids: { 'opt_wine': 'no_wine' } },
    margherita_pizza: { starred: 0, category: "main", cuisine: ['Italian'] },
    garlic_bread: { starred: 0, category: "side", cuisine: ['Italian'] },
    tuna_tomato_pasta: { starred: 0, category: "main", cuisine: ['Italian'] },
    spinach_ricotta_ravioli: { starred: 0, category: "main", cuisine: ['Italian'] },
    roast_chicken: { starred: 0, category: "main" },
    fried_chicken: { starred: 0, category: "main", cuisine: ['American'], kids: { 'opt_heat': 'mild' } },
    beef_stew: { starred: 0, category: "main", kids: { 'opt_liquid': 'stock' } },
    shepherds_pie: { starred: 0, category: "main" },
    meatloaf: { starred: 0, category: "main", cuisine: ['American'] },
    chicken_schnitzel: { starred: 0, category: "main" },
    baked_salmon: { starred: 0, category: "main" },
    beef_stroganoff: { starred: 0, category: "main" },
    ratatouille: { starred: 0, category: "main", cuisine: ['French'] },
    chicken_noodle_soup: { starred: 0, category: "soup", cuisine: ['American'] },
    vegetable_soup: { starred: 0, category: "soup" },
    lentil_soup: { starred: 0, category: "soup", cuisine: ['Middle Eastern'] },
    minestrone: { starred: 0, category: "soup", cuisine: ['Italian'] },
    greek_salad: { starred: 0, category: "side", cuisine: ['Greek'] },
    potato_salad: { starred: 0, category: "side" },
    mashed_potatoes: { starred: 0, category: "side" },
    roasted_vegetables: { starred: 0, category: "side" },
    tacos: { starred: 0, category: "main", cuisine: ['Mexican'], kids: { 'opt_heat': 'mild' } },
    quesadillas: { starred: 0, category: "main", cuisine: ['Mexican'] },
    chicken_enchiladas: { starred: 0, category: "main", cuisine: ['Mexican'], kids: { 'opt_heat': 'mild' } },
    chicken_fajitas: { starred: 0, category: "main", cuisine: ['Mexican'], kids: { 'opt_heat': 'mild' } },
    beef_empanadas: { starred: 0, category: "main", cuisine: ['Latin American'] },
    cheese_arepas: { starred: 0, category: "main", cuisine: ['Latin American'] },
    feijoada: { starred: 0, category: "main", cuisine: ['Latin American'] },
    guacamole: { starred: 0, category: "side", cuisine: ['Mexican'], kids: { 'opt_heat': 'mild' } },
    huevos_rancheros: { starred: 0, category: "main", cuisine: ['Mexican'], kids: { 'opt_heat': 'mild' } },
    tostones: { starred: 0, category: "side", cuisine: ['Latin American'] },
    jerk_chicken: { starred: 0, category: "main", cuisine: ['Latin American'], kids: { 'opt_heat': 'medium' } },
    picadillo: { starred: 0, category: "main", cuisine: ['Latin American'] },
    chicken_curry: { starred: 0, category: "main", cuisine: ['Indian'], kids: { 'opt_heat': 'mild' } },
    butter_chicken: { starred: 0, category: "main", cuisine: ['Indian'] },
    chicken_tikka_masala: { starred: 0, category: "main", cuisine: ['Indian'], kids: { 'opt_heat': 'mild' } },
    chicken_biryani: { starred: 0, category: "main", cuisine: ['Indian'] },
    dal_tadka: { starred: 0, category: "main", cuisine: ['Indian'], kids: { 'opt_heat': 'mild' } },
    chana_masala: { starred: 0, category: "main", cuisine: ['Indian'] },
    rajma: { starred: 0, category: "main", cuisine: ['Indian'] },
    palak_paneer: { starred: 0, category: "main", cuisine: ['Indian'] },
    aloo_gobi: { starred: 0, category: "main", cuisine: ['Indian'] },
    roti_chapati: { starred: 0, category: "side", cuisine: ['Indian'] },
    naan: { starred: 0, category: "side", cuisine: ['Indian'] },
    samosas: { starred: 0, category: "side", cuisine: ['Indian'] },
    masala_dosa: { starred: 0, category: "main", cuisine: ['Indian'] },
    idli: { starred: 0, category: "main", cuisine: ['Indian'] },
    khichdi: { starred: 0, category: "main", cuisine: ['Indian'] },
    vegetable_pulao: { starred: 0, category: "side", cuisine: ['Indian'] },
    keema_curry: { starred: 0, category: "main", cuisine: ['Indian'], kids: { 'opt_heat': 'mild' } },
    egg_fried_rice: { starred: 0, category: "main", cuisine: ['Asian'] },
    stir_fried_vegetables: { starred: 0, category: "main", cuisine: ['Asian'] },
    chow_mein: { starred: 0, category: "main", cuisine: ['Asian'] },
    mapo_tofu: { starred: 0, category: "main", cuisine: ['Asian'], kids: { 'opt_heat': 'medium' } },
    kung_pao_chicken: { starred: 0, category: "main", cuisine: ['Asian'], kids: { 'opt_heat': 'mild' } },
    beef_and_broccoli: { starred: 0, category: "main", cuisine: ['Asian'] },
    sweet_and_sour_pork: { starred: 0, category: "main", cuisine: ['Asian'] },
    tomato_and_egg_stir_fry: { starred: 0, category: "main", cuisine: ['Asian'] },
    congee: { starred: 0, category: "main", cuisine: ['Asian'] },
    japanese_curry_rice: { starred: 0, category: "main", cuisine: ['Asian'] },
    teriyaki_chicken: { starred: 0, category: "main", cuisine: ['Asian'] },
    miso_soup: { starred: 0, category: "soup", cuisine: ['Asian'] },
    yakisoba: { starred: 0, category: "main", cuisine: ['Asian'] },
    onigiri: { starred: 0, category: "main", cuisine: ['Asian'] },
    bulgogi: { starred: 0, category: "main", cuisine: ['Asian'] },
    kimchi_fried_rice: { starred: 0, category: "main", cuisine: ['Asian'] },
    pad_thai: { starred: 0, category: "main", cuisine: ['Asian'] },
    thai_green_curry: { starred: 0, category: "main", cuisine: ['Asian'], kids: { 'opt_heat': 'medium' } },
    tom_yum_soup: { starred: 0, category: "soup", cuisine: ['Asian'], kids: { 'opt_heat': 'medium' } },
    chicken_satay: { starred: 0, category: "main", cuisine: ['Asian'] },
    nasi_goreng: { starred: 0, category: "main", cuisine: ['Asian'] },
    mie_goreng: { starred: 0, category: "main", cuisine: ['Asian'] },
    gado_gado: { starred: 0, category: "main", cuisine: ['Asian'] },
    curry_laksa: { starred: 0, category: "soup", cuisine: ['Asian'] },
    pho: { starred: 0, category: "soup", cuisine: ['Asian'] },
    fresh_spring_rolls: { starred: 0, category: "side", cuisine: ['Asian'] },
    chicken_adobo: { starred: 0, category: "main", cuisine: ['Asian'] },
    sinigang: { starred: 0, category: "soup", cuisine: ['Asian'] },
    pancit_bihon: { starred: 0, category: "main", cuisine: ['Asian'] },
    shakshuka: { starred: 0, category: "main", cuisine: ['Middle Eastern'], kids: { 'opt_heat': 'mild' } },
    hummus: { starred: 0, category: "side", cuisine: ['Middle Eastern'] },
    falafel: { starred: 0, category: "main", cuisine: ['Middle Eastern'] },
    tabbouleh: { starred: 0, category: "side", cuisine: ['Middle Eastern'] },
    mujadara: { starred: 0, category: "main", cuisine: ['Middle Eastern'] },
    chicken_shawarma: { starred: 0, category: "main", cuisine: ['Middle Eastern'] },
    kofta_kebabs: { starred: 0, category: "main", cuisine: ['Middle Eastern'] },
    stuffed_peppers: { starred: 0, category: "main", cuisine: ['Greek'] },
    moussaka: { starred: 0, category: "main", cuisine: ['Greek'] },
    souvlaki: { starred: 0, category: "main", cuisine: ['Greek'] },
    spanakopita: { starred: 0, category: "main", cuisine: ['Greek'] },
    baba_ganoush: { starred: 0, category: "side", cuisine: ['Middle Eastern'] },
    menemen: { starred: 0, category: "main", cuisine: ['Middle Eastern'] },
    jollof_rice: { starred: 0, category: "main", cuisine: ['African'], kids: { 'opt_heat': 'medium' } },
    egusi_soup: { starred: 0, category: "soup", cuisine: ['African'] },
    groundnut_stew: { starred: 0, category: "main", cuisine: ['African'] },
    chicken_tagine: { starred: 0, category: "main", cuisine: ['African'] },
    vegetable_couscous: { starred: 0, category: "main", cuisine: ['African'] },
    doro_wat: { starred: 0, category: "main", cuisine: ['African'], kids: { 'opt_heat': 'medium' } },
    bobotie: { starred: 0, category: "main", cuisine: ['African'] },
    chocolate_chip_cookies: { starred: 0, category: "dessert", cuisine: ['American'] },
    brownies: { starred: 0, category: "dessert", cuisine: ['American'] },
    banana_bread: { starred: 0, category: "dessert", cuisine: ['American'] },
    apple_pie: { starred: 0, category: "dessert", cuisine: ['American'] },
    chocolate_cake: { starred: 0, category: "dessert" },
    cheesecake: { starred: 0, category: "dessert", cuisine: ['American'] },
    tiramisu: { starred: 0, category: "dessert", cuisine: ['Italian'], kids: { 'opt_alcohol': 'none' }, rawEgg: function () { return true; } },
    rice_pudding: { starred: 0, category: "dessert" },
    flan: { starred: 0, category: "dessert", cuisine: ['Latin American'] }
  };
  window.RECIPES.forEach(function (r) {
    var m = META[r.id] || {};
    r.category = m.category || 'main';
    r.cuisine = m.cuisine || [];
    r.kids = m.kids || {};
    r.rawEgg = m.rawEgg || function () { return false; };
    r.starred = m.starred ? 1 : 0;
  });

  // ---------- Recipes from the sheet (js/recipes-sheet.js) ----------
  // The sheet's free-text columns are read with a few simple rules; anything
  // a rule can't read falls back to the plain number at the start of the cell.

  var NOT_TOOLS = ['stovetop', 'oven', 'fridge'];
  var FRACTIONS = { 0.25: '¼', 0.5: '½', 0.75: '¾' };

  function empty(v) { return !v || v === '—'; }

  function parseRows(text) {
    var out = { O: [], I: [], S: [] };
    text.split('\n').forEach(function (line) {
      if (!line.trim()) return;
      var f = line.split('|');
      out[f[0]].push(f.slice(1).map(function (v) { return v.trim(); }));
    });
    return out;
  }

  function question(optId) {
    var s = optId.replace(/^opt_/, '').replace(/_/g, ' ');
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // "opt_meat = pork (or mix)", "opt_cheese = feta or both"
  function condOk(cond, c) {
    if (empty(cond)) return true;
    var m = cond.match(/^(opt_\w+)\s*(?:=|is)\s*(.+)$/);
    if (!m) return true;
    return (m[2].match(/[a-z_]+/gi) || []).indexOf(c[m[1]]) >= 0;
  }

  // Amount with its unit. Spoons, cups and pieces go to the nearest quarter;
  // a spoon amount below a quarter becomes "a pinch".
  function amountText(n, unit, shownUnit) {
    var word = unit.split(' ')[0];
    if (/^(tsp|tbsp|cup|pcs|head|slices|leaves)$/.test(word)) {
      var q = Math.round(n * 4) / 4;
      if (!q) {
        if (/^(tsp|tbsp)$/.test(word)) return 'a pinch';
        q = 0.25;
      }
      var whole = Math.floor(q);
      return ((whole || '') + (FRACTIONS[q - whole] || '') + ' ' + shownUnit).trim();
    }
    return (String(n >= 10 ? Math.round(n) : Math.round(n * 10) / 10) + ' ' + shownUnit).trim();
  }

  // Duration from the sheet's duration_rule, e.g. "(60 + 60 × servings) × skill_factor",
  // "210 cutlets (doc: …) / 300 whole (doc: …)" or "1800 (doc: …)".
  function duration(rule, vars, chosen) {
    if (rule.indexOf('/') >= 0) {
      var pairs = rule.match(/(\d+)\s+([A-Za-z_]+)/g) || [];
      for (var i = 0; i < pairs.length; i++) {
        var p = pairs[i].split(/\s+/);
        if (chosen.indexOf(p[1].toLowerCase()) >= 0) return Number(p[0]);
      }
    }
    var names = Object.keys(vars);
    var expr = rule.replace(/×/g, '*').replace(/−/g, '-'), prev;
    do {
      prev = expr;
      expr = expr.replace(/\(([^()]*)\)/g, function (m, inner) {
        var words = inner.match(/[a-z_]+/gi) || [];
        return words.every(function (w) { return names.indexOf(w) >= 0; }) ? '[' + inner + ']' : '';
      });
    } while (expr !== prev);
    expr = expr.replace(/\[/g, '(').replace(/\]/g, ')');
    expr = (expr.match(/^[\d\s+*\-/().a-z_]*/i) || [''])[0].replace(/[\s+*\-/(]+$/, '');
    var ok = (expr.match(/[a-z_]+/gi) || []).every(function (w) { return names.indexOf(w) >= 0; });
    if (ok && expr) {
      try {
        var v = window.CookCore.arithmetic(expr, vars);
        if (v >= 0) return Math.round(v);
      } catch (e) { /* fall through */ }
    }
    return Number((rule.match(/\d+/) || [60])[0]);
  }

  // Where in the kitchen a step happens, guessed from its equipment, heat and text.
  // A step whose heat is a hob setting stays at the stove (flipping, stirring,
  // tasting happen right there). The sheet's optional last column overrides it.
  var STOVE_HEAT = /^(low|medium|high)(-(low|high))?\b/i;
  function areaOf(st) {
    var eq = st.equipment, text = (st.title + ' ' + st.text).toLowerCase();
    if (st.area) return st.area;
    if (eq.indexOf('fridge') >= 0 || /\bfridge\b/.test(text)) return 'fridge';
    if (/\bfreezer\b/.test(text)) return 'freezer';
    if (eq.indexOf('oven') >= 0 || /°C|grill/.test(st.heat)) return 'oven';
    if (eq.indexOf('slow_cooker') >= 0 || eq.indexOf('panini_press') >= 0) return 'countertop';
    if (eq.indexOf('stovetop') >= 0 || STOVE_HEAT.test(st.heat)) return 'stove';
    if ((eq.indexOf('pan') >= 0 || eq.indexOf('cooking_pot') >= 0) && !empty(st.heat)) return 'stove';
    if (/\b(wash|rinse|drain)/i.test(st.title)) return 'sink';
    if (eq.indexOf('chopping_board') >= 0) return 'board';
    return 'countertop';
  }

  // "I know what I'm doing": back-to-back steps of the same thread in the same
  // place become one card. If a step also waits for another thread (e.g. the
  // semolina needs measuring), the whole card waits for it, unless that would
  // make two cards wait for each other.
  function combine(steps) {
    var byId = {};
    steps.forEach(function (s) { byId[s.id] = s; });
    function allDeps(s) {
      var prev = null;
      for (var i = 0; i < steps.length && steps[i] !== s; i++) if (steps[i].thread === s.thread) prev = steps[i];
      return s.deps.concat(prev ? [prev.id] : []);
    }
    function reaches(fromId, targets, seen) {
      if (targets.indexOf(fromId) >= 0) return true;
      seen = seen || {};
      if (seen[fromId]) return false;
      seen[fromId] = true;
      return allDeps(byId[fromId]).some(function (d) { return reaches(d, targets, seen); });
    }

    var groups = [], groupOf = {}, last = {};
    steps.forEach(function (s) {
      var g = last[s.thread];
      var outside = g ? s.deps.filter(function (d) { return g.ids.indexOf(d) < 0; }) : [];
      var ok = g && g.area === s.area && !outside.some(function (d) { return reaches(d, g.ids); });
      if (ok) {
        g.ids.push(s.id);
        g.parts.push({ title: s.title, text: s.text });
        g.duration += s.duration;
        g.doneWhen = s.doneWhen;
        g.overcook = g.overcook || s.overcook;
        g.deps = g.deps.concat(outside);
        s.tools.forEach(function (t) { if (g.tools.indexOf(t) < 0) g.tools.push(t); });
        s.ings.forEach(function (i) { if (!g.ings.some(function (x) { return x.id === i.id; })) g.ings.push(i); });
      } else {
        g = { id: s.id, ids: [s.id], thread: s.thread, area: s.area, parts: [{ title: s.title, text: s.text }],
          duration: s.duration, deps: s.deps.slice(), tools: s.tools.slice(), ings: s.ings.slice(),
          doneWhen: s.doneWhen, overcook: s.overcook, tip: s.tip };
        groups.push(g);
        last[s.thread] = g;
      }
      groupOf[s.id] = g.id;
    });
    groups.forEach(function (g) {
      var deps = [];
      g.deps.forEach(function (d) { var to = groupOf[d]; if (to && to !== g.id && deps.indexOf(to) < 0) deps.push(to); });
      g.deps = deps;
      var n = g.parts.length;
      g.title = n === 1 ? g.parts[0].title : n === 2 ? g.parts[0].title + ' · ' + g.parts[1].title : g.parts[0].title + ' … ' + g.parts[n - 1].title;
      g.text = n === 1 ? g.parts[0].text : '';
      if (n === 1) delete g.parts;
      g.members = g.ids; // the detailed steps this card covers
      delete g.ids;
    });
    return groups;
  }

  function fromSheet(def) {
    var rows = parseRows(def.rows);
    var options = [];
    rows.O.forEach(function (o) {
      var group = options.filter(function (x) { return x.id === o[0]; })[0];
      if (!group) options.push(group = { id: o[0], question: question(o[0]), choices: [] });
      group.choices.push({ id: o[1], label: o[2], isDefault: o[3] === 'TRUE' });
    });

    function build(c) {
      var s = c.servings;
      var vars = Object.assign({ servings: s, skill_factor: 1 }, def.vars ? def.vars(c) : {});
      var chosen = options.map(function (o) { return c[o.id]; });

      var ingredients = rows.I.filter(function (r) { return condOk(r[7], c); }).map(function (r) {
        var qty = Number(r[3]), unit = r[4], g = Number(r[5]), scaling = r[6].toLowerCase();
        var mult = s;
        if (/per muffin/.test(scaling)) mult = vars.muffins;
        else if (/per patty/.test(scaling)) mult = vars.patties;
        else if (/fixed|only if needed/.test(scaling)) mult = 1;
        var half = scaling.match(/half if (\w+)/), double = scaling.match(/doubled if (\w+)/);
        if (half && chosen.indexOf(half[1]) >= 0) mult *= 0.5;
        if (double && chosen.indexOf(double[1]) >= 0) mult *= 2;
        var total = qty * mult;
        if (/rounded up/.test(scaling)) total = Math.ceil(total);
        var shownUnit = unit.replace(/\s+per \w+$/, '').replace(/^pcs$/, '');
        // No photo yet ("— (placeholder …)" in the sheet): keyed by its own id, shown as the placeholder.
        var photo = /\.webp$/.test(r[2]);
        var item = {
          id: r[0], name: r[1], key: photo ? r[2].replace(/^.*\//, '').replace(/\.webp$/, '') : r[0],
          amount: amountText(total, unit, shownUnit),
          grams: qty ? g * total / qty : 0,
          note: empty(r[8]) ? '' : r[8]
        };
        if (!photo) item.noImage = true;
        return item;
      });
      var byId = {};
      ingredients.forEach(function (i) { byId[i.id] = i; });

      var raw = rows.S.filter(function (r) { return condOk(r[11], c); });
      var ids = raw.map(function (r) { return r[0]; });
      var mentions = {};
      var steps = raw.map(function (r) {
        var st = { id: r[0], thread: r[1], title: r[2], text: r[3], kind: r[4], heat: r[5], doneWhen: r[8],
          equipment: empty(r[10]) ? [] : r[10].split(/,\s*/), area: empty(r[12]) ? '' : r[12] };
        if (def.heat && def.heat(c)[st.id]) st.heat = def.heat(c)[st.id];
        st.area = areaOf(st);
        st.duration = duration(r[6], vars, chosen);
        st.deps = empty(r[7]) ? [] : r[7].split(/,\s*/).filter(function (d) { return ids.indexOf(d) >= 0; });
        st.tools = st.equipment.filter(function (e) { return window.EQUIPMENT[e] && NOT_TOOLS.indexOf(e) < 0; });
        st.overcook = st.kind === 'wait' && !empty(st.heat) && st.heat !== 'off';
        st.ings = [];
        (empty(r[9]) ? [] : r[9].split(/[;,/+]/)).forEach(function (tok) {
          var id = (tok.trim().match(/^[a-z_]+/) || [''])[0];
          if (byId[id] && !st.ings.some(function (x) { return x.id === id; })) {
            st.ings.push({ id: id });
            mentions[id] = (mentions[id] || 0) + 1;
          }
        });
        delete st.equipment;
        return st;
      });
      // Show the amount on a card only when the ingredient is used in that one step.
      steps.forEach(function (st) {
        st.ings = st.ings.map(function (i) {
          var ing = byId[i.id];
          var x = { id: i.id, key: ing.key, label: ing.name, qty: mentions[i.id] === 1 ? ing.amount : '' };
          if (ing.noImage) x.noImage = true;
          return x;
        });
      });

      return { servings: s, ingredients: ingredients, steps: c.mode === 'quick' ? combine(steps) : steps };
    }

    return {
      id: def.id, name: def.name, image: def.image, unit: def.unit || 'person',
      maxServings: def.maxServings || 8, defaultServings: def.defaultServings || 2,
      options: options, build: build
    };
  }
})();
