import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
     count:0,
     show :true
    };
    console.log("Call : constructor");
  }
  static getDerivedStateFromProps() {
    console.log("Call : getDrivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Call : componentDidMount");
  }
  componentDidUpdate(){
    console.log("call : componentdidupdate");
  }
  // componentWillUnmount(){
  //   console.log(" Call : componentunmount");
  // }
  shouldComponentUpdate(){
    console.log("Call : shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(" Call : getSnapshotBeforeUpdate");
    return prevState
  }
  handelClick=()=>{
       this.setState({count : this.state.count+1})
  }
  filter=()=>{
         this.setState(null)
  }
  
  render() {
    <p>{console.log("render")}</p>
    return (
    <>

    {/* <div style={{color: 'red'}}>Lifecycle</div>
    <button onClick={()=>{this.setState({name:"satya"})}}>update</button>
     <button onClick={()=>{this.filter()}}>click</button> */}
     <p>the number is {this.state.count}</p>
     <p>{this.state.show ? <Child/> : null}</p>
    <button onClick={() => {this.setState({show: !this.state.show})}}>Click me to toggle</button>
     <button onClick={this.handelClick}>update</button>
    
    </>
    )
  }
}

export default Lifecycle;
export class Child extends Lifecycle{
  componentWillUnmount(){
    console.log(" Call : componentunmount");
    }
  render(){
      return(
          <>
          I am a child component
          </>
      )
  }
}