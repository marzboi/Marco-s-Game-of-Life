import { Cell } from "./cellInterface";

export const checkNeighboard = (board: Cell[][]) => {
  const cellsLiveCount = [];
  for (let row = 0; row < board.length; row++) {
    const livedCellsRows = [];
    for (let column = 0; column < board[row].length; column++) {
      const cellToCheck = board[row][column];
      let cellsAround = 0;
      if (
        board[row - 1] &&
        board[row - 1][column - 1] &&
        board[row - 1][column - 1].alive
      ) {
        cellsAround += 1;
      }
      if (board[row - 1] && board[row - 1][column].alive) {
        cellsAround += 1;
      }
      if (
        board[row - 1] &&
        board[row - 1][column + 1] &&
        board[row - 1][column + 1].alive
      ) {
        cellsAround += 1;
      }
      if (board[row][column - 1] && board[row][column - 1].alive) {
        cellsAround += 1;
      }
      if (board[row][column + 1] && board[row][column + 1].alive) {
        cellsAround += 1;
      }
      if (
        board[row + 1] &&
        board[row + 1][column - 1] &&
        board[row + 1][column - 1].alive
      ) {
        cellsAround += 1;
      }
      if (board[row + 1] && board[row + 1][column].alive) {
        cellsAround += 1;
      }
      if (
        board[row + 1] &&
        board[row + 1][column + 1] &&
        board[row + 1][column + 1].alive
      ) {
        cellsAround += 1;
      }
      livedCellsRows.push(cellsAround);
    }
    cellsLiveCount.push(livedCellsRows);
  }
  return cellsLiveCount;
};
