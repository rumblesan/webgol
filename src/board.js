
var Board = {};

Board.create = function (columns, rows) {

    var board = {
        rows: rows,
        columns: columns,
        cells: []
    };

    var x, y;
    for (x = 0; x < columns; x += 1) {
        board.cells[x] = [];
        for (y = 0; y < rows; y += 1) {
            board.cells[x][y] = 0;
        }
    }

    return board;
};

Board.randomise = function (board) {
    var x, y, v;
    for (x = 0; x < board.columns; x += 1) {
        for (y = 0; y < board.rows; y += 1) {
            if (Math.random() > 0.5) {
                board.cells[x][y] = 1;
            } else {
                board.cells[x][y] = 0;
            }
        }
    }
    return board;
};

Board.reset = function (board) {
    return Board.create(board.columns, board.rows);
};

Board.setCell = function (board, column, row, value) {
    if ((column < board.columns) && (row < board.rows) && (column >= 0) && (row >= 0)) {
        board.cells[column][row] = value;
    }
    return board;
};

Board.getCell = function (board, column, row) {
    var output;
    if ((column < board.columns) && (row < board.rows) && (column >= 0) && (row >= 0)) {
        output = board.cells[column][row];
    } else {
        output = 0;
    }
    return output;
};

// TODO don't include cell in its own count
Board.getNeighbourScore = function (board, column, row) {
    var value = 0;
    value += Board.getCell(board, (column - 1), (row - 1));
    value += Board.getCell(board, (column - 1), (row));
    value += Board.getCell(board, (column - 1), (row + 1));
    value += Board.getCell(board, (column),     (row - 1));
    value += Board.getCell(board, (column),     (row + 1));
    value += Board.getCell(board, (column + 1), (row - 1));
    value += Board.getCell(board, (column + 1), (row));
    value += Board.getCell(board, (column + 1), (row + 1));
    return value;
};

Board.newCellValue = function (board, column, row) {
    var newValue;
    var currentValue = Board.getCell(board, column, row);
    var neighbourScore = Board.getNeighbourScore(board, column, row);
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

Board.nextGeneration = function (board) {
    var nextBoard = Board.create(board.columns, board.rows);
    var c, r;
    for (c = 0; c < board.columns; c += 1) {
        for (r = 0; r < board.rows; r += 1) {
            Board.setCell(nextBoard, c, r, Board.newCellValue(board, c, r));
        }
    }
    return nextBoard;
};

module.exports = Board;

