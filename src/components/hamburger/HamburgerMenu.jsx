import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './hamburgerMenu.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdWorkOutline } from 'react-icons/md';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button
                className={`hamburger-btn ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            </button>

            {/* Overlay */}
            <div
                className={`menu-overlay ${isOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>

            {/* Side Menu */}
            <nav className={`side-menu ${isOpen ? 'active' : ''}`}>
                <div className="menu-header">
                    <h2>Navigation</h2>
                </div>

                <ul className="menu-items">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <AiOutlineHome className="menu-icon" />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <AiOutlineUser className="menu-icon" />
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/experience"
                            className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <BiBook className="menu-icon" />
                            <span>Skills</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <MdWorkOutline className="menu-icon" />
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/testimonials"
                            className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <RiServiceLine className="menu-icon" />
                            <span>Testimonials</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <BiMessageSquareDetail className="menu-icon" />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default HamburgerMenu;
