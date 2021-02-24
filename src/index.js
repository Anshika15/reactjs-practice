import React from 'react';
import ReactDOM from 'react-dom';

import Greet from './components/Greet'

import Welcome from './components/Welcome'

class Cq extends React.Component {
	render() {
		return (
            <div>
			    <Greet />
                <Welcome />
            </div>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);

