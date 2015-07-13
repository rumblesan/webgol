
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

Canvas.mouse = function (canvas, board, column, row) {
    var newX, newY, s;
    s = canvas.cellSize;

    newX = (column * s) + 5;
    newY = (row * s) + 5;

    canvas.ctx.fillStyle = "red";
    canvas.ctx.fillRect(newX, newY, s - 10, s - 10);
};

module.exports = Canvas;

