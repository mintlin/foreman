import React, { Component } from 'react';
import './App.css';
//import PlanPage from './components/planPage';
import Header from './components/header';
import LeftMenu from './components/leftMenu';
import DocoDB from './data/documentDB';

class App extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      categories: []
    }
  }

  onClick() {

  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <LeftMenu categories={DocoDB.categories} onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
