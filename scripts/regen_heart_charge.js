var type = itemstack.getDamage();
var level_req = 5;

if (type == 3) {
  level_req = 10;
} else if (type == 4) {
  level_req = 20;
}

level_req = level_req * itemstack.getStackSize();

var level_cur = player.getExperienceLevel();

if (level_cur >= level_req) {
  player.removeExperienceLevel(level_req);
  var heart_lang = "s";
  if (itemstack.getStackSize() == 1) {
    heart_lang = "";
  }
  player.sendMessage("Heart" + heart_lang + " charged!");
  itemstack.setDamage(type + 3);
} else {
  var heart_lang = "these hearts";
  if (itemstack.getStackSize() == 1) {
    heart_lang = "this heart"
  }
  player.sendMessage("You do not have enough XP to charge " + heart_lang + ". You need " + level_req + " levels.");
}