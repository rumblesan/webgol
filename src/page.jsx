
var React = require('react');

var Board = require('./board');

var NavBar = require('./navbar.jsx');
var GameDisplay = require('./gameDisplay.jsx');

var Page = React.createClass({
    getInitialState: function () {
        return {
            mouse: { column: -1, row: -1 },
            board: Board.create(
                this.props.config.columns,
                this.props.config.rows
            ),
            running: false,
            animationTimer: null
        };
    },
    handleDisplayMouse: function (xPos, yPos) {
        var newCol, newRow;
        if (xPos !== null && yPos !== null) {
            newCol = Math.floor(xPos * this.state.board.columns);
            newRow = Math.floor(yPos * this.state.board.rows);
        } else {
            newCol = -1;
            newRow = -1;
        }
        if (
            (newCol !== this.state.mouse.column) ||
            (newRow !== this.state.mouse.row)) {
            this.setState({
                mouse: { column: newCol, row: newRow }
            });
        }
    },
    handleDisplayClick: function (xPos, yPos) {
        var c = Math.floor(xPos * this.state.board.columns);
        var r = Math.floor(yPos * this.state.board.rows);
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
    handleControls: function (control) {
        switch (control) {
            case 'running':
                this.toggleAnimation();
                break;
            case 'randomise':
                this.setState({board: Board.randomise(this.state.board)});
                break;
            case 'reset':
                this.setState({board: Board.reset(this.state.board)});
                break;
            default:
                console.log('Unknown control');
        }
    },
    toggleAnimation: function () {
        if (this.state.animationTimer !== null) {
            clearInterval(this.state.animationTimer);
        }
        if (this.state.running) {
            this.setState({
                running: false,
                animationTimer: null
            });
        } else {
            this.setState({
                running: true,
                animationTimer: setInterval(this.evolve, this.props.config.timer)
            });
        }
    },
    evolve: function () {
        this.setState({
            board: Board.nextGeneration(this.state.board)
        });
    },
    render: function () {
        return (
            <div>
                <NavBar running={this.state.running} controls={this.handleControls}/>
                <GameDisplay
                    config={this.props.config}
                    board={this.state.board}
                    mouse={this.state.mouse}
                    handleMouse={this.handleDisplayMouse}
                    handleClick={this.handleDisplayClick}
                />
            </div>
        );
    }
});

module.exports = Page;

