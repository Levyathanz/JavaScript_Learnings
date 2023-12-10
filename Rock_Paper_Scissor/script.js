// Retrieving the stored scores.
let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0,
    Ties: 0
};
// Player Move Function.
function playercall(playermove) {
    const computermove = computercall();
    let result = '';

    if (playermove === "Rock") {
        if (computermove === 'Rock') {
            result = 'Tie';
        } else if (computermove === 'Paper') {
            result = 'Lose';
        } else if (computermove === 'Scissor') {
            result = 'Win';
        }
    } else if (playermove === "Paper") {
        if (computermove === 'Rock') {
            result = 'Win';
        } else if (computermove === 'Paper') {
            result = 'Tie';
        } else if (computermove === 'Scissor') {
            result = 'Lose';
        }
    } else if (playermove === "Scissor") {
        if (computermove === 'Rock') {
            result = 'Lose';
        } else if (computermove === 'Paper') {
            result = 'Win';
        } else if (computermove === 'Scissor') {
            result = 'Tie';
        }
    }

    if (result === 'Win') {
        score.Wins += 1;
    } else if (result === 'Lose') {
        score.Loses += 1;
    } else if (result === 'Tie') {
        score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));   // Storing scores in the localstorage so that the score does not removed when we refresh the page.

    document.querySelector('.moves').innerHTML = `Computer move is ${computermove} and you choose ${playermove}.`;
    document.querySelector('.result').innerHTML = `Result : ${result}`;
    document.querySelector('.score').innerHTML = `Wins : ${score.Wins}, Loses : ${score.Loses}, Ties : ${score.Ties}`;

}

// Computer Move Function.
function computercall() {
    let num = Math.random();
    //console.log(num)
    if (num >= 0 && num < 1 / 3) {
        computermove = "Rock";
    } else if (num >= 1 / 3 && num < 2 / 3) {
        computermove = "Paper";
    } else if (num >= 2 / 3 && num < 1) {
        computermove = "Scissor";
    }
    return computermove;
}

// Reset Function.
function reset() {
    score = {
        Wins: 0,
        Loses: 0,
        Ties: 0
    }
    localStorage.removeItem('score')
    document.querySelector('.score').innerHTML = `Wins : ${score.Wins}, Loses : ${score.Loses}, Ties : ${score.Ties}`
}