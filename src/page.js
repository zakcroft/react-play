import React from 'react';

const swipeMixins = {
	componentWillMount: function() {
		this.intervals = [];
	},
	setInterval: function() {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function() {
		this.intervals.forEach(clearInterval);
	}
};

const Page = React.createClass({
	mixins: [swipeMixins],
	getDefaultState: function() {
		return {
			content: 'No content'
		};
	},
	getInitialState: function() {
		return {
			content: ''
		};
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return (
			<div className="psge">
				
			</div>
		);
	}
})

export page;
