import React from 'react';
import ReactDOM from 'react-dom';

import Greet from './components/Greet'

import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'


class Cq extends React.Component {
	render() {
		return (
            <div>
            {/* <Counter />*/}
                <Greet name="Anshika" />
                {/*<Message />
			     <Greet name = "Anshika">
                // children props 
                    <p> I am a children prop</p>
                </Greet>
                <Greet name = "Anshul" />
                <Welcome name = "Palak"/> */}
            </div>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);

