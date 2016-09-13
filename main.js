//CONSTRUCTOR FUNCTION
//Instruction:
//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;

	prompt.start(); //starting the prompt
	grabLetters();
	letTheGameBegin();
//=====================================================================================
		function letTheGameBegin(){

			if(hangmanGame.currentWord.grabLetters() === comparingWords()){
				console.log();
				return;
			}
			//if the user is out of gusses!
			if(userGuess <= 0){
				console.log("Game Over!");
				return;
			}

	prompt.get([""], function(err, result){


	})
}





//var guesses = 10;
//need to use inquire.prompt***
//use a recursive call of the funciton
//call the inquire function
//ending case is important
//


