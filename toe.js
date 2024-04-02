let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const boardCells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            return board[a];
        }
    }
    return null;
}

function handleCellClick(clickedCell, clickedCellIndex) {
    if (!gameActive || board[clickedCellIndex] !== '') return;

    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;

    const winner = checkWinner();
    if (winner) {
        statusDisplay.innerText = `Player ${winner} Wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        statusDisplay.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
    boardCells.forEach(cell => cell.innerText = '');
}

function makeMove(cellIndex) {
    const clickedCell = boardCells[cellIndex];
    handleCellClick(clickedCell, cellIndex);
}
