//CONSTRUCTOR FUNCTION
//Instruction:
//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;

	prompt.start(); //starting the prompt

	letTheGameBegin();
//=====================================================================================
		function letTheGameBegin(){
			
			if(hangmanGame.currentWord.grabLetters() != comparingWords()){
				console.log("you already tried that letter");
				return;
			}
			//if the user is out of gusses!
			if(userGuess <= 0){
				console.log("Game Over!");
				return;
			}
}





//var guesses = 10;
//need to use inquire.prompt***
//use the THEN... after he inquire
//use a recursive call of the funciton
//call the inquire function
//ending case is important
//


