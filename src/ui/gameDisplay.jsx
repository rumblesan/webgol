
var React   = require('react');

var Canvas  = require('../canvas');

var GameDisplay = React.createClass({
    getInitialState: function () {
        return {
            canvas: null
        };
    },
    componentDidMount: function () {
        this.setState({
            canvas: Canvas.create(
                this.props.config.columns,
                this.props.config.rows,
                this.props.config.cellSize
            )
        });
    },
    componentDidUpdate: function () {
        Canvas.drawBoard(
            this.state.canvas,
            this.getDOMNode().getContext('2d'),
            this.props.board,
            this.props.mouse
        );
    },
    handleMouseMove: function (event) {
        var node = this.getDOMNode();
        var rect = node.getBoundingClientRect();
        var xPos = (event.clientX - rect.left) / node.width;
        var yPos = (event.clientY - rect.top) / node.height;
        this.props.handleMouse(xPos, yPos);
    },
    handleMouseOut: function (event) {
        this.props.handleMouse(null, null);
    },
    handleClick: function (event) {
        var node = this.getDOMNode();
        var rect = node.getBoundingClientRect();
        var xPos = (event.clientX - rect.left) / node.width;
        var yPos = (event.clientY - rect.top) / node.height;
        this.props.handleClick(xPos, yPos);
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

