import React, { Component } from "react";

export class LifeCycleMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: true,
    };
  }

  clickHandler = () => {
    this.setState({ count: !this.state.count });
  };
  //lifecycle method

  // take the decision to update the component or not based on updated props and state
  //if retrun true it will render the component and call the componentdidmount and updated
  // if false componennt rerender nahi hoga
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldcomp", this.state.count, nextState.count);
    return true;
  }

  //it get call initially when component is mounted
  //API call
  componentDidMount() {
    console.log(this.state.count);
  }

  // when component get update it get called when we change the state or props
  componentDidUpdate(prevProps, prevState) {
    console.log("update", this.state.count, prevState.count);
  }

  // when our component get destroyed it get called
  componentWillUnmount() {}

  render() {
    return (
      <div>
        {this.state.count ? "true" : "false"}
        {/* {this.state.count ? <NewData/> : null}  */}
        {/* {this.state.count ? null: <div>False</div> } */}
        {/* <NewData clickHandler = {this.clickHandler}  value= {this.state.count}/>    */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default LifeCycleMethod;
