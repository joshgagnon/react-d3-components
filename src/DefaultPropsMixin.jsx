let React = require('react');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');
let d3 = require('d3');

let DefaultPropsMixin = {
    propTypes: {
        data: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ]).isRequired,
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

    getDefaultProps() {
        return {
            data: {label: 'No data available', values: [{x: 'No data available', y: 1}]},
            margin: {top: 0, bottom: 0, left: 0, right: 0},
            xScale: null,
            yScale: null,
            colorScale: d3.scale.category20()
        };
    }
};

module.exports = DefaultPropsMixin;
