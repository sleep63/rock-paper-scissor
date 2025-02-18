
function getComputerChoice() {
    let x = Math.random();
    if (x < 1/3) {
        x = "rock";
    }
    else if (x < 2/3) {
        x = "paper";
    }
    else {
        x = "scissors";
    }
    return x.toUpperCase();
}

function getHumanChoice() {
    let x = prompt("Whats your choice?");
    return x.toUpperCase();
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (computerChoice == "ROCK" && humanChoice == "SCISSORS") {
        computerScore +=1; 
    }
    else if (computerChoice == "PAPER" && humanChoice == "ROCK") {
        computerScore +=1; 
    }
    else if (computerChoice == "SCISSORS" && humanChoice == "PAPER") {
        computerScore +=1;
    }
    else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore +=1; 
    }
    else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        humanScore +=1; 
    }
    else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore +=1;
    }
    else {
        console.log("Tie! No points given.");
    }
    console.log("You chose " + humanChoice + " and the cpu chose " + computerChoice + "." + " The score is " + humanScore + " and " + computerScore);
}

function playGame(x) {
    while (x > 0) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
         x -=1;
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
    }
    else {
        console.log("Tie!");
    }
}

playGame(5);