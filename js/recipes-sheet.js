/*
  Recipes copied from the "Recipes" Google Sheet (schema cook-recipe v0.1), 2026-10-19.
  Spaghetti Carbonara is hand-built in recipes.js; every other tab is here.

  One block per recipe, one row per line, fields split by "|". "—" means empty.
  O|option_id|choice_id|label|TRUE when it is the default
  I|ing_id|name|image|qty_per_person|unit|approx_g_per_person|scaling|condition|prep
  S|step_id|thread|title|instruction|kind|heat|duration_rule|depends_on|done_when|ingredients_in|equipment|condition|area (optional: stove, oven, countertop, board, sink, fridge, freezer)

  Only the columns the app uses are kept. Read by the converter in recipes.js.
  Optional per recipe: vars(choices) adds numbers for duration rules; heat(choices)
  returns { stepId: heat } for heat cells that are formulas in the sheet.
*/
window.SHEET_RECIPES = [
  {
    id: 'chilli_con_carne', name: 'Chili con Carne', image: 'img/350/chili_pepper.webp',
    rows: `
O|opt_meat|pork|Ground pork|TRUE
O|opt_meat|beef|Ground beef|FALSE
O|opt_meat|mix|Half pork, half beef|FALSE
O|opt_heat|mild|Mild (1 tsp chili powder per 4 people)|TRUE
O|opt_heat|hot|Hot (2 tsp per 4, or a chopped fresh chili with the onions)|FALSE
O|opt_liquid|stock|Beef or chicken stock|TRUE
O|opt_liquid|water|Water|FALSE
O|opt_serve|tortillas|Toasted tortillas|TRUE
O|opt_serve|rice|Rice|FALSE
I|ground_pork|Ground pork|img/350/ground_pork.webp|125|g|125|linear; half if mix|opt_meat = pork (or mix)|—
I|ground_beef|Ground beef|img/350/ground_beef.webp|125|g|125|linear; half if mix|opt_meat = beef (or mix)|—
I|onion|Onion, large|img/350/onion.webp|0.25|pcs|37|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.75|pcs|4|linear, rounded up|—|finely chopped
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|0.5|pcs|75|linear|—|diced
I|tomato|Tomato, medium|img/350/tomato.webp|1|pcs|125|linear|—|chopped
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|7.5|g|7.5|linear|—|—
I|kidney_beans|Red kidney beans (canned)|img/350/kidney_beans.webp|60|g drained|60|linear|—|drained and rinsed
I|corn|Corn (canned)|img/350/corn.webp|71|g|71|linear|—|drained
I|beer|Beer (lager or dark ale)|img/350/beer.webp|37.5|ml|38|linear|—|—
I|beef_stock|Beef or chicken stock|img/350/beef_stock.webp|75|ml|75|linear|opt_liquid = stock|—
I|water|Water|img/350/water.webp|75|ml|75|linear|opt_liquid = water|—
I|oil|Neutral oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|paprika_powder|Sweet paprika|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.25|tsp|0.7|linear; doubled if hot|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|cinnamon|Ground cinnamon|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|dark_chocolate|Dark chocolate (85% or more)|img/350/dark_chocolate.webp|4.5|g|4.5|linear|—|in chunks
I|cheddar|Cheddar|img/350/cheddar.webp|25|g|25|linear|—|grated
I|sour_cream|Sour cream|img/350/sour_cream.webp|1|tbsp|20|linear|—|—
I|tortilla|Small tortilla|img/350/tortilla.webp|1|pcs|30|linear|opt_serve = tortillas|toasted
I|white_rice|Long-grain rice|img/350/white_rice.webp|70|g|70|linear|opt_serve = rice|—
I|cilantro|Cilantro leaves|img/350/cilantro.webp|3|leaves|1|linear|—|—
I|lime|Lime wedge|img/350/lime.webp|1|pcs|10|linear|—|wedge
S|K1|K|Dice the onion|Peel the onion and dice it.|action|—|(60 + 60 × servings) × skill_factor|—|Small even dice|onion|chef_knife, chopping_board|—
S|K2|K|Dice the peppers|Remove the seeds and dice the red bell peppers.|action|—|(60 + 60 × servings) × skill_factor|—|Small even dice|red_bell_pepper|chef_knife, chopping_board|—
S|K3|K|Chop the garlic|Peel and finely chop the garlic.|action|—|(30 + 20 × servings) × skill_factor|—|Finely chopped|garlic|chef_knife, chopping_board|—
S|P1|P|Onion and pepper in|Heat the oil in the large pot on medium, add the onion and the peppers.|action|medium|30|K1, K2|All in the pot|oil; onion_diced; pepper_diced|cooking_pot, stovetop, spatula|—
S|P2|P|Soften the vegetables|Cook on medium until soft, stirring now and then.|wait|medium|360 (doc: 6 to 8 min incl. the garlic minute)|P1|Soft and glossy|—|cooking_pot, spatula|—
S|K4|K|Chop the tomatoes|Chop the fresh tomatoes.|action|—|(30 + 45 × servings) × skill_factor|—|Chopped|tomato|chef_knife, chopping_board|—
S|P3|P|Garlic in|Add the garlic for the last minute, stirring.|action|medium|60|P2, K3|Fragrant|garlic_chopped|cooking_pot, spatula|—
S|P4|P|Spices in|Add salt, black pepper, paprika, chili powder, cumin and cinnamon. Stir them in the oil for 30 to 60 s, they burn easily.|action|medium|45 (doc: 30 to 60 s)|P3|Fragrant, not burnt|salt; ground_black_pepper; paprika_powder; chili_powder; cumin; cinnamon|cooking_pot, spatula|—
S|P5|P|Meat in|Add the ground meat and break it up with the spatula.|action|medium|60|P4|Broken up, spread out|ground_pork / ground_beef|cooking_pot, spatula|—
S|P6|P|Brown the meat|Leave it undisturbed for 2 to 3 min between stirs so it browns, breaking it up each time.|wait|medium|420 (doc: 6 to 8 min)|P5|No pink left, browned bits|—|cooking_pot, spatula|—
S|P7|P|Deglaze|Pour in the beer and scrape the bottom of the pot.|action|medium|30|P6|Bottom scraped clean|beer|cooking_pot, spatula|—
S|P8|P|Let it cook|Let it bubble for a couple of minutes.|wait|medium|120|P7|Beer mostly evaporated|—|cooking_pot|—
S|P9|P|Tomato paste|Add the tomato paste and fry it for 1 minute, stirring.|action|medium|60|P8|Darker, fragrant|tomato_paste|cooking_pot, spatula|—
S|P10|P|Tomatoes in|Add the chopped tomatoes and keep stirring.|action|medium|30|P9, K4|Mixed in|tomato_chopped|cooking_pot, spatula|—
S|P11|P|Chocolate, oregano, liquid|Add the dark chocolate chunks, the oregano and the stock (or water). Stir.|action|medium|45|P10|Chocolate melted in|dark_chocolate; oregano; beef_stock / water|cooking_pot, spatula|—
S|P12|P|Bring to a boil|Let it come to a boil.|wait|medium|300|P11|Bubbling all over|—|cooking_pot|—
S|P13|P|Simmer, covered|Turn the heat down, cover and simmer. Stir every 10 minutes.|wait|low|1800 (first part of the doc's 45 to 60 min)|P12|30 min passed|—|cooking_pot, spatula|—
S|K5|K|Drain beans and corn|Drain and rinse the kidney beans; drain the corn.|action|—|60|—|Drained|kidney_beans; corn|colander|—
S|S1|S|Grate the cheddar|Grate the cheddar for serving.|action|—|(20 + 20 × servings) × skill_factor|—|Grated|cheddar|cheese_grater|—
S|P14|P|Beans and corn in|Stir in the beans and corn.|action|low|30|P13, K5|Mixed in|beans_corn_ready|cooking_pot, spatula|—
S|P15|P|Finish simmering|Simmer for the last stretch. Take the lid off if it needs thickening. Stir every 10 minutes.|wait|low|900 (doc: last 15 to 20 min)|P14|Thick, beans hot|—|cooking_pot, spatula|—
S|R1|R|Cook the rice|Wash the rice until the water runs clear. Cook it in 1.5× its volume of lightly salted water; when the water level meets the rice, cover on the lowest heat for 10 to 12 min, then rest covered 10 to 15 min.|wait|low|1500|—|Fluffy, water absorbed|white_rice|cooking_pot, stovetop|opt_serve = rice
S|P16|P|Taste and adjust|Taste. Adjust salt and chili. Still missing something? A squeeze of lime juice.|check|low|60|P15|Tastes right|salt; chili_powder; lime|cooking_pot, spoon|—
S|S2|S|Toast the tortillas|Toast each tortilla in a dry hot pan, 15 to 25 s per side.|action|high|40 × servings|P15|Lightly charred spots|tortilla|pan, stovetop|opt_serve = tortillas
S|S3|S|Serve|Ladle into bowls. Top with grated cheddar, a spoon of sour cream and a few cilantro leaves. Tortillas (or rice) on the side, lime wedge optional.|action|—|30 + 20 × servings|P16, S1, S2|Served|cheddar_grated; sour_cream; cilantro; lime; tortillas_toasted|ladle, bowl|—
`
  },
  {
    id: 'semolina_pudding', name: 'Semolina Pudding', image: 'img/350/semolina.webp',
    rows: `
O|opt_sweetener|sugar|Sugar|TRUE
O|opt_sweetener|erythritol|Powdered erythritol (1⅓× the sugar amount)|FALSE
O|opt_spice|with|With cardamom and rosewater|TRUE
O|opt_spice|without|Without|FALSE
O|opt_topping|cocoa|Cocoa only|TRUE
O|opt_topping|cocoa_cinnamon|Cocoa + cinnamon|FALSE
I|milk|Milk|img/350/milk.webp|250|ml|258|linear|—|—
I|semolina|Fine semolina|img/350/semolina.webp|2.5|tbsp|30|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|1.25|tbsp|18|linear|opt_sweetener = sugar|—
I|erythritol|Erythritol, powdered|img/350/erythritol.webp|1.75|tbsp|24|linear|opt_sweetener = erythritol|powdered
I|cinnamon|Ground cinnamon|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
I|cardamom|Green cardamom pods|img/350/cardamom.webp|1.75|pcs|0.4|linear, rounded up|opt_spice = with|seeds only, crushed
I|rosewater|Rosewater|img/350/rosewater.webp|0.125|tsp|0.6|linear|opt_spice = with|—
I|cocoa_powder|Cocoa powder|img/350/cocoa_powder.webp|1|tsp|2.5|linear|—|—
S|M1|M|Milk on the stove|Pour the milk into a big pot and put it on the stove.|action|medium|30 (heat level is an assumption)|—|Pot on the burner|milk|cooking_pot, stovetop|—
S|K1|K|Crack the cardamom|Break the pods, throw away the husks and crush the seeds in the mortar (or use ground cardamom).|action|—|(60 + 20 × servings) × skill_factor|—|Seeds crushed|cardamom|mortar_and_pestle|opt_spice = with
S|M2|M|Spices in|Add the cinnamon and the crushed cardamom seeds to the milk.|action|medium|15|M1, K1|Spices in the milk|cinnamon; cardamom_crushed|cooking_pot|—
S|K2|K|Portion semolina and sugar|Measure the semolina and the sugar (or erythritol). Per 1 dl milk: 1 tbsp semolina, ½ tbsp sugar (or ⅔ tbsp erythritol).|action|—|30 + 15 × servings|—|Both measured|semolina; sugar / erythritol|spoon|—
S|M3|M|Heat until steaming|Let the milk heat up until it steams.|wait|medium|240 + 60 × servings|M2|Steam rises from the milk|—|cooking_pot|—
S|M4|M|Stir constantly|Once it steams, stir constantly until it starts to rise.|action|medium|120|M3|Milk starts to rise|—|cooking_pot, wooden_spoon|—
S|M5|M|Semolina and sugar in|Pour in the semolina slowly, then the sugar, stirring all the time. Turn the heat to low.|action|low|45|M4, K2|No lumps|dry_ready|cooking_pot, wooden_spoon|—
S|M6|M|Cook on low|Keep stirring on low heat.|action|low|180 (doc: 2 to 4 min)|M5|Thick and smooth|—|cooking_pot, wooden_spoon|—
S|M7|M|Heat off, rosewater|Turn off the heat. Add a little rosewater near the end and keep stirring.|action|off|30|M6|Rosewater stirred in|rosewater|cooking_pot, wooden_spoon|—
S|F1|F|Plate while hot|While it is still hot and runny, pour it onto flat plates. Once it cools in the pot it sets and won't spread.|action|—|30 + 15 × servings|M7|Spread on the plates|pudding_ready|plates, wooden_spoon|—
S|F2|F|Dust and serve|Just before serving, sprinkle cocoa powder (and cinnamon) on top.|action|—|15 + 10 × servings|F1|Dusted|cocoa_powder; cinnamon|spoon|—
`
  },
  {
    id: 'bibimbap', name: 'Bibimbap', image: 'img/350/gochujang.webp',
    rows: `
O|opt_veg|easy|Easy: carrot, cucumber and green onion all julienned raw|TRUE
O|opt_veg|traditional|Traditional: salted, squeezed shredded cucumber; carrot sautéed 1 min|FALSE
O|opt_rice|jasmine|Jasmine rice|TRUE
O|opt_rice|sushi|Short-grain sushi rice (traditional, stickier)|FALSE
O|opt_sauce|bibimbap|Bibimbap sauce|TRUE
O|opt_sauce|soy|Light soy sauce only|FALSE
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|150|g|150|linear|—|2 to 3 cm chunks
I|oil_marinade|Neutral oil (marinade)|img/350/oil.webp|0.75|tsp|3.5|linear|—|—
I|gochujang|Gochujang (marinade)|img/350/gochujang.webp|0.5|tbsp|9|linear|—|—
I|light_soy_sauce|Light soy sauce|img/350/light_soy_sauce.webp|0.25|tbsp|4|linear|—|—
I|salt|Salt (marinade)|img/350/salt.webp|0.0625|tsp|0.4|linear|—|—
I|msg|MSG|img/350/msg.webp|0.125|tsp|0.6|linear|—|—
I|white_pepper|White pepper|img/350/white_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|honey|Sugar or honey (marinade)|img/350/honey.webp|0.25|tsp|1.5|linear|—|—
I|garlic|Garlic clove (marinade)|img/350/garlic.webp|0.25|pcs|1.5|linear, rounded up|—|finely grated
I|toasted_sesame_oil|Toasted sesame oil (marinade + eggs)|img/350/toasted_sesame_oil.webp|0.5|tsp|2.3|linear|—|—
I|jasmine_rice|Jasmine rice, uncooked|img/350/jasmine_rice.webp|0.5|cup|92|linear|opt_rice = jasmine|—
I|white_rice|Short-grain sushi rice, uncooked|img/350/white_rice.webp|0.5|cup|92|linear|opt_rice = sushi|—
I|water_rice|Water (rice)|img/350/water.webp|0.75|cup|177|1.5 × rice volume|—|—
I|salt_rice|Salt (rice water)|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|oil_rice|Neutral oil (rice)|img/350/oil.webp|0.25|tbsp|3.5|linear|—|—
I|oil_frying|Neutral oil (frying)|img/350/oil.webp|1|tsp|4.5|linear|—|—
I|bok_choy|Bok choy|img/350/bok_choy.webp|100|g|100|linear|—|leaves torn apart, washed
I|egg|Egg|img/350/egg.webp|1|pcs|55|linear|—|—
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|—|julienned
I|cucumber|Cucumber|img/350/cucumber.webp|37.5|g|37.5|linear|—|julienned (or shredded, traditional)
I|green_onion|Green onion|img/350/green_onion.webp|1|pcs|15|linear|—|white: julienned; green: chopped
I|sesame_seeds|Toasted sesame seeds|img/350/sesame_seeds.webp|1|tsp|3|linear|—|—
I|gochujang_sauce|Gochujang (sauce)|img/350/gochujang.webp|0.75|tbsp|13|linear|opt_sauce = bibimbap|—
I|sesame_oil_sauce|Toasted sesame oil (sauce)|img/350/toasted_sesame_oil.webp|0.25|tbsp|3.4|linear|opt_sauce = bibimbap|—
I|honey_sauce|Sugar or honey (sauce)|img/350/honey.webp|0.25|tbsp|5|linear|opt_sauce = bibimbap|—
I|rice_vinegar|Rice vinegar (sauce)|img/350/rice_vinegar.webp|0.25|tbsp|4|linear|opt_sauce = bibimbap|—
I|water_sauce|Water (sauce)|img/350/water.webp|0.25|tbsp|4|linear|opt_sauce = bibimbap|—
I|sesame_seeds_sauce|Sesame seeds (sauce)|img/350/sesame_seeds.webp|0.25|tsp|0.8|linear|opt_sauce = bibimbap|—
I|garlic_sauce|Garlic clove (sauce)|img/350/garlic.webp|0.25|pcs|1.5|linear, rounded up|opt_sauce = bibimbap|finely grated
S|K1|K|Dice the chicken|Cut the chicken breast into small 2 to 3 cm chunks.|action|—|(60 + 60 × servings) × skill_factor|—|Even chunks|chicken_breast|chef_knife, chopping_board|—
S|K2|K|Grate the garlic|Finely grate the garlic (for the marinade and the sauce).|action|—|(20 + 10 × servings) × skill_factor|—|Grated|garlic; garlic_sauce|microplane|—
S|M1|M|Mix the marinade|In a container, add the chicken with the oil, gochujang, light soy sauce, salt, MSG, white pepper, sugar or honey, garlic and sesame oil. Mix well and cover.|action|—|60|K1, K2|Chicken evenly coated|chicken_diced; oil_marinade; gochujang; light_soy_sauce; salt; msg; white_pepper; honey; garlic_grated; toasted_sesame_oil|bowl, spoon|—
S|M2|M|Marinate in the fridge|Leave it covered in the fridge.|wait|—|1800 (doc: at least 30 to 40 min, max 12 h)|M1|At least 30 min passed|—|bowl|—
S|R1|R|Measure rice and water|Measure the rice in cups. In a bowl, mix 1.5× its volume of water with the salt.|action|—|60|—|Measured|jasmine_rice / white_rice; water_rice; salt_rice|bowl|—
S|R2|R|Wash the rice|Wash the rice in lukewarm water in a sieve, stirring slowly, until the water runs clear. Let it drain a little.|action|—|120|R1|Water runs clear|—|sieve|—
S|R3|R|Toast the rice|Heat the oil in a pan and toast the rice, stirring slowly, until it smells fragrant. Don't really fry it.|action|medium|120|R2|Fragrant|oil_rice|pan, stovetop, spatula|—
S|R4|R|Water in|Add the salted water and stir once, very slowly.|action|medium|15|R3|Water in|water_rice|pan|—
S|R5|R|Boil down|Let it boil until the water level roughly matches the rice level.|wait|medium|300|R4|Water level at the rice|—|pan|—
S|R6|R|Cover, lowest heat|Set the lowest heat and cover. Don't stir or lift the lid.|wait|low|660 (doc: 10 to 12 min)|R5|Time is up|—|pan|—
S|R7|R|Rest, covered|Take it off the heat, keep the lid on.|wait|off|720 (doc: at least 10 to 15 min)|R6|Rested|—|pan|—
S|K3|K|Julienne the vegetables|Cut the carrot, the cucumber (easy option) and the white part of the green onions into matchsticks. Chop the green parts for topping.|action|—|(120 + 90 × servings) × skill_factor|—|Matchstick-sized|carrot; cucumber; green_onion|chef_knife, chopping_board|—
S|K4|K|Shred and salt the cucumber|Shred the cucumber, add a pinch of salt.|action|—|(30 + 30 × servings) × skill_factor|—|Shredded, salted|cucumber; salt|cheese_grater, bowl|opt_veg = traditional
S|K5|K|Let the cucumber rest|Let it rest.|wait|—|600 (doc: 10 min)|K4|10 min passed|—|bowl|opt_veg = traditional
S|K6|K|Squeeze the cucumber|Squeeze the water out.|action|—|30|K5|Dry-ish|—|—|opt_veg = traditional|sink
S|K7|K|Prepare the bok choy|Tear the bok choy apart by leaves and wash it thoroughly.|action|—|(60 + 30 × servings) × skill_factor|—|Clean leaves|bok_choy|—|—|sink
S|S1|F|Mix the sauce|Mix the gochujang, sesame oil, sugar or honey, rice vinegar, water, sesame seeds and grated garlic.|action|—|60|K2|Smooth sauce|gochujang_sauce; sesame_oil_sauce; honey_sauce; rice_vinegar; water_sauce; sesame_seeds_sauce; garlic_grated|bowl, spoon|opt_sauce = bibimbap
S|W1|W|Chicken into the pan|Heat a large pan on medium-high with a little oil. Add the marinated chicken.|action|medium-high|30|M2|Chicken spread out|chicken_marinated; oil_frying|pan, stovetop, spatula|—
S|W2|W|Stir-fry the chicken|Stir-fry until done.|wait|medium-high|510 (doc: 7 to 10 min)|W1|No pink inside|—|pan, spatula|—
S|W3|W|Chicken out|Take the chicken out of the pan.|action|off|15|W2|Chicken set aside|—|pan, spatula|—
S|W4|W|Water and oil in the pan|Clean the pan (or use another). While cold, add a few tbsp of water and a few tsp of oil, then heat it.|action|medium|60|W3|Hot and steaming|oil_frying|pan, stovetop|—
S|W5|W|Steam-fry the bok choy|Add the bok choy with a little salt, stirring. Don't overcook it.|action|medium|180|W4, K7|Just wilted, still green|bok_choy_ready; salt|pan, spatula|—
S|W6|W|Sauté the carrot|Sauté the julienned carrot for about 1 minute.|action|medium|60|W5, K3|Slightly soft|veg_julienned|pan, spatula|opt_veg = traditional
S|E1|E|Fry the eggs|Fry the eggs sunny side up in a small pan with a little oil, one at a time. Keep the yolk a little runny, salt a tiny bit, add a splash of sesame oil near the end.|wait|medium|180 × servings|W3|White set, yolk runny|egg; oil_frying; salt; toasted_sesame_oil|pan, stovetop, spatula|—
S|F1|F|Plate it|Rice first, the chicken next to it, the bok choy next to it, then the vegetables and the egg on top. Drizzle light soy sauce, add the green onion greens, 1 tsp of sauce and the sesame seeds.|action|—|60 + 45 × servings|R7, W5, E1, K3, S1|Served|rice_ready; chicken_ready; bok_choy_cooked; veg_julienned; eggs_fried; light_soy_sauce; green_onion; sauce; sesame_seeds|bowl, spoon|—
`
  },
  {
    id: 'honey_tarragon_chicken', name: 'Honey-Tarragon Chicken', image: 'img/350/tarragon.webp',
    rows: `
O|opt_wine|wine|With white wine|TRUE
O|opt_wine|alcohol_free|Alcohol-free: the same amount of chicken stock + 1 tsp lemon juice per 4|FALSE
I|chicken_breast|Chicken breast fillet|img/350/chicken_breast.webp|150|g|150|linear|—|3 cm chunks
I|oil_marinade|Neutral oil (marinade)|img/350/oil.webp|0.25|tbsp|3.5|linear|—|—
I|mustard|Dijon mustard|img/350/mustard.webp|0.5|tbsp|8|linear|—|—
I|honey|Honey|img/350/honey.webp|0.5|tbsp|10.5|linear|—|—
I|tarragon|Dried tarragon|img/350/tarragon.webp|0.25|tsp|0.3|linear|—|—
I|white_wine|Dry white wine|img/350/white_wine.webp|30|ml|30|linear|opt_wine = wine|—
I|chicken_stock|Chicken stock (instead of wine)|img/350/chicken_stock.webp|30|ml|30|linear|opt_wine = alcohol_free|—
I|lemon_juice_af|Lemon juice (instead of wine)|img/350/lemon_juice.webp|0.25|tsp|1.2|linear|opt_wine = alcohol_free|—
I|salt|Salt (marinade)|img/350/salt.webp|0.125|tsp|0.75|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|msg|MSG|img/350/msg.webp|0.0625|tsp|0.3|linear|—|—
I|white_rice|Long-grain white rice|img/350/white_rice.webp|0.375|cup|70|linear|—|—
I|water_rice|Water (rice)|img/350/water.webp|0.5625|cup|133|1.5 × rice volume|—|—
I|salt_rice|Salt (rice water)|img/350/salt.webp|0.125|tsp|0.75|linear|—|—
I|oil|Neutral oil (pan)|img/350/oil.webp|0.25|tbsp|3.5|linear|—|—
I|onion|Onion, medium|img/350/onion.webp|37.5|g|37.5|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.75|pcs|4|linear, rounded up|—|diced
I|white_mushroom|White mushrooms|img/350/white_mushroom.webp|60|g|60|linear|—|sliced
I|cream|Cooking cream (min. 20% fat)|img/350/cream.webp|40|ml|40|linear|—|—
I|paprika_powder|Sweet paprika|img/350/paprika_powder.webp|0.125|tsp|0.3|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|0.375|tsp|1.8|linear|—|—
I|parsley|Dried parsley|img/350/parsley.webp|0.25|tsp|0.1|linear|—|—
S|K1|K|Dice the chicken|Cut the chicken breast into chunks (about 3 cm).|action|—|(60 + 60 × servings) × skill_factor|—|Even chunks|chicken_breast|chef_knife, chopping_board|—
S|M1|M|Mix the marinade|Add the chicken to a container with a little oil, salt, mustard, honey, tarragon, the white wine (or stock + lemon juice), black pepper and a very small amount of MSG. Mix well and cover.|action|—|60|K1|Chicken evenly coated|chicken_diced; oil_marinade; salt; mustard; honey; tarragon; white_wine / chicken_stock + lemon_juice_af; ground_black_pepper; msg|bowl|—
S|M2|M|Marinate in the fridge|Leave it covered in the fridge.|wait|—|3600 (doc: about an hour)|M1|About 1 hour passed|—|bowl|—
S|K2|K|Dice the onion|Peel and dice the onion.|action|—|(30 + 60 × servings) × skill_factor|—|Diced|onion|chef_knife, chopping_board|—
S|K3|K|Dice the garlic|Peel and dice the garlic.|action|—|(30 + 20 × servings) × skill_factor|—|Diced|garlic|chef_knife, chopping_board|—
S|K4|K|Slice the mushrooms|Slice the white mushrooms.|action|—|(30 + 60 × servings) × skill_factor|—|Sliced|white_mushroom|chef_knife, chopping_board|—
S|R1|R|Measure rice and water|Measure the rice in cups. In a bowl, mix 1.5× its volume of water with the salt.|action|—|60|—|Measured|white_rice; water_rice; salt_rice|bowl|—
S|R2|R|Wash the rice|Wash the rice in lukewarm water in a sieve, stirring slowly, until the water runs clear. Let it drain a little.|action|—|120|R1|Water runs clear|—|sieve|—
S|R3|R|Bring to a boil|Put the rice and the water in the pot and bring it to a boil.|wait|medium|300|R2|Water level roughly at the rice|—|cooking_pot, stovetop|—
S|R4|R|Cover, lowest heat|Cover and cook on the lowest setting.|wait|low|660 (doc: 10 to 12 min)|R3|Time is up|—|cooking_pot|—
S|R5|R|Rest, covered|Take it off the heat, keep it covered, don't open it.|wait|off|720 (doc: at least 10 to 15 min)|R4|Rested|—|cooking_pot|—
S|P1|P|Onion into the pan|Heat a little oil in the pan and add the onion.|action|medium|30|K2|Onion sizzling|oil; onion_diced|pan, stovetop, spatula|—
S|P2|P|Fry the onion|Fry for a couple of minutes.|wait|medium|120|P1|Softening|—|pan, spatula|—
S|P3|P|Garlic in|Add the garlic and fry until glassy and fragrant.|wait|medium|120|P2, K3|Glassy, fragrant|garlic_diced|pan, spatula|—
S|P4|P|Mushrooms in|Add the mushrooms and fry until their water evaporates and they start to brown.|wait|medium|300 (doc: about 5 min)|P3, K4|Dry and browning|mushrooms_sliced|pan, spatula|—
S|P5|P|Sear the chicken|Lift the chicken out of the marinade (keep the marinade), put it in the pan and sear it.|wait|medium|210 (doc: 3 to 4 min)|P4, M2|Seared on the outside|chicken_marinated|pan, spatula|—
S|P6|P|Marinade in|Pour in the rest of the marinade and let it bubble so the alcohol cooks off.|wait|medium|270 (doc: 4 to 5 min)|P5|Bubbled 4 to 5 min|—|pan|—
S|P7|P|Cream in, simmer|Add the cream and simmer gently on medium heat, stirring (honey burns easily).|wait|medium|300|P6|Largest chunk white all the way through|cream|pan, spatula|—
S|P8|P|Taste and finish|Taste and adjust. Add the paprika and a little lemon juice and cook a bit more, stirring.|check|medium|90|P7|Tastes right|paprika_powder; lemon_juice; salt|pan, spatula|—
S|F1|F|Plate it|Rice first, then the chicken and mushrooms next to it. Sprinkle dried parsley on top.|action|—|30 + 30 × servings|P8, R5|Served|rice_ready; chicken_ready; parsley|plates, spatula|—
`
  },
  {
    id: 'caesar_salad', name: 'Caesar Salad', image: 'img/350/romaine_lettuce.webp',
    rows: `
O|opt_mayo|homemade|Homemade (see Homemade Mayonnaise)|TRUE
O|opt_mayo|store|Store-bought|FALSE
O|opt_chicken|cutlets|Thick fillets halved into thin cutlets (faster, more even)|TRUE
O|opt_chicken|whole|Whole fillets (cook longer, on slightly lower heat)|FALSE
I|romaine_lettuce|Romaine lettuce|img/350/romaine_lettuce.webp|0.5|head|120|linear|—|separated, washed, dried
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|140|g|140|linear|—|patted dry
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.75|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|oil|Neutral oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|parmesan|Parmesan|img/350/parmesan.webp|20|g|20|linear|—|grated
I|croutons|Plain croutons|img/350/croutons.webp|20|g|20|linear|—|—
I|mayonnaise|Mayonnaise|img/350/mayonnaise.webp|2|tbsp|30|linear|—|—
I|worcestershire_sauce|Worcestershire sauce|img/350/worcestershire_sauce.webp|0.5|tsp|2.5|linear|—|—
S|Y1|K|Make the mayonnaise|Make the mayonnaise from the Homemade Mayonnaise recipe (about 2 tbsp per person is needed).|action|—|300 (see Homemade Mayonnaise)|—|Thick mayonnaise|mayonnaise|—|opt_mayo = homemade
S|L1|L|Wash the lettuce|Separate the romaine into leaves and wash them well in a colander.|action|—|(60 + 60 × servings) × skill_factor|—|Clean leaves|romaine_lettuce|colander|—
S|L2|L|Dry the lettuce|Toss it, then dry it with a kitchen towel or a salad spinner.|action|—|60 + 30 × servings|L1|No water on the leaves|—|salad_spinner|—
S|C1|C|Pat the chicken dry|Take the chicken out, pat it dry with paper towel (throw it away right away).|action|—|30|—|Dry surface|chicken_breast|chopping_board|—
S|C2|C|Halve thick fillets|Slice thick fillets horizontally into two thinner cutlets of even thickness.|action|—|(30 + 30 × servings) × skill_factor|C1|Even thickness|—|chef_knife, chopping_board|opt_chicken = cutlets
S|C3|C|Season the chicken|Rub it well in a bowl with salt, a little black pepper and some oil.|action|—|45|C2|Evenly coated|salt; ground_black_pepper; oil|bowl|—
S|C4|C|Chicken into the pan|Heat a little oil in the pan on medium-high and add the chicken.|action|medium-high|30|C3|Sizzling|oil|pan, stovetop, tongs|—
S|C5|C|Fry side 1|Fry the first side.|wait|medium-high|210 cutlets (doc: 3 to 4 min) / 300 whole (doc: about 5 min)|C4|Golden underneath|—|pan|—
S|C6|C|Flip|Turn the chicken over.|action|medium-high|15|C5|Flipped|—|tongs|—
S|C7|C|Fry side 2|Fry the second side.|wait|medium-high|210 cutlets (doc: 3 to 4 min) / 300 whole (doc: about 5 min)|C6|Golden underneath|—|pan|—
S|C8|C|Check doneness|Cut the thickest piece in half: it must be white all the way through.|check|off|20|C7|White throughout|—|chef_knife|—|stove
S|C9|C|Let it rest|Take it out and let it rest.|wait|—|270 (doc: 4 to 5 min)|C8|Rested|—|chopping_board|—
S|C10|C|Dice the chicken|Dice it into 1 to 2 cm cubes.|action|—|(30 + 30 × servings) × skill_factor|C9|Cubes|—|chef_knife, chopping_board|—
S|K1|K|Grate the parmesan|Grate the parmesan (skip if already grated).|action|—|(30 + 30 × servings) × skill_factor|—|Grated|parmesan|cheese_grater|—
S|F1|F|Plate it|Add the lettuce. Scatter the chicken cubes, the parmesan and the croutons on it. Sprinkle a little Worcestershire sauce and add some mayonnaise on top.|action|—|30 + 30 × servings|L2, C10, K1, Y1|Served|lettuce_dry; chicken_cubes; parmesan_grated; croutons; worcestershire_sauce; mayonnaise|plates|—
`
  },
  {
    id: 'breakfast_muffin', name: 'Breakfast Muffin', image: 'img/350/egg.webp',
    vars: function (c) { return { muffins: Math.min(12, Math.ceil(2.5 * c.servings)) }; },
    rows: `
O|opt_eggs|whole|Whole, unbroken (runny yolk possible, check at 12 to 14 min)|TRUE
O|opt_eggs|whisked|Whisked (puffier, 15 to 20 min, fill cups max ¾)|FALSE
O|opt_cheese|cheddar|Cheddar|TRUE
O|opt_cheese|mozzarella|Mozzarella or Trappist (milder)|FALSE
I|egg|Egg|img/350/egg.webp|1|pcs per muffin|55|per muffin|—|—
I|bacon|Bacon strips|img/350/bacon.webp|1|pcs per muffin|15|per muffin|—|—
I|cherry_tomato|Cherry tomato|img/350/cherry_tomato.webp|1|pcs per muffin|15|per muffin|—|halved
I|cheddar|Cheddar, grated|img/350/cheddar.webp|10|g per muffin|10|per muffin|opt_cheese = cheddar|grated
I|mozzarella|Mozzarella or Trappist|img/350/mozzarella.webp|10|g per muffin|10|per muffin|opt_cheese = mozzarella|grated
I|butter|Soft butter|img/350/butter.webp|1.25|g per muffin|1.25|per muffin|—|for greasing the cups
I|salt|Salt|img/350/salt.webp|0.02|tsp per muffin|0.12|per muffin|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.02|tsp per muffin|0.05|per muffin|—|—
S|O1|O|Preheat the oven|Turn the oven on to 190 °C conventional (170 °C fan), middle rack.|action|190 °C (170 °C fan)|15|—|Oven on|—|oven|—
S|O2|O|Wait for the oven|Let the oven heat up.|wait|190 °C (170 °C fan)|600|O1|Temperature reached|—|oven|—
S|T1|T|Butter the cups|Butter the cups of the muffin pan, sides and bottom.|action|—|30 + 15 × muffins|—|All cups greased|butter|muffin_tin|—
S|P1|P|Par-fry the bacon|Fry the bacon slices briefly, not until they are firm.|wait|medium|120|—|Lightly cooked, still bendy|bacon|pan, stovetop|—
S|K1|K|Halve the tomatoes|Cut the cherry tomatoes in half.|action|—|(10 + 10 × muffins) × skill_factor|—|Halved|cherry_tomato|chef_knife, chopping_board|—
S|K2|K|Grate the cheese|Grate the cheese if it is not already grated.|action|—|(20 + 5 × muffins) × skill_factor|—|Grated|cheddar / mozzarella|cheese_grater|—
S|T2|T|Line the cups with bacon|Place a bacon slice around the wall of each cup.|action|—|10 + 15 × muffins|T1, P1|Every cup lined|bacon_parfried|muffin_tin|—
S|T3|T|Eggs in|Crack one egg into each cup (whisked option: break it up with a fork). Add salt and pepper. Cups should be about half full: it puffs up while baking.|action|—|15 + 15 × muffins|T2|One egg per cup|egg; salt; ground_black_pepper|muffin_tin, fork|—
S|T4|T|Tomatoes and cheese|Add a couple of tomato halves and some grated cheese to each cup. Whisked eggs: fill each cup no more than ¾ including fillings.|action|—|10 + 10 × muffins|T3, K1, K2|All cups filled|tomatoes_halved; cheese_grated|muffin_tin|—
S|O3|O|Bake|Bake until the top is slightly browned and the center is set and doesn't wobble. Whole egg with runny yolk: start checking at 12 to 14 min.|wait|190 °C (170 °C fan)|900 whole / 1050 whisked (doc: 15 to 20 min; check whole eggs at 12 to 14 min)|O2, T4|Center set, no wobble|—|oven, muffin_tin|—
S|O4|O|Rest in the pan|Take the pan out and let them rest.|wait|off|150 (doc: 2 to 3 min)|O3|Rested|—|muffin_tin|—
S|F1|F|Release and serve|Run a thin knife around each muffin, then lift them out with a fork.|action|—|20 + 10 × muffins|O4|Out of the pan|muffins_rested|knife, fork, plates|—
`
  },
  {
    id: 'summer_salad', name: 'Summer Salad', image: 'img/350/lettuce.webp',
    rows: `
O|opt_cheese|feta|Feta|TRUE
O|opt_cheese|parmesan|Parmesan|FALSE
O|opt_cheese|both|Both|FALSE
O|opt_nuts|raw|Raw|TRUE
O|opt_nuts|toasted|Toasted (dry pan, medium heat, 2 to 3 min)|FALSE
O|opt_dressing|plain|Plain|TRUE
O|opt_dressing|honey|With 1 tsp honey per 4 (softer, rounder)|FALSE
I|lettuce|Mixed lettuce leaves|img/350/lettuce.webp|70|g|70|linear|—|separated, washed, dried
I|carrot|Carrot|img/350/carrot.webp|0.5|pcs|40|linear|—|washed, lightly peeled, in ribbons
I|cucumber|Cucumber|img/350/cucumber.webp|0.25|pcs|75|linear|—|ribbons with skin, no seedy core
I|basil|Fresh basil leaves|img/350/basil.webp|5|leaves|2|linear|—|torn by hand
I|mint|Fresh mint leaves|img/350/mint.webp|5|leaves|1|linear|—|torn by hand
I|pine_nuts|Nuts or seeds|img/350/pine_nuts.webp|15|g|15|linear|—|raw or toasted
I|croutons|Unflavored croutons|img/350/croutons.webp|15|g|15|linear|—|—
I|feta_cheese|Feta|img/350/feta_cheese.webp|30|g|30|linear|opt_cheese = feta or both|crumbled
I|parmesan|Parmesan|img/350/parmesan.webp|10|g|10|linear|opt_cheese = parmesan or both|—
I|apple_cider_vinegar|Apple cider vinegar|img/350/apple_cider_vinegar.webp|0.5|tbsp|7.5|linear|—|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|1.5|tbsp|20|linear|—|—
I|mustard|Dijon mustard|img/350/mustard.webp|0.25|tsp|1.5|linear|—|—
I|tarragon|Dried tarragon|img/350/tarragon.webp|0.125|tsp|0.1|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.75|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|honey|Honey|img/350/honey.webp|0.25|tsp|1.8|linear|opt_dressing = honey|—
S|L1|L|Wash the leaves|Separate the lettuce into leaves and wash them thoroughly in a colander.|action|—|(60 + 60 × servings) × skill_factor|—|Clean leaves|lettuce|colander|—
S|L2|L|Let the leaves dry|Let them dry completely: no wet leaves. A salad spinner or towel speeds it up.|wait|—|300|L1|No water left|—|colander, salad_spinner|—
S|V1|V|Carrot ribbons|Wash and lightly peel the carrots, then peel thin ribbons with the vegetable peeler.|action|—|(60 + 60 × servings) × skill_factor|—|Thin ribbons|carrot|vegetable_peeler|—
S|V2|V|Cucumber ribbons|Peel ribbons from all sides of the unpeeled cucumber, skin included. Stop at the seedy core.|action|—|(60 + 45 × servings) × skill_factor|—|Ribbons, core left over|cucumber|vegetable_peeler|—
S|V3|V|Tear the herbs|Tear the basil and mint by hand (don't cut them).|action|—|30 + 15 × servings|—|Torn|basil; mint|—|—
S|N1|N|Toast the nuts|Toast the nuts in a dry pan over medium heat, stirring.|wait|medium|150 (doc: 2 to 3 min)|—|Golden, fragrant|pine_nuts|pan, stovetop|opt_nuts = toasted
S|D1|D|Shake the dressing|In a small jar: 1 part apple cider vinegar, 3 parts olive oil, salt, pepper, Dijon mustard, tarragon (and honey). Close and shake until opaque and even.|action|—|90|—|Opaque, consistent|apple_cider_vinegar; extra_virgin_olive_oil; salt; ground_black_pepper; mustard; tarragon; honey|jar|—
S|F1|F|Combine|In the bowl: leaves, carrot and cucumber ribbons, herbs, nuts, croutons, feta and/or parmesan.|action|—|45 + 20 × servings|L2, V1, V2, V3, N1|All in the bowl|leaves_dry; carrot_ribbons; cucumber_ribbons; herbs_torn; pine_nuts; croutons; feta_cheese; parmesan|bowl|—
S|F2|F|Dress and plate|Pour the dressing on the salad, mix well and plate.|action|—|30 + 15 × servings|F1, D1|Served|dressing|bowl, plates|—
`
  },
  {
    id: 'tozza', name: 'Tozza', image: 'img/350/tortilla.webp',
    rows: `
O|opt_version|tomato|Tomato-y: pizza sauce, ham, cheese|TRUE
O|opt_version|sour_cream|Sour cream: bacon, garlic, red onion, cheese|FALSE
O|opt_cooking|oven|Oven, 6 to 8 min|TRUE
O|opt_cooking|panini|Panini press, 6 to 7 min|FALSE
I|tortilla|Large flour tortilla (≈25 cm)|img/350/tortilla.webp|1|pcs|60|linear|—|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|50|g|50|linear|opt_version = tomato|—
I|salt|Salt (sauce)|img/350/salt.webp|0.125|tsp|0.75|linear|opt_version = tomato|—
I|sugar|Sugar (sauce)|img/350/sugar.webp|0.125|tsp|0.5|linear|opt_version = tomato|—
I|msg|MSG (sauce)|img/350/msg.webp|0.0625|tsp|0.3|linear|opt_version = tomato|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|opt_version = tomato|—
I|thyme|Dried thyme|img/350/thyme.webp|0.125|tsp|0.1|linear|opt_version = tomato|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|0.25|tbsp|3.4|linear|opt_version = tomato|—
I|balsamic_vinegar|Balsamic vinegar|img/350/balsamic_vinegar.webp|0.25|tsp|1.3|linear|opt_version = tomato|—
I|ham|Ham|img/350/ham.webp|40|g|40|linear|opt_version = tomato|—
I|grated_cheese|Grated cheese (mozzarella or Trappist)|img/350/grated_cheese.webp|50|g|50|linear; 40 g in the sour cream version|—|grated
I|sour_cream|Sour cream|img/350/sour_cream.webp|2|tbsp|40|linear|opt_version = sour_cream|—
I|bacon|Bacon|img/350/bacon.webp|40|g|40|linear|opt_version = sour_cream|diced, lightly stir-fried
I|garlic|Garlic clove, small|img/350/garlic.webp|1|pcs|4|linear|opt_version = sour_cream|diced
I|red_onion|Red onion|img/350/red_onion.webp|0.25|pcs|35|linear|opt_version = sour_cream|diced
S|O1|O|Preheat the oven|Turn the oven on to 220 °C conventional (200 °C fan) with the baking tray inside.|action|220 °C (200 °C fan)|15|—|Oven on|—|oven|opt_cooking = oven
S|O2|O|Wait for the oven|Let the oven and the tray heat up.|wait|220 °C (200 °C fan)|600|O1|Temperature reached|—|oven|opt_cooking = oven
S|S1|S|Make the pizza sauce|Passata as the base; add salt, sugar, MSG, oregano, thyme, a little olive oil and balsamic vinegar. Stir, or close the container and shake until even.|action|—|90|—|Even sauce|tomato_passata; salt; sugar; msg; oregano; thyme; extra_virgin_olive_oil; balsamic_vinegar|bowl, spoon|opt_version = tomato
S|K1|K|Dice the toppings|Dice the bacon, the garlic and the red onion.|action|—|(60 + 60 × servings) × skill_factor|—|Diced|bacon; garlic; red_onion|chef_knife, chopping_board|opt_version = sour_cream
S|P1|K|Stir-fry the bacon|Stir-fry the diced bacon a little before baking.|wait|medium|180|K1|Lightly cooked|—|pan, stovetop|opt_version = sour_cream
S|A1|A|Spread and top|Spread the pizza sauce (or sour cream) on each tortilla, leaving about 1 cm at the edge. Add the toppings: ham and cheese (or bacon, garlic, red onion and cheese).|action|—|30 + 45 × servings|S1, P1|All tortillas topped|tortilla; pizza_sauce / sour_cream; ham / bacon_fried, toppings_diced; grated_cheese|spoon|—
S|O3|O|Bake in the oven|Bake on the hot tray.|wait|220 °C (200 °C fan)|420 (doc: 6 to 8 min)|O2, A1|Tortilla edge browned|tozza_raw|oven|opt_cooking = oven
S|O4|O|Panini press|Set the press so it leaves a gap and the top surface almost touches the toppings. Cook.|wait|panini press|390 (doc: 6 to 7 min)|A1|Tortilla edge browned|tozza_raw|panini_press|opt_cooking = panini
S|F1|F|Slice and serve|Take them out and slice each tozza into 4.|action|—|10 + 15 × servings|O3, O4|Sliced|tozza_baked|chef_knife, chopping_board|—
`
  },
  {
    id: 'tomato_soup', name: 'Tomato Soup', image: 'img/350/tomato.webp',
    rows: `
O|opt_texture|smooth|Smooth (blended)|TRUE
O|opt_texture|chunky|Chunky (skip the blender)|FALSE
O|opt_liquid|water|Water|TRUE
O|opt_liquid|stock|Vegetable stock (fuller taste)|FALSE
O|opt_finish|plain|Plain|TRUE
O|opt_finish|cream_basil|With a splash of cream or a few fresh basil leaves|FALSE
I|olive_oil|Olive oil (regular, not extra virgin)|img/350/olive_oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion, medium|img/350/onion.webp|37.5|g|37.5|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.75|pcs|4|linear, rounded up|—|diced
I|flour|Flour|img/350/flour.webp|0.5|tbsp|5|linear|—|—
I|water|Water|img/350/water.webp|125|ml|125|linear|opt_liquid = water|—
I|vegetable_stock|Vegetable stock|img/350/vegetable_stock.webp|125|ml|125|linear|opt_liquid = stock|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|125|g|125|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|7.5|g|7.5|linear|—|—
I|diced_tomatoes|Diced tomatoes (canned)|img/350/tomato.webp|100|g|100|linear|—|—
I|cherry_tomato|Cherry tomatoes|img/350/cherry_tomato.webp|50|g|50|linear|—|halved
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.125|tsp|0.1|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.375|tsp|1.5|linear|—|—
I|grated_cheese|Grated cheese|img/350/grated_cheese.webp|20|g|20|linear|—|grated
I|cream|Cream|img/350/cream.webp|1|tbsp|15|linear|opt_finish = cream_basil|—
I|basil|Fresh basil leaves|img/350/basil.webp|2|leaves|1|linear|opt_finish = cream_basil|—
S|K1|K|Dice the onion|Peel and dice the onion.|action|—|(30 + 60 × servings) × skill_factor|—|Diced|onion|chef_knife, chopping_board|—
S|K2|K|Dice the garlic|Peel and dice the garlic.|action|—|(30 + 20 × servings) × skill_factor|—|Diced|garlic|chef_knife, chopping_board|—
S|P1|P|Onion into the pot|Heat a little olive oil in the large pot and add the onion.|action|medium|30|K1|Sizzling|olive_oil; onion_diced|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Soften the onion|Fry for a couple of minutes.|wait|medium|120|P1|Softening|—|cooking_pot, wooden_spoon|—
S|P3|P|Garlic, salt, pepper|Add the garlic, salt and pepper. Stir well.|action|medium|60|P2, K2|Fragrant|garlic_diced; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|K3|K|Halve the cherry tomatoes|Cut the cherry tomatoes in half.|action|—|(20 + 30 × servings) × skill_factor|—|Halved|cherry_tomato|chef_knife, chopping_board|—
S|P4|P|Flour and tomato paste|Add a little flour and the tomato paste, keep stirring until the flour starts to brown a little.|action|medium|120|P3|Flour lightly browned|flour; tomato_paste|cooking_pot, wooden_spoon|—
S|P5|P|Liquid in, slowly|Pour in the water (or stock) gradually while stirring so the flour doesn't form lumps.|action|medium|60|P4|No lumps|water / vegetable_stock|cooking_pot, wooden_spoon|—
S|P6|P|Tomatoes and seasoning|Add the passata, diced tomatoes and cherry tomatoes. Season with salt, oregano, thyme and 1 to 2 tsp sugar per 4. It should be fairly thick.|action|medium|60|P5, K3|All in|tomato_passata; diced_tomatoes; cherry_halved; salt; oregano; thyme; sugar|cooking_pot, wooden_spoon|—
S|P7|P|Bring to a boil|Let it come to a boil.|wait|medium|300|P6|Bubbling|—|cooking_pot|—
S|P8|P|Simmer|Simmer on low heat, stirring now and then.|wait|low|1500 (doc: 20 to 30 min)|P7|Time is up|—|cooking_pot, wooden_spoon|—
S|K4|K|Grate the cheese|Grate the cheese if it is not already grated.|action|—|(20 + 15 × servings) × skill_factor|—|Grated|grated_cheese|cheese_grater|—
S|P9|P|Blend|Take it off the heat and blend with the immersion blender until there are no clumps.|action|off|90|P8|Smooth|—|cooking_pot, immersion_blender|opt_texture = smooth
S|F1|F|Serve|Ladle into bowls and add grated cheese on top (and a splash of cream or a few basil leaves, if chosen).|action|—|30 + 20 × servings|P9, P8, K4|Served|soup_smooth; cheese_ready; cream; basil|ladle, bowl|—
`
  },
  {
    id: 'french_onion_soup', name: 'French Onion Soup', image: 'img/350/onion.webp',
    rows: `
O|opt_stock|beef|Beef stock (classic)|TRUE
O|opt_stock|chicken_veg|Chicken or vegetable stock|FALSE
O|opt_stock|water|Water (lightest)|FALSE
I|onion|Onions|img/350/onion.webp|250|g|250|linear|—|halved, thin half-moons
I|oil|Neutral oil|img/350/oil.webp|0.25|tbsp|3.5|linear|—|—
I|butter|Butter|img/350/butter.webp|10|g|10|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|white_pepper|White pepper|img/350/white_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|flour|Flour|img/350/flour.webp|0.5|tbsp|5|linear|—|—
I|white_wine|Dry white wine|img/350/white_wine.webp|50|ml|50|linear|—|—
I|beef_stock|Beef stock|img/350/beef_stock.webp|375|ml|375|linear|opt_stock = beef|—
I|chicken_stock|Chicken or vegetable stock|img/350/chicken_stock.webp|375|ml|375|linear|opt_stock = chicken_veg|—
I|water|Water|img/350/water.webp|375|ml|375|linear|opt_stock = water|—
I|bay_leaf|Bay leaf|img/350/bay_leaf.webp|1|pcs per pot|0.2|fixed: 1 per pot|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.125|tsp|0.1|linear|—|—
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.03125|tsp|0.07|linear|—|freshly grated or ground
I|bread|Baguette slices|img/350/bread.webp|2|slices|50|linear|—|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|1|tsp|4.5|linear|—|—
I|grated_cheese|Gruyère, Comté or Emmental, grated|img/350/grated_cheese.webp|40|g|40|linear|—|grated
S|K1|K|Slice the onions|Halve the onions and slice them thinly into half-moons.|action|—|(60 + 180 × servings) × skill_factor|—|Thin half-moons|onion|chef_knife, chopping_board|—
S|P1|P|Onions into the pot|Heat the oil and butter in the large pot on medium-low. Add the onions with a little salt and white pepper.|action|medium-low|60|K1|All in, coated|oil; butter; onions_sliced; salt; white_pepper|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Caramelize|Keep stirring and frying. If it sticks to the bottom, add a splash of water and continue.|wait|medium-low|2700 (doc: at least 45 min)|P1|Sticky and golden-brown|—|cooking_pot, wooden_spoon|—
S|P3|P|Flour in|Add the flour for the last couple of minutes, stirring.|action|medium-low|150|P2|Flour browning|flour|cooking_pot, wooden_spoon|—
S|P4|P|Wine in, reduce|Add the white wine and let it reduce by half, scraping the bottom of the pot.|action|medium|210 (doc: 3 to 4 min)|P3|Reduced by half|white_wine|cooking_pot, wooden_spoon|—
S|P5|P|Stock and herbs|Add the stock (or water) and salt to taste. Add a pinch of nutmeg, the bay leaf and the thyme.|action|medium|60|P4|All in|beef_stock / chicken_stock / water; salt; nutmeg; bay_leaf; thyme|cooking_pot, microplane|—
S|P6|P|Simmer|Simmer, stirring now and then.|wait|low|1650 (doc: 25 to 30 min)|P5|Time is up|—|cooking_pot, wooden_spoon|—
S|O1|O|Turn on the broiler|Switch the oven broiler on.|action|grill|15|—|Broiler on|—|oven|—
S|O2|O|Let the broiler heat|Let it heat up.|wait|grill|300|O1|Hot|—|oven|—
S|B1|O|Bread on the tray|Lay the bread slices on the tray, drizzle with olive oil and top with grated cheese.|action|—|30 + 30 × servings|—|All slices topped|bread; extra_virgin_olive_oil; grated_cheese|tray|—
S|B2|O|Broil the toasts|Broil until the cheese is melted and a little browned.|wait|grill|270 (doc: 4 to 5 min)|B1, O2|Cheese melted, lightly browned|—|oven, tray|—
S|P7|P|Season, bay leaf out|Take out the bay leaf and season to taste.|check|off|60|P6|Tastes right|salt|cooking_pot|—
S|F1|F|Serve|Ladle the soup into bowls and serve the cheese toasts next to it.|action|—|30 + 20 × servings|P7, B2|Served|soup_ready; toasts_ready|ladle, bowl|—
`
  },
  {
    id: 'tzatziki', name: 'Tzatziki', image: 'img/350/yogurt.webp',
    rows: `
O|opt_dill|fresh|Fresh dill|TRUE
O|opt_dill|dried|Dried dill|FALSE
O|opt_acid|lemon|Lemon juice|TRUE
O|opt_acid|vinegar|White wine vinegar|FALSE
I|cucumber|English cucumber, large|img/350/cucumber.webp|60|g|60|linear|—|grated
I|yogurt|Full-fat Greek yogurt (10%)|img/350/yogurt.webp|70|g|70|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.25|pcs|1.5|linear, rounded up|—|finely grated
I|dill|Fresh dill, chopped|img/350/dill.webp|1|tsp|0.5|linear|opt_dill = fresh|chopped
I|dill_dried|Dried dill|img/350/dill.webp|0.17|tsp|0.1|linear|opt_dill = dried|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|0.5|tsp|2.5|linear|opt_acid = lemon|—
I|white_vinegar|White wine vinegar|img/350/white_vinegar.webp|0.5|tsp|2.5|linear|opt_acid = vinegar|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|0.5|tsp|2.3|linear|—|—
I|salt|Salt|img/350/salt.webp|0.085|tsp|0.5|linear|—|—
I|ground_black_pepper|Black pepper|img/350/ground_black_pepper.webp|0.02|tsp|0.05|linear|—|—
S|C1|C|Grate the cucumber|Grate the cucumber with a cheese grater into a bowl, add a pinch of salt and mix well.|action|—|(60 + 40 × servings) × skill_factor|—|All grated and salted|cucumber; salt|cheese_grater, bowl|—
S|C2|C|Let it drain|Put it into a colander and let it sit.|wait|—|750 (doc: 10 to 15 min)|C1|Time is up|—|colander|—
S|G1|G|Grate the garlic|Grate the garlic finely.|action|—|(20 + 10 × servings) × skill_factor|—|Finely grated|garlic|microplane|—
S|G2|G|Chop the dill|Chop the fresh dill.|action|—|(30 + 10 × servings) × skill_factor|—|Chopped|dill|chef_knife, chopping_board|opt_dill = fresh
S|C3|C|Squeeze the cucumber|Squeeze out all the liquid.|action|—|30 + 15 × servings|C2|No more liquid|—|colander|—|sink
S|M1|M|Mix it|In a bowl: the cucumber, the Greek yogurt, the garlic, the dill, some lemon juice (or vinegar), a pinch of salt if needed, the olive oil and black pepper. Stir well.|action|—|60|C3, G1, G2|Evenly mixed|cucumber_ready; yogurt; garlic_grated; dill_chopped / dill_dried; lemon_juice / white_vinegar; salt; extra_virgin_olive_oil; ground_black_pepper|bowl, spoon|—
S|M2|M|Chill|Cover it and put it in the fridge.|wait|—|3600 (doc: ready in 1 hour)|M1|1 hour passed|—|bowl|—
`
  },
  {
    id: 'overnight_oats', name: 'Overnight Oats', image: 'img/350/rolled_oats.webp',
    unit: 'jar',
    rows: `
O|opt_sweetener|honey|Honey|TRUE
O|opt_sweetener|sugar|Sugar|FALSE
O|opt_sweetener|erythritol|Erythritol (diet-friendly)|FALSE
O|opt_milk|drink|Coconut milk drink (carton)|TRUE
O|opt_milk|canned|Canned coconut milk mixed 1:1 with water (richer)|FALSE
O|opt_toppings|evening|Added in the evening (soft)|TRUE
O|opt_toppings|morning|In the morning (fruit stays fresh, chocolate stays crunchy)|FALSE
I|rolled_oats|Rolled oats|img/350/rolled_oats.webp|50|g|50|linear|—|—
I|chia_seeds|Chia seeds|img/350/chia_seeds.webp|1|tbsp|12|linear|—|—
I|coconut_milk|Coconut milk|img/350/coconut_milk.webp|165|ml|165|linear; half if canned|—|—
I|water|Water (for canned coconut milk)|img/350/water.webp|82.5|ml|82.5|linear|opt_milk = canned|—
I|yogurt|Yogurt|img/350/yogurt.webp|1|tbsp|20|linear|—|—
I|honey|Honey|img/350/honey.webp|1.5|tsp|10|linear|opt_sweetener = honey|—
I|sugar|Sugar|img/350/sugar.webp|1.5|tsp|6|linear|opt_sweetener = sugar|—
I|erythritol|Erythritol|img/350/erythritol.webp|1.5|tsp|6|linear|opt_sweetener = erythritol|—
I|salt|Salt|img/350/salt.webp|0.03|tsp|0.2|linear|—|—
I|blueberry|Blueberries|img/350/blueberry.webp|50|g|50|linear|—|—
I|dark_chocolate|Dark chocolate|img/350/dark_chocolate.webp|10|g|10|linear|—|bits
I|cinnamon|Ground cinnamon|img/350/cinnamon.webp|0.25|tsp|0.6|linear|—|—
S|J1|J|Get the jars ready|Set out small-ish jars, one per serving.|action|—|10 + 5 × servings|—|Jars ready|—|jar|—
S|J2|J|Oats and chia|Add the rolled oats, then the chia seeds to each jar.|action|—|15 + 15 × servings|J1|Dry layer in each jar|rolled_oats; chia_seeds|jar, spoon|—
S|J3|J|Milk, yogurt, sweetener|Pour in the coconut milk (canned: mixed 1:1 with water), add a spoon of yogurt, a pinch of salt and the sweetener.|action|—|20 + 20 × servings|J2|Wet and mixed|coconut_milk; water; yogurt; salt; honey / sugar / erythritol|jar, spoon|—
S|J4|J|Toppings in|Add the toppings: dark chocolate bits, cinnamon, blueberries or other fruit.|action|—|20 + 20 × servings|J3|Topped|blueberry; dark_chocolate; cinnamon|jar, spoon|opt_toppings = evening
S|J5|W|Let the chia swell|Let it sit so the chia seeds don't clump.|wait|—|600 (doc: 10 min)|J4, J3|10 min passed|—|jar|—
S|J6|J|Stir again|Stir each jar again to break up chia clumps.|action|—|10 + 10 × servings|J5|No clumps|—|spoon|—
S|J7|W|Fridge overnight|Close the jars and put them in the fridge overnight.|wait|—|21600 (doc: at least 6 hours)|J6|At least 6 hours passed|—|fridge, jar|—
S|J8|M|Toppings in the morning|Add the toppings now: fruit stays fresh, chocolate stays crunchy.|action|—|20 + 20 × servings|J7|Topped|blueberry; dark_chocolate; cinnamon|spoon|opt_toppings = morning
S|M1|M|Serve|Open and eat from the jar.|action|—|10|J7, J8|Served|oats_ready|jar, spoon|—
`
  },
  {
    id: 'slow_cooked_beef', name: 'Slow-Cooked Beef', image: 'img/350/beef.webp',
    // The sheet's M3 heat cell is a formula: Low or High, following the setting option.
    heat: function (c) { return { M3: c.opt_setting === 'low' ? 'Low' : 'High' }; },
    rows: `
O|opt_setting|high|High (5 to 6 hours)|TRUE
O|opt_setting|low|Low (8 to 10 hours)|FALSE
O|opt_heat|mild|Mild (½ tsp chili powder per 6)|TRUE
O|opt_heat|spicier|Spicier (1 tsp per 6)|FALSE
O|opt_side|rice|Rice|TRUE
O|opt_side|baked_potato|Baked potato|FALSE
O|opt_side|other|Other|FALSE
O|opt_tomatoes|with|With fried cherry tomatoes|TRUE
O|opt_tomatoes|without|Without|FALSE
I|beef|Beef shoulder / chuck (one piece)|img/350/beef.webp|250|g raw|250|linear|—|one piece, uncut
I|oil|Neutral oil (marinade)|img/350/oil.webp|1|tsp|4.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.33|tsp|2|linear|—|—
I|ground_black_pepper|Black pepper|img/350/ground_black_pepper.webp|0.17|tsp|0.4|linear|—|—
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|0.5|tsp|2|linear|—|—
I|msg|MSG|img/350/msg.webp|0.08|tsp|0.4|linear|—|—
I|cardamom|Cardamom pods (seeds, crushed)|img/350/cardamom.webp|1|pcs|0.2|linear|—|seeds only, crushed
I|cumin|Ground cumin|img/350/cumin.webp|0.17|tsp|0.4|linear|—|—
I|cinnamon|Ground cinnamon|img/350/cinnamon.webp|0.17|tsp|0.4|linear|—|—
I|smoked_paprika|Smoked paprika|img/350/smoked_paprika.webp|0.33|tsp|0.8|linear|—|—
I|garlic_powder|Garlic powder|img/350/garlic_powder.webp|0.33|tsp|1|linear|—|—
I|mustard|Mustard|img/350/mustard.webp|0.5|tsp|2.5|linear|—|—
I|worcestershire_sauce|Worcestershire sauce|img/350/worcestershire_sauce.webp|1|tsp|5|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.08|tsp|0.2|linear; doubled if spicier|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.17|tsp|0.2|linear|—|—
I|red_wine|Dry red wine (marinade)|img/350/red_wine.webp|42|ml|42|linear|—|—
I|oil_sear|Neutral oil (searing)|img/350/oil.webp|0.5|tsp|2.3|linear|—|—
I|butter|Butter|img/350/butter.webp|6.7|g|6.7|linear|—|—
I|rosemary|Fresh rosemary sprig|img/350/rosemary.webp|0.33|pcs|0.3|linear, rounded up|—|—
I|thyme_fresh|Fresh thyme sprig|img/350/thyme.webp|0.67|pcs|0.2|linear, rounded up|—|—
I|garlic|Garlic clove (optional, crushed)|img/350/garlic.webp|0.33|pcs|2|linear, rounded up|—|crushed
I|tomato_passata|Tomato passata (gravy)|img/350/tomato_passata.webp|17|ml|17|linear|—|—
I|red_wine_gravy|Red wine (gravy)|img/350/red_wine.webp|17|ml|17|linear|—|—
I|cumin_gravy|Ground cumin (gravy)|img/350/cumin.webp|0.08|tsp|0.2|linear|—|—
I|coriander_seeds|Coriander seeds, crushed|img/350/coriander_seeds.webp|0.17|tsp|0.3|linear|—|—
I|cream|Cooking cream|img/350/cream.webp|25|ml|25|linear|—|—
I|flour|Flour|img/350/flour.webp|0.17|tbsp|1.7|linear|—|—
I|cherry_tomato|Cherry tomatoes|img/350/cherry_tomato.webp|35|g|35|linear|opt_tomatoes = with|—
S|M1|M|Mix the marinade|In the slow cooker pot mix the oil, salt, pepper, brown sugar, MSG, crushed cardamom seeds, cumin, cinnamon, smoked paprika, garlic powder, mustard, Worcestershire sauce, chili powder, thyme and red wine. Taste until satisfied.|action|—|180|—|Tastes balanced|oil; salt; ground_black_pepper; brown_sugar; msg; cardamom; cumin; cinnamon; smoked_paprika; garlic_powder; mustard; worcestershire_sauce; chili_powder; thyme; red_wine|slow_cooker, spoon|—
S|M2|M|Beef in, coat it|Put the uncut beef into the pot and roll it so it is well covered. It should not be submerged.|action|—|60|M1|Coated all over|beef|slow_cooker|—
S|M3|M|Slow cook|Cook with the lid on. Roll the meat once or twice so every part gets under the marinade; each lid lift costs 15 to 20 min.|wait|High|19800 High (doc: 5 to 6 h) / 32400 Low (doc: 8 to 10 h)|M2|Fork twists in easily (≈90 to 95 °C inside)|—|slow_cooker|—
S|G1|G|Cream and flour|Whisk the cream with the flour in a separate bowl.|action|—|60|—|Smooth, no lumps|cream; flour|bowl, whisk|—
S|M4|M|Check doneness|Twist a fork into the meat: it should go in easily. Don't overcook it, it dries into strings.|check|—|60|M3|Fork twists in easily|—|fork|—
S|S1|S|Into the hot pan|Turn off the slow cooker. Move the meat carefully into a pan with a little oil, the butter and the herbs (and garlic). Leave the marinade in the pot!|action|high|60|M4|Meat in the pan|beef_done; oil_sear; butter; rosemary; thyme_fresh; garlic|pan, stovetop|—
S|S2|S|Sear and baste|Fry it on all sides on high heat. Tilt the pan and spoon the melted butter and herbs over the meat.|action|high|300|S1|Browned crust on all sides|—|pan, spoon|—
S|S3|S|Rest, covered|Set the meat aside and cover it.|wait|—|30|S2|Covered|—|chopping_board|—
S|G2|G|Liquid into the saucepan|Pour the used marinade into the saucepan (if the butter is burnt dark brown, throw it away first).|action|medium-high|60|S3|Liquid in the pan|marinade|pan|—
S|G3|G|Boil with the extras|Add the passata, more red wine, cumin and the crushed coriander seeds. Keep it boiling.|wait|medium-high|300|G2|Reduced a little|tomato_passata; red_wine_gravy; cumin_gravy; coriander_seeds|pan, whisk|—
S|G4|G|Thicken|Add the cream and flour mix while you keep whisking.|action|medium|120|G3, G1|Thickened, smooth|cream_mix|pan, whisk|—
S|G5|G|Sieve the gravy|Put a large sieve over a bowl and pour the gravy through it, stirring, to keep the residue out.|action|off|90|G4|Smooth gravy|—|sieve, bowl|—
S|T1|T|Fry the cherry tomatoes|Fry the cherry tomatoes in a little oil.|wait|medium|150 (doc: 2 to 3 min)|S3|Blistered|cherry_tomato|pan, stovetop|opt_tomatoes = with
S|F1|F|Slice and serve|Slice the meat. Serve with the side of your choice (not covered here) and the gravy separately so everyone adds their own. Fried cherry tomatoes on the side if made.|action|—|60 + 30 × servings|G5, T1|Served|beef_resting; gravy; tomatoes_fried|chef_knife, chopping_board, plates|—
`
  },
  {
    id: 'burger', name: 'Burger', image: 'img/350/hamburger_buns.webp',
    vars: function (c) { return { patties: Math.ceil(c.servings) * (c.opt_patty === 'thick' ? 1 : 2) }; },
    rows: `
O|opt_patty|thin|Thin smashed: 2 × 65 g per burger, 3 to 4 min|TRUE
O|opt_patty|thick|Thick: 1 × 130 g with a center divot, 5 to 6 min|FALSE
O|opt_sauce_heat|with|Sauce with chili or cayenne|TRUE
O|opt_sauce_heat|without|Without|FALSE
O|opt_mayo|homemade|Homemade mayonnaise (see Homemade Mayonnaise)|TRUE
O|opt_mayo|store|Store-bought|FALSE
I|ground_beef|Ground beef (ideally 20% fat)|img/350/ground_beef.webp|130|g|130|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.75|linear|—|—
I|ground_black_pepper|Black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|worcestershire_sauce|Worcestershire sauce|img/350/worcestershire_sauce.webp|0.25|tsp|1.3|linear|—|—
I|hamburger_buns|Burger bun|img/350/hamburger_buns.webp|1|pcs|60|linear|—|—
I|cheese_slice|Cheese slice (e.g. cheddar)|img/350/cheese_slice.webp|1|pcs per patty|10|per patty|—|—
I|lettuce|Lettuce leaf|img/350/lettuce.webp|1|pcs|10|linear|—|—
I|tomato|Large tomato|img/350/tomato.webp|0.25|pcs|50|linear|—|2 slices per burger
I|white_onion|White onion|img/350/white_onion.webp|0.25|pcs|40|linear|—|rings
I|pickles|Pickle slices|img/350/pickles.webp|3.5|pcs|15|linear|—|—
I|oil|Neutral oil|img/350/oil.webp|0.25|tbsp|3.5|linear|—|—
I|butter|Butter (for toasting the buns)|img/350/butter.webp|3|g|3|linear|—|—
I|mayonnaise|Mayonnaise (sauce)|img/350/mayonnaise.webp|1|tbsp|15|linear|—|—
I|ketchup|Ketchup (sauce)|img/350/ketchup.webp|0.5|tbsp|7.5|linear|—|—
I|mustard|Yellow mustard (sauce)|img/350/mustard.webp|0.25|tbsp|3.8|linear|—|—
I|salt_sauce|Salt (sauce)|img/350/salt.webp|0.02|tsp|0.1|linear|—|—
I|pepper_sauce|Black pepper (sauce)|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|sugar|Sugar (sauce)|img/350/sugar.webp|0.125|tsp|0.5|linear|—|—
I|pickles_chopped|Pickles, finely chopped (sauce)|img/350/pickles.webp|0.5|tbsp|7.5|linear|—|finely chopped
I|pickle_juice|Pickle juice (sauce)|img/350/pickle_juice.webp|0.25|tsp|1.3|linear|—|—
I|cayenne_pepper|Cayenne pepper or chili powder (sauce)|img/350/cayenne_pepper.webp|0.02|tsp|0.05|linear|opt_sauce_heat = with|—
S|Y1|S|Make the mayonnaise|Make the mayonnaise from the Homemade Mayonnaise recipe (1 tbsp per person is needed for the sauce).|action|—|300 (see Homemade Mayonnaise)|—|Thick mayonnaise|mayonnaise|—|opt_mayo = homemade
S|P1|P|Season the beef|In a bowl, mix the ground beef with black pepper and a little Worcestershire sauce.|action|—|60|—|Evenly mixed|ground_beef; ground_black_pepper; worcestershire_sauce|bowl|—
S|P2|P|Shape the patties|Roll balls slightly larger than a golf ball and squeeze them into disks. Thicker than a finger? Leave a small divot in the center.|action|—|(30 + 30 × patties) × skill_factor|P1|Even disks|beef_mixed|—|—
S|P3|P|Chill the patties|Cover them well and put them in the fridge.|wait|—|600 (the doc gives no time; minimum is an assumption)|P2|Chilled|—|fridge|—
S|S1|S|Chop the pickles|Shred or finely chop the pickles for the sauce.|action|—|(30 + 15 × servings) × skill_factor|—|Finely chopped|pickles_chopped|chef_knife, chopping_board|—
S|S2|S|Mix the sauce|Mix 4 parts mayonnaise, 2 parts ketchup, 1 part yellow mustard, a little salt, pepper and sugar, the chopped pickles and pickle juice (and a pinch of cayenne or chili). Stir well.|action|—|60|S1, Y1|Smooth sauce|mayonnaise; ketchup; mustard; salt_sauce; pepper_sauce; sugar; pickles_chopped_ready; pickle_juice; cayenne_pepper|bowl, spoon|—
S|S3|S|Rest the sauce|Let the sauce rest in the fridge so the flavors blend.|wait|—|1800|S2|30 min passed|—|fridge|—
S|O1|O|Cut the onion|Cut the white onion into rings.|action|—|(30 + 30 × servings) × skill_factor|—|Rings|white_onion|chef_knife, chopping_board|—
S|O2|O|Sauté the onion|Stir-fry the rings in a pan on medium heat with a little oil and a pinch of salt.|wait|medium|540 (doc: 8 to 10 min)|O1|Soft and glassy|onion_rings; oil; salt|pan, stovetop, spatula|—
S|K1|K|Tomato and lettuce|Slice the tomato (2 slices per burger) and wash the lettuce leaves.|action|—|(30 + 30 × servings) × skill_factor|—|Ready|tomato; lettuce|chef_knife, chopping_board|—
S|G1|G|Heat the big pan|Heat a large pan with a little oil on high.|action|high|60|P3, S3|Very hot|oil|pan, stovetop|—
S|G2|G|Fry the patties|Salt the patties slightly and fry them, flipping every minute.|action|high|210 thin (doc: 3 to 4 min) / 330 thick (doc: 5 to 6 min), incl. G3|G1|Browned crust|patties_chilled; salt|pan, spatula|—
S|G3|G|Cheese on, cover|After the last flip, put the cheese slices on the patties and cover the pan.|action|high|45 (doc: last 30 to 60 s)|G2|Cheese melted|cheese_slice|pan|—
S|G4|G|Toast the buns|Cut the buns in half and place them cut side down on a slightly buttered pan on medium heat.|action|medium|45 (doc: 30 to 60 s)|G3|Lightly toasted|hamburger_buns; butter|pan, stovetop|—
S|A1|A|Build the burger|Bottom to top: bottom bun, sauce, lettuce, patty, cheese, tomato, pickles, sautéed onion, sauce, top bun. Push a wooden skewer through the middle.|action|—|60 + 60 × servings|G4, O2, K1, S3|Served|buns_toasted; sauce; veg_ready; patties_ready; pickles; onion_sauteed|skewers|—
`
  },
  {
    id: 'homemade_mayonnaise', name: 'Homemade Mayonnaise', image: 'img/350/mayonnaise.webp',
    unit: 'batch', maxServings: 3, defaultServings: 1,
    rows: `
O|opt_oil|light_olive|Light (mild) olive oil|TRUE
O|opt_oil|sunflower|Sunflower oil (most neutral taste)|FALSE
O|opt_acid|lemon|Lemon juice|TRUE
O|opt_acid|vinegar|White wine vinegar|FALSE
O|opt_mustard|with|With Dijon (more stable, slightly tangy)|TRUE
O|opt_mustard|without|Without|FALSE
O|opt_egg|fresh|Fresh egg|TRUE
O|opt_egg|pasteurized|Pasteurized egg|FALSE
I|egg|Whole egg, room temperature|img/350/egg.webp|1|pcs per batch|50|per batch|—|—
I|olive_oil|Light (mild) olive oil|img/350/olive_oil.webp|250|ml per batch|230|per batch|opt_oil = light_olive|—
I|oil|Sunflower oil|img/350/oil.webp|250|ml per batch|230|per batch|opt_oil = sunflower|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|2.5|tsp per batch|12|per batch|opt_acid = lemon|—
I|white_vinegar|White wine vinegar|img/350/white_vinegar.webp|2.5|tsp per batch|12|per batch|opt_acid = vinegar|—
I|salt|Salt|img/350/salt.webp|0.5|tsp per batch|3|per batch|—|—
I|white_pepper|Black or white pepper|img/350/white_pepper.webp|0.06|tsp per batch|0.1|per batch|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tsp per batch|2|per batch|—|—
I|mustard|Dijon mustard|img/350/mustard.webp|1|tsp per batch|5|per batch|opt_mustard = with|—
I|egg_yolk|Egg yolk (rescue only)|img/350/egg_yolk.webp|1|pcs|0|only if needed|—|only if it breaks
S|E1|E|Pick the container|Find a container your immersion blender fits to the bottom of: the more cylindrical the better.|action|—|30|—|Blender head nearly fills it|—|tall_container, immersion_blender|—
S|E2|E|Everything in|Crack in the whole egg. Add the oil, salt, pepper, a little sugar and a tiny bit of lemon juice (or vinegar). Optional: 1 tsp Dijon mustard.|action|—|60|E1|All in|egg; olive_oil / oil; salt; white_pepper; sugar; lemon_juice / white_vinegar; mustard|tall_container, spoon|—
S|E3|E|Let it settle|Wait so the egg sinks to the bottom under the oil.|wait|—|15 (doc: about 15 s)|E2|Egg at the bottom|—|tall_container|—
S|E4|E|Blend at the bottom|Put the blender all the way to the bottom, switch it on and hold it still until thick white mayonnaise forms underneath.|action|—|15 (doc: 10 to 20 s)|E3|Thick white layer at the bottom|—|immersion_blender|—
S|E5|E|Lift slowly|Keep blending, slowly lifting to the top and back down until all the oil is incorporated.|action|—|45 (doc: about 1 min in total with E4)|E4|No oil layer left|—|immersion_blender|—
S|E6|E|Check: did it break?|Still runny? Pour it out, put a fresh egg yolk into the clean container and blend while adding the runny mix back a little at a time.|check|—|30|E5|Thick and creamy|egg_yolk|tall_container, immersion_blender|—
S|F1|F|Taste and adjust|Taste and adjust the salt and the lemon juice.|check|—|30|E6|Tastes right|salt; lemon_juice|spoon|—
S|F2|F|Store|Put it into a lidded container and into the fridge.|action|—|30|F1|In the fridge|mayonnaise|lidded_container|—
`
  },
  // ---- Added 2026-10-25 from the 150-recipe list (one sheet tab each) ----
  {
    id: "scrambled_eggs", name: "Scrambled Eggs", image: "img/350/egg.webp",
    rows: `
O|opt_style|soft|Soft and creamy (low heat)|TRUE
O|opt_style|fluffy|Fluffy, larger curds (medium heat)|FALSE
O|opt_toast|toast|With buttered toast|TRUE
O|opt_toast|plain|Eggs only|FALSE
I|egg|Eggs, large|img/350/egg.webp|2|pcs|110|linear|—|—
I|milk|Milk (or cream)|img/350/milk.webp|1|tbsp|15|linear|—|—
I|butter|Butter|img/350/butter.webp|10|g|10|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|chives|Chives (optional)|img/350/chives.webp|1|tsp|1|linear|—|finely snipped
I|bread|Bread slices|img/350/bread.webp|1|slices|35|linear|opt_toast = toast|—
I|butter_toast|Butter for the toast|img/350/butter.webp|5|g|5|linear|opt_toast = toast|—
S|P1|P|Whisk the eggs|Crack the eggs into a bowl, add the milk, salt and pepper and whisk until no streaks of white are left.|action|—|(30 + 30 × servings) × skill_factor|—|Evenly yellow|egg; milk; salt; ground_black_pepper|bowl, fork|—
S|P2|P|Melt the butter|Melt the butter in the frying pan.|action|low|60|P1|Butter foaming|butter|pan, stovetop|—
S|T1|T|Toast the bread|Toast the bread and butter it while hot.|action|—|150|—|Golden and buttered|bread; butter_toast|plates|opt_toast = toast|countertop
S|P3|P|Cook the eggs|Pour in the eggs. Let them sit 20 seconds, then push them slowly from the edge to the middle with the spatula. Keep folding until they are almost set but still shiny.|action|low|240 soft / 120 fluffy|P2|Almost set, still glossy|—|pan, spatula|—
S|F1|F|Serve|Take the pan off the heat (the eggs keep cooking), sprinkle with chives and serve at once, with the toast if made.|action|off|30 + 10 × servings|P3, T1|Served|chives|plates|—
`
  },
  {
    id: "omelette", name: "Omelette", image: "img/350/egg.webp",
    rows: `
O|opt_filling|cheese_herbs|Cheese and herbs|TRUE
O|opt_filling|ham_cheese|Ham and cheese|FALSE
O|opt_filling|plain|Plain|FALSE
I|egg|Eggs, large|img/350/egg.webp|3|pcs|165|linear|—|—
I|milk|Milk|img/350/milk.webp|1|tbsp|15|linear|—|—
I|butter|Butter|img/350/butter.webp|10|g|10|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|grated_cheese|Grated cheese|img/350/grated_cheese.webp|25|g|25|linear|opt_filling = cheese_herbs or ham_cheese|—
I|ham|Ham, diced|img/350/ham.webp|30|g|30|linear|opt_filling = ham_cheese|diced
I|chives|Chives|img/350/chives.webp|1|tbsp|3|linear|opt_filling = cheese_herbs|snipped
S|K1|K|Prepare the filling|Grate the cheese if needed, dice the ham or snip the chives, depending on the filling.|action|—|(40 + 20 × servings) × skill_factor|—|Filling ready|grated_cheese; ham; chives|chopping_board, knife|opt_filling = cheese_herbs or ham_cheese
S|K2|K|Whisk the eggs|Whisk the eggs with the milk, salt and pepper until smooth. Make one omelette per person.|action|—|(30 + 20 × servings) × skill_factor|—|Smooth|egg; milk; salt; ground_black_pepper|bowl, fork|—
S|P1|P|Heat the pan|Melt a knob of butter in the frying pan until it foams.|action|medium|60|—|Foaming|butter|pan, stovetop|—
S|P2|P|Cook the omelette|Pour in one portion of egg. Stir quickly with the spatula for a few seconds, then let it set while you pull the edges in so raw egg runs underneath.|action|medium|90 × servings|P1, K2|Bottom set, top still a little wet|—|pan, spatula|—
S|P3|P|Fill and fold|Scatter the filling over one half, fold the other half over and slide it onto a plate. Repeat for the next portion.|action|medium|30 × servings|P2, K1|Folded, cheese melting|—|pan, spatula, plates|—
S|F1|F|Serve|Serve right away while the inside is still soft.|action|off|20|P3|Served|—|plates|—
`
  },
  {
    id: "pancakes", name: "Pancakes", image: "img/350/flour.webp",
    rows: `
O|opt_topping|syrup|Maple syrup and butter|TRUE
O|opt_topping|berries|Fresh berries and honey|FALSE
I|flour|Flour (all-purpose)|img/350/flour.webp|65|g|65|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tbsp|6|linear|—|—
I|baking_powder|Baking powder|img/350/baking_powder.webp|0.75|tsp|3|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.35|linear|—|—
I|milk|Milk|img/350/milk.webp|80|ml|82|linear|—|—
I|egg|Egg|img/350/egg.webp|0.5|pcs|27|linear, rounded up|—|—
I|butter|Butter, melted (plus a little for the pan)|img/350/butter.webp|15|g|15|linear|—|—
I|maple_syrup|Maple syrup|img/350/maple_syrup.webp|2|tbsp|40|linear|opt_topping = syrup|—
I|blueberry|Blueberries or other berries|img/350/blueberry.webp|60|g|60|linear|opt_topping = berries|—
I|honey|Honey|img/350/honey.webp|1|tbsp|21|linear|opt_topping = berries|—
S|B1|B|Melt the butter|Melt the butter (microwave or a small pan) and let it cool a little.|action|—|60|—|Melted|butter|bowl|—|countertop
S|B2|B|Dry ingredients|Mix the flour, sugar, baking powder and salt in the bowl.|action|—|(30 + 15 × servings) × skill_factor|—|Mixed|flour; sugar; baking_powder; salt|bowl, whisk|—
S|B3|B|Make the batter|Whisk the milk, egg and melted butter together, pour into the dry mix and stir just until combined. A few lumps are fine; overmixing makes them tough.|action|—|(40 + 15 × servings) × skill_factor|B1, B2|Thick, a few lumps|milk; egg|bowl, whisk|—
S|B4|B|Rest the batter|Let the batter rest so the baking powder starts working.|wait|—|300|B3|Bubbly on top|—|bowl|—
S|P1|P|Heat the pan|Heat the frying pan and wipe it with a little butter.|action|medium|120|—|A drop of water sizzles|—|pan, stovetop|—
S|P2|P|Cook the pancakes|Pour about 3 tbsp of batter per pancake. Flip when bubbles pop on the surface and the edges look dry, then cook 1 more minute.|action|medium|180 × servings|P1, B4|Golden on both sides|—|pan, spatula, ladle|—
S|F1|F|Serve|Stack the pancakes and top with maple syrup and butter, or berries and honey.|action|off|30 + 15 × servings|P2|Served|maple_syrup; blueberry; honey|plates|—
`
  },
  {
    id: "crepes", name: "Crêpes", image: "img/350/flour.webp",
    rows: `
O|opt_filling|sugar_lemon|Sugar and lemon|TRUE
O|opt_filling|jam|Apricot jam|FALSE
O|opt_filling|chocolate|Melted dark chocolate|FALSE
I|flour|Flour|img/350/flour.webp|50|g|50|linear|—|—
I|egg|Egg|img/350/egg.webp|0.5|pcs|27|linear, rounded up|—|—
I|milk|Milk|img/350/milk.webp|100|ml|103|linear|—|—
I|water|Water|img/350/water.webp|25|ml|25|linear|—|—
I|salt|Salt|img/350/salt.webp|0.03125|tsp|0.2|linear|—|—
I|butter|Butter, melted (plus a little for the pan)|img/350/butter.webp|10|g|10|linear|—|—
I|sugar|Sugar (for filling)|img/350/sugar.webp|1|tbsp|12|linear|opt_filling = sugar_lemon|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|opt_filling = sugar_lemon|—
I|apricot_jam|Apricot jam|img/350/apricot_jam.webp|2|tbsp|40|linear|opt_filling = jam|—
I|dark_chocolate|Dark chocolate|img/350/dark_chocolate.webp|25|g|25|linear|opt_filling = chocolate|—
S|B1|B|Make the batter|Whisk the flour, egg and salt, then whisk in the milk and water little by little until smooth. Stir in the melted butter.|action|—|(60 + 30 × servings) × skill_factor|—|Smooth and runny like cream|flour; egg; salt; milk; water; butter|bowl, whisk|—
S|B2|B|Rest the batter|Let it rest so the flour swells; the crêpes tear less.|wait|—|900 (15 to 30 min)|B1|Rested|—|bowl|—
S|P1|P|Heat the pan|Heat the frying pan and wipe with a little butter.|action|medium-high|120|B2|Hot|—|pan, stovetop|—
S|P2|P|Cook the crêpes|Pour a small ladle of batter, tilt the pan so it covers the bottom thinly. When the edges lift (about 1 min) flip and cook 30 seconds. About 3 crêpes per person.|action|medium-high|270 × servings|P1|Thin, golden spots|—|pan, spatula, ladle|—
S|F1|F|Fill and fold|Spread with the filling (sugar and a squeeze of lemon, jam, or melted chocolate) and fold into quarters.|action|off|30 + 20 × servings|P2|Filled and folded|sugar; lemon_juice; apricot_jam; dark_chocolate|plates, spoon|—
`
  },
  {
    id: "french_toast", name: "French Toast", image: "img/350/bread.webp",
    rows: `
O|opt_topping|syrup|Maple syrup|TRUE
O|opt_topping|berries|Berries and powdered sugar|FALSE
I|bread|Bread slices (day-old, thick)|img/350/bread.webp|2|slices|80|linear|—|—
I|egg|Egg|img/350/egg.webp|1|pcs|55|linear|—|—
I|milk|Milk|img/350/milk.webp|60|ml|62|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tbsp|6|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.25|tsp|0.7|linear|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
I|butter|Butter (for the pan)|img/350/butter.webp|10|g|10|linear|—|—
I|maple_syrup|Maple syrup|img/350/maple_syrup.webp|2|tbsp|40|linear|opt_topping = syrup|—
I|strawberry|Berries|img/350/strawberry.webp|60|g|60|linear|opt_topping = berries|—
I|powdered_sugar|Powdered sugar|img/350/powdered_sugar.webp|1|tsp|3|linear|opt_topping = berries|—
S|B1|B|Make the custard|Whisk the egg, milk, sugar, cinnamon and vanilla in a shallow dish.|action|—|(30 + 15 × servings) × skill_factor|—|Smooth|egg; milk; sugar; cinnamon; vanilla|bowl, whisk|—
S|P1|P|Heat the pan|Melt some of the butter in the frying pan.|action|medium|90|—|Foaming|butter|pan, stovetop|—
S|B2|B|Soak the bread|Dip each slice in the custard, about 15 seconds per side, so it soaks through but does not fall apart.|action|—|30 × servings|B1|Soaked|bread|bowl|—
S|P2|P|Fry|Fry the slices until golden, 2 to 3 minutes per side. Add butter between batches.|action|medium|300 + 60 × servings|P1, B2|Golden, springy in the middle|—|pan, spatula|—
S|F1|F|Serve|Serve hot with maple syrup, or with berries and a dusting of powdered sugar.|action|off|30|P2|Served|maple_syrup; strawberry; powdered_sugar|plates|—
`
  },
  {
    id: "oatmeal_porridge", name: "Oatmeal Porridge", image: "img/350/rolled_oats.webp",
    rows: `
O|opt_liquid|milk|Milk (creamier)|TRUE
O|opt_liquid|water|Water (lighter)|FALSE
O|opt_liquid|half|Half milk, half water|FALSE
O|opt_topping|banana_honey|Banana and honey|TRUE
O|opt_topping|berries|Berries|FALSE
O|opt_topping|kiwi|Kiwi|FALSE
I|rolled_oats|Rolled oats|img/350/rolled_oats.webp|50|g|50|linear|—|—
I|milk|Milk|img/350/milk.webp|250|ml|258|linear; half if half|opt_liquid = milk or half|—
I|water|Water|img/350/water.webp|250|ml|250|linear; half if half|opt_liquid = water or half|—
I|salt|Salt|img/350/salt.webp|0.03125|tsp|0.2|linear|—|—
I|cinnamon|Cinnamon (optional)|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
I|banana|Banana|img/350/banana.webp|0.5|pcs|60|linear|opt_topping = banana_honey|sliced
I|honey|Honey|img/350/honey.webp|1|tbsp|21|linear|opt_topping = banana_honey|—
I|blueberry|Berries|img/350/blueberry.webp|60|g|60|linear|opt_topping = berries|—
I|kiwi|Kiwi|img/350/kiwi.webp|1|pcs|70|linear|opt_topping = kiwi|peeled, sliced
S|P1|P|Oats and liquid in|Put the oats, milk and/or water and the pinch of salt in the saucepan.|action|—|45|—|In the pan|rolled_oats; milk; water; salt|saucepan|—
S|P2|P|Bring to a simmer|Bring to a gentle boil, stirring now and then.|wait|medium|240|P1|Bubbling|—|saucepan, stovetop, wooden_spoon|—
S|P3|P|Simmer|Turn down and simmer, stirring often, until thick and creamy. Stir in the cinnamon. Add a splash more liquid if too thick.|wait|low|300|P2|Thick and creamy|cinnamon|saucepan, wooden_spoon|—
S|K1|K|Prepare the topping|Slice the banana or kiwi, or rinse the berries.|action|—|(30 + 30 × servings) × skill_factor|—|Ready|banana; blueberry; kiwi|chopping_board, knife|—
S|F1|F|Serve|Spoon into bowls and add the topping (and the honey).|action|off|30 + 10 × servings|P3, K1|Served|honey|ladle|—
`
  },
  {
    id: "waffles", name: "Waffles", image: "img/350/flour.webp",
    rows: `
O|opt_topping|strawberry|Strawberries and powdered sugar|TRUE
O|opt_topping|syrup|Maple syrup|FALSE
I|flour|Flour|img/350/flour.webp|70|g|70|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tbsp|6|linear|—|—
I|baking_powder|Baking powder|img/350/baking_powder.webp|0.75|tsp|3|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.35|linear|—|—
I|egg|Egg|img/350/egg.webp|0.5|pcs|27|linear, rounded up|—|—
I|milk|Milk|img/350/milk.webp|100|ml|103|linear|—|—
I|butter|Butter, melted|img/350/butter.webp|20|g|20|linear|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
I|oil|Oil (for the iron)|img/350/oil.webp|0.25|tsp|1|linear|—|—
I|strawberry|Strawberries|img/350/strawberry.webp|70|g|70|linear|opt_topping = strawberry|sliced
I|powdered_sugar|Powdered sugar|img/350/powdered_sugar.webp|1|tsp|3|linear|opt_topping = strawberry|—
I|maple_syrup|Maple syrup|img/350/maple_syrup.webp|2|tbsp|40|linear|opt_topping = syrup|—
S|W1|W|Heat the waffle iron|Switch on the waffle iron and brush it with a little oil.|action|—|30|—|On|oil|waffle_iron|—|countertop
S|W2|W|Wait for the iron|Let it heat up fully; the first waffle sticks if the iron is not hot.|wait|—|300|W1|Ready light on|—|waffle_iron|—|countertop
S|B1|B|Melt the butter|Melt the butter and let it cool a little.|action|—|60|—|Melted|butter|bowl|—|countertop
S|B2|B|Make the batter|Mix flour, sugar, baking powder and salt. Whisk egg, milk, vanilla and melted butter, pour in and stir until just combined.|action|—|(60 + 20 × servings) × skill_factor|B1|Thick batter, a few lumps|flour; sugar; baking_powder; salt; egg; milk; vanilla|bowl, whisk|—
S|W3|W|Bake the waffles|Pour batter to cover about two thirds of the plate, close and bake until golden and the steam stops, about 4 minutes each.|action|—|240 × servings|W2, B2|Golden and crisp|—|waffle_iron, ladle, fork|—|countertop
S|F1|F|Serve|Top with strawberries and powdered sugar or maple syrup and serve while crisp.|action|—|30 + 15 × servings|W3|Served|strawberry; powdered_sugar; maple_syrup|plates|—
`
  },
  {
    id: "frittata", name: "Frittata", image: "img/350/egg.webp",
    rows: `
O|opt_veg|spinach_tomato|Spinach and cherry tomatoes|TRUE
O|opt_veg|potato_onion|Potato and onion|FALSE
O|opt_cheese|parmesan|Parmesan|TRUE
O|opt_cheese|feta|Feta|FALSE
I|egg|Eggs|img/350/egg.webp|2|pcs|110|linear|—|—
I|milk|Milk|img/350/milk.webp|1|tbsp|15|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|25|g|25|linear|—|thinly sliced
I|spinach|Baby spinach|img/350/spinach.webp|30|g|30|linear|opt_veg = spinach_tomato|—
I|cherry_tomato|Cherry tomato|img/350/cherry_tomato.webp|50|g|50|linear|opt_veg = spinach_tomato|halved
I|potato|Potato (boiled or raw, thin slices)|img/350/potato.webp|80|g|80|linear|opt_veg = potato_onion|thinly sliced
I|parmesan|Parmesan|img/350/parmesan.webp|15|g|15|linear|opt_cheese = parmesan|grated
I|feta_cheese|Feta cheese|img/350/feta_cheese.webp|25|g|25|linear|opt_cheese = feta|crumbled
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
S|K1|K|Slice the vegetables|Slice the onion. Halve the cherry tomatoes, or slice the potato very thinly.|action|—|(60 + 60 × servings) × skill_factor|—|Sliced|onion; cherry_tomato; potato|chef_knife, chopping_board|—
S|K2|K|Whisk the eggs|Whisk the eggs with milk, salt, pepper and most of the cheese.|action|—|(40 + 15 × servings) × skill_factor|—|Smooth|egg; milk; salt; ground_black_pepper; parmesan; feta_cheese|bowl, whisk|—
S|P1|P|Cook the vegetables|Heat the oil in the ovenproof pan and cook the onion (and potato) until soft, about 6 min (potato 10 min). Add the spinach and tomatoes for the last minute.|action|medium|360 spinach_tomato / 600 potato_onion|K1|Soft|olive_oil; spinach|pan, stovetop, spatula|—
S|O1|O|Heat the grill|Switch the oven grill on high.|action|grill|15|—|On|—|oven|—
S|P2|P|Add the eggs|Pour the eggs over the vegetables, turn the heat down and cook without stirring until the edges are set and the middle is still a bit runny.|wait|low|480|P1, K2|Edges set|—|pan|—
S|O2|O|Finish under the grill|Scatter the rest of the cheese on top and put the pan under the grill until puffed and golden. The handle gets hot: use an oven glove.|wait|grill|180|P2, O1|Puffed, set in the middle|—|oven, pan|—
S|F1|F|Rest and serve|Let it rest a couple of minutes, slide onto a board and cut into wedges.|action|off|120|O2|Served|—|chef_knife, plates|—
`
  },
  {
    id: "grilled_cheese_sandwich", name: "Grilled Cheese Sandwich", image: "img/350/cheddar.webp",
    rows: `
O|opt_extra|plain|Just cheese|TRUE
O|opt_extra|ham|With ham|FALSE
O|opt_extra|tomato|With tomato slices|FALSE
I|bread|Bread slices|img/350/bread.webp|2|slices|70|linear|—|—
I|butter|Butter, soft|img/350/butter.webp|10|g|10|linear|—|—
I|cheddar|Cheddar (or another melting cheese)|img/350/cheddar.webp|50|g|50|linear|—|sliced or grated
I|ham|Ham slice|img/350/ham.webp|1|slices|25|linear|opt_extra = ham|—
I|tomato|Tomato|img/350/tomato.webp|0.5|pcs|60|linear|opt_extra = tomato|thinly sliced
S|K1|K|Butter and fill|Butter one side of each slice. Put the cheese (and ham or tomato) between the unbuttered sides, buttered sides out.|action|—|(40 + 40 × servings) × skill_factor|—|Assembled|bread; butter; cheddar; ham; tomato|chopping_board, knife|—
S|P1|P|Heat the pan|Heat the frying pan on medium-low.|action|medium-low|90|—|Warm|—|pan, stovetop|—
S|P2|P|Fry|Fry the sandwiches 3 to 4 minutes per side, pressing gently with the spatula, until golden and the cheese has melted.|action|medium-low|420 + 60 × servings|P1, K1|Golden, cheese oozing|—|pan, spatula|—
S|F1|F|Cut and serve|Cut in half diagonally and serve hot.|action|off|20 + 10 × servings|P2|Served|—|chef_knife, plates|—
`
  },
  {
    id: "homemade_white_bread", name: "Homemade White Bread", image: "img/350/bread.webp",
    rows: `
O|opt_shape|loaf_pan|In a loaf pan|TRUE
O|opt_shape|free|Free-form loaf on a tray|FALSE
I|flour|Bread flour (or all-purpose)|img/350/flour.webp|125|g|125|linear|—|—
I|water|Lukewarm water|img/350/water.webp|80|ml|80|linear|—|—
I|yeast|Dry yeast|img/350/yeast.webp|0.5|tsp|1.5|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.25|tsp|1|linear|—|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|oil|Oil or soft butter|img/350/oil.webp|0.5|tbsp|7|linear|—|—
S|D1|D|Wake the yeast|Stir the yeast and sugar into the lukewarm water and leave until foamy.|wait|—|300|—|Foamy|water; yeast; sugar|bowl|—
S|D2|D|Mix the dough|Mix the flour and salt, add the yeast water and the oil and stir into a shaggy dough.|action|—|(90 + 15 × servings) × skill_factor|D1|No dry flour left|flour; salt; oil|bowl, wooden_spoon|—
S|D3|D|Knead|Knead on a floured surface until smooth and springy.|action|—|600 (doc: 8 to 10 min)|D2|Smooth, springs back when poked|—|chopping_board|—|countertop
S|D4|D|First rise|Put it back in the bowl, cover and let it double in a warm place.|wait|—|3600 (doc: 1 to 1.5 h)|D3|Doubled|—|bowl, plastic_wrap|—
S|D5|D|Shape|Press out the air, roll into a log and put it in the greased loaf pan (or shape a round loaf on a tray with baking paper).|action|—|180 × skill_factor|D4|Shaped|—|loaf_pan|—|countertop
S|D6|D|Second rise|Cover loosely and let it rise again.|wait|—|2400 (doc: 30 to 45 min)|D5|Risen above the pan rim|—|loaf_pan, plastic_wrap|—
S|O1|O|Preheat the oven|Turn the oven on to 200 °C conventional (180 °C fan).|action|200 °C (180 °C fan)|15|D5|Oven on|—|oven|—
S|O2|O|Bake|Bake until deep golden and hollow-sounding when you tap the bottom.|wait|200 °C (180 °C fan)|1800 (doc: 30 to 35 min)|D6, O1|Golden, sounds hollow|—|oven, loaf_pan|—
S|F1|F|Cool|Take it out of the pan and let it cool on a rack before slicing, or the inside turns gummy.|wait|—|1800|O2|Cool enough to slice|—|chef_knife, chopping_board|—
`
  },
  {
    id: "spaghetti_bolognese", name: "Spaghetti Bolognese", image: "img/350/ground_beef.webp",
    rows: `
O|opt_meat|beef|Ground beef|TRUE
O|opt_meat|mix|Half beef, half pork|FALSE
O|opt_wine|wine|With a splash of red wine|TRUE
O|opt_wine|no_wine|Without wine (use stock)|FALSE
I|olive_oil|Olive oil|img/350/olive_oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|finely diced
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|—|finely diced
I|celery_stalk|Celery stalk|img/350/celery_stalk.webp|20|g|20|linear|—|finely diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|ground_beef|Ground beef|img/350/ground_beef.webp|125|g|125|linear; half if mix|—|—
I|ground_pork|Ground pork|img/350/ground_pork.webp|62.5|g|62.5|linear|opt_meat = mix|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|1|tbsp|16|linear|—|—
I|red_wine|Dry red wine|img/350/red_wine.webp|40|ml|40|linear|opt_wine = wine|—
I|beef_stock|Beef stock|img/350/beef_stock.webp|40|ml|40|linear|opt_wine = no_wine|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|150|g|150|linear|—|—
I|milk|Milk|img/350/milk.webp|2|tbsp|30|linear|—|—
I|bay_leaf|Bay leaf|img/350/bay_leaf.webp|1|pcs per pot|0.2|fixed: 1 per pot|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|spaghetti|Spaghetti (dry)|img/350/spaghetti.webp|100|g|100|linear|—|—
I|salt_pasta|Salt for the pasta water|img/350/salt.webp|1|tsp|6|linear|—|—
I|parmesan|Parmesan, to serve|img/350/parmesan.webp|15|g|15|linear|—|grated
S|K1|K|Chop the soffritto|Finely dice the onion, carrot and celery and mince the garlic.|action|—|(120 + 90 × servings) × skill_factor|—|Finely diced|onion; carrot; celery_stalk; garlic|chef_knife, chopping_board|—
S|S1|S|Soften the vegetables|Heat the oil in the pot and cook the onion, carrot and celery until soft, stirring now and then. Add the garlic for the last minute.|action|medium|480|K1|Soft and sweet-smelling|olive_oil|cooking_pot, stovetop, wooden_spoon|—
S|S2|S|Brown the meat|Turn the heat up, add the meat and break it up. Fry until it is no longer pink and starts to brown.|action|medium-high|420|S1|Browned, no pink|ground_beef; ground_pork|cooking_pot, wooden_spoon|—
S|S3|S|Tomato paste and wine|Stir in the tomato paste for a minute, then pour in the wine (or stock) and let it bubble away.|action|medium-high|180|S2|Wine almost gone|tomato_paste; red_wine; beef_stock|cooking_pot, wooden_spoon|—
S|S4|S|Simmer the sauce|Add the passata, milk, bay leaf, salt and pepper. Simmer gently with the lid ajar, stirring now and then. Add a splash of water if it gets too thick.|wait|low|2700 (doc: 45 min to 2 h)|S3|Thick and rich|tomato_passata; milk; bay_leaf; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|P1|P|Boil the pasta water|Bring a large pot of water to the boil and salt it.|wait|high|600|S3|Rolling boil|salt_pasta|cooking_pot, stovetop|—
S|P2|P|Cook the spaghetti|Cook the spaghetti until al dente (package time), then drain, keeping a cup of the water.|wait|high|600|P1, S4|Al dente|spaghetti|cooking_pot, colander, tongs|—
S|F1|F|Combine and serve|Remove the bay leaf. Toss the spaghetti with the sauce (loosen with a little pasta water) and serve with grated Parmesan.|action|off|60 + 20 × servings|P2, S4|Served|parmesan|tongs, plates|—
`
  },
  {
    id: "lasagna", name: "Lasagna", image: "img/350/lasagna_noodles.webp",
    rows: `
O|opt_meat|beef|Ground beef|TRUE
O|opt_meat|mix|Half beef, half pork|FALSE
I|olive_oil|Olive oil|img/350/olive_oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|finely diced
I|carrot|Carrot|img/350/carrot.webp|25|g|25|linear|—|finely diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|ground_beef|Ground beef|img/350/ground_beef.webp|120|g|120|linear; half if mix|—|—
I|ground_pork|Ground pork|img/350/ground_pork.webp|60|g|60|linear|opt_meat = mix|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|150|g|150|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|1|tbsp|16|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|butter|Butter (béchamel)|img/350/butter.webp|15|g|15|linear|—|—
I|flour|Flour (béchamel)|img/350/flour.webp|15|g|15|linear|—|—
I|milk|Milk (béchamel)|img/350/milk.webp|180|ml|185|linear|—|—
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.03125|tsp|0.07|linear|—|—
I|lasagna_noodles|Lasagna sheets (no-boil)|img/350/lasagna_noodles.webp|60|g|60|linear|—|—
I|mozzarella|Mozzarella|img/350/mozzarella.webp|40|g|40|linear|—|torn or grated
I|parmesan|Parmesan|img/350/parmesan.webp|20|g|20|linear|—|grated
S|K1|K|Chop|Finely dice the onion and carrot and mince the garlic.|action|—|(90 + 60 × servings) × skill_factor|—|Diced|onion; carrot; garlic|chef_knife, chopping_board|—
S|S1|S|Soften the vegetables|Fry the onion and carrot in the oil until soft, add the garlic for the last minute.|action|medium|420|K1|Soft|olive_oil|cooking_pot, stovetop, wooden_spoon|—
S|S2|S|Brown the meat|Add the meat and fry, breaking it up, until browned.|action|medium-high|420|S1|Browned|ground_beef; ground_pork|cooking_pot, wooden_spoon|—
S|S3|S|Simmer the meat sauce|Stir in the tomato paste, passata, oregano, salt and pepper and simmer until thick.|wait|low|1500|S2|Thick|tomato_passata; tomato_paste; oregano; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|B1|B|Make the béchamel|Melt the butter, stir in the flour for a minute, then whisk in the milk a little at a time. Simmer, whisking, until it coats a spoon. Season with nutmeg and a pinch of salt.|action|medium-low|480|S2|Smooth, coats the spoon|butter; flour; milk; nutmeg|saucepan, stovetop, whisk|—
S|O1|O|Preheat the oven|Turn the oven on to 190 °C conventional (170 °C fan).|action|190 °C (170 °C fan)|15|B1|Oven on|—|oven|—
S|O2|O|Layer|In the baking dish: a thin layer of meat sauce, then sheets, meat sauce, béchamel and some mozzarella. Repeat 3 to 4 times, finishing with béchamel, mozzarella and Parmesan.|action|—|(240 + 60 × servings) × skill_factor|S3, B1|Dish full, top covered|lasagna_noodles; mozzarella; parmesan|baking_dish, ladle|—|countertop
S|O3|O|Bake|Cover with foil and bake 25 min, then uncover and bake until bubbling and golden.|wait|190 °C (170 °C fan)|2400 (doc: 35 to 45 min)|O2, O1|Bubbling, golden top|—|oven, baking_dish, tin_foil|—
S|F1|F|Rest and serve|Let it rest so the layers set, then cut into squares.|wait|—|600|O3|Holds its shape when cut|—|knife, spatula, plates|—
`
  },
  {
    id: "pasta_with_tomato_sauce", name: "Pasta with Tomato Sauce", image: "img/350/penne.webp",
    rows: `
O|opt_pasta|penne|Penne|TRUE
O|opt_pasta|spaghetti|Spaghetti|FALSE
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|1|tbsp|14|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|1|pcs|5|linear|—|thinly sliced
I|onion|Onion (optional)|img/350/onion.webp|20|g|20|linear|—|finely diced
I|tomato_passata|Tomato passata (or crushed canned tomatoes)|img/350/tomato_passata.webp|150|g|150|linear|—|—
I|sugar|Sugar (only if the tomatoes are sour)|img/350/sugar.webp|0.125|tsp|0.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|basil|Fresh basil leaves|img/350/basil.webp|3|leaves|1.5|linear|—|—
I|penne|Penne|img/350/penne.webp|100|g|100|linear|opt_pasta = penne|—
I|spaghetti|Spaghetti (dry)|img/350/spaghetti.webp|100|g|100|linear|opt_pasta = spaghetti|—
I|salt_pasta|Salt for the pasta water|img/350/salt.webp|1|tsp|6|linear|—|—
I|parmesan|Parmesan, to serve|img/350/parmesan.webp|10|g|10|linear|—|grated
S|K1|K|Slice the garlic and onion|Slice the garlic thinly and finely dice the onion.|action|—|(40 + 40 × servings) × skill_factor|—|Sliced|garlic; onion|chef_knife, chopping_board|—
S|P1|P|Boil the pasta water|Bring a large pot of water to the boil and salt it.|wait|high|600|—|Rolling boil|salt_pasta|cooking_pot, stovetop|—
S|S1|S|Soften onion and garlic|Warm the olive oil and gently cook the onion until soft, then the garlic until fragrant; do not let it brown.|action|medium-low|300|K1|Soft, fragrant|extra_virgin_olive_oil|pan, stovetop, wooden_spoon|—
S|S2|S|Simmer the sauce|Add the passata, salt (and sugar if needed) and simmer until slightly thickened. Tear in the basil at the end.|wait|low|900|S1|Slightly thick, glossy|tomato_passata; sugar; salt; basil|pan, wooden_spoon|—
S|P2|P|Cook the pasta|Cook the pasta until al dente. Keep a cup of pasta water, then drain.|wait|high|660|P1|Al dente|penne; spaghetti|cooking_pot, colander|—
S|F1|F|Toss and serve|Toss the pasta in the sauce with a splash of pasta water until glossy. Serve with Parmesan.|action|medium|90|P2, S2|Coated and glossy|parmesan|pan, tongs, plates|—
`
  },
  {
    id: "pasta_with_basil_pesto", name: "Pasta with Basil Pesto", image: "img/350/pesto.webp",
    rows: `
O|opt_pesto|homemade|Homemade pesto|TRUE
O|opt_pesto|jar|Pesto from a jar|FALSE
I|basil|Fresh basil leaves|img/350/basil.webp|15|g|15|linear|opt_pesto = homemade|—
I|pine_nuts|Pine nuts|img/350/pine_nuts.webp|8|g|8|linear|opt_pesto = homemade|—
I|garlic|Garlic clove|img/350/garlic.webp|0.25|pcs|1.5|linear, rounded up|opt_pesto = homemade|—
I|parmesan|Parmesan|img/350/parmesan.webp|15|g|15|linear|—|grated
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|2|tbsp|27|linear|opt_pesto = homemade|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.4|linear|opt_pesto = homemade|—
I|pesto|Basil pesto (jar)|img/350/pesto.webp|3|tbsp|45|linear|opt_pesto = jar|—
I|spaghetti|Spaghetti or linguine (dry)|img/350/spaghetti.webp|100|g|100|linear|—|—
I|salt_pasta|Salt for the pasta water|img/350/salt.webp|1|tsp|6|linear|—|—
S|P1|P|Boil the pasta water|Bring a large pot of water to the boil and salt it.|wait|high|600|—|Rolling boil|salt_pasta|cooking_pot, stovetop|—
S|K1|K|Toast the pine nuts|Toast the pine nuts in a dry pan until just golden, then let them cool.|action|medium|180|—|Golden|pine_nuts|pan, stovetop|opt_pesto = homemade
S|K2|K|Make the pesto|Blend (or pound) the basil, pine nuts, garlic and salt, then add the olive oil and finally stir in most of the Parmesan.|action|—|(120 + 30 × servings) × skill_factor|K1|Bright green, spoonable|basil; garlic; extra_virgin_olive_oil; salt; parmesan|blender, spoon|opt_pesto = homemade|countertop
S|P2|P|Cook the pasta|Cook until al dente. Keep a cup of pasta water, then drain.|wait|high|600|P1|Al dente|spaghetti|cooking_pot, colander|—
S|F1|F|Toss and serve|Off the heat, toss the pasta with the pesto and a few spoons of pasta water until creamy. Never cook the pesto. Top with the rest of the Parmesan.|action|off|60 + 15 × servings|P2, K2|Creamy green coating|pesto; parmesan|bowl, tongs, plates|—
`
  },
  {
    id: "spaghetti_aglio_e_olio", name: "Spaghetti Aglio e Olio", image: "img/350/garlic.webp",
    rows: `
O|opt_heat|mild|Mild (a pinch of chili flakes)|TRUE
O|opt_heat|hot|Spicy (a fresh chili)|FALSE
I|spaghetti|Spaghetti (dry)|img/350/spaghetti.webp|100|g|100|linear|—|—
I|salt_pasta|Salt for the pasta water|img/350/salt.webp|1|tsp|6|linear|—|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|2|tbsp|27|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|2|pcs|10|linear|—|thinly sliced
I|chili_flakes|Chili flakes|img/350/chili_flakes.webp|0.125|tsp|0.3|linear|opt_heat = mild|—
I|chili_pepper|Fresh red chili|img/350/chili_pepper.webp|0.25|pcs|3|linear, rounded up|opt_heat = hot|thinly sliced
I|parsley|Fresh parsley|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
S|P1|P|Boil the pasta water|Bring a large pot of water to the boil and salt it well.|wait|high|600|—|Rolling boil|salt_pasta|cooking_pot, stovetop|—
S|K1|K|Slice garlic, chop parsley|Slice the garlic thinly, chop the parsley and slice the chili if using.|action|—|(60 + 60 × servings) × skill_factor|—|Ready|garlic; parsley; chili_pepper|chef_knife, chopping_board|—
S|P2|P|Cook the spaghetti|Cook the spaghetti 1 minute less than the package says. Keep a cup of the pasta water.|wait|high|540|P1|Just short of al dente|spaghetti|cooking_pot, tongs|—
S|S1|S|Infuse the oil|While the pasta cooks, put the oil, garlic and chili in the cold pan and heat gently until the garlic turns pale golden. Brown garlic tastes bitter.|action|low|240|K1|Pale golden, fragrant|extra_virgin_olive_oil; chili_flakes|pan, stovetop|—
S|F1|F|Emulsify|Move the spaghetti into the pan with a ladle of pasta water and toss hard over the heat until a light, glossy sauce forms. Toss in the parsley.|action|medium|120|P2, S1|Glossy, not oily|—|pan, tongs, ladle|—
S|F2|F|Serve|Serve straight away.|action|off|20 + 10 × servings|F1|Served|—|plates|—
`
  },
  {
    id: "fettuccine_alfredo", name: "Fettuccine Alfredo", image: "img/350/fettuccine.webp",
    rows: `
O|opt_style|cream|Creamy (with cream)|TRUE
O|opt_style|classic|Classic Roman (butter and Parmesan only)|FALSE
I|fettuccine|Fettuccine|img/350/fettuccine.webp|100|g|100|linear|—|—
I|salt_pasta|Salt for the pasta water|img/350/salt.webp|1|tsp|6|linear|—|—
I|butter|Butter|img/350/butter.webp|20|g|20|linear|—|—
I|cream|Cream (30% fat)|img/350/cream.webp|60|ml|60|linear|opt_style = cream|—
I|parmesan|Parmesan|img/350/parmesan.webp|35|g|35|linear|—|finely grated
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|nutmeg|Nutmeg (optional)|img/350/nutmeg.webp|0.015625|tsp|0.03|linear|—|—
I|parsley|Parsley, to serve|img/350/parsley.webp|1|tsp|1|linear|—|chopped
S|P1|P|Boil the pasta water|Bring a large pot of water to the boil and salt it.|wait|high|600|—|Rolling boil|salt_pasta|cooking_pot, stovetop|—
S|S1|S|Grate the cheese|Grate the Parmesan finely; pre-grated cheese can turn grainy.|action|—|(40 + 30 × servings) × skill_factor|—|Finely grated|parmesan|cheese_grater|—|countertop
S|P2|P|Cook the fettuccine|Cook until al dente. Keep a cup of the pasta water.|wait|high|540|P1|Al dente|fettuccine|cooking_pot, tongs|—
S|S2|S|Warm butter and cream|Melt the butter in the pan (with the cream, if using) and warm gently; do not boil hard.|action|low|180|P1|Melted, warm|butter; cream|pan, stovetop|—
S|F1|F|Toss with cheese|Move the pasta into the pan with a splash of pasta water. Off the heat add the Parmesan a handful at a time, tossing until silky. Season with pepper and a little nutmeg.|action|off|120|P2, S1, S2|Silky sauce clings|ground_black_pepper; nutmeg|pan, tongs|—
S|F2|F|Serve|Serve at once, sprinkled with parsley.|action|off|20 + 10 × servings|F1|Served|parsley|plates|—
`
  },
  {
    id: "macaroni_and_cheese", name: "Macaroni and Cheese", image: "img/350/macaroni.webp",
    rows: `
O|opt_finish|stovetop|Creamy, straight from the pot|TRUE
O|opt_finish|baked|Baked with a crunchy breadcrumb top|FALSE
I|macaroni|Macaroni|img/350/macaroni.webp|90|g|90|linear|—|—
I|salt_pasta|Salt for the pasta water|img/350/salt.webp|1|tsp|6|linear|—|—
I|butter|Butter|img/350/butter.webp|15|g|15|linear|—|—
I|flour|Flour|img/350/flour.webp|12|g|12|linear|—|—
I|milk|Milk|img/350/milk.webp|200|ml|206|linear|—|—
I|cheddar|Mature cheddar|img/350/cheddar.webp|70|g|70|linear|—|grated
I|mustard|Mustard (optional)|img/350/mustard.webp|0.25|tsp|1.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|breadcrumb|Breadcrumbs|img/350/breadcrumb.webp|1|tbsp|8|linear|opt_finish = baked|—
I|parmesan|Parmesan (for the top)|img/350/parmesan.webp|8|g|8|linear|opt_finish = baked|grated
S|P1|P|Boil the pasta water|Bring a pot of water to the boil and salt it.|wait|high|600|—|Rolling boil|salt_pasta|cooking_pot, stovetop|—
S|S1|S|Grate the cheese|Grate the cheddar.|action|—|(30 + 40 × servings) × skill_factor|—|Grated|cheddar|cheese_grater|—|countertop
S|O1|O|Preheat the oven|Turn the oven on to 200 °C conventional (180 °C fan).|action|200 °C (180 °C fan)|15|—|Oven on|—|oven|opt_finish = baked
S|P2|P|Cook the macaroni|Cook the macaroni 1 minute short of al dente and drain.|wait|high|480|P1|Just al dente|macaroni|cooking_pot, colander|—
S|S2|S|Make the roux|Melt the butter in the saucepan, stir in the flour and cook for a minute.|action|medium|90|—|Bubbling paste|butter; flour|saucepan, stovetop, whisk|—
S|S3|S|Add the milk|Whisk in the milk a little at a time and simmer, whisking, until thick enough to coat a spoon.|action|medium|360|S2|Coats the spoon|milk|saucepan, whisk|—
S|S4|S|Melt in the cheese|Off the heat stir in the cheddar, mustard, salt and pepper until smooth.|action|off|90|S3, S1|Smooth cheese sauce|mustard; salt; ground_black_pepper|saucepan, wooden_spoon|—
S|F1|F|Combine|Stir the macaroni into the sauce.|action|off|60|S4, P2|Coated|—|saucepan, wooden_spoon|—
S|O2|O|Bake the top|Tip into the baking dish, scatter breadcrumbs and Parmesan on top and bake until golden and bubbling.|wait|200 °C (180 °C fan)|1200|F1, O1|Golden crust|breadcrumb; parmesan|oven, baking_dish|opt_finish = baked
S|F2|F|Serve|Serve hot.|action|off|20 + 10 × servings|F1, O2|Served|—|spoon, plates|—
`
  },
  {
    id: "potato_gnocchi", name: "Potato Gnocchi with Tomato Sauce", image: "img/350/gnocchi.webp",
    rows: `
O|opt_gnocchi|homemade|Homemade from potatoes|TRUE
O|opt_gnocchi|store|Store-bought gnocchi|FALSE
I|potato|Floury potatoes|img/350/potato.webp|200|g|200|linear|opt_gnocchi = homemade|unpeeled
I|flour|Flour (plus extra for dusting)|img/350/flour.webp|60|g|60|linear|opt_gnocchi = homemade|—
I|egg_yolk|Egg yolk|img/350/egg_yolk.webp|0.25|pcs|5|linear, rounded up|opt_gnocchi = homemade|—
I|gnocchi|Potato gnocchi (store-bought)|img/350/gnocchi.webp|200|g|200|linear|opt_gnocchi = store|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|sliced
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|150|g|150|linear|—|—
I|basil|Fresh basil leaves|img/350/basil.webp|3|leaves|1.5|linear|—|—
I|parmesan|Parmesan, to serve|img/350/parmesan.webp|15|g|15|linear|—|grated
S|G1|G|Boil the potatoes|Boil the whole unpeeled potatoes until a knife slides in easily.|wait|medium-high|1800 (doc: 25 to 35 min)|—|Tender all the way|potato|cooking_pot, stovetop|opt_gnocchi = homemade
S|G2|G|Peel and mash|Peel them while hot (hold with a fork) and press through a ricer or mash until completely smooth. Spread out to let the steam escape.|action|—|(240 + 60 × servings) × skill_factor|G1|Smooth, steaming off|—|fork, bowl|opt_gnocchi = homemade|countertop
S|G3|G|Make the dough|Add the flour, egg yolk and a pinch of salt and knead briefly into a soft dough. Use as little flour as possible; too much makes them heavy.|action|—|(120 + 30 × servings) × skill_factor|G2|Soft, not sticky|flour; egg_yolk|bowl|opt_gnocchi = homemade|countertop
S|G4|G|Shape the gnocchi|Roll into finger-thick ropes on a floured board and cut into 2 cm pieces. Roll each over a fork for ridges if you like.|action|—|(180 + 120 × servings) × skill_factor|G3|Shaped, dusted with flour|—|chopping_board, knife, fork|opt_gnocchi = homemade
S|S1|S|Make the sauce|Warm the oil with the garlic, add the passata and a pinch of salt and simmer until slightly thick. Tear in the basil.|wait|low|900|—|Slightly thick|olive_oil; garlic; tomato_passata; salt; basil|pan, stovetop, wooden_spoon|—
S|P1|P|Boil the water|Bring a large pot of salted water to the boil.|wait|high|600|—|Rolling boil|—|cooking_pot, stovetop|—
S|P2|P|Cook the gnocchi|Drop the gnocchi in batches. When they float to the top, cook 30 seconds more and lift them out with a slotted spoon.|action|high|180 + 30 × servings|P1, G4|Floating|gnocchi|cooking_pot, spoon|—
S|F1|F|Sauce and serve|Toss the gnocchi gently in the sauce and serve with Parmesan.|action|low|60 + 15 × servings|P2, S1|Coated|parmesan|pan, spoon, plates|—
`
  },
  {
    id: "mushroom_risotto", name: "Mushroom Risotto", image: "img/350/arborio_rice.webp",
    rows: `
O|opt_wine|wine|With white wine|TRUE
O|opt_wine|no_wine|Without wine|FALSE
I|vegetable_stock|Hot vegetable stock|img/350/vegetable_stock.webp|300|ml|300|linear|—|—
I|white_mushroom|Mushrooms|img/350/white_mushroom.webp|120|g|120|linear|—|sliced
I|butter|Butter|img/350/butter.webp|20|g|20|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|shallot|Shallot (or small onion)|img/350/shallot.webp|0.5|pcs|25|linear, rounded up|—|finely diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|arborio_rice|Arborio (risotto) rice|img/350/arborio_rice.webp|80|g|80|linear|—|—
I|white_wine|Dry white wine|img/350/white_wine.webp|40|ml|40|linear|opt_wine = wine|—
I|parmesan|Parmesan|img/350/parmesan.webp|20|g|20|linear|—|grated
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
S|R1|R|Heat the stock|Heat the stock in a saucepan and keep it just below a simmer.|action|low|60|—|Hot|vegetable_stock|saucepan, stovetop|—
S|K1|K|Chop|Slice the mushrooms, finely dice the shallot, mince the garlic and chop the parsley.|action|—|(120 + 90 × servings) × skill_factor|—|Chopped|white_mushroom; shallot; garlic; parsley|chef_knife, chopping_board|—
S|M1|M|Brown the mushrooms|Fry the mushrooms in half the oil and a knob of butter on high heat until golden. Season and set aside.|action|high|420|K1|Golden, no liquid|—|pan, stovetop, spatula|—
S|R2|R|Toast the rice|In the wide pot soften the shallot in the rest of the oil, add the garlic, then the rice and stir until the grains look glassy at the edges.|action|medium|300|K1|Grains translucent at the edges|olive_oil; arborio_rice|cooking_pot, wooden_spoon|—
S|R3|R|Deglaze|Pour in the wine and stir until it is absorbed.|action|medium|90|R2|Absorbed|white_wine|cooking_pot, wooden_spoon|opt_wine = wine
S|R4|R|Add stock ladle by ladle|Add a ladle of hot stock and stir until it is almost absorbed, then the next. Keep going until the rice is creamy and just tender with a little bite.|action|medium|1080 (doc: 17 to 20 min)|R3, R1|Creamy, al dente|—|cooking_pot, ladle, wooden_spoon|—
S|R5|R|Finish (mantecatura)|Off the heat stir in the mushrooms, the rest of the butter and the Parmesan. Season, cover and rest 2 minutes.|action|off|150|R4, M1|Flowing, glossy|butter; parmesan; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Serve in warm plates with parsley; risotto should spread slowly on the plate.|action|off|30 + 15 × servings|R5|Served|—|ladle, plates|—
`
  },
  {
    id: "margherita_pizza", name: "Margherita Pizza", image: "img/350/mozzarella.webp",
    rows: `
O|opt_dough|homemade|Homemade dough|TRUE
O|opt_dough|store|Store-bought pizza dough|FALSE
I|flour|Flour (type 00 or bread flour)|img/350/flour.webp|125|g|125|linear|opt_dough = homemade|—
I|water|Lukewarm water|img/350/water.webp|80|ml|80|linear|opt_dough = homemade|—
I|yeast|Dry yeast|img/350/yeast.webp|0.375|tsp|1.2|linear|opt_dough = homemade|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|dough|Pizza dough (store-bought)|img/350/dough.webp|200|g|200|linear|opt_dough = store|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|70|g|70|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.125|tsp|0.15|linear|—|—
I|mozzarella|Mozzarella|img/350/mozzarella.webp|80|g|80|linear|—|torn, drained
I|basil|Fresh basil leaves|img/350/basil.webp|4|leaves|2|linear|—|—
S|D1|D|Make the dough|Dissolve the yeast in the water, add to the flour with the salt and half the oil, and knead until smooth and elastic.|action|—|(480 + 60 × servings) × skill_factor|—|Smooth, elastic|flour; water; yeast; salt|bowl|opt_dough = homemade|countertop
S|D2|D|Let it rise|Cover and let it double in a warm place.|wait|—|3600 (doc: 1 to 2 h)|D1|Doubled|—|bowl, plastic_wrap|opt_dough = homemade
S|O1|O|Preheat the oven|Turn the oven to its highest setting (250 °C or more) with the tray inside.|action|250 °C|15|D1|Oven on|—|oven, tray|—
S|O2|O|Let the oven get very hot|A very hot oven and tray give a crisp base.|wait|250 °C|1500|O1|Fully hot|—|oven|—
S|T1|T|Prepare the toppings|Mix the passata with the oregano and a pinch of salt. Tear and drain the mozzarella.|action|—|(60 + 30 × servings) × skill_factor|—|Ready|tomato_passata; oregano; mozzarella; salt|bowl, spoon|—|countertop
S|D3|D|Stretch the dough|Press and stretch each piece (one pizza per person or two to share) into a thin round on baking paper, leaving a thicker rim.|action|—|(120 + 90 × servings) × skill_factor|D2|Thin round|dough|parchment_paper|—|countertop
S|D4|D|Top the pizza|Spread a thin layer of sauce, scatter the mozzarella and drizzle with the rest of the oil.|action|—|60 × servings|D3, T1|Topped|olive_oil|spoon|—|countertop
S|O3|O|Bake|Slide the pizza on its paper onto the hot tray and bake until the rim is browned and the cheese bubbles.|wait|250 °C|540 × servings|D4, O2|Blistered rim, bubbling cheese|—|oven, tray|—
S|F1|F|Basil and serve|Scatter fresh basil on top, cut into slices and serve.|action|off|30 + 15 × servings|O3|Served|basil|chef_knife, chopping_board|—
`
  },
  {
    id: "garlic_bread", name: "Garlic Bread", image: "img/350/bread.webp",
    rows: `
O|opt_cheese|plain|Classic|TRUE
O|opt_cheese|cheese|With melted mozzarella|FALSE
I|bread|Baguette|img/350/bread.webp|0.25|pcs|65|linear|—|—
I|butter|Butter, soft|img/350/butter.webp|20|g|20|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|crushed
I|parsley|Parsley|img/350/parsley.webp|1|tbsp|4|linear|—|finely chopped
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.35|linear|—|—
I|mozzarella|Mozzarella|img/350/mozzarella.webp|30|g|30|linear|opt_cheese = cheese|grated
S|O1|O|Preheat the oven|Turn the oven on to 200 °C conventional (180 °C fan).|action|200 °C (180 °C fan)|15|—|Oven on|—|oven|—
S|K1|K|Make the garlic butter|Mash the soft butter with the crushed garlic, parsley and salt.|action|—|(90 + 30 × servings) × skill_factor|—|Evenly green-flecked|butter; garlic; parsley; salt|bowl, fork, chef_knife, chopping_board|—|countertop
S|K2|K|Slice and spread|Cut the baguette into thick slices without cutting through the bottom crust (or halve it lengthwise) and spread the garlic butter between the slices. Add the cheese if using.|action|—|(60 + 30 × servings) × skill_factor|K1|Buttered|bread; mozzarella|knife, chopping_board|—
S|O2|O|Bake|Wrap in foil and bake 10 minutes, then open the foil and bake until crisp and golden.|wait|200 °C (180 °C fan)|900|K2, O1|Crisp edges|—|oven, tray, tin_foil|—
S|F1|F|Serve|Pull apart and serve warm.|action|off|20|O2|Served|—|chopping_board|—
`
  },
  {
    id: "tuna_tomato_pasta", name: "Tuna Tomato Pasta", image: "img/350/tuna.webp",
    rows: `
O|opt_extra|capers_olives|With capers and olives|TRUE
O|opt_extra|plain|Plain|FALSE
I|penne|Penne (or other short pasta)|img/350/penne.webp|100|g|100|linear|—|—
I|salt_pasta|Salt for the pasta water|img/350/salt.webp|1|tsp|6|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|25|g|25|linear|—|finely diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|sliced
I|tomato_passata|Tomato passata or chopped canned tomatoes|img/350/tomato_passata.webp|150|g|150|linear|—|—
I|tuna|Canned tuna, drained|img/350/tuna.webp|60|g|60|linear|—|—
I|capers|Capers|img/350/capers.webp|0.5|tbsp|5|linear|opt_extra = capers_olives|rinsed
I|olives|Black olives|img/350/olives.webp|15|g|15|linear|opt_extra = capers_olives|halved
I|chili_flakes|Chili flakes (optional)|img/350/chili_flakes.webp|0.0625|tsp|0.15|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
S|P1|P|Boil the pasta water|Bring a large pot of water to the boil and salt it.|wait|high|600|—|Rolling boil|salt_pasta|cooking_pot, stovetop|—
S|K1|K|Chop|Dice the onion, slice the garlic, halve the olives and chop the parsley.|action|—|(60 + 60 × servings) × skill_factor|—|Chopped|onion; garlic; olives; parsley|chef_knife, chopping_board|—
S|S1|S|Soften onion and garlic|Cook the onion in the oil until soft, add the garlic and chili flakes for a minute.|action|medium|360|K1|Soft|olive_oil; chili_flakes|pan, stovetop, wooden_spoon|—
S|S2|S|Simmer the sauce|Add the tomatoes and salt and simmer 10 minutes. Stir in the tuna, capers and olives for the last 2 minutes so the tuna stays in flakes.|wait|low|600|S1|Thick, tuna warmed through|tomato_passata; salt; tuna; capers|pan, wooden_spoon|—
S|P2|P|Cook the pasta|Cook until al dente and drain, keeping a little pasta water.|wait|high|660|P1|Al dente|penne|cooking_pot, colander|—
S|F1|F|Toss and serve|Toss the pasta with the sauce and a splash of pasta water, then sprinkle with parsley.|action|low|60 + 15 × servings|P2, S2|Coated|—|pan, tongs, plates|—
`
  },
  {
    id: "spinach_ricotta_ravioli", name: "Spinach and Ricotta Ravioli", image: "img/350/ricotta.webp",
    rows: `
O|opt_sauce|butter_sage|Brown butter and sage|TRUE
O|opt_sauce|tomato|Simple tomato sauce|FALSE
I|flour|Flour (type 00 or all-purpose)|img/350/flour.webp|75|g|75|linear|—|—
I|egg|Egg (for the dough)|img/350/egg.webp|0.75|pcs|41|linear, rounded up|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|0.25|tsp|1|linear|—|—
I|spinach|Fresh spinach|img/350/spinach.webp|60|g|60|linear|—|—
I|ricotta|Ricotta|img/350/ricotta.webp|60|g|60|linear|—|—
I|parmesan|Parmesan|img/350/parmesan.webp|20|g|20|linear|—|grated
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.03125|tsp|0.07|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|butter|Butter|img/350/butter.webp|20|g|20|linear|opt_sauce = butter_sage|—
I|sage|Fresh sage leaves|img/350/sage.webp|3|leaves|1|linear|opt_sauce = butter_sage|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|120|g|120|linear|opt_sauce = tomato|—
S|D1|D|Make the pasta dough|Make a well in the flour, add the egg and oil and work into a firm dough. Knead until smooth.|action|—|(480 + 60 × servings) × skill_factor|—|Smooth and firm|flour; egg; olive_oil|bowl|—|countertop
S|D2|D|Rest the dough|Wrap and rest so it rolls out easily.|wait|—|1800|D1|Rested|—|plastic_wrap|—
S|K1|K|Wilt the spinach|Wilt the spinach in a dry pan, cool, squeeze out all the water and chop finely.|action|medium|300|—|Dry and chopped|spinach|pan, stovetop, chef_knife, chopping_board|—
S|K2|K|Mix the filling|Mix the spinach with ricotta, most of the Parmesan, nutmeg, salt and pepper.|action|—|(60 + 30 × servings) × skill_factor|K1|Thick filling|ricotta; parmesan; nutmeg; salt; ground_black_pepper|bowl, spoon|—|countertop
S|D3|D|Roll and fill|Roll the dough very thin (you should almost see your hand through it). Put teaspoons of filling on one sheet, brush around with water, cover with a second sheet, press out the air and cut into squares.|action|—|(600 + 300 × servings) × skill_factor|D2, K2|Sealed ravioli|—|rolling_pin, knife|—|countertop
S|P1|P|Boil the water|Bring a large pot of salted water to the boil.|wait|high|600|K2|Rolling boil|—|cooking_pot, stovetop|—
S|S1|S|Make the sauce|Brown the butter with the sage leaves until nutty and the sage is crisp, or warm the passata with a pinch of salt.|action|medium|240|D3|Nutty brown butter / warm sauce|butter; sage; tomato_passata|pan, stovetop|—
S|P2|P|Cook the ravioli|Cook the ravioli in gently boiling water until they float and the edges are tender, 3 to 4 minutes.|wait|medium-high|210|P1, D3|Tender edges|—|cooking_pot, spoon|—
S|F1|F|Sauce and serve|Lift the ravioli into the sauce, toss gently and serve with the rest of the Parmesan.|action|low|60 + 15 × servings|P2, S1|Served|—|pan, spoon, plates|—
`
  },
  {
    id: "roast_chicken", name: "Roast Chicken", image: "img/350/chicken_legs.webp",
    rows: `
O|opt_sides|potatoes|Roast potatoes in the same tray|TRUE
O|opt_sides|none|Chicken only|FALSE
I|whole_chicken|Whole chicken (about 1.6 kg for 4)|— (placeholder: no image yet)|0.25|pcs|400|linear, rounded up|—|—
I|butter|Butter, soft|img/350/butter.webp|10|g|10|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|0.5|tbsp|7|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|lightly crushed
I|lemon|Lemon|img/350/lemon.webp|0.25|pcs|25|linear, rounded up|—|halved
I|thyme|Thyme sprigs (or dried thyme)|img/350/thyme.webp|1|pcs|0.5|linear|—|—
I|rosemary|Rosemary sprig|img/350/rosemary.webp|0.5|pcs|0.5|linear, rounded up|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|potato|Potatoes|img/350/potato.webp|200|g|200|linear|opt_sides = potatoes|cut in chunks
S|K1|K|Take the chicken out|Take the chicken out of the fridge, pat it dry with paper towel and let it lose its chill.|wait|—|1800|—|Room temperature, dry skin|whole_chicken|plates|—|countertop
S|O1|O|Preheat the oven|Turn the oven on to 200 °C conventional (180 °C fan).|action|200 °C (180 °C fan)|15|K1|Oven on|—|oven|—
S|K2|K|Season the chicken|Rub the skin with butter and oil, season well inside and out with salt and pepper. Put the lemon halves, garlic and herbs inside the cavity.|action|—|(180 + 30 × servings) × skill_factor|K1|Seasoned|butter; olive_oil; garlic; lemon; thyme; rosemary; salt; ground_black_pepper|tray|—
S|K3|K|Prepare the potatoes|Peel the potatoes, cut into chunks, toss with a little oil and salt and spread around the chicken.|action|—|(120 + 90 × servings) × skill_factor|K2|In the tray|potato|vegetable_peeler, chef_knife, chopping_board, tray|opt_sides = potatoes
S|O2|O|Roast|Roast breast-side up, basting with the juices once or twice, until the juices from the thickest part of the thigh run clear (75 °C inside).|wait|200 °C (180 °C fan)|4800 (doc: 20 min per 500 g + 20 min)|K3, O1|Juices run clear, 75 °C in the thigh|—|oven, tray|—
S|F1|F|Rest|Rest the chicken on a board under loose foil so the juices settle.|wait|—|900|O2|Rested|—|chopping_board, tin_foil|—
S|F2|F|Carve and serve|Carve into legs, thighs and breast slices and serve with the potatoes and the tray juices.|action|—|(240 + 30 × servings) × skill_factor|F1|Served|—|chef_knife, chopping_board, plates|—
`
  },
  {
    id: "fried_chicken", name: "Fried Chicken", image: "img/350/chicken_legs.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|spicy|Spicy (cayenne in the coating)|FALSE
I|chicken_legs|Chicken pieces (drumsticks and thighs, skin on)|img/350/chicken_legs.webp|250|g|250|linear|—|—
I|buttermilk|Buttermilk|img/350/buttermilk.webp|100|ml|103|linear|—|—
I|salt|Salt|img/350/salt.webp|0.75|tsp|4.5|linear|—|—
I|flour|Flour|img/350/flour.webp|50|g|50|linear|—|—
I|cornstarch|Cornstarch|img/350/cornstarch.webp|1|tbsp|8|linear|—|—
I|paprika_powder|Paprika|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|garlic_powder|Garlic powder|img/350/garlic_powder.webp|0.25|tsp|0.8|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.25|tsp|0.6|linear|—|—
I|cayenne_pepper|Cayenne pepper|img/350/cayenne_pepper.webp|0.25|tsp|0.5|linear|opt_heat = spicy|—
I|oil|Neutral oil for deep frying|img/350/oil.webp|250|ml|15|fixed: about 1 L per pot|—|—
S|M1|M|Marinate|Mix the buttermilk with half the salt, add the chicken and turn to coat. Cover and chill (overnight is best).|action|—|(90 + 30 × servings) × skill_factor|—|Coated, in the fridge|chicken_legs; buttermilk; salt|bowl, plastic_wrap|—|countertop
S|M2|M|Chill|Let it marinate in the fridge.|wait|—|7200 (doc: 2 h to overnight)|M1|Marinated|—|fridge|—
S|C1|C|Mix the coating|Mix the flour, cornstarch, paprika, garlic powder, pepper, the rest of the salt (and cayenne).|action|—|(60 + 15 × servings) × skill_factor|—|Mixed|flour; cornstarch; paprika_powder; garlic_powder; ground_black_pepper; cayenne_pepper|bowl, whisk|—
S|P1|P|Heat the oil|Heat 4 to 5 cm of oil in a deep heavy pot to 165 °C. Never leave hot oil alone.|wait|medium-high|600|M2|165 °C|oil|cooking_pot, stovetop|—
S|C2|C|Coat the chicken|Lift the chicken from the buttermilk, let it drip, and press it firmly into the flour mix. Rest on a rack 10 minutes so the coating sticks.|action|—|(60 + 60 × servings) × skill_factor|M2, C1|Evenly coated|—|bowl, tongs|—
S|P2|P|Fry|Fry a few pieces at a time, turning now and then, until deep golden and 75 °C inside, 12 to 15 minutes. Keep the oil around 160 °C.|action|medium-high|780 + 120 × servings|P1, C2|Deep golden, 75 °C inside|—|cooking_pot, tongs|—
S|F1|F|Drain and serve|Drain on a rack or paper towel for a few minutes and serve hot.|wait|off|180|P2|Crisp, drained|—|plates|—
`
  },
  {
    id: "beef_stew", name: "Beef Stew", image: "img/350/beef.webp",
    rows: `
O|opt_liquid|wine|Red wine and stock|TRUE
O|opt_liquid|stock|Stock only|FALSE
I|beef|Stewing beef (chuck), 4 cm cubes|img/350/beef.webp|180|g|180|linear|—|—
I|flour|Flour|img/350/flour.webp|1|tbsp|8|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|60|g|60|linear|—|chopped
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|1|tbsp|16|linear|—|—
I|red_wine|Dry red wine|img/350/red_wine.webp|60|ml|60|linear|opt_liquid = wine|—
I|beef_stock|Beef stock|img/350/beef_stock.webp|200|ml|200|linear; doubled if stock|—|—
I|bay_leaf|Bay leaf|img/350/bay_leaf.webp|1|pcs per pot|0.2|fixed: 1 per pot|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.25|tsp|0.2|linear|—|—
I|carrot|Carrots|img/350/carrot.webp|80|g|80|linear|—|thick slices
I|potato|Potatoes|img/350/potato.webp|150|g|150|linear|—|chunks
I|celery_stalk|Celery stalk|img/350/celery_stalk.webp|30|g|30|linear|—|sliced
I|parsley|Parsley, to serve|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
S|K1|K|Season the beef|Pat the beef dry, toss with the flour, half the salt and the pepper.|action|—|(60 + 30 × servings) × skill_factor|—|Dusted|beef; flour; salt; ground_black_pepper|bowl|—
S|P1|P|Brown the beef|Heat the oil in the heavy pot and brown the beef in batches on all sides. Do not crowd the pot. Set aside.|action|high|480 + 120 × servings|K1|Deep brown crust|oil|cooking_pot, stovetop, tongs|—
S|K2|K|Chop the vegetables|Chop the onion, mince the garlic, slice the carrots and celery and cut the potatoes into chunks.|action|—|(120 + 120 × servings) × skill_factor|—|Chopped|onion; garlic; carrot; potato; celery_stalk|chef_knife, chopping_board, vegetable_peeler|—
S|P2|P|Onion and tomato paste|Cook the onion in the same pot until soft, add the garlic and tomato paste and stir 1 minute.|action|medium|360|P1, K2|Soft, paste darkened|tomato_paste|cooking_pot, wooden_spoon|—
S|P3|P|Deglaze and simmer|Pour in the wine (or extra stock), scrape up the brown bits, add the stock, bay leaf, thyme, the rest of the salt and the beef. Cover and simmer very gently.|wait|low|4500 (doc: 1.5 h before the vegetables)|P2|Beef getting tender|red_wine; beef_stock; bay_leaf; thyme; salt|cooking_pot, wooden_spoon|—
S|P4|P|Add the vegetables|Add the carrots, potatoes and celery and simmer covered until everything is tender and the sauce has thickened.|wait|low|2400|P3|Beef falls apart, vegetables tender|—|cooking_pot|—
S|F1|F|Serve|Remove the bay leaf, check the seasoning and serve in bowls with parsley.|action|off|60 + 15 × servings|P4|Served|parsley|ladle|—
`
  },
  {
    id: "shepherds_pie", name: "Shepherd's Pie", image: "img/350/potato.webp",
    rows: `
O|opt_meat|lamb|Ground lamb (shepherd's pie)|TRUE
O|opt_meat|beef|Ground beef (cottage pie)|FALSE
I|potato|Floury potatoes|img/350/potato.webp|250|g|250|linear|—|peeled, chunks
I|butter|Butter|img/350/butter.webp|15|g|15|linear|—|—
I|milk|Milk|img/350/milk.webp|40|ml|41|linear|—|—
I|ground_lamb|Ground lamb|img/350/ground_lamb.webp|150|g|150|linear|opt_meat = lamb|—
I|ground_beef|Ground beef|img/350/ground_beef.webp|150|g|150|linear|opt_meat = beef|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|diced
I|carrot|Carrot|img/350/carrot.webp|40|g|40|linear|—|diced
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|1|tbsp|16|linear|—|—
I|flour|Flour|img/350/flour.webp|0.5|tbsp|5|linear|—|—
I|worcestershire_sauce|Worcestershire sauce|img/350/worcestershire_sauce.webp|1|tsp|5|linear|—|—
I|beef_stock|Stock|img/350/beef_stock.webp|100|ml|100|linear|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.25|tsp|0.2|linear|—|—
I|pea|Frozen peas|img/350/pea.webp|30|g|30|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|cheddar|Cheddar (optional, for the top)|img/350/cheddar.webp|15|g|15|linear|—|grated
S|M1|M|Boil the potatoes|Peel the potatoes, cut into chunks and boil in salted water until very tender.|wait|medium-high|1200|—|Very tender|potato|cooking_pot, stovetop, vegetable_peeler|—
S|K1|K|Dice the vegetables|Dice the onion and carrot.|action|—|(60 + 60 × servings) × skill_factor|—|Diced|onion; carrot|chef_knife, chopping_board|—
S|S1|S|Brown the meat|Brown the meat in the oil, breaking it up. Add the onion and carrot and cook until soft.|action|medium-high|600|K1|Browned, vegetables soft|ground_lamb; ground_beef; oil|pan, stovetop, wooden_spoon|—
S|S2|S|Make the gravy|Stir in the tomato paste and flour, then the Worcestershire sauce, stock and thyme. Simmer until thick, add the peas and season.|wait|low|900|S1|Thick gravy|tomato_paste; flour; worcestershire_sauce; beef_stock; thyme; pea|pan, wooden_spoon|—
S|O1|O|Preheat the oven|Turn the oven on to 200 °C conventional (180 °C fan).|action|200 °C (180 °C fan)|15|S1|Oven on|—|oven|—
S|M2|M|Mash|Drain the potatoes and mash with butter, warm milk, salt and pepper until smooth.|action|—|(120 + 30 × servings) × skill_factor|M1|Smooth mash|butter; milk; salt; ground_black_pepper|cooking_pot, colander, fork|—
S|O2|O|Assemble|Spoon the filling into the baking dish, spread the mash on top, rough it up with a fork and scatter the cheese.|action|—|(120 + 30 × servings) × skill_factor|S2, M2|Covered|cheddar|baking_dish, fork|—|countertop
S|O3|O|Bake|Bake until the top is golden and the filling bubbles at the edges.|wait|200 °C (180 °C fan)|1500|O2, O1|Golden, bubbling|—|oven, baking_dish|—
S|F1|F|Rest and serve|Rest 5 minutes, then serve.|wait|—|300|O3|Served|—|spoon, plates|—
`
  },
  {
    id: "meatloaf", name: "Meatloaf", image: "img/350/ground_beef.webp",
    rows: `
O|opt_meat|mix|Beef and pork|TRUE
O|opt_meat|beef|All beef|FALSE
I|ground_beef|Ground beef|img/350/ground_beef.webp|100|g|100|linear; doubled if beef|—|—
I|ground_pork|Ground pork|img/350/ground_pork.webp|100|g|100|linear|opt_meat = mix|—
I|onion|Onion|img/350/onion.webp|30|g|30|linear|—|finely grated or diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|breadcrumb|Breadcrumbs|img/350/breadcrumb.webp|20|g|20|linear|—|—
I|milk|Milk|img/350/milk.webp|2|tbsp|30|linear|—|—
I|egg|Egg|img/350/egg.webp|0.25|pcs|14|linear, rounded up|—|—
I|worcestershire_sauce|Worcestershire sauce|img/350/worcestershire_sauce.webp|1|tsp|5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|ketchup|Ketchup (glaze)|img/350/ketchup.webp|1.5|tbsp|25|linear|—|—
I|brown_sugar|Brown sugar (glaze)|img/350/brown_sugar.webp|0.5|tbsp|6|linear|—|—
I|mustard|Mustard (glaze)|img/350/mustard.webp|0.25|tsp|1.5|linear|—|—
S|O1|O|Preheat the oven|Turn the oven on to 180 °C conventional (160 °C fan).|action|180 °C (160 °C fan)|15|—|Oven on|—|oven|—
S|K1|K|Soak the breadcrumbs|Soak the breadcrumbs in the milk for a few minutes. Dice the onion and mince the garlic.|action|—|(60 + 30 × servings) × skill_factor|—|Soft crumbs|breadcrumb; milk; onion; garlic|bowl, chef_knife, chopping_board|—
S|K2|K|Mix the meat|Add the meat, egg, Worcestershire sauce, salt and pepper and mix with your hands until just combined.|action|—|(90 + 30 × servings) × skill_factor|K1|Evenly mixed|ground_beef; ground_pork; egg; worcestershire_sauce; salt; ground_black_pepper|bowl|—
S|K3|K|Shape and glaze|Press into the loaf pan (or shape a loaf on a tray). Mix ketchup, brown sugar and mustard and spread over the top.|action|—|(90 + 15 × servings) × skill_factor|K2|Shaped and glazed|ketchup; brown_sugar; mustard|loaf_pan, spoon|—|countertop
S|O2|O|Bake|Bake until 70 °C in the middle and the glaze is sticky.|wait|180 °C (160 °C fan)|3300 (doc: 50 to 60 min)|K3, O1|70 °C inside|—|oven, loaf_pan|—
S|F1|F|Rest and slice|Rest 10 minutes so it slices cleanly, then cut into thick slices.|wait|—|600|O2|Sliced|—|chef_knife, chopping_board, plates|—
`
  },
  {
    id: "chicken_schnitzel", name: "Chicken Schnitzel", image: "img/350/chicken_breast.webp",
    rows: `
O|opt_side|lemon|With lemon wedges|TRUE
O|opt_side|potato_salad|With lemon and a green salad|FALSE
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|160|g|160|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|flour|Flour|img/350/flour.webp|25|g|25|linear|—|—
I|egg|Egg|img/350/egg.webp|0.5|pcs|27|linear, rounded up|—|—
I|breadcrumb|Breadcrumbs (fine)|img/350/breadcrumb.webp|40|g|40|linear|—|—
I|oil|Oil for shallow frying|img/350/oil.webp|60|ml|12|linear|—|—
I|butter|Butter (optional, for flavour)|img/350/butter.webp|10|g|10|linear|—|—
I|lemon|Lemon wedges|img/350/lemon.webp|0.25|pcs|25|linear, rounded up|—|—
I|lettuce|Green salad|img/350/lettuce.webp|50|g|50|linear|opt_side = potato_salad|—
S|K1|K|Flatten the chicken|Cut each breast in half horizontally, put between two sheets of cling film and pound to an even 5 mm. Season with salt and pepper.|action|—|(120 + 90 × servings) × skill_factor|—|Thin and even|chicken_breast; salt; ground_black_pepper|chopping_board, meat_tenderizer, plastic_wrap|—
S|B1|B|Set up the breading|Put the flour, the beaten egg and the breadcrumbs on three plates.|action|—|90|—|Three plates ready|flour; egg; breadcrumb|plates, fork|—|countertop
S|B2|B|Bread the chicken|Dust with flour, dip in egg, then press lightly into the crumbs. Do not press hard; the crust should puff.|action|—|(60 + 60 × servings) × skill_factor|K1, B1|Coated|—|plates, fork|—|countertop
S|P1|P|Heat the oil|Heat about 1 cm of oil (with the butter) in the frying pan until a breadcrumb sizzles.|action|medium-high|180|B1|Crumb sizzles|oil; butter|pan, stovetop|—
S|P2|P|Fry|Fry 2 to 3 minutes per side, swirling the pan so oil washes over the top, until golden and cooked through.|action|medium-high|300 + 60 × servings|P1, B2|Golden, puffed crust|—|pan, tongs|—
S|F1|F|Serve|Drain briefly on paper towel and serve with lemon wedges (and salad).|action|off|30 + 15 × servings|P2|Served|lemon; lettuce|plates|—
`
  },
  {
    id: "baked_salmon", name: "Baked Salmon", image: "img/350/salmon.webp",
    rows: `
O|opt_herbs|dill|Lemon and dill|TRUE
O|opt_herbs|garlic_parsley|Garlic butter and parsley|FALSE
I|salmon|Salmon fillet (skin on)|img/350/salmon.webp|150|g|150|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|0.5|tbsp|7|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|lemon|Lemon|img/350/lemon.webp|0.25|pcs|25|linear, rounded up|—|slices and wedges
I|dill|Fresh dill|img/350/dill.webp|1|tbsp|2|linear|opt_herbs = dill|chopped
I|butter|Butter|img/350/butter.webp|10|g|10|linear|opt_herbs = garlic_parsley|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|opt_herbs = garlic_parsley|minced
I|parsley|Parsley|img/350/parsley.webp|1|tbsp|4|linear|opt_herbs = garlic_parsley|chopped
S|O1|O|Preheat the oven|Turn the oven on to 200 °C conventional (180 °C fan).|action|200 °C (180 °C fan)|15|—|Oven on|—|oven|—
S|K1|K|Season the salmon|Put the fillets skin-side down on a tray lined with baking paper. Rub with oil and season with salt and pepper.|action|—|(60 + 20 × servings) × skill_factor|—|Seasoned|salmon; olive_oil; salt; ground_black_pepper|tray, parchment_paper|—|countertop
S|K2|K|Add the flavour|Top with lemon slices and dill, or with garlic butter (soft butter mixed with garlic) and parsley.|action|—|(60 + 20 × servings) × skill_factor|K1|Topped|lemon; dill; butter; garlic; parsley|chef_knife, chopping_board|—
S|O2|O|Bake|Bake until the salmon flakes easily but is still slightly translucent in the very middle (about 50 °C inside).|wait|200 °C (180 °C fan)|720 (doc: 10 to 14 min)|K2, O1|Flakes easily|—|oven, tray|—
S|F1|F|Serve|Serve with lemon wedges.|action|off|30 + 10 × servings|O2|Served|—|spatula, plates|—
`
  },
  {
    id: "beef_stroganoff", name: "Beef Stroganoff", image: "img/350/beef.webp",
    rows: `
O|opt_side|rice|With rice|TRUE
O|opt_side|mash|With mashed potatoes|FALSE
I|beef|Beef sirloin or tenderloin|img/350/beef.webp|150|g|150|linear|—|thin strips
I|white_mushroom|Mushrooms|img/350/white_mushroom.webp|80|g|80|linear|—|sliced
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|sliced
I|butter|Butter|img/350/butter.webp|15|g|15|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|paprika_powder|Paprika|img/350/paprika_powder.webp|0.25|tsp|0.6|linear|—|—
I|flour|Flour|img/350/flour.webp|0.5|tbsp|5|linear|—|—
I|beef_stock|Beef stock|img/350/beef_stock.webp|80|ml|80|linear|—|—
I|mustard|Dijon mustard|img/350/mustard.webp|0.5|tsp|3|linear|—|—
I|sour_cream|Sour cream|img/350/sour_cream.webp|50|g|50|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
I|white_rice|Long-grain rice|img/350/white_rice.webp|70|g|70|linear|opt_side = rice|—
I|potato|Potatoes (for mash)|img/350/potato.webp|200|g|200|linear|opt_side = mash|—
S|R1|R|Cook the side|Cook the rice (1 part rice to 1.5 parts water, covered, 15 min) or boil the potatoes and mash them with a little butter and milk.|wait|low|1200|—|Ready|white_rice; potato|cooking_pot, stovetop|—
S|K1|K|Slice|Cut the beef into thin strips across the grain, slice the mushrooms and the onion, chop the parsley.|action|—|(120 + 120 × servings) × skill_factor|—|Sliced|white_mushroom; onion; parsley|chef_knife, chopping_board|—
S|P1|P|Sear the beef|Season the beef and sear in the hot oil in small batches, just 1 minute per side. Set aside; it finishes cooking in the sauce.|action|high|180 + 60 × servings|K1|Browned outside, pink inside|beef; oil|pan, stovetop, tongs|—
S|P2|P|Onion and mushrooms|Melt the butter and cook the onion and mushrooms until golden. Stir in the paprika and flour.|action|medium-high|480|P1|Golden|butter; paprika_powder; flour|pan, wooden_spoon|—
S|P3|P|Make the sauce|Pour in the stock and mustard and simmer until slightly thick. Lower the heat and stir in the sour cream; do not let it boil or it splits.|action|low|240|P2|Creamy|beef_stock; mustard; sour_cream; salt; ground_black_pepper|pan, wooden_spoon|—
S|P4|P|Beef back in|Return the beef and its juices and warm through for 1 minute.|action|low|60|P3|Hot through|—|pan, wooden_spoon|—
S|F1|F|Serve|Serve over the rice or mash with parsley on top.|action|off|30 + 15 × servings|P4, R1|Served|—|spoon, plates|—
`
  },
  {
    id: "ratatouille", name: "Ratatouille", image: "img/350/eggplant.webp",
    rows: `
O|opt_serve|bread|With crusty bread|TRUE
O|opt_serve|rice|With rice|FALSE
I|eggplant|Eggplant|img/350/eggplant.webp|100|g|100|linear|—|2 cm cubes
I|zucchini|Zucchini|img/350/zucchini.webp|100|g|100|linear|—|2 cm cubes
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|0.5|pcs|80|linear, rounded up|—|chunks
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|minced
I|tomato|Ripe tomatoes|img/350/tomato.webp|120|g|120|linear|—|chopped
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|50|g|50|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1.5|tbsp|20|linear|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.25|tsp|0.2|linear|—|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|basil|Fresh basil leaves|img/350/basil.webp|3|leaves|1.5|linear|—|—
I|bread|Crusty bread|img/350/bread.webp|1|slices|40|linear|opt_serve = bread|—
I|white_rice|Rice|img/350/white_rice.webp|70|g|70|linear|opt_serve = rice|—
S|K1|K|Cut the vegetables|Cut the eggplant and zucchini into 2 cm cubes, the pepper into chunks, chop the onion and tomatoes and mince the garlic.|action|—|(180 + 180 × servings) × skill_factor|—|All cut|eggplant; zucchini; red_bell_pepper; onion; garlic; tomato|chef_knife, chopping_board|—
S|R1|F|Cook the rice|Cook the rice (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|—|Cooked|white_rice|saucepan, stovetop|opt_serve = rice
S|P1|P|Brown the eggplant|Fry the eggplant in half the oil until golden, then set aside. Eggplant soaks up oil; that is normal.|action|medium-high|420|K1|Golden|—|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Zucchini and pepper|Add a little more oil and fry the zucchini and pepper until lightly browned. Set aside with the eggplant.|action|medium-high|360|P1|Lightly browned|—|cooking_pot, wooden_spoon|—
S|P3|P|Onion, garlic, tomatoes|Soften the onion in the rest of the oil, add the garlic, then the tomatoes, passata, thyme, salt and pepper.|action|medium|480|P2|Saucy|olive_oil; tomato_passata; thyme; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|P4|P|Simmer together|Return all the vegetables and simmer gently, half covered, until soft but not mushy.|wait|low|1800 (doc: 30 to 40 min)|P3|Soft, rich|—|cooking_pot|—
S|F1|F|Serve|Tear in the basil and serve warm or at room temperature with bread or rice.|action|off|30 + 15 × servings|P4, R1|Served|basil; bread|ladle|—
`
  },
  {
    id: "chicken_noodle_soup", name: "Chicken Noodle Soup", image: "img/350/chicken_stock.webp",
    rows: `
O|opt_chicken|breast|Chicken breast|TRUE
O|opt_chicken|legs|Chicken legs (richer)|FALSE
I|olive_oil|Olive oil|img/350/olive_oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|diced
I|carrot|Carrot|img/350/carrot.webp|50|g|50|linear|—|sliced
I|celery_stalk|Celery stalk|img/350/celery_stalk.webp|30|g|30|linear|—|sliced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|100|g|100|linear|opt_chicken = breast|—
I|chicken_legs|Chicken legs|img/350/chicken_legs.webp|180|g|180|linear|opt_chicken = legs|—
I|chicken_stock|Chicken stock|img/350/chicken_stock.webp|400|ml|400|linear|—|—
I|bay_leaf|Bay leaf|img/350/bay_leaf.webp|1|pcs per pot|0.2|fixed: 1 per pot|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.125|tsp|0.1|linear|—|—
I|egg_noodles|Egg noodles (dry)|— (placeholder: no image yet)|40|g|40|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
S|K1|K|Chop the vegetables|Dice the onion, slice the carrot and celery, mince the garlic and chop the parsley.|action|—|(90 + 90 × servings) × skill_factor|—|Chopped|onion; carrot; celery_stalk; garlic; parsley|chef_knife, chopping_board|—
S|P1|P|Soften the vegetables|Cook the onion, carrot and celery in the oil until they start to soften; add the garlic for the last minute.|action|medium|360|K1|Softening|olive_oil|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Poach the chicken|Add the stock, bay leaf, thyme and the whole chicken pieces. Bring to a boil, then simmer gently until the chicken is cooked through.|wait|low|1200 breast / 2100 legs|P1|Chicken cooked through|chicken_breast; chicken_legs; chicken_stock; bay_leaf; thyme|cooking_pot|—
S|P3|P|Shred the chicken|Lift out the chicken, shred it with two forks (discard skin and bones) and return it to the pot.|action|low|(120 + 60 × servings) × skill_factor|P2|Shredded|—|fork, chopping_board|—
S|P4|P|Cook the noodles|Add the noodles and simmer until tender. Season with salt and pepper.|wait|medium|480|P3|Noodles tender|egg_noodles; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Remove the bay leaf and serve with parsley.|action|off|30 + 15 × servings|P4|Served|—|ladle|—
`
  },
  {
    id: "vegetable_soup", name: "Vegetable Soup", image: "img/350/vegetable_stock.webp",
    rows: `
O|opt_texture|chunky|Chunky|TRUE
O|opt_texture|smooth|Blended smooth|FALSE
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|diced
I|carrot|Carrot|img/350/carrot.webp|60|g|60|linear|—|diced
I|celery_stalk|Celery stalk|img/350/celery_stalk.webp|30|g|30|linear|—|diced
I|potato|Potato|img/350/potato.webp|80|g|80|linear|—|diced
I|zucchini|Zucchini|img/350/zucchini.webp|60|g|60|linear|—|diced
I|green_beans|Green beans|img/350/green_beans.webp|40|g|40|linear|—|cut short
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|tomato_passata|Chopped tomatoes or passata|img/350/tomato_passata.webp|80|g|80|linear|—|—
I|vegetable_stock|Vegetable stock|img/350/vegetable_stock.webp|350|ml|350|linear|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.125|tsp|0.1|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
S|K1|K|Dice the vegetables|Dice the onion, carrot, celery, potato and zucchini into small even cubes, cut the beans short and mince the garlic.|action|—|(180 + 180 × servings) × skill_factor|—|Diced|onion; carrot; celery_stalk; potato; zucchini; green_beans; garlic|chef_knife, chopping_board, vegetable_peeler|—
S|P1|P|Sweat the base|Cook the onion, carrot and celery gently in the oil until soft, add the garlic for the last minute.|action|medium|420|K1|Soft|olive_oil|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer|Add the potato, tomatoes, stock, thyme, salt and pepper. Bring to a boil and simmer 10 minutes, then add the zucchini and beans and simmer until all is tender.|wait|low|1200|P1|Everything tender|tomato_passata; vegetable_stock; thyme; salt; ground_black_pepper|cooking_pot|—
S|P3|P|Blend|Blend until smooth with the immersion blender.|action|off|90|P2|Smooth|—|cooking_pot, immersion_blender|opt_texture = smooth
S|F1|F|Serve|Taste for salt and serve with parsley.|action|off|30 + 15 × servings|P3, P2|Served|parsley|ladle|—
`
  },
  {
    id: "lentil_soup", name: "Lentil Soup", image: "img/350/red_lentil.webp",
    rows: `
O|opt_texture|smooth|Smooth (blended)|TRUE
O|opt_texture|chunky|Chunky|FALSE
I|red_lentil|Red lentils|img/350/red_lentil.webp|60|g|60|linear|—|rinsed
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|diced
I|carrot|Carrot|img/350/carrot.webp|50|g|50|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|paprika_powder|Paprika|img/350/paprika_powder.webp|0.25|tsp|0.6|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|0.5|tbsp|8|linear|—|—
I|vegetable_stock|Vegetable stock|img/350/vegetable_stock.webp|300|ml|300|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|parsley|Parsley (or mint)|img/350/parsley.webp|1|tbsp|4|linear|—|chopped
S|K1|K|Chop|Dice the onion and carrot and mince the garlic. Rinse the lentils.|action|—|(60 + 60 × servings) × skill_factor|—|Ready|red_lentil; onion; carrot; garlic|chef_knife, chopping_board, sieve|—
S|P1|P|Soften the onion|Cook the onion and carrot in the oil until soft. Add the garlic, cumin, paprika and tomato paste and stir 1 minute.|action|medium|420|K1|Fragrant|olive_oil; cumin; paprika_powder; tomato_paste|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer the lentils|Add the lentils and stock and simmer, stirring now and then, until the lentils fall apart.|wait|low|1200 (doc: 20 to 25 min)|P1|Lentils soft|vegetable_stock|cooking_pot, wooden_spoon|—
S|P3|P|Blend|Blend until smooth; add water if too thick.|action|off|90|P2|Smooth|—|cooking_pot, immersion_blender|opt_texture = smooth
S|F1|F|Season and serve|Season with salt and lemon juice and serve with parsley or mint and an extra squeeze of lemon.|action|off|30 + 15 × servings|P3, P2|Served|salt; lemon_juice; parsley|ladle|—
`
  },
  {
    id: "minestrone", name: "Minestrone", image: "img/350/white_beans.webp",
    rows: `
O|opt_pasta|pasta|With small pasta|TRUE
O|opt_pasta|no_pasta|Without pasta|FALSE
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|diced
I|carrot|Carrot|img/350/carrot.webp|40|g|40|linear|—|diced
I|celery_stalk|Celery stalk|img/350/celery_stalk.webp|30|g|30|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|potato|Potato|img/350/potato.webp|60|g|60|linear|—|diced
I|zucchini|Zucchini|img/350/zucchini.webp|50|g|50|linear|—|diced
I|green_beans|Green beans|img/350/green_beans.webp|30|g|30|linear|—|cut short
I|tomato_passata|Chopped tomatoes|img/350/tomato_passata.webp|100|g|100|linear|—|—
I|vegetable_stock|Vegetable stock|img/350/vegetable_stock.webp|350|ml|350|linear|—|—
I|white_beans|Cooked white beans (canned, drained)|img/350/white_beans.webp|60|g|60|linear|—|—
I|macaroni|Small pasta (ditalini or macaroni)|img/350/macaroni.webp|25|g|25|linear|opt_pasta = pasta|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|basil|Fresh basil leaves|img/350/basil.webp|2|leaves|1|linear|—|—
I|parmesan|Parmesan, to serve|img/350/parmesan.webp|10|g|10|linear|—|grated
S|K1|K|Dice the vegetables|Dice the onion, carrot, celery, potato and zucchini, cut the beans short and mince the garlic.|action|—|(180 + 180 × servings) × skill_factor|—|Diced|onion; carrot; celery_stalk; garlic; potato; zucchini; green_beans|chef_knife, chopping_board|—
S|P1|P|Soffritto|Cook the onion, carrot and celery in the oil until soft; add the garlic for the last minute.|action|medium|480|K1|Soft|olive_oil|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer the vegetables|Add the potato, tomatoes and stock. Simmer 10 minutes, then add the zucchini and green beans and simmer 10 more.|wait|low|1200|P1|Vegetables nearly tender|tomato_passata; vegetable_stock|cooking_pot|—
S|P3|P|Beans and pasta|Add the beans and the pasta and cook until the pasta is tender. Add water if it gets too thick. Season.|wait|medium|600|P2|Pasta tender|white_beans; macaroni; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Tear in the basil and serve with grated Parmesan and a drizzle of olive oil.|action|off|30 + 15 × servings|P3|Served|basil; parmesan|ladle|—
`
  },
  {
    id: "greek_salad", name: "Greek Salad", image: "img/350/feta_cheese.webp",
    rows: `
O|opt_onion|red_onion|With red onion|TRUE
O|opt_onion|no_onion|Without onion|FALSE
I|tomato|Ripe tomatoes|img/350/tomato.webp|120|g|120|linear|—|wedges
I|cucumber|Cucumber|img/350/cucumber.webp|80|g|80|linear|—|thick half-moons
I|green_bell_pepper|Green bell pepper|img/350/green_bell_pepper.webp|0.25|pcs|40|linear, rounded up|—|rings
I|red_onion|Red onion|img/350/red_onion.webp|15|g|15|linear|opt_onion = red_onion|thin rings
I|olives|Kalamata olives|img/350/olives.webp|25|g|25|linear|—|—
I|feta_cheese|Feta (one slab)|img/350/feta_cheese.webp|50|g|50|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|1.5|tbsp|20|linear|—|—
I|red_wine_vinegar|Red wine vinegar|img/350/red_wine_vinegar.webp|0.5|tsp|2.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.35|linear|—|—
S|K1|K|Cut the vegetables|Cut the tomatoes into wedges and the cucumber into thick half-moons. Slice the pepper and onion into thin rings.|action|—|(90 + 90 × servings) × skill_factor|—|Cut|tomato; cucumber; green_bell_pepper; red_onion|chef_knife, chopping_board|—
S|F1|F|Assemble|Put the vegetables and olives in a bowl, season with a little salt and toss with the vinegar.|action|—|45 + 15 × servings|K1|Tossed|olives; salt; red_wine_vinegar|bowl|—
S|F2|F|Feta on top|Put the feta slab on top, sprinkle with oregano and pour over the olive oil. Serve with bread.|action|—|30 + 10 × servings|F1|Served|feta_cheese; oregano; extra_virgin_olive_oil|bowl, spoon|—
`
  },
  {
    id: "potato_salad", name: "Potato Salad", image: "img/350/potato.webp",
    rows: `
O|opt_dressing|mayo|Creamy (mayonnaise)|TRUE
O|opt_dressing|vinegar|Light (vinegar and oil, German style)|FALSE
O|opt_egg|egg|With boiled egg|TRUE
O|opt_egg|no_egg|Without egg|FALSE
I|potato|Waxy potatoes|img/350/potato.webp|200|g|200|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|egg|Egg|img/350/egg.webp|0.5|pcs|27|linear, rounded up|opt_egg = egg|—
I|green_onion|Green onion (or red onion)|img/350/green_onion.webp|10|g|10|linear|—|sliced
I|pickles|Pickles|img/350/pickles.webp|25|g|25|linear|—|diced
I|mayonnaise|Mayonnaise|img/350/mayonnaise.webp|2|tbsp|28|linear|opt_dressing = mayo|—
I|mustard|Mustard|img/350/mustard.webp|0.5|tsp|3|linear|—|—
I|pickle_juice|Pickle juice (or vinegar)|img/350/pickle_juice.webp|1|tbsp|15|linear|—|—
I|vegetable_stock|Warm stock|img/350/vegetable_stock.webp|30|ml|30|linear|opt_dressing = vinegar|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|opt_dressing = vinegar|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|dill|Dill or chives|img/350/dill.webp|1|tsp|1|linear|—|chopped
S|P1|P|Boil the potatoes|Boil the potatoes whole in salted water until just tender (and the egg for 10 minutes in the same pot, then into cold water).|wait|medium-high|1200|—|Knife slides in|potato; egg; salt|cooking_pot, stovetop|—
S|K1|K|Chop|Slice the green onion, dice the pickles and chop the dill.|action|—|(60 + 45 × servings) × skill_factor|—|Chopped|green_onion; pickles; dill|chef_knife, chopping_board|—
S|K2|K|Peel and slice|Drain the potatoes, peel them while warm and slice. Peel and chop the egg.|action|—|(90 + 60 × servings) × skill_factor|P1|Sliced, still warm|—|knife, chopping_board, colander|—
S|F1|F|Dress|Creamy: mix the mayonnaise, mustard, pickle juice and pepper. Light: mix warm stock, oil, pickle juice, mustard and pepper. Pour over the warm potatoes so they soak it up.|action|—|(60 + 15 × servings) × skill_factor|K2, K1|Coated|mayonnaise; mustard; pickle_juice; vegetable_stock; oil; ground_black_pepper|bowl, spoon|—
S|F2|F|Rest and serve|Fold in the onion, pickles, egg and dill and let it rest so the flavours mix. Taste for salt.|wait|—|1200|F1|Rested|—|bowl|—
`
  },
  {
    id: "mashed_potatoes", name: "Mashed Potatoes", image: "img/350/potato.webp",
    rows: `
O|opt_style|classic|Classic (butter and milk)|TRUE
O|opt_style|garlic|Garlic mash|FALSE
I|potato|Floury potatoes|img/350/potato.webp|250|g|250|linear|—|peeled, chunks
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|butter|Butter|img/350/butter.webp|20|g|20|linear|—|—
I|milk|Milk, warm|img/350/milk.webp|50|ml|52|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|1|pcs|5|linear|opt_style = garlic|peeled
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.015625|tsp|0.03|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
S|P1|P|Peel and cut|Peel the potatoes and cut into equal chunks.|action|—|(60 + 90 × servings) × skill_factor|—|Even chunks|potato|vegetable_peeler, chef_knife, chopping_board|—
S|P2|P|Boil|Cover with cold salted water (with the garlic, if using), bring to a boil and cook until very tender.|wait|medium-high|1200 (doc: 15 to 20 min)|P1|Falls apart on a knife|salt; garlic|cooking_pot, stovetop|—
S|F1|F|Drain and steam dry|Drain and leave in the pot on the turned-off hob for a minute so excess water steams off.|action|off|90|P2|Dry and fluffy|—|colander, cooking_pot|—
S|F2|F|Mash|Mash with the butter, then beat in the warm milk a little at a time. Season with nutmeg, pepper and salt.|action|—|(90 + 30 × servings) × skill_factor|F1|Smooth and fluffy|butter; milk; nutmeg; ground_black_pepper|fork, wooden_spoon|—
`
  },
  {
    id: "roasted_vegetables", name: "Roasted Vegetables", image: "img/350/zucchini.webp",
    rows: `
O|opt_mix|mediterranean|Mediterranean (zucchini, pepper, onion)|TRUE
O|opt_mix|root|Root vegetables (carrot, potato, sweet potato)|FALSE
I|zucchini|Zucchini|img/350/zucchini.webp|100|g|100|linear|opt_mix = mediterranean|chunks
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|0.5|pcs|80|linear, rounded up|opt_mix = mediterranean|chunks
I|red_onion|Red onion|img/350/red_onion.webp|50|g|50|linear|—|wedges
I|cherry_tomato|Cherry tomato|img/350/cherry_tomato.webp|50|g|50|linear|opt_mix = mediterranean|—
I|carrot|Carrots|img/350/carrot.webp|100|g|100|linear|opt_mix = root|chunks
I|potato|Potatoes|img/350/potato.webp|100|g|100|linear|opt_mix = root|chunks
I|sweet_potato|Sweet potato|img/350/sweet_potato.webp|80|g|80|linear|opt_mix = root|chunks
I|olive_oil|Olive oil|img/350/olive_oil.webp|1.5|tbsp|20|linear|—|—
I|garlic|Garlic cloves (unpeeled)|img/350/garlic.webp|1|pcs|5|linear|—|—
I|rosemary|Rosemary or thyme sprigs|img/350/rosemary.webp|0.5|pcs|0.5|linear, rounded up|—|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
S|O1|O|Preheat the oven|Turn the oven on to 220 °C conventional (200 °C fan).|action|220 °C (200 °C fan)|15|—|Oven on|—|oven|—
S|K1|K|Cut the vegetables|Cut everything into even 3 cm chunks so they roast at the same speed.|action|—|(120 + 150 × servings) × skill_factor|—|Even chunks|zucchini; red_bell_pepper; red_onion; carrot; potato; sweet_potato|chef_knife, chopping_board, vegetable_peeler|—
S|K2|K|Season|Toss on the tray with the oil, salt, pepper, garlic cloves and herbs. Spread out in one layer; crowded vegetables steam instead of browning.|action|—|60 + 15 × servings|K1|Single layer|olive_oil; garlic; rosemary; salt; ground_black_pepper; cherry_tomato|tray|—|countertop
S|O2|O|Roast|Roast, turning once halfway, until browned at the edges and tender.|wait|220 °C (200 °C fan)|1800 mediterranean / 2400 root|K2, O1|Browned edges, tender|—|oven, tray, spatula|—
S|F1|F|Serve|Squeeze the soft garlic out of its skin over the vegetables and serve.|action|off|30 + 10 × servings|O2|Served|—|spatula, plates|—
`
  },
  {
    id: "tacos", name: "Beef Tacos", image: "img/350/corn_tortilla.webp",
    rows: `
O|opt_tortilla|corn|Soft corn tortillas|TRUE
O|opt_tortilla|flour|Soft flour tortillas|FALSE
O|opt_heat|mild|Mild|TRUE
O|opt_heat|hot|Hot (fresh chili)|FALSE
I|ground_beef|Ground beef|img/350/ground_beef.webp|120|g|120|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|finely diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.5|tsp|1.3|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|paprika_powder|Paprika|img/350/paprika_powder.webp|0.25|tsp|0.6|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|0.5|tbsp|8|linear|—|—
I|water|Water|img/350/water.webp|40|ml|40|linear|—|—
I|chili_pepper|Fresh chili (jalapeño)|img/350/chili_pepper.webp|0.25|pcs|4|linear, rounded up|opt_heat = hot|sliced
I|corn_tortilla|Corn tortillas (small)|img/350/corn_tortilla.webp|3|pcs|75|linear|opt_tortilla = corn|—
I|tortilla|Flour tortillas (small)|img/350/tortilla.webp|2|pcs|70|linear|opt_tortilla = flour|—
I|lettuce|Lettuce|img/350/lettuce.webp|25|g|25|linear|—|shredded
I|tomato|Tomato|img/350/tomato.webp|50|g|50|linear|—|diced
I|cheddar|Grated cheese|img/350/cheddar.webp|25|g|25|linear|—|—
I|sour_cream|Sour cream|img/350/sour_cream.webp|1|tbsp|15|linear|—|—
I|lime|Lime wedges|img/350/lime.webp|0.25|pcs|15|linear, rounded up|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|K1|K|Prep the toppings|Dice the onion, tomato, mince the garlic, shred the lettuce, chop the cilantro and cut the lime into wedges.|action|—|(120 + 120 × servings) × skill_factor|—|Toppings ready|onion; garlic; tomato; lettuce; cilantro; lime; chili_pepper|chef_knife, chopping_board|—
S|P1|P|Brown the beef|Fry the onion in the oil for 3 minutes, add the beef and break it up until browned.|action|medium-high|480|K1|Browned|oil; ground_beef|pan, stovetop, wooden_spoon|—
S|P2|P|Season|Add the garlic, spices, salt and tomato paste, stir 1 minute, then add the water and simmer until saucy and thick.|wait|medium|300|P1|Thick and saucy|chili_powder; cumin; paprika_powder; oregano; salt; tomato_paste; water|pan, wooden_spoon|—
S|T1|T|Warm the tortillas|Warm the tortillas one by one in a dry pan, about 30 seconds per side, and keep them wrapped in a towel.|action|medium-high|60 × servings|P2|Soft and pliable|corn_tortilla; tortilla|pan|—
S|F1|F|Build the tacos|Fill each tortilla with beef, lettuce, tomato, cheese, sour cream, cilantro and a squeeze of lime.|action|off|30 + 45 × servings|T1|Served|cheddar; sour_cream|spoon, plates|—
`
  },
  {
    id: "quesadillas", name: "Quesadillas", image: "img/350/tortilla.webp",
    rows: `
O|opt_filling|cheese|Cheese only|TRUE
O|opt_filling|chicken|Chicken and cheese|FALSE
O|opt_filling|beans|Black beans and cheese|FALSE
I|tortilla|Flour tortillas (large)|img/350/tortilla.webp|1|pcs|60|linear|—|—
I|cheddar|Melting cheese (cheddar or Monterey Jack)|img/350/cheddar.webp|60|g|60|linear|—|grated
I|chicken_breast|Cooked chicken|img/350/chicken_breast.webp|60|g|60|linear|opt_filling = chicken|shredded
I|black_beans|Black beans (canned, drained)|img/350/black_beans.webp|50|g|50|linear|opt_filling = beans|—
I|green_onion|Green onion|img/350/green_onion.webp|5|g|5|linear|—|sliced
I|cumin|Ground cumin|img/350/cumin.webp|0.125|tsp|0.3|linear|—|—
I|oil|Oil|img/350/oil.webp|0.25|tsp|1|linear|—|—
I|sour_cream|Sour cream, to serve|img/350/sour_cream.webp|1|tbsp|15|linear|—|—
I|tomato|Salsa or chopped tomato|img/350/tomato.webp|40|g|40|linear|—|—
S|K1|K|Prepare the filling|Grate the cheese, slice the green onion and dice the tomato. Shred the cooked chicken or drain the beans; season with the cumin.|action|—|(90 + 60 × servings) × skill_factor|—|Ready|cheddar; chicken_breast; black_beans; green_onion; cumin; tomato|cheese_grater, chef_knife, chopping_board|—
S|K2|K|Fill|Spread the filling over half of each tortilla and fold over.|action|—|30 + 30 × servings|K1|Folded|tortilla|chopping_board|—
S|P1|P|Toast|Brush the pan with a little oil and cook the quesadillas over medium heat, pressing with the spatula, until golden and the cheese melts, about 2 to 3 minutes per side.|action|medium|300 × servings|K2|Golden, cheese melted|oil|pan, stovetop, spatula|—
S|F1|F|Cut and serve|Cut into wedges and serve with sour cream and salsa.|action|off|30 + 15 × servings|P1|Served|sour_cream|chef_knife, chopping_board, plates|—
`
  },
  {
    id: "chicken_enchiladas", name: "Chicken Enchiladas", image: "img/350/corn_tortilla.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|hot|Spicy|FALSE
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|130|g|130|linear|—|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|flour|Flour|img/350/flour.webp|0.5|tbsp|5|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|1|tsp|2.6|linear|—|—
I|cayenne_pepper|Cayenne pepper|img/350/cayenne_pepper.webp|0.125|tsp|0.25|linear|opt_heat = hot|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|100|g|100|linear|—|—
I|chicken_stock|Chicken stock|img/350/chicken_stock.webp|80|ml|80|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|corn_tortilla|Corn or flour tortillas|img/350/corn_tortilla.webp|2|pcs|60|linear|—|—
I|cheddar|Grated cheese|img/350/cheddar.webp|50|g|50|linear|—|—
I|sour_cream|Sour cream|img/350/sour_cream.webp|1|tbsp|15|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|C1|C|Poach the chicken|Cover the chicken with salted water, bring to a simmer and poach until cooked through. Shred with two forks.|wait|low|1200|—|Cooked, shredded|chicken_breast|cooking_pot, stovetop, fork|—
S|K1|K|Chop|Dice the onion, mince the garlic and chop the cilantro.|action|—|(60 + 45 × servings) × skill_factor|—|Chopped|onion; garlic; cilantro|chef_knife, chopping_board|—
S|S1|S|Make the red sauce|Fry the onion in the oil until soft, add the garlic, flour and spices for a minute, then whisk in the passata, stock and salt. Simmer until slightly thick.|action|medium|600|K1|Slightly thick|oil; flour; chili_powder; cayenne_pepper; cumin; oregano; tomato_passata; chicken_stock; salt|saucepan, stovetop, whisk|—
S|O1|O|Preheat the oven|Turn the oven on to 190 °C conventional (170 °C fan).|action|190 °C (170 °C fan)|15|S1|Oven on|—|oven|—
S|O2|O|Fill and roll|Mix the chicken with a third of the sauce and half the cheese. Spread a little sauce in the dish, fill and roll the tortillas and lay them seam-side down. Pour over the rest of the sauce and scatter the cheese.|action|—|(180 + 60 × servings) × skill_factor|C1, S1|Rolled and covered|corn_tortilla; cheddar|baking_dish, spoon|—|countertop
S|O3|O|Bake|Bake until bubbling and the cheese is melted.|wait|190 °C (170 °C fan)|1200|O2, O1|Bubbling|—|oven, baking_dish|—
S|F1|F|Serve|Serve with sour cream and cilantro.|action|off|30 + 15 × servings|O3|Served|sour_cream|spatula, plates|—
`
  },
  {
    id: "chicken_fajitas", name: "Chicken Fajitas", image: "img/350/red_bell_pepper.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|hot|Spicy|FALSE
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|140|g|140|linear|—|strips
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|0.5|pcs|80|linear, rounded up|—|strips
I|green_bell_pepper|Green bell pepper|img/350/green_bell_pepper.webp|0.25|pcs|40|linear, rounded up|—|strips
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|sliced
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.5|tsp|1.3|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|paprika_powder|Smoked or sweet paprika|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|garlic_powder|Garlic powder|img/350/garlic_powder.webp|0.25|tsp|0.8|linear|—|—
I|cayenne_pepper|Cayenne pepper|img/350/cayenne_pepper.webp|0.125|tsp|0.25|linear|opt_heat = hot|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|lime_juice|Lime juice|img/350/lime.webp|1|tbsp|15|linear|—|—
I|tortilla|Flour tortillas|img/350/tortilla.webp|2|pcs|70|linear|—|—
I|sour_cream|Sour cream|img/350/sour_cream.webp|1|tbsp|15|linear|—|—
I|avocado|Avocado or guacamole|img/350/avocado.webp|0.25|pcs|40|linear, rounded up|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|K1|K|Slice|Cut the chicken, peppers and onion into thin strips.|action|—|(120 + 150 × servings) × skill_factor|—|Strips|chicken_breast; red_bell_pepper; green_bell_pepper; onion|chef_knife, chopping_board|—
S|K2|K|Season the chicken|Toss the chicken with half the oil, the spices, salt and lime juice. Let it sit while the pan heats.|action|—|(45 + 15 × servings) × skill_factor|K1|Coated|chili_powder; cumin; paprika_powder; garlic_powder; cayenne_pepper; salt; lime_juice|bowl|—
S|P1|P|Sear the chicken|Heat the pan until very hot and sear the chicken in one layer until browned and cooked through. Set aside.|action|high|360 + 60 × servings|K2|Browned, cooked|oil|pan, stovetop, tongs|—
S|P2|P|Char the peppers|Fry the peppers and onion on high heat until soft but still slightly crisp and charred at the edges. Return the chicken.|action|high|360|P1|Charred edges|—|pan, tongs|—
S|F1|F|Warm tortillas and serve|Warm the tortillas and serve with the sizzling pan, sour cream, avocado and cilantro so everyone fills their own.|action|medium|60 + 30 × servings|P2|Served|tortilla; sour_cream; avocado; cilantro|pan, plates|—
`
  },
  {
    id: "beef_empanadas", name: "Beef Empanadas", image: "img/350/ground_beef.webp",
    rows: `
O|opt_dough|homemade|Homemade dough|TRUE
O|opt_dough|store|Store-bought pastry (puff or shortcrust)|FALSE
I|flour|Flour|img/350/flour.webp|80|g|80|linear|opt_dough = homemade|—
I|butter|Cold butter|img/350/butter.webp|25|g|25|linear|opt_dough = homemade|cubed
I|water|Cold water|img/350/water.webp|25|ml|25|linear|opt_dough = homemade|—
I|puff_pastry|Puff or shortcrust pastry|img/350/puff_pastry.webp|120|g|120|linear|opt_dough = store|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_beef|Ground beef|img/350/ground_beef.webp|90|g|90|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|finely diced
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|0.25|pcs|40|linear, rounded up|—|finely diced
I|cumin|Ground cumin|img/350/cumin.webp|0.25|tsp|0.5|linear|—|—
I|paprika_powder|Paprika|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|olives|Green olives|img/350/olives.webp|10|g|10|linear|—|chopped
I|egg|Egg (hard-boiled for the filling, plus a little for brushing)|img/350/egg.webp|0.5|pcs|27|linear, rounded up|—|—
S|D1|D|Make the dough|Rub the cold butter into the flour and salt, add the cold water and bring together. Wrap and chill.|action|—|(240 + 30 × servings) × skill_factor|—|Smooth dough|flour; butter; water|bowl|opt_dough = homemade|countertop
S|D2|D|Chill the dough|Chill the dough in the fridge.|wait|—|1800|D1|Firm|—|plastic_wrap, fridge|opt_dough = homemade
S|S1|S|Cook the filling|Fry the onion and pepper in the oil until soft, add the beef, cumin, paprika and salt and cook until browned. Stir in the olives and let it cool. Boil the egg 10 minutes and chop it.|action|medium|720|—|Cooked, cooling|oil; onion; red_bell_pepper; ground_beef; cumin; paprika_powder; salt; olives; egg|pan, stovetop, wooden_spoon, chef_knife, chopping_board|—
S|O1|O|Preheat the oven|Turn the oven on to 200 °C conventional (180 °C fan).|action|200 °C (180 °C fan)|15|S1|Oven on|—|oven|—
S|D3|D|Fill and seal|Roll the dough out and cut 12 cm rounds (about 3 per person). Put a spoon of cool filling on each, fold into half-moons and crimp the edges with a fork. Brush with beaten egg.|action|—|(240 + 180 × servings) × skill_factor|D2, S1|Sealed half-moons|puff_pastry|rolling_pin, fork, tray, parchment_paper|—|countertop
S|O2|O|Bake|Bake until golden.|wait|200 °C (180 °C fan)|1200|D3, O1|Golden|—|oven, tray|—
S|F1|F|Serve|Let them cool for a few minutes (the filling is very hot) and serve.|wait|—|300|O2|Served|—|plates|—
`
  },
  {
    id: "cheese_arepas", name: "Cheese Arepas", image: "img/350/precooked_cornmeal.webp",
    rows: `
O|opt_cheese|inside|Cheese mixed into the dough|TRUE
O|opt_cheese|stuffed|Split and stuffed with cheese|FALSE
I|precooked_cornmeal|Precooked white cornmeal (masarepa)|img/350/precooked_cornmeal.webp|70|g|70|linear|—|—
I|water|Warm water|img/350/water.webp|100|ml|100|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|mozzarella|Mozzarella or other mild white cheese|img/350/mozzarella.webp|50|g|50|linear|—|grated
I|butter|Butter|img/350/butter.webp|10|g|10|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tsp|2|linear|—|—
S|D1|D|Make the dough|Mix the warm water and salt, pour in the cornmeal and stir. (Mix in the cheese now if it goes inside.) Knead until smooth and let it rest 5 minutes.|action|—|(120 + 30 × servings) × skill_factor|—|Soft, smooth, does not crack|precooked_cornmeal; water; salt; mozzarella|bowl|—|countertop
S|D2|D|Shape|Shape into balls (2 per person) and flatten into 1.5 cm discs. Smooth any cracks on the edges with wet fingers.|action|—|(60 + 60 × servings) × skill_factor|D1|Smooth discs|—|chopping_board|—|countertop
S|P1|P|Cook the arepas|Cook in a lightly oiled pan on medium-low until a crust forms and they sound hollow when tapped, about 6 to 8 minutes per side.|action|medium-low|840 + 120 × servings|D2|Golden crust, hollow sound|oil|pan, stovetop, spatula|—
S|F1|F|Butter and serve|Split open, spread with butter (and stuff with cheese if chosen) and eat while hot.|action|off|30 + 30 × servings|P1|Served|butter|knife, plates|—
`
  },
  {
    id: "feijoada", name: "Feijoada", image: "img/350/black_beans.webp",
    rows: `
O|opt_beans|dried|Dried black beans (soaked overnight)|TRUE
O|opt_beans|canned|Canned black beans (much quicker)|FALSE
I|black_beans|Dried black beans (soaked overnight)|img/350/black_beans.webp|70|g|70|linear|opt_beans = dried|—
I|black_beans_canned|Canned black beans, drained|img/350/black_beans.webp|180|g|180|linear|opt_beans = canned|—
I|pork|Pork shoulder|img/350/pork.webp|100|g|100|linear|—|3 cm cubes
I|sausage|Smoked sausage|img/350/sausage.webp|60|g|60|linear|—|thick slices
I|bacon|Bacon|img/350/bacon.webp|30|g|30|linear|—|diced
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|minced
I|bay_leaf|Bay leaves|img/350/bay_leaf.webp|2|pcs per pot|0.4|fixed: 2 per pot|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|water|Water|img/350/water.webp|500|ml|500|linear; half if canned|—|—
I|white_rice|White rice|img/350/white_rice.webp|70|g|70|linear|—|—
I|collard_greens|Collard greens (or kale)|img/350/collard_greens.webp|60|g|60|linear|—|thin ribbons
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|orange|Orange|img/350/orange.webp|0.25|pcs|40|linear, rounded up|—|slices
S|K1|K|Cut the meats|Cut the pork into cubes, slice the sausage, dice the bacon; chop the onion and mince the garlic. Drain the soaked beans.|action|—|(180 + 120 × servings) × skill_factor|—|Ready|pork; sausage; bacon; onion; garlic; black_beans; black_beans_canned|chef_knife, chopping_board, colander|—
S|P1|P|Brown the meats|Fry the bacon until it renders, then brown the pork and sausage in its fat. Add the onion and garlic and cook until soft.|action|medium-high|720|K1|Browned|—|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer the beans|Add the beans, bay leaves, pepper and water. Simmer covered, stirring now and then, until the beans are soft and the pork is tender. (Canned beans: 40 minutes is enough.)|wait|low|7200 dried / 2400 canned|P1|Beans soft, sauce thick|bay_leaf; ground_black_pepper; water|cooking_pot, wooden_spoon|—
S|P3|P|Thicken and season|Mash a ladle of beans against the side of the pot to thicken the sauce. Season with salt.|action|low|120|P2|Thick and dark|salt|cooking_pot, ladle|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|P2|Fluffy|white_rice|saucepan, stovetop|—
S|R2|R|Sauté the greens|Cut the greens into very thin ribbons and sauté in the oil with a pinch of salt for 2 minutes.|action|high|(60 + 60 × servings) × skill_factor|R1|Bright green|collard_greens; oil|pan, stovetop, chef_knife, chopping_board|—
S|F1|F|Serve|Serve the feijoada with rice, the greens and orange slices.|action|off|60 + 15 × servings|P3, R2|Served|orange|ladle, plates|—
`
  },
  {
    id: "guacamole", name: "Guacamole", image: "img/350/avocado.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|hot|With fresh chili|FALSE
I|avocado|Ripe avocados|img/350/avocado.webp|1|pcs|150|linear|—|—
I|lime_juice|Lime juice|img/350/lime.webp|1|tbsp|15|linear|—|—
I|red_onion|Red onion|img/350/red_onion.webp|10|g|10|linear|—|very finely diced
I|tomato|Tomato|img/350/tomato.webp|30|g|30|linear|—|seeded, diced
I|chili_pepper|Fresh chili (jalapeño)|img/350/chili_pepper.webp|0.25|pcs|4|linear, rounded up|opt_heat = hot|finely chopped
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
S|K1|K|Chop|Very finely dice the onion, seed and dice the tomato, chop the cilantro (and chili).|action|—|(60 + 45 × servings) × skill_factor|—|Chopped|red_onion; tomato; cilantro; chili_pepper|chef_knife, chopping_board|—
S|F1|F|Mash the avocado|Halve the avocados, remove the stone and scoop the flesh into a bowl. Mash with a fork, leaving it a little chunky, and stir in the lime juice and salt straight away.|action|—|(30 + 45 × servings) × skill_factor|—|Chunky mash|avocado; lime_juice; salt|bowl, fork, knife, spoon|—
S|F2|F|Mix and serve|Fold in the chopped ingredients, taste for salt and lime and serve at once (press cling film onto the surface if it has to wait).|action|—|30 + 10 × servings|F1, K1|Served|—|bowl, spoon|—
`
  },
  {
    id: "huevos_rancheros", name: "Huevos Rancheros", image: "img/350/egg.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|hot|Spicy|FALSE
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|30|g|30|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|chili_pepper|Fresh chili (jalapeño)|img/350/chili_pepper.webp|0.25|pcs|4|linear, rounded up|opt_heat = hot|chopped
I|tomato_passata|Chopped tomatoes|img/350/tomato_passata.webp|120|g|120|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.25|tsp|0.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|black_beans|Black or pinto beans (canned, drained)|img/350/black_beans.webp|70|g|70|linear|—|—
I|corn_tortilla|Corn tortillas|img/350/corn_tortilla.webp|2|pcs|50|linear|—|—
I|egg|Eggs|img/350/egg.webp|2|pcs|110|linear|—|—
I|avocado|Avocado|img/350/avocado.webp|0.25|pcs|40|linear, rounded up|—|sliced
I|feta_cheese|Crumbly white cheese (queso fresco or feta)|img/350/feta_cheese.webp|20|g|20|linear|—|crumbled
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|K1|K|Chop|Dice the onion, mince the garlic, chop the cilantro (and chili), slice the avocado.|action|—|(60 + 60 × servings) × skill_factor|—|Chopped|onion; garlic; chili_pepper; cilantro; avocado|chef_knife, chopping_board|—
S|S1|S|Make the ranchero salsa|Soften the onion in half the oil, add the garlic (and chili), then the tomatoes, cumin and salt. Simmer until slightly thick.|wait|medium-low|600|K1|Slightly thick|tomato_passata; cumin; salt|saucepan, stovetop, wooden_spoon|—
S|S2|S|Warm the beans|Warm the beans in a small pot and mash them roughly with a fork.|action|low|240|K1|Hot, roughly mashed|black_beans|saucepan, fork|—
S|P1|P|Crisp the tortillas|Fry the tortillas briefly in a little oil until soft-crisp and put them on plates.|action|medium-high|60 × servings|S2|Soft-crisp|corn_tortilla|pan, stovetop, tongs|—
S|P2|P|Fry the eggs|Fry the eggs in the rest of the oil until the whites are set and the yolks still runny.|action|medium|240|P1|Whites set, yolks runny|egg; oil|pan, spatula|—
S|F1|F|Assemble|Spread beans on each tortilla, top with the eggs, spoon over the salsa and finish with avocado, cheese and cilantro.|action|off|30 + 30 × servings|P2, S1|Served|feta_cheese|spoon, plates|—
`
  },
  {
    id: "tostones", name: "Tostones", image: "img/350/plantain.webp",
    rows: `
O|opt_dip|garlic|With garlic dipping sauce (mojo)|TRUE
O|opt_dip|plain|Just salt|FALSE
I|plantain|Green (unripe) plantains|img/350/plantain.webp|0.5|pcs|120|linear, rounded up|—|—
I|oil|Oil for frying|img/350/oil.webp|150|ml|12|fixed: about 2 cm in the pan|—|—
I|salt|Coarse salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|opt_dip = garlic|crushed
I|lime_juice|Lime juice|img/350/lime.webp|1|tbsp|15|linear|opt_dip = garlic|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|opt_dip = garlic|—
S|K1|K|Peel and cut|Cut off the ends, score the skin lengthwise and peel it off. Cut into 3 cm thick rounds.|action|—|(60 + 90 × servings) × skill_factor|—|Peeled rounds|plantain|knife, chopping_board|—
S|K2|K|Make the mojo|Mix the crushed garlic with the lime juice, olive oil and a pinch of salt.|action|—|(60 + 15 × servings) × skill_factor|—|Mixed|garlic; lime_juice; olive_oil|bowl, spoon|opt_dip = garlic|countertop
S|P1|P|Heat the oil|Heat about 2 cm of oil in the pan to 175 °C.|wait|medium-high|300|—|A drop of batter sizzles|oil|pan, stovetop|—
S|P2|P|First fry|Fry the rounds 3 to 4 minutes, turning once, until pale gold but not brown. Drain.|action|medium-high|240|P1, K1|Pale gold, soft inside|—|pan, tongs|—
S|P3|P|Smash|Flatten each piece to about 1 cm with the bottom of a glass or between two plates.|action|—|(30 + 45 × servings) × skill_factor|P2|Flat discs|—|chopping_board, plates|—|countertop
S|P4|P|Second fry|Fry again until golden and crisp, about 2 minutes per side. Drain and salt immediately.|action|medium-high|240|P3|Golden and crisp|salt|pan, tongs|—
S|F1|F|Serve|Serve hot with the garlic mojo for dipping.|action|off|30|P4, K2|Served|—|plates|—
`
  },
  {
    id: "jerk_chicken", name: "Jerk Chicken", image: "img/350/chicken_legs.webp",
    rows: `
O|opt_heat|medium|Medium (half a chili, seeds out)|TRUE
O|opt_heat|hot|Hot (whole Scotch bonnet)|FALSE
O|opt_cook|oven|Oven-roasted|TRUE
O|opt_cook|grill|Grilled (barbecue)|FALSE
I|chicken_legs|Chicken legs or thighs (bone-in)|img/350/chicken_legs.webp|250|g|250|linear|—|—
I|green_onion|Green onions|img/350/green_onion.webp|15|g|15|linear|—|chopped
I|chili_pepper|Scotch bonnet or habanero chili|img/350/chili_pepper.webp|0.25|pcs|3|linear; doubled if hot|—|seeds removed for medium
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|—
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|peeled
I|allspice|Ground allspice|img/350/allspice.webp|0.5|tsp|1|linear|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.5|tsp|0.4|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.0625|tsp|0.15|linear|—|—
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|0.5|tbsp|6|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tbsp|15|linear|—|—
I|lime_juice|Lime juice|img/350/lime.webp|1|tbsp|15|linear|—|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
S|M1|M|Blend the marinade|Blend the green onions, chili, garlic, ginger, spices, sugar, soy sauce, lime juice, oil, salt and pepper into a paste. Wear gloves for the chili.|action|—|(180 + 30 × servings) × skill_factor|—|Smooth paste|green_onion; chili_pepper; garlic; ginger_root; allspice; thyme; cinnamon; nutmeg; brown_sugar; light_soy_sauce; lime_juice; oil; salt; ground_black_pepper|blender, knife, chopping_board|—|countertop
S|M2|M|Marinate|Slash the chicken to the bone, rub the paste in well, cover and chill (overnight is best).|action|—|(60 + 30 × servings) × skill_factor|M1|Coated|chicken_legs|bowl, knife, plastic_wrap|—|countertop
S|M3|M|Chill|Let it marinate in the fridge.|wait|—|14400 (doc: 4 h to overnight)|M2|Marinated|—|fridge|—
S|O1|O|Preheat|Turn the oven on to 200 °C conventional (180 °C fan), or light the grill for medium indirect heat.|action|200 °C (180 °C fan)|15|M3|On|—|oven|—
S|O2|O|Cook|Roast (or grill, turning often) until charred in spots and 75 °C at the bone.|wait|200 °C (180 °C fan)|2700 oven / 2100 grill|O1|Charred, 75 °C at the bone|—|oven, tray, tongs|—
S|F1|F|Rest and serve|Rest 5 minutes and serve with rice and beans or a salad and lime wedges.|wait|—|300|O2|Served|—|plates|—
`
  },
  {
    id: "picadillo", name: "Picadillo", image: "img/350/ground_beef.webp",
    rows: `
O|opt_raisins|with|With raisins and olives (Cuban style)|TRUE
O|opt_raisins|without|Without raisins|FALSE
I|ground_beef|Ground beef|img/350/ground_beef.webp|130|g|130|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|diced
I|green_bell_pepper|Green bell pepper|img/350/green_bell_pepper.webp|0.25|pcs|40|linear, rounded up|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|potato|Potato|img/350/potato.webp|80|g|80|linear|—|small cubes
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|tomato_passata|Tomato sauce|img/350/tomato_passata.webp|80|g|80|linear|—|—
I|water|Water|img/350/water.webp|60|ml|60|linear|—|—
I|olives|Green olives|img/350/olives.webp|15|g|15|linear|opt_raisins = with|sliced
I|raisins|Raisins|img/350/raisins.webp|10|g|10|linear|opt_raisins = with|—
I|pea|Peas|img/350/pea.webp|30|g|30|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|white_rice|White rice|img/350/white_rice.webp|70|g|70|linear|—|—
S|R1|R|Cook the rice|Rinse and cook the rice (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|—|Fluffy|white_rice|saucepan, stovetop|—
S|K1|K|Chop|Dice the onion, pepper and potato, mince the garlic and slice the olives.|action|—|(120 + 90 × servings) × skill_factor|—|Chopped|onion; green_bell_pepper; garlic; potato; olives|chef_knife, chopping_board|—
S|P1|P|Sofrito|Cook the onion and pepper in the oil until soft, add the garlic, cumin and oregano.|action|medium|360|K1|Soft, fragrant|oil; cumin; oregano|pan, stovetop, wooden_spoon|—
S|P2|P|Brown the beef|Add the beef and cook, breaking it up, until browned.|action|medium-high|360|P1|Browned|ground_beef|pan, wooden_spoon|—
S|P3|P|Simmer|Add the potato, tomato sauce, water and salt. Cover and simmer until the potato is tender, then stir in the olives, raisins and peas for the last 5 minutes.|wait|low|1200|P2|Potato tender, saucy|tomato_passata; water; raisins; pea; salt|pan, wooden_spoon|—
S|F1|F|Serve|Serve over the rice.|action|off|30 + 15 × servings|P3, R1|Served|—|spoon, plates|—
`
  },
  {
    id: "chicken_curry", name: "Chicken Curry", image: "img/350/curry_powder.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|medium|Medium (fresh green chili)|FALSE
O|opt_side|rice|With basmati rice|TRUE
O|opt_side|none|Curry only|FALSE
I|chicken_legs|Boneless chicken thighs (or breast)|img/350/chicken_legs.webp|150|g|150|linear|—|bite-size pieces
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|75|g|75|linear|—|finely chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|chili_pepper|Green chili|img/350/chili_pepper.webp|0.25|pcs|3|linear, rounded up|opt_heat = medium|slit
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|0.5|tsp|1|linear|—|—
I|chili_powder|Chili powder (mild)|img/350/chili_powder.webp|0.25|tsp|0.7|linear|—|—
I|tomato|Tomatoes (or canned chopped)|img/350/tomato.webp|100|g|100|linear|—|chopped
I|yogurt|Plain yogurt|img/350/yogurt.webp|2|tbsp|30|linear|—|—
I|water|Water|img/350/water.webp|80|ml|80|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.25|tsp|0.6|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
I|basmati_rice|Basmati rice|img/350/basmati_rice.webp|70|g|70|linear|opt_side = rice|—
S|K1|K|Chop and grate|Finely chop the onion and tomatoes, grate the garlic and ginger, cut the chicken into bite-size pieces.|action|—|(180 + 120 × servings) × skill_factor|—|Ready|chicken_legs; onion; garlic; ginger_root; tomato; chili_pepper|chef_knife, chopping_board, microplane|—
S|P1|P|Brown the onions|Fry the onion in the oil, stirring often, until deep golden. This builds the flavour; do not rush it.|action|medium|720|K1|Deep golden|oil|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Ginger, garlic and spices|Add the garlic, ginger (and chili) for a minute, then the turmeric, cumin, coriander and chili powder for 30 seconds.|action|medium|90|P1|Fragrant|turmeric_powder; cumin; coriander_seeds; chili_powder|cooking_pot, wooden_spoon|—
S|P3|P|Tomatoes|Add the tomatoes and salt and cook until they break down and the oil starts to separate at the edges.|action|medium|480|P2|Thick masala, oil separating|salt|cooking_pot, wooden_spoon|—
S|P4|P|Chicken in|Add the chicken and stir to coat, then the yogurt a spoonful at a time and the water.|action|medium|180|P3|Coated|yogurt; water|cooking_pot, wooden_spoon|—
S|P5|P|Simmer|Cover and simmer gently until the chicken is tender and the sauce is thick. Stir in the garam masala.|wait|low|1200|P4|Chicken tender|garam_masala|cooking_pot|—
S|R1|R|Cook the rice|Rinse the rice until the water runs clear and cook it (1 part rice to 1.5 parts water, covered, 12 min, then 5 min resting).|wait|low|1020|P3|Fluffy, separate grains|basmati_rice|saucepan, stovetop, sieve|opt_side = rice
S|F1|F|Serve|Scatter with cilantro and serve with the rice (or naan).|action|off|30 + 15 × servings|P5, R1|Served|cilantro|ladle, plates|—
`
  },
  {
    id: "butter_chicken", name: "Butter Chicken", image: "img/350/butter.webp",
    rows: `
O|opt_cook|pan|Chicken seared in a pan|TRUE
O|opt_cook|oven|Chicken charred under the grill|FALSE
I|chicken_legs|Boneless chicken thighs|img/350/chicken_legs.webp|150|g|150|linear|—|bite-size pieces
I|yogurt|Plain yogurt|img/350/yogurt.webp|2|tbsp|30|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.5|tsp|1.2|linear|—|—
I|chili_powder|Mild chili powder (Kashmiri if you have it)|img/350/chili_powder.webp|0.5|tsp|1.3|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|butter|Butter|img/350/butter.webp|20|g|20|linear|—|—
I|onion|Onion (optional)|img/350/onion.webp|30|g|30|linear|—|finely chopped
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|120|g|120|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tsp|2|linear|—|—
I|cream|Cream|img/350/cream.webp|50|ml|50|linear|—|—
I|dried_fenugreek_leaves|Dried fenugreek leaves (kasuri methi, optional)|img/350/dried_fenugreek_leaves.webp|0.5|tsp|0.3|linear|—|crushed
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|M1|M|Marinate the chicken|Mix the chicken with the yogurt, lemon juice, half the garam masala, half the chili powder, half the salt and half the garlic and ginger.|action|—|(90 + 30 × servings) × skill_factor|—|Coated|chicken_legs; yogurt; lemon_juice|bowl, microplane|—|countertop
S|M2|M|Rest|Cover and chill at least 30 minutes (up to overnight).|wait|—|1800|M1|Marinated|—|fridge, plastic_wrap|—
S|S1|S|Start the sauce|Melt half the butter, soften the onion, add the rest of the garlic and ginger, chili powder and garam masala. Add the passata, sugar and the rest of the salt and simmer.|wait|low|900|M1|Thick, glossy|butter; onion; garlic; ginger_root; garam_masala; chili_powder; tomato_passata; sugar; salt|cooking_pot, stovetop, wooden_spoon|—
S|P1|P|Char the chicken|Sear the chicken in the hot oil until charred in spots and nearly cooked through (or grill it on a tray).|action|high|480|M2|Charred in spots|oil|pan, stovetop, tongs|—
S|S2|S|Blend and finish|Blend the sauce smooth, stir in the cream, the rest of the butter and the crushed fenugreek leaves. Add the chicken and simmer 5 minutes.|action|low|420|S1, P1|Creamy, chicken cooked through|cream; dried_fenugreek_leaves|cooking_pot, immersion_blender, wooden_spoon|—
S|F1|F|Serve|Serve with cilantro, rice or naan.|action|off|30 + 15 × servings|S2|Served|cilantro|ladle, plates|—
`
  },
  {
    id: "chicken_tikka_masala", name: "Chicken Tikka Masala", image: "img/350/garam_masala.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|medium|Medium|FALSE
I|chicken_breast|Chicken breast or thigh|img/350/chicken_breast.webp|150|g|150|linear|—|3 cm cubes
I|yogurt|Plain yogurt|img/350/yogurt.webp|3|tbsp|45|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|1|tsp|2.4|linear|—|—
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|paprika_powder|Paprika|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.25|tsp|0.7|linear; doubled if medium|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|60|g|60|linear|—|finely chopped
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|120|g|120|linear|—|—
I|cream|Cream|img/350/cream.webp|50|ml|50|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.25|tsp|1|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|M1|M|Marinate the tikka|Mix the chicken with the yogurt, lemon juice, half the spices, half the salt and half the garlic and ginger. Chill at least 30 minutes.|action|—|(90 + 30 × servings) × skill_factor|—|Coated|chicken_breast; yogurt; lemon_juice|bowl, microplane|—|countertop
S|M2|M|Rest|Let the chicken marinate in the fridge.|wait|—|1800|M1|Marinated|—|fridge|—
S|M3|M|Grill the tikka|Thread onto skewers and grill under a very hot oven grill (or sear in a pan) until charred at the edges, turning once.|wait|grill|720|M2|Charred edges|—|oven, skewers, tray|—
S|S1|S|Masala base|Fry the onion in the oil until golden, add the rest of the garlic and ginger and spices for a minute.|action|medium|600|M1|Golden, fragrant|oil; onion; garlic; ginger_root; garam_masala; turmeric_powder; cumin; paprika_powder; chili_powder|cooking_pot, stovetop, wooden_spoon|—
S|S2|S|Tomato sauce|Add the passata, sugar and the rest of the salt and simmer until thick, then stir in the cream.|wait|low|600|S1|Thick, orange, creamy|tomato_passata; sugar; salt; cream|cooking_pot, wooden_spoon|—
S|F1|F|Combine and serve|Add the grilled chicken to the sauce, simmer 3 minutes and serve with cilantro, rice or naan.|action|low|180 + 15 × servings|M3, S2|Served|cilantro|cooking_pot, ladle, plates|—
`
  },
  {
    id: "chicken_biryani", name: "Chicken Biryani", image: "img/350/basmati_rice.webp",
    rows: `
O|opt_saffron|saffron|With saffron milk|TRUE
O|opt_saffron|turmeric|With a pinch of turmeric instead|FALSE
I|chicken_legs|Chicken thighs (bone-in or boneless)|img/350/chicken_legs.webp|170|g|170|linear|—|large pieces
I|yogurt|Plain yogurt|img/350/yogurt.webp|3|tbsp|45|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.75|tsp|1.8|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.25|tsp|0.7|linear|—|—
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.125|tsp|0.4|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|salt|Salt|img/350/salt.webp|0.75|tsp|4.5|linear|—|—
I|onion|Onions|img/350/onion.webp|100|g|100|linear|—|thinly sliced
I|ghee|Ghee (or oil)|img/350/ghee.webp|1.5|tbsp|20|linear|—|—
I|basmati_rice|Basmati rice|img/350/basmati_rice.webp|80|g|80|linear|—|soaked 30 min
I|cardamom|Green cardamom pods|img/350/cardamom.webp|1|pcs|0.2|linear|—|—
I|cloves|Cloves|img/350/cloves.webp|1|pcs|0.1|linear|—|—
I|cinnamon|Cinnamon stick piece|img/350/cinnamon.webp|0.25|pcs|0.5|linear|—|—
I|bay_leaf|Bay leaf|img/350/bay_leaf.webp|1|pcs per pot|0.2|fixed: 1 per pot|—|—
I|saffron|Saffron threads|img/350/saffron.webp|3|pcs|0.02|linear|opt_saffron = saffron|—
I|milk|Warm milk|img/350/milk.webp|1|tbsp|15|linear|—|—
I|mint|Mint leaves|img/350/mint.webp|1|tbsp|2|linear|—|chopped
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
S|M1|M|Marinate the chicken|Mix the chicken with the yogurt, garam masala, chili, turmeric, garlic, ginger, lemon juice and half the salt. Leave at least 30 minutes.|action|—|(90 + 30 × servings) × skill_factor|—|Coated|chicken_legs; yogurt; garam_masala; chili_powder; turmeric_powder; garlic; ginger_root; lemon_juice|bowl, microplane|—|countertop
S|R0|R|Soak the rice|Rinse the rice until the water is clear and soak it.|wait|—|1800|—|Soaked|basmati_rice|bowl, sieve|—
S|O1|O|Fry the onions|Fry the sliced onions in the ghee, stirring, until deep golden and crisp. Lift out half for the topping.|action|medium|900|—|Deep golden|onion; ghee|pan, stovetop, wooden_spoon|—
S|M2|M|Cook the chicken|Add the marinated chicken to the onions left in the pan and cook until nearly done and the sauce is thick.|wait|medium-low|1200|M1, O1|Thick masala, chicken nearly done|—|pan, wooden_spoon|—
S|R1|R|Par-boil the rice|Bring plenty of water to the boil with the whole spices and the rest of the salt. Boil the drained rice until 70% cooked (still firm in the middle). Drain.|action|high|420|R0|Firm centre|cardamom; cloves; cinnamon; bay_leaf; salt|cooking_pot, stovetop, colander|—
S|F1|F|Layer|Spread the chicken in a heavy pot, cover with the rice, scatter the fried onions, mint and cilantro and drizzle with the saffron (or turmeric) milk.|action|—|(120 + 30 × servings) × skill_factor|M2, R1|Layered|saffron; milk; mint; cilantro|cooking_pot, spoon|—
S|F2|F|Steam (dum)|Seal with a tight lid (or foil under the lid) and cook on the lowest heat so the rice steams through.|wait|low|1200|F1|Rice tender and fluffy|—|cooking_pot, tin_foil, stovetop|—
S|F3|F|Serve|Let it rest 5 minutes, then gently fold from the bottom so every plate gets rice and chicken.|action|off|60 + 15 × servings|F2|Served|—|spoon, plates|—
`
  },
  {
    id: "dal_tadka", name: "Dal Tadka", image: "img/350/red_lentil.webp",
    rows: `
O|opt_heat|mild|Mild|TRUE
O|opt_heat|spicy|Spicy (dried red chilies in the tadka)|FALSE
I|red_lentil|Red or yellow lentils (masoor or toor dal)|img/350/red_lentil.webp|70|g|70|linear|—|rinsed
I|water|Water|img/350/water.webp|300|ml|300|linear|—|—
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|finely chopped
I|tomato|Tomato|img/350/tomato.webp|60|g|60|linear|—|chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|thinly sliced
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|3|g|3|linear|—|grated
I|ghee|Ghee|img/350/ghee.webp|1|tbsp|13|linear|—|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|mustard_seed|Mustard seeds (optional)|img/350/mustard_seed.webp|0.25|tsp|1|linear|—|—
I|dried_red_chilies|Dried red chilies|img/350/dried_red_chilies.webp|1|pcs|0.5|linear|opt_heat = spicy|—
I|chili_powder|Chili powder or paprika|img/350/chili_powder.webp|0.25|tsp|0.7|linear|—|—
I|asafoetida|Asafoetida (hing, a pinch)|img/350/asafoetida.webp|0.03125|tsp|0.1|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.25|tsp|0.6|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|P1|P|Cook the lentils|Simmer the rinsed lentils with the water, turmeric and salt, skimming the foam, until completely soft. Whisk to a creamy consistency.|wait|low|1500 (doc: 20 to 30 min)|—|Soft and creamy|red_lentil; water; turmeric_powder; salt|cooking_pot, stovetop, whisk|—
S|K1|K|Chop|Chop the onion and tomato, slice the garlic and grate the ginger.|action|—|(90 + 60 × servings) × skill_factor|—|Chopped|onion; tomato; garlic; ginger_root|chef_knife, chopping_board|—
S|P2|P|Masala|In a pan cook the onion in half the ghee until golden, add the ginger and tomato and cook until soft, then stir it into the dal and simmer 5 minutes.|action|medium|600|P1, K1|Combined|garam_masala|pan, stovetop, wooden_spoon|—
S|T1|T|Tadka (tempering)|Heat the rest of the ghee until very hot. Add the cumin and mustard seeds; when they crackle add the garlic, chilies, asafoetida and chili powder and fry a few seconds until the garlic is golden.|action|high|90|P2|Sizzling, garlic golden|ghee; cumin; mustard_seed; dried_red_chilies; asafoetida; chili_powder|saucepan, stovetop, spoon|—
S|F1|F|Finish and serve|Pour the sizzling tadka over the dal, add the lemon juice and cilantro and serve with rice or roti.|action|off|30 + 15 × servings|T1|Served|lemon_juice; cilantro|ladle|—
`
  },
  {
    id: "chana_masala", name: "Chana Masala", image: "img/350/chickpea.webp",
    rows: `
O|opt_chickpeas|canned|Canned chickpeas|TRUE
O|opt_chickpeas|dried|Dried chickpeas (soaked and boiled)|FALSE
I|chickpea|Chickpeas (canned, drained)|img/350/chickpea.webp|200|g|200|linear|opt_chickpeas = canned|—
I|chickpea_dried|Dried chickpeas (soaked overnight)|img/350/chickpea.webp|80|g|80|linear|opt_chickpeas = dried|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|onion|Onion|img/350/onion.webp|70|g|70|linear|—|finely chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|chili_pepper|Green chili (optional)|img/350/chili_pepper.webp|0.25|pcs|3|linear, rounded up|—|chopped
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|1|tsp|2|linear|—|—
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.25|tsp|0.7|linear|—|—
I|tomato|Tomatoes|img/350/tomato.webp|120|g|120|linear|—|chopped
I|water|Water|img/350/water.webp|100|ml|100|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.5|tsp|1.2|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|K0|P|Boil the chickpeas|Boil the soaked chickpeas in fresh water until completely tender. Drain, keeping some cooking water.|wait|medium-low|3600 (doc: 1 to 1.5 h)|—|Tender|chickpea_dried|cooking_pot, stovetop, colander|opt_chickpeas = dried
S|K1|K|Chop|Finely chop the onion and tomatoes, grate the garlic and ginger, chop the chili.|action|—|(120 + 90 × servings) × skill_factor|—|Chopped|onion; garlic; ginger_root; chili_pepper; tomato|chef_knife, chopping_board, microplane|—
S|P1|P|Cumin and onion|Heat the oil, fry the cumin seeds until they crackle, then fry the onion until golden brown.|action|medium|600|K1|Golden brown|oil; cumin|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Masala|Add the garlic, ginger and chili, then the ground spices for 30 seconds, then the tomatoes and salt. Cook until thick and the oil separates.|action|medium|480|P1|Thick masala|coriander_seeds; turmeric_powder; chili_powder; salt|cooking_pot, wooden_spoon|—
S|P3|P|Simmer the chickpeas|Add the chickpeas and water and simmer, mashing a few chickpeas against the side to thicken the sauce.|wait|low|900|P2, K0|Thick and saucy|chickpea; water|cooking_pot, wooden_spoon|—
S|F1|F|Finish and serve|Stir in the garam masala and lemon juice, scatter with cilantro and serve with rice, roti or naan.|action|off|30 + 15 × servings|P3|Served|garam_masala; lemon_juice; cilantro|ladle|—
`
  },
  {
    id: "rajma", name: "Rajma (Kidney Bean Curry)", image: "img/350/kidney_beans.webp",
    rows: `
O|opt_beans|canned|Canned kidney beans|TRUE
O|opt_beans|dried|Dried kidney beans (soaked and boiled hard)|FALSE
I|kidney_beans|Kidney beans (canned, drained)|img/350/kidney_beans.webp|200|g|200|linear|opt_beans = canned|—
I|kidney_beans_dried|Dried kidney beans (soaked overnight)|img/350/kidney_beans.webp|80|g|80|linear|opt_beans = dried|—
I|ghee|Ghee or oil|img/350/ghee.webp|1|tbsp|13|linear|—|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|bay_leaf|Bay leaf|img/350/bay_leaf.webp|1|pcs per pot|0.2|fixed: 1 per pot|—|—
I|onion|Onion|img/350/onion.webp|70|g|70|linear|—|finely chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|1|tsp|2|linear|—|—
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.25|tsp|0.7|linear|—|—
I|tomato_passata|Tomato purée or passata|img/350/tomato_passata.webp|120|g|120|linear|—|—
I|water|Water|img/350/water.webp|150|ml|150|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.5|tsp|1.2|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
I|basmati_rice|Basmati rice|img/350/basmati_rice.webp|70|g|70|linear|—|—
S|K0|P|Boil the beans|Boil the soaked beans hard in fresh water for 10 minutes, then simmer until creamy inside.|wait|high|3600 (doc: 1 to 1.5 h)|—|Creamy inside|kidney_beans_dried|cooking_pot, stovetop|opt_beans = dried
S|K1|K|Chop|Finely chop the onion, grate the garlic and ginger.|action|—|(90 + 60 × servings) × skill_factor|—|Chopped|onion; garlic; ginger_root|chef_knife, chopping_board, microplane|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.5 parts water, covered, 12 min, rest 5 min).|wait|low|1020|K1|Fluffy|basmati_rice|saucepan, stovetop, sieve|—
S|P1|P|Onion masala|Heat the ghee, fry the cumin and bay leaf, then the onion until deep golden. Add garlic and ginger, then the ground spices.|action|medium|660|K1|Deep golden, fragrant|ghee; cumin; bay_leaf; coriander_seeds; turmeric_powder; chili_powder|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Tomato|Add the tomato purée and salt and cook until thick and the oil separates.|action|medium|480|P1|Thick, oil separating|tomato_passata; salt|cooking_pot, wooden_spoon|—
S|P3|P|Simmer the beans|Add the beans and water and simmer until thick and creamy, mashing a few beans.|wait|low|1200|P2, K0|Thick and creamy|kidney_beans; water|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Stir in the garam masala, scatter with cilantro and serve with rice (rajma chawal).|action|off|30 + 15 × servings|P3, R1|Served|garam_masala; cilantro|ladle, plates|—
`
  },
  {
    id: "palak_paneer", name: "Palak Paneer", image: "img/350/spinach.webp",
    rows: `
O|opt_paneer|seared|Paneer lightly seared|TRUE
O|opt_paneer|soft|Paneer added soft (not seared)|FALSE
I|spinach|Fresh spinach|img/350/spinach.webp|200|g|200|linear|—|—
I|paneer|Paneer|img/350/paneer.webp|80|g|80|linear|—|2 cm cubes
I|ghee|Ghee or oil|img/350/ghee.webp|1|tbsp|13|linear|—|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|finely chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|chili_pepper|Green chili|img/350/chili_pepper.webp|0.25|pcs|3|linear, rounded up|—|chopped
I|tomato|Tomato|img/350/tomato.webp|50|g|50|linear|—|chopped
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.25|tsp|0.6|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|cream|Cream|img/350/cream.webp|2|tbsp|30|linear|—|—
S|S1|S|Blanch the spinach|Drop the spinach into boiling water for 1 minute, then straight into ice water so it stays bright green.|action|high|300|—|Wilted, bright green|spinach|cooking_pot, stovetop, colander|—
S|S2|S|Purée the spinach|Squeeze lightly and blend to a smooth purée with a splash of water.|action|—|(60 + 30 × servings) × skill_factor|S1|Smooth green purée|—|blender|—|countertop
S|K1|K|Chop|Chop the onion, tomato and chili, grate the garlic and ginger, cube the paneer.|action|—|(120 + 60 × servings) × skill_factor|—|Chopped|onion; tomato; chili_pepper; garlic; ginger_root; paneer|chef_knife, chopping_board, microplane|—
S|P1|P|Sear the paneer|Sear the paneer cubes in a little ghee until golden on two sides; set aside (soak in warm water to keep them soft).|action|medium-high|240|K1|Golden spots|—|pan, stovetop, tongs|opt_paneer = seared
S|P2|P|Masala|Fry the cumin in the rest of the ghee, then the onion until golden, then garlic, ginger, chili and tomato until soft.|action|medium|600|P1, K1|Soft masala|ghee; cumin|pan, stovetop, wooden_spoon|—
S|P3|P|Spinach in|Stir in the spinach purée, garam masala and salt and simmer 3 to 4 minutes. Do not cook longer or it turns dull.|action|low|240|P2, S2|Bright, thick|garam_masala; salt|pan, wooden_spoon|—
S|F1|F|Finish and serve|Add the paneer and cream and warm through. Serve with roti or rice.|action|low|120 + 15 × servings|P3|Served|cream|pan, ladle|—
`
  },
  {
    id: "aloo_gobi", name: "Aloo Gobi", image: "img/350/cauliflower.webp",
    rows: `
O|opt_style|dry|Dry stir-fry|TRUE
O|opt_style|saucy|With a little tomato sauce|FALSE
I|potato|Potatoes|img/350/potato.webp|120|g|120|linear|—|2 cm cubes
I|cauliflower|Cauliflower|img/350/cauliflower.webp|150|g|150|linear|—|small florets
I|oil|Oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|chopped
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|0.5|tsp|1|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.25|tsp|0.7|linear|—|—
I|tomato|Tomato|img/350/tomato.webp|60|g|60|linear; doubled if saucy|—|chopped
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.25|tsp|0.6|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|K1|K|Cut the vegetables|Cut the potatoes into cubes and the cauliflower into small florets. Chop the onion and tomato, grate the garlic and ginger.|action|—|(180 + 120 × servings) × skill_factor|—|Cut|potato; cauliflower; onion; garlic; ginger_root; tomato|chef_knife, chopping_board, microplane|—
S|P1|P|Cumin and onion|Heat the oil, fry the cumin until it crackles, then the onion until soft. Add the garlic, ginger and ground spices.|action|medium|360|K1|Fragrant|oil; cumin; turmeric_powder; coriander_seeds; chili_powder|pan, stovetop, wooden_spoon|—
S|P2|P|Cook covered|Add the potatoes, cauliflower, tomato and salt, toss to coat, cover and cook on low, stirring now and then, until tender. Add a splash of water only if it sticks.|wait|low|1200|P1|Tender|salt|pan, wooden_spoon|—
S|P3|P|Brown|Uncover, turn up the heat and fry a few minutes so the edges brown.|action|medium-high|240|P2|Browned edges|garam_masala|pan, wooden_spoon|—
S|F1|F|Serve|Scatter with cilantro and serve with roti or dal and rice.|action|off|30 + 15 × servings|P3|Served|cilantro|spoon, plates|—
`
  },
  {
    id: "roti_chapati", name: "Roti (Chapati)", image: "img/350/whole_wheat_flour.webp",
    rows: `
O|opt_finish|ghee|Brushed with ghee|TRUE
O|opt_finish|plain|Plain|FALSE
I|whole_wheat_flour|Whole wheat flour (atta)|img/350/whole_wheat_flour.webp|60|g|60|linear|—|—
I|water|Warm water|img/350/water.webp|40|ml|40|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.35|linear|—|—
I|oil|Oil|img/350/oil.webp|0.25|tsp|1|linear|—|—
I|ghee|Ghee|img/350/ghee.webp|0.5|tsp|2.5|linear|opt_finish = ghee|—
S|D1|D|Make the dough|Mix the flour and salt, add the warm water little by little and knead into a soft, smooth dough. Rub with the oil.|action|—|(300 + 30 × servings) × skill_factor|—|Soft and smooth|whole_wheat_flour; water; salt; oil|bowl|—|countertop
S|D2|D|Rest|Cover and rest so the gluten relaxes.|wait|—|1200|D1|Rested|—|bowl, plastic_wrap|—
S|D3|D|Divide and roll|Divide into golf-ball pieces (2 per person). Dust with flour and roll each into a thin 15 cm circle.|action|—|(60 + 120 × servings) × skill_factor|D2|Thin circles|—|rolling_pin|—|countertop
S|P1|P|Heat the pan|Heat a flat pan or tawa until very hot.|action|medium-high|120|D2|Very hot|—|pan, stovetop|—
S|P2|P|Cook the rotis|Cook each roti until bubbles appear (about 30 s), flip and cook 30 s, then press the edges with a cloth or hold over the open flame with tongs so it puffs.|action|medium-high|90 × servings|P1, D3|Puffed, brown spots|—|pan, tongs, spatula|—
S|F1|F|Ghee and serve|Brush with ghee and stack in a cloth to keep them soft.|action|—|20 + 20 × servings|P2|Served|ghee|spoon, plates|—
`
  },
  {
    id: "naan", name: "Naan", image: "img/350/flour.webp",
    rows: `
O|opt_flavour|butter|Butter naan|TRUE
O|opt_flavour|garlic|Garlic naan|FALSE
I|flour|Flour (all-purpose)|img/350/flour.webp|100|g|100|linear|—|—
I|yeast|Dry yeast|img/350/yeast.webp|0.25|tsp|0.8|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tsp|2|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|baking_powder|Baking powder|img/350/baking_powder.webp|0.125|tsp|0.5|linear|—|—
I|yogurt|Plain yogurt|img/350/yogurt.webp|2|tbsp|30|linear|—|—
I|milk|Warm milk|img/350/milk.webp|40|ml|41|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|butter|Melted butter or ghee|img/350/butter.webp|10|g|10|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|opt_flavour = garlic|minced
I|cilantro|Cilantro|img/350/cilantro.webp|1|tsp|1|linear|opt_flavour = garlic|chopped
S|D1|D|Make the dough|Mix the flour, yeast, sugar, salt and baking powder. Add the yogurt, warm milk and oil and knead into a soft, slightly sticky dough.|action|—|(360 + 30 × servings) × skill_factor|—|Soft and smooth|flour; yeast; sugar; salt; baking_powder; yogurt; milk; oil|bowl|—|countertop
S|D2|D|Let it rise|Cover and leave in a warm place until doubled.|wait|—|3600 (doc: 1 to 2 h)|D1|Doubled|—|bowl, plastic_wrap|—
S|D3|D|Shape|Divide into balls (2 per person) and stretch or roll each into a teardrop about 5 mm thick. Press garlic and cilantro on top if making garlic naan.|action|—|(60 + 90 × servings) × skill_factor|D2|Shaped|garlic; cilantro|rolling_pin|—|countertop
S|P1|P|Heat the pan|Heat a heavy pan (cast iron is best) until very hot.|action|high|180|D2|Smoking hot|—|pan, stovetop|—
S|P2|P|Cook the naan|Lay a naan in the dry pan. When big bubbles form (1 min), flip and cook until charred in spots. Cover with a lid for a softer naan.|action|high|150 × servings|P1, D3|Puffed, charred spots|—|pan, tongs|—
S|F1|F|Butter and serve|Brush with melted butter while hot and serve.|action|—|20 + 20 × servings|P2|Served|butter|spoon, plates|—
`
  },
  {
    id: "samosas", name: "Samosas", image: "img/350/potato.webp",
    rows: `
O|opt_cook|fried|Deep-fried (classic)|TRUE
O|opt_cook|baked|Baked (lighter)|FALSE
I|flour|Flour (all-purpose)|img/350/flour.webp|50|g|50|linear|—|—
I|salt|Salt|img/350/salt.webp|0.375|tsp|2.2|linear|—|—
I|oil_dough|Oil (for the pastry)|img/350/oil.webp|1|tbsp|14|linear|—|—
I|water|Cold water|img/350/water.webp|20|ml|20|linear|—|—
I|potato|Potatoes|img/350/potato.webp|120|g|120|linear|—|—
I|pea|Peas|img/350/pea.webp|25|g|25|linear|—|—
I|onion|Onion (optional)|img/350/onion.webp|20|g|20|linear|—|finely chopped
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|3|g|3|linear|—|grated
I|chili_pepper|Green chili|img/350/chili_pepper.webp|0.25|pcs|3|linear, rounded up|—|finely chopped
I|cumin|Cumin seeds|img/350/cumin.webp|0.25|tsp|0.5|linear|—|—
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|0.5|tsp|1|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.25|tsp|0.6|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
I|oil|Oil for frying|img/350/oil.webp|250|ml|15|fixed: about 1 L per pot|opt_cook = fried|—
S|D1|D|Make the pastry|Rub the oil into the flour and a pinch of salt until it holds together when squeezed. Add cold water little by little to make a stiff dough. Cover and rest.|action|—|(240 + 30 × servings) × skill_factor|—|Stiff, smooth dough|flour; oil_dough; water|bowl|—|countertop
S|K1|K|Boil the potatoes|Boil the potatoes until tender, then peel and crumble roughly.|wait|medium-high|1200|—|Tender|potato|cooking_pot, stovetop|—
S|K2|K|Cook the filling|Fry the cumin in a little oil, add onion, ginger and chili, then the potatoes, peas, coriander, garam masala, salt and lemon juice. Mix, stir in the cilantro and cool.|action|medium|360|K1|Dry, well seasoned|pea; onion; ginger_root; chili_pepper; cumin; coriander_seeds; garam_masala; salt; lemon_juice; cilantro|pan, stovetop, wooden_spoon|—
S|D2|D|Shape the samosas|Roll the dough into ovals, cut in half, form each half into a cone, fill with potato and seal the top with a little water. About 3 per person.|action|—|(300 + 240 × servings) × skill_factor|D1, K2|Sealed cones|—|rolling_pin, knife|—|countertop
S|P1|P|Fry or bake|Fry in oil on medium-low (160 °C) for 10 to 12 minutes until golden and blistered; or brush with oil and bake at 200 °C for 25 minutes.|action|medium-low|720 fried / 1500 baked|D2|Golden, crisp|oil|cooking_pot, stovetop, tongs|—
S|F1|F|Serve|Drain and serve warm with chutney or ketchup.|wait|—|180|P1|Served|—|plates|—
`
  },
  {
    id: "masala_dosa", name: "Masala Dosa", image: "img/350/potato.webp",
    rows: `
O|opt_batter|homemade|Homemade fermented batter (start a day ahead)|TRUE
O|opt_batter|store|Store-bought dosa batter|FALSE
I|white_rice|Rice (parboiled or regular)|img/350/white_rice.webp|60|g|60|linear|opt_batter = homemade|—
I|urad_dal|Urad dal (split black gram, skinned)|— (placeholder: no image yet)|20|g|20|linear|opt_batter = homemade|—
I|fenugreek_seeds|Fenugreek seeds|img/350/fenugreek_seeds.webp|0.125|tsp|0.5|linear|opt_batter = homemade|—
I|dosa_batter|Dosa batter (store-bought)|— (placeholder: no image yet)|150|g|150|linear|opt_batter = store|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|potato|Potatoes|img/350/potato.webp|150|g|150|linear|—|—
I|oil|Oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|mustard_seed|Mustard seeds|img/350/mustard_seed.webp|0.5|tsp|2|linear|—|—
I|curry_leaves|Curry leaves|img/350/curry_leaves.webp|4|leaves|0.5|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|sliced
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|3|g|3|linear|—|grated
I|chili_pepper|Green chili|img/350/chili_pepper.webp|0.25|pcs|3|linear, rounded up|—|chopped
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|B1|B|Soak|Soak the rice with the fenugreek seeds, and the urad dal separately, in plenty of water.|wait|—|18000 (doc: 4 to 6 h)|—|Soaked|white_rice; urad_dal; fenugreek_seeds|bowl|opt_batter = homemade
S|B2|B|Grind|Grind the dal to a fluffy paste, then the rice to a slightly grainy paste, using as little water as possible. Mix together with the salt.|action|—|(600 + 60 × servings) × skill_factor|B1|Thick, pourable batter|salt|blender, bowl|opt_batter = homemade|countertop
S|B3|B|Ferment|Cover loosely and leave in a warm place until risen and slightly sour.|wait|—|36000 (doc: 8 to 12 h, overnight)|B2|Risen, bubbly|—|bowl|opt_batter = homemade
S|M1|M|Boil the potatoes|Boil the potatoes until tender, peel and crush roughly.|wait|medium-high|1200|B3|Tender|potato|cooking_pot, stovetop|—
S|M2|M|Potato masala|Fry the mustard seeds in half the oil until they pop, add the curry leaves, onion, ginger and chili and cook until soft. Add the turmeric, potatoes and a pinch of salt and mix with a splash of water.|action|medium|480|M1|Yellow, soft filling|mustard_seed; curry_leaves; onion; ginger_root; chili_pepper; turmeric_powder; salt; cilantro|pan, stovetop, wooden_spoon|—
S|P1|P|Heat the pan|Heat a flat pan until a sprinkle of water sizzles away, then wipe with a little oil.|action|medium-high|120|B3|Hot|oil|pan, stovetop|—
S|P2|P|Cook the dosas|Pour a ladle of batter in the middle and spread it in a spiral into a thin circle. Drizzle oil around the edge and cook until golden and crisp underneath (no need to flip). Add filling and fold. About 2 per person.|action|medium-high|180 × servings|P1, M2|Golden, crisp|dosa_batter|pan, ladle, spatula|—
S|F1|F|Serve|Serve straight away with sambar or coconut chutney.|action|off|20 + 10 × servings|P2|Served|—|plates|—
`
  },
  {
    id: "idli", name: "Idli", image: "img/350/semolina.webp",
    rows: `
O|opt_type|rava|Quick semolina idli (rava idli, no fermenting)|TRUE
O|opt_type|classic|Classic rice and urad dal (fermented overnight)|FALSE
I|semolina|Fine semolina (rava)|img/350/semolina.webp|50|g|50|linear|opt_type = rava|—
I|yogurt|Plain yogurt|img/350/yogurt.webp|50|g|50|linear|opt_type = rava|—
I|ghee|Ghee|img/350/ghee.webp|0.5|tsp|2.5|linear|opt_type = rava|—
I|mustard_seed|Mustard seeds|img/350/mustard_seed.webp|0.25|tsp|1|linear|opt_type = rava|—
I|curry_leaves|Curry leaves|img/350/curry_leaves.webp|3|leaves|0.4|linear|opt_type = rava|—
I|baking_soda|Baking soda (or fruit salt)|img/350/baking_soda.webp|0.125|tsp|0.6|linear|opt_type = rava|—
I|short_grain_rice|Idli rice (or parboiled rice)|img/350/short_grain_rice.webp|60|g|60|linear|opt_type = classic|—
I|urad_dal|Urad dal (split black gram, skinned)|— (placeholder: no image yet)|20|g|20|linear|opt_type = classic|—
I|water|Water|img/350/water.webp|40|ml|40|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|oil|Oil for the moulds|img/350/oil.webp|0.25|tsp|1|linear|—|—
S|B1|B|Toast the semolina|Fry the mustard seeds and curry leaves in the ghee, add the semolina and toast 3 minutes without browning. Cool.|action|medium-low|240|—|Toasted, fragrant|ghee; mustard_seed; curry_leaves; semolina|pan, stovetop, wooden_spoon|opt_type = rava
S|B2|B|Mix the batter|Mix the semolina with the yogurt, salt and enough water for a thick batter; rest 15 minutes. Just before steaming stir in the baking soda.|action|—|(90 + 30 × servings) × skill_factor|B1|Thick, airy batter|yogurt; baking_soda; water; salt|bowl, spoon|opt_type = rava|countertop
S|C1|B|Soak, grind and ferment|Soak the rice and urad dal separately 4 to 6 hours, grind each smooth with a little water, mix with salt and ferment overnight in a warm place.|wait|—|43200 (doc: soak 4 to 6 h, ferment 8 to 12 h)|—|Risen, bubbly batter|short_grain_rice; urad_dal; water; salt|bowl, blender|opt_type = classic
S|S1|S|Heat the steamer|Bring 3 cm of water to a boil in the steamer and oil the idli moulds.|action|high|300|B2, C1|Steaming|oil|steamer, stovetop|—
S|S2|S|Steam|Fill the moulds three-quarters full and steam covered until a toothpick comes out clean. About 3 idlis per person.|wait|medium-high|720|S1|Toothpick comes out clean|—|steamer, spoon|—
S|F1|F|Rest and serve|Rest 2 minutes, loosen with a wet spoon and serve with sambar and chutney.|action|off|120|S2|Served|—|spoon, plates|—
`
  },
  {
    id: "khichdi", name: "Khichdi", image: "img/350/lentil.webp",
    rows: `
O|opt_veg|plain|Plain (comfort food)|TRUE
O|opt_veg|veg|With peas and carrots|FALSE
I|white_rice|Rice (basmati or short-grain)|img/350/white_rice.webp|50|g|50|linear|—|—
I|red_lentil|Yellow moong or red lentils|img/350/red_lentil.webp|40|g|40|linear|—|—
I|ghee|Ghee|img/350/ghee.webp|1|tbsp|13|linear|—|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|asafoetida|Asafoetida (a pinch)|img/350/asafoetida.webp|0.03125|tsp|0.1|linear|—|—
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|3|g|3|linear|—|grated
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|pea|Peas|img/350/pea.webp|25|g|25|linear|opt_veg = veg|—
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|opt_veg = veg|diced
I|water|Water|img/350/water.webp|400|ml|400|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|lemon_juice|Lemon juice, to serve|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
S|K1|K|Rinse|Rinse the rice and lentils together until the water runs clear; soak 15 minutes if you have time.|action|—|(60 + 15 × servings) × skill_factor|—|Rinsed|white_rice; red_lentil|sieve, bowl|—
S|P1|P|Temper the spices|Heat the ghee, fry the cumin until it crackles, then add the asafoetida, ginger and turmeric (and vegetables).|action|medium|120|K1|Fragrant|ghee; cumin; asafoetida; ginger_root; turmeric_powder; pea; carrot|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer|Add the rice, lentils, water and salt, bring to a boil and simmer covered, stirring now and then, until soft and porridge-like. Add hot water if it gets too thick.|wait|low|1500 (doc: 25 to 30 min)|P1|Soft and porridge-like|water; salt|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Serve hot with an extra spoon of ghee, a squeeze of lemon and yogurt or pickle on the side.|action|off|30 + 15 × servings|P2|Served|lemon_juice|ladle|—
`
  },
  {
    id: "vegetable_pulao", name: "Vegetable Pulao", image: "img/350/basmati_rice.webp",
    rows: `
O|opt_fat|ghee|Ghee|TRUE
O|opt_fat|oil|Oil (vegan)|FALSE
I|basmati_rice|Basmati rice|img/350/basmati_rice.webp|75|g|75|linear|—|rinsed and soaked 20 min
I|ghee|Ghee|img/350/ghee.webp|1|tbsp|13|linear|opt_fat = ghee|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|opt_fat = oil|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|bay_leaf|Bay leaf|img/350/bay_leaf.webp|1|pcs per pot|0.2|fixed: 1 per pot|—|—
I|cardamom|Green cardamom pods|img/350/cardamom.webp|1|pcs|0.2|linear|—|—
I|cloves|Cloves|img/350/cloves.webp|1|pcs|0.1|linear|—|—
I|cinnamon|Cinnamon stick piece|img/350/cinnamon.webp|0.25|pcs|0.5|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|sliced
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|—|diced
I|green_beans|Green beans|img/350/green_beans.webp|25|g|25|linear|—|cut short
I|pea|Peas|img/350/pea.webp|25|g|25|linear|—|—
I|water|Water|img/350/water.webp|140|ml|140|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|cilantro|Cilantro or mint|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|K1|K|Soak the rice and chop|Rinse the rice until clear and soak it. Slice the onion, dice the carrot and cut the beans short.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|basmati_rice; onion; carrot; green_beans|sieve, bowl, chef_knife, chopping_board|—
S|P1|P|Whole spices and onion|Heat the ghee (or oil), fry the cumin, bay leaf, cardamom, cloves and cinnamon for 30 seconds, then the onion until golden.|action|medium|420|K1|Golden onion|ghee; oil; cumin; bay_leaf; cardamom; cloves; cinnamon|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Vegetables and rice|Add the vegetables for 2 minutes, then the drained rice and stir gently for a minute.|action|medium|180|P1|Grains coated|pea|cooking_pot, wooden_spoon|—
S|P3|P|Cook covered|Add the water and salt, bring to a boil, then cover tightly and cook on the lowest heat. Do not stir.|wait|low|720|P2|Water absorbed|water; salt|cooking_pot|—
S|P4|P|Rest|Turn off the heat and leave covered.|wait|off|300|P3|Fluffy grains|—|cooking_pot|—
S|F1|F|Fluff and serve|Fluff with a fork, remove the whole spices and serve with cilantro or mint.|action|off|30 + 15 × servings|P4|Served|cilantro|fork, plates|—
`
  },
  {
    id: "keema_curry", name: "Keema Curry", image: "img/350/ground_lamb.webp",
    rows: `
O|opt_meat|lamb|Ground lamb|TRUE
O|opt_meat|beef|Ground beef|FALSE
O|opt_heat|mild|Mild|TRUE
O|opt_heat|hot|Hot|FALSE
I|ground_lamb|Ground lamb|img/350/ground_lamb.webp|130|g|130|linear|opt_meat = lamb|—
I|ground_beef|Ground beef|img/350/ground_beef.webp|130|g|130|linear|opt_meat = beef|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|cumin|Cumin seeds|img/350/cumin.webp|0.5|tsp|1|linear|—|—
I|onion|Onion|img/350/onion.webp|70|g|70|linear|—|finely chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|chili_pepper|Green chili|img/350/chili_pepper.webp|0.25|pcs|3|linear; doubled if hot|—|chopped
I|turmeric_powder|Ground turmeric|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|1|tsp|2|linear|—|—
I|chili_powder|Chili powder|img/350/chili_powder.webp|0.25|tsp|0.7|linear; doubled if hot|—|—
I|tomato|Tomatoes|img/350/tomato.webp|80|g|80|linear|—|chopped
I|yogurt|Plain yogurt|img/350/yogurt.webp|1|tbsp|15|linear|—|—
I|pea|Peas|img/350/pea.webp|40|g|40|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|garam_masala|Garam masala|img/350/garam_masala.webp|0.5|tsp|1.2|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|1|tbsp|2|linear|—|chopped
S|K1|K|Chop|Finely chop the onion, tomatoes and chili, grate the garlic and ginger.|action|—|(120 + 60 × servings) × skill_factor|—|Chopped|onion; garlic; ginger_root; chili_pepper; tomato|chef_knife, chopping_board, microplane|—
S|P1|P|Onion masala|Fry the cumin in the oil, then the onion until golden. Add the garlic, ginger, chili and ground spices for a minute.|action|medium|600|K1|Golden, fragrant|oil; cumin; turmeric_powder; coriander_seeds; chili_powder|pan, stovetop, wooden_spoon|—
S|P2|P|Brown the mince|Add the mince and cook, breaking it up, until no longer pink.|action|medium-high|420|P1|Browned|ground_lamb; ground_beef|pan, wooden_spoon|—
S|P3|P|Simmer|Add the tomatoes, yogurt and salt, cover and simmer, stirring now and then. Add the peas for the last 5 minutes.|wait|low|1200|P2|Thick, peas tender|yogurt; pea; salt|pan, wooden_spoon|—
S|F1|F|Serve|Stir in the garam masala, top with cilantro and serve with rice, roti or naan.|action|off|30 + 15 × servings|P3|Served|garam_masala; cilantro|spoon, plates|—
`
  },
  {
    id: "egg_fried_rice", name: "Egg Fried Rice", image: "img/350/white_rice.webp",
    rows: `
O|opt_veg|peas_carrots|With peas and carrots|TRUE
O|opt_veg|plain|Just egg and green onion|FALSE
I|white_rice|Cooked rice, cold (best from yesterday)|img/350/white_rice.webp|180|g|180|linear|—|—
I|egg|Eggs|img/350/egg.webp|1|pcs|55|linear|—|—
I|oil|Neutral oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|green_onion|Green onions|img/350/green_onion.webp|15|g|15|linear|—|sliced, whites and greens apart
I|pea|Peas|img/350/pea.webp|30|g|30|linear|opt_veg = peas_carrots|—
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|opt_veg = peas_carrots|small dice
I|light_soy_sauce|Light soy sauce|img/350/light_soy_sauce.webp|1|tbsp|15|linear|—|—
I|toasted_sesame_oil|Toasted sesame oil|img/350/toasted_sesame_oil.webp|0.5|tsp|2|linear|—|—
I|white_pepper|White pepper|img/350/white_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
S|K1|K|Prep|Break up any clumps in the cold rice. Beat the eggs with a pinch of salt. Mince the garlic, slice the green onions, dice the carrot.|action|—|(90 + 60 × servings) × skill_factor|—|Everything ready by the wok|white_rice; egg; garlic; green_onion; carrot; salt|bowl, fork, chef_knife, chopping_board|—
S|W1|W|Scramble the eggs|Heat the wok until smoking, add half the oil and the eggs, scramble into soft curds and take them out.|action|high|60|K1|Soft curds|—|wok, stovetop, spatula|—
S|W2|W|Aromatics and vegetables|Add the rest of the oil, the garlic and green onion whites for 15 seconds, then the carrot and peas for 1 minute.|action|high|90|W1|Fragrant|oil; pea|wok, spatula|—
S|W3|W|Fry the rice|Add the rice and toss over high heat, pressing out clumps, until every grain is hot and starting to crisp.|action|high|180 + 30 × servings|W2|Hot, separate grains|—|wok, spatula|—
S|W4|W|Season|Pour the soy sauce around the edge of the wok, add the eggs, white pepper and sesame oil and toss. Finish with the green onion greens.|action|high|60|W3|Evenly coloured|light_soy_sauce; toasted_sesame_oil; white_pepper|wok, spatula|—
S|F1|F|Serve|Serve straight away.|action|off|20 + 10 × servings|W4|Served|—|bowl|—
`
  },
  {
    id: "stir_fried_vegetables", name: "Stir-Fried Vegetables", image: "img/350/bok_choy.webp",
    rows: `
O|opt_protein|none|Vegetables only|TRUE
O|opt_protein|tofu|With crispy tofu|FALSE
O|opt_side|rice|With jasmine rice|TRUE
O|opt_side|none|On their own|FALSE
I|broccoli|Broccoli|img/350/broccoli.webp|80|g|80|linear|—|small florets
I|carrot|Carrot|img/350/carrot.webp|50|g|50|linear|—|thin slices
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|0.5|pcs|80|linear, rounded up|—|strips
I|white_mushroom|Mushrooms|img/350/white_mushroom.webp|50|g|50|linear|—|sliced
I|bok_choy|Bok choy|img/350/bok_choy.webp|60|g|60|linear|—|halved
I|tofu|Firm tofu|img/350/tofu.webp|100|g|100|linear|opt_protein = tofu|cubes
I|garlic|Garlic clove|img/350/garlic.webp|1|pcs|5|linear|—|minced
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|minced
I|oil|Neutral oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tbsp|15|linear|—|—
I|oyster_sauce|Oyster sauce (or vegetarian stir-fry sauce)|img/350/oyster_sauce.webp|1|tbsp|18|linear|—|—
I|cornstarch|Cornstarch|img/350/cornstarch.webp|0.5|tsp|1.5|linear|—|—
I|water|Water|img/350/water.webp|3|tbsp|45|linear|—|—
I|toasted_sesame_oil|Toasted sesame oil|img/350/toasted_sesame_oil.webp|0.5|tsp|2|linear|—|—
I|jasmine_rice|Jasmine rice|img/350/jasmine_rice.webp|70|g|70|linear|opt_side = rice|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.25 parts water, covered, 12 min, rest 5 min).|wait|low|1020|—|Fluffy|jasmine_rice|saucepan, stovetop, sieve|opt_side = rice
S|K1|K|Cut the vegetables|Cut everything into similar bite-size pieces; thinner for hard vegetables like carrot. Mince the garlic and ginger.|action|—|(180 + 150 × servings) × skill_factor|—|All cut|broccoli; carrot; red_bell_pepper; white_mushroom; bok_choy; garlic; ginger_root; tofu|chef_knife, chopping_board|—
S|K2|K|Mix the sauce|Stir together the soy sauce, oyster sauce, cornstarch and water.|action|—|45|—|Smooth|light_soy_sauce; oyster_sauce; cornstarch; water|bowl, spoon|—|countertop
S|W0|W|Crisp the tofu|Fry the tofu cubes in a little of the oil until golden on all sides. Set aside.|action|high|420|K1|Golden|—|wok, stovetop, spatula|opt_protein = tofu
S|W1|W|Hard vegetables first|Heat the wok until smoking, add the oil, then the carrot and broccoli. Toss 2 minutes, adding a splash of water to steam the broccoli.|action|high|120|K1, W0|Bright, starting to soften|oil|wok, stovetop, spatula|—
S|W2|W|The rest|Add the pepper, mushrooms, bok choy, garlic and ginger and toss 2 minutes more.|action|high|120|W1|Crisp-tender|—|wok, spatula|—
S|W3|W|Sauce|Stir the sauce, pour it in (with the tofu) and toss until glossy. Finish with the sesame oil.|action|high|60|W2, K2|Glossy|toasted_sesame_oil|wok, spatula|—
S|F1|F|Serve|Serve straight away, with rice.|action|off|20 + 10 × servings|W3, R1|Served|—|plates|—
`
  },
  {
    id: "chow_mein", name: "Chow Mein", image: "img/350/cabbage.webp",
    rows: `
O|opt_protein|chicken|Chicken|TRUE
O|opt_protein|shrimp|Shrimp|FALSE
O|opt_protein|veg|Vegetarian|FALSE
I|egg_noodles|Chinese egg noodles (dry)|— (placeholder: no image yet)|80|g|80|linear|—|—
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|80|g|80|linear|opt_protein = chicken|thin strips
I|shrimp|Peeled shrimp|img/350/shrimp.webp|80|g|80|linear|opt_protein = shrimp|—
I|cabbage|Cabbage|img/350/cabbage.webp|60|g|60|linear|—|shredded
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|—|matchsticks
I|bean_sprouts|Bean sprouts|img/350/bean_sprouts.webp|40|g|40|linear|—|—
I|green_onion|Green onions|img/350/green_onion.webp|15|g|15|linear|—|4 cm pieces
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|3|linear, rounded up|—|minced
I|oil|Neutral oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|light_soy_sauce|Light soy sauce|img/350/light_soy_sauce.webp|1|tbsp|15|linear|—|—
I|dark_soy_sauce|Dark soy sauce (for colour)|img/350/dark_soy_sauce.webp|0.5|tsp|3|linear|—|—
I|oyster_sauce|Oyster sauce|img/350/oyster_sauce.webp|1|tbsp|18|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.25|tsp|1|linear|—|—
I|toasted_sesame_oil|Toasted sesame oil|img/350/toasted_sesame_oil.webp|0.5|tsp|2|linear|—|—
I|white_pepper|White pepper|img/350/white_pepper.webp|0.0625|tsp|0.15|linear|—|—
S|N1|N|Boil the noodles|Boil the noodles 1 minute less than the package says, drain, rinse with cold water and toss with a few drops of oil.|wait|high|420|—|Just tender|egg_noodles|cooking_pot, stovetop, colander|—
S|K1|K|Cut|Cut the chicken into thin strips, shred the cabbage, cut the carrot into matchsticks, the green onions into lengths, mince the garlic.|action|—|(150 + 120 × servings) × skill_factor|—|Ready|chicken_breast; shrimp; cabbage; carrot; green_onion; garlic|chef_knife, chopping_board|—
S|K2|K|Mix the sauce|Stir together both soy sauces, oyster sauce, sugar, sesame oil and white pepper.|action|—|45|—|Mixed|light_soy_sauce; dark_soy_sauce; oyster_sauce; sugar; toasted_sesame_oil; white_pepper|bowl, spoon|—|countertop
S|W1|W|Cook the protein|Stir-fry the chicken or shrimp in half the oil on high heat until just cooked; take it out.|action|high|180|K1|Just cooked|—|wok, stovetop, spatula|—
S|W2|W|Vegetables|Add the rest of the oil, the garlic, cabbage and carrot and toss 2 minutes.|action|high|120|W1|Wilting|oil|wok, spatula|—
S|W3|W|Noodles and sauce|Add the noodles, sauce and protein and toss with tongs until the noodles are coated and slightly crisp in places. Add the bean sprouts and green onions for the last 30 seconds.|action|high|150|W2, N1, K2|Coated, sprouts still crunchy|bean_sprouts|wok, tongs|—
S|F1|F|Serve|Serve hot.|action|off|20 + 10 × servings|W3|Served|—|tongs, plates|—
`
  },
  {
    id: "mapo_tofu", name: "Mapo Tofu", image: "img/350/tofu.webp",
    rows: `
O|opt_meat|pork|With ground pork (classic)|TRUE
O|opt_meat|veg|Vegetarian (mushrooms)|FALSE
O|opt_heat|medium|Medium|TRUE
O|opt_heat|hot|Hot and numbing|FALSE
I|tofu|Soft or medium tofu|img/350/tofu.webp|150|g|150|linear|—|2 cm cubes
I|ground_pork|Ground pork|img/350/ground_pork.webp|50|g|50|linear|opt_meat = pork|—
I|shiitake_mushroom|Shiitake mushrooms|img/350/shiitake_mushroom.webp|50|g|50|linear|opt_meat = veg|finely chopped
I|oil|Neutral oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|doubanjiang|Chili bean paste (doubanjiang)|— (placeholder: no image yet)|1|tbsp|18|linear; doubled if hot|—|—
I|garlic|Garlic clove|img/350/garlic.webp|1|pcs|5|linear|—|minced
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|minced
I|chili_flakes|Chili flakes|img/350/chili_flakes.webp|0.25|tsp|0.5|linear; doubled if hot|—|—
I|chicken_stock|Stock or water|img/350/chicken_stock.webp|120|ml|120|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|0.5|tbsp|8|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.25|tsp|1|linear|—|—
I|cornstarch|Cornstarch|img/350/cornstarch.webp|1|tsp|3|linear|—|—
I|sichuan_peppercorn|Sichuan peppercorns|img/350/sichuan_peppercorn.webp|0.25|tsp|0.3|linear; doubled if hot|—|toasted and ground
I|green_onion|Green onions|img/350/green_onion.webp|10|g|10|linear|—|sliced
I|white_rice|Rice|img/350/white_rice.webp|70|g|70|linear|—|—
S|R1|R|Cook the rice|Rinse and cook the rice (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|—|Fluffy|white_rice|saucepan, stovetop|—
S|K1|K|Prep|Cut the tofu into cubes and soak them in hot salted water while you prepare the rest (keeps them from breaking). Mince garlic and ginger, slice green onions. Toast and grind the Sichuan peppercorns.|action|—|(180 + 60 × servings) × skill_factor|—|Ready|tofu; garlic; ginger_root; green_onion; sichuan_peppercorn; shiitake_mushroom|chef_knife, chopping_board, mortar_and_pestle, bowl|—
S|W1|W|Fry the meat|Fry the pork (or mushrooms) in the oil until crisp and browned.|action|high|240|K1|Crisp, browned|ground_pork; oil|wok, stovetop, spatula|—
S|W2|W|Chili bean paste|Lower the heat, add the chili bean paste and chili flakes and fry until the oil turns red, then the garlic and ginger.|action|medium|90|W1|Red oil, fragrant|doubanjiang; chili_flakes|wok, spatula|—
S|W3|W|Simmer the tofu|Add the stock, soy sauce and sugar, slide in the drained tofu and simmer gently, pushing (not stirring) so the tofu stays whole.|wait|medium-low|300|W2|Tofu hot through|chicken_stock; light_soy_sauce; sugar|wok, spatula|—
S|W4|W|Thicken|Add the cornstarch mixed with a little water in two or three additions until the sauce clings.|action|medium-low|60|W3|Glossy, clinging|cornstarch|wok, spoon|—
S|F1|F|Serve|Sprinkle with the ground Sichuan pepper and green onions and serve over rice.|action|off|30 + 10 × servings|W4, R1|Served|—|ladle|—
`
  },
  {
    id: "kung_pao_chicken", name: "Kung Pao Chicken", image: "img/350/peanut.webp",
    rows: `
O|opt_heat|mild|Mild (few chilies)|TRUE
O|opt_heat|hot|Hot|FALSE
I|chicken_breast|Chicken breast or thigh|img/350/chicken_breast.webp|140|g|140|linear|—|1.5 cm cubes
I|light_soy_sauce|Light soy sauce|img/350/light_soy_sauce.webp|1|tbsp|15|linear|—|—
I|shaoxing_wine|Shaoxing wine (or dry sherry)|img/350/shaoxing_wine.webp|0.5|tbsp|7|linear|—|—
I|cornstarch|Cornstarch|img/350/cornstarch.webp|1.5|tsp|4.5|linear|—|—
I|rice_vinegar|Chinese black vinegar (or rice vinegar)|img/350/rice_vinegar.webp|1|tsp|5|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|1|tsp|4|linear|—|—
I|oil|Neutral oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|dried_red_chilies|Dried red chilies|img/350/dried_red_chilies.webp|2|pcs|1|linear; doubled if hot|—|halved, seeds shaken out
I|sichuan_peppercorn|Sichuan peppercorns|img/350/sichuan_peppercorn.webp|0.25|tsp|0.3|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|sliced
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|sliced
I|green_onion|Green onions|img/350/green_onion.webp|20|g|20|linear|—|2 cm pieces
I|peanut|Roasted peanuts (unsalted)|img/350/peanut.webp|25|g|25|linear|—|—
I|white_rice|Rice|img/350/white_rice.webp|70|g|70|linear|—|—
S|R1|R|Cook the rice|Rinse and cook the rice (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|—|Fluffy|white_rice|saucepan, stovetop|—
S|K1|K|Marinate the chicken|Cube the chicken and mix with half the soy sauce, the wine and 1 tsp cornstarch. Let it sit 10 minutes.|action|—|(90 + 60 × servings) × skill_factor|—|Coated|chicken_breast; shaoxing_wine|chef_knife, chopping_board, bowl|—
S|K2|K|Sauce and aromatics|Mix the rest of the soy sauce, the vinegar, sugar, the rest of the cornstarch and 2 tbsp water. Slice the garlic, ginger and green onions; halve the chilies.|action|—|(90 + 30 × servings) × skill_factor|—|Ready|light_soy_sauce; cornstarch; rice_vinegar; sugar; garlic; ginger_root; green_onion; dried_red_chilies|bowl, chef_knife, chopping_board|—
S|W1|W|Chilies and peppercorns|Heat the oil on medium, fry the chilies and Sichuan peppercorns for 20 seconds until dark red but not black.|action|medium|30|K1, K2|Dark red, fragrant|oil; sichuan_peppercorn|wok, stovetop, spatula|—
S|W2|W|Fry the chicken|Turn the heat to high, add the chicken and stir-fry until it turns white, then the garlic, ginger and green onion whites.|action|high|240|W1|Chicken white, fragrant|—|wok, spatula|—
S|W3|W|Sauce and peanuts|Stir the sauce, pour it in and toss until thick and glossy, then toss in the peanuts and green onion tops.|action|high|60|W2|Glossy, peanuts coated|peanut|wok, spatula|—
S|F1|F|Serve|Serve over the rice. Do not eat the whole chilies.|action|off|20 + 10 × servings|W3, R1|Served|—|plates|—
`
  },
  {
    id: "beef_and_broccoli", name: "Beef and Broccoli", image: "img/350/broccoli.webp",
    rows: `
O|opt_side|rice|With rice|TRUE
O|opt_side|none|On its own|FALSE
I|beef|Flank or sirloin steak|img/350/beef.webp|130|g|130|linear|—|thin slices across the grain
I|baking_soda|Baking soda (tenderises, optional)|img/350/baking_soda.webp|0.0625|tsp|0.3|linear|—|—
I|cornstarch|Cornstarch|img/350/cornstarch.webp|1.5|tsp|4.5|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tbsp|15|linear|—|—
I|oyster_sauce|Oyster sauce|img/350/oyster_sauce.webp|1.5|tbsp|27|linear|—|—
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|0.5|tsp|2|linear|—|—
I|broccoli|Broccoli|img/350/broccoli.webp|120|g|120|linear|—|florets
I|oil|Neutral oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|minced
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|minced
I|water|Water|img/350/water.webp|60|ml|60|linear|—|—
I|toasted_sesame_oil|Toasted sesame oil|img/350/toasted_sesame_oil.webp|0.5|tsp|2|linear|—|—
I|sesame_seeds|Sesame seeds (optional)|img/350/sesame_seeds.webp|0.5|tsp|1.5|linear|—|—
I|white_rice|Rice|img/350/white_rice.webp|70|g|70|linear|opt_side = rice|—
S|R1|R|Cook the rice|Rinse and cook the rice (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|—|Fluffy|white_rice|saucepan, stovetop|opt_side = rice
S|K1|K|Slice and marinate the beef|Slice the beef thinly across the grain. Mix with the baking soda, 1 tsp cornstarch and a splash of the soy sauce; rest 15 minutes.|action|—|(120 + 60 × servings) × skill_factor|—|Coated|beef; baking_soda|chef_knife, chopping_board, bowl|—
S|K2|K|Sauce and broccoli|Mix the rest of the soy sauce, the oyster sauce, brown sugar, the rest of the cornstarch and the water. Cut the broccoli into florets, mince the garlic and ginger.|action|—|(90 + 60 × servings) × skill_factor|—|Ready|light_soy_sauce; oyster_sauce; brown_sugar; cornstarch; water; broccoli; garlic; ginger_root|bowl, chef_knife, chopping_board|—
S|W1|W|Steam-fry the broccoli|Toss the broccoli in a little oil, add 3 tbsp water, cover 2 minutes until bright green and crisp-tender. Take it out.|action|high|150|K2|Bright green|—|wok, stovetop, spatula|—
S|W2|W|Sear the beef|Heat the rest of the oil until smoking and sear the beef in one layer, 1 minute per side. Add the garlic and ginger for 15 seconds.|action|high|150|W1, K1|Seared|oil|wok, tongs|—
S|W3|W|Sauce|Pour in the sauce, return the broccoli and toss until glossy and thick. Finish with sesame oil and seeds.|action|high|60|W2|Glossy|toasted_sesame_oil; sesame_seeds|wok, spatula|—
S|F1|F|Serve|Serve with rice.|action|off|20 + 10 × servings|W3, R1|Served|—|plates|—
`
  },
  {
    id: "sweet_and_sour_pork", name: "Sweet and Sour Pork", image: "img/350/pineapple.webp",
    rows: `
O|opt_fry|deep|Deep-fried (crispiest)|TRUE
O|opt_fry|shallow|Shallow-fried (less oil)|FALSE
I|pork|Pork shoulder or loin|img/350/pork.webp|140|g|140|linear|—|2 cm cubes
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|egg|Egg|img/350/egg.webp|0.25|pcs|14|linear, rounded up|—|—
I|cornstarch|Cornstarch|img/350/cornstarch.webp|25|g|25|linear|—|—
I|flour|Flour|img/350/flour.webp|10|g|10|linear|—|—
I|oil|Oil for frying|img/350/oil.webp|250|ml|20|fixed: about 1 L per pot|—|—
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|0.25|pcs|40|linear, rounded up|—|chunks
I|green_bell_pepper|Green bell pepper|img/350/green_bell_pepper.webp|0.25|pcs|40|linear, rounded up|—|chunks
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|chunks
I|pineapple|Pineapple (fresh or canned)|img/350/pineapple.webp|60|g|60|linear|—|chunks
I|ketchup|Ketchup|img/350/ketchup.webp|1.5|tbsp|25|linear|—|—
I|rice_vinegar|Rice vinegar|img/350/rice_vinegar.webp|1|tbsp|15|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|1|tbsp|12|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tsp|5|linear|—|—
I|water|Water or pineapple juice|img/350/water.webp|3|tbsp|45|linear|—|—
I|white_rice|Rice|img/350/white_rice.webp|70|g|70|linear|—|—
S|R1|F|Cook the rice|Rinse and cook the rice (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|—|Fluffy|white_rice|saucepan, stovetop|—
S|K1|K|Coat the pork|Cube the pork, season with salt, mix with the egg, then toss in the cornstarch and flour until each piece is dry and coated.|action|—|(120 + 60 × servings) × skill_factor|—|Coated|pork; salt; egg; cornstarch; flour|chef_knife, chopping_board, bowl|—
S|K2|K|Vegetables and sauce|Cut the peppers, onion and pineapple into chunks. Mix the ketchup, vinegar, sugar, soy sauce and water.|action|—|(90 + 60 × servings) × skill_factor|—|Ready|red_bell_pepper; green_bell_pepper; onion; pineapple; ketchup; rice_vinegar; sugar; light_soy_sauce; water|chef_knife, chopping_board, bowl|—
S|P1|P|Heat the oil|Heat the oil in a deep pot to 175 °C. Never leave hot oil alone.|wait|medium-high|480|K1|175 °C|oil|cooking_pot, stovetop|—
S|P2|P|Fry the pork twice|Fry the pork in batches 4 minutes and drain. Then fry all of it again 1 to 2 minutes for an extra-crisp crust.|action|medium-high|360 + 60 × servings|P1|Golden and crisp|—|cooking_pot, tongs|—
S|W1|W|Vegetables|In a wok with 1 tbsp of the oil stir-fry the onion and peppers 1 minute, then the pineapple.|action|high|90|K2, P2|Bright, crisp|—|wok, stovetop, spatula|—
S|W2|W|Sauce and pork|Pour in the sauce, let it bubble until glossy, toss in the pork and serve immediately so it stays crisp.|action|high|60|W1|Glossy, crisp pork|—|wok, spatula|—
S|F1|F|Serve|Serve with the rice.|action|off|20 + 10 × servings|W2, R1|Served|—|plates|—
`
  },
  {
    id: "tomato_and_egg_stir_fry", name: "Tomato and Egg Stir-Fry", image: "img/350/tomato.webp",
    rows: `
O|opt_style|saucy|Saucy (good over rice)|TRUE
O|opt_style|dry|Drier|FALSE
I|egg|Eggs|img/350/egg.webp|2|pcs|110|linear|—|—
I|tomato|Ripe tomatoes|img/350/tomato.webp|2|pcs|220|linear|—|wedges
I|green_onion|Green onion|img/350/green_onion.webp|10|g|10|linear|—|sliced
I|oil|Neutral oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|1|tsp|4|linear|—|—
I|ketchup|Ketchup (optional, deepens the colour)|img/350/ketchup.webp|1|tsp|6|linear|—|—
I|water|Water|img/350/water.webp|2|tbsp|30|linear|opt_style = saucy|—
I|white_rice|Rice|img/350/white_rice.webp|70|g|70|linear|—|—
S|R1|R|Cook the rice|Rinse and cook the rice (1 part rice to 1.5 parts water, covered, 15 min).|wait|low|1200|—|Fluffy|white_rice|saucepan, stovetop|—
S|K1|K|Prep|Cut the tomatoes into wedges, slice the green onion and beat the eggs with a pinch of salt until frothy.|action|—|(60 + 45 × servings) × skill_factor|—|Ready|egg; tomato; green_onion|chef_knife, chopping_board, bowl, fork|—
S|W1|W|Scramble the eggs|Heat half the oil until very hot, pour in the eggs, let them puff for a few seconds, then push into large soft curds. Take them out while still a little wet.|action|high|45|K1|Large soft curds|—|wok, stovetop, spatula|—
S|W2|W|Cook the tomatoes|Add the rest of the oil and the tomatoes; cook until they collapse and release their juice. Season with salt, sugar and ketchup (add the water for a saucier dish).|action|medium-high|180|W1|Juicy and soft|oil; salt; sugar; ketchup; water|wok, spatula|—
S|W3|W|Eggs back in|Return the eggs, fold gently and turn off the heat. Scatter the green onion.|action|off|30|W2|Combined|—|wok, spatula|—
S|F1|F|Serve|Serve over the rice.|action|off|20 + 10 × servings|W3, R1|Served|—|spoon|—
`
  },
  {
    id: "congee", name: "Congee", image: "img/350/jasmine_rice.webp",
    rows: `
O|opt_topping|chicken|With shredded chicken|TRUE
O|opt_topping|plain|Plain with toppings|FALSE
I|jasmine_rice|Jasmine rice|img/350/jasmine_rice.webp|40|g|40|linear|—|rinsed
I|chicken_stock|Chicken stock (or water)|img/350/chicken_stock.webp|300|ml|300|linear|—|—
I|water|Water|img/350/water.webp|200|ml|200|linear|—|—
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|thin matchsticks
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|70|g|70|linear|opt_topping = chicken|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|white_pepper|White pepper|img/350/white_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|10|g|10|linear|—|sliced
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tsp|5|linear|—|—
I|toasted_sesame_oil|Toasted sesame oil|img/350/toasted_sesame_oil.webp|0.5|tsp|2|linear|—|—
S|P1|P|Bring to a boil|Put the rinsed rice, stock, water and half the ginger in the pot and bring to a boil.|wait|high|480|—|Boiling|jasmine_rice; chicken_stock; water|cooking_pot, stovetop|—
S|P2|P|Simmer slowly|Lower the heat and simmer with the lid ajar, stirring every 10 minutes and scraping the bottom, until the rice breaks down into a creamy porridge. Poach the chicken in it for the last 15 minutes, then shred it.|wait|low|3600 (doc: 1 to 1.5 h)|P1|Silky, rice grains broken|chicken_breast|cooking_pot, wooden_spoon, fork|—
S|K1|K|Prepare the toppings|Cut the rest of the ginger into fine matchsticks and slice the green onion.|action|—|(60 + 30 × servings) × skill_factor|P1|Ready|ginger_root; green_onion|chef_knife, chopping_board|—
S|P3|P|Season|Season with salt and white pepper; thin with boiling water if too thick.|action|low|60|P2|Seasoned|salt; white_pepper|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Ladle into bowls, top with the chicken, ginger, green onion and a few drops of soy sauce and sesame oil.|action|off|30 + 15 × servings|P3, K1|Served|light_soy_sauce; toasted_sesame_oil|ladle|—
`
  },
  {
    id: "japanese_curry_rice", name: "Japanese Curry Rice", image: "img/350/curry_powder.webp",
    rows: `
O|opt_roux|scratch|Roux from scratch (flour, butter, curry powder)|TRUE
O|opt_roux|blocks|Store-bought curry roux blocks|FALSE
O|opt_meat|chicken|Chicken|TRUE
O|opt_meat|beef|Beef|FALSE
I|chicken_legs|Boneless chicken thighs|img/350/chicken_legs.webp|120|g|120|linear|opt_meat = chicken|bite-size
I|beef|Beef (chuck)|img/350/beef.webp|120|g|120|linear|opt_meat = beef|bite-size
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|onion|Onion|img/350/onion.webp|80|g|80|linear|—|sliced
I|carrot|Carrot|img/350/carrot.webp|50|g|50|linear|—|chunks
I|potato|Potato|img/350/potato.webp|100|g|100|linear|—|chunks
I|water|Water or stock|img/350/water.webp|250|ml|250|linear|—|—
I|butter|Butter (roux)|img/350/butter.webp|15|g|15|linear|opt_roux = scratch|—
I|flour|Flour (roux)|img/350/flour.webp|15|g|15|linear|opt_roux = scratch|—
I|curry_powder|Mild curry powder|img/350/curry_powder.webp|1.5|tsp|3.5|linear|opt_roux = scratch|—
I|ketchup|Ketchup|img/350/ketchup.webp|1|tsp|6|linear|opt_roux = scratch|—
I|worcestershire_sauce|Worcestershire sauce|img/350/worcestershire_sauce.webp|1|tsp|5|linear|—|—
I|honey|Honey (or grated apple)|img/350/honey.webp|0.5|tsp|3.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|curry_roux|Japanese curry roux blocks|— (placeholder: no image yet)|25|g|25|linear|opt_roux = blocks|—
I|short_grain_rice|Short-grain rice|img/350/short_grain_rice.webp|80|g|80|linear|—|—
S|R1|R|Cook the rice|Rinse the rice until the water is nearly clear and cook it (1 part rice to 1.2 parts water, covered, 13 min, rest 10 min).|wait|low|1380|—|Sticky and tender|short_grain_rice|saucepan, stovetop, sieve|—
S|K1|K|Cut|Slice the onion, cut the carrot and potato into chunks and the meat into bite-size pieces.|action|—|(150 + 120 × servings) × skill_factor|—|Cut|chicken_legs; beef; onion; carrot; potato|chef_knife, chopping_board, vegetable_peeler|—
S|P1|P|Brown|Brown the meat in the oil, add the onion and cook until soft and golden.|action|medium-high|600|K1|Golden onion|oil|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer|Add the carrot, potato and water, bring to a boil, skim, and simmer until the vegetables are tender (beef: 40 minutes).|wait|low|1200 chicken / 2400 beef|P1|Vegetables tender|water|cooking_pot|—
S|X1|X|Make the roux|Melt the butter, stir in the flour and cook until light brown, then the curry powder for 30 seconds. Take off the heat.|action|medium-low|360|K1|Brown, fragrant paste|butter; flour; curry_powder|saucepan, stovetop, wooden_spoon|opt_roux = scratch
S|P3|P|Thicken|Turn off the heat, stir in the roux (or the roux blocks) until dissolved, then simmer on low, stirring, until thick. Season with ketchup, Worcestershire sauce, honey and salt.|action|low|420|P2, X1|Thick, glossy curry|curry_roux; ketchup; worcestershire_sauce; honey; salt|cooking_pot, wooden_spoon, ladle|—
S|F1|F|Serve|Put rice on one side of the plate and ladle the curry beside it.|action|off|30 + 15 × servings|P3, R1|Served|—|ladle, plates|—
`
  },
  {
    id: "teriyaki_chicken", name: "Teriyaki Chicken", image: "img/350/chicken_legs.webp",
    rows: `
O|opt_side|rice|With rice|TRUE
O|opt_side|none|On its own|FALSE
I|chicken_legs|Boneless chicken thighs, skin on|img/350/chicken_legs.webp|150|g|150|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.4|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1.5|tbsp|22|linear|—|—
I|mirin|Mirin|img/350/mirin.webp|1.5|tbsp|22|linear|—|—
I|shaoxing_wine|Sake (or dry sherry)|img/350/shaoxing_wine.webp|1|tbsp|15|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|1|tsp|4|linear|—|—
I|sesame_seeds|Sesame seeds|img/350/sesame_seeds.webp|0.5|tsp|1.5|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|5|g|5|linear|—|sliced
I|short_grain_rice|Short-grain rice|img/350/short_grain_rice.webp|80|g|80|linear|opt_side = rice|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.2 parts water, covered, 13 min, rest 10 min).|wait|low|1380|—|Sticky and tender|short_grain_rice|saucepan, stovetop, sieve|opt_side = rice
S|K1|K|Prep|Pat the chicken dry, prick the skin with a fork and season lightly with salt. Mix the soy sauce, mirin, sake and sugar.|action|—|(60 + 30 × servings) × skill_factor|—|Ready|chicken_legs; salt; light_soy_sauce; mirin; shaoxing_wine; sugar|fork, bowl|—
S|P1|P|Crisp the skin|Put the chicken skin-side down in the oiled cold pan, then heat to medium. Cook without moving until the skin is deep golden and crisp, then flip and cook the other side.|action|medium|660|K1|Crisp skin, cooked through|oil|pan, stovetop, spatula|—
S|P2|P|Glaze|Wipe out most of the fat, pour in the sauce and let it bubble, turning the chicken until coated in a thick, shiny glaze.|action|medium|180|P1|Thick glaze|—|pan, spatula|—
S|F1|F|Slice and serve|Slice, spoon over the glaze, sprinkle with sesame seeds and green onion, and serve with rice.|action|off|45 + 15 × servings|P2, R1|Served|sesame_seeds; green_onion|chef_knife, chopping_board, plates|—
`
  },
  {
    id: "miso_soup", name: "Miso Soup", image: "img/350/miso_paste.webp",
    rows: `
O|opt_stock|dashi|Dashi (instant granules or homemade)|TRUE
O|opt_stock|water|Water only (milder)|FALSE
I|water|Water|img/350/water.webp|250|ml|250|linear|—|—
I|dashi|Dashi granules|— (placeholder: no image yet)|0.5|tsp|1.5|linear|opt_stock = dashi|—
I|wakame|Dried wakame seaweed|img/350/wakame.webp|1|g|1|linear|—|—
I|tofu|Silken or soft tofu|img/350/tofu.webp|50|g|50|linear|—|1 cm cubes
I|miso_paste|Miso paste|img/350/miso_paste.webp|1|tbsp|18|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|5|g|5|linear|—|thinly sliced
S|K1|K|Prep|Soak the wakame in water for 5 minutes and drain. Cube the tofu and slice the green onion.|action|—|(60 + 30 × servings) × skill_factor|—|Ready|wakame; tofu; green_onion|bowl, knife, chopping_board|—
S|P1|P|Heat the dashi|Bring the water and dashi granules to a gentle simmer.|wait|medium|300|—|Simmering|water; dashi|saucepan, stovetop|—
S|P2|P|Tofu and wakame|Add the tofu and wakame and warm for 1 minute.|action|low|60|P1, K1|Hot|—|saucepan, spoon|—
S|P3|P|Dissolve the miso|Turn off the heat. Put the miso in a ladle, lower it into the soup and stir with chopsticks until dissolved. Do not boil after adding the miso.|action|off|60|P2|Cloudy, no lumps|miso_paste|ladle, chopsticks|—
S|F1|F|Serve|Serve in bowls topped with green onion.|action|off|20 + 10 × servings|P3|Served|—|ladle|—
`
  },
  {
    id: "yakisoba", name: "Yakisoba", image: "img/350/cabbage.webp",
    rows: `
O|opt_protein|pork|Pork belly or pork slices|TRUE
O|opt_protein|chicken|Chicken|FALSE
O|opt_protein|veg|Vegetarian|FALSE
I|egg_noodles|Yakisoba or ramen noodles (fresh or boiled dry)|— (placeholder: no image yet)|150|g|150|linear|—|—
I|pork_belly|Thinly sliced pork belly|img/350/pork_belly.webp|70|g|70|linear|opt_protein = pork|bite-size
I|chicken_breast|Chicken|img/350/chicken_breast.webp|70|g|70|linear|opt_protein = chicken|thin strips
I|cabbage|Cabbage|img/350/cabbage.webp|80|g|80|linear|—|bite-size pieces
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|—|thin strips
I|onion|Onion|img/350/onion.webp|30|g|30|linear|—|sliced
I|bean_sprouts|Bean sprouts|img/350/bean_sprouts.webp|30|g|30|linear|—|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|worcestershire_sauce|Worcestershire sauce|img/350/worcestershire_sauce.webp|1.5|tbsp|22|linear|—|—
I|oyster_sauce|Oyster sauce|img/350/oyster_sauce.webp|0.5|tbsp|9|linear|—|—
I|ketchup|Ketchup|img/350/ketchup.webp|1|tsp|6|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tsp|5|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tsp|2|linear|—|—
I|nori_sheet|Nori (crumbled, to finish)|img/350/nori_sheet.webp|0.25|pcs|0.6|linear|—|—
S|K1|K|Prep|Cut the cabbage, carrot, onion and meat. Mix the Worcestershire sauce, oyster sauce, ketchup, soy sauce and sugar. Loosen the noodles (rinse fresh ones under hot water).|action|—|(150 + 120 × servings) × skill_factor|—|Ready|egg_noodles; pork_belly; chicken_breast; cabbage; carrot; onion; worcestershire_sauce; oyster_sauce; ketchup; light_soy_sauce; sugar|chef_knife, chopping_board, bowl|—
S|W1|W|Cook the meat|Fry the meat in the oil until browned.|action|high|180|K1|Browned|oil|wok, stovetop, spatula|—
S|W2|W|Vegetables|Add the onion, carrot and cabbage and stir-fry until just tender.|action|high|150|W1|Crisp-tender|—|wok, spatula|—
S|W3|W|Noodles and sauce|Add the noodles with a splash of water, toss to separate, pour in the sauce and add the bean sprouts. Toss until evenly coated and slightly charred.|action|high|150|W2|Coated, a little charred|bean_sprouts|wok, tongs|—
S|F1|F|Serve|Serve topped with crumbled nori.|action|off|20 + 10 × servings|W3|Served|nori_sheet|tongs, plates|—
`
  },
  {
    id: "onigiri", name: "Onigiri (Rice Balls)", image: "img/350/nori_sheet.webp",
    rows: `
O|opt_filling|tuna_mayo|Tuna mayo|TRUE
O|opt_filling|salmon|Salted salmon|FALSE
O|opt_filling|plain|Plain salted|FALSE
I|short_grain_rice|Short-grain (sushi) rice|img/350/short_grain_rice.webp|90|g|90|linear|—|—
I|water|Water|img/350/water.webp|110|ml|110|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|tuna|Canned tuna, drained|img/350/tuna.webp|30|g|30|linear|opt_filling = tuna_mayo|—
I|mayonnaise|Mayonnaise|img/350/mayonnaise.webp|1|tbsp|14|linear|opt_filling = tuna_mayo|—
I|light_soy_sauce|Soy sauce (a few drops)|img/350/light_soy_sauce.webp|0.25|tsp|1.25|linear|opt_filling = tuna_mayo|—
I|salmon|Salmon fillet|img/350/salmon.webp|40|g|40|linear|opt_filling = salmon|—
I|nori_sheet|Nori sheets|img/350/nori_sheet.webp|0.5|pcs|1.5|linear|—|—
I|sesame_seeds|Sesame seeds (optional)|img/350/sesame_seeds.webp|0.25|tsp|0.8|linear|—|—
S|R1|R|Rinse the rice|Rinse the rice several times until the water is almost clear, then let it drain.|action|—|(90 + 30 × servings) × skill_factor|—|Water almost clear|short_grain_rice|sieve, bowl|—
S|R2|R|Cook the rice|Cook the rice with the water, covered, 13 minutes on low, then rest 10 minutes. Spread out to cool until warm enough to handle.|wait|low|1800|R1|Sticky, warm|water|saucepan, stovetop|—
S|K1|K|Make the filling|Mix the tuna with mayonnaise and a few drops of soy sauce; or salt the salmon, cook it in a pan until done and flake it.|action|medium|360|—|Filling ready|tuna; mayonnaise; light_soy_sauce; salmon|bowl, fork, pan, stovetop|—
S|F1|F|Shape|Wet your hands and rub them with salt. Take a palmful of rice, press a dent, add a teaspoon of filling, cover with more rice and press firmly into a triangle. About 2 per person.|action|—|(120 + 120 × servings) × skill_factor|R2, K1|Firm triangles|salt; sesame_seeds|bowl|—|countertop
S|F2|F|Wrap and serve|Wrap a strip of nori around the base just before eating, so it stays crisp.|action|—|30 + 15 × servings|F1|Served|nori_sheet|kitchen_scissors, plates|—
`
  },
  {
    id: "bulgogi", name: "Bulgogi", image: "img/350/beef.webp",
    rows: `
O|opt_serve|rice|With rice|TRUE
O|opt_serve|lettuce|In lettuce wraps with rice|FALSE
I|beef|Beef ribeye or sirloin, very thinly sliced|img/350/beef.webp|140|g|140|linear|—|—
I|pear|Asian pear (or apple)|img/350/pear.webp|30|g|30|linear|—|grated
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1.5|tbsp|22|linear|—|—
I|sugar|Sugar or brown sugar|img/350/sugar.webp|1|tsp|4|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|2|g|2|linear|—|grated
I|toasted_sesame_oil|Toasted sesame oil|img/350/toasted_sesame_oil.webp|1|tsp|4.5|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.0625|tsp|0.15|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|thinly sliced
I|green_onion|Green onions|img/350/green_onion.webp|15|g|15|linear|—|4 cm pieces
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|sesame_seeds|Sesame seeds|img/350/sesame_seeds.webp|0.5|tsp|1.5|linear|—|—
I|short_grain_rice|Short-grain rice|img/350/short_grain_rice.webp|80|g|80|linear|—|—
I|lettuce|Lettuce leaves|img/350/lettuce.webp|4|leaves|40|linear|opt_serve = lettuce|—
S|K1|K|Marinate the beef|Mix the grated pear, soy sauce, sugar, garlic, ginger, sesame oil and pepper. Add the beef, onion and green onions and massage the marinade in.|action|—|(120 + 60 × servings) × skill_factor|—|Coated|beef; pear; light_soy_sauce; sugar; garlic; ginger_root; toasted_sesame_oil; ground_black_pepper; onion; green_onion|bowl, microplane, chef_knife, chopping_board|—
S|K2|K|Rest|Leave to marinate (chill if longer).|wait|—|1800 (doc: 30 min to overnight)|K1|Marinated|—|bowl, fridge|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.2 parts water, covered, 13 min, rest 10 min).|wait|low|1380|—|Sticky|short_grain_rice|saucepan, stovetop, sieve|—
S|P1|P|Sear|Heat the pan until very hot, add the oil and cook the beef in batches in a single layer, a minute or two, until caramelised at the edges.|action|high|180 + 60 × servings|K2|Caramelised edges|oil|pan, stovetop, tongs|—
S|F1|F|Serve|Sprinkle with sesame seeds and serve with rice (and lettuce leaves to wrap).|action|off|30 + 15 × servings|P1, R1|Served|sesame_seeds; lettuce|tongs, plates|—
`
  },
  {
    id: "kimchi_fried_rice", name: "Kimchi Fried Rice", image: "img/350/kimchi.webp",
    rows: `
O|opt_meat|none|Without meat|TRUE
O|opt_meat|bacon|With bacon or spam-style ham|FALSE
I|white_rice|Cooked short-grain rice, cold|img/350/white_rice.webp|180|g|180|linear|—|—
I|kimchi|Ripe kimchi|img/350/kimchi.webp|80|g|80|linear|—|chopped, with a little juice
I|bacon|Bacon or ham|img/350/bacon.webp|40|g|40|linear|opt_meat = bacon|diced
I|onion|Onion|img/350/onion.webp|25|g|25|linear|—|diced
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|gochujang|Gochujang|img/350/gochujang.webp|0.5|tbsp|9|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tsp|5|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.25|tsp|1|linear|—|—
I|toasted_sesame_oil|Toasted sesame oil|img/350/toasted_sesame_oil.webp|1|tsp|4.5|linear|—|—
I|egg|Egg (fried, to top)|img/350/egg.webp|1|pcs|55|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|10|g|10|linear|—|sliced
I|nori_sheet|Nori (crumbled)|img/350/nori_sheet.webp|0.25|pcs|0.6|linear|—|—
I|sesame_seeds|Sesame seeds|img/350/sesame_seeds.webp|0.5|tsp|1.5|linear|—|—
S|K1|K|Prep|Chop the kimchi, dice the onion (and bacon), slice the green onion and break up the cold rice.|action|—|(90 + 45 × servings) × skill_factor|—|Ready|white_rice; kimchi; onion; bacon; green_onion|chef_knife, chopping_board|—
S|W1|W|Fry the kimchi|Fry the bacon (if using) and onion in the oil, add the kimchi and fry until it softens and caramelises a little.|action|medium-high|300|K1|Kimchi softened|oil|pan, stovetop, spatula|—
S|W2|W|Rice and seasoning|Add the gochujang, soy sauce, sugar and a splash of kimchi juice, then the rice. Toss until evenly red and hot, pressing it against the pan for crispy bits.|action|medium-high|240|W1|Evenly red, crispy bits|gochujang; light_soy_sauce; sugar|pan, spatula|—
S|W3|W|Fry the egg|Push the rice aside (or use a second pan) and fry the egg sunny-side up. Stir the sesame oil into the rice.|action|medium|180|W2|Runny yolk|egg; toasted_sesame_oil|pan, spatula|—
S|F1|F|Serve|Spoon into bowls, top with the egg, green onion, nori and sesame seeds.|action|off|30 + 15 × servings|W3|Served|nori_sheet; sesame_seeds|spoon|—
`
  },
  {
    id: "pad_thai", name: "Pad Thai", image: "img/350/rice_noodles.webp",
    rows: `
O|opt_protein|shrimp|Shrimp|TRUE
O|opt_protein|chicken|Chicken|FALSE
O|opt_protein|tofu|Tofu|FALSE
I|rice_noodles|Flat rice noodles (5 mm)|img/350/rice_noodles.webp|80|g|80|linear|—|—
I|tamarind|Tamarind paste|img/350/tamarind.webp|1|tbsp|15|linear|—|—
I|fish_sauce|Fish sauce|img/350/fish_sauce.webp|1|tbsp|15|linear|—|—
I|brown_sugar|Palm or brown sugar|img/350/brown_sugar.webp|1|tbsp|12|linear|—|—
I|shrimp|Shrimp, peeled|img/350/shrimp.webp|80|g|80|linear|opt_protein = shrimp|—
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|80|g|80|linear|opt_protein = chicken|thin slices
I|tofu|Firm tofu|img/350/tofu.webp|80|g|80|linear|opt_protein = tofu|small cubes
I|oil|Oil|img/350/oil.webp|1.5|tbsp|20|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|shallot|Shallot|img/350/shallot.webp|15|g|15|linear|—|sliced
I|egg|Eggs|img/350/egg.webp|1|pcs|55|linear|—|—
I|bean_sprouts|Bean sprouts|img/350/bean_sprouts.webp|50|g|50|linear|—|—
I|green_onion|Green onion (or garlic chives)|img/350/green_onion.webp|10|g|10|linear|—|4 cm pieces
I|peanut|Roasted peanuts|img/350/peanut.webp|15|g|15|linear|—|crushed
I|chili_flakes|Chili flakes|img/350/chili_flakes.webp|0.25|tsp|0.5|linear; doubled if hot|—|—
I|lime|Lime wedges|img/350/lime.webp|0.25|pcs|17|linear|—|—
S|N1|N|Soak the noodles|Soak the noodles in lukewarm water until bendy but still firm, then drain.|wait|—|1800|—|Bendy, still firm|rice_noodles|bowl, colander|—
S|K1|K|Sauce|Stir together the tamarind, fish sauce and sugar until the sugar dissolves.|action|—|60 + 15 × servings|—|Dissolved|tamarind; fish_sauce; brown_sugar|bowl, spoon|—
S|K2|K|Prep|Chop the garlic, slice the shallot, cut the green onion and the protein, crush the peanuts.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|shrimp; chicken_breast; tofu; garlic; shallot; green_onion; peanut|chef_knife, chopping_board|—
S|W1|W|Cook the protein|Heat the oil in the wok until shimmering. Fry the garlic and shallot for 20 seconds, then the protein until just cooked.|action|high|180|K2|Just cooked|oil|wok, stovetop, spatula|—
S|W2|W|Egg|Push everything aside, crack in the eggs, scramble briefly until half set.|action|high|45|W1|Half set|egg|wok, spatula|—
S|W3|W|Noodles and sauce|Add the noodles and the sauce with a splash of water and toss until the noodles are soft and the sauce is absorbed.|action|high|180|W2, N1, K1|Soft, sauce absorbed|—|wok, tongs|—
S|W4|W|Finish|Toss in the bean sprouts and green onion for 30 seconds.|action|high|30|W3|Sprouts warm, still crunchy|bean_sprouts|wok, tongs|—
S|F1|F|Serve|Serve topped with peanuts and chili flakes, with lime wedges on the side.|action|off|30 + 15 × servings|W4|Served|chili_flakes; lime|tongs, plates|—
`
  },
  {
    id: "thai_green_curry", name: "Thai Green Curry", image: "img/350/coconut_milk.webp",
    rows: `
O|opt_protein|chicken|Chicken|TRUE
O|opt_protein|tofu|Tofu and vegetables|FALSE
O|opt_heat|medium|Medium|TRUE
O|opt_heat|hot|Hot|FALSE
I|green_curry_paste|Thai green curry paste|— (placeholder: no image yet)|1|tbsp|15|linear; doubled if hot|—|—
I|coconut_milk|Coconut milk|img/350/coconut_milk.webp|200|ml|200|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|chicken_legs|Boneless chicken thighs|img/350/chicken_legs.webp|120|g|120|linear|opt_protein = chicken|bite-size
I|tofu|Firm tofu|img/350/tofu.webp|120|g|120|linear|opt_protein = tofu|cubes
I|eggplant|Eggplant (Thai or regular)|img/350/eggplant.webp|60|g|60|linear|—|chunks
I|green_beans|Green beans|img/350/green_beans.webp|40|g|40|linear|—|4 cm pieces
I|kaffir_lime_leaves|Kaffir lime leaves|img/350/kaffir_lime_leaves.webp|2|pcs|0.5|linear|—|torn
I|fish_sauce|Fish sauce|img/350/fish_sauce.webp|2|tsp|10|linear|—|—
I|brown_sugar|Palm or brown sugar|img/350/brown_sugar.webp|1|tsp|4|linear|—|—
I|thai_basil|Thai basil leaves|img/350/thai_basil.webp|5|g|5|linear|—|—
I|chili_pepper|Red chili (to garnish)|img/350/chili_pepper.webp|0.25|pcs|3|linear; doubled if hot|—|sliced
I|jasmine_rice|Jasmine rice|img/350/jasmine_rice.webp|80|g|80|linear|—|—
S|R1|R|Cook the rice|Rinse the jasmine rice and cook it (1 part rice to 1.25 parts water, covered, 12 min, rest 10 min).|wait|low|1320|—|Fluffy|jasmine_rice|saucepan, stovetop, sieve|—
S|K1|K|Prep|Cut the protein, eggplant and green beans; tear the lime leaves and slice the chili.|action|—|(120 + 90 × servings) × skill_factor|—|Ready|chicken_legs; tofu; eggplant; green_beans; kaffir_lime_leaves; chili_pepper|chef_knife, chopping_board|—
S|P1|P|Fry the paste|Heat the oil with a third of the coconut milk until it bubbles and the oil starts to separate, then fry the curry paste until fragrant.|action|medium|240|K1|Fragrant, oil separating|green_curry_paste; oil|wok, stovetop, wooden_spoon|—
S|P2|P|Protein|Add the chicken (or tofu) and stir to coat.|action|medium|180|P1|Coated, outside cooked|—|wok, wooden_spoon|—
S|P3|P|Simmer|Pour in the rest of the coconut milk, add the eggplant, green beans and lime leaves and simmer until the chicken is cooked and the vegetables are tender. Season with fish sauce and sugar.|wait|low|600|P2|Vegetables tender|coconut_milk; fish_sauce; brown_sugar|wok, wooden_spoon|—
S|F1|F|Serve|Stir in the Thai basil and serve with rice, topped with chili.|action|off|30 + 15 × servings|P3, R1|Served|thai_basil|ladle, bowl|—
`
  },
  {
    id: "tom_yum_soup", name: "Tom Yum Soup", image: "img/350/lemongrass.webp",
    rows: `
O|opt_style|clear|Clear (nam sai)|TRUE
O|opt_style|creamy|Creamy (nam khon, with milk)|FALSE
O|opt_heat|medium|Medium|TRUE
O|opt_heat|hot|Hot|FALSE
I|chicken_stock|Chicken stock or water|img/350/chicken_stock.webp|300|ml|300|linear|—|—
I|lemongrass|Lemongrass stalk|img/350/lemongrass.webp|0.5|pcs|10|linear|—|bruised, 4 cm pieces
I|galangal|Galangal (or ginger)|img/350/galangal.webp|5|g|5|linear|—|sliced
I|kaffir_lime_leaves|Kaffir lime leaves|img/350/kaffir_lime_leaves.webp|2|pcs|0.5|linear|—|torn
I|chili_pepper|Thai chilies|img/350/chili_pepper.webp|1|pcs|3|linear; doubled if hot|—|smashed
I|shrimp|Shrimp, shell on|img/350/shrimp.webp|100|g|100|linear|—|—
I|oyster_mushroom|Oyster or straw mushrooms|img/350/oyster_mushroom.webp|50|g|50|linear|—|torn
I|thai_chili_paste|Thai chili paste in oil (nam prik pao)|— (placeholder: no image yet)|1|tsp|7|linear|—|—
I|fish_sauce|Fish sauce|img/350/fish_sauce.webp|1|tbsp|15|linear|—|—
I|lime|Lime juice|img/350/lime.webp|0.5|pcs|15|linear|—|—
I|evaporated_milk|Evaporated milk|img/350/evaporated_milk.webp|2|tbsp|30|linear|opt_style = creamy|—
I|cilantro|Cilantro|img/350/cilantro.webp|3|g|3|linear|—|—
S|K1|K|Prep|Bruise and cut the lemongrass, slice the galangal, tear the lime leaves, smash the chilies, tear the mushrooms. Devein the shrimp, leaving the shells on.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|lemongrass; galangal; kaffir_lime_leaves; chili_pepper; shrimp; oyster_mushroom|chef_knife, chopping_board|—
S|P1|P|Infuse|Bring the stock to a boil with the lemongrass, galangal and lime leaves and simmer to infuse.|wait|medium|480|K1|Fragrant broth|chicken_stock|saucepan, stovetop|—
S|P2|P|Mushrooms and shrimp|Add the mushrooms and chili paste, then the shrimp and cook until they just turn pink.|action|medium|180|P1|Shrimp pink|thai_chili_paste|saucepan, ladle|—
S|P3|P|Season off the heat|Turn off the heat. Stir in the fish sauce, lime juice and chilies (and the evaporated milk for the creamy version). Taste: it should be sour, salty and spicy.|action|off|60|P2|Sour, salty, spicy|fish_sauce; lime; evaporated_milk|saucepan, citrus_juicer, spoon|—
S|F1|F|Serve|Ladle into bowls and top with cilantro.|action|off|20 + 10 × servings|P3|Served|cilantro|ladle|—
`
  },
  {
    id: "chicken_satay", name: "Chicken Satay with Peanut Sauce", image: "img/350/peanut_butter.webp",
    rows: `
O|opt_cook|pan|Grill pan|TRUE
O|opt_cook|oven|Oven grill|FALSE
I|chicken_legs|Boneless chicken thighs|img/350/chicken_legs.webp|150|g|150|linear|—|thin strips
I|turmeric_powder|Turmeric powder|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|0.25|tsp|0.6|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.25|tsp|0.6|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tsp|5|linear|—|—
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|1|tsp|4|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|oil|Oil|img/350/oil.webp|1|tsp|4.5|linear|—|—
I|peanut_butter|Peanut butter|img/350/peanut_butter.webp|2|tbsp|32|linear|—|—
I|coconut_milk|Coconut milk|img/350/coconut_milk.webp|60|ml|60|linear|—|—
I|lime|Lime juice|img/350/lime.webp|0.25|pcs|8|linear|—|—
I|chili_flakes|Chili flakes|img/350/chili_flakes.webp|0.25|tsp|0.5|linear|—|—
I|cucumber|Cucumber|img/350/cucumber.webp|40|g|40|linear|—|chunks
S|K1|K|Marinate|Mix the turmeric, coriander, cumin, soy sauce, sugar, garlic and oil, coat the chicken strips and leave for at least 30 minutes.|action|—|(90 + 45 × servings) × skill_factor|—|Coated|chicken_legs; turmeric_powder; coriander_seeds; cumin; light_soy_sauce; brown_sugar; garlic; oil|bowl, microplane|—
S|K2|K|Skewer|After marinating, thread the chicken onto skewers (soak wooden ones in water first).|action|—|1800 + (60 + 60 × servings) × skill_factor|K1|Skewered|—|skewers, tray|—
S|S1|S|Peanut sauce|Warm the peanut butter, coconut milk and chili flakes, stirring, until smooth; loosen with water. Finish with lime juice.|action|low|240|—|Smooth, pourable|peanut_butter; coconut_milk; chili_flakes; lime|saucepan, stovetop, whisk|—
S|G1|G|Grill|Grill the skewers on a very hot grill pan (or under the oven grill), turning, until charred in spots and cooked through.|action|high|480|K2|Charred, cooked through|—|pan, stovetop, tongs|—
S|F1|F|Serve|Serve the skewers with the peanut sauce and cucumber chunks.|action|off|45 + 15 × servings|G1, S1|Served|cucumber|chef_knife, chopping_board, plates|—
`
  },
  {
    id: "nasi_goreng", name: "Nasi Goreng", image: "img/350/white_rice.webp",
    rows: `
O|opt_protein|chicken|Chicken|TRUE
O|opt_protein|shrimp|Shrimp|FALSE
O|opt_protein|veg|Egg only|FALSE
I|white_rice|Cooked rice, cold|img/350/white_rice.webp|180|g|180|linear|—|—
I|chicken_breast|Chicken|img/350/chicken_breast.webp|70|g|70|linear|opt_protein = chicken|small pieces
I|shrimp|Shrimp|img/350/shrimp.webp|70|g|70|linear|opt_protein = shrimp|—
I|shallot|Shallots|img/350/shallot.webp|20|g|20|linear|—|chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|chili_pepper|Red chili|img/350/chili_pepper.webp|0.5|pcs|6|linear|—|chopped
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|kecap_manis|Kecap manis (sweet soy sauce)|— (placeholder: no image yet)|1.5|tbsp|25|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tsp|5|linear|—|—
I|egg|Egg (fried, to top)|img/350/egg.webp|1|pcs|55|linear|—|—
I|cucumber|Cucumber|img/350/cucumber.webp|30|g|30|linear|—|sliced
I|tomato|Tomato|img/350/tomato.webp|30|g|30|linear|—|sliced
I|shallot_fried|Fried shallots (optional)|img/350/shallot.webp|1|tbsp|5|linear|—|—
S|K1|K|Prep|Pound or finely chop the shallots, garlic and chili into a rough paste. Cut the chicken. Break up the cold rice. Slice the cucumber and tomato.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|white_rice; chicken_breast; shrimp; shallot; garlic; chili_pepper; cucumber; tomato|mortar_and_pestle, chef_knife, chopping_board|—
S|W1|W|Fry the paste|Fry the paste in the oil until fragrant, then add the chicken or shrimp and cook through.|action|high|240|K1|Cooked through|oil|wok, stovetop, spatula|—
S|W2|W|Rice|Add the rice, kecap manis and soy sauce and toss on high heat until evenly brown and hot.|action|high|240|W1|Evenly brown, hot|kecap_manis; light_soy_sauce|wok, spatula|—
S|W3|W|Fry the egg|Fry the egg sunny-side up in a little oil until the edges are crisp.|action|medium-high|150|W2|Crisp edges, runny yolk|egg|pan, spatula|—
S|F1|F|Serve|Plate the rice with the egg on top, cucumber and tomato on the side, and fried shallots.|action|off|30 + 15 × servings|W3|Served|shallot_fried|spatula, plates|—
`
  },
  {
    id: "mie_goreng", name: "Mie Goreng", image: "img/350/bok_choy.webp",
    rows: `
O|opt_protein|chicken|Chicken|TRUE
O|opt_protein|shrimp|Shrimp|FALSE
O|opt_protein|veg|Vegetarian|FALSE
I|egg_noodles|Egg noodles|— (placeholder: no image yet)|80|g|80|linear|—|—
I|chicken_breast|Chicken|img/350/chicken_breast.webp|70|g|70|linear|opt_protein = chicken|thin slices
I|shrimp|Shrimp|img/350/shrimp.webp|70|g|70|linear|opt_protein = shrimp|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|shallot|Shallot|img/350/shallot.webp|15|g|15|linear|—|sliced
I|cabbage|Cabbage|img/350/cabbage.webp|40|g|40|linear|—|shredded
I|bok_choy|Bok choy|img/350/bok_choy.webp|50|g|50|linear|—|chopped
I|egg|Egg|img/350/egg.webp|1|pcs|55|linear|—|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|kecap_manis|Kecap manis (sweet soy sauce)|— (placeholder: no image yet)|1.5|tbsp|25|linear|—|—
I|oyster_sauce|Oyster sauce|img/350/oyster_sauce.webp|1|tsp|6|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1|tsp|5|linear|—|—
I|chili_flakes|Chili flakes or sambal|img/350/chili_flakes.webp|0.25|tsp|0.5|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|5|g|5|linear|—|sliced
S|N1|N|Cook the noodles|Boil the noodles until just tender, drain and rinse under cold water.|wait|high|600|—|Just tender|egg_noodles|cooking_pot, stovetop, colander|—
S|K1|K|Prep|Chop the garlic and shallot, cut the protein, shred the cabbage, chop the bok choy and slice the green onion. Mix the kecap manis, oyster sauce and soy sauce.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|chicken_breast; shrimp; garlic; shallot; cabbage; bok_choy; green_onion; kecap_manis; oyster_sauce; light_soy_sauce|chef_knife, chopping_board, bowl|—
S|W1|W|Aromatics and protein|Fry the garlic and shallot in the oil until golden, add the protein and cook through.|action|high|210|K1|Cooked|oil|wok, stovetop, spatula|—
S|W2|W|Egg and vegetables|Scramble the egg in the wok, then add the cabbage and bok choy and stir-fry until wilted.|action|high|150|W1|Wilted|egg|wok, spatula|—
S|W3|W|Noodles|Add the noodles, the sauce and chili and toss until glossy and hot.|action|high|150|W2, N1|Glossy, hot|chili_flakes|wok, tongs|—
S|F1|F|Serve|Serve topped with green onion.|action|off|20 + 10 × servings|W3|Served|—|tongs, plates|—
`
  },
  {
    id: "gado_gado", name: "Gado-Gado", image: "img/350/tempeh.webp",
    rows: `
O|opt_protein|both|Tofu and tempeh|TRUE
O|opt_protein|tofu|Tofu only|FALSE
I|potato|Waxy potatoes|img/350/potato.webp|100|g|100|linear|—|—
I|egg|Eggs|img/350/egg.webp|1|pcs|55|linear|—|—
I|green_beans|Green beans|img/350/green_beans.webp|50|g|50|linear|—|—
I|cabbage|Cabbage|img/350/cabbage.webp|50|g|50|linear|—|shredded
I|bean_sprouts|Bean sprouts|img/350/bean_sprouts.webp|40|g|40|linear|—|—
I|tofu|Firm tofu|img/350/tofu.webp|60|g|60|linear|—|cubes
I|tempeh|Tempeh|img/350/tempeh.webp|50|g|50|linear|opt_protein = both|slices
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|cucumber|Cucumber|img/350/cucumber.webp|40|g|40|linear|—|sliced
I|peanut_butter|Peanut butter (crunchy)|img/350/peanut_butter.webp|3|tbsp|48|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|2.5|linear|—|—
I|chili_pepper|Red chili|img/350/chili_pepper.webp|0.5|pcs|5|linear|—|—
I|kecap_manis|Kecap manis (or soy sauce + sugar)|— (placeholder: no image yet)|1|tbsp|17|linear|—|—
I|tamarind|Tamarind paste (or lime juice)|img/350/tamarind.webp|1|tsp|5|linear|—|—
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|1|tsp|4|linear|—|—
I|water|Hot water|img/350/water.webp|60|ml|60|linear|—|—
I|shallot_fried|Fried shallots (optional)|img/350/shallot.webp|1|tbsp|5|linear|—|—
S|P1|P|Potatoes and eggs|Boil the potatoes until tender (about 15 min) and the eggs for 9 minutes; cool the eggs in cold water.|wait|high|900|—|Potatoes tender|potato; egg|cooking_pot, stovetop, bowl|—
S|P2|P|Blanch the vegetables|In the same water, blanch the green beans 3 minutes, the cabbage 1 minute and the sprouts 20 seconds. Drain.|action|high|300|P1|Bright and crisp-tender|green_beans; cabbage; bean_sprouts|cooking_pot, colander|—
S|T1|T|Fry tofu and tempeh|Fry the tofu and tempeh in the oil until golden on all sides.|action|medium-high|480|—|Golden|tofu; tempeh; oil|pan, stovetop, tongs|—
S|S1|S|Peanut sauce|Blend or mash the peanut butter with garlic, chili, kecap manis, tamarind, sugar and hot water until smooth and pourable.|action|—|(120 + 30 × servings) × skill_factor|—|Smooth, pourable|peanut_butter; garlic; chili_pepper; kecap_manis; tamarind; brown_sugar; water|blender, microplane|—
S|K1|K|Slice|Slice the cucumber, peel and quarter the eggs, and cut the potatoes into chunks.|action|—|(60 + 60 × servings) × skill_factor|P2|Sliced|cucumber|chef_knife, chopping_board|—
S|F1|F|Assemble|Arrange the vegetables, potatoes, eggs, tofu and tempeh on plates, pour over the peanut sauce and top with fried shallots.|action|—|60 + 30 × servings|K1, T1, S1|Served|shallot_fried|spoon, plates|—
`
  },
  {
    id: "curry_laksa", name: "Curry Laksa", image: "img/350/coconut_milk.webp",
    rows: `
O|opt_protein|mixed|Chicken and shrimp|TRUE
O|opt_protein|chicken|Chicken only|FALSE
I|rice_noodles|Rice vermicelli|img/350/rice_noodles.webp|70|g|70|linear|—|—
I|laksa_paste|Laksa paste|— (placeholder: no image yet)|1.5|tbsp|25|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|chicken_stock|Chicken stock|img/350/chicken_stock.webp|300|ml|300|linear|—|—
I|coconut_milk|Coconut milk|img/350/coconut_milk.webp|150|ml|150|linear|—|—
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|70|g|70|linear|—|thin slices
I|shrimp|Shrimp|img/350/shrimp.webp|60|g|60|linear|opt_protein = mixed|—
I|tofu|Tofu puffs (or fried firm tofu)|img/350/tofu.webp|30|g|30|linear|—|—
I|fish_sauce|Fish sauce|img/350/fish_sauce.webp|1|tsp|5|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tsp|2|linear|—|—
I|bean_sprouts|Bean sprouts|img/350/bean_sprouts.webp|40|g|40|linear|—|—
I|egg|Boiled egg (halved)|img/350/egg.webp|0.5|pcs|27|linear|—|—
I|mint|Mint or Vietnamese mint|img/350/mint.webp|2|g|2|linear|—|—
I|lime|Lime wedges|img/350/lime.webp|0.25|pcs|17|linear|—|—
S|N1|N|Soak the noodles|Cover the vermicelli with boiling water for 5 minutes, then drain.|wait|—|300|—|Soft|rice_noodles|bowl, colander|—
S|K1|K|Prep|Slice the chicken, peel the shrimp, halve the tofu puffs and the boiled eggs.|action|—|(90 + 60 × servings) × skill_factor|—|Ready|chicken_breast; shrimp; tofu; egg|chef_knife, chopping_board|—
S|P1|P|Fry the paste|Fry the laksa paste in the oil until fragrant and darker.|action|medium|180|—|Fragrant|laksa_paste; oil|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Broth|Add the stock and coconut milk, bring to a simmer, then cook the chicken, shrimp and tofu puffs in it. Season with fish sauce and sugar.|wait|medium-low|480|P1, K1|Chicken cooked|chicken_stock; coconut_milk; fish_sauce; sugar|cooking_pot, ladle|—
S|F1|F|Assemble|Put noodles and bean sprouts in bowls, ladle over the hot broth with the chicken, shrimp and tofu, top with egg and mint, and serve with lime.|action|off|45 + 30 × servings|P2, N1|Served|bean_sprouts; mint; lime|ladle, bowl|—
`
  },
  {
    id: "pho", name: "Pho (Beef Noodle Soup)", image: "img/350/star_anise.webp",
    rows: `
O|opt_broth|quick|Quick broth (store-bought stock, 45 min)|TRUE
O|opt_broth|bones|Bone broth (beef bones, 4 h)|FALSE
I|onion|Onion|img/350/onion.webp|0.5|pcs|60|linear|—|halved, unpeeled
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|15|g|15|linear|—|halved lengthwise
I|star_anise|Star anise|img/350/star_anise.webp|1|pcs|0.5|linear|—|—
I|cinnamon|Cinnamon stick|img/350/cinnamon.webp|0.25|pcs|1|linear|—|—
I|cloves|Cloves|img/350/cloves.webp|1|pcs|0.1|linear|—|—
I|coriander_seeds|Coriander seeds|img/350/coriander_seeds.webp|0.5|tsp|1|linear|—|—
I|beef_stock|Beef stock|img/350/beef_stock.webp|500|ml|500|linear|opt_broth = quick|—
I|beef|Beef bones + brisket (bone broth)|img/350/beef.webp|300|g|300|linear|opt_broth = bones|—
I|water|Water (bone broth)|img/350/water.webp|800|ml|800|linear|opt_broth = bones|—
I|fish_sauce|Fish sauce|img/350/fish_sauce.webp|1|tbsp|15|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|0.5|tsp|2|linear|—|—
I|rice_noodles|Flat rice noodles (banh pho)|img/350/rice_noodles.webp|80|g|80|linear|—|—
I|beef_sirloin|Beef sirloin, sliced paper-thin|img/350/beef.webp|70|g|70|linear|—|chilled, then sliced
I|bean_sprouts|Bean sprouts|img/350/bean_sprouts.webp|40|g|40|linear|—|—
I|thai_basil|Thai basil|img/350/thai_basil.webp|3|g|3|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|3|g|3|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|5|g|5|linear|—|sliced
I|lime|Lime wedges|img/350/lime.webp|0.25|pcs|17|linear|—|—
I|chili_pepper|Red chili|img/350/chili_pepper.webp|0.25|pcs|3|linear|—|sliced
I|hoisin_sauce|Hoisin sauce (at the table)|— (placeholder: no image yet)|1|tbsp|18|linear|—|—
I|hot_sauce|Sriracha (at the table)|img/350/hot_sauce.webp|1|tsp|5|linear|—|—
S|C1|C|Char the aromatics|Char the onion and ginger, cut-side down, in a dry pan until blackened in spots. Toast the star anise, cinnamon, cloves and coriander seeds for 1 minute.|action|high|600|—|Blackened spots, fragrant spices|onion; ginger_root; star_anise; cinnamon; cloves; coriander_seeds|pan, stovetop, tongs|—
S|B1|B|Blanch the bones|Boil the bones and brisket hard for 5 minutes, drain and rinse; this keeps the broth clear.|action|high|600|—|Rinsed clean|beef|cooking_pot, stovetop, colander|opt_broth = bones
S|B2|B|Simmer the broth|Put the stock (or the bones with fresh water) in the pot with the charred aromatics and spices and simmer very gently, skimming. Take out the brisket when tender (about 1.5 h) and slice it.|wait|low|2700 quick / 14400 bones|C1, B1|Clear, fragrant broth|beef_stock; water|cooking_pot, ladle|—
S|B3|B|Strain and season|Strain the broth and season with fish sauce and sugar. Keep it at a rolling boil.|action|high|180|B2|Seasoned, boiling|fish_sauce; sugar|sieve, cooking_pot|—
S|N1|N|Soak the noodles|Soak the noodles in warm water 20 minutes, then dip them in boiling water for 20 seconds and divide among bowls.|wait|—|1200|—|Soft, separated|rice_noodles|bowl, colander|—
S|K1|K|Prepare the garnishes|Slice the chilled sirloin as thinly as you can. Put the sprouts, herbs, green onion, lime, chili, hoisin and sriracha on a plate.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|beef_sirloin; bean_sprouts; thai_basil; cilantro; green_onion; lime; chili_pepper; hoisin_sauce; hot_sauce|chef_knife, chopping_board, plates|—
S|F1|F|Assemble|Lay the raw sirloin on the noodles and ladle over the boiling broth so it cooks the beef. Everyone adds garnishes at the table.|action|off|30 + 20 × servings|B3, N1, K1|Beef just pink|—|ladle, bowl|—
`
  },
  {
    id: "fresh_spring_rolls", name: "Fresh Spring Rolls", image: "img/350/rice_paper.webp",
    rows: `
O|opt_filling|shrimp|Shrimp|TRUE
O|opt_filling|tofu|Tofu|FALSE
I|rice_paper|Rice paper sheets|img/350/rice_paper.webp|3|pcs|24|linear|—|—
I|shrimp|Shrimp|img/350/shrimp.webp|60|g|60|linear|opt_filling = shrimp|—
I|tofu|Firm tofu|img/350/tofu.webp|60|g|60|linear|opt_filling = tofu|strips, fried
I|rice_noodles|Rice vermicelli|img/350/rice_noodles.webp|25|g|25|linear|—|—
I|lettuce|Lettuce leaves|img/350/lettuce.webp|2|leaves|20|linear|—|—
I|cucumber|Cucumber|img/350/cucumber.webp|30|g|30|linear|—|matchsticks
I|carrot|Carrot|img/350/carrot.webp|20|g|20|linear|—|matchsticks
I|mint|Mint|img/350/mint.webp|2|g|2|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|2|g|2|linear|—|—
I|fish_sauce|Fish sauce|img/350/fish_sauce.webp|1|tbsp|15|linear|—|—
I|lime|Lime juice|img/350/lime.webp|0.5|pcs|15|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|1|tbsp|12|linear|—|—
I|water|Water|img/350/water.webp|2|tbsp|30|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|2.5|linear|—|minced
I|chili_pepper|Red chili|img/350/chili_pepper.webp|0.25|pcs|3|linear|—|minced
I|oil|Oil|img/350/oil.webp|1|tsp|4.5|linear|opt_filling = tofu|—
S|P1|P|Cook noodles and shrimp|Boil the vermicelli 3 minutes and rinse cold. In the same water poach the shrimp until pink, cool and halve lengthwise (or fry the tofu strips in the oil until golden).|action|high|480|—|Cooked, cooled|rice_noodles; shrimp; tofu; oil|saucepan, stovetop, colander, chef_knife|—
S|K1|K|Prep|Cut the cucumber and carrot into matchsticks, wash the lettuce and herbs.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|lettuce; cucumber; carrot; mint; cilantro|chef_knife, chopping_board, vegetable_peeler|—
S|S1|S|Dipping sauce (nuoc cham)|Stir the fish sauce, lime juice, sugar and water until dissolved; add the garlic and chili.|action|—|(90 + 15 × servings) × skill_factor|—|Sweet, sour, salty|fish_sauce; lime; sugar; water; garlic; chili_pepper|bowl, spoon, citrus_juicer|—
S|F1|F|Roll|Dip a rice paper in warm water for 2 seconds and lay it flat. Put shrimp halves pink side down, then lettuce, noodles, vegetables and herbs. Fold the sides in and roll up tightly.|action|—|(90 + 150 × servings) × skill_factor|P1, K1|Tight rolls|rice_paper|plates|—|countertop
S|F2|F|Serve|Serve right away with the dipping sauce (cover with a damp towel if waiting).|action|—|20 + 10 × servings|F1, S1|Served|—|chef_knife, plates|—
`
  },
  {
    id: "chicken_adobo", name: "Chicken Adobo", image: "img/350/bay_leaf.webp",
    rows: `
O|opt_finish|crispy|Seared after braising|TRUE
O|opt_finish|saucy|Saucy, straight from the pot|FALSE
I|chicken_legs|Chicken thighs and drumsticks, bone in|img/350/chicken_legs.webp|250|g|250|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|3|tbsp|45|linear|—|—
I|white_vinegar|Cane or white vinegar|img/350/white_vinegar.webp|3|tbsp|45|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|4|pcs|20|linear|—|crushed
I|bay_leaf|Bay leaves|img/350/bay_leaf.webp|1|pcs|0.2|linear|—|—
I|black_peppercorn|Whole black peppercorns|img/350/black_peppercorn.webp|0.5|tsp|1.5|linear|—|lightly cracked
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|1|tsp|4|linear|—|—
I|water|Water|img/350/water.webp|60|ml|60|linear|—|—
I|oil|Oil|img/350/oil.webp|0.5|tbsp|7|linear|—|—
I|white_rice|White rice|img/350/white_rice.webp|80|g|80|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|5|g|5|linear|—|sliced
S|K1|K|Marinate|Mix the chicken with the soy sauce, garlic, bay leaves and pepper and leave for 30 minutes (or overnight in the fridge).|wait|—|1800|—|Marinated|chicken_legs; light_soy_sauce; garlic; bay_leaf; black_peppercorn|bowl|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.5 parts water, covered, 15 min, rest 10 min).|wait|low|1500|—|Fluffy|white_rice|saucepan, stovetop, sieve|—
S|P1|P|Braise|Put the chicken and marinade in the pot with the vinegar and water. Bring to a boil without stirring (lets the vinegar mellow), then cover and simmer until tender.|wait|low|2100|K1|Tender, nearly falling off the bone|white_vinegar; water|cooking_pot, stovetop|—
S|P2|P|Sear|Lift the chicken out, brown it skin-side down in the oil in a pan, then return it.|action|medium-high|360|P1|Golden skin|oil|pan, tongs|opt_finish = crispy
S|P3|P|Reduce the sauce|Stir the sugar into the sauce and boil until reduced and glossy; coat the chicken.|action|medium-high|300|P1, P2|Glossy sauce|brown_sugar|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Serve over rice with plenty of sauce, topped with green onion.|action|off|30 + 15 × servings|P3, R1|Served|green_onion|ladle, plates|—
`
  },
  {
    id: "sinigang", name: "Sinigang (Sour Tamarind Soup)", image: "img/350/tamarind.webp",
    rows: `
O|opt_meat|pork|Pork|TRUE
O|opt_meat|shrimp|Shrimp|FALSE
I|pork|Pork ribs or shoulder|img/350/pork.webp|200|g|200|linear|opt_meat = pork|chunks
I|shrimp|Shrimp, shell on|img/350/shrimp.webp|150|g|150|linear|opt_meat = shrimp|—
I|water|Water|img/350/water.webp|500|ml|500|linear|—|—
I|onion|Onion|img/350/onion.webp|40|g|40|linear|—|quartered
I|tomato|Tomato|img/350/tomato.webp|60|g|60|linear|—|quartered
I|tamarind|Tamarind paste (or sinigang mix)|img/350/tamarind.webp|1.5|tbsp|22|linear|—|—
I|daikon|Daikon radish|img/350/daikon.webp|50|g|50|linear|—|thick slices
I|green_beans|Long beans or green beans|img/350/green_beans.webp|40|g|40|linear|—|5 cm pieces
I|eggplant|Eggplant|img/350/eggplant.webp|40|g|40|linear|—|thick slices
I|okra|Okra|img/350/okra.webp|30|g|30|linear|—|—
I|spinach|Water spinach (kangkong) or spinach|img/350/spinach.webp|30|g|30|linear|—|—
I|chili_pepper|Long green chili|img/350/chili_pepper.webp|0.5|pcs|8|linear|—|—
I|fish_sauce|Fish sauce|img/350/fish_sauce.webp|1|tbsp|15|linear|—|—
I|white_rice|White rice|img/350/white_rice.webp|80|g|80|linear|—|—
S|P1|P|Simmer the meat|Bring the pork, water, onion and tomato to a boil, skim, and simmer until the pork is tender (shrimp version: simmer the onion and tomato 10 minutes only).|wait|low|3600 pork / 600 shrimp|—|Pork tender|pork; water; onion; tomato|cooking_pot, stovetop, ladle|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.5 parts water, covered, 15 min, rest 10 min).|wait|low|1500|—|Fluffy|white_rice|saucepan, stovetop, sieve|—
S|K1|K|Prep the vegetables|Cut the daikon, beans and eggplant; trim the okra and the spinach.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|daikon; green_beans; eggplant; okra; spinach; chili_pepper|chef_knife, chopping_board, vegetable_peeler|—
S|P2|P|Sour it|Stir in the tamarind and add the daikon; cook 5 minutes.|action|medium|300|P1, K1|Sour broth|tamarind|cooking_pot, wooden_spoon|—
S|P3|P|Vegetables|Add the beans, eggplant, okra, chili (and the shrimp) and cook until tender. Season with fish sauce. Wilt in the spinach.|action|medium|360|P2|Vegetables tender|shrimp; fish_sauce|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Serve hot with rice on the side.|action|off|30 + 15 × servings|P3, R1|Served|—|ladle, bowl|—
`
  },
  {
    id: "pancit_bihon", name: "Pancit Bihon", image: "img/350/rice_noodles.webp",
    rows: `
O|opt_protein|chicken|Chicken|TRUE
O|opt_protein|mixed|Chicken and shrimp|FALSE
I|rice_noodles|Rice sticks (bihon)|img/350/rice_noodles.webp|70|g|70|linear|—|—
I|chicken_breast|Chicken breast|img/350/chicken_breast.webp|80|g|80|linear|—|thin strips
I|shrimp|Shrimp|img/350/shrimp.webp|40|g|40|linear|opt_protein = mixed|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|minced
I|onion|Onion|img/350/onion.webp|30|g|30|linear|—|sliced
I|carrot|Carrot|img/350/carrot.webp|30|g|30|linear|—|matchsticks
I|green_beans|Snow peas or green beans|img/350/green_beans.webp|30|g|30|linear|—|sliced
I|cabbage|Cabbage|img/350/cabbage.webp|60|g|60|linear|—|shredded
I|chicken_stock|Chicken stock|img/350/chicken_stock.webp|150|ml|150|linear|—|—
I|light_soy_sauce|Soy sauce|img/350/light_soy_sauce.webp|1.5|tbsp|22|linear|—|—
I|oyster_sauce|Oyster sauce|img/350/oyster_sauce.webp|1|tsp|6|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|green_onion|Green onion|img/350/green_onion.webp|5|g|5|linear|—|sliced
I|lime|Calamansi or lime wedges|img/350/lime.webp|0.25|pcs|17|linear|—|—
S|N1|N|Soak the noodles|Soak the rice sticks in water for 10 minutes until pliable, then drain.|wait|—|600|—|Pliable|rice_noodles|bowl, colander|—
S|K1|K|Prep|Cut the chicken, garlic, onion, carrot, beans and cabbage; peel the shrimp.|action|—|(150 + 90 × servings) × skill_factor|—|Ready|chicken_breast; shrimp; garlic; onion; carrot; green_beans; cabbage; green_onion|chef_knife, chopping_board, vegetable_peeler|—
S|W1|W|Meat|Fry the garlic and onion in the oil, then the chicken (and shrimp) until cooked.|action|medium-high|300|K1|Cooked|oil|wok, stovetop, spatula|—
S|W2|W|Vegetables|Add the carrot, beans and cabbage and stir-fry until crisp-tender; take everything out.|action|high|180|W1|Crisp-tender|—|wok, spatula|—
S|W3|W|Noodles|Pour the stock, soy sauce, oyster sauce and pepper into the wok, bring to a boil and add the noodles. Toss until the liquid is absorbed, then return the meat and vegetables.|action|medium-high|300|W2, N1|Liquid absorbed|chicken_stock; light_soy_sauce; oyster_sauce; ground_black_pepper|wok, tongs|—
S|F1|F|Serve|Serve on a platter with green onion and calamansi or lime to squeeze over.|action|off|30 + 15 × servings|W3|Served|lime|tongs, plates|—
`
  },
  {
    id: "shakshuka", name: "Shakshuka", image: "img/350/egg.webp",
    rows: `
O|opt_feta|yes|With feta|TRUE
O|opt_feta|no|Without feta|FALSE
O|opt_heat|mild|Mild|TRUE
O|opt_heat|hot|Hot|FALSE
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|diced
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|75|g|75|linear|—|diced
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|sliced
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1.2|linear|—|—
I|paprika_powder|Paprika powder|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|chili_flakes|Chili flakes|img/350/chili_flakes.webp|0.125|tsp|0.3|linear; doubled if hot|—|—
I|tomato|Canned chopped tomatoes|img/350/tomato.webp|200|g|200|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|sugar|Pinch of sugar|img/350/sugar.webp|0.25|tsp|1|linear|—|—
I|egg|Eggs|img/350/egg.webp|2|pcs|110|linear|—|—
I|feta_cheese|Feta|img/350/feta_cheese.webp|25|g|25|linear|opt_feta = yes|crumbled
I|parsley|Parsley or cilantro|img/350/parsley.webp|3|g|3|linear|—|chopped
I|bread|Crusty bread or pita|img/350/bread.webp|60|g|60|linear|—|—
S|K1|K|Prep|Dice the onion and pepper, slice the garlic, chop the herbs.|action|—|(120 + 45 × servings) × skill_factor|—|Ready|onion; red_bell_pepper; garlic; parsley|chef_knife, chopping_board|—
S|P1|P|Soften|Cook the onion and pepper in the olive oil until soft and sweet, add the garlic and spices for 1 minute.|action|medium|540|K1|Soft and sweet|olive_oil; cumin; paprika_powder; chili_flakes|pan, stovetop, wooden_spoon|—
S|P2|P|Sauce|Add the tomatoes, salt and sugar and simmer until thickened.|wait|medium-low|600|P1|Thick sauce|tomato; salt; sugar|pan, wooden_spoon|—
S|P3|P|Eggs|Make wells in the sauce, crack in the eggs, cover and cook until the whites are set and the yolks still runny.|wait|low|420|P2|Whites set, yolks runny|egg|pan, spoon|—
S|F1|F|Serve|Scatter with feta and herbs and serve in the pan with bread.|action|off|30 + 15 × servings|P3|Served|feta_cheese; bread|spoon, plates|—
`
  },
  {
    id: "hummus", name: "Hummus", image: "img/350/chickpea.webp",
    rows: `
O|opt_beans|canned|Canned chickpeas|TRUE
O|opt_beans|dried|Dried chickpeas (soak overnight)|FALSE
I|chickpea|Canned chickpeas, drained|img/350/chickpea.webp|120|g|120|linear|opt_beans = canned|—
I|chickpea_dried|Dried chickpeas|img/350/chickpea.webp|50|g|50|linear|opt_beans = dried|soaked overnight
I|baking_soda|Baking soda|img/350/baking_soda.webp|0.25|tsp|1|linear|—|—
I|water|Water|img/350/water.webp|500|ml|500|linear|—|—
I|tahini|Tahini|img/350/tahini.webp|2|tbsp|30|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tbsp|15|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|2.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.125|tsp|0.3|linear|—|—
I|ice|Ice-cold water|img/350/ice.webp|2|tbsp|30|linear|—|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|1|tbsp|14|linear|—|—
I|paprika_powder|Paprika (to finish)|img/350/paprika_powder.webp|0.125|tsp|0.3|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|1|g|1|linear|—|chopped
S|P1|P|Cook the chickpeas soft|Simmer the chickpeas with the baking soda in plenty of water until very soft and falling apart (canned: 20 min; soaked dried: about 1 h). Drain.|wait|medium-low|1200 canned / 3600 dried|—|Mushy, skins loose|chickpea; chickpea_dried; baking_soda; water|saucepan, stovetop, colander|—
S|B1|B|Tahini base|Blend the tahini, lemon juice, garlic and salt; it will seize, then loosen as you add the ice water.|action|—|120|—|Pale, fluffy|tahini; lemon_juice; garlic; salt; ice|blender|—
S|B2|B|Blend|Add the warm chickpeas and cumin and blend for 3 to 4 minutes, scraping down, until very smooth. Add more ice water if too thick.|action|—|300|P1, B1|Silky smooth|cumin|blender, spatula|—
S|F1|F|Serve|Swirl onto a plate, make a well, pour in the olive oil and dust with paprika and parsley.|action|—|30 + 15 × servings|B2|Served|extra_virgin_olive_oil; paprika_powder; parsley|spoon, plates|—
`
  },
  {
    id: "falafel", name: "Falafel", image: "img/350/chickpea.webp",
    rows: `
O|opt_serve|pita|In pita with salad|TRUE
O|opt_serve|plate|As a plate with tahini sauce|FALSE
I|chickpea_dried|Dried chickpeas, soaked overnight (not canned)|img/350/chickpea.webp|70|g|70|linear|—|soaked 12-24 h
I|onion|Onion|img/350/onion.webp|25|g|25|linear|—|roughly chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|8|g|8|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|5|g|5|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1.2|linear|—|—
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|0.5|tsp|1|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|baking_powder|Baking powder|img/350/baking_powder.webp|0.25|tsp|1|linear|—|—
I|oil|Oil for deep frying|img/350/oil.webp|250|ml|250|fixed|—|—
I|tahini|Tahini|img/350/tahini.webp|1.5|tbsp|22|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tbsp|15|linear|—|—
I|water|Cold water|img/350/water.webp|2|tbsp|30|linear|—|—
I|tomato|Tomato|img/350/tomato.webp|50|g|50|linear|—|diced
I|cucumber|Cucumber|img/350/cucumber.webp|50|g|50|linear|—|diced
I|pita|Pita breads|img/350/pita.webp|1|pcs|60|linear|opt_serve = pita|—
S|K1|K|Grind|Pulse the drained soaked chickpeas with onion, garlic, herbs and spices until like coarse sand that holds when squeezed. Do not purée.|action|—|(180 + 30 × servings) × skill_factor|—|Coarse, holds together|chickpea_dried; onion; garlic; parsley; cilantro; cumin; coriander_seeds; salt|blender, spatula|—
S|K2|K|Rest and shape|Chill the mix for 30 minutes, stir in the baking powder, then shape into walnut-size balls or patties.|action|—|1800 + (60 + 90 × servings) × skill_factor|K1|Shaped|baking_powder|bowl, fridge, tray|—
S|P1|P|Heat the oil|Heat the oil in a deep pot to 175 °C (a piece of mix sizzles at once).|wait|medium-high|480|—|175 °C|oil|cooking_pot, stovetop|—
S|P2|P|Fry|Fry in batches until deep brown and crisp, about 3 to 4 minutes. Drain on paper.|action|medium-high|240 + 120 × servings|P1, K2|Deep brown, crisp|—|cooking_pot, spoon, tray|—
S|S1|S|Tahini sauce and salad|Whisk the tahini, lemon juice and cold water into a pourable sauce. Dice the tomato and cucumber.|action|—|(90 + 45 × servings) × skill_factor|—|Ready|tahini; lemon_juice; water; tomato; cucumber|bowl, whisk, chef_knife, chopping_board|—
S|F1|F|Serve|Stuff warm pitas with falafel and salad, or plate them, and drizzle with tahini sauce.|action|off|30 + 30 × servings|P2, S1|Served|pita|spoon, plates|—
`
  },
  {
    id: "tabbouleh", name: "Tabbouleh", image: "img/350/parsley.webp",
    rows: `
O|opt_grain|bulgur|Fine bulgur|TRUE
O|opt_grain|quinoa|Quinoa (gluten-free)|FALSE
I|bulgur|Fine bulgur|img/350/bulgur.webp|20|g|20|linear|opt_grain = bulgur|—
I|quinoa|Quinoa|img/350/quinoa.webp|20|g|20|linear|opt_grain = quinoa|—
I|water|Boiling water|img/350/water.webp|40|ml|40|linear|—|—
I|parsley|Flat-leaf parsley|img/350/parsley.webp|40|g|40|linear|—|very finely chopped
I|mint|Mint|img/350/mint.webp|5|g|5|linear|—|finely chopped
I|tomato|Firm tomatoes|img/350/tomato.webp|80|g|80|linear|—|small dice
I|green_onion|Green onion|img/350/green_onion.webp|10|g|10|linear|—|thinly sliced
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1.5|tbsp|22|linear|—|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|1.5|tbsp|20|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|allspice|Pinch of allspice|img/350/allspice.webp|0.0625|tsp|0.15|linear|—|—
S|G1|G|Soak the grain|Pour the boiling water over the bulgur and let it swell, then fluff (quinoa: rinse and simmer 12 minutes, drain and cool).|wait|—|900|—|Tender, cool|bulgur; quinoa; water|bowl, fork, saucepan|—
S|K1|K|Chop the herbs|Wash and thoroughly dry the parsley and mint, then chop very finely with a sharp knife (don't bruise them in a processor).|action|—|(240 + 120 × servings) × skill_factor|—|Finely chopped, dry|parsley; mint|chef_knife, chopping_board|—
S|K2|K|Dice|Dice the tomatoes small and slice the green onion.|action|—|(60 + 45 × servings) × skill_factor|K1|Diced|tomato; green_onion|chef_knife, chopping_board|—
S|F1|F|Dress|Toss the herbs, tomato, green onion and grain with the lemon juice, olive oil, salt and allspice. Serve soon.|action|—|60 + 15 × servings|G1, K2|Bright green, glossy|lemon_juice; extra_virgin_olive_oil; salt; allspice|bowl, spoon|—
`
  },
  {
    id: "mujadara", name: "Mujadara (Lentils and Rice)", image: "img/350/lentil.webp",
    rows: `
O|opt_grain|rice|Rice|TRUE
O|opt_grain|bulgur|Coarse bulgur|FALSE
I|lentil|Brown or green lentils|img/350/lentil.webp|50|g|50|linear|—|rinsed
I|basmati_rice|Basmati rice|img/350/basmati_rice.webp|45|g|45|linear|opt_grain = rice|rinsed
I|bulgur|Coarse bulgur|img/350/bulgur.webp|45|g|45|linear|opt_grain = bulgur|—
I|water|Water|img/350/water.webp|300|ml|300|linear|—|—
I|onion|Onions|img/350/onion.webp|150|g|150|linear|—|thinly sliced
I|olive_oil|Olive oil|img/350/olive_oil.webp|2|tbsp|28|linear|—|—
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1.2|linear|—|—
I|cinnamon|Pinch of cinnamon|img/350/cinnamon.webp|0.0625|tsp|0.15|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|yogurt|Plain yogurt (to serve)|img/350/yogurt.webp|50|g|50|linear|—|—
I|cucumber|Cucumber (to serve)|img/350/cucumber.webp|40|g|40|linear|—|diced
S|K1|K|Slice the onions|Halve and thinly slice the onions.|action|—|(90 + 60 × servings) × skill_factor|—|Sliced|onion|chef_knife, chopping_board|—
S|O1|O|Caramelise the onions|Cook the onions slowly in the olive oil with a pinch of salt, stirring often, until deep brown and some are crisp. Lift half out for the topping.|action|medium|1800|K1|Deep brown, some crisp|olive_oil|pan, stovetop, wooden_spoon|—
S|L1|L|Parboil the lentils|Simmer the lentils in the water until just tender but holding shape.|wait|medium-low|1200|—|Just tender|lentil; water|cooking_pot, stovetop|—
S|L2|L|Add the grain|Stir in the rice (or bulgur), the onions left in the pan with their oil, the cumin, cinnamon, salt and pepper. Add water to cover by 1 cm, cover and cook on low until the grain is done, then rest 10 minutes.|wait|low|1500|L1, O1|Grain tender, water absorbed|basmati_rice; bulgur; cumin; cinnamon; salt; ground_black_pepper|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Fluff, top with the crisp onions and serve with yogurt and cucumber.|action|off|30 + 20 × servings|L2|Served|yogurt; cucumber|fork, spoon, plates|—
`
  },
  {
    id: "chicken_shawarma", name: "Chicken Shawarma", image: "img/350/pita.webp",
    rows: `
O|opt_serve|wrap|Wrapped in pita|TRUE
O|opt_serve|plate|Plate with rice|FALSE
I|chicken_legs|Boneless chicken thighs|img/350/chicken_legs.webp|180|g|180|linear|—|—
I|yogurt|Plain yogurt (marinade)|img/350/yogurt.webp|30|g|30|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tbsp|15|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|2|pcs|10|linear|—|grated
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1.2|linear|—|—
I|paprika_powder|Paprika powder|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|turmeric_powder|Turmeric powder|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
I|allspice|Allspice|img/350/allspice.webp|0.125|tsp|0.3|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|mayonnaise|Mayonnaise (garlic sauce)|img/350/mayonnaise.webp|1.5|tbsp|21|linear|—|—
I|tomato|Tomato|img/350/tomato.webp|40|g|40|linear|—|sliced
I|cucumber|Cucumber|img/350/cucumber.webp|40|g|40|linear|—|sliced
I|red_onion|Red onion|img/350/red_onion.webp|15|g|15|linear|—|thinly sliced
I|pickles|Pickles|img/350/pickles.webp|20|g|20|linear|—|—
I|pita|Pita or flatbread|img/350/pita.webp|1|pcs|60|linear|opt_serve = wrap|—
I|basmati_rice|Basmati rice|img/350/basmati_rice.webp|70|g|70|linear|opt_serve = plate|—
S|K1|K|Marinate|Mix the yogurt, half the lemon juice, the oil, three quarters of the garlic, the spices and salt; coat the chicken and marinate at least 1 hour.|action|—|(90 + 45 × servings) × skill_factor|—|Coated|chicken_legs; yogurt; lemon_juice; olive_oil; garlic; cumin; paprika_powder; turmeric_powder; cinnamon; allspice; salt|bowl, microplane|—
S|K2|K|Rest|Leave in the fridge.|wait|—|3600 (doc: 1 h to overnight)|K1|Marinated|—|fridge|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.5 parts water, covered, 12 min, rest 10 min).|wait|low|1320|—|Fluffy|basmati_rice|saucepan, stovetop, sieve|opt_serve = plate
S|O1|O|Roast|Spread the chicken on a lined tray and roast at 220 °C until charred at the edges, then rest 5 minutes and slice thinly.|wait|220 °C|1800|K2|Charred edges, cooked through|—|oven, tray, parchment_paper, chef_knife, chopping_board|—
S|S1|S|Garlic sauce and salad|Stir the remaining garlic and lemon juice into the mayonnaise. Slice the tomato, cucumber and red onion.|action|—|(120 + 60 × servings) × skill_factor|—|Ready|mayonnaise; tomato; cucumber; red_onion|bowl, chef_knife, chopping_board|—
S|F1|F|Assemble|Spread pita with garlic sauce, fill with chicken, salad and pickles and roll up (or plate it all over rice).|action|off|45 + 45 × servings|O1, S1, R1|Served|pickles; pita|spoon, plates|—
`
  },
  {
    id: "kofta_kebabs", name: "Kofta Kebabs", image: "img/350/ground_lamb.webp",
    rows: `
O|opt_meat|lamb|Lamb|TRUE
O|opt_meat|beef|Beef|FALSE
O|opt_cook|pan|Grill pan|TRUE
O|opt_cook|oven|Oven grill|FALSE
I|ground_lamb|Ground lamb|img/350/ground_lamb.webp|150|g|150|linear|opt_meat = lamb|—
I|ground_beef|Ground beef (20% fat)|img/350/ground_beef.webp|150|g|150|linear|opt_meat = beef|—
I|onion|Onion|img/350/onion.webp|30|g|30|linear|—|grated, squeezed dry
I|garlic|Garlic clove|img/350/garlic.webp|1|pcs|5|linear|—|grated
I|parsley|Parsley|img/350/parsley.webp|6|g|6|linear|—|finely chopped
I|cumin|Ground cumin|img/350/cumin.webp|0.5|tsp|1.2|linear|—|—
I|coriander_seeds|Ground coriander|img/350/coriander_seeds.webp|0.5|tsp|1|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
I|paprika_powder|Paprika powder|img/350/paprika_powder.webp|0.5|tsp|1.2|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|oil|Oil|img/350/oil.webp|1|tsp|4.5|linear|—|—
I|yogurt|Plain yogurt|img/350/yogurt.webp|60|g|60|linear|—|—
I|tahini|Tahini|img/350/tahini.webp|1|tbsp|15|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|pita|Pita breads|img/350/pita.webp|1|pcs|60|linear|—|—
I|tomato|Tomato|img/350/tomato.webp|40|g|40|linear|—|sliced
I|red_onion|Red onion|img/350/red_onion.webp|15|g|15|linear|—|sliced
S|K1|K|Mix|Mix the meat with the onion, garlic, parsley, spices, salt and pepper and knead for 2 minutes until sticky.|action|—|(150 + 45 × servings) × skill_factor|—|Sticky, well mixed|ground_lamb; ground_beef; onion; garlic; parsley; cumin; coriander_seeds; cinnamon; paprika_powder; salt; ground_black_pepper|bowl, microplane, chef_knife, chopping_board|—
S|K2|K|Shape|With wet hands, mould the mix into long sausages around skewers (about 3 per person) and chill 20 minutes.|action|—|1200 + (60 + 90 × servings) × skill_factor|K1|Shaped, firm|—|skewers, tray, fridge|—
S|S1|S|Yogurt sauce|Stir the yogurt with the tahini, lemon juice and a pinch of salt; slice the tomato and red onion.|action|—|(90 + 30 × servings) × skill_factor|—|Smooth|yogurt; tahini; lemon_juice; tomato; red_onion|bowl, spoon, chef_knife, chopping_board|—
S|G1|G|Grill|Brush with oil and grill on a very hot pan, turning, until browned outside and just cooked inside.|action|high|480|K2|Browned, juicy|oil|pan, stovetop, tongs|—
S|F1|F|Serve|Warm the pitas and serve the kofta with the yogurt sauce, tomato and onion.|action|off|45 + 15 × servings|G1, S1|Served|pita|tongs, plates|—
`
  },
  {
    id: "stuffed_peppers", name: "Stuffed Peppers", image: "img/350/bell_pepper.webp",
    rows: `
O|opt_filling|meat|Ground beef and rice|TRUE
O|opt_filling|veg|Rice and vegetables (vegetarian)|FALSE
I|bell_pepper|Large bell peppers|img/350/bell_pepper.webp|1.5|pcs|240|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1.5|tbsp|20|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|diced
I|garlic|Garlic clove|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|ground_beef|Ground beef|img/350/ground_beef.webp|100|g|100|linear|opt_filling = meat|—
I|zucchini|Zucchini|img/350/zucchini.webp|80|g|80|linear|opt_filling = veg|grated
I|white_rice|Uncooked rice|img/350/white_rice.webp|35|g|35|linear|—|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|150|ml|150|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|4|g|4|linear|—|chopped
I|mint|Mint (or dill)|img/350/mint.webp|2|g|2|linear|—|chopped
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|water|Water|img/350/water.webp|100|ml|100|linear|—|—
I|feta_cheese|Feta (to serve, optional)|img/350/feta_cheese.webp|25|g|25|linear|—|—
S|K1|K|Hollow the peppers|Cut the tops off the peppers (keep them as lids) and scoop out the seeds. Dice the onion, chop the garlic and herbs.|action|—|(120 + 90 × servings) × skill_factor|—|Hollowed|bell_pepper; onion; garlic; parsley; mint; zucchini|chef_knife, chopping_board, spoon, cheese_grater|—
S|P1|P|Make the filling|Fry the onion and garlic in half the oil, add the beef (or zucchini) and cook until browned. Stir in the rice, two thirds of the passata, the herbs, salt and pepper and cook 3 minutes.|action|medium|600|K1|Rice coated, saucy|olive_oil; ground_beef; white_rice; tomato_passata; salt; ground_black_pepper|pan, stovetop, wooden_spoon|—
S|O1|O|Fill and bake|Stand the peppers in a baking dish, fill three quarters full (the rice swells), put the lids on. Mix the rest of the passata with the water and pour around; drizzle with the rest of the oil. Cover with foil and bake at 190 °C, uncovering for the last 20 minutes.|wait|190 °C|3600|P1|Peppers soft, rice tender|water|oven, baking_dish, tin_foil, spoon|—
S|F1|F|Serve|Rest 10 minutes and serve with the pan juices and crumbled feta.|action|off|600 + 15 × servings|O1|Served|feta_cheese|spoon, plates|—
`
  },
  {
    id: "moussaka", name: "Moussaka", image: "img/350/eggplant.webp",
    rows: `
O|opt_meat|lamb|Ground lamb|TRUE
O|opt_meat|beef|Ground beef|FALSE
O|opt_potato|yes|With a potato layer|TRUE
O|opt_potato|no|Eggplant only|FALSE
I|eggplant|Eggplants|img/350/eggplant.webp|250|g|250|linear|—|1 cm slices
I|potato|Potatoes|img/350/potato.webp|100|g|100|linear|opt_potato = yes|5 mm slices
I|olive_oil|Olive oil|img/350/olive_oil.webp|2|tbsp|28|linear|—|—
I|salt|Salt|img/350/salt.webp|0.75|tsp|4.5|linear|—|—
I|ground_lamb|Ground lamb|img/350/ground_lamb.webp|125|g|125|linear|opt_meat = lamb|—
I|ground_beef|Ground beef|img/350/ground_beef.webp|125|g|125|linear|opt_meat = beef|—
I|onion|Onion|img/350/onion.webp|60|g|60|linear|—|diced
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|red_wine|Red wine (optional)|img/350/red_wine.webp|40|ml|40|linear|—|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|120|ml|120|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|0.5|tbsp|8|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.25|tsp|0.6|linear|—|—
I|allspice|Allspice|img/350/allspice.webp|0.125|tsp|0.3|linear|—|—
I|oregano|Dried oregano|img/350/oregano.webp|0.25|tsp|0.3|linear|—|—
I|butter|Butter|img/350/butter.webp|20|g|20|linear|—|—
I|flour|Flour|img/350/flour.webp|20|g|20|linear|—|—
I|milk|Milk|img/350/milk.webp|200|ml|200|linear|—|—
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.0625|tsp|0.15|linear|—|—
I|egg_yolk|Egg yolk|img/350/egg_yolk.webp|0.5|pcs|9|linear|—|—
I|parmesan|Kefalotyri or parmesan|img/350/parmesan.webp|20|g|20|linear|—|grated
S|K1|K|Slice|Slice the eggplants and potatoes; dice the onion and chop the garlic.|action|—|(150 + 90 × servings) × skill_factor|—|Sliced|onion; garlic|chef_knife, chopping_board, vegetable_peeler|—
S|E1|E|Roast the vegetables|Brush the eggplant and potato slices with oil, season with salt and roast on lined trays at 200 °C until soft and golden.|wait|200 °C|1500|K1|Soft, golden|eggplant; potato; olive_oil; salt|oven, tray, parchment_paper|—
S|M1|M|Meat sauce|Brown the meat, add the onion and garlic and cook until soft. Add the wine and let it bubble away, then the passata, tomato paste, cinnamon, allspice and oregano. Simmer until thick.|action|medium|1500|K1|Thick, not watery|ground_lamb; ground_beef; red_wine; tomato_passata; tomato_paste; cinnamon; allspice; oregano|pan, stovetop, wooden_spoon|—
S|B1|B|Béchamel|Melt the butter, stir in the flour for 1 minute, whisk in the milk and cook until thick. Off the heat, whisk in the nutmeg, egg yolk and half the cheese.|action|medium-low|480|—|Thick, smooth|butter; flour; milk; nutmeg; egg_yolk|saucepan, stovetop, whisk|—
S|O1|O|Layer and bake|Layer potatoes, half the eggplant, the meat sauce, the rest of the eggplant, then the béchamel. Sprinkle with the remaining cheese and bake at 180 °C until deep golden.|wait|180 °C|2700|E1, M1, B1|Deep golden top|parmesan|oven, baking_dish, spatula, cheese_grater|—
S|F1|F|Rest and serve|Let it rest for at least 30 minutes so it slices cleanly.|wait|off|1800|O1|Sliceable|—|knife, spatula, plates|—
`
  },
  {
    id: "souvlaki", name: "Pork Souvlaki with Tzatziki", image: "img/350/pork.webp",
    rows: `
O|opt_serve|pita|In pita with fries-style potatoes|TRUE
O|opt_serve|plate|Plate with salad|FALSE
I|pork|Pork shoulder or neck|img/350/pork.webp|150|g|150|linear|—|3 cm cubes
I|olive_oil|Olive oil|img/350/olive_oil.webp|1.5|tbsp|20|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tbsp|15|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|1.5|pcs|7|linear|—|grated
I|oregano|Dried oregano|img/350/oregano.webp|0.5|tsp|0.6|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|yogurt|Greek yogurt|img/350/yogurt.webp|80|g|80|linear|—|—
I|cucumber|Cucumber|img/350/cucumber.webp|40|g|40|linear|—|grated, squeezed dry
I|dill|Dill|img/350/dill.webp|2|g|2|linear|—|chopped
I|pita|Pita breads|img/350/pita.webp|1|pcs|60|linear|—|—
I|tomato|Tomato|img/350/tomato.webp|50|g|50|linear|—|sliced
I|red_onion|Red onion|img/350/red_onion.webp|15|g|15|linear|—|thinly sliced
S|K1|K|Marinate|Toss the pork with most of the oil, the lemon juice, two thirds of the garlic, oregano, salt and pepper. Marinate at least 1 hour.|action|—|(90 + 45 × servings) × skill_factor|—|Coated|pork; olive_oil; lemon_juice; garlic; oregano; salt; ground_black_pepper|bowl, chef_knife, chopping_board|—
S|K2|K|Skewer|After marinating, thread the pork onto skewers.|action|—|3600 + (60 + 60 × servings) × skill_factor|K1|Skewered|—|skewers, fridge|—
S|T1|T|Tzatziki|Grate and squeeze the cucumber, then mix with the yogurt, the rest of the garlic, dill, a drizzle of oil and a pinch of salt. Chill.|action|—|(120 + 30 × servings) × skill_factor|—|Thick, not watery|yogurt; cucumber; dill|bowl, cheese_grater, spoon|—
S|G1|G|Grill|Grill the skewers on a very hot pan, turning, until charred and just cooked through.|action|high|600|K2|Charred, juicy|—|pan, stovetop, tongs|—
S|F1|F|Serve|Warm the pitas on the grill. Serve the skewers with pita, tzatziki, tomato and onion.|action|off|60 + 15 × servings|G1, T1|Served|pita; tomato; red_onion|chef_knife, chopping_board, plates|—
`
  },
  {
    id: "spanakopita", name: "Spanakopita (Spinach Pie)", image: "img/350/phyllo_dough.webp",
    rows: `
O|opt_spinach|fresh|Fresh spinach|TRUE
O|opt_spinach|frozen|Frozen spinach (thawed)|FALSE
I|spinach|Spinach|img/350/spinach.webp|200|g|200|linear|—|—
I|green_onion|Green onions|img/350/green_onion.webp|20|g|20|linear|—|sliced
I|onion|Onion|img/350/onion.webp|30|g|30|linear|—|diced
I|olive_oil|Olive oil|img/350/olive_oil.webp|3|tbsp|40|linear|—|—
I|dill|Dill|img/350/dill.webp|5|g|5|linear|—|chopped
I|parsley|Parsley|img/350/parsley.webp|4|g|4|linear|—|chopped
I|feta_cheese|Feta|img/350/feta_cheese.webp|75|g|75|linear|—|crumbled
I|egg|Eggs|img/350/egg.webp|0.75|pcs|40|linear|—|—
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.0625|tsp|0.15|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.125|tsp|0.3|linear|—|—
I|phyllo_dough|Phyllo sheets|img/350/phyllo_dough.webp|4|pcs|80|linear|—|—
I|butter|Melted butter (or more oil)|img/350/butter.webp|15|g|15|linear|—|—
I|sesame_seeds|Sesame seeds (optional)|img/350/sesame_seeds.webp|0.5|tsp|1.5|linear|—|—
S|K1|K|Prep|Wash and roughly chop the fresh spinach (or squeeze the thawed spinach very dry). Slice the green onions, dice the onion, chop the herbs.|action|—|(180 + 90 × servings) × skill_factor|—|Ready|spinach; green_onion; onion; dill; parsley|chef_knife, chopping_board, colander|—
S|P1|P|Wilt|Soften the onions in a third of the oil, add the spinach and cook until wilted and the liquid has evaporated. Cool, then squeeze out any remaining liquid.|action|medium|600|K1|Dry, wilted|—|pan, stovetop, wooden_spoon, colander|—
S|A1|A|Filling|Mix the spinach with the herbs, feta, beaten eggs, nutmeg and pepper.|action|—|(90 + 30 × servings) × skill_factor|P1|Mixed|feta_cheese; egg; nutmeg; ground_black_pepper|bowl, fork|—
S|A2|A|Layer|Mix the rest of the oil with the butter. Line the dish with half the phyllo, brushing each sheet. Spread the filling, cover with the remaining sheets, brushing each, and tuck the edges. Score the top into squares and sprinkle with sesame.|action|—|(240 + 120 × servings) × skill_factor|A1|Assembled, scored|phyllo_dough; olive_oil; butter; sesame_seeds|baking_dish, knife|—|countertop
S|O1|O|Bake|Bake at 180 °C until deep golden and crisp.|wait|180 °C|2700|A2|Deep golden, crisp|—|oven|—
S|F1|F|Serve|Cool 15 minutes, then cut along the score lines.|wait|off|900|O1|Served|—|knife, spatula, plates|—
`
  },
  {
    id: "baba_ganoush", name: "Baba Ganoush", image: "img/350/eggplant.webp",
    rows: `
O|opt_char|oven|Oven grill|TRUE
O|opt_char|flame|Gas flame (smokier)|FALSE
I|eggplant|Eggplants|img/350/eggplant.webp|200|g|200|linear|—|—
I|tahini|Tahini|img/350/tahini.webp|1.5|tbsp|22|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tbsp|15|linear|—|—
I|garlic|Garlic clove|img/350/garlic.webp|0.5|pcs|2.5|linear|—|grated
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|cumin|Ground cumin (pinch)|img/350/cumin.webp|0.0625|tsp|0.15|linear|—|—
I|extra_virgin_olive_oil|Extra virgin olive oil|img/350/extra_virgin_olive_oil.webp|1|tbsp|14|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|2|g|2|linear|—|chopped
I|paprika_powder|Paprika or sumac (to finish)|img/350/paprika_powder.webp|0.125|tsp|0.3|linear|—|—
I|pita|Pita (to serve)|img/350/pita.webp|1|pcs|60|linear|—|—
S|O1|O|Char the eggplants|Prick the eggplants and char them under a very hot oven grill (or directly over a gas flame), turning, until black all over and completely collapsed.|wait|high|1800 oven / 900 flame|—|Collapsed, skin black|eggplant|oven, tray, tongs|—
S|O2|O|Drain|Split them open, scoop out the flesh and let it drain in a sieve for 10 minutes.|action|—|(90 + 30 × servings) × skill_factor|O1|Drained|—|spoon, sieve|—
S|K1|K|Mash and season|Chop or mash the flesh with a fork and stir in the tahini, lemon juice, garlic, salt and cumin.|action|—|(90 + 30 × servings) × skill_factor|O2|Creamy but chunky|tahini; lemon_juice; garlic; salt; cumin|bowl, fork, microplane|—
S|F1|F|Serve|Spread on a plate, drizzle with olive oil, scatter parsley and paprika and serve with warm pita.|action|—|30 + 15 × servings|K1|Served|extra_virgin_olive_oil; parsley; paprika_powder; pita|spoon, plates|—
`
  },
  {
    id: "menemen", name: "Menemen (Turkish Scrambled Eggs)", image: "img/350/green_bell_pepper.webp",
    rows: `
O|opt_onion|no|Without onion (classic)|TRUE
O|opt_onion|yes|With onion|FALSE
I|olive_oil|Olive oil or butter|img/350/olive_oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|30|g|30|linear|opt_onion = yes|diced
I|green_bell_pepper|Green peppers (Turkish sivri or bell)|img/350/green_bell_pepper.webp|60|g|60|linear|—|thinly sliced
I|tomato|Ripe tomatoes|img/350/tomato.webp|150|g|150|linear|—|grated or finely chopped
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|chili_flakes|Chili flakes (pul biber)|img/350/chili_flakes.webp|0.25|tsp|0.5|linear|—|—
I|egg|Eggs|img/350/egg.webp|2|pcs|110|linear|—|—
I|feta_cheese|Feta (optional)|img/350/feta_cheese.webp|15|g|15|linear|—|—
I|parsley|Parsley|img/350/parsley.webp|2|g|2|linear|—|chopped
I|bread|Crusty bread|img/350/bread.webp|60|g|60|linear|—|—
S|K1|K|Prep|Slice the peppers, grate or chop the tomatoes (and dice the onion).|action|—|(90 + 45 × servings) × skill_factor|—|Ready|onion; green_bell_pepper; tomato; parsley|chef_knife, chopping_board, cheese_grater|—
S|P1|P|Soften the peppers|Cook the peppers (and onion) in the oil until soft.|action|medium|300|K1|Soft|olive_oil|pan, stovetop, wooden_spoon|—
S|P2|P|Tomatoes|Add the tomatoes, salt and chili flakes and cook until most of the liquid has evaporated.|action|medium|480|P1|Jammy, little liquid|salt; chili_flakes|pan, wooden_spoon|—
S|P3|P|Eggs|Crack in the eggs and stir gently, just a few times, until softly set and still glossy. Crumble in the feta.|action|low|150|P2|Soft, glossy curds|egg; feta_cheese|pan, spatula|—
S|F1|F|Serve|Sprinkle with parsley and serve straight from the pan with bread.|action|off|20 + 10 × servings|P3|Served|bread|spoon, plates|—
`
  },
  {
    id: "jollof_rice", name: "Jollof Rice", image: "img/350/tomato_paste.webp",
    rows: `
O|opt_heat|medium|Medium|TRUE
O|opt_heat|hot|Hot|FALSE
O|opt_protein|none|Rice only|TRUE
O|opt_protein|chicken|With fried chicken|FALSE
I|tomato|Plum tomatoes|img/350/tomato.webp|120|g|120|linear|—|roughly chopped
I|red_bell_pepper|Red bell pepper|img/350/red_bell_pepper.webp|60|g|60|linear|—|roughly chopped
I|onion|Onion|img/350/onion.webp|60|g|60|linear|—|—
I|chili_pepper|Scotch bonnet (or other hot chili)|img/350/chili_pepper.webp|0.25|pcs|3|linear; doubled if hot|—|—
I|oil|Oil|img/350/oil.webp|2|tbsp|28|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|1.5|tbsp|24|linear|—|—
I|curry_powder|Curry powder|img/350/curry_powder.webp|0.5|tsp|1.2|linear|—|—
I|thyme|Dried thyme|img/350/thyme.webp|0.5|tsp|0.5|linear|—|—
I|bay_leaf|Bay leaves|img/350/bay_leaf.webp|1|pcs|0.2|linear|—|—
I|bouillon_cube|Stock cube|img/350/bouillon_cube.webp|0.5|pcs|5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|white_rice|Long-grain parboiled rice|img/350/white_rice.webp|90|g|90|linear|—|rinsed
I|chicken_stock|Chicken stock|img/350/chicken_stock.webp|160|ml|160|linear|—|—
I|butter|Butter|img/350/butter.webp|10|g|10|linear|—|—
I|chicken_legs|Chicken thighs or drumsticks|img/350/chicken_legs.webp|200|g|200|linear|opt_protein = chicken|—
S|B1|B|Pepper base|Blend the tomatoes, red pepper, half the onion and the chili until smooth.|action|—|(90 + 30 × servings) × skill_factor|—|Smooth|tomato; red_bell_pepper; onion; chili_pepper|blender, chef_knife, chopping_board|—
S|P1|P|Fry the base|Fry the rest of the onion (sliced) in the oil until soft, add the tomato paste and fry 3 minutes until darker, then pour in the blended base with the curry powder, thyme, bay leaves, crumbled stock cube and salt. Cook down until thick and the oil rises.|action|medium|1200|B1|Thick, oil on top|oil; tomato_paste; curry_powder; thyme; bay_leaf; bouillon_cube; salt|cooking_pot, stovetop, wooden_spoon|—
S|C1|C|Fry the chicken|Season the chicken with salt and curry powder and fry until golden and cooked through.|action|medium|1200|—|Golden, cooked|chicken_legs|pan, stovetop, tongs|opt_protein = chicken
S|P2|P|Cook the rice|Stir in the rinsed rice and stock, cover tightly (foil under the lid) and cook on the lowest heat without stirring until the rice is tender.|wait|low|1800|P1|Rice tender, liquid absorbed|white_rice; chicken_stock|cooking_pot, tin_foil|—
S|P3|P|Finish|Stir in the butter, turning the slightly smoky bottom through the rice. Rest 5 minutes covered.|action|off|300|P2|Fluffy, smoky|butter|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Serve with the chicken (or as a side).|action|off|30 + 15 × servings|P3, C1|Served|—|spoon, plates|—
`
  },
  {
    id: "egusi_soup", name: "Egusi Soup", image: "img/350/egusi_seeds.webp",
    rows: `
O|opt_protein|beef_fish|Beef and smoked fish|TRUE
O|opt_protein|beef|Beef only|FALSE
I|beef|Beef (stewing)|img/350/beef.webp|120|g|120|linear|—|chunks
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|chopped
I|bouillon_cube|Stock cube|img/350/bouillon_cube.webp|0.5|pcs|5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|water|Water|img/350/water.webp|400|ml|400|linear|—|—
I|egusi_seeds|Ground egusi (melon seeds)|img/350/egusi_seeds.webp|40|g|40|linear|—|ground
I|red_palm_oil|Red palm oil|img/350/red_palm_oil.webp|2|tbsp|28|linear|—|—
I|chili_pepper|Scotch bonnet|img/350/chili_pepper.webp|0.25|pcs|3|linear|—|chopped
I|fish|Smoked or dried fish|img/350/fish.webp|30|g|30|linear|opt_protein = beef_fish|flaked, bones removed
I|spinach|Spinach or bitter leaf|img/350/spinach.webp|80|g|80|linear|—|chopped
I|white_rice|Rice (or fufu / pounded yam)|img/350/white_rice.webp|80|g|80|linear|—|—
S|M1|M|Cook the meat|Simmer the beef with half the onion, the stock cube, salt and water until tender. Keep the stock.|wait|low|2700|—|Beef tender|beef; bouillon_cube; salt; water|cooking_pot, stovetop|—
S|K1|K|Egusi paste|Mix the ground egusi with the rest of the onion and a few tablespoons of water into a thick paste. Chop the chili and spinach, flake the fish.|action|—|(120 + 60 × servings) × skill_factor|—|Thick paste|egusi_seeds; onion; chili_pepper; fish; spinach|bowl, spoon, chef_knife, chopping_board|—
S|P1|P|Fry the egusi|Heat the palm oil, drop in spoonfuls of the egusi paste and fry, turning gently, until it forms golden curds.|action|medium|600|K1|Golden curds|red_palm_oil|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer|Add the beef with its stock, the fish and chili and simmer until thick.|wait|low|900|P1, M1|Thick soup|—|cooking_pot, wooden_spoon|—
S|P3|P|Greens|Stir in the spinach and cook 3 minutes. Taste for salt.|action|low|180|P2|Greens wilted|—|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Serve with rice, fufu or pounded yam.|action|off|30 + 15 × servings|P3|Served|white_rice|ladle, bowl|—
`
  },
  {
    id: "groundnut_stew", name: "Groundnut Stew (Peanut Stew)", image: "img/350/peanut_butter.webp",
    rows: `
O|opt_protein|chicken|Chicken|TRUE
O|opt_protein|veg|Sweet potato and chickpeas (vegan)|FALSE
I|chicken_legs|Chicken thighs|img/350/chicken_legs.webp|180|g|180|linear|opt_protein = chicken|chunks
I|sweet_potato|Sweet potato|img/350/sweet_potato.webp|120|g|120|linear|opt_protein = veg|chunks
I|chickpea|Canned chickpeas|img/350/chickpea.webp|80|g|80|linear|opt_protein = veg|—
I|oil|Oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|onion|Onion|img/350/onion.webp|60|g|60|linear|—|chopped
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|5|g|5|linear|—|grated
I|chili_pepper|Chili|img/350/chili_pepper.webp|0.25|pcs|3|linear|—|chopped
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|1|tbsp|16|linear|—|—
I|tomato|Canned chopped tomatoes|img/350/tomato.webp|100|g|100|linear|—|—
I|peanut_butter|Natural peanut butter|img/350/peanut_butter.webp|2|tbsp|32|linear|—|—
I|chicken_stock|Stock|img/350/chicken_stock.webp|200|ml|200|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|spinach|Spinach|img/350/spinach.webp|40|g|40|linear|—|—
I|peanut|Roasted peanuts (to finish)|img/350/peanut.webp|10|g|10|linear|—|chopped
I|white_rice|White rice|img/350/white_rice.webp|80|g|80|linear|—|—
S|K1|K|Prep|Chop the onion, garlic and chili, grate the ginger, cut the chicken (or sweet potato).|action|—|(120 + 60 × servings) × skill_factor|—|Ready|chicken_legs; sweet_potato; onion; garlic; ginger_root; chili_pepper|chef_knife, chopping_board, microplane|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.5 parts water, covered, 15 min, rest 10 min).|wait|low|1500|—|Fluffy|white_rice|saucepan, stovetop, sieve|—
S|P1|P|Brown|Brown the chicken in the oil and lift it out. Soften the onion, then add the garlic, ginger, chili and tomato paste for 2 minutes.|action|medium-high|600|K1|Fragrant, paste darker|oil; tomato_paste|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Peanut sauce|Whisk in the tomatoes, peanut butter, stock and salt until smooth; return the chicken (or add the sweet potato and chickpeas).|action|medium|180|P1|Smooth|tomato; peanut_butter; chicken_stock; salt; chickpea|cooking_pot, whisk|—
S|P3|P|Simmer|Simmer gently, stirring now and then so it does not catch, until the chicken is tender and the sauce thick.|wait|low|1500|P2|Thick, tender|—|cooking_pot, wooden_spoon|—
S|P4|P|Greens|Stir in the spinach until wilted.|action|low|120|P3|Wilted|spinach|cooking_pot, wooden_spoon|—
S|F1|F|Serve|Serve over rice topped with chopped peanuts.|action|off|30 + 15 × servings|P4, R1|Served|peanut|ladle, bowl|—
`
  },
  {
    id: "chicken_tagine", name: "Chicken Tagine with Lemon and Olives", image: "img/350/olives.webp",
    rows: `
O|opt_side|couscous|With couscous|TRUE
O|opt_side|bread|With bread|FALSE
I|chicken_legs|Chicken thighs or legs, bone in|img/350/chicken_legs.webp|250|g|250|linear|—|—
I|olive_oil|Olive oil|img/350/olive_oil.webp|1.5|tbsp|20|linear|—|—
I|onion|Onion|img/350/onion.webp|80|g|80|linear|—|grated or thinly sliced
I|garlic|Garlic cloves|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|ginger_powder|Ground ginger|img/350/ginger_powder.webp|0.5|tsp|1|linear|—|—
I|turmeric_powder|Turmeric powder|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.25|tsp|0.6|linear|—|—
I|saffron|Saffron (a few threads)|img/350/saffron.webp|0.0625|tsp|0.05|linear|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.25|tsp|0.6|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|cilantro|Cilantro and parsley|img/350/cilantro.webp|5|g|5|linear|—|chopped
I|water|Water or stock|img/350/water.webp|150|ml|150|linear|—|—
I|preserved_lemon|Preserved lemon|— (placeholder: no image yet)|0.25|pcs|20|linear|—|rind only, sliced
I|olives|Green or violet olives|img/350/olives.webp|30|g|30|linear|—|—
I|couscous|Couscous|img/350/couscous.webp|70|g|70|linear|opt_side = couscous|—
I|butter|Butter|img/350/butter.webp|5|g|5|linear|opt_side = couscous|—
I|bread|Crusty bread|img/350/bread.webp|70|g|70|linear|opt_side = bread|—
S|K1|K|Marinate|Rub the chicken with the oil, garlic, spices, salt and half the herbs; leave 30 minutes (or overnight).|action|—|1800 + (60 + 45 × servings) × skill_factor|—|Coated|chicken_legs; olive_oil; garlic; ginger_powder; turmeric_powder; cinnamon; saffron; ground_black_pepper; salt; cilantro|bowl, chef_knife, chopping_board|—
S|P1|P|Brown and braise|Brown the chicken lightly in the pot with the onion, add the water, cover and simmer gently, turning occasionally.|wait|low|2700|K1|Chicken tender|onion; water|cooking_pot, stovetop, tongs|—
S|P2|P|Lemon and olives|Add the preserved lemon and olives and cook uncovered until the sauce is reduced and thick. Scatter the rest of the herbs.|action|medium-low|600|P1|Thick, oily sauce|preserved_lemon; olives|cooking_pot, wooden_spoon|—
S|C1|C|Couscous|Pour an equal volume of boiling salted water over the couscous with the butter, cover 5 minutes, then fluff with a fork.|action|—|360|P1|Fluffy|couscous; butter|bowl, fork, plates|opt_side = couscous
S|F1|F|Serve|Serve the chicken and sauce with couscous or bread.|action|off|30 + 15 × servings|P2, C1|Served|bread|ladle, plates|—
`
  },
  {
    id: "vegetable_couscous", name: "Vegetable Couscous", image: "img/350/couscous.webp",
    rows: `
O|opt_raisins|yes|With raisins|TRUE
O|opt_raisins|no|No raisins|FALSE
I|olive_oil|Olive oil|img/350/olive_oil.webp|1.5|tbsp|20|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|chopped
I|ras_el_hanout|Ras el hanout|img/350/ras_el_hanout.webp|1|tsp|2.5|linear|—|—
I|turmeric_powder|Turmeric powder|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|0.5|tbsp|8|linear|—|—
I|tomato|Tomato|img/350/tomato.webp|80|g|80|linear|—|chopped
I|carrot|Carrots|img/350/carrot.webp|80|g|80|linear|—|thick sticks
I|squash|Pumpkin or squash|img/350/squash.webp|100|g|100|linear|—|chunks
I|zucchini|Zucchini|img/350/zucchini.webp|80|g|80|linear|—|thick sticks
I|chickpea|Canned chickpeas|img/350/chickpea.webp|80|g|80|linear|—|—
I|vegetable_stock|Vegetable stock|img/350/vegetable_stock.webp|300|ml|300|linear|—|—
I|salt|Salt|img/350/salt.webp|0.25|tsp|1.5|linear|—|—
I|raisins|Raisins|img/350/raisins.webp|15|g|15|linear|opt_raisins = yes|—
I|couscous|Couscous|img/350/couscous.webp|80|g|80|linear|—|—
I|butter|Butter|img/350/butter.webp|10|g|10|linear|—|—
I|water|Boiling water|img/350/water.webp|100|ml|100|linear|—|—
I|cilantro|Cilantro|img/350/cilantro.webp|3|g|3|linear|—|chopped
S|K1|K|Prep|Chop the onion and tomato; cut the carrots, squash and zucchini into large pieces.|action|—|(150 + 90 × servings) × skill_factor|—|Ready|onion; tomato; carrot; squash; zucchini; cilantro|chef_knife, chopping_board, vegetable_peeler|—
S|P1|P|Base|Soften the onion in the oil, add the spices and tomato paste for 1 minute, then the tomato.|action|medium|480|K1|Soft, fragrant|olive_oil; ras_el_hanout; turmeric_powder; tomato_paste|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Simmer|Add the carrots and stock with the salt and simmer 10 minutes; add the squash, zucchini, chickpeas and raisins and simmer until all are tender.|wait|low|1500|P1|Vegetables tender|vegetable_stock; salt; chickpea; raisins|cooking_pot, ladle|—
S|C1|C|Couscous|Pour the boiling water over the couscous with the butter and a pinch of salt, cover 5 minutes, fluff with a fork.|action|—|360|P2|Fluffy|couscous; butter; water|bowl, fork|—
S|F1|F|Serve|Mound the couscous on a platter, top with the vegetables, spoon over the broth and scatter cilantro.|action|off|45 + 15 × servings|C1|Served|—|ladle, plates|—
`
  },
  {
    id: "doro_wat", name: "Doro Wat (Ethiopian Chicken Stew)", image: "img/350/berbere.webp",
    rows: `
O|opt_side|injera|With injera|TRUE
O|opt_side|rice|With rice|FALSE
O|opt_heat|medium|Medium|TRUE
O|opt_heat|hot|Hot|FALSE
I|chicken_legs|Chicken drumsticks and thighs, skinless|img/350/chicken_legs.webp|250|g|250|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|1|tbsp|15|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|onion|Red onions|img/350/onion.webp|200|g|200|linear|—|very finely chopped
I|ghee|Ghee or spiced butter (niter kibbeh)|img/350/ghee.webp|2|tbsp|26|linear|—|—
I|garlic|Garlic cloves|img/350/garlic.webp|2|pcs|10|linear|—|grated
I|ginger_root|Fresh ginger|img/350/ginger_root.webp|8|g|8|linear|—|grated
I|berbere|Berbere spice|img/350/berbere.webp|1.5|tbsp|10|linear; doubled if hot|—|—
I|cardamom|Ground cardamom (pinch)|img/350/cardamom.webp|0.125|tsp|0.25|linear|—|—
I|tomato_paste|Tomato paste|img/350/tomato_paste.webp|1|tbsp|16|linear|—|—
I|water|Water or stock|img/350/water.webp|200|ml|200|linear|—|—
I|egg|Eggs|img/350/egg.webp|1|pcs|55|linear|—|—
I|injera|Injera flatbread|— (placeholder: no image yet)|1.5|pcs|150|linear|opt_side = injera|—
I|white_rice|White rice|img/350/white_rice.webp|80|g|80|linear|opt_side = rice|—
S|K1|K|Prep|Score the chicken and rub with lemon juice and half the salt. Chop the onions very finely (a food processor helps), grate the garlic and ginger.|action|—|(240 + 90 × servings) × skill_factor|—|Ready|chicken_legs; lemon_juice; salt; onion; garlic; ginger_root|chef_knife, chopping_board, microplane, blender|—
S|P1|P|Dry-cook the onions|Cook the onions in the dry pot, stirring often, until they are soft, deep golden and jammy. Add a splash of water if they catch.|action|medium-low|1800|K1|Deep golden, jammy|—|cooking_pot, stovetop, wooden_spoon|—
S|P2|P|Spice base|Add the ghee, then the garlic, ginger, berbere, cardamom and tomato paste and fry 5 minutes, stirring, until dark red and fragrant.|action|medium-low|300|P1|Dark red, oily|ghee; berbere; cardamom; tomato_paste|cooking_pot, wooden_spoon|—
S|P3|P|Braise|Add the chicken and water and simmer gently, covered, until the chicken is very tender and the sauce thick.|wait|low|2700|P2|Tender, thick sauce|water|cooking_pot, ladle|—
S|E1|E|Boil the eggs|Hard-boil the eggs (10 minutes), peel and score them lightly.|wait|high|720|—|Hard-boiled, peeled|egg|saucepan, stovetop, knife|—
S|R1|R|Cook the rice|Rinse the rice and cook it (1 part rice to 1.5 parts water, covered, 15 min, rest 10 min).|wait|low|1500|—|Fluffy|white_rice|saucepan, stovetop, sieve|opt_side = rice
S|P4|P|Add the eggs|Add the eggs to the stew for the last 10 minutes and season with the rest of the salt.|action|low|600|P3, E1|Eggs coated|—|cooking_pot, spoon|—
S|F1|F|Serve|Serve on injera (or with rice), with an egg for each person.|action|off|30 + 15 × servings|P4, R1|Served|injera|ladle, plates|—
`
  },
  {
    id: "bobotie", name: "Bobotie", image: "img/350/ground_beef.webp",
    rows: `
O|opt_meat|beef|Ground beef|TRUE
O|opt_meat|lamb|Ground lamb|FALSE
I|bread|Slice of white bread|img/350/bread.webp|0.5|pcs|15|linear|—|—
I|milk|Milk|img/350/milk.webp|80|ml|80|linear|—|—
I|onion|Onion|img/350/onion.webp|50|g|50|linear|—|chopped
I|garlic|Garlic clove|img/350/garlic.webp|1|pcs|5|linear|—|chopped
I|butter|Butter|img/350/butter.webp|10|g|10|linear|—|—
I|ground_beef|Ground beef|img/350/ground_beef.webp|130|g|130|linear|opt_meat = beef|—
I|ground_lamb|Ground lamb|img/350/ground_lamb.webp|130|g|130|linear|opt_meat = lamb|—
I|curry_powder|Mild curry powder|img/350/curry_powder.webp|1|tsp|2.5|linear|—|—
I|turmeric_powder|Turmeric powder|img/350/turmeric_powder.webp|0.25|tsp|0.8|linear|—|—
I|apricot_jam|Apricot jam or fruit chutney|img/350/apricot_jam.webp|1|tbsp|20|linear|—|—
I|raisins|Raisins|img/350/raisins.webp|10|g|10|linear|—|—
I|lemon_juice|Lemon juice or vinegar|img/350/lemon_juice.webp|1|tsp|5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.5|tsp|3|linear|—|—
I|egg|Eggs|img/350/egg.webp|0.5|pcs|27|linear, rounded up|—|—
I|bay_leaf|Bay leaves|img/350/bay_leaf.webp|1|pcs|0.2|linear|—|—
I|almond|Flaked almonds (optional)|img/350/almond.webp|5|g|5|linear|—|—
I|white_rice|White rice|img/350/white_rice.webp|80|g|80|linear|—|—
S|K1|K|Soak and chop|Soak the bread in the milk. Chop the onion and garlic.|action|—|(90 + 30 × servings) × skill_factor|—|Bread soft|bread; milk; onion; garlic|bowl, chef_knife, chopping_board|—
S|P1|P|Cook the filling|Soften the onion and garlic in the butter, add the meat and brown it, then stir in the curry powder, half the turmeric, jam, raisins, lemon juice and salt. Squeeze the bread (keep the milk) and mix it in.|action|medium|720|K1|Browned, fragrant|butter; ground_beef; ground_lamb; curry_powder; turmeric_powder; apricot_jam; raisins; lemon_juice; salt|pan, stovetop, wooden_spoon|—
S|O1|O|Custard and bake|Press the filling into a baking dish. Beat the eggs into the reserved milk, pour over, tuck in the bay leaves and scatter almonds. Bake at 180 °C until the custard is set and golden.|wait|180 °C|2100|P1|Custard set, golden|egg; bay_leaf; almond|oven, baking_dish, fork|—
S|R1|R|Yellow rice|Cook the rice with the rest of the turmeric and a pinch of salt (1 part rice to 1.5 parts water, covered, 15 min, rest 10 min).|wait|low|1500|—|Yellow, fluffy|white_rice|saucepan, stovetop, sieve|—
S|F1|F|Serve|Rest 5 minutes and serve in squares with the yellow rice.|action|off|300 + 15 × servings|O1, R1|Served|—|spatula, plates|—
`
  },
  {
    id: "chocolate_chip_cookies", name: "Chocolate Chip Cookies", image: "img/350/chocolate_chips.webp",
    rows: `
O|opt_texture|chewy|Chewy (chill the dough)|TRUE
O|opt_texture|crisp|Crisp (bake straight away)|FALSE
I|butter|Butter, softened|img/350/butter.webp|28|g|28|linear|—|—
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|25|g|25|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|12|g|12|linear|—|—
I|egg|Egg|img/350/egg.webp|0.25|pcs|14|linear, rounded up|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
I|flour|Flour|img/350/flour.webp|40|g|40|linear|—|—
I|baking_soda|Baking soda|img/350/baking_soda.webp|0.125|tsp|0.6|linear|—|—
I|salt|Salt|img/350/salt.webp|0.125|tsp|0.7|linear|—|—
I|chocolate_chips|Chocolate chips or chopped chocolate|img/350/chocolate_chips.webp|35|g|35|linear|—|—
S|D1|D|Cream|Beat the butter with both sugars until fluffy, then beat in the egg and vanilla.|action|—|240|—|Pale, fluffy|butter; brown_sugar; sugar; egg; vanilla|bowl, mixer|—
S|D2|D|Dry ingredients|Stir in the flour, baking soda and salt until just combined, then the chocolate chips.|action|—|(90 + 15 × servings) × skill_factor|D1|No dry flour|flour; baking_soda; salt; chocolate_chips|bowl, spatula|—
S|D3|D|Chill|Cover and chill the dough (makes thicker, chewier cookies).|wait|—|1800|D2|Firm|—|plastic_wrap, fridge|opt_texture = chewy
S|O1|O|Preheat|Heat the oven to 180 °C (160 °C fan) and line a tray.|action|180 °C|60|D2|Oven on|—|oven, tray, parchment_paper|—
S|D4|D|Shape|Roll the dough into balls of about 2 tablespoons (about 3 per person) and space well apart on the tray.|action|—|(60 + 60 × servings) × skill_factor|D3, O1|Spaced balls|—|spoon, tray|—
S|O2|O|Bake|Bake until the edges are golden but the centres still look soft.|wait|180 °C|660 (doc: 10 to 12 min)|D4|Golden edges, soft middle|—|oven|—
S|F1|F|Cool|Leave on the tray 5 minutes, then move to a rack.|wait|—|600|O2|Set|—|spatula|—
`
  },
  {
    id: "brownies", name: "Brownies", image: "img/350/dark_chocolate.webp",
    rows: `
O|opt_nuts|none|Plain|TRUE
O|opt_nuts|walnut|With walnuts|FALSE
I|dark_chocolate|Dark chocolate (60-70%)|img/350/dark_chocolate.webp|30|g|30|linear|—|chopped
I|butter|Butter|img/350/butter.webp|25|g|25|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|35|g|35|linear|—|—
I|egg|Eggs|img/350/egg.webp|0.5|pcs|27|linear, rounded up|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
I|flour|Flour|img/350/flour.webp|15|g|15|linear|—|—
I|cocoa_powder|Cocoa powder|img/350/cocoa_powder.webp|6|g|6|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.3|linear|—|—
I|walnut|Walnuts|img/350/walnut.webp|10|g|10|linear|opt_nuts = walnut|chopped
S|O1|O|Preheat|Heat the oven to 180 °C (160 °C fan); line a square tin (20 cm for 8 people) with baking paper.|action|180 °C|120|—|Oven on, tin lined|—|oven, baking_dish, parchment_paper|—
S|M1|M|Melt|Melt the chocolate and butter together over low heat, stirring. Cool slightly.|action|low|240|—|Smooth|dark_chocolate; butter|saucepan, stovetop, spatula|—
S|B1|B|Whisk eggs and sugar|Whisk the eggs, sugar and vanilla until thick and pale (gives the shiny crust).|action|—|240|M1|Thick, pale|egg; sugar; vanilla|bowl, whisk|—
S|B2|B|Combine|Fold in the chocolate, then sift over the flour, cocoa and salt and fold until just combined; add the walnuts.|action|—|(90 + 15 × servings) × skill_factor|B1|Glossy, no streaks|flour; cocoa_powder; salt; walnut|bowl, spatula, sieve|—
S|O2|O|Bake|Pour into the tin and bake until the top is crackly and a skewer comes out with moist crumbs.|wait|180 °C|1500 (doc: 22 to 28 min)|B2, O1|Crackly top, fudgy middle|—|oven, baking_dish, skewers|—
S|F1|F|Cool and cut|Cool completely in the tin before cutting into squares.|wait|—|3600|O2|Set, cut|—|knife|—
`
  },
  {
    id: "banana_bread", name: "Banana Bread", image: "img/350/banana.webp",
    rows: `
O|opt_add|none|Plain|TRUE
O|opt_add|walnut|With walnuts|FALSE
O|opt_add|choc|With chocolate chips|FALSE
I|banana|Very ripe bananas|img/350/banana.webp|0.4|pcs|50|linear|—|—
I|butter|Butter, melted|img/350/butter.webp|10|g|10|linear|—|—
I|brown_sugar|Brown sugar|img/350/brown_sugar.webp|12|g|12|linear|—|—
I|egg|Eggs|img/350/egg.webp|0.15|pcs|8|linear, rounded up|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.125|tsp|0.5|linear|—|—
I|flour|Flour|img/350/flour.webp|24|g|24|linear|—|—
I|baking_soda|Baking soda|img/350/baking_soda.webp|0.125|tsp|0.4|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.2|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.0625|tsp|0.15|linear|—|—
I|walnut|Walnuts|img/350/walnut.webp|6|g|6|linear|opt_add = walnut|chopped
I|chocolate_chips|Chocolate chips|img/350/chocolate_chips.webp|8|g|8|linear|opt_add = choc|—
S|O1|O|Preheat|Heat the oven to 175 °C (155 °C fan) and grease and line a loaf pan (one loaf serves about 10).|action|175 °C|120|—|Oven on, pan lined|—|oven, loaf_pan, parchment_paper|—
S|B1|B|Mash and mix|Mash the bananas, then stir in the melted butter, sugar, egg and vanilla.|action|—|(120 + 15 × servings) × skill_factor|—|Smooth-ish|banana; butter; brown_sugar; egg; vanilla|bowl, fork|—
S|B2|B|Dry ingredients|Fold in the flour, baking soda, salt and cinnamon until just combined, then the nuts or chocolate.|action|—|(60 + 15 × servings) × skill_factor|B1|Just combined|flour; baking_soda; salt; cinnamon; walnut; chocolate_chips|bowl, spatula|—
S|O2|O|Bake|Pour into the pan and bake until risen and a skewer comes out clean (cover with foil if browning too fast).|wait|175 °C|3300 (doc: 50 to 60 min)|B2, O1|Skewer clean|—|oven, loaf_pan, skewers, tin_foil|—
S|F1|F|Cool|Cool 10 minutes in the pan, then on a rack before slicing.|wait|—|1800|O2|Cool enough to slice|—|knife|—
`
  },
  {
    id: "apple_pie", name: "Apple Pie", image: "img/350/apple.webp",
    rows: `
O|opt_crust|bought|Store-bought pie dough|TRUE
O|opt_crust|homemade|Homemade crust|FALSE
I|dough|Pie dough (for a double crust)|img/350/dough.webp|60|g|60|linear|opt_crust = bought|—
I|flour|Flour (crust)|img/350/flour.webp|40|g|40|linear|opt_crust = homemade|—
I|butter|Cold butter (crust)|img/350/butter.webp|28|g|28|linear|opt_crust = homemade|cubed
I|water|Ice water (crust)|img/350/water.webp|1|tbsp|12|linear|opt_crust = homemade|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.3|linear|—|—
I|apple|Tart apples|img/350/apple.webp|1|pcs|150|linear|—|peeled, sliced
I|sugar|Sugar|img/350/sugar.webp|15|g|15|linear|—|—
I|lemon_juice|Lemon juice|img/350/lemon_juice.webp|0.5|tsp|2.5|linear|—|—
I|cinnamon|Cinnamon|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
I|nutmeg|Nutmeg|img/350/nutmeg.webp|0.03|tsp|0.07|linear|—|—
I|cornstarch|Cornstarch (or flour)|img/350/cornstarch.webp|0.5|tbsp|4|linear|—|—
I|egg|Egg (wash)|img/350/egg.webp|0.125|pcs|7|linear, rounded up|—|—
S|C1|C|Make the crust|Rub the cold butter into the flour and salt until like breadcrumbs with some pea-size pieces, add ice water until it just holds together. Make two discs, wrap and chill.|action|—|(300 + 30 × servings) × skill_factor|—|Holds together|flour; butter; water; salt|bowl, plastic_wrap, fridge|opt_crust = homemade
S|C2|C|Chill|Chill the dough.|wait|—|3600|C1|Firm|—|fridge|opt_crust = homemade
S|K1|K|Filling|Peel, core and slice the apples and toss with the sugar, lemon juice, spices and cornstarch.|action|—|(180 + 90 × servings) × skill_factor|—|Coated|apple; sugar; lemon_juice; cinnamon; nutmeg; cornstarch|vegetable_peeler, chef_knife, chopping_board, bowl|—
S|O1|O|Preheat|Heat the oven to 200 °C (180 °C fan) with a tray on the bottom shelf.|action|200 °C|60|K1|Oven on|—|oven, tray|—
S|A1|A|Assemble|Roll out half the dough and line the pie dish (one pie serves 8). Pile in the apples, cover with the second sheet, crimp the edges, cut steam vents and brush with beaten egg.|action|—|(300 + 30 × servings) × skill_factor|K1, C2|Sealed, vented|dough; egg|rolling_pin, pie_dish, knife|—|countertop
S|O2|O|Bake|Bake 20 minutes, then lower to 180 °C and bake until deep golden and the juices bubble through the vents.|wait|200 °C then 180 °C|3300 (doc: 50 to 60 min)|A1, O1|Deep golden, bubbling|—|oven, pie_dish|—
S|F1|F|Cool|Cool at least 2 hours so the filling sets before slicing.|wait|—|7200|O2|Filling set|—|knife|—
`
  },
  {
    id: "chocolate_cake", name: "Chocolate Cake", image: "img/350/cocoa_powder.webp",
    rows: `
O|opt_frosting|buttercream|Chocolate buttercream|TRUE
O|opt_frosting|none|No frosting (dust with sugar)|FALSE
I|flour|Flour|img/350/flour.webp|30|g|30|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|30|g|30|linear|—|—
I|cocoa_powder|Cocoa powder (cake)|img/350/cocoa_powder.webp|8|g|8|linear|—|—
I|baking_soda|Baking soda|img/350/baking_soda.webp|0.125|tsp|0.6|linear|—|—
I|baking_powder|Baking powder|img/350/baking_powder.webp|0.125|tsp|0.5|linear|—|—
I|salt|Salt|img/350/salt.webp|0.0625|tsp|0.3|linear|—|—
I|egg|Eggs|img/350/egg.webp|0.25|pcs|14|linear, rounded up|—|—
I|buttermilk|Buttermilk (or milk + a little lemon juice)|img/350/buttermilk.webp|30|ml|30|linear|—|—
I|oil|Neutral oil|img/350/oil.webp|1|tbsp|14|linear|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
I|coffee|Hot coffee or hot water|img/350/coffee.webp|30|ml|30|linear|—|—
I|butter|Soft butter (frosting)|img/350/butter.webp|20|g|20|linear|opt_frosting = buttercream|—
I|powdered_sugar|Powdered sugar|img/350/powdered_sugar.webp|30|g|30|linear|—|—
I|milk|Milk (frosting)|img/350/milk.webp|1|tsp|5|linear|opt_frosting = buttercream|—
S|O1|O|Preheat|Heat the oven to 175 °C (155 °C fan). Grease two 20 cm cake tins and line the bases (one cake serves 10).|action|175 °C|180|—|Oven on, tins lined|—|oven, cake_tin, parchment_paper|—
S|B1|B|Dry ingredients|Whisk the flour, sugar, cocoa, baking soda, baking powder and salt in a large bowl.|action|—|(60 + 15 × servings) × skill_factor|—|Even colour|flour; sugar; cocoa_powder; baking_soda; baking_powder; salt|bowl, whisk, sieve|—
S|B2|B|Wet ingredients|Whisk in the eggs, buttermilk, oil and vanilla, then the hot coffee. The batter will be thin.|action|—|180|B1|Smooth, thin|egg; buttermilk; oil; vanilla; coffee|bowl, whisk|—
S|O2|O|Bake|Divide between the tins and bake until a skewer comes out clean.|wait|175 °C|1800 (doc: 28 to 35 min)|B2, O1|Skewer clean|—|oven, cake_tin, skewers|—
S|F1|F|Cool|Cool 10 minutes in the tins, then turn out onto a rack and cool completely.|wait|—|3600|O2|Completely cool|—|knife|—
S|C1|C|Buttercream|Beat the butter until pale, then beat in the powdered sugar, a little cocoa and the milk until fluffy.|action|—|(180 + 30 × servings) × skill_factor|O2|Fluffy, spreadable|butter; milk|bowl, mixer|opt_frosting = buttercream
S|F2|F|Fill and frost|Sandwich the layers with buttercream and spread the rest over the top and sides (or just dust with powdered sugar).|action|—|(300 + 30 × servings) × skill_factor|F1, C1|Frosted|powdered_sugar|spatula, plates|—
`
  },
  {
    id: "cheesecake", name: "Baked Cheesecake", image: "img/350/cream_cheese.webp",
    rows: `
O|opt_topping|plain|Plain|TRUE
O|opt_topping|berries|With fresh berries|FALSE
I|digestive_biscuits|Digestive biscuits or graham crackers|img/350/digestive_biscuits.webp|20|g|20|linear|—|—
I|butter|Melted butter|img/350/butter.webp|8|g|8|linear|—|—
I|cream_cheese|Full-fat cream cheese, room temperature|img/350/cream_cheese.webp|90|g|90|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|22|g|22|linear|—|—
I|cornstarch|Cornstarch (or flour)|img/350/cornstarch.webp|0.5|tsp|2|linear|—|—
I|egg|Eggs|img/350/egg.webp|0.35|pcs|19|linear, rounded up|—|—
I|sour_cream|Sour cream|img/350/sour_cream.webp|20|g|20|linear|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
I|lemon_zest|Lemon zest|img/350/lemon_zest.webp|0.125|tsp|0.3|linear|—|—
I|raspberry|Fresh berries|img/350/raspberry.webp|25|g|25|linear|opt_topping = berries|—
S|O1|O|Preheat|Heat the oven to 160 °C (140 °C fan). Line the base of a 20 cm springform tin (serves 10).|action|160 °C|120|—|Oven on|—|oven, cake_tin, parchment_paper|—
S|B1|B|Biscuit base|Crush the biscuits finely, mix with the melted butter and press firmly into the tin. Bake 10 minutes.|action|160 °C|(180 + 15 × servings) × skill_factor + 600|O1|Firm, lightly toasted|digestive_biscuits; butter|bowl, spoon, cake_tin|—
S|K1|K|Filling|Beat the cream cheese, sugar and cornstarch on low until smooth. Beat in the eggs one at a time, then the sour cream, vanilla and lemon zest. Do not whip in air.|action|—|360|—|Smooth, no lumps|cream_cheese; sugar; cornstarch; egg; sour_cream; vanilla; lemon_zest|bowl, mixer, spatula, microplane|—
S|O2|O|Bake low|Pour onto the base and bake until set at the edges but still wobbly in the middle. Turn off the oven, prop the door open and leave it for 1 hour (prevents cracks).|wait|160 °C|6300 (doc: 45 min bake + 1 h in the cooling oven)|B1, K1|Wobbly centre, no cracks|—|oven|—
S|F1|F|Chill|Chill at least 6 hours or overnight.|wait|—|21600 (doc: 6 h to overnight)|O2|Firm, cold|—|fridge|—
S|F2|F|Serve|Run a knife round the edge, unclip the tin, top with berries and slice with a hot knife.|action|—|60 + 15 × servings|F1|Served|raspberry|knife, plates|—
`
  },
  {
    id: "tiramisu", name: "Tiramisu", image: "img/350/mascarpone.webp",
    rows: `
O|opt_alcohol|none|No alcohol|TRUE
O|opt_alcohol|rum|With rum or marsala|FALSE
I|coffee|Strong coffee or espresso, cooled|img/350/coffee.webp|60|ml|60|linear|—|—
I|rum|Rum or marsala|img/350/rum.webp|1|tsp|5|linear|opt_alcohol = rum|—
I|egg_yolk|Very fresh egg yolks|img/350/egg_yolk.webp|0.5|pcs|9|linear, rounded up|—|—
I|egg_white|Very fresh egg whites|img/350/egg_white.webp|0.5|pcs|15|linear, rounded up|—|—
I|sugar|Sugar|img/350/sugar.webp|18|g|18|linear|—|—
I|mascarpone|Mascarpone|img/350/mascarpone.webp|60|g|60|linear|—|—
I|ladyfingers|Ladyfingers (savoiardi)|img/350/ladyfingers.webp|4|pcs|40|linear|—|—
I|cocoa_powder|Cocoa powder (to dust)|img/350/cocoa_powder.webp|1|tsp|2|linear|—|—
S|C1|C|Coffee|Pour the cooled coffee (and rum) into a shallow dish.|action|—|60|—|Ready|coffee; rum|bowl|—
S|K1|K|Yolks and mascarpone|Beat the egg yolks with the sugar until pale and thick, then beat in the mascarpone until smooth.|action|—|300|—|Thick, smooth|egg_yolk; sugar; mascarpone|bowl, mixer|—
S|K2|K|Whites|In a clean bowl, whisk the whites to stiff peaks and fold them gently into the mascarpone cream.|action|—|(180 + 30 × servings) × skill_factor|K1|Light, holds shape|egg_white|bowl, mixer, spatula|—
S|A1|A|Layer|Dip each ladyfinger very briefly in the coffee (1 second per side) and lay them in the dish. Spread over half the cream, repeat with a second layer and finish with cream.|action|—|(120 + 90 × servings) × skill_factor|C1, K2|Two layers, smooth top|ladyfingers|baking_dish, spatula|—|countertop
S|F1|F|Chill|Cover and chill at least 6 hours (overnight is best).|wait|—|21600 (doc: 6 h to overnight)|A1|Set|—|plastic_wrap, fridge|—
S|F2|F|Dust and serve|Dust generously with cocoa through a sieve just before serving.|action|—|30 + 15 × servings|F1|Served|cocoa_powder|sieve, spoon, plates|—
`
  },
  {
    id: "rice_pudding", name: "Rice Pudding", image: "img/350/short_grain_rice.webp",
    rows: `
O|opt_raisins|no|Plain|TRUE
O|opt_raisins|yes|With raisins|FALSE
I|short_grain_rice|Short-grain or pudding rice|img/350/short_grain_rice.webp|30|g|30|linear|—|—
I|milk|Whole milk|img/350/milk.webp|250|ml|250|linear|—|—
I|sugar|Sugar|img/350/sugar.webp|15|g|15|linear|—|—
I|salt|Pinch of salt|img/350/salt.webp|0.03|tsp|0.15|linear|—|—
I|vanilla|Vanilla extract (or a pod)|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
I|lemon_zest|Strip of lemon zest|img/350/lemon_zest.webp|0.25|tsp|0.5|linear|—|—
I|butter|Butter|img/350/butter.webp|5|g|5|linear|—|—
I|raisins|Raisins|img/350/raisins.webp|10|g|10|linear|opt_raisins = yes|—
I|cinnamon|Cinnamon (to finish)|img/350/cinnamon.webp|0.125|tsp|0.3|linear|—|—
S|P1|P|Simmer|Put the rice, milk, sugar, salt, vanilla and lemon zest in the pan and bring slowly to a simmer, stirring.|action|medium|480|—|Simmering|short_grain_rice; milk; sugar; salt; vanilla; lemon_zest|saucepan, stovetop, wooden_spoon|—
S|P2|P|Cook slowly|Cook on the lowest heat, stirring every few minutes so it does not catch, until the rice is soft and creamy (add the raisins halfway).|wait|low|2100 (doc: 30 to 40 min)|P1|Soft rice, creamy|raisins|saucepan, wooden_spoon|—
S|P3|P|Finish|Take out the lemon zest, stir in the butter; it thickens as it cools.|action|off|60|P2|Glossy, thick|butter|saucepan, wooden_spoon|—
S|F1|F|Serve|Serve warm or cold, dusted with cinnamon.|action|—|30 + 15 × servings|P3|Served|cinnamon|spoon, bowl|—
`
  },
  {
    id: "flan", name: "Flan (Caramel Custard)", image: "img/350/condensed_milk.webp",
    rows: `
O|opt_size|one|One large flan|TRUE
O|opt_size|ramekins|Individual ramekins|FALSE
I|sugar|Sugar (caramel)|img/350/sugar.webp|20|g|20|linear|—|—
I|water|Water (caramel)|img/350/water.webp|1|tsp|5|linear|—|—
I|egg|Eggs|img/350/egg.webp|0.75|pcs|40|linear, rounded up|—|—
I|condensed_milk|Sweetened condensed milk|img/350/condensed_milk.webp|70|g|70|linear|—|—
I|evaporated_milk|Evaporated milk|img/350/evaporated_milk.webp|70|ml|70|linear|—|—
I|vanilla|Vanilla extract|img/350/vanilla.webp|0.25|tsp|1|linear|—|—
S|O1|O|Preheat|Heat the oven to 160 °C (140 °C fan) and boil a kettle for the water bath.|action|160 °C|60|—|Oven on|—|oven|—
S|C1|C|Caramel|Melt the sugar with the water without stirring, swirling the pan, until deep amber. Pour at once into the flan dish (or ramekins) and tilt to coat the base.|action|medium|480|—|Deep amber|sugar; water|saucepan, stovetop, baking_dish|—
S|K1|K|Custard|Whisk the eggs gently with the condensed milk, evaporated milk and vanilla without making foam; strain through a sieve.|action|—|(120 + 15 × servings) × skill_factor|—|Smooth, no foam|egg; condensed_milk; evaporated_milk; vanilla|bowl, whisk, sieve|—
S|O2|O|Bake in a water bath|Pour the custard over the caramel, cover with foil, set in a deep tray and pour hot water halfway up. Bake until set but still slightly wobbly in the centre.|wait|160 °C|3000 one / 1800 ramekins|C1, K1, O1|Set, slight wobble|—|oven, tray, tin_foil, ramekins|—
S|F1|F|Chill|Cool, then chill at least 4 hours.|wait|—|14400 (doc: 4 h to overnight)|O2|Cold, firm|—|fridge|—
S|F2|F|Turn out|Run a knife round the edge, put a plate on top and flip it so the caramel runs over.|action|—|60 + 15 × servings|F1|Served|—|knife, plates|—
`
  }
];
