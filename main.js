//CONSTRUCTOR FUNCTION
//Instruction:
//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
var prompt = require("prompt");
var game = require('./game.js');

// var theHangman = new Game();

	prompt.start(); //starting the prompt

		function letTheGameBegin(userGuess){
			//if the user is out of gusses!
			if(userGuess <= 0){
				console.log("Game Over!");
				return;
			}
			if(hangMan.currentWord.foundIt()){
				console.log("You have won!");
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


