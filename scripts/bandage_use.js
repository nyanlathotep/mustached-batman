if (player.isSneaking()) {
  if (player.getMaxHealth() == player.getHealth()) {
    itemstack.setStackSize(itemstack.getStackSize() - 1);
    player.setHealth(player.getHealth() + 3);
  } else {
    player.sendMessage('You\'re in good shape, no need to patch up.');
  }
}
