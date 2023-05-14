import { Cell } from "./cellInterface.js";
import { generateGameBoard } from "./generateBoardFunctions.js";

const generateUserGameBoard = (rows: number, columns: number) => {
  const gameTable = document.querySelector(".container-table") as Element;

  for (let row = 1; row <= rows; row++) {
    gameTable.innerHTML += `<div class="row table-row-${row}"></div>`;
    const rowTable = document.querySelector(`.table-row-${row}`) as Element;

    for (let column = 1; column <= columns; column++) {
      rowTable.innerHTML += `<div class="col row-${row}-col-${column}"></div>`;
      const colPart = document.querySelector(
        `.row-${row}-col-${column}`
      ) as Element;

      for (let button = 0; button < 1; button++) {
        colPart.innerHTML += `<button id="${row} "value="${column}" class="cell-button"></button>`;
      }
    }
  }
};

const placeCellOnBoard = (
  row: number,
  column: number,
  currentBoard: Cell[][]
) => {
  const cellToPlace = document.querySelector(
    `.row-${row}-col-${column}`
  ) as Element;
  if (!currentBoard[row - 1][column - 1].alive) {
    currentBoard[row - 1][column - 1].alive = true;

    cellToPlace.classList.remove("dead");
    cellToPlace.classList.add("alive");
  } else if (currentBoard[row - 1][column - 1].alive) {
    currentBoard[row - 1][column - 1].alive = false;

    cellToPlace.classList.remove("alive");
    cellToPlace.classList.add("dead");
  }
};

const registerEventListeners = (currentBoard: Cell[][]) => {
  const cells = document.querySelectorAll(".cell-button");
  const resetButton = document.querySelector(".reset");
  const startButton = document.querySelector(".start");
  const randomButton = document.querySelector(".random");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const row = parseInt(cell.id);
      const column = parseInt(cell.value);
      console.log(row, column);
      placeCellOnBoard(row, column, currentBoard);
    });
  });
};

const startGame = () => {
  const rows = 80;
  const columns = 80;
  const currentBoard = generateGameBoard(rows, columns);
  generateUserGameBoard(rows, columns);
  registerEventListeners(currentBoard);
};

startGame();
