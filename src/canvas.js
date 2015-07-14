
var Conway = require ('./conway');

var Canvas = {};

Canvas.create = function (columns, rows, cellSize) {
    return {
        columns: columns,
        rows: rows,
        cellSize: cellSize
    };
};

Canvas.drawCell = function (canvas, context, column, row, value) {
    var s = canvas.cellSize;
    var x = column * s;
    var y = row * s;
    if (value === 0) {
        context.fillStyle = "white";
        context.fillRect(x, y, s, s);
        context.fillStyle = "black";
        context.fillRect(x + 1, y + 1, s - 2, s - 2);
    } else {
        context.fillStyle = "black";
        context.fillRect(x, y, s, s);
        context.fillStyle = "white";
        context.fillRect(x + 1, y + 1, s - 2, s - 2);
    }
};

Canvas.drawMouse = function (canvas, context, game, pointerPos) {
    var s = canvas.cellSize;
    var currentX = (pointerPos.column * s) + 5;
    var currentY = (pointerPos.row * s) + 5;

    context.fillStyle = "red";
    context.fillRect(currentX, currentY, s - 10, s - 10);
};

Canvas.drawGame = function (canvas, context, game, pointerPos) {
    var c, r;
    for (c = 0; c < game.columns; c += 1) {
        for (r = 0; r < game.rows; r += 1) {
            Canvas.drawCell(
                canvas, context, c, r, Conway.getCell(game, c, r)
            );
        }
    }
    Canvas.drawMouse(
        canvas,
        context,
        game,
        pointerPos
    );
};

module.exports = Canvas;

