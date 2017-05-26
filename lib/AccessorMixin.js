"use strict";

var React = require("react");
var createReactClass = require("create-react-class");
var PropTypes = require("prop-types");

var AccessorMixin = {
    propTypes: {
        label: PropTypes.func,
        values: PropTypes.func,
        x: PropTypes.func,
        y: PropTypes.func,
        y0: PropTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        return {
            label: function (stack) {
                return stack.label;
            },
            values: function (stack) {
                return stack.values;
            },
            x: function (e) {
                return e.x;
            },
            y: function (e) {
                return e.y;
            },
            y0: function (e) {
                return 0;
            }
        };
    }
};

module.exports = AccessorMixin;