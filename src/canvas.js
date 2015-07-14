
var Board = require ('./board');

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

Canvas.mouse = function (canvas, context, board, mousePosition) {
    var s = canvas.cellSize;
    var currentX = (mousePosition.column * s) + 5;
    var currentY = (mousePosition.row * s) + 5;

    context.fillStyle = "red";
    context.fillRect(currentX, currentY, s - 10, s - 10);
};

module.exports = Canvas;

