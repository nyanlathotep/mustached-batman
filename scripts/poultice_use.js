if (player.isSneaking()) {
  if (player.getMaxHealth() > player.getHealth()) {
    var nextUse = player.getNbt().getInt("AHMcooldown");
    player.sendMessage(nextUse);
    var curTime = world.getTime();
    player.sendMessage(curTime);
    if (nextUse > curTime) {
      var interval = nextUse - curTime;
      if (interval < 70) {
        player.sendMessage("Your wounds have been treated recently, wait a few seconds.");
      } else {
        player.sendMessage("Your wounds have been treated recently, wait a while.");          
      }
    } else {
      itemstack.setStackSize(itemstack.getStackSize() - 1);
      player.setHealth(Math.min(player.getHealth() + 1, player.getMaxHealth()));
      player.getNbt().setInt("AHMcooldown", curTime + 200);
    }
  } else {
    player.sendMessage("You're in good shape, no need to patch up.");
  }
}
