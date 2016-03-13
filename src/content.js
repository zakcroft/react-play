

const Page = React.createClass({
	mixins: [swipeMixins],
	getInitialState: function() {
		return {seconds: 0};
	},
	componentDidMount: function() {
		this.setInterval(this.tick, 1000); // Call a method on the mixin
	},
	render: function() {
		return (
			<div className="page">

			</div>
		);
	}
})