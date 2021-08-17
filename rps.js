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
    //let outcome = '';
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

