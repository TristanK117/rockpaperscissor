console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(playerChoice) {
    const random = Math.random()
    if (random < 1/3) {
        return "rock";
    } else if(random < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock? Paper? Scissor?").toLowerCase();
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }

    console.log(result); 
}

function playGame() {
    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Log final scores
    console.log(`Final Score: You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer is the overall winner.");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();
