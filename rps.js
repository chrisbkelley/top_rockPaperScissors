function computerPlay(){
    // assigns a random number between 0-2
    let rando = Math.floor(Math.random() * 10/4);

    if (rando === 0) {
        let cmove = 'Rock';
    } else if (random === 1) {
        let cmove = 'Paper';
    } else {
        let cmove = 'Scissors'
    }
    return cmove;
}

function playRound(){

}