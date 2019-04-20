import React from 'react';
import './navbar.css';

const NavBar = props => (
    <header className="NavBar">
        <nav className="NavBar__navigation">
            <div></div>
            <div className="NavBar__logo"><a href="/">Tuition Debt Clock</a></div>
            <div className="NavBar__navigation-items">
                <ul>
                    <li><a href="/">Debt</a></li>
                    <li><a href="/">Income</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;