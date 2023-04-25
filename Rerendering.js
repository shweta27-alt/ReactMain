import React, { PureComponent } from 'react';

//when we have data which is same after the rerender so we don't want that data to render again so we use rerendering
// two methods 1. shouldComponentUpdate 2. pureComponent
export class Rerendering extends PureComponent {

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
    return (
      <div>
        <button onClick={this.handleClick}>Clickme</button>
      </div>
    )
  }
}

export default Rerendering
