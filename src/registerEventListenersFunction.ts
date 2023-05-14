import { Cell } from "./cellInterface.js";
import {
  generateGameBoard,
  generateRandomCells,
} from "./generateBoardFunctions.js";
import { applyRules } from "./applyRules.js";
import { checkNeighboard } from "./checkNeighbour.js";

export const generateUserGameBoard = (rows: number, columns: number) => {
  const gameTable = document.querySelector(".container-table") as Element;
  gameTable.innerHTML = "";

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

export const placeCellOnBoard = (
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

export const paintBoard = (currentBoard: Cell[][]) => {
  for (let row = 0; row < currentBoard.length; row++) {
    for (let col = 0; col < currentBoard[row].length; col++) {
      const cell = currentBoard[row][col];

      if (!cell.alive) {
        const cellToPlace = document.querySelector(
          `.row-${row + 1}-col-${col + 1}`
        ) as Element;
        cellToPlace.classList.remove("alive");
        cellToPlace.classList.add("dead");
      } else if (cell.alive) {
        const cellToPlace = document.querySelector(
          `.row-${row + 1}-col-${col + 1}`
        ) as Element;
        cellToPlace.classList.remove("dead");
        cellToPlace.classList.add("alive");
      }
    }
  }
};

export const registerEventListeners = (currentBoard: Cell[][]) => {
  const cells = document.querySelectorAll(".cell-button");
  const resetButton = document.querySelector(".reset");
  const startButton = document.querySelector(".start");
  const randomButton = document.querySelector(".random");
  const userRows = document.querySelector(".rows");
  const userColumns = document.querySelector(".columns");
  const gameTable = document.querySelector(".container-table") as Element;

  let gameRunning = false;
  let interval;

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const row = parseInt(cell.id);
      const column = parseInt(cell.value);
      placeCellOnBoard(row, column, currentBoard);
    });
  });

  randomButton?.addEventListener("click", () => {
    generateRandomCells(currentBoard);
    paintBoard(currentBoard);
  });

  startButton?.addEventListener("click", () => {
    if (!gameRunning) {
      gameRunning = true;
      startButton.textContent = "Pause";
      interval = setInterval(() => {
        const neighboardCount = checkNeighboard(currentBoard);
        applyRules(currentBoard, neighboardCount);
        paintBoard(currentBoard);
      }, 100);
    } else {
      gameRunning = false;
      startButton.textContent = "Start";
      clearInterval(interval);
    }
  });

  resetButton?.addEventListener("click", () => {
    gameTable.innerHTML = "";

    let rows = Number(userRows?.value);
    let columns = Number(userColumns?.value);
    if (rows < 10) {
      rows = 10;
    } else if (rows > 60) {
      rows = 60;
    }
    if (columns < 10) {
      columns = 10;
    } else if (columns > 100) {
      columns = 100;
    }

    currentBoard = generateGameBoard(rows, columns);
    generateUserGameBoard(rows, columns);
    paintBoard(currentBoard);

    clearInterval(interval);
    startButton.textContent = "Start";
    gameRunning = false;
    const cells = document.querySelectorAll(".cell-button");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const row = parseInt(cell.id);
        const column = parseInt(cell.value);
        placeCellOnBoard(row, column, currentBoard);
      });
    });
  });
};

export const startProgram = () => {
  const rows = 40;
  const columns = 80;
  const currentBoard = generateGameBoard(rows, columns);
  generateUserGameBoard(rows, columns);
  registerEventListeners(currentBoard);
};
