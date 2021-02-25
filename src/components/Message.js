import React, { Component } from 'react'

class Message extends Component
{
    constructor()
    {
        super()
        this.state = {
            msg : "Welcome Visitor"
        }
    }

changeMessage(){
    this.setState({
        msg : 'Thankyou for subscribing'
    })
}

    render(){
        return(
            <div>
            <center>
                <h1>{this.state.msg}</h1>
                <button onClick={ () => this.changeMessage() }> Subscribe</button>
                </center>
            </div>
        ) 
    }
        
}

export default Message
