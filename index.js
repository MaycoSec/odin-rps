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
            
            // Scores
            const humanScoreUI = document.querySelector(".human-score");
            const computerScoreUI = document.querySelector(".computer-score");
            humanScoreUI.textContent = humanScore;
            computerScoreUI.textContent = computerScore;

            showResults(matchResult);
        })
    })

}


function setupCombatUI(computerChoice, humanChoice) {
    const combat = document.querySelector(".combat");
    const versus = document.querySelector("#versus-div");
    // Transform each choice to its emoji equivalent
    for (let key in emojis) {
        if (key === humanChoice) {
            let humanFighter = document.querySelector("#human-fighter");
            humanFighter.textContent = emojis[key];
            humanFighter.style.fontSize = "64px";

            // For some odd reason the scissors emoji is not 64px wide
            humanFighter.style.width = "64px";
        }
    }
    // Diferent loops so we can be sure the human choice appears first

    setTimeout(() => {
            for (let key in emojis) {
            if (key === computerChoice) {
                let computerFigther = document.querySelector("#computer-fighter");
                computerFigther.textContent = emojis[key];
                computerFigther.style.fontSize = "64px";
                computerFigther.style.width = "64px";
            }
        }
    }, 125)
}

// Shows individual and final match results.
function showResults(result) {
    const domResults = document.querySelector("#dom-results");
    const resultText = document.querySelector(".results-text");

    let color;
    if (result.includes("lose")) {
        // change color a bit
        color = "red"
    }
    else if (result.includes("win")) {
        // change the color a bit
        color = "#2218A7";
    }
    else {
        color = "white"
    }
    resultText.style.color = color;
    resultText.style.fontWeight = "bolder";
    resultText.textContent = result;
    resultText.style.textAlign = "center";
}

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


playGame();