function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const idx = Math.floor(Math.random() * options.length);
    return options[idx];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (userOption === computerResult){
        return "It's a tie! Both chose ${userOption}";
    }

    else if (hasPlayerWonTheRound(userOption, computerResult)){
        playerScore++;
        return "Players wins! ${userOption} beats ${computerResult}";
    }

    else {
        computerScore++;
        return "Computer wins! ${computerResult} beats ${userOption}";
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {
    playerScoreSpanElement = playerScoreSpanElement.innerText(playerScore);
    computerScoreSpanElement = computerScoreSpanElement.innerText(computerScore);

    roundResultsMsg = roundResultsMsg.innerText("Player wins");
}