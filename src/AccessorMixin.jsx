let React = require('react');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');

let AccessorMixin = {
    propTypes: {
        label: PropTypes.func,
        values: PropTypes.func,
        x: PropTypes.func,
        y: PropTypes.func,
        y0: PropTypes.func
    },

    getDefaultProps() {
        return {
            label: stack => { return stack.label; },
            values: stack => { return stack.values; },
            x: e => { return e.x; },
            y: e => { return e.y; },
            y0: e => { return 0; }
        };
    }
};

module.exports = AccessorMixin;
