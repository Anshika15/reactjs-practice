import React from 'react';
import ReactDOM from 'react-dom';

import Greet from './components/Greet'

class Cq extends React.Component {
	render() {
		return (
			<Greet />
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);

