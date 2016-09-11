//CONSTRUCTOR FUNCTION FOR WORD.JS
//Instructions:
//word.js should contain all of the methods which will check the letters guessed vs the random word selected.
//Requesting Letter.js file 
var Letter = require('./Letter.js');

var Word = function(palabras){
	//Variables with an empty array.
	this.letterFound = [];
	this.guessed = false;
	//Method to find the letter in the word.
	this.lettersInWord = function(){
		for(var i = 0; i <this.letterFound.length; i++){


		}
	}

};
module.exports = Word;