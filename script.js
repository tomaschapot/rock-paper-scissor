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

// Round

function playRound(computerSelection, playerSelection) {
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

//Game
let playerScoreCounter = 0;
let computerScoreCounter = 0;

function game(round) {
	for (let i = 0; i < 5; i++) {
		const result = round(
			computerSelection(selectionOptions),
			playerSelection()
		);
		if (/^You win/.test(result)) {
			playerScoreCounter++;
		} else if (/^Tie/.test(result)) {
			("");
		} else {
			computerScoreCounter++;
		}
		console.log(result);
		console.log(`Player Score:${playerScoreCounter}`);
		console.log(`PC Score:${computerScoreCounter}`);
	}
}

game(playRound);

//result

function result(computerScoreCounter, playerScoreCounter) {
	if (computerScoreCounter > playerScoreCounter) {
		console.log("You Lose, Game Over");
	} else if (playerScoreCounter > computerScoreCounter) {
		console.log("You Win, Congratz");
	} else {
		console.log("There is a Tie");
	}
}

result(computerScoreCounter, playerScoreCounter);
