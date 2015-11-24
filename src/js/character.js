/*
character.js
*/

var defaultObj = {
  name: 'berthamamew',
  attack: 50,
  defense: 30,
  health: 100,
  alignment: 1,
  attacks: [
    {name: "a disapproving look", chance:0.7, multiplier:1},
    {name: "a frown and a finger wagging", chance:0.25, multiplier:2},
    {name: "a stern talking to", chance:0.05, multiplier:6}],
  phrases: {
    win: "a triumphant day!",
    lose: "you curr! you scallyway! you scoundral!"
  }
}
module.exports = {
  // console.log(defaultObj);
  Character: function(obj){
    // console.log(obj);
    this.name = obj.name || defaultObj.name
    this.attack = obj.attack || defaultObj.attack
    // console.log(typeof this.attack);
    this.defense = obj.defense || defaultObj.defense
    this.health = obj.health || defaultObj.health
    this.attacks = obj.attacks || defaultObj.attacks
    this.alignment = obj.alignment || defaultObj.alignment
    this.phrases = obj.phrases || defaultObj.phrases
    return this
  }
}
