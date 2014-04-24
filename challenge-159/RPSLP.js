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

var chooseTheWinner = function(human, computer) {
    if (human === computer) {
        return 0;
    }

    switch(human) {
        case "rock":
            if (computer === "scissors") {
                return 1;
            } else if (computer === "lizard") {
                return 1;
            } else {
                return 2;
            }
        case "paper":
            if (computer === "rock") {
                return 1;
            } else if (computer === "spock") {
                return 1;
            } else {
                return 2;
            }
        case "scissors":
            if (computer === "paper") {
                return 1;
            } else if (computer === "lizard") {
                return 1;
            } else {
                return 2;
            }
        case "lizard":
            if (computer === "paper") {
                return 1;
            } else if (computer === "spock") {
                return 1;
            } else {
                return 2;
            }
        case "spock":
            if (computer === "scissors") {
                return 1;
            } else if (computer === "rock") {
                return 1;
            } else {
                return 2;
            }
    }

    return 0;

}

rl.question("Your input for the game: ", function(answer) {
    if (validateChoice(answer)) {
        var computerChoice = Math.floor(Math.random()*4);
        console.log("Your choice was: " + answer);
        console.log("Computer choice was: " + possibilities[computerChoice]);
        var winner = chooseTheWinner(answer, possibilities[computerChoice]);
        if (winner === 1) {
            console.log("You have won!");
        } else if (winner === 2) {
            console.log("The computer has won!");
        } else {
            console.log("Tie!!");
        }
    } else {
        console.log("You entered the wrong input. Try again!");
    }


	rl.close();
});

