var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});



rl.question("How many inputs will you choose: ", function(numberOfInputs) {
    
    console.log("Your choice was: " + numberOfInputs);

	rl.close();
});

