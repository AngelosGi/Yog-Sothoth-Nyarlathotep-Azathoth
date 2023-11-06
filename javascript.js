const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() *choices.length)
    return computerChoice;
};
const computerChoice = getComputerChoice();
const playerChoice = "rock"


function playGame(){
    if (computerChoice == playerChoice) {
        return "its a Tie"
    }
    else if ((computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "scissors" && playerChoice == "paper") ||
        (computerChoice == "paper" && playerChoice == "rock"))
        {
            return "You lost"
    }
    else if ((computerChoice == "rock" && playerChoice == "paper") ||
         (computerChoice == "scissors" && playerChoice == "rock") ||
          (computerChoice == "paper" && playerChoice == "scissors"))
        {
            return "You won"
    }
