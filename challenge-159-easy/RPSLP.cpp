#include "RPSLP.h"

string possibilities[5] = {"rock", "paper", "scissors", "lizard", "spock"};

bool RPSLP::validateChoice(string humanInput) {
	bool valid = false;
	for (int i = 0; i < 5; i++) {
		if ( humanInput == possibilities[i]) {
			valid = true;
		}
	}

	return valid;
}

int RPSLP::getWinner(string humanChoice, string computerChoice) {
	if (humanChoice == computerChoice) {
		return 0;
	}

	return 0;
}

string RPSLP::getComputerChoice() {
	int index = rand() % 5 + 1;
	return possibilities[index];
}

void RPSLP::runGame(int rounds) {
	for (int round = 1; round <= rounds; round++) {
		string human, computer = "";
		cout << "Your input for the round " << round << ": ";
		cin >> human;

		if (validateChoice(human)) {
			computer = getComputerChoice();
			cout << "Human choice was: " << human << endl;
			cout << "Computer choice was: " << computer << endl;
		} else {
			cout << "BAH!" << endl;
		}

		cout << endl << "Round " << round << " finished!!" << endl;
	}
}
