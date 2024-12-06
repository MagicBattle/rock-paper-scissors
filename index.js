//Create a function that will randomly reutrn "Rock", "Paper", or "Scissors"
//Use the random function to get a random number from 0-2 (as there are three choices)
//Assign each of these random numbers a choice (Rock, paper, scissors)

//Global variables of the score that we will increment
let humanScore = 0;
let computerScore = 0;

//Function that gets the computer's choice by generating a random number and that random number will equal a choice
function getComputerChoice(choice){
    let computerChoice;
    let result;
    computerChoice = Math.floor(Math.random() * choice);
    if(computerChoice == 0){
        result = `Rock`;
    } 
    else if(computerChoice == 1) {
        result = `Paper`;
    } 
    else{
        result = `Scissors`;
    }

    return result;
} 

//Function that gets human choice and changes the user input to fix the string capitalization
function getHumanChoice(){
    let result;
    result = prompt(`Please enter a choice: rock, paper, or scissors`)
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
} 

//Function that plays a game of rock-paper-scissors: compares the two inputs from player and robot and determines the score based off the inputs
function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        console.log(`It's a tie!`);
    } 
    else if((humanChoice == `Rock` && computerChoice == `Scissors`) || (humanChoice == `Paper` && computerChoice == `Rock`) || (humanChoice == `Scissors` && computerChoice == `Paper`)){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}! Computer score ${computerScore} - Human score ${humanScore}`);
    } 
    else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}! Computer score ${computerScore} - Human score ${humanScore}`);
    }

}  


// Main game function that loops playing the game for five rounds.
function playGame() {
    let rounds = 5; // Number of rounds
    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(3);
        (playRound(humanChoice, computerChoice));
    }

    // Final result
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final score: ${computerScore} - ${humanScore}`);
    } else {
        console.log(`The game is a tie! Final score: ${humanScore} - ${computerScore}`);
    }
}

playGame();






 

