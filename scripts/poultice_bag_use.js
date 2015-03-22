if (player.isSneaking()) {
  if (interactPlayer.getMaxHealth() > interactPlayer.getHealth()) {
    var nextUse = interactPlayer.getNbt().getInt("AHMcooldown");
    var curTime = world.getTime();
    if (nextUse > curTime) {
      var interval = nextUse - curTime;
      if (interval < 70) {
        player.sendMessage(interactPlayer.getUsername() + "'s wounds have been treated recently, wait a few seconds.");
      } else {
        player.sendMessage(interactPlayer.getUsername() + "'s wounds have been treated recently, wait a while.");          
      }
    } else {
      itemstack.damageItem(1);
      interactPlayer.setHealth(Math.min(interactPlayer.getHealth() + config.getInt("poulticeBagRecovery", "medicine"), interactPlayer.getMaxHealth()));
      interactPlayer.getNbt().setInt("AHMcooldown", curTime + config.getInt("poulticeBagCooldown", "medicine"));
    }
  } else {
    player.sendMessage(interactPlayer.getUsername() + " is in good shape.");
  }
} else {
  var deltaHealth = interactPlayer.getMaxHealth() - interactPlayer.getHealth();
  if (deltaHealth == 0) {
    player.sendMessage(interactPlayer.getUsername() + " is in good shape.");    
  } else if (deltaHealth < config.getInt("poulticeBagRecovery", "medicine")) {
    player.sendMessage(interactPlayer.getUsername() + " is a bit banged up.");   
  } else if (deltaHealth < 9) {
    player.sendMessage(interactPlayer.getUsername() + " has minor wounds.");   
  } else if (deltaHealth < 17) {
    player.sendMessage(interactPlayer.getUsername() + " has severe wounds.");   
  } else {
    player.sendMessage(interactPlayer.getUsername() + " is in critical condition.");   
  }
}
