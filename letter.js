//CONSTRUCTOR FUNCTION FOR LETTER.JS
//Instructions:
//Letter.js Should control whether or not a letter appears as a "_" or as itself on-screen.
//Accessing the Game random words.
var Word = require("./word.js");
var Game = require("./game.js");
//=====================================================================================
var Letter = function(letras){

	this.theLetters = letras;
	//letter appears
	this.shows = false;
	//Method that will tell us if the letter appears or if "_" will appear.
	this.letterShows = function(theLetters){
		if(theLetters === this.theLetters){
			return theLetters;
		} else {
			return "_";
		}
	}
};
//=====================================================================================
module.exports = Letter;