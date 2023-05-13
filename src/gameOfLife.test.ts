import { generateGameBoard } from "./gameOfLife";

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

  describe("When given the row value 0 and column value 0", () => {
    test("Then it should return a []", () => {
      const rows = 0;
      const columns = 0;

      const expectedResult: [] = [];
      const resultReturned = generateGameBoard(rows, columns);

      expect(resultReturned).toEqual(expectedResult);
    });
  });
});
