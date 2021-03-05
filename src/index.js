import React from 'react';
import ReactDOM from 'react-dom';

import FocusInput from './components/FocusInput'

class Cq extends React.Component {
	render() {
		return (
            <div>
                <FocusInput />
            </div>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);

