import React, { PureComponent } from 'react';
import axios from 'axios';

export class Shweta2 extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         data: "heyy"
      }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.data == nextState.data){
    //         return false
    //     }
    //     return true
        
    // }
    
    componentDidUpdate(){
           console.log("heyy")
    }

    handleClick = () =>{
        this.setState({data:"heyyy"})
    }
  render() {
    //  let value = this.state.data && this.state.data.map((val)=> <div>{val.body}</div>)

    return (
      <div>
        {/* {value} */}
        <button onClick={this.handleClick}>Clickme</button>
      </div>
    )
  }
}

export default Shweta2
