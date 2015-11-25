module.exports = function(a, b) {
  var contestants = arguments
  console.log(contestants[0].name + ' attacks ' + contestants[1].name);
  myAttack = contestants[0].getAttack()
  randomRoll = Math.random()

  if (+myAttack.chance > +randomRoll) {
    console.log(myAttack.chance + ' is greater than ' + randomRoll);
    console.log(contestants[0].name + ' hits ' + contestants[1].name + ' with ' + myAttack.name);
    alignmentBonus = getAlignmentBonus(contestants[0].alignment, contestants[1].alignment);
    console.log('Alignment: ' + contestants[0].alignment);
    console.log('Hit multiplier: ' + myAttack.multiplier);
    console.log('Alignment bonus: ' + alignmentBonus);
    console.log(getTotalDamage(
      contestants[0].attack,
      contestants[1].defense,
      myAttack.multiplier,
      alignmentBonus
    ));
  } else {
    console.log(contestants[0].name + ' misses!');
  }

  return
}

var getAlignmentBonus = function(x, y) {
  degree = Math.abs(x - y)
  return (degree === 0) ? 0.5 : (degree <= 2) ? 2 : 1
}

var getLiklihoods = function(contestant) {
  var collector = []
  for (var i = 0; i < contestant.attacks.length; i++)
    collector.push(contestant.attacks[i].chance)
  return collector
}

var getTotalDamage = function(attack, defense, multiplier, alignmentBonus){
  return 50 * (attack/defense) * alignmentBonus * multiplier
}
