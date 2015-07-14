
var React = require('react');

var NavBar = React.createClass({
    toggleRunning: function () {
        this.props.controls('running');
    },
    toggleRandomise: function () {
        this.props.controls('randomise');
    },
    toggleReset: function () {
        this.props.controls('reset');
    },
    render: function () {
        var running = this.props.running ? 'On' : 'Off';
        return (
            <div id='header'>
                <div id='menu'>
                    <span className='menu-item'>Rumblesan</span>

                    <span className='menu-item' onClick={this.toggleRunning}>
                        Running: {running}
                    </span>

                    <span className='menu-item' onClick={this.toggleRandomise}>
                        Randomise
                    </span>

                    <span className='menu-item' onClick={this.toggleReset}>
                        Reset
                    </span>

                </div>
            </div>
        );
    }
});

module.exports = NavBar;

