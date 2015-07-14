
var React = require('react');

var NavBar = require('./navbar.jsx');
var GameDisplay = require('./gameDisplay.jsx');

var Page = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                <GameDisplay config={this.props.config}/>
            </div>
        );
    }
});

module.exports = Page;

