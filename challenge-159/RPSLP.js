var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Your input for the game: ", function(answer) {
	console.log("Your input was:", answer);

	rl.close();
});

