/*jslint browser: true */

var domready = require('domready');

var React = require('react');

var Page = require('./page.jsx');

var config = {
    columns: 20,
    rows: 10,
    cellSize: 30,  // pixels
    timer: 500     // miliseconds
};

domready(function () {

    React.render(
        <Page config={config} />,
        document.getElementById('content')
    );

});

