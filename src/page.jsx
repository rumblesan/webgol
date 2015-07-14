
var React = require('react');

var Board   = require('./board');

var NavBar = require('./navbar.jsx');
var GameDisplay = require('./gameDisplay.jsx');

var Page = React.createClass({
    getInitialState: function () {
        return {
            board: Board.create(
                this.props.config.columns,
                this.props.config.rows
            )
        };
    },
    render: function () {
        return (
            <div>
                <NavBar />
                <GameDisplay
                    config={this.props.config}
                    board={this.state.board}
                />
            </div>
        );
    }
});

module.exports = Page;

