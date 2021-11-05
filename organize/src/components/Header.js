import React from 'react';
import Icon from '../images/icon.png';

function Header() {
     return (
        <header className="header">
        <img src={ Icon } alt="logo" 
        width="200px" height="100px"
        className="Icon"
        />
        </header>
            )
}

export default Header;