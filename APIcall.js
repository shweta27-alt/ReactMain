import React, { Component } from 'react'

export class APIcall extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((val)=>{
            this.setState({data:val.data})
        }).catch((error)=>{
            console.log(error)
        })
    }
    
  render() {
    let value = this.state.data.map((val)=> <div>{val.title}</div>)
    return (
      <div>
        <div>{value}</div>
      </div>
    )
  }
}

export default APIcall
