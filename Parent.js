//In parent we have 2 div and in child we have 1 button on click of button toggle the div suppose 'hey' is visible on click of button it will togglw to 'hello'
// check the child page for button event handling

import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

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
        <Child getToggle={this.getToggle}/>
        {this.state.count ?<div>
        heyyyyy
      </div> :
      <div>Hello</div>}
      
        </>

    )
  }
}

export default Parent
