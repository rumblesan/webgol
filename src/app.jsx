
var React = require('react');

var Conway = require('./conway');

var Controls = require('./ui/controls.jsx');
var GameDisplay = require('./ui/gameDisplay.jsx');

var App = React.createClass({
    getInitialState: function () {
        return {
            mouse: { column: -1, row: -1 },
            game: Conway.create(
                this.props.config.columns,
                this.props.config.rows
            ),
            running: false,
            speed: this.props.config.startingSpeed
        };
    },
    handleDisplayMouse: function (xPos, yPos) {
        var newCol, newRow;
        if (xPos !== null && yPos !== null) {
            newCol = Math.floor(xPos * this.state.game.columns);
            newRow = Math.floor(yPos * this.state.game.rows);
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
        var c = Math.floor(xPos * this.state.game.columns);
        var r = Math.floor(yPos * this.state.game.rows);
        var v = Conway.getCell(this.state.game, c, r);
        var newGame;
        if (v === 0) {
            newGame = Conway.setCell(this.state.game, c, r, 1);
        } else {
            newGame = Conway.setCell(this.state.game, c, r, 0);
        }
        this.setState({
            game: newGame
        });
    },
    handleControls: function (control) {
        switch (control) {
            case 'running':
                this.toggleAnimation();
                break;
            case 'randomise':
                this.setState({game: Conway.randomise(this.state.game)});
                break;
            case 'reset':
                this.setState({game: Conway.reset(this.state.game)});
                break;
            case 'step':
                this.evolve();
                break;
            case 'speedup':
                if (this.state.speed < this.props.config.maxSpeed) {
                    this.setState({speed: this.state.speed + 1});
                }
                break;
            case 'slowdown':
                if (this.state.speed > this.props.config.minSpeed) {
                    this.setState({speed: this.state.speed - 1});
                }
                break;
            default:
                console.log('Unknown control');
        }
    },
    toggleAnimation: function () {
        this.setState(
            function () {
                return { running: (!this.state.running) };
            },
            this.animate
        );
    },
    animate: function () {
        if (this.state.running) {
            this.evolve();
            var t = (1 / this.state.speed) * 1000;
            setTimeout(this.animate, t);
        }
    },
    evolve: function () {
        this.setState({
            game: Conway.nextGeneration(this.state.game)
        });
    },
    render: function () {
        return (
            <div>
                <div id={'header'}>
                    <Controls
                        running={this.state.running}
                        controlHandler={this.handleControls}
                        speed={this.state.speed}
                    />
                </div>
                <GameDisplay
                    config={this.props.config}
                    game={this.state.game}
                    mouse={this.state.mouse}
                    handleMouse={this.handleDisplayMouse}
                    handleClick={this.handleDisplayClick}
                />
            </div>
        );
    }
});

module.exports = App;

