let React = require('react');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');
let d3 = require('d3');

let Tooltip = createReactClass({
    propTypes: {
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        html: PropTypes.node,
        translate: PropTypes.number
    },

    getDefaultProps() {
        return {
            top: 150,
            left: 100,
            html: '',
            translate: 50
        };
    },

    render() {
        let {top, left, hidden, html, translate} = this.props;

        let style = {
            display: hidden ? 'none' : 'block',
            position: 'fixed',
            top: top,
            left: left,
            transform: `translate(-${translate}%, 0)`,
            pointerEvents: 'none'
        };

        return (
                <div className="tooltip" style={style}>{html}</div>
        );
    }
});

module.exports = Tooltip;
