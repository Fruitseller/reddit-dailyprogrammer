#ifndef RPSLP_H
#define RPSLP_H

#include <iostream>
#include <string>
#include <stdlib.h>

using namespace std;

class RPSLP {
protected:
	int humanWins, ComputerWins, Ties;
	bool validateChoice(string);
	int getWinner(string, string);
	string getComputerChoice();
public:
	void runGame(int);
};

#endif
