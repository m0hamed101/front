import { React, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom'; 

import { useAuthContext } from '../../form/formhook/useAuthContext'
import { useLogout } from '../../form/formhook/useLogout'

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {

    const handleClick = () => {
        logout()
    }

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div >
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

                <nav>
                    {user && (
                        <div id='btnheader' >
                            <span>{user.email}</span>
                            <Link id='btnheader' to="/login" onClick={handleClick}>LOG OUT</Link>
                            <Link id='btnheader' to="/cart">
                                <Badge badgeContent={1} color="primary"><ShoppingCartIcon /></Badge>
                            </Link>
                        </div>
                    )}
                    {!user && (
                        <div id='btnheader' >
                            <Link id='btnheader' to="/login">Login</Link>
                            <Link id='btnheader' to="/signup">Signup</Link>
                            <Link id='btnheader' to="/cart">
                                <Badge badgeContent={0} color="primary"><ShoppingCartIcon /></Badge>
                            </Link>
                        </div>
                    )}

                </nav>
            </nav>



        </div>
    )
}
