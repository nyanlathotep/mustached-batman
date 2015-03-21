//Coagulant (grn) Ore Dictionary
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:4");
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:7");
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:10");
mod.addToOreDictionary("AHMmedGreen", "addedhealthmechanics:ingredient:13");

mod.addShapelessRecipe("medGreen 2", ":AHMmedGreen", ":AHMmedGreen", ":AHMmedGreen", "medLye", "harvestcraft:potItem", ":listAllwater");


//Antisepctic (blu) Ore Dictionary
mod.addToOreDictionary("AHMmedBlue", "addedhealthmechanics:ingredient:5");
mod.addToOreDictionary("AHMmedBlue", "addedhealthmechanics:ingredient:8");
mod.addToOreDictionary("AHMmedBlue", "addedhealthmechanics:ingredient:11");

mod.addShapelessRecipe("medBlue 2", ":AHMmedBlue", ":AHMmedBlue", ":AHMmedBlue", "medLye", "harvestcraft:potItem", ":listAllwater");


//Anesthetic (mag) Ore Dictionary
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:6");
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:9");
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:12");
mod.addToOreDictionary("AHMmedMagenta", "addedhealthmechanics:ingredient:14");

mod.addShapelessRecipe("medMagenta 2", ":AHMmedMagenta", ":AHMmedMagenta", ":AHMmedMagenta", "medLye", "harvestcraft:potItem", ":listAllwater");


//Medicines Ore dictionary
mod.addToOreDictionary("AHMmedicalPastes", "medGreen")
mod.addToOreDictionary("AHMmedicalPastes", "medBlue")
mod.addToOreDictionary("AHMmedicalPastes", "medMagenta")


//Wood ash (for lye)
mod.addToOreDictionary("dustPotash", "medWoodAsh");

mod.addSmeltingRecipe("medWoodAsh", "minecraft:planks");
mod.addSmeltingRecipe("medWoodAsh", "ExtrabiomesXL:planks");

mod.addShapelessRecipe("medLye", ":dustPotash", ":listAllwater", "harvestcraft:potItem");


//Sapling Leaves (for poultices)
mod.addShapelessRecipe("medLeaf 4", ":treeSapling", "harvestcraft:cuttingboardItem");

mod.addRecipe("medPoultice", 3, 2, "minecraft:air", "medLeaf", "minecraft:air", "medLeaf", ":AHMmedicalPastes", "medLeaf");


//Bandage recipe
mod.addShapelessRecipe("medBandage 3", "harvestcraft:wovencottonItem", ":slimeball", "medGreen", "medGreen", "medBlue", "medBlue", "medMagenta", "medMagenta");