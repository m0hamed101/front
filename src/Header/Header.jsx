import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom';


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <nav className="navbar">

                <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                <Link to={`/`}>Home</Link>
            </li>
                    <li>
                        <Link to={`/shop`}>Shop</Link>
                    </li>

                    <li>
                        <Link to={`/contact`}>contact</Link>
                    </li>
                </ul>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </nav>
        </div>
    )
}
