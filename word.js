//CONSTRUCTOR FUNCTION FOR WORD.JS
//Instructions:
//word.js should contain all of the methods which will check the letters guessed vs the random word selected.
//Requesting Letter.js file 
var Letter = require('./letter.js');
//=====================================================================================
//First function
var Word = function(palabras){
	//Variables with an empty array.
	this.palabras = palabras;
	this.letterArray = [];
	this.isthelettersthere = false;

	//Method to find the letter in the word.
	this.lettersInWord = function(){
		for(var i = 0; i <this.palabras.length; i++){
			var theNewLetter = new Letter(this.palabras[i]);
			this.letterArray.push(theNewLetter);
		}
	}
	return letterArray;


//=====================================================================================
//Second Function
	this.findIt =function(){
		var expecting = 0;
		for(var i = 0; i <this.letterArray.length;i++){
			if(this.letterArray[i].shows === true){
				expecting++;
			} else {
				this.isthelettersthere = true;

			}
			return isthelettersthere;
		}
	}

//=====================================================================================
//Third Function
//?
//=====================================================================================
//Fourth Function
//?
}


module.exports = Word;