let React = require('react');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');

let Chart = createReactClass({
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

    render() {
        let {width, height, margin, viewBox, preserveAspectRatio, children} = this.props;

        return (
                <svg ref="svg" width={width} height={height} viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} >
                <g transform={`translate(${margin.left}, ${margin.top})`}>{children}</g>
                </svg>
        );
    }
});

module.exports = Chart;
