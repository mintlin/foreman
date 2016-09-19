import React from 'react';
import logo from '../images/logo.svg';

const Header = (props) => {
    return (
        <div>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Welcome to ForeMan <span className="App-intro">It Knocks out the Estimates.</span>
            </div>

        </div>
    );
};

export default Header;