let React = require('./ReactProvider');
let d3 = require('./D3Provider');

let Path = React.createClass({
	propTypes: {
		strokeWidth: React.PropTypes.string,
		stroke: React.PropTypes.string,
		d: React.PropTypes.string.isRequired,
		fill: React.PropTypes.string,
		className: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			strokeWidth: '2',
			stroke: d3.scale.category20()(),
			fill: 'none'
		};
	},

	render() {
		let {strokeWidth, stroke, d, fill, className} = this.props;

		return (
				<g>
				<path className={className} strokeWidth={strokeWidth} stroke={stroke} fill={fill} d={d}/>
				</g>
		);
	}
});

module.exports = Path;