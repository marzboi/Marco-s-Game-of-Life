import { Cell } from "./cellInterface.js";

const generateUserGameBoard = (rows: number, columns: number) => {
  const gameTable = document.querySelector(".container-table") as Element;

  for (let row = 1; row <= rows; row++) {
    gameTable.innerHTML += `<div class="row table-row-${row}"></div>`;
    const rowTable = document.querySelector(`.table-row-${row}`) as Element;

    for (let column = 1; column <= columns; column++) {
      rowTable.innerHTML += `<div class="col row-${row}-col-${column}"></div>`;
    }
  }
};

const placeCellOnBoard = (
  row: number,
  column: number,
  currentBoard: Cell[][]
) => {
  const cellToPlace = document.querySelector("3");
};

generateUserGameBoard(100, 100);
