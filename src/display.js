
var Canvas = require ('./canvas');
var Board = require ('./board');

var Display = {};

Display.drawBoard = function (canvas, context, board, mousePosition) {
    var c, r;
    for (c = 0; c < board.columns; c += 1) {
        for (r = 0; r < board.rows; r += 1) {
            Canvas.drawCell(
                canvas, context, c, r, Board.getCell(board, c, r)
            );
        }
    }
    Canvas.mouse(
        canvas,
        context,
        board,
        mousePosition
    );
};

module.exports = Display;

