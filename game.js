//CONSTRUCTOR FUNCTION FOR GAME.JS
//Instruction:
//Your game.js file will randomly select a word for the player.
var Word = require("./word.js");


var Game = function(){
	var secretWords = ["Bass","Guitar","Drums","Bongos","Congas","Maracas","Violin","Microphone","Singer"];

	var randomWord = secretWords[Math.floor(Math.random() * secretWords.length)];
	console.log(secretWords);
}

module.exports = Game;