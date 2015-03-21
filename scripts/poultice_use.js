if (player.isSneaking()) {
  if (player.getMaxHealth() == player.getHealth()) {
    itemstack.setStackSize(itemstack.getStackSize() - 1);
    player.setHealth(Math.min(player.getHealth() + 1, player.getMaxHealth()));
  } else {
    player.sendMessage('You\'re in good shape, no need to patch up.');
  }
}
