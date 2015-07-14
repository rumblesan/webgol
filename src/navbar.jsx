
var React = require('react');

var ToggleNavButton = require('./toggleNavButton.jsx');

var NavBar = React.createClass({
    render: function () {
        return (
            <div id='header'>
                <div id='menu'>
                    <span className='menu-item'>Rumblesan</span>
                    <ToggleNavButton defValue={true} text='Running'/>
                </div>
            </div>
        );
    }
});

module.exports = NavBar;

