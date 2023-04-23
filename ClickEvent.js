import React,{Component} from 'react';
import NewData from './NewData';

class ClickEvent extends Component{
 
  constructor(props){
    super(props);
     
    this.state={
        count:true
    }
  }

  handleClick = () => {
    this.setState({count: !this.state.count})
}

    render(){
        return(
            <div>
                {/* <p>{this.state.count  ? "true" : "false"}</p> */}
                {/* <p>{this.state.count  ? <NewData/> : null}</p> */}
                <NewData handleClick= {this.handleClick} value={ this.state.count}/>
                {/* <button onClick={this.handleClick}>Click me</button> */}
            </div>
        )
    }
}

export default ClickEvent