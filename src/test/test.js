var character = require('../js/character')
var expect = require('chai').expect

describe('Character', function(){
  var mycharacter = new character.Character({
    name: 'bert',
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
  })
  it('should return a character object', function(){
    expect(mycharacter).to.be.a('object');
  })
  it('should return a character with a name', function(){
    expect(mycharacter.name).to.be.a('string')
    expect(mycharacter.name).to.equal('bert')
  })
  it('should have an attack value', function(){
    expect(mycharacter.attack).to.be.a('number')
    expect(mycharacter.attack).to.equal(50)
  })
  it('should have a defence value', function(){
    expect(mycharacter.defense).to.be.a('number')
    expect(mycharacter.defense).to.equal(30)
  })
  it('should have a max HP value', function(){
    expect(mycharacter.health).to.be.a('number')
    expect(mycharacter.health).to.equal(100)
  })
  it('should have an alignment', function(){
    expect(mycharacter.alignment).to.be.a('number')
    expect(mycharacter.alignment).to.be.above(0)
    expect(mycharacter.alignment).to.be.below(6)
  })
  it('should have attacks', function(){
    expect(mycharacter.attacks).to.be.a('array')
    expect(mycharacter.attacks).to.have.length(3)
  })
  it('should have attacks with names', function(){
    expect(mycharacter.attacks[0].name).to.be.a('string')
    expect(mycharacter.attacks[1].name).to.be.a('string')
    expect(mycharacter.attacks[2].name).to.be.a('string')
  })
  it('should have attacks with chances to hit', function(){
    expect(mycharacter.attacks[0].chance).to.be.a('number')
    expect(mycharacter.attacks[1].chance).to.be.a('number')
    expect(mycharacter.attacks[2].chance).to.be.a('number')
  })
  it('should have attacks with attack multipliers', function(){
    expect(mycharacter.attacks[0].multiplier).to.be.a('number')
    expect(mycharacter.attacks[1].multiplier).to.be.a('number')
    expect(mycharacter.attacks[2].multiplier).to.be.a('number')
  })
  it('should have phrases', function(){
    expect(mycharacter.phrases).to.be.a('object')
    expect(mycharacter.phrases).to.have.all.keys('win', 'lose')
  })
  it('should populate default values', function(){
    var othercharacter = new character.Character()
  })
})
