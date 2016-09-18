import React, { Component } from 'react';
import '../css/App.css';
//import PlanPage from './components/planPage';
import Header from './header';
import LeftMenu from './leftMenu';
import DocoDB from '../data/documentDB';

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
        <div className="MainBody">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
