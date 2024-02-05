import React, { Component } from 'react';

class ComponentOne extends Component {
  componentWillUnmount() {
    console.log('Component unmounted!');
  }
  
  render() {
    return <h3>Hello world</h3>
  }
}

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "world",
      display: true
    };
  }

  delete = () => {
    this.setState({ display: false })
  }

  componentDidMount() {
    console.log('Component mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.display !== prevProps.display) {
      console.log('Component updated!');
    }
  }

  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponentOne />
    }

    return (
      <div>
        {comp}
        <button onClick={this.delete}>Delete component</button>
        <button onClick={() => { this.setState({ items: "hello" }) }}>Set</button>
        <p>{this.state.items}</p>
      </div>
    );
  }
}

export default MyComponent;
