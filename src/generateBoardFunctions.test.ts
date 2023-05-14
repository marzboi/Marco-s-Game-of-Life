import {
  generateGameBoard,
  generateRandomCells,
} from "./generateBoardFunctions";

describe("Given the function generateGameBoard", () => {
  describe("When given the row value of 2 and the column value of 2", () => {
    test("Then it should return a board with 2 columns and 2 rows", () => {
      const rows = 2;
      const columns = 2;

      const expectedResult = [
        [
          { alive: false, row: 1, col: 1 },
          { alive: false, row: 1, col: 2 },
        ],
        [
          { alive: false, row: 2, col: 1 },
          { alive: false, row: 2, col: 2 },
        ],
      ];

      const resultReturned = generateGameBoard(rows, columns);

      expect(resultReturned).toEqual(expectedResult);
    });
  });

  describe("When given the row value 1 and column value 1", () => {
    test("Then it should return an array with an object", () => {
      const rows = 1;
      const columns = 1;

      const expectedResult = [{ alive: false, row: 1, col: 1 }];
      const resultReturned = generateGameBoard(rows, columns);

      expect(resultReturned).toStrictEqual(resultReturned);
    });
  });
});

describe("Given the function generateRandomCells", () => {
  describe("When given the values of 2, 2", () => {
    test("Then it should return an array with legth of 2", () => {
      const rows = 2;
      const columns = 2;
      const expectedLength = 2;
      const resultReturned = generateGameBoard(rows, columns);
      generateRandomCells(resultReturned);
      expect(resultReturned).toHaveLength(expectedLength);
    });
  });
});
