let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id);
    });
});


function getComputerChoice(){
    options = ['Rock', 'Paper', 'Scissors'];
    choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result;

    if(playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ) {
            playerScore ++;
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore ++;
            result = `You lose! ${computerSelection} beats ${playerSelection}.`;  
        }
    
    resultsDiv.textContent = result;
    checkWinner();
    updateScore();
}

function updateScore() {
    resultsDiv.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function checkWinner() {
    if (playerScore === 5) {
        resultsDiv.textContent = "Congratulations! You win the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "Sorry, yoy lose the game.";
        resetGame();
    }
}

