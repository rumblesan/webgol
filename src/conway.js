
var Conway = {};

Conway.create = function (columns, rows) {

    var game = {
        rows: rows,
        columns: columns,
        cells: []
    };

    var x, y;
    for (x = 0; x < columns; x += 1) {
        game.cells[x] = [];
        for (y = 0; y < rows; y += 1) {
            game.cells[x][y] = 0;
        }
    }

    return game;
};

Conway.randomise = function (game) {
    var x, y, v;
    for (x = 0; x < game.columns; x += 1) {
        for (y = 0; y < game.rows; y += 1) {
            if (Math.random() > 0.5) {
                game.cells[x][y] = 1;
            } else {
                game.cells[x][y] = 0;
            }
        }
    }
    return game;
};

Conway.reset = function (game) {
    return Conway.create(game.columns, game.rows);
};

Conway.setCell = function (game, column, row, value) {
    if ((column < game.columns) && (row < game.rows) && (column >= 0) && (row >= 0)) {
        game.cells[column][row] = value;
    }
    return game;
};

Conway.getCell = function (game, column, row) {
    var output;
    if ((column < game.columns) && (row < game.rows) && (column >= 0) && (row >= 0)) {
        output = game.cells[column][row];
    } else {
        output = 0;
    }
    return output;
};

// TODO don't include cell in its own count
Conway.getNeighbourScore = function (game, column, row) {
    var value = 0;
    value += Conway.getCell(game, (column - 1), (row - 1));
    value += Conway.getCell(game, (column - 1), (row));
    value += Conway.getCell(game, (column - 1), (row + 1));
    value += Conway.getCell(game, (column),     (row - 1));
    value += Conway.getCell(game, (column),     (row + 1));
    value += Conway.getCell(game, (column + 1), (row - 1));
    value += Conway.getCell(game, (column + 1), (row));
    value += Conway.getCell(game, (column + 1), (row + 1));
    return value;
};

Conway.newCellValue = function (game, column, row) {
    var newValue;
    var currentValue = Conway.getCell(game, column, row);
    var neighbourScore = Conway.getNeighbourScore(game, column, row);
    if (currentValue === 0) {
        if (neighbourScore === 3) {
            newValue = 1;
        } else {
            newValue = 0;
        }
    } else {
        if (neighbourScore < 2) {
            newValue = 0;
        } else if (neighbourScore > 3) {
            newValue = 0;
        } else {
            newValue = 1;
        }
    }
    return newValue;
};

Conway.nextGeneration = function (game) {
    var nextConway = Conway.create(game.columns, game.rows);
    var c, r;
    for (c = 0; c < game.columns; c += 1) {
        for (r = 0; r < game.rows; r += 1) {
            Conway.setCell(nextConway, c, r, Conway.newCellValue(game, c, r));
        }
    }
    return nextConway;
};

module.exports = Conway;

