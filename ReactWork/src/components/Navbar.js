import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Tabdeeli Passage
                {/* <img src={logo} alt="Logo" className="logo-img" /> */}
                </Link>
                <div className='menu-icon' onClick={ handleClick }>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                <li className="nav-item">
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/bookinginfo" className='nav-links' onClick={closeMobileMenu}>Booking & Info</Link>
                </li>
               
            </ul>
          
            </div>
        </nav>
    )
}

export default Navbar