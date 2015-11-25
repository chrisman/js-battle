$ = require('jquery')
arena = require('./arena')
character = require('./character')

var playerOne = new character.Character();
var playerTwo = new character.Character();

$(document).ready(function(){
  console.log('go time');
  $('#area').val( "BATTLES")
  arena(playerOne, playerTwo)
})
