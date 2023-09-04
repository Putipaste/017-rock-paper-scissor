console.log("Hola, jugaremos piedra, papel o tijeras, el mejor de tres gana.");

// #1 MAKE A FUNCTION THAT WILL RANDOMLY RETURN EITHER ROCK, PAPER OR SCISSORS
function computerChoice() {
	let computerOptions = ["piedra", "papel", "tijeras"];
	let randomizer = Math.floor(Math.random() * computerOptions.length);
	return computerOptions[randomizer];
}

// FUNCTION TO ASK THE PLAYER THEIR CHOICE, allowing them to type lower case or caps but not other options.
function playerChoice() {
	let playerChoice = prompt("piedra, papel o tijeras?", "").toLowerCase();

	while (
		playerChoice != "piedra" &&
		playerChoice != "papel" &&
		playerChoice != "tijeras"
	) {
		playerChoice = prompt(
			"Debes seleccionar entre piedra, papel o tijeras"
		).toLowerCase();
	}
	return playerChoice;
}

// #2 MAKE A FUNCTION THAT PLAYS A SINGLE ROUND OF RPS, THE FUNCTION SHOULD TAKE TWO PARAMETERS
// THE PLAYER SELECTION AND THE COMPUTER SELECTION, THEN RETURN A STRING THAT DECLARES THE WINNER OF THE ROUND
function round(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "empate";
	} else if (
		(playerSelection == "piedra" && computerSelection == "tijeras") ||
		(playerSelection == "papel" && computerSelection == "piedra") ||
		(playerSelection == "tijeras" && computerSelection == "papel")
	) {
		return "ganaste";
	} else {
		return "perdiste";
	}
}

// #3 WRITE A FUNCTION CALLED game(). use the previows function inside of this one to play a round game that keeps score and reports a winner or loser at the end.

function game() {
	let roundCount = 0;
	let playerWins = 0;
	let computerWins = 0;

	while (roundCount < 5 && playerWins < 3 && computerWins < 3) {
		let player = playerChoice();
		let computer = computerChoice();
		let result = round(player, computer);

		if (result == "empate") {
			console.log(`${player} contra ${computer} es un empate!`);
		} else if (result == "ganaste") {
			console.log(`${player} gana a ${computer} eres el ganador!`);
			playerWins++;
		} else {
			console.log(`${computer} gana a ${player}, perdiste :C`);
			computerWins++;
			roundCount++;
		}
	}

	if (playerWins == 3) {
		console.log("FELICIDADES GANASTE LA PARTIDA :D");
		let end = prompt("JUGAMOS DE NUEVO? (yes or no)").toLowerCase();
		if (end == "yes") {
			game();
		} else {
			console.log("ADIOS!");
		}
	} else {
		console.log("TE GANE! ERA DE ESPERARSE...");
		let end = prompt("JUGAMOS DE NUEVO? (yes or no)").toLowerCase();
		if (end == "yes") {
			game();
		} else {
			console.log("ADIOS PERDEDOR!");
		}
	}
}

game();
