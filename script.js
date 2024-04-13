let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let winner = null;

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

function handleClick(index) {
  if (board[index] === '' && !winner) {
    board[index] = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    render();
  }
}

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      break;
    }
  }
}

function reset() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  winner = null;
  render();
}

function render() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });

  const status = document.querySelector('.status');
  if (winner) {
    status.textContent = Winner: ${winner};
  } else {
    status.textContent = Current player: ${currentPlayer};
  }
}
