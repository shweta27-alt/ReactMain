import React, { Component } from 'react'

export class Pract2 extends Component {

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

export default Pract2
