import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ForeMan</h2>
        </div>
        <p className="App-intro">
          Knockout the Estimates.
        </p>
        <button>Enter</button>
      </div>
    );
  }
}

export default App;
