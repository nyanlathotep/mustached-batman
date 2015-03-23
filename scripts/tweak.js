//Extra compatability tweaking
mod.removeShapelessRecipe("ExtrabiomesXL:extrabiomes.food:0", "minecraft:milk_bucket", "minecraft:sugar", "minecraft:dye:3");
mod.removeRecipe("minecraft:brewing_stand", 3, 2, "minecraft:air", "minecraft:blaze_rod", "minecraft:air", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone")

// add wooden tool rod to stick oredict
mod.addToOreDictionary("stickWood", "TConstruct:toolRod:0")

//make carts use slimeball oredict
mod.addRecipe("MCP_Wheel:wooden_wheel", 3, 3, ":stickWood", ":stickWood", ":stickWood", ":stickWood", ":slimeball", ":stickWood", ":stickWood", ":stickWood", ":stickWood")
mod.addRecipe("MCP_Cart:wooden_cart", 3, 2, "MCP_Wheel:wooden_wheel:0", "minecraft:boat:0", ":stickWood", "MCP_Wheel:wooden_wheel:0", ":slimeball", ":stickWood")
