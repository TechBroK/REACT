import React, { Component } from 'react'
class Message extends Component {
    constructor(){
        super()
        this.state={
            message: 'Welcome User'
        } 
    }
  render() {
    return(
       <>
        <h1>
            {
                this.state.message
            }<br />
            Welcome User Adekunle
        </h1>
        <button>Use State </button>
       </>
    )
}
}


export default Message