import React, { Component } from 'react'

class RegComp extends Component{
    render(){
        console.log("****Regular Component Render*****")
        return( 
            <div>
            Pure Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
