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

addToCreative[2] = true;
textureFile[2] = "regen_heart";
information[2] = "§fNeeds to be charged with 5 levels.|§7Strength: 1/2 Heart Capsule|Limit: 5 Heart Capsules|Bonus: None";
onRightClick[2] = "mod.loadScript('regen_heart_charge.js');";

addToCreative[3] = true;
textureFile[3] = "regen_heart";
information[3] = "§fNeeds to be charged with 10 levels.|§7Strength: 1/2 Heart Capsule|Limit: 10 Heart Capsules|Bonus: Guarantees 5 & 1/2 Heart Capsules";
onRightClick[3] = "mod.loadScript('regen_heart_charge.js');";

addToCreative[4] = true;
textureFile[4] = "regen_heart";
information[4] = "§fNeeds to be charged with 15 levels.|§7Strength: 1 Heart Capsule|Limit: 15 Heart Capsules|Bonus: Guarantees 11 Heart Capsules";
onRightClick[4] = "mod.loadScript('regen_heart_charge.js');";

addToCreative[5] = true;
textureFile[5] = "regen_heart_gold";
information[5] = "§fFully charged!|§7Strength: 1/2 Heart Capsule|Limit: 5 Heart Capsules|Bonus: None";
onRightClick[5] = "mod.loadScript('regen_heart_use.js');";

addToCreative[6] = true;
textureFile[6] = "regen_heart_full";
information[6] = "§fFully charged!|§7Strength: 1/2 Heart Capsule|Limit: 10 Heart Capsules|Bonus: Guarantees 5 & 1/2 Heart Capsules";
onRightClick[6] = "mod.loadScript('regen_heart_use.js');";

addToCreative[7] = true;
textureFile[7] = "regen_heart_ender";
information[7] = "§fFully charged!|§7Strength: 1 Heart Capsule|Limit: 15 Heart Capsules|Bonus: Guarantees 11 Heart Capsules"";
onRightClick[7] = "mod.loadScript('regen_heart_use.js');";

addToCreative[31] = true;
textureFile[31] = "potion_init";
onRightClick[31] = "player.getNbt().setInt('PlayerPersisted/AHMcooldown', 0); player.sendMessage('Medicine initialized.'); itemstack.setStackSize(0);";
