if (player.isSneaking()) {
  if (player.getMaxHealth() > player.getHealth()) {
    var nextUse = player.getNbt().getInt("PlayerPersisted/AHMcooldown");
    var curTime = world.getTime();
    if (nextUse > curTime) {
      var interval = nextUse - curTime;
      if (interval < 70) {
        player.sendMessage("Your wounds have been treated recently, wait a few seconds.");
      } else {
        player.sendMessage("Your wounds have been treated recently, wait a while.");          
      }
    } else {
      itemstack.setStackSize(itemstack.getStackSize() - 1);
      player.setHealth(Math.min(player.getHealth() + config.getInt("poulticeRecovery", "medicine"), player.getMaxHealth()));
      player.getNbt().setInt("PlayerPersisted/AHMcooldown", curTime + config.getInt("poulticeCooldown", "medicine"));
    }
  } else {
    player.sendMessage("You're in good shape, no need to patch up.");
  }
}
