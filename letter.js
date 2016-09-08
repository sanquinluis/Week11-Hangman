//CONSTRUCTOR FUNCTION FOR LETTER.JS
//Instructions:
//Letter.js Should control whether or not a letter appears as a "_" or as itself on-screen.
var letras = process.argv[3];
console.log(letras);
var Letter = function(letras){

	this.theLetters = letras;
	//letter appears
	this.shows = false;
	//Method that will tell us if the letter is in the word.
	this.letterShows = function(theLetters){
		console.log("The letter is inside letterShows" + theLetters);
		if(this.theLetters === false){
			return "_";
		} else {
			return theLetters;
	}
}
var test = new Letter("test");
var x = test.letterShows(theLetters);
console.log(x + "test");
module.exports = Letter;