"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");
var d3 = require("d3");

var DefaultPropsMixin = {
    propTypes: {
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        margin: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number
        }),
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        colorScale: PropTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        return {
            data: { label: "No data available", values: [{ x: "No data available", y: 1 }] },
            margin: { top: 0, bottom: 0, left: 0, right: 0 },
            xScale: null,
            yScale: null,
            colorScale: d3.scale.category20()
        };
    }
};

module.exports = DefaultPropsMixin;