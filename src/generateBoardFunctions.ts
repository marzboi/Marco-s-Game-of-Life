import { Cell } from "./cellInterface.js";

export const generateGameBoard = (rows: number, columns: number) => {
  const boardLogic = [];
  for (let row = 1; row <= rows; row++) {
    const rowLocation = [];
    for (let column = 1; column <= columns; column++) {
      const cell = {
        alive: false,
        row: row,
        col: column,
      };
      rowLocation.push(cell);
    }

    boardLogic.push(rowLocation);
  }

  return boardLogic;
};

export const generateRandomCells = (board: Cell[][]) => {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (Math.random() < 0.3) {
        board[row][column].alive = true;
      } else {
        board[row][column].alive = false;
      }
    }
  }
};

// export const generateGameBoardWithRandomCells = (
//   rows: number,
//   columns: number
// ) => {
//   const boardLogic = [];
//   for (let row = 1; row <= rows; row++) {
//     const rowLocation = [];
//     for (let column = 1; column <= columns; column++) {
//       if (Math.random() < 0.3) {
//         const cell = {
//           alive: true,
//           row: row,
//           col: column,
//         };
//         rowLocation.push(cell);
//       } else {
//         const cell = {
//           alive: false,
//           row: row,
//           col: column,
//         };
//         rowLocation.push(cell);
//       }
//     }

//     boardLogic.push(rowLocation);
//   }

//   return boardLogic;
// };
