// Creating Variables.
let boxes = Array.from(document.getElementsByClassName("box"));
let playagain = document.getElementById("js-restart");
let result = document.getElementById("js-result");

// Retrieve the computed style of the document body
// Get the value of the CSS custom property named '--winning-blocks'
// Assign the retrieved value to the variable WinningBox
let WinningBox = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

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


// Adding EventListeners to the declared variables.
boxes.forEach(box => box.addEventListener("click", boxclicked));
playagain.addEventListener('click', restart);

// Function "boxclicked".
// Assign Player move and fill ' X/O 'in the box text.
function boxclicked(box) {
    const id = box.target.id;

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        box.target.innerText = currentPlayer;

        let WinningBlocks = playerWon();

        if (playerWon()) {
            WinningBlocks.map(box => boxes[box].style.backgroundColor = WinningBox);
            // WinningBlocks.map(box => boxes[box].classList.add('cross-over'));
        }

        currentPlayer = currentPlayer == text_X ? text_O : text_X;

    }
}

// Function PlayerWon.
// Returns blocks that matches and return result.

function playerWon() {
    for (const combo of winningCombos) {
        let [a, b, c] = combo;

        if (spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])) {
            result.innerHTML = `
            <audio src="Tones/Win.mp3" autoplay></audio>
            <span class="js-alert-green" >Player " ${currentPlayer} " has Won!</span>`;
            boxes.forEach(box => box.removeEventListener("click", boxclicked));
            return [a, b, c];
        } else if (spaces.every(box => box !== null)) {
            result.innerHTML = ` <span class="js-alert-red" >Click to restart the game!</span>
            <audio src="Tones/Tie.mp3" autoplay></audio>`;

        }
    }
    return false;
}

// Function restart.
// playagain button function that restart the game by changing box text,style and result.
function restart() {
    spaces.fill(null);

    boxes.forEach(box => {
        box.innerText = ``;
        box.style.backgroundColor = ``;
        // box.classList.remove('cross-over');
    })

    boxes.forEach(box => box.addEventListener("click", boxclicked));

    result.innerText = ``;

    currentPlayer = text_X;
}
