import React, { Component } from 'react'

class RefsDemo extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null // callback refs
        this.setCBRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount(){
       /* this.inputRef.current.focus()*/
        if(this.cbRef)
        {
            this.cbRef.focus()
        }
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render(){
        console.log("****Regular Component Render*****")
        return( 
            <div>
            <input type="text" ref = {this.inputRef}/>
            <input type="text" ref = {this.setCBRef}/>
            <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
