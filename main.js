const choice = ["ROCK" , "PAPER" , "SCISSORS"]

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const finalResult = document.getElementById("finalResult");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    
    const computerChoice = choice[Math.floor(Math.random() * 3)]
    let result = '';

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch (playerChoice) {
            case "ROCK":
                result = (computerChoice === "SCISSORS") ? "YOUN WIN :)" : "YOU LOSE :(";
                break;
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOUN WIN :)" : "YOU LOSE :(";
                break;
            case "SCISSORS":
                result = (computerChoice === "PAPER") ? "YOUN WIN :)" : "YOU LOSE :(";
                break;
        }
    } 

    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result;



    resultDisplay.classList.remove("greenText" , "redText")

    if(result === "YOUN WIN :)"){
        resultDisplay.classList.add("greenText")
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    }
    else if(result === "YOU LOSE :("){
        resultDisplay.classList.add("redText")
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }



    finalResult.textContent = ""

    if(playerScore === 3){
        finalResult.textContent = "YOU WIN ALL THE GAME :)"
        finalResult.classList.add("greenText")

        playerScore = 0
        playerScoreDisplay.textContent = playerScore;

        computerScore = 0
        computerScoreDisplay.textContent = computerScore;

    }
    else if(computerScore === 3){
        finalResult.textContent = "COMPUTER WIN ALL THE GAME :("
        finalResult.classList.add("redText")

        playerScore = 0
        playerScoreDisplay.textContent = playerScore;

        computerScore = 0
        computerScoreDisplay.textContent = computerScore;
    }


}