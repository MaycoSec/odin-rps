const choices = ["rock", "paper", "scissors"];
const emojis = {
    rock: String.fromCodePoint(0x1FAA8),
    paper: String.fromCodePoint(0x1F4C4),
    scissors: String.fromCodePoint(0x2702),
}

for (let i in emojis) {
    console.log(emojis[i]);
}

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
            return "Tie!";
        }

    }
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            let computerChoice = getComputerChoice();
            let humanChoice = button.id;
            let matchResult = playRound(computerChoice, humanChoice);
            setupCombatUI(computerChoice, humanChoice);
            showResults(matchResult, computerChoice, humanChoice);
        })
    })

}


function setupCombatUI(computerChoice, humanChoice) {
    const combat = document.querySelector(".combat");
    const versus = document.querySelector("#versus-div");
    // Transform each choice to its emoji equivalent
    for (let key in emojis) {
        if (key === humanChoice) {
            let humanFighter = document.createElement("span");
            humanFighter.textContent = emojis[key];
            humanFighter.style.fontSize = "64px";
            combat.insertBefore(humanFighter, versus);
        }
    }
    // Diferent loops so we can be sure the human choice appears first

    setTimeout(() => {
            for (let key in emojis) {
            if (key === computerChoice) {
                let computerFigther = document.querySelector("#computer-fighter");
                computerFigther.textContent = emojis[key];
                computerFigther.style.fontSize = "64px";
                // combat.appendChild(computerFigther);
            }
        }
    }, 125)
}

// Shows individual and final match results.
function showResults(result) {
    const domResults = document.querySelector("#dom-results");
    const resultText = document.createElement("p");
    resultText.style.color = "white";
    resultText.style.fontWeight = "bolder";
    resultText.textContent = result;
    resultText.style.textAlign = "center";
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