
import React, { Component } from 'react'

//using state in class components
export default class Message extends Component {
    constructor(){
        super()
        this.state={
            message:"Welcom visitor"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for subscribing"
        })
    }

  render() {
    return (
        <>
        <h1>{this.state.message}</h1>
        <button className='btn btn-primary' onClick={()=>this.changeMessage()}>Subscribe</button>
        </>
    )
  }
}
