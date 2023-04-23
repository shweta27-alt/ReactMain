import React, { Component } from 'react'
import Pract2 from './Pract2'

class Practs1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: true
      }
    }

    getToggle = () =>{
        this.setState({count: !this.state.count})
    }
    
  render() {
    return (
        <>
        <Pract2 getToggle={this.getToggle}/>
        {this.state.count ?<div>
        heyyyyy
      </div> :
      <div>Hello</div>}
      
        </>

    )
  }
}

export default Practs1
