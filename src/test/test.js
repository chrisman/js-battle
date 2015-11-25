var character = require('../js/character')
var arena = require('../js/arena')
var expect = require('chai').expect

var mycharacter = new character.Character({
  name: 'bert',
  attack: 50,
  defense: 30,
  health: 500,
  alignment: 1,
  getAttack: function(){
        return this.attacks[Math.floor(Math.random() * 3)]
  },
  attacks: [
    {name: "a disapproving look", chance:0.7, multiplier:1},
    {name: "a frown and a finger wagging", chance:0.25, multiplier:2},
    {name: "a stern talking to", chance:0.05, multiplier:6}],
  phrases: {
    win: "a triumphant day!",
    lose: "you curr! you scallyway! you scoundral!"
  }
})

var othercharacter = new character.Character()

describe('Character', function(){
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
    expect(mycharacter.health).to.equal(500)
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
    expect(othercharacter.phrases).to.be.a('object')
    expect(othercharacter.phrases).to.have.all.keys('win', 'lose')
    expect(othercharacter.attacks[0].multiplier).to.be.a('number')
    expect(othercharacter.attacks[1].multiplier).to.be.a('number')
    expect(othercharacter.attacks[2].multiplier).to.be.a('number')
    expect(othercharacter.attacks[0].chance).to.be.a('number')
    expect(othercharacter.attacks[1].chance).to.be.a('number')
    expect(othercharacter.attacks[2].chance).to.be.a('number')
    expect(othercharacter.attacks[0].name).to.be.a('string')
    expect(othercharacter.attacks[1].name).to.be.a('string')
    expect(othercharacter.attacks[2].name).to.be.a('string')
    expect(othercharacter.attacks).to.be.a('array')
    expect(othercharacter.attacks).to.have.length(3)
    expect(othercharacter.alignment).to.be.a('number')
    expect(othercharacter.alignment).to.be.above(0)
    expect(othercharacter.alignment).to.be.below(6)
    expect(othercharacter.health).to.be.a('number')
    expect(othercharacter.health).to.equal(500)
    expect(othercharacter.defense).to.be.a('number')
    expect(othercharacter.defense).to.equal(30)
    expect(othercharacter.attack).to.be.a('number')
    expect(othercharacter.attack).to.equal(50)
    expect(othercharacter.name).to.be.a('string')
    expect(othercharacter.name).to.equal('berthamamew')
  })
  it('should return an attack',function(){
    expect(mycharacter.getAttack())
    expect(mycharacter.getAttack()).to.be.a('object')
    expect(mycharacter.getAttack().name).to.be.a('string')
  })
})

describe('arena', function(){
  it('should take two characters as arguments')
})

arena(mycharacter, othercharacter)
