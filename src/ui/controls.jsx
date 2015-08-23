
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
    singleStep: function () {
        this.props.controlHandler('step');
    },
    speedUp: function () {
        this.props.controlHandler('speedup');
    },
    slowDown: function () {
        this.props.controlHandler('slowdown');
    },
    render: function () {
        var running = this.props.running ? 'On' : 'Off';
        var speed = this.props.speed;
        return (
            <div id='controls'>
                <span className='control-item'>Rumblesan</span>

                <span className='control-item' onClick={this.toggleRunning}>
                    Running: {running}
                </span>

                <span className='control-item'>
                    <button onClick={this.slowDown}>-</button>
                    <span className='numeric-text'>
                        {this.props.speed}
                    </span>
                    <button onClick={this.speedUp}>+</button>
                </span>

                <span className='control-item' onClick={this.toggleRunning}>
                    Running: {running}
                </span>

                <span className='control-item' onClick={this.singleStep}>
                    Step
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

