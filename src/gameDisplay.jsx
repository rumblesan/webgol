
var React   = require('react');

var Canvas  = require('./canvas');
var Board   = require('./board');
var Display = require('./display');

var GameDisplay = React.createClass({
    getInitialState: function () {
        var board = Board.create(this.props.config.columns, this.props.config.rows);
        return {
            mouse: { column: -1, row: -1 },
            canvas: Canvas.create(
                this.props.config.columns,
                this.props.config.rows,
                this.props.config.cellSize
            ),
            board: Board.randomise(board)
        };
    },
    componentDidMount: function () {
        this.evolve();
        setInterval(this.evolve, this.props.config.timer);
    },
    componentDidUpdate: function () {
        Display.drawBoard(
            this.state.canvas,
            this.getDOMNode().getContext('2d'),
            this.state.board,
            this.state.mouse
        );
    },
    handleMouseMove: function (event) {
        var rect = this.getDOMNode().getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        var c = Math.floor(x / this.props.config.cellSize);
        var r = Math.floor(y / this.props.config.cellSize);
        if ((c !== this.state.mouse.column) || (r !== this.state.mouse.row)) {
            this.setState({
                mouse: { column: c, row: r }
            });
        }
    },
    handleMouseOut: function (event) {
        this.setState({
            mouse: { column: -1, row: -1 }
        });
    },
    handleClick: function (event) {
        var rect = this.getDOMNode().getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        var c = Math.floor(x / this.props.config.cellSize);
        var r = Math.floor(y / this.props.config.cellSize);
        var v = Board.getCell(this.state.board, c, r);
        var newBoard;
        if (v === 0) {
            newBoard = Board.setCell(this.state.board, c, r, 1);
        } else {
            newBoard = Board.setCell(this.state.board, c, r, 0);
        }
        this.setState({
            board: newBoard
        });
    },
    evolve: function () {
        this.setState({
            board: Board.nextGeneration(this.state.board)
        });
    },
    render: function () {
        return (
            <canvas
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
                onClick={this.handleClick}
                width={this.props.config.columns * this.props.config.cellSize}
                height={this.props.config.rows * this.props.config.cellSize}
            ></canvas>
        );
    }
});

module.exports = GameDisplay;


