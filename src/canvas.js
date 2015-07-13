
var Canvas = {};

Canvas.create = function (canvasEl, columns, rows, cellSize) {

    var canvas = {
        columns: columns,
        rows: rows,
        cellSize: cellSize,
        element: canvasEl,
        ctx: canvasEl.getContext("2d")
    };

    Canvas.drawGrid(canvas);
    return canvas;

};

Canvas.drawGrid = function (canvas) {
    canvas.ctx.fillStyle = "black";
    var size = canvas.cellSize - 1;
    var c, r, x, y;
    for (c = 0; c < canvas.columns; c += 1) {
        x = c * canvas.cellSize;
        for (r = 0; r < canvas.rows; r += 1) {
            y = r * canvas.cellSize;
            canvas.ctx.fillRect(x, y, size, size);
        }
    }
};

Canvas.drawCell = function (canvas, column, row, value) {
    var x, y;
    if (value === 0) {
        canvas.ctx.fillStyle = "black";
    } else {
        canvas.ctx.fillStyle = "white";
    }
    x = column * canvas.cellSize;
    y = row * canvas.cellSize;

    canvas.ctx.fillRect(x, y, canvas.cellSize - 1, canvas.cellSize - 1);
};

module.exports = Canvas;

