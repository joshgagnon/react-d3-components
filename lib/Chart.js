"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");

var Chart = createReactClass({
    propTypes: {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        margin: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number
        }).isRequired
    },

    render: function render() {
        var _props = this.props;
        var width = _props.width;
        var height = _props.height;
        var margin = _props.margin;
        var viewBox = _props.viewBox;
        var preserveAspectRatio = _props.preserveAspectRatio;
        var children = _props.children;

        return React.createElement(
            "svg",
            { ref: "svg", width: width, height: height, viewBox: viewBox, preserveAspectRatio: preserveAspectRatio },
            React.createElement(
                "g",
                { transform: "translate(" + margin.left + ", " + margin.top + ")" },
                children
            )
        );
    }
});

module.exports = Chart;