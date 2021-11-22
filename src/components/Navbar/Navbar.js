import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [click, setClick] = useState(false);
    const cliskOpenEvent = () => setClick(!click);
    const clickClosEvent = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <header className={nav ? "setheader active" : "setheader"}>
                <div className="logo">Prime Soft</div>

                <nav className={click ? "NavBar active" : "NavBar"}>
                    <ul>
                        <li><Link to="/home" onClick={clickClosEvent}>Home</Link></li>
                        <li><Link to="/about" onClick={clickClosEvent}>About</Link></li>
                        <li><Link to="/service" onClick={clickClosEvent}>Service</Link></li>
                        <li><Link to="/technology" onClick={clickClosEvent}>Technology</Link></li>
                        <li><Link to="/protfolio" onClick={clickClosEvent}>Protfolio</Link></li>
                        <li><Link to="/contact" onClick={clickClosEvent}>Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={cliskOpenEvent}>{click ?
                    <img src="https://cdn0.iconfinder.com/data/icons/web-app-ui-1/64/menu-preset-interface-ui_icon-49-512.png" alt="" /> :
                    <img src="https://s3.amazonaws.com/www-inside-design/uploads/2019/03/hamburgerheader-810x810.jpg" alt="" />}
                </div>
            </header>
        </div>
    )
}

export default Navbar;
