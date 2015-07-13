
var React = require('react');

var NavBar = require('./navbar.jsx');

var Page = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                <div><canvas id="canvas"></canvas></div>
            </div>
        );
    }
});

module.exports = Page;

