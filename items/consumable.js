name = "consumable";
creativeTab = "Medicine";
maxStack = 8;

addToCreative[0] = true;
textureFile[0] = "meds_poultice";
information[0] = "A makeshift bandage.|Sneak-right click to apply.";
onRightClick[0] = "mod.loadScript('poultice_use.js');";

addToCreative[1] = true;
textureFile[1] = "meds_bandage";
information[1] = "A treated adhesive bandage.|Sneak-right click to apply.";
onRightClick[1] = "mod.loadScript('bandage_use.js');";

addToCreative[31] = true;
textureFile[31] = "potion_init";
onRightClick[31] = "player.getNbt().setInt('PlayerPersisted/AHMcooldown', 0); player.sendMessage('Medicine initialized.'); itemstack.setStackSize(0);";
