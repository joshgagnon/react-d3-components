"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");
var d3 = require("d3");

var Path = createReactClass({
    propTypes: {
        className: PropTypes.string,
        stroke: PropTypes.string.isRequired,
        strokeLinecap: PropTypes.string,
        strokeWidth: PropTypes.string,
        strokeDasharray: PropTypes.string,
        fill: PropTypes.string,
        d: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return {
            className: "path",
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "butt",
            strokeDasharray: "none"
        };
    },

    render: function render() {
        var _props = this.props;
        var className = _props.className;
        var stroke = _props.stroke;
        var strokeWidth = _props.strokeWidth;
        var strokeLinecap = _props.strokeLinecap;
        var strokeDasharray = _props.strokeDasharray;
        var fill = _props.fill;
        var d = _props.d;
        var style = _props.style;
        var data = _props.data;
        var onMouseEnter = _props.onMouseEnter;
        var onMouseLeave = _props.onMouseLeave;

        return React.createElement("path", {
            className: className,
            stroke: stroke,
            strokeWidth: strokeWidth,
            strokeLinecap: strokeLinecap,
            strokeDasharray: strokeDasharray,
            fill: fill,
            d: d,
            onMouseMove: function (evt) {
                onMouseEnter(evt, data);
            },
            onMouseLeave: function (evt) {
                onMouseLeave(evt);
            },
            style: style
        });
    }
});

module.exports = Path;