var type = itemstack.getDamage()
var level_req = 5;

if (type == 3) {
  level_req = 10;
} else if (type == 4) {
  level_req = 20;
}

var level_cur = player.getExperienceLevel()

if (level_cur > level_req) {
  player.removeExperienceLevel(level_req)
  player.sendMessage("Heart charged!")
  itemstack.setDamage(type + 3)
} else {
  player.sendMessage("You do not have enough XP to charge this heart. You need " + level_req + " levels.")
}