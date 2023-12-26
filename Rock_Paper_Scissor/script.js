// Adding eventListener.
document.querySelector('.js-rock-btn').addEventListener('click', () => playercall('Rock'));
document.querySelector('.js-paper-btn').addEventListener('click', () => playercall('Paper'))
document.querySelector('.js-scissor-btn').addEventListener('click', () => playercall('Scissor'))
document.querySelector('.btn-reset').addEventListener('click', () => reset())
document.querySelector('.btn-autoplay').addEventListener('click', () => autoplay())

// Key Event Listener
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playercall('Rock');
    } else if (event.key === 'p') {
        playercall('Paper');
    } else if (event.key === 's') {
        playercall('Scissor');
    } else if (event.key === 'a') {
        autoplay();
    } else if (event.key === 'Backspace') {
        reset();
    }
})

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

    document.querySelector('.result').innerHTML = `<p>
    You choose 
    <img class="js-result-img" src="Images/${playermove}.png" />
    Computer move is 
    <img class="js-result-img" src="Images/${computermove}.png" />
    </p> 
    <p>
    Result : ${result}
    <audio src="Images/Music/${result}.mp3" autoplay></audio>
    </p>
    Wins : ${score.Wins}, Loses : ${score.Loses}, Ties : ${score.Ties}`;

}
// Auto play Function.
let isautoplaying = false;
let intervalid;
function autoplay() {
    if (!isautoplaying) {
        intervalid = setInterval(() => {
            const playermove = computercall();
            playercall(playermove)
        }, 2000);
        isautoplaying = true;
        document.querySelector('.btn-autoplay').innerHTML = 'Stop playing';
    } else {
        clearInterval(intervalid);
        isautoplaying = false;
        document.querySelector('.btn-autoplay').innerHTML = 'Autoplay';
    }
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

    document.querySelector('.result').innerHTML = `<p>Are you sure you want to reset the score? <button class='js-rst-yes js-rst-alert'>Yes</button><button class='js-rst-no js-rst-alert'>No</button></p>`

    document.querySelector('.js-rst-yes').addEventListener('click', () => {
        score = {
            Wins: 0,
            Loses: 0,
            Ties: 0
        }
        localStorage.removeItem('score')
        document.querySelector('.result').innerHTML = `Wins : ${score.Wins}, Loses : ${score.Loses}, Ties : ${score.Ties}`

    })
    document.querySelector('.js-rst-no').addEventListener('click', () => {
        document.querySelector('.result').innerHTML = `Wins : ${score.Wins}, Loses : ${score.Loses}, Ties : ${score.Ties}`;
    }
    )
}