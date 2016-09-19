import React, { Component } from 'react';
import '../css/App.css';
//import PlanPage from './components/planPage';
import Header from './header';
import DocoDB from '../data/documentDB';
import Toolbar from './toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Category from './category';
import { browserHistory } from 'react-router'

class App extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.handleToolBarMenuItemChange = this.handleToolBarMenuItemChange.bind(this);
    this.state = {
      categories: [],
      toolBarSelectedMenuItem: 0
    }
  }

  onClick() {

  }

  handleToolBarMenuItemChange(event, index, value) {
    this.setState({ toolBarSelectedMenuItem: value });
    if(value == 0){
      // home page
      browserHistory.push('/');
    }
    else if(value == 4){
      // settigs page
      browserHistory.push('/settings');
    }
    else{
      browserHistory.push('/category');
    }
    //alert(this.state.toolBarSelectedMenuItem);
  }

  setNavigationRoute(value)
  {
    
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Toolbar selectedMenuItem={this.state.toolBarSelectedMenuItem} handleChange={this.handleToolBarMenuItemChange} />
          <div className="MainBody">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
