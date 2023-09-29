function getComputerChoice() {
    let RanNum = Math.floor(Math.random() * 3);
    let result;
    if (RanNum === 0) {
        result = "rock";
    } else if (RanNum === 1) {
        result = "paper";
    } else {
        result = "scissors";
    }

    return result;
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Player = Rock | Computer = Rock ---> TIE!"
        } else if (computerSelection === "paper") {
            return "Player = Rock | Computer = Paper ---> Computer Wins!"
        } else {
            return "Player = Rock | Computer = Scirrors ---> Player Wins!"
        }
    } else if (lowerPlayerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Player = Paper | Computer = Rock ---> Player Wins!"
        } else if (computerSelection === "paper") {
            return "Player = Paper | Computer = Paper ---> TIE!"
        } else {
            return "Player = Paper | Computer = Scirrors ---> Computer Wins!"
        }
    } else {
        if (computerSelection === "rock") {
            return "Player = Scissors | Computer = Rock ---> Computer Wins!" 
        } else if (computerSelection === "paper") {
            return "Player = Scissors | Computer = Paper ---> Player Wins!"
        } else {
            return "Player = Scissors | Computer = Scissors ---> TIE!"
        }
    }
}

const playerSelection = "PapEr"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));