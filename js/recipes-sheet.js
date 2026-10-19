/*
  Recipes copied from the "Recipes" Google Sheet (schema cook-recipe v0.1), 2026-10-19.
  Spaghetti Carbonara is hand-built in recipes.js; every other tab is here.

  One block per recipe, one row per line, fields split by "|". "—" means empty.
  O|option_id|choice_id|label|TRUE when it is the default
  I|ing_id|name|image|qty_per_person|unit|approx_g_per_person|scaling|condition|prep
  S|step_id|thread|title|instruction|kind|heat|duration_rule|depends_on|done_when|ingredients_in|equipment|condition

  Only the columns the app uses are kept. Read by the converter in recipes.js.
*/
window.SHEET_RECIPES = [
  {
    id: 'chilli_con_carne', name: 'Chilli Con Carne', image: 'img/350/chili_pepper.webp',
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
I|tomato_puree|Tomato purée|img/350/tomato_puree.webp|7.5|g|7.5|linear|—|—
I|kidney_beans|Red kidney beans (canned)|img/350/kidney_beans.webp|60|g drained|60|linear|—|drained and rinsed
I|corn|Sweetcorn (canned)|img/350/corn.webp|71|g|71|linear|—|drained
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
I|coriander_leaves|Cilantro leaves|img/350/coriander_leaves.webp|3|leaves|1|linear|—|—
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
S|P9|P|Tomato purée|Add the tomato purée and fry it for 1 minute, stirring.|action|medium|60|P8|Darker, fragrant|tomato_puree|cooking_pot, spatula|—
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
S|S3|S|Serve|Ladle into bowls. Top with grated cheddar, a spoon of sour cream and a few cilantro leaves. Tortillas (or rice) on the side, lime wedge optional.|action|—|30 + 20 × servings|P16, S1, S2|Served|cheddar_grated; sour_cream; coriander_leaves; lime; tortillas_toasted|ladle, bowl|—
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
O|opt_veg|easy|Easy: carrot, cucumber and spring onion all julienned raw|TRUE
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
I|spring_onion|Spring onion|img/350/spring_onion.webp|1|pcs|15|linear|—|white: julienned; green: chopped
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
S|K3|K|Julienne the vegetables|Cut the carrot, the cucumber (easy option) and the white part of the spring onions into matchsticks. Chop the green parts for topping.|action|—|(120 + 90 × servings) × skill_factor|—|Matchstick-sized|carrot; cucumber; spring_onion|chef_knife, chopping_board|—
S|K4|K|Shred and salt the cucumber|Shred the cucumber, add a pinch of salt.|action|—|(30 + 30 × servings) × skill_factor|—|Shredded, salted|cucumber; salt|cheese_grater, bowl|opt_veg = traditional
S|K5|K|Let the cucumber rest|Let it rest.|wait|—|600 (doc: 10 min)|K4|10 min passed|—|bowl|opt_veg = traditional
S|K6|K|Squeeze the cucumber|Squeeze the water out.|action|—|30|K5|Dry-ish|—|—|opt_veg = traditional
S|K7|K|Prepare the bok choy|Tear the bok choy apart by leaves and wash it thoroughly.|action|—|(60 + 30 × servings) × skill_factor|—|Clean leaves|bok_choy|—|—
S|S1|F|Mix the sauce|Mix the gochujang, sesame oil, sugar or honey, rice vinegar, water, sesame seeds and grated garlic.|action|—|60|K2|Smooth sauce|gochujang_sauce; sesame_oil_sauce; honey_sauce; rice_vinegar; water_sauce; sesame_seeds_sauce; garlic_grated|bowl, spoon|opt_sauce = bibimbap
S|W1|W|Chicken into the pan|Heat a large pan on medium-high with a little oil. Add the marinated chicken.|action|medium-high|30|M2|Chicken spread out|chicken_marinated; oil_frying|pan, stovetop, spatula|—
S|W2|W|Stir-fry the chicken|Stir-fry until done.|wait|medium-high|510 (doc: 7 to 10 min)|W1|No pink inside|—|pan, spatula|—
S|W3|W|Chicken out|Take the chicken out of the pan.|action|off|15|W2|Chicken set aside|—|pan, spatula|—
S|W4|W|Water and oil in the pan|Clean the pan (or use another). While cold, add a few tbsp of water and a few tsp of oil, then heat it.|action|medium|60|W3|Hot and steaming|oil_frying|pan, stovetop|—
S|W5|W|Steam-fry the bok choy|Add the bok choy with a little salt, stirring. Don't overcook it.|action|medium|180|W4, K7|Just wilted, still green|bok_choy_ready; salt|pan, spatula|—
S|W6|W|Sauté the carrot|Sauté the julienned carrot for about 1 minute.|action|medium|60|W5, K3|Slightly soft|veg_julienned|pan, spatula|opt_veg = traditional
S|E1|E|Fry the eggs|Fry the eggs sunny side up in a small pan with a little oil, one at a time. Keep the yolk a little runny, salt a tiny bit, add a splash of sesame oil near the end.|wait|medium|180 × servings|W3|White set, yolk runny|egg; oil_frying; salt; toasted_sesame_oil|pan, stovetop, spatula|—
S|F1|F|Plate it|Rice first, the chicken next to it, the bok choy next to it, then the vegetables and the egg on top. Drizzle light soy sauce, add the spring onion greens, 1 tsp of sauce and the sesame seeds.|action|—|60 + 45 × servings|R7, W5, E1, K3, S1|Served|rice_ready; chicken_ready; bok_choy_cooked; veg_julienned; eggs_fried; light_soy_sauce; spring_onion; sauce; sesame_seeds|bowl, spoon|—
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
S|C8|C|Check doneness|Cut the thickest piece in half: it must be white all the way through.|check|off|20|C7|White throughout|—|chef_knife|—
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
O|opt_cheese|mozzarella|Mozzarella or Trappista (milder)|FALSE
I|egg|Egg|img/350/egg.webp|1|pcs per muffin|55|per muffin|—|—
I|bacon|Thin streaky bacon rasher|img/350/bacon.webp|1|pcs per muffin|15|per muffin|—|—
I|cherry_tomato|Cherry tomato|img/350/cherry_tomato.webp|1|pcs per muffin|15|per muffin|—|halved
I|cheddar|Cheddar, grated|img/350/cheddar.webp|10|g per muffin|10|per muffin|opt_cheese = cheddar|grated
I|mozzarella|Mozzarella or Trappista, grated|img/350/mozzarella.webp|10|g per muffin|10|per muffin|opt_cheese = mozzarella|grated
I|butter|Soft butter|img/350/butter.webp|1.25|g per muffin|1.25|per muffin|—|for greasing the cups
I|salt|Salt|img/350/salt.webp|0.02|tsp per muffin|0.12|per muffin|—|—
I|ground_black_pepper|Ground black pepper|img/350/ground_black_pepper.webp|0.02|tsp per muffin|0.05|per muffin|—|—
S|O1|O|Preheat the oven|Turn the oven on to 190 °C conventional (170 °C fan), middle rack.|action|190 °C (170 °C fan)|15|—|Oven on|—|oven|—
S|O2|O|Wait for the oven|Let the oven heat up.|wait|190 °C (170 °C fan)|600|O1|Temperature reached|—|oven|—
S|T1|T|Butter the cups|Butter the cups of the muffin tin, sides and bottom.|action|—|30 + 15 × muffins|—|All cups greased|butter|muffin_tin|—
S|P1|P|Par-fry the bacon|Fry the bacon slices briefly, not until they are firm.|wait|medium|120|—|Lightly cooked, still bendy|bacon|pan, stovetop|—
S|K1|K|Halve the tomatoes|Cut the cherry tomatoes in half.|action|—|(10 + 10 × muffins) × skill_factor|—|Halved|cherry_tomato|chef_knife, chopping_board|—
S|K2|K|Grate the cheese|Grate the cheese if it is not already grated.|action|—|(20 + 5 × muffins) × skill_factor|—|Grated|cheddar / mozzarella|cheese_grater|—
S|T2|T|Line the cups with bacon|Place a bacon slice around the wall of each cup.|action|—|10 + 15 × muffins|T1, P1|Every cup lined|bacon_parfried|muffin_tin|—
S|T3|T|Eggs in|Crack one egg into each cup (whisked option: break it up with a fork). Add salt and pepper. Cups should be about half full: it puffs up while baking.|action|—|15 + 15 × muffins|T2|One egg per cup|egg; salt; ground_black_pepper|muffin_tin, fork|—
S|T4|T|Tomatoes and cheese|Add a couple of tomato halves and some grated cheese to each cup. Whisked eggs: fill each cup no more than ¾ including fillings.|action|—|10 + 10 × muffins|T3, K1, K2|All cups filled|tomatoes_halved; cheese_grated|muffin_tin|—
S|O3|O|Bake|Bake until the top is slightly browned and the centre is set and doesn't wobble. Whole egg with runny yolk: start checking at 12 to 14 min.|wait|190 °C (170 °C fan)|900 whole / 1050 whisked (doc: 15 to 20 min; check whole eggs at 12 to 14 min)|O2, T4|Centre set, no wobble|—|oven, muffin_tin|—
S|O4|O|Rest in the tin|Take the tin out and let them rest.|wait|off|150 (doc: 2 to 3 min)|O3|Rested|—|muffin_tin|—
S|F1|F|Release and serve|Run a thin knife around each muffin, then lift them out with a fork.|action|—|20 + 10 × muffins|O4|Out of the tin|muffins_rested|knife, fork, plates|—
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
I|croutons|Unflavoured croutons|img/350/croutons.webp|15|g|15|linear|—|—
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
I|grated_cheese|Grated cheese (mozzarella or Trappista)|img/350/grated_cheese.webp|50|g|50|linear; 40 g in the sour cream version|—|grated
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
I|flour|Plain flour|img/350/flour.webp|0.5|tbsp|5|linear|—|—
I|water|Water|img/350/water.webp|125|ml|125|linear|opt_liquid = water|—
I|vegetable_stock|Vegetable stock|img/350/vegetable_stock.webp|125|ml|125|linear|opt_liquid = stock|—
I|tomato_passata|Tomato passata|img/350/tomato_passata.webp|125|g|125|linear|—|—
I|tomato_puree|Tomato purée|img/350/tomato_puree.webp|7.5|g|7.5|linear|—|—
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
S|P4|P|Flour and purée|Add a little flour and the tomato purée, keep stirring until the flour starts to brown a little.|action|medium|120|P3|Flour lightly browned|flour; tomato_puree|cooking_pot, wooden_spoon|—
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
I|flour|Plain flour|img/350/flour.webp|0.5|tbsp|5|linear|—|—
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
S|P2|P|Caramelise|Keep stirring and frying. If it sticks to the bottom, add a splash of water and continue.|wait|medium-low|2700 (doc: at least 45 min)|P1|Sticky and golden-brown|—|cooking_pot, wooden_spoon|—
S|P3|P|Flour in|Add the flour for the last couple of minutes, stirring.|action|medium-low|150|P2|Flour browning|flour|cooking_pot, wooden_spoon|—
S|P4|P|Wine in, reduce|Add the white wine and let it reduce by half, scraping the bottom of the pot.|action|medium|210 (doc: 3 to 4 min)|P3|Reduced by half|white_wine|cooking_pot, wooden_spoon|—
S|P5|P|Stock and herbs|Add the stock (or water) and salt to taste. Add a pinch of nutmeg, the bay leaf and the thyme.|action|medium|60|P4|All in|beef_stock / chicken_stock / water; salt; nutmeg; bay_leaf; thyme|cooking_pot, microplane|—
S|P6|P|Simmer|Simmer, stirring now and then.|wait|low|1650 (doc: 25 to 30 min)|P5|Time is up|—|cooking_pot, wooden_spoon|—
S|O1|O|Turn on the grill|Switch the oven grill (broil) on.|action|grill|15|—|Grill on|—|oven|—
S|O2|O|Let the grill heat|Let it heat up.|wait|grill|300|O1|Hot|—|oven|—
S|B1|O|Bread on the tray|Lay the bread slices on the tray, drizzle with olive oil and top with grated cheese.|action|—|30 + 30 × servings|—|All slices topped|bread; extra_virgin_olive_oil; grated_cheese|tray|—
S|B2|O|Grill the toasts|Grill until the cheese is melted and a little browned.|wait|grill|270 (doc: 4 to 5 min)|B1, O2|Cheese melted, lightly browned|—|oven, tray|—
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
S|C3|C|Squeeze the cucumber|Squeeze out all the liquid.|action|—|30 + 15 × servings|C2|No more liquid|—|colander|—
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
I|flour|Plain flour|img/350/flour.webp|0.17|tbsp|1.7|linear|—|—
I|cherry_tomato|Cherry tomatoes|img/350/cherry_tomato.webp|35|g|35|linear|opt_tomatoes = with|—
S|M1|M|Mix the marinade|In the slow cooker pot mix the oil, salt, pepper, brown sugar, MSG, crushed cardamom seeds, cumin, cinnamon, smoked paprika, garlic powder, mustard, Worcestershire sauce, chili powder, thyme and red wine. Taste until satisfied.|action|—|180|—|Tastes balanced|oil; salt; ground_black_pepper; brown_sugar; msg; cardamom; cumin; cinnamon; smoked_paprika; garlic_powder; mustard; worcestershire_sauce; chili_powder; thyme; red_wine|slow_cooker, spoon|—
S|M2|M|Beef in, coat it|Put the uncut beef into the pot and roll it so it is well covered. It should not be submerged.|action|—|60|M1|Coated all over|beef|slow_cooker|—
S|M3|M|Slow cook|Cook with the lid on. Roll the meat once or twice so every part gets under the marinade; each lid lift costs 15 to 20 min.|wait|slow cooker|19800 High (doc: 5 to 6 h) / 32400 Low (doc: 8 to 10 h)|M2|Fork twists in easily (≈90 to 95 °C inside)|—|slow_cooker|—
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
O|opt_patty|thick|Thick: 1 × 130 g with a centre divot, 5 to 6 min|FALSE
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
S|P2|P|Shape the patties|Roll balls slightly larger than a golf ball and squeeze them into disks. Thicker than a finger? Leave a small divot in the centre.|action|—|(30 + 30 × patties) × skill_factor|P1|Even disks|beef_mixed|—|—
S|P3|P|Chill the patties|Cover them well and put them in the fridge.|wait|—|600 (the doc gives no time; minimum is an assumption)|P2|Chilled|—|fridge|—
S|S1|S|Chop the pickles|Shred or finely chop the pickles for the sauce.|action|—|(30 + 15 × servings) × skill_factor|—|Finely chopped|pickles_chopped|chef_knife, chopping_board|—
S|S2|S|Mix the sauce|Mix 4 parts mayonnaise, 2 parts ketchup, 1 part yellow mustard, a little salt, pepper and sugar, the chopped pickles and pickle juice (and a pinch of cayenne or chili). Stir well.|action|—|60|S1, Y1|Smooth sauce|mayonnaise; ketchup; mustard; salt_sauce; pepper_sauce; sugar; pickles_chopped_ready; pickle_juice; cayenne_pepper|bowl, spoon|—
S|S3|S|Rest the sauce|Let the sauce rest in the fridge so the flavours blend.|wait|—|1800|S2|30 min passed|—|fridge|—
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
  }
];
