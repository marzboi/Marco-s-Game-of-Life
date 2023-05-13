export const checkNeighbour = (board: any) => {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      const cellToCheck = board[row][column];
      let count = 0;
      if (
        board[row - 1] &&
        board[row - 1][column - 1] &&
        board[row - 1][column - 1].alive
      ) {
        count += 1;
      }
      if (board[row - 1] && board[row - 1][column].alive) {
        count += 1;
      }
      if (
        board[row - 1] &&
        board[row - 1][column + 1] &&
        board[row - 1][column + 1].alive
      ) {
        count += 1;
      }
      if (board[row][column - 1] && board[row][column - 1].alive) {
        count += 1;
      }
      if (board[row][column + 1] && board[row][column + 1].alive) {
        count += 1;
      }
      if (
        board[row + 1] &&
        board[row + 1][column - 1] &&
        board[row + 1][column - 1].alive
      ) {
        count += 1;
      }
      if (board[row + 1] && board[row + 1][column].alive) {
        count += 1;
      }
      if (
        board[row + 1] &&
        board[row + 1][column + 1] &&
        board[row + 1][column + 1].alive
      ) {
        count += 1;
      }
      if (count >= 2 && count < 4) {
        cellToCheck.alive = true;
      } else {
        cellToCheck.alive = false;
      }
    }
  }
};
