/*jslint browser: true */

var domready = require('domready');

var React = require('react');

var App = require('./app.jsx');

var config = {
    columns: 20,
    rows: 10,
    cellSize: 30,  // pixels
    timer: 500     // miliseconds
};

domready(function () {

    React.render(
        <App config={config} />,
        document.getElementById('content')
    );

});

