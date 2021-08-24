function computerPlay(){
    let cmove = '';
    // assigns a random number between 0-2
    let rando = Math.floor(Math.random() * 10/4);

    if (rando == 0) {
        cmove = 'rock';
    } else if (rando == 1) {
        cmove = 'paper';
    } else {
        cmove = 'scissors'
    }
    return cmove;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`;
    let winStatement = `You win! ${playerSelection} beats ${computerSelection}`;
    let tieStatement = `Tie! Both players chose ${computerSelection}`;

    if (playerSelection == computerSelection){
        return tieStatement;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
               playerSelection == 'scissors' && computerSelection == 'paper' ||
               playerSelection == 'paper' && computerSelection == 'rock') {
        return winStatement;
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
               playerSelection == 'scissors' && computerSelection == 'rock' ||
               playerSelection == 'paper' && computerSelection == 'scissors') {
        return loseStatement;
    } else {
        return 'Error occurred, please chose rock, paper or scissors';
    }

};

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Choose rock, paper or scissors');
        let result = '';
        let winPattern = /win/g;
        let losePattern = /lose/g;

        result = playRound(playerChoice, computerPlay());
        console.log(result);
        if (winPattern.test(result) === true){
            playerScore++;
        } else if (losePattern.test(result) === true){
            computerScore++;
        } else {
            continue;
        }
    };

    let loseStatement = `You lose!\nComputer score: ${computerScore}\nPlayer score: ${playerScore}`;
    let winStatement = `You win!\nPlayer score: ${playerScore} \nComputer score: ${computerScore}`;
    let tieStatement = `Tie! Both players scored ${computerScore}`;

    if (playerScore == computerScore) {
        console.log(tieStatement);
    } else if (playerScore > computerScore) {
        console.log(winStatement);
    } else if (playerScore < computerScore) {
        console.log(loseStatement);
    } else {
        console.log('Something unexpected happened!');
    }
    
}

// function to test event listener, delete this
function hello() {
    alert ("Hello World!");
  };

document.getElementById('btn-rock').addEventListener('click',hello);
document.getElementById('btn-paper').addEventListener('click',hello);
document.getElementById('btn-scissors').addEventListener('click',hello);

