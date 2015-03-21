//Coagulant (grn) Ore Dictionary
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:4");
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:7");
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:10");
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:13");

mod.addShapelessRecipe("medGreen 2", ":AHMmedGreen", ":AHMmedGreen", ":AHMmedGreen", "lye", "harvestcraft:potItem", ":listAllwater");


//Antisepctic (blu) Ore Dictionary
mod.addToOreDictionary("AHMmedBlue", "addedhealthmechanics:ingredient:5");
mod.addToOreDictionary("AHMmedBlue", "addedhealthmechanics:ingredient:8");
mod.addToOreDictionary("AHMmedBlue", "addedhealthmechanics:ingredient:11");

mod.addShapelessRecipe("medBlue 2", ":AHMmedBlue", ":AHMmedBlue", ":AHMmedBlue", "lye", "harvestcraft:potItem", ":listAllwater");


//Anesthetic (mag) Ore Dictionary
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:6");
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:9");
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:12");
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:14");

mod.addShapelessRecipe("medMagenta 2", ":AHMmedMagenta", ":AHMmedMagenta", ":AHMmedMagenta", "lye", "harvestcraft:potItem", ":listAllwater");


//Wood ash (for lye)
mod.addToOreDictionary("dustPostash", "woodAsh");

mod.addSmeltingRecipe("medWoodAsh", ":plankWood");

mod.addShapelessRecipe("medLye", ":dustPotash", ":listAllwater");


//Sapling Leaves (for poultices)
mod.addShapelessRecipe("medLeaf", ":treeSapling", "harvestcraft:cuttingboardItem");

