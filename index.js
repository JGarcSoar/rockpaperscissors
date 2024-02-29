const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);

    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!!! 😎" : "You Lose!!! 😭";
                break;
        }
        switch(playerChoice){
            case "paper":
                result = (computerChoice === "rock") ? "You Win!!! 😎" : "You Lose!!! 😭";
                break;
        }
        switch(playerChoice){
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!!! 😎" : "You Lose!!! 😭";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You Win!!! 😎":
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose!!! 😭":
            resultDisplay.classList.add("redText");
            break;
    }
}