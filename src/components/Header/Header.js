import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <h1>Earth<span>BD.</span></h1>
            </div>
            <div className='nav'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/fastfood">Countries</a>
                <a href="/drinks">Languages</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;