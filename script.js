
const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;


document.getElementById("rockButton").addEventListener("click", function() {
    const playerChoice = "rock";
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    displayResult(result);
});

document.getElementById("paperButton").addEventListener("click", function() {
    const playerChoice = "paper";
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    displayResult(result); 
});

document.getElementById("scissorsButton").addEventListener("click", function() {
    const playerChoice = "scissors";
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    displayResult(result);
});


function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()* choices.length);
    let computerChoice = choices[randomIndex];
    console.log(computerChoice)
    return computerChoice;
}

function checkWinner(playerChoice,computerChoice ){
    if (computerChoice == playerChoice) {
        playerScore += 1;
        computerScore += 1;
        return "Tie"        
    }
    else if ((playerChoice == "rock" && computerChoice == "scissors") ||
            (playerChoice == "paper" && computerChoice == "rock") ||
            (playerChoice == "scissors" && computerChoice == "paper")){
                playerScore += 1;
                return "player"
    }
    else  {
        computerScore += 1;        
        return "Computer"
    }
};


function playRound(playerChoice,computerChoice){
    const result = checkWinner(playerChoice, computerChoice);
    if(result =="Tie"){
        return "It's a Tie!"
    }
    else if(result == "player"){
        return `You Win! ${playerChoice} beats ${computerChoice}`
    }
    else{
        return `You lost! ${playerChoice} loses to ${computerChoice}`
    }
};


function displayResult(result) {
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}\n
    ${result}`;
};


// const playerChoice = prompt();
// console.log(playerChoice);

// for(i=1; i<6; i++) {
//     const playerChoice = getPlayerChoice();
//     const computerChoice = getComputerChoice();
//     console.log(playRound(playerChoice, computerChoice));
//     console.log(i)
// }

