from json import load
from re import match

fp = open('gen.json', 'r')
data = load(fp)
fp.close()

recipeFile = open(data['recipeFile'], 'w')

try:
  langFile = open(data['langFile'], 'r')
  langEntries = {}
  for line in langFile:
    line = line.strip().partition('=')
    langEntries[line[0]] = line[2]
  langFile.close()
except IOError:
  langEntries = {}

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
      name = tier['name'] % {'effect': effect['name'], 'group': data['groups'][group]}
      #langFile.write('item.%s%d.name=%s\n' % (tier['id'], meta, name))
      langEntries['item.%s%d.name' % (tier['id'], meta)] = name

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
      amplitude = 0 if not effect['strong'] else tier[group][1] + effect.get('bonus', 0)
      tierFile.write('potionAmplifier[%d] = %d;\n' % (meta, amplitude))
      tierFile.write('potionProbability[%d] = 1;\n' % meta)
      tierFile.write('hunger[%d] = 0\n' % meta)
      if group != 'normal':
        tierFile.write('hasEffect[%d] = true;\n' % meta)
      tierFile.write('information[%d] = "Duration: %s";\n\n' % (meta, duration))
      meta += 1

    oreDict = tier['oreDict'] % effect['effect']
    if lastTier:
      lastOreDict = lastTier['oreDict'] % effect['effect']
    for group in potions:
      recipeFile.write('mod.addToOreDictionary("%s", "%s");\n' % (oreDict, potions[group]))

    recipeFile.write('\n')

    if 'craft' in tier:
      recipeFile.write((tier['craft'] + '\n') % {'output': potions['normal'], 'input': effect['extract'], 'reagent': effect['reagent']})
    if 'strength' in tier and effect['strong']:
      recipeFile.write((tier['strength'] + '\n') % {'output': potions['strong'], 'input': ':' + oreDict})
    if 'length' in tier:
      recipeFile.write((tier['length'] + '\n') % {'output': potions['long'], 'input': ':' + oreDict})
    if 'tier' in tier:
      recipeFile.write((tier['tier'] + '\n') % {'output': potions['normal'], 'input': ':' + lastOreDict})

    recipeFile.write('\n')

  lastTier = tier

  for line in tier['postamble']:
    tierFile.write(line + '\n')

  tierFile.close()

for key in data['langExtras']:
  langEntries[key] = data['langExtras'][key]
langFile = open(data['langFile'], 'w')

def keyFunc(x):
  x = x.split('.')[1]
  x = match('(\w+)(\d+)', x).groups()
  return '%s%02d' % (x[0], int(x[1]))

for key in sorted(langEntries.keys(), key = keyFunc):
  langFile.write('%s=%s\n' % (key, langEntries[key]))
langFile.close()

for line in data['recipePostamble']:
  recipeFile.write(line + '\n')
recipeFile.close()