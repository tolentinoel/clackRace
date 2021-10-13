import React, { Component } from 'react';
import '../styles/Topnav.css';
// import buttonLogo from '../panic-button.png';
import typingLogo from '../keyboard.png';

class Topnav extends Component {
    render() {
        return (
            <div className="topnavDiv">
                <header className="topnavHeader">
                    <img src={typingLogo} className="topnavLogo" alt="logo" />
                    <h1 className="topnavTextHeader">ClackTime!</h1>
                </header>
            </div>
        )
    }
}

export default Topnav;
