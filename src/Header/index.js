import React from 'react';
import './style.css'

const Header = ({ title }) => (
    <React.Fragment>
        <header>
            <h1 className="header">{title}</h1>
        </header>
    </React.Fragment>
);

export default Header;