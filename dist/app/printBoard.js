export const printBoard = (board) => {
    let message = "";
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            if (board[row][column].alive) {
                message += " ❤️ ";
            }
            else {
                message += " 😒 ";
            }
        }
        message += "\n";
    }
    return message;
};
