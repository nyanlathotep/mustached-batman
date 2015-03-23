//Extra compatability tweaking
mod.removeShapelessRecipe("ExtrabiomesXL:extrabiomes.food:0", "minecraft:milk_bucket", "minecraft:sugar", "minecraft:dye:3");
mod.removeRecipe("minecraft:brewing_stand", 3, 2, "minecraft:air", "minecraft:blaze_rod", "minecraft:air", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone")

//make carts use slimeball oredict
mod.removeRecipe("MCP_Wheel:wooden_wheel", 3, 3, "minecraft:stick", "minecraft:stick", "minecraft:stick", "minecraft:stick", "minecraft:slime_ball", "minecraft:stick", "minecraft:stick", "minecraft:stick", "minecraft:stick")
mod.addRecipe("MCP_Wheel:wooden_wheel", 3, 3, ":stickWood", ":stickWood", ":stickWood", ":stickWood", ":slimeball", ":stickWood", ":stickWood", ":stickWood", ":stickWood")
mod.removeRecipe("MCP_Cart:wooden_cart", 3, 2, "MCP_Wheel:wooden_wheel", "minecraft:boat", "minecraft:stick", "MCP_Wheel:wooden_wheel", "minecraft:slime_ball", "minecraft:stick")
mod.addRecipe("MCP_Cart:wooden_cart", 3, 2, "MCP_Wheel:wooden_wheel", "minecraft:boat", ":stickWood", "MCP_Wheel:wooden_wheel", ":slimeball", ":stickWood")
