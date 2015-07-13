
var Mouse = {};

Mouse.position = function (canvas, evt, handler) {
    var rect = canvas.element.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    handler(x, y);
};

module.exports = Mouse;

