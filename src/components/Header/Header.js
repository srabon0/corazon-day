import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='headerNav'>
            <img className='logo-sec' src={logo} alt="" />
            <div className='menu'>
                <a href="/order">Order</a>
                <a href="/inventroy">Manage Inventory</a>
                <a href="/review">Order Review</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;