import { applyRules } from "./applyRules";
import { checkNeighboard } from "./checkNeighbour";
import { generateGameBoard } from "./generateBoardFunctions";

describe("Given the function applyRules", () => {
  describe("When given the board with all 0", () => {
    test("Then it should return the same board", () => {
      const board = generateGameBoard(2, 2);
      const neighboardCells = checkNeighboard(board);
      applyRules(board, neighboardCells);

      const expectResult = [
        [
          { alive: false, row: 1, col: 1 },
          { alive: false, row: 1, col: 2 },
        ],
        [
          { alive: false, row: 2, col: 1 },
          { alive: false, row: 2, col: 2 },
        ],
      ];

      const resultReturned = board;

      expect(resultReturned).toEqual(expectResult);
    });
  });
});
