// Important Variables

const selectionOptions = ["rock", "paper", "scissors"];

// Computer Selection
function computerSelection(array) {
	const choice = array[Math.floor(Math.random() * array.length)];

	return choice;
}

// Player Selection

function playerSelection() {
	const userSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
	return userSelection;
}

// Game

function round(computerSelection, playerSelection) {
	if ((playerSelection === "rock") & (computerSelection === "paper")) {
		return "You Lose! paper beats rock";
	} else if ((playerSelection === "rock") & (computerSelection === "rock")) {
		return "Tie! rock vs rock";
	} else if (
		(playerSelection === "rock") &
		(computerSelection === "scissors")
	) {
		return "You win! rock beats scissors";
	} else if (
		(playerSelection === "paper") &
		(computerSelection === "scissors")
	) {
		return "You lose! scissors beats paper";
	} else if ((playerSelection === "paper") & (computerSelection === "paper")) {
		return "Tie! paper vs paper";
	} else if ((playerSelection === "paper") & (computerSelection === "rock")) {
		return "You win! paper beats rock";
	} else if (
		(playerSelection === "scissors") &
		(computerSelection === "rock")
	) {
		return "You lose! rock beats scissors";
	} else if (
		(playerSelection === "scissors") &
		(computerSelection === "scissors")
	) {
		return "Tie! scissors vs scissors";
	} else {
		return "You win! scissors beats paper";
	}
}

console.log(round(computerSelection(selectionOptions), playerSelection()));
