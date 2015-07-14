
var React = require('react');

var NavBar = React.createClass({
    render: function () {
        return (
            <div id='header'>
                <div id='menu'>
                    <span className='menu-item'>Rumblesan</span>
                </div>
            </div>
        );
    }
});

module.exports = NavBar;

