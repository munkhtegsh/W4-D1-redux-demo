import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';  //import connect
import { increaseNum, changeNum } from './reducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <button onClick={this.props.increaseNum}>Click</button> {/* look at line 35 */}
        </p>
        { this.props.number }
        <br/>
        <input type="text" onChange={(e) => this.props.changeNum(e.target.value)}/>
      </div>
    );
  }
}

// the fn that tells connect what parts of state the component is subscribing to
function moveFromStateToCompProps(state) {
  return {
    // key -- the property name on the props object
    // value -- comes  from state in the store
    number: state.num
  }
}

let actionCreators = {  //will go to line 39 in the parentesis of second arg
  increaseNum, //imported from reducer
  changeNum
}

// connect() handles subscribe and dispatch
let connectedFunction = connect(moveFromStateToCompProps, actionCreators);

// option: use curring
export default connectedFunction(App);
