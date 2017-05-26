let React = require('react');
let createReactClass = require('create-react-class');
let PropTypes = require('prop-types');
let d3 = require('d3');

let Chart = require('./Chart');
let Tooltip = require('./Tooltip');

let DefaultPropsMixin = require('./DefaultPropsMixin');
let HeightWidthMixin = require('./HeightWidthMixin');
let AccessorMixin = require('./AccessorMixin');
let TooltipMixin = require('./TooltipMixin');

let Wedge = createReactClass({
	propTypes: {
		d: PropTypes.string.isRequired,
		fill: PropTypes.string.isRequired
	},

	render() {
		let {fill, d, data, onMouseEnter, onMouseLeave} = this.props;

		return (
				<path
			fill={fill}
			d={d}
			onMouseMove={ evt => { onMouseEnter(evt, data); } }
			onMouseLeave={  evt => { onMouseLeave(evt); } }
				/>
		);
	}
});

let DataSet = createReactClass({
	propTypes: {
		pie: PropTypes.array.isRequired,
		arc: PropTypes.func.isRequired,
		outerArc: PropTypes.func.isRequired,
		colorScale: PropTypes.func.isRequired,
		radius: PropTypes.number.isRequired,
		strokeWidth: PropTypes.number,
		stroke: PropTypes.string,
		fill: PropTypes.string,
		opacity: PropTypes.number,
		x: PropTypes.func.isRequired
	},

	getDefaultProps() {
		return {
			strokeWidth: 2,
			stroke: '#000',
			fill: 'none',
			opacity: 0.3
		};
	},

	render() {
		let {pie,
			 arc,
			 outerArc,
			 colorScale,
			 radius,
			 strokeWidth,
			 stroke,
			 fill,
			 opacity,
			 x,
			 y,
			 onMouseEnter,
			 onMouseLeave} = this.props;

		let wedges = pie.map((e, index) => {
			function midAngle(d){
				return d.startAngle + (d.endAngle - d.startAngle)/2;
			}

			let d = arc(e);

			let labelPos = outerArc.centroid(e);
			labelPos[0] = radius * (midAngle(e) < Math.PI ? 1 : -1);

            let textAnchor = midAngle(e) < Math.PI ? 'start' : 'end';

			let linePos = outerArc.centroid(e);
			linePos[0] = radius * 0.95 * (midAngle(e) < Math.PI ? 1 : -1);

			return (
					<g key={`${x(e.data)}.${y(e.data)}.${index}`} className="arc">
					<Wedge
				data={e.data}
				fill={colorScale(x(e.data))}
				d={d}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
					/>

					<polyline
				opacity={opacity}
				strokeWidth={strokeWidth}
				stroke={stroke}
				fill={fill}
				points={[arc.centroid(e), outerArc.centroid(e), linePos]}
					/>

					<text
				dy=".35em"
				x={labelPos[0]}
				y={labelPos[1]}
				textAnchor={textAnchor}>{x(e.data)}</text>
					</g>
			);
		});

		return (
				<g>
				{wedges}
			</g>
		);
	}
});

let PieChart = createReactClass({
	mixins: [DefaultPropsMixin,
			 HeightWidthMixin,
			 AccessorMixin,
			 TooltipMixin],

	propTypes: {
		innerRadius: PropTypes.number,
		outerRadius: PropTypes.number,
		labelRadius: PropTypes.number,
		padRadius: PropTypes.string,
		cornerRadius: PropTypes.number,
		sort: PropTypes.any,
        viewBox: PropTypes.string,
        preserveAspectRatio: PropTypes.string,
        style: PropTypes.object
	},

	getDefaultProps() {
		return {
			innerRadius: null,
			outerRadius: null,
			labelRadius: null,
            padRadius: 'auto',
			cornerRadius: 0,
			sort: undefined
		};
	},

	_tooltipHtml(d, position) {
        let html = this.props.tooltipHtml(this.props.x(d), this.props.y(d));

        return [html, 0, 0];
	},

	render() {
		let {data,
			 width,
			 height,
			 margin,
			 colorScale,
			 innerRadius,
			 outerRadius,
			 labelRadius,
			 padRadius,
			 cornerRadius,
             viewBox,
             preserveAspectRatio,
			 sort,
			 x,
			 y,
			 values} = this.props;

		let [innerWidth,
			 innerHeight] = [this._innerWidth,
							 this._innerHeight];

		let pie = d3.layout.pie()
				.value(e => { return y(e); });

		if (typeof sort !== 'undefined') {
			pie = pie.sort(sort);
		}

		let radius = Math.min(innerWidth, innerHeight) / 2;
		if (!innerRadius) {
			innerRadius = radius * 0.8;
		}

		if (!outerRadius) {
			outerRadius = radius * 0.4;
		}

		if (!labelRadius) {
			labelRadius = radius * 0.9;
		}

		let arc = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.padRadius(padRadius)
				.cornerRadius(cornerRadius);

		let outerArc = d3.svg.arc()
				.innerRadius(labelRadius)
				.outerRadius(labelRadius);

		let pieData = pie(values(data));

		let translation = `translate(${innerWidth/2}, ${innerHeight/2})`;
        let chartProps = {
            height: height,
            width: widget,
            margin: margin,
            viewBox: viewBox,
            preserveAspectRatio: preserveAspectRatio
        }
		return (
			<div>
				<Chart {...chartProps}>
				<g transform={translation}>
				<DataSet
			width={innerWidth}
			height={innerHeight}
			colorScale={colorScale}
			pie={pieData}
			arc={arc}
			outerArc={outerArc}
			radius={radius}
			x={x}
			y={y}
			onMouseEnter={this.onMouseEnter}
			onMouseLeave={this.onMouseLeave}
				/>
				</g>
				{ this.props.children }
				</Chart>

                <Tooltip {...this.state.tooltip}/>
				</div>
		);
	}
});

module.exports = PieChart;
