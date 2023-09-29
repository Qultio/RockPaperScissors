function getComputerChoice() {
    let RanNum = Math.floor(Math.random() * 3);
    let result;
    if (RanNum === 0) {
        result = "Rock";
    } else if (RanNum === 1) {
        result = "Paper";
    } else {
        result = "Scissors";
    }

    return result;
}

console.log(getComputerChoice());