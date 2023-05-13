import { Cell } from "./cellInterface";

export const printBoard = (board: Cell[][]) => {
  let message = "";
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column].alive) {
        message += " 1 ";
      } else {
        message += " 0 ";
      }
    }
    message += "\n";
  }
  return message;
};
