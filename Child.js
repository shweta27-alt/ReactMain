import React, { Component } from 'react'

export class Child extends Component {

    handleClick = () =>{
        this.props.getToggle()
    }
    
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clickme</button>
      </div>
    )
  }
}

export default Child
