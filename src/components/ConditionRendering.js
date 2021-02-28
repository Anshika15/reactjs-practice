import React, { Component } from 'react'
/*
    4 methods for conditional Rendering:-
    i) if/else
    ii) element variables
    iii) ternary conditional operatores
    iv) shhort circuit operator
*/
class ConditionRendering extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    /* first method */
   /* render() {
        if(this.state.isLoggedIn){
        return(
            <div>
                Hello Anshika
            </div>
        )
        }
        else{
            return(
            <div>
                Hello guest
            </div>
        )
        }
    }*/

    /* Second Method */
   /* render(){
        let msg;
        if(this.state.isLoggedIn)
        {
            msg = <div> Welcome Anshika </div>
        }
        else{
            msg = <div> Welcome guest </div>
        }

        return(
            <div>{msg}</div>
        )
    }*/

    /* third method */
   /* render()
    {
        return this.state.isLoggedIn ? <div>Welcome Anshika</div> : <div> Welcome guest</div>
    }*/

    /* Fourth method */

    render()
    {
        return this.state.isLoggedIn && <div> Welcome Anshika </div>
    }
}

export default ConditionRendering
