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

WordCounter.prototype.bubbleSort = function() {

	for (var n = this.listOfWords.length; n > 1; n--) {

		for (var i = 0; i < n - 1; i++) {

			if (this.listOfWords[i].counter > this.listOfWords[i+1].counter) {
				var temp = this.listOfWords[i];
				this.listOfWords[i] = this.listOfWords[i+1];
				this.listOfWords[i+1] = temp;
			}

		}

	}

}


fs.readFile('book.txt', 'utf8', function(err, data){
	if (err) throw err;
	var wordCounter = new WordCounter();
	var words = data.split(' ');

	for (var i in words) {
		words[i].replace('/r/n', '');
		wordCounter.count(words[i]);
	}

	wordCounter.bubbleSort();
	wordCounter.output();

});
