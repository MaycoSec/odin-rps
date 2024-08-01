const choices = ["rock", "paper", "scissors"];

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "rock" && humanChoice === "scissors")  {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "rock")  {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else if (computerChoice === "scissors" && humanChoice === "paper")  {
            console.log("You lose! Scissors beats paper");
            computerScore++;
        }
    
        else if (humanChoice === "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        }
    
        else {
            console.log("Draw!");
        }

    }
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
    }
    console.log(`Computer score: ${computerScore}, human score: ${humanScore}`)
    
}



function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    while (true) {
      const choice = prompt("Rock, paper or scissors?").toLowerCase();
      // Check if it is a valid choice
      for (let i = 0; i < choices.length; i++) {
          if (choice === choices[i]) {
            return choice;
        }
      }
      alert("invalid choice");
    }
} 

playGame();
