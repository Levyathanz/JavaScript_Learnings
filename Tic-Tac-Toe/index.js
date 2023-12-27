// Creating Variables.
let boxes = Array.from(document.getElementsByClassName("box"));
let playagain = document.getElementById("js-restart");
let result = document.getElementById("js-result");

const text_O = 'O';
const text_X = 'X';
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let currentPlayer = text_X;
let spaces = Array(9).fill(null);


// Arrow Function to start Game.
const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxclicked));
}

// Box Click Function.
function boxclicked(box) {
    const id = box.target.id;

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        box.target.innerText = currentPlayer;

        if (playerWon()) {
            result.innerHTML = `
            <audio src="Tones/Win.mp3" autoplay></audio>
            <h3>Player " ${currentPlayer} " has Won!</h3>`;
            boxes.forEach(box => box.removeEventListener("click", boxclicked));
        }

        currentPlayer = currentPlayer == text_X ? text_O : text_X;
    }
}

// Function that show Result.

function playerWon() {
    for (const combos of winningCombos) {
        let [a, b, c] = combos;

        if (spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])) {
            return [a, b, c];
        }
    }
    return false;
}

playagain.addEventListener('click', restart);

// Function to Reset Game.
function restart() {
    spaces.fill(null);

    boxes.forEach(box => {
        box.innerText = ``;
    })

    boxes.forEach(box => box.addEventListener("click", boxclicked));

    result.innerText = ``;

    currentPlayer = text_X;
}

startGame();