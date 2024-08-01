const choices = ["rock", "paper", "scissors"];

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore++;
            return "You lose! Rock beats scissors";
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore++;
            return "You lose! Paper beats rock";
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++;
            return "You lose! Scissors beats paper";
        }

        else if (humanChoice === "rock" && computerChoice == "scissors") {
            humanScore++;
            return "You win! Rock beats scissors!";
        }
        else if (humanChoice === "paper" && computerChoice == "rock") {
            humanScore++;
            return "You win! Paper beats rock!";
        }
        else if (humanChoice === "scissors" && computerChoice == "paper") {
            humanScore++;
            return "You win! Scissors beats paper!";
        }

        else {
            return "draw";
        }

    }
    const buttons = document.querySelectorAll("button");
    let computerChoice = getComputerChoice();

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            let humanChoice = button.id;
            let matchResult = playRound(computerChoice, humanChoice);
            showResults(matchResult);
        })
    })

}

// Shows individual and final match results.
function showResults(result) {
    const domResults = document.querySelector("#dom-results");
    const resultText = document.createElement("p");
    resultText.style.backgroundColor = "red";
    resultText.textContent = result;
    domResults.appendChild(resultText);

    // Start the next match when the user clicks anywhere
    // Theres probably a cleaner way to do this
    const body = document.querySelector("body");
    // This doesnt work if the user clicks on the button... oops
    // Need to add a workaround listener for the buttons.
    body.addEventListener("click", function restart() {
        body.removeEventListener("click", restart);
        domResults.removeChild(resultText);
        return 
    },)

}

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


playGame();