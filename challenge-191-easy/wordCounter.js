var fs = require('fs');

function Word(givenWord) {
	this.word = givenWord;
	this.counter = 1;
}

function WordCounter() {
	this.listOfWords = new Array();
}

WordCounter.prototype.count = function(word) {
	var found = false;
	for (var i in this.listOfWords) {
		if (this.listOfWords[i].word === word) {
			this.listOfWords[i].counter++;
			found = true;
		}
	}
	if (!found) {
		this.listOfWords[this.listOfWords.length] = new Word(word);
	}
}

WordCounter.prototype.output = function() {
	for (var i in this.listOfWords) {
		console.log(this.listOfWords[i].word + ': ' + this.listOfWords[i].counter);
	}	
}


fs.readFile('text.txt', 'utf8', function(err, data){
	if (err) throw err;
	var wordCounter = new WordCounter();
	var words = data.split(' ');

	for (var i in words) {
		words[i].replace('/r/n', '');
		wordCounter.count(words[i]);
	}

	wordCounter.output();

});
