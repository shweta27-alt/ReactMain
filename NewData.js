import React, { Component } from 'react'

export class NewData extends Component {
    ClickButton = () =>{
        this.props.handleClick(!this.props.value)
    }
  render() {
    return (
      <div>
        testttt
      <p>{this.props.value? <div>true</div>:null}</p>
       <button onClick={this.ClickButton}>button</button>
      </div>
    )
  }
}

export default NewData
