
var Canvas = require ('./canvas');
var Board = require ('./board');

var Display = {};

Display.drawBoard = function (canvas, board, appState) {
    var c, r;
    for (c = 0; c < board.columns; c += 1) {
        for (r = 0; r < board.rows; r += 1) {
            Canvas.drawCell(
                canvas, c, r, Board.getCell(board, c, r)
            );
        }
    }
    Canvas.mouse(
        canvas,
        board,
        appState.mouseColumn,
        appState.mouseRow
    );
};

module.exports = Display;

