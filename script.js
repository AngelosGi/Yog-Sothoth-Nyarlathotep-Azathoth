// Available choices for the game
const choices = ["rock", "paper", "scissors"];

// Scores for the player and computer
let playerScore = 0;
let computerScore = 0;

// Event listeners for button clicks
document.getElementById("rockButton").addEventListener("click", function(){
    playGame("rock");
});

document.getElementById("paperButton").addEventListener("click", function(){
    playGame("paper");
});

document.getElementById("scissorsButton").addEventListener("click", function(){
    playGame("scissors");
});

// Function to play the game
function playGame(playerChoice) {
    // Get the computer's choice
    const computerChoice = getComputerChoice();
    
    // Play a round and display the result
    const result = playRound(playerChoice, computerChoice);
    displayResult(result);
}

// Function to get a random choice for the computer
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()* choices.length);
    let computerChoice = choices[randomIndex];
    console.log(computerChoice)
    return computerChoice;
}

// Function to play a single round of the game
function playRound(playerChoice, computerChoice){
    // Check the winner of the round
    const result = checkWinner(playerChoice, computerChoice);

    // Update scores based on the result
    if(result == "player"){
        playerScore += 1;
    } else if(result == "Computer") {
        computerScore += 1;
    }

    // Return a message based on the result
    if(result == "Tie"){
        return "It's a Tie!";
    } else if(result == "player"){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You lost! ${playerChoice} loses to ${computerChoice}`;
    }
}

// Function to check the winner of a round
function checkWinner(playerChoice, computerChoice){
    // Check for a tie
    if (computerChoice == playerChoice) {
        return "Tie";
    }
    // Check for player win conditions
    else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        return "player";
    }
    // If not a tie and not a player win, it's a computer win
    else {
        return "Computer";
    }
}

// Function to display the result and scores
function displayResult(result) {
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}\n${result}`;
}

/////////////////////////////////////////////////////////////////////////////////////
// TEST CODE (commented out for clarity)

// Use this section for testing specific functionalities or scenarios

// Example 1: Prompt user for input and display the result for one round
// const playerChoice = prompt();
// console.log(playerChoice);
// playGame(playerChoice);

// Example 2: Run the game for 5 rounds (old code)
// for(i=1; i<6; i++) {
//     const playerChoice = getPlayerChoice();
//     const computerChoice = getComputerChoice();
//     console.log(playRound(playerChoice, computerChoice));
//     console.log(i)
// }

// Old code for individual button clicks (commented out)
// Use the new consolidated playGame function for improved readability and maintainability
// document.getElementById("rockButton").addEventListener("click", function() {
//     const playerChoice = "rock";
//     const computerChoice = getComputerChoice();
//     const result = playRound(playerChoice, computerChoice);
//     displayResult(result);
// });
// ...
