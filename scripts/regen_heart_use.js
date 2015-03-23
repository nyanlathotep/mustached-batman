var type = itemstack.getDamage();
var health_max = 10;
var health_min = 0;
var health_add = 1;

if (type == 6) {
  health_max = 20;
  health_min = 10;
} else if (type == 7) {
  health_max = 30;
  health_min = 20;
  health_add = 2;
}

var health_cur = player.getMaxHealth();

if (health_cur >= health_max) {
  player.sendMessage("This heart is not strong enough to improve your health.");
} else {
  if (health_cur < health_min) {
    player.setMaxHealth(Math.min(health_min + health_add, health_max));
  } else {
    player.setMaxHealth(Math.min(health_cur + health_add, health_max));
  }
  player.setHealth(player.getMaxHealth());
  player.sendMessage("You've restored some of your maximum health.");
  itemstack.setStackSize(itemstack.getStackSize() - 1);
}