from json import load

fp = open('gen.json', 'r')
data = load(fp)
fp.close()

recipeFile = open('gen/recipe.js', 'w')
langFile = open('gen/en_US.lang', 'w')

lastTier = None
for tier in data['tiers']:
  meta = 0
  tierFile = open(tier['file'], 'w')
  tierFile.write('name = "%s";\ncreativeTab = "Medicine";\nmaxStack = 1;\n\n' % tier['id'])
  for effect in data['effects']:
    potions = {}
    groups = ['normal', 'long']
    if effect['strong']:
      groups += ['strong']
    for group in groups:
      # internal ID for later
      potions[group] = "addedhealthmechanics:%s:%d" % (tier['id'], meta)

      # lang file entry
      name = tier['name'] % {'effect': effect['name'], 'group': data['language'][group]}
      langFile.write('item.%s%d.name=%s\n' % (tier['id'], meta, name))

      # tier file entry
      duration = tier[group][0]
      if duration >= 60:
        duration = "%dm%ds" % (duration / 60, duration % 60)
      else:
        duration = "%ds" % duration

      tierFile.write('addToCreative[%d] = true;\n' % meta)
      tierFile.write('textureFile[%d] = "%s";\n' % (meta, tier['texture'] % effect['color']))
      tierFile.write('alwaysEdible[%d] = true;\n' % meta)
      tierFile.write('usingAction[%d] = "drink";\n' % meta)
      tierFile.write('potion[%d] = "%s";\n' % (meta, effect['effect']))
      tierFile.write('potionDuration[%d] = %d;\n' % (meta, tier[group][0]))
      tierFile.write('potionAmplifier[%d] = %d;\n' % (meta, tier[group][1] + effect.get('bonus', 0)))
      tierFile.write('potionProbability[%d] = 1;\n' % meta)
      tierFile.write('hunger[%d] = 0\n' % meta)
      tierFile.write('information[%d] = "Duration: %s";\n\n' % (meta, duration))

      meta += 1

    oreDict = tier['oreDict'] % effect['effect']
    if lastTier:
      lastOreDict = lastTier['oreDict'] % effect['effect']
    for group in potions:
      recipeFile.write('mod.addToOreDictionary("%s", "%s");\n' % (oreDict, potions[group]))

    recipeFile.write('\n')

    if 'craft' in tier:
      recipeFile.write((tier['craft'] + '\n') % (potions['normal'], effect['extract']))
    if 'strength' in tier and effect['strong']:
      recipeFile.write((tier['strength'] + '\n') % (potions['strong'], ':' + oreDict))
    if 'length' in tier:
      recipeFile.write((tier['length'] + '\n') % (potions['long'], ':' + oreDict))
    if 'tier' in tier:
      recipeFile.write((tier['tier'] + '\n') % (potions['normal'], ':' + lastOreDict))

    recipeFile.write('\n')

  lastTier = tier
  tierFile.close()
recipeFile.close()
langFile.close()