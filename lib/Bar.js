"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");
var d3 = require("d3");

var Bar = createReactClass({
    propTypes: {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        fill: PropTypes.string.isRequired,
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func
    },

    render: function render() {
        var _props = this.props;
        var x = _props.x;
        var y = _props.y;
        var width = _props.width;
        var height = _props.height;
        var fill = _props.fill;
        var data = _props.data;
        var onMouseEnter = _props.onMouseEnter;
        var onMouseLeave = _props.onMouseLeave;

        return React.createElement("rect", {
            className: "bar",
            x: x,
            y: y,
            width: width,
            height: height,
            fill: fill,
            onMouseMove: function (e) {
                onMouseEnter(e, data);
            },
            onMouseLeave: function (e) {
                onMouseLeave(e);
            }
        });
    }
});

module.exports = Bar;