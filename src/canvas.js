
var Board = require ('./board');

var Canvas = {};

Canvas.create = function (canvasEl, columns, rows, cellSize) {

    var canvas = {
        columns: columns,
        rows: rows,
        cellSize: cellSize,
        element: canvasEl,
        ctx: canvasEl.getContext("2d")
    };

    return canvas;

};

Canvas.drawCell = function (canvas, column, row, value) {
    var x, y, s;
    s = canvas.cellSize;
    x = column * s;
    y = row * s;
    if (value === 0) {
        canvas.ctx.fillStyle = "white";
        canvas.ctx.fillRect(x, y, s, s);
        canvas.ctx.fillStyle = "black";
        canvas.ctx.fillRect(x + 1, y + 1, s - 2, s - 2);
    } else {
        canvas.ctx.fillStyle = "black";
        canvas.ctx.fillRect(x, y, s, s);
        canvas.ctx.fillStyle = "white";
        canvas.ctx.fillRect(x + 1, y + 1, s - 2, s - 2);
    }
};

Canvas.mouse = function (canvas, board, mouseState) {
    var currentX, currentY, prevX, prevY, s;
    s = canvas.cellSize;

    currentX = (mouseState.column * s) + 5;
    currentY = (mouseState.row * s) + 5;

    prevX = (mouseState.prevColumn * s) + 5;
    prevY = (mouseState.prevRow * s) + 5;

    Canvas.drawCell(
        canvas,
        mouseState.prevColumn,
        mouseState.prevRow,
        Board.getCell(
            board,
            mouseState.prevColumn,
            mouseState.prevRow
        )
    );

    canvas.ctx.fillStyle = "red";
    canvas.ctx.fillRect(currentX, currentY, s - 10, s - 10);

};

module.exports = Canvas;

