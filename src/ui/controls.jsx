
var React = require('react');

var Controls = React.createClass({
    toggleRunning: function () {
        this.props.controlHandler('running');
    },
    toggleRandomise: function () {
        this.props.controlHandler('randomise');
    },
    toggleReset: function () {
        this.props.controlHandler('reset');
    },
    render: function () {
        var running = this.props.running ? 'On' : 'Off';
        return (
            <div id='controls'>
                <span className='control-item'>Rumblesan</span>

                <span className='control-item' onClick={this.toggleRunning}>
                    Running: {running}
                </span>

                <span className='control-item' onClick={this.toggleRandomise}>
                    Randomise
                </span>

                <span className='control-item' onClick={this.toggleReset}>
                    Reset
                </span>

            </div>
        );
    }
});

module.exports = Controls;

