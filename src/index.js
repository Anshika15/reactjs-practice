import React from 'react';
import ReactDOM from 'react-dom';

class Cq extends React.Component {
	render() {
		return (
			<p>Hello World</p>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);

