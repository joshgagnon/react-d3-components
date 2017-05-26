let React = require('react');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');
let d3 = require('d3');

let Path = createReactClass({
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

    getDefaultProps() {
        return {
            className: 'path',
            fill: 'none',
            strokeWidth: '2',
            strokeLinecap: 'butt',
            strokeDasharray: 'none'
        };
    },

    render() {
        let {className,
             stroke,
             strokeWidth,
             strokeLinecap,
             strokeDasharray,
             fill,
             d,
             style,
             data,
             onMouseEnter,
             onMouseLeave} = this.props;

        return (
                <path
            className={className}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeDasharray={strokeDasharray}
            fill={fill}
            d={d}
            onMouseMove={ evt => { onMouseEnter(evt, data); } }
            onMouseLeave={  evt => { onMouseLeave(evt); } }
            style={style}
                />
        );
    }
});

module.exports = Path;
