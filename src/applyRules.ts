import { Cell } from "./cellInterface.js";

export const applyRules = (board: Cell[][], cellCount: number[][]) => {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      const cell = board[row][column];
      const nearbyCells = cellCount[row][column];

      if (cell.alive) {
        if (nearbyCells < 2) {
          cell.alive = false;
        } else if (nearbyCells === 2 || nearbyCells === 3) {
          cell.alive = true;
        } else if (nearbyCells > 3) {
          cell.alive = false;
        }
      } else if (!cell.alive) {
        if (nearbyCells === 3) {
          cell.alive = true;
        }
      }
    }
  }
};
