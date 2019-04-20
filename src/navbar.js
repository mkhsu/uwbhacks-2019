import React from 'react';
import './navbar.css';
const NavBar = props => (
    <header className="NavBar">
        <nav className="NavBar__navigation">
            <div></div>
            <div className="NavBar__logo"><a href="/">King County Income and Tuition Map</a></div>
            <div className="NavBar__navigation-items">
                <ul>
                    <li><a href="/">A Project by Team BigDataCache</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;