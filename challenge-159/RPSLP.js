var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var possibilities = ["rock", "paper", "scissors", "lizard", "spock"];

rl.question("Your input for the game: ", function(answer) {
    var computerChoice = Math.floor(Math.random()*4);
	console.log("Your choice was: " + answer);
    console.log("Computer choice was: " + possibilities[computerChoice]);


	rl.close();
});

