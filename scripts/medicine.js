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

//poultice bag recipes

//Flint Blade (for poultice bag)
mod.addRecipe("medFlintBlade", 2, 2, "minecraft:air", "TConstruct:knifeBlade:3", ":stickWood", "minecraft:air");

mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:8", "minecraft:leather", "minecraft:string", "medFlintBlade");

//Empty = empty
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:8", "addedhealthmechanics:medbag_basic:8");
//Bag = poultice + 1 dmg
mod.addShapelessRecipe("medPoultice", "addedhealthmechanics:medbag_basic-");

//Empty + 8 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:8", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//kit|poult|result
//1 + 7 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:7", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//2 + 6 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:6", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//3 + 5 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:5", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//4 + 4 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:4", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//5 + 3 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:3", "medPoultice", "medPoultice", "medPoultice");
//6 + 2 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:2", "medPoultice", "medPoultice");
//7 + 1 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:0", "addedhealthmechanics:medbag_basic:1", "medPoultice");
//ALL + 1 = ALL+1
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:1", "addedhealthmechanics:medbag_basic:2", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:2", "addedhealthmechanics:medbag_basic:3", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:3", "addedhealthmechanics:medbag_basic:4", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:4", "addedhealthmechanics:medbag_basic:5", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:5", "addedhealthmechanics:medbag_basic:6", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:6", "addedhealthmechanics:medbag_basic:7", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:7", "addedhealthmechanics:medbag_basic:8", "medPoultice");
//ALL + 2 = ALL+2
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:1", "addedhealthmechanics:medbag_basic:3", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:2", "addedhealthmechanics:medbag_basic:4", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:3", "addedhealthmechanics:medbag_basic:5", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:4", "addedhealthmechanics:medbag_basic:6", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:5", "addedhealthmechanics:medbag_basic:7", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:6", "addedhealthmechanics:medbag_basic:8", "medPoultice", "medPoultice");
//ALL + 3 = ALL+3
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:1", "addedhealthmechanics:medbag_basic:4", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:2", "addedhealthmechanics:medbag_basic:5", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:3", "addedhealthmechanics:medbag_basic:6", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:4", "addedhealthmechanics:medbag_basic:7", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:5", "addedhealthmechanics:medbag_basic:8", "medPoultice", "medPoultice", "medPoultice");
//ALL + 4 = ALL+4
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:1", "addedhealthmechanics:medbag_basic:5", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:2", "addedhealthmechanics:medbag_basic:6", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:3", "addedhealthmechanics:medbag_basic:7", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:4", "addedhealthmechanics:medbag_basic:8", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//ALL + 5 = ALL+3
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:1", "addedhealthmechanics:medbag_basic:6", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:2", "addedhealthmechanics:medbag_basic:7", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:3", "addedhealthmechanics:medbag_basic:8", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//ALL + 6 = ALL+2
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:1", "addedhealthmechanics:medbag_basic:7", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:2", "addedhealthmechanics:medbag_basic:8", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");
//Empty + 7 = 7
mod.addShapelessRecipe("addedhealthmechanics:medbag_basic:1", "addedhealthmechanics:medbag_basic:8", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice", "medPoultice");


//MedKit recipes

//scalpel (for medkit)
mod.addRecipe("medScalpel", 2, 2, "minecraft:air", "TConstruct:knifeBlade:2", "TConstruct:toolRod:2", "minecraft:air");

//Make a medkit
mod.addRecipe("addedhealthmechanics:medbag_advanced:8", 3, 3, "minecraft:air", "harvestcraft:wovencottonItem", "minecraft:air", "harvestcraft:wovencottonItem", "medScalpel", "harvestcraft:wovencottonItem", "minecraft:air", "harvestcraft:wovencottonItem", "minecraft:air");

//Empty = empty
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:8", "addedhealthmechanics:medbag_advanced:8");
//Bag = bandage + 1 dmg
mod.addShapelessRecipe("medBandage", "addedhealthmechanics:medbag_advanced-");

//Empty + 8 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:8", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
//kit|bandage|result
//1 + 7 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:7", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
//2 + 6 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:6", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
//3 + 5 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:5", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
//4 + 4 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:4", "medBandage", "medBandage", "medBandage", "medBandage");
//5 + 3 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:3", "medBandage", "medBandage", "medBandage");
//6 + 2 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:2", "medBandage", "medBandage");
//7 + 1 = full
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:0", "addedhealthmechanics:medbag_advanced:1", "medBandage");
//ALL + 1 = ALL+1
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:1", "addedhealthmechanics:medbag_advanced:2", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:2", "addedhealthmechanics:medbag_advanced:3", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:3", "addedhealthmechanics:medbag_advanced:4", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:4", "addedhealthmechanics:medbag_advanced:5", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:5", "addedhealthmechanics:medbag_advanced:6", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:6", "addedhealthmechanics:medbag_advanced:7", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:7", "addedhealthmechanics:medbag_advanced:8", "medBandage");
//ALL + 2 = ALL+2
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:1", "addedhealthmechanics:medbag_advanced:3", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:2", "addedhealthmechanics:medbag_advanced:4", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:3", "addedhealthmechanics:medbag_advanced:5", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:4", "addedhealthmechanics:medbag_advanced:6", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:5", "addedhealthmechanics:medbag_advanced:7", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:6", "addedhealthmechanics:medbag_advanced:8", "medBandage", "medBandage");
//ALL + 3 = ALL+3
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:1", "addedhealthmechanics:medbag_advanced:4", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:2", "addedhealthmechanics:medbag_advanced:5", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:3", "addedhealthmechanics:medbag_advanced:6", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:4", "addedhealthmechanics:medbag_advanced:7", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:5", "addedhealthmechanics:medbag_advanced:8", "medBandage", "medBandage", "medBandage");
//ALL + 4 = ALL+4
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:1", "addedhealthmechanics:medbag_advanced:5", "medBandage", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:2", "addedhealthmechanics:medbag_advanced:6", "medBandage", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:3", "addedhealthmechanics:medbag_advanced:7", "medBandage", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:4", "addedhealthmechanics:medbag_advanced:8", "medBandage", "medBandage", "medBandage", "medBandage");
//ALL + 5 = ALL+3
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:1", "addedhealthmechanics:medbag_advanced:6", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:2", "addedhealthmechanics:medbag_advanced:7", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:3", "addedhealthmechanics:medbag_advanced:8", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
//ALL + 6 = ALL+2
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:1", "addedhealthmechanics:medbag_advanced:7", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:2", "addedhealthmechanics:medbag_advanced:8", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
//Empty + 7 = 7
mod.addShapelessRecipe("addedhealthmechanics:medbag_advanced:1", "addedhealthmechanics:medbag_advanced:8", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage", "medBandage");
