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
