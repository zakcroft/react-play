import React from 'react';
import ReactDOM from 'react-dom';
import {page} from './page';

const App = React.createClass({
	render: function() {
		return (
				<div className="content">
					<Page />,
				</div>
		);
	}
});

ReactDOM.render(
		<App />,
		document.getElementById('app')
);
