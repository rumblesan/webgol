/*jslint browser: true */

var domready = require('domready');

var React = require('react');

var App = require('./app.jsx');

var config = {
    columns: 48,
    rows: 32,
    cellSize: 30,  // pixels
    maxSpeed: 20,
    startingSpeed: 10,
    minSpeed: 1
};

domready(function () {

    React.render(
        <App config={config} />,
        document.getElementById('content')
    );

});

