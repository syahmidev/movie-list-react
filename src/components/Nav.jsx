import React from 'react';
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav>
            <img className='logo__img' src={logo} alt="logo" />
            <ul className="nav__links">
                <li className="nav__link">
                    <a href="#" className='nav__anchor nav__anchor__hover--effect nav__anchor__hover-purple'>Home</a>
                </li>
                <li className="nav__link">
                    <a href="#" className='nav__anchor nav__anchor__hover--effect nav__anchor__hover-black'>Find your movie</a>
                </li>
                <li className="nav__link">
                    <a href="#" className='nav__anchor nav__anchor__contact'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
