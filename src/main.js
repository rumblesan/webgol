/*jslint browser: true */

var domready = require('domready');

var Canvas = require('./canvas');
var Board = require('./board');
var Display = require('./display');
var Mouse = require('./mouse');

var config = {
    columns: 20,
    rows: 10,
    cellSize: 30,  // pixels
    timer: 500     // miliseconds
};

var appState = {
    mouseColumn: -1,
    mouseRow: -1
};

var board = Board.createRandom(config.columns, config.rows);

domready(function () {
    var canvas = Canvas.create(
        document.getElementById("canvas"),
        config.columns,
        config.rows,
        config.cellSize
    );

    canvas.element.width = (config.columns * config.cellSize);
    canvas.element.height = (config.rows * config.cellSize);

    canvas.element.addEventListener('mousemove', function (e) {
        Mouse.position(canvas, e, function (x, y) {
            var c = Math.floor(x / canvas.cellSize);
            var r = Math.floor(y / canvas.cellSize);
            appState.mouseColumn = c;
            appState.mouseRow = r;
        });
    });

    canvas.element.addEventListener('mouseout', function (e) {
        appState.mouseColumn = -1;
        appState.mouseRow = -1;
    });

    canvas.element.addEventListener('click', function (e) {
        Mouse.position(canvas, e, function (x, y) {
            var c = Math.floor(x / canvas.cellSize);
            var r = Math.floor(y / canvas.cellSize);
            var v = Board.getCell(board, c, r);
            if (v === 0) {
                Board.setCell(board, c, r, 1);
            } else {
                Board.setCell(board, c, r, 0);
            }
        });
    });

    var animate = function () {
        Display.drawBoard(canvas, board, appState);
        board = Board.nextGeneration(board);
    };

    setInterval(animate, config.timer);
});

