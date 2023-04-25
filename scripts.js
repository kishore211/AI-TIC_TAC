const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    updateBoard(row, col);
    if (checkWin(row, col)) {
      alert(currentPlayer + ' wins!');
      resetBoard();
    } else if (isBoardFull()) {
      alert('It\'s a draw!');
      resetBoard();
    } else {
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
}

function updateBoard(row, col) {
  const cell = document.getElementById('board').children[row].children[col];
  cell.textContent = board[row][col];
  cell.classList.remove('empty');
  cell.classList.add(currentPlayer.toLowerCase());
}

function checkWin(row, col) {
  const symbol = board[row][col];
  return checkRow(row, symbol) || checkCol(col,symbol) || checkDiagonal(symbol);
}

function checkRow(row, symbol) {
return board[row].every(cell => cell === symbol);
}

function checkCol(col, symbol) {
return board.every(row => row[col] === symbol);
}

function checkDiagonal(symbol) {
return (
(board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
(board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
);
}

function isBoardFull() {
return board.every(row => row.every(cell => cell !== ''));
}

function resetBoard() {
for (let row = 0; row < 3; row++) {
for (let col = 0; col < 3; col++) {
board[row][col] = '';
const cell = document.getElementById('board').children[row].children[col];
cell.textContent = '';
cell.classList.remove('x', 'o');
cell.classList.add('empty');
}
}
currentPlayer = 'X';
}
