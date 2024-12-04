//Create a function that will randomly reutrn "Rock", "Paper", or "Scissors"
//Use the random function to get a random number from 0-2 (as there are three choices)
//Assign each of these random numbers a choice (Rock, paper, scissors)
function getComputerChoice(choice){
    let computerChoice;
    let result;
    computerChoice = Math.floor(Math.random() * choice);
    parseInt(computerChoice);
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

function getHumanChoice(choice){
    let result;
    result = prompt(`Please enter a choice: rock, paper, or scissors`)
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
} 

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        return console.log(`It's a tie!`);
    } 
    else if((humanChoice == `Rock` && computerChoice == `Scissors`) || (humanChoice == `Paper` && computerChoice == `Rock`) || (humanChoice == `Scissors` && computerChoice == `Paper`)){
        humanScore++;
        return console.log(`You win!`);
    } 
    else{
        computerScore++
        return console.log(`You lose!`);
    }
}

let humanScore = 0;
let computeScore = 0;
const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice(3);



playRound(humanSelection, computerSelection);

// console.log(getComputerChoice(3));
// console.log(getHumanChoice());