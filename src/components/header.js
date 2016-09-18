import React from 'react';
import logo from '../logo.svg';

const Header = (props) => {
    return (
    <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ForeMan</h2>
          <p className="App-intro">
          It Knocks out the Estimates.
        </p>
        </div>
       
    </div>
    );
};

export default Header;