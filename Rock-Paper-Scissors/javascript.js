function getComputerChoice(){
    options = ['Rock', 'Paper', 'Scissors'];
    choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection == computerSelection.toUpperCase()){
        console.log("You are the same.");
        return "Equal";
    } else if (playerSelection == "ROCK" && computerSelection == "Scissors"){
        console.log("You Win! Rock beats Scissors");
        return "Win";
    } else if (playerSelection == "PAPER" && computerSelection == "Scissors"){
        console.log("You Lose! Scissors beats Paper");
        return "Lose";
    } else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors");
        return "Lose";
    } else if (playerSelection == "ROCK" && computerSelection == "Paper") {
        console.log("You Lose! Paper beats Rock");
        return "Lose";
    } else if (playerSelection == "PAPER" && computerSelection == "Rock") {
        console.log("You Win! Paper beats Rock");
        return "Win";
    } else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
        console.log("You Win! Scissors beats Paper");
        return "Win";
    }
}

playerSelection = prompt("Rock, Paper or Scissors?");
computerSelection = getComputerChoice();
playRound(playerSelection,computerSelection);