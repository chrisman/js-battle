module.exports = function(a, b) {
  handleWinning(getWinner(a,b))
  return
}

var handleWinning = function(winner) {
  console.log(winner.name + ' wins the battle!');
  console.log(winner.name + ' cries out, ' + winner.phrases.win);
}

var getWinner = function(a, b) {
  if (a.health < 0) return b

  handleBeginRound(a, b)

  myAttack = a.getAttack()
  randomRoll = Math.random()

  if (+myAttack.chance > +randomRoll) {
    alignmentBonus = getAlignmentBonus(a.alignment, b.alignment);
    damage = getTotalDamage(
      a.attack,
      b.defense,
      myAttack.multiplier,
      alignmentBonus
    )
    b.health -= damage
    handleHit(a, b, myAttack, damage)
  } else {
    handleMiss(a, b)
  }
  return getWinner(b, a)
}

var handleBeginRound = function(a, b){
  console.log(
    a.name + ' prepares to attack.'
  );
}

var handleMiss = function(a){
  console.log(
    a.name + ' misses!'
  );
}

var handleHit = function(hitter, gothit, attack, damage){
  console.log(
    hitter.name + ' hits ' +
    gothit.name + ' with ' +
    attack.name + ' for ' +
    damage + ' damage!'
  );
  console.log(
    '[' +
    gothit.name + ': ' +
    gothit.health + ' HP' +
    ']'
  );
}

var getAlignmentBonus = function(x, y) {
  degree = Math.abs(x - y)
  return (degree === 0) ? 0.5 : (degree <= 2) ? 2 : 1
}

var getTotalDamage = function(attack, defense, multiplier, alignmentBonus){
  return Math.floor(50 * (attack/defense) * alignmentBonus * multiplier)
}
