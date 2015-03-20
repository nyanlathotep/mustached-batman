name = "potion";
creativeTab = "Medicine";
maxStack = 1;

addToCreative[4] = true;
textureFile[4] = "vial_red";
alwaysEdible[4] = true;
usingAction[4] = "drink";
onEaten[4] = "if (Math.random() < 0.8) {player.addPotionEffect('nightVision', 900, 0);} else if (Math.random() < 0.5) {player.addPotionEffect('hunger', 100, 0);} else {player.addPotionEffect('poison', 100, 0);}";

addToCreative[5] = true;
textureFile[5] = "vial_orange";
alwaysEdible[5] = true;
usingAction[5] = "drink";
onEaten[5] = "if (Math.random() < 0.8) {player.addPotionEffect('jump', 900, 0);} else if (Math.random() < 0.5) {player.addPotionEffect('hunger', 100, 0);} else {player.addPotionEffect('poison', 100, 0);}";

addToCreative[6] = true;
textureFile[6] = "vial_pink";
alwaysEdible[6] = true;
usingAction[6] = "drink";
onEaten[6] = "if (Math.random() < 0.8) {player.addPotionEffect('invisibility', 900, 0);} else if (Math.random() < 0.5) {player.addPotionEffect('hunger', 100, 0);} else {player.addPotionEffect('poison', 100, 0);}";

addToCreative[7] = true;
textureFile[7] = "vial_purple";
alwaysEdible[7] = true;
usingAction[7] = "drink";
onEaten[7] = "if (Math.random() < 0.8) {player.addPotionEffect('poison', 0, 255);}";

addToCreative[8] = true;
textureFile[8] = "vial_magenta";
alwaysEdible[8] = true;
usingAction[8] = "drink";
onEaten[6] = "if (Math.random() < 0.8) {player.addPotionEffect('digSpeed', 900, 0);} else if (Math.random() < 0.5) {player.addPotionEffect('hunger', 100, 0);} else {player.addPotionEffect('poison', 100, 0);}";

addToCreative[9] = true;
textureFile[9] = "vial_yellow";
alwaysEdible[9] = true;
usingAction[9] = "drink";
onEaten[6] = "if (Math.random() < 0.8) {player.addPotionEffect('absorption', 900, 0);} else if (Math.random() < 0.5) {player.addPotionEffect('hunger', 100, 0);} else {player.addPotionEffect('poison', 100, 0);}";

addToCreative[10] = true;
textureFile[10] = "vial_white";
alwaysEdible[10] = true;
usingAction[10] = "drink";
onEaten[6] = "if (Math.random() < 0.8) {player.addPotionEffect('damageBoost', 900, 0);} else if (Math.random() < 0.5) {player.addPotionEffect('hunger', 100, 0);} else {player.addPotionEffect('poison', 100, 0);}";

addToCreative[11] = true;
textureFile[11] = "vial_ltblue";
alwaysEdible[11] = true;
usingAction[11] = "drink";
onEaten[6] = "if (Math.random() < 0.8) {player.addPotionEffect('moveSpeed', 900, 0);} else if (Math.random() < 0.5) {player.addPotionEffect('hunger', 100, 0);} else {player.addPotionEffect('poison', 100, 0);}";

addToCreative[12] = true;
textureFile[12] = "vial_brown";
alwaysEdible[12] = true;
usingAction[12] = "drink";
onEaten[12] = "if (Math.random() < 0.2) {player.setFire(5);} else {player.addPotionEffect('fireResistance', 900, 0);}";

addToCreative[13] = true;
textureFile[13] = "vial_ltgrey";
alwaysEdible[13] = true;
usingAction[13] = "drink";
onEaten[13] = "if (Math.random() < 0.2) {player.addPotionEffect('poison', 100, 0);} else {player.addPotionEffect('resistance', 900, 0);}";

addToCreative[14] = true;
textureFile[14] = "vial_blue";
alwaysEdible[14] = true;
usingAction[14] = "drink";
onEaten[14] = "if (Math.random() < 0.2) {player.addPotionEffect('poison', 100, 0);} else {player.addPotionEffect('waterBreathing', 900, 0);}";