var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var possibilities = ["rock", "paper", "scissors", "lizard", "spock"];

var validateChoice = function(userChoice) {
    var validated = false;
    for (var i = 0; i < possibilities.length; i++) {
        if (userChoice === possibilities[i])
            validated = true;
    }

    return validated;
}

rl.question("Your input for the game: ", function(answer) {
    if (validateChoice(answer)) {
        var computerChoice = Math.floor(Math.random()*4);
        console.log("Your choice was: " + answer);
        console.log("Computer choice was: " + possibilities[computerChoice]);
    } else {
        console.log("You entered the wrong input. Try again!");
    }


	rl.close();
});

