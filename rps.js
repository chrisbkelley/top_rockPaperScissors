let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

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

function displayResults(results){
    const msgContainer = document.querySelector('#footer');
    const roundMsg = document.createElement('div');
    
    roundMsg.setAttribute('id', 'screen-results')
    roundMsg.textContent = results;
    
    if (msgContainer.childNodes[0]){
        msgContainer.replaceChild(roundMsg,msgContainer.childNodes[0]);
    }else{
        msgContainer.appendChild(roundMsg);
    };
};

function displayMoves(player, cpu){
    const playerScreen = document.getElementById('player-screen');
    const computerScreen = document.getElementById('computer-screen');
    
    playerScreen.textContent = player;
    computerScreen.textContent = cpu;

};


function playRound(playerSelection, computerSelection = computerPlay()){
    playerSelection = playerSelection.toLowerCase();
    let loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`;
    let winStatement = `You win! ${playerSelection} beats ${computerSelection}`;
    let tieStatement = `Tie! Both players chose ${computerSelection}`;

    displayMoves(playerSelection, computerSelection);

    if (playerSelection == computerSelection){
        displayResults(tieStatement);
        return updateScoreboard('tie');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
               playerSelection == 'scissors' && computerSelection == 'paper' ||
               playerSelection == 'paper' && computerSelection == 'rock') {
        displayResults(winStatement);         
        return updateScoreboard('win');
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
               playerSelection == 'scissors' && computerSelection == 'rock' ||
               playerSelection == 'paper' && computerSelection == 'scissors') {
        displayResults(loseStatement);
        return updateScoreboard('lose');
    } else {
        return alert('Error occurred, please chose rock, paper or scissors');
    }

};

function updateScoreboard(roundResults){
    const displayPlayerScore = document.getElementById('player-score-box');
    const displayComputerScore = document.getElementById('computer-score-box');

        if (roundResults === 'win' && roundCount !==5){
            playerScore++;
            displayPlayerScore.textContent = 'Score: ' + playerScore;
            roundCount++;
        } else if (roundResults === 'lose' && roundCount !==5){
            computerScore++;
            displayComputerScore.textContent = 'Score: ' + computerScore;
            roundCount++;
        } else if (roundResults === 'tie' && roundCount !==5){
            roundCount++;
        } else if (roundCount === 5) {
            if (playerScore > computerScore){
                displayResults('You win the game.')
                playerScore = 0;
                computerScore = 0;
                roundCount = 0;
            } else {
                displayResults('You lose the game.')
                playerScore = 0;
                computerScore = 0;
                roundCount = 0;
            };
        } else {
            //noop
            ()=>{};
        };
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
    let para = document.getElementById("player-screen")
    return para.textContent += 'hello world'
  };

const btnRock = document.getElementById('btn-rock')
btnRock.addEventListener('click', () => {
    playRound('rock')
});

const btnPaper = document.getElementById('btn-paper')
btnPaper.addEventListener('click',() => {
    playRound('paper')
});

const btnScissors = document.getElementById('btn-scissors')
btnScissors.addEventListener('click',() => {
    playRound('scissors')
});

document.getElementById("player-screen").textContent = '';
