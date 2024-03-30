const board = document.getElementById('board');
const resultScreen = document.getElementById('result-screen');
const resultMessage = document.getElementById('result-message');
const newGameBtn = document.getElementById('new-game-btn');

let currentPlayer = 'X';
const cells = [];

// Create the Tic Tac Toe board
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener('click', handleClick);
        board.appendChild(cell);
        cells.push(cell);
    }
}

// Handle click on cell
function handleClick() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;
        if (checkWin()) {
            showResult(`${currentPlayer} wins!`);
        } else if (checkDraw()) {
            showResult("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Check for a win
function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombos.some(combo => {
        return combo.every(index => cells[index].textContent === currentPlayer);
    });
}

// Check for a draw
function checkDraw() {
    return cells.every(cell => cell.textContent !== '');
}

// Show result screen
function showResult(message) {
    resultMessage.textContent = message;
    resultScreen.classList.remove('hidden');
}

// Reset the board
function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    resultScreen.classList.add('hidden');
}

// New Game Button Click Event
newGameBtn.addEventListener('click', () => {
    resetBoard();
});

// Show result screen after the game is over
function showResultScreen() {
    resultScreen.classList.remove('hidden');
}

// Hide result screen when starting a new game
function hideResultScreen() {
    resultScreen.classList.add('hidden');
}

