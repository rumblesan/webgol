
var React = require('react');

var ToggleNavButton = React.createClass({
    getInitialState: function () {
        return {value: this.props.defValue};
    },
    handleClick: function (event) {
        this.setState({value: !this.state.value});
    },
    render: function () {
        var text = this.state.value ? 'On' : 'Off';
        return (
            <span onClick={this.handleClick} className='menu-item'>
                {this.props.text}: {text}
            </span>
        );
    }
});

module.exports = ToggleNavButton;

