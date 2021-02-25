import React from 'react'

const Greet = (props) => {
    return (
        <div>
            <h1> Hello {props.name} </h1>
            {props.children}
        </div>
    )
}

// function Greet(){
//     return <h1>Hello Anshika!</h1>
// }

// named export
//export const Greet = () => <h1> Hello World! </h1> 

export default Greet
