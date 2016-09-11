//CONSTRUCTOR FUNCTION FOR GAME.JS
//Instruction:
//Your game.js file will randomly select a word for the player.
var Word = require("./Word.js");
var secretWords = ["Bass","Guitar","Drums","Bongos","Congas","Maracas","Violin","Microphone","Singer"];

var Game = function(){

	var randomWord = secretWords[Math.floor(Math.random() * secretWords.length)];
	console.log(secretWords);
}
module.exports = Game;