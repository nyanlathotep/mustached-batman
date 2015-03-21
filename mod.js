// instantiate items
mod.addItem("ingredient.js", "normal");
mod.addItem("tincture.js", "food");
mod.addItem("potion.js", "food");
mod.addItem("elixir.js", "food");
mod.addItem("consumable.js", "normal");

// general config/utility stuff
mod.addCreativeTab("Medicine", "addedhealthmechanics:ingredient:0");
mod.loadScript("config.js")
mod.loadScript("alias.js")

// set up recipes
mod.loadScript("alchemy.js")
mod.loadScript("extract.js")
mod.loadScript("reagent.js")
mod.loadScript("medicine.js")
mod.loadScript("tweak.js")