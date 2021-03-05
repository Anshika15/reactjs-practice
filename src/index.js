import React from 'react';
import ReactDOM from 'react-dom';

import Greet from './components/Greet'

import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ConditionRendering from './components/ConditionRendering'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentsDemo from './components/FragmentsDemo'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'

class Cq extends React.Component {
	render() {
		return (
            <div>
                <ParentComp />
                {/*<FragmentsDemo /> */}
                {/*<LifecycleA />*/}
               {/*} <Form />
                <h1 className='error'>Error</h1>
                <h1 className = {styles.success}>Success</h1>
                <Inline />
                <StyleSheet />
                <NameList />
                <ConditionRendering /> */}
                {/*<ParentComponent />*/}
               {/* <EventBind /> 
                <FunctionClick />*/}
               {/* <ClassClick /> */}
               {/* <Counter />
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

