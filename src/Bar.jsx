let React = require('react');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');
let d3 = require('d3');

let Bar = createReactClass({
    propTypes: {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        fill: PropTypes.string.isRequired,
        data: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]).isRequired,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func
    },

    render() {
        let {x,
             y,
             width,
             height,
             fill,
             data,
             onMouseEnter,
             onMouseLeave} = this.props;

        return (
                <rect
            className="bar"
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            onMouseMove={ e => { onMouseEnter(e, data); } }
            onMouseLeave={ e => { onMouseLeave(e); } }
                />
        );
    }
});

module.exports = Bar;
