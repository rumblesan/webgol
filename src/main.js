/*jslint browser: true */

var domready = require('domready');

var Canvas = require('./canvas');
var Board = require('./board');
var Display = require('./display');

var config = {
    columns: 40,
    rows: 30,
    cellSize: 30,  // pixels
    timer: 500     // miliseconds
};

var board = Board.createRandom(config.columns, config.rows);

domready(function () {


    var canvasEl = document.getElementById("canvas");
    canvasEl.width = (config.columns * config.cellSize);
    canvasEl.height = (config.rows * config.cellSize);

    var canvas = Canvas.create(canvasEl, config.columns, config.rows, config.cellSize);

    var animate = function () {
        Display.drawBoard(board, canvas);
        board = Board.nextGeneration(board);
    };

    setInterval(animate, config.timer);

});

