if (itemstack.getDamage() == 8) {
  player.sendMessage("The kit is empty.")
} else {
  if (player.isSneaking()) {
    if (interactPlayer.getMaxHealth() > interactPlayer.getHealth()) {
      var nextUse = interactPlayer.getNbt().getInt("PlayerPersisted/AHMcooldown");
      var curTime = world.getTime();
      if (nextUse > curTime) {
        var interval = nextUse - curTime;
        interactPlayer.sendMessage(player.getUsername() + " examines your wounds.");
        if (interval < 70) {
          player.sendMessage(interactPlayer.getUsername() + "'s wounds have been treated recently, wait a few seconds.");
        } else {
          player.sendMessage(interactPlayer.getUsername() + "'s wounds have been treated recently, wait a while.");          
        }
      } else {
        player.sendMessage("You apply a bandage to " + interactPlayer.getUsername() + ".")
        interactPlayer.sendMessage(player.getUsername() + " applies a bandage to your wounds.");
        itemstack.damageItem(1);
        interactPlayer.setHealth(Math.min(interactPlayer.getHealth() + config.getInt("bandageBagRecovery", "medicine"), interactPlayer.getMaxHealth()));
        interactPlayer.getNbt().setInt("PlayerPersisted/AHMcooldown", curTime + config.getInt("bandageBagCooldown", "medicine"));
      }
    } else {
      interactPlayer.sendMessage(player.getUsername() + " examines your wounds.");
      player.sendMessage(interactPlayer.getUsername() + " is in good shape.");
    }
  } else {
    var deltaHealth = interactPlayer.getMaxHealth() - interactPlayer.getHealth();
    interactPlayer.sendMessage(player.getUsername() + " examines your wounds.");
    if (deltaHealth == 0) {
      player.sendMessage(interactPlayer.getUsername() + " is in good shape.");    
    } else if (deltaHealth < config.getInt("bandageBagRecovery", "medicine")) {
      player.sendMessage(interactPlayer.getUsername() + " is a bit banged up.");   
    } else if (deltaHealth < 9) {
      player.sendMessage(interactPlayer.getUsername() + " has minor wounds.");   
    } else if (deltaHealth < 17) {
      player.sendMessage(interactPlayer.getUsername() + " has severe wounds.");   
    } else {
      player.sendMessage(interactPlayer.getUsername() + " is in critical condition.");   
    }
  }
}