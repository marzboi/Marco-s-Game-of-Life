import { Cell } from "./cellInterface";
import {
  generateGameBoard,
  generateRandomCells,
} from "./generateBoardFunctions";
import { printBoard } from "./printBoard";

describe("Given the function printBoard", () => {
  describe("When given the values of a board with 1 and 1", () => {
    test("Then it should return a string with the messages", () => {
      const board = generateGameBoard(1, 1);

      const expectedResult = " 0 \n";
      const resultReturned = printBoard(board);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the values of a board with 1 and 1", () => {
    test("Then it should return a string with the message", () => {
      const board: Cell[][] = generateGameBoard(1, 1);
      generateRandomCells(board);

      const expectedResult = " 1 \n";
      const resultReturned = printBoard(board);

      expect(resultReturned).toHaveBeenCalledWith(expectedResult);
    });
  });
});
