import React from 'react'

const Greet = ({name}) => {
    return (
        <div>
            <h1> Hello {name} </h1>
        </div>
    )
}

// function Greet(){
//     return <h1>Hello Anshika!</h1>
// }

// named export
//export const Greet = () => <h1> Hello World! </h1> 

export default Greet
