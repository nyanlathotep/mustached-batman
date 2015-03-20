name = "consumable";
creativeTab = "Medicine";
maxStack = 8;

addToCreative[0] = true;
textureFile[0] = "meds_poultice";
information[0] = "A makeshift bandage.|Sneak-right click to apply.";
onRightClick[0] = "if (player.isSneaking()) {if (player.getMaxHealth() - player.getHealth() > 0) {itemstack.setStackSize(itemstack.getStackSize() - 1); player.setHealth(player.getHealth() + 1);} else {player.sendMessage('You\\'re in good shape, no need to patch up.');}}";

addToCreative[1] = true;
textureFile[1] = "meds_bandage";
information[1] = "A treated adhesive bandage.|Sneak-right click to apply.";
onRightClick[1] = "if (player.isSneaking()) {if (player.getMaxHealth() - player.getHealth() > 0) {itemstack.setStackSize(itemstack.getStackSize() - 1); player.setHealth(player.getHealth() + 3);} else {player.sendMessage('You\\'re in good shape, no need to patch up.');}}";

addToCreative[31] = true;
textureFile[31] = "test_gem";
onRightClick[31] = "player.sendMessage(world.getTime())";