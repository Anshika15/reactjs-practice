import React from 'react';
import ReactDOM from 'react-dom';

import PortalsDemo from './components/PortalsDemo'

class Cq extends React.Component {
	render() {
		return (
            <div>
                <PortalsDemo />
            </div>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);

