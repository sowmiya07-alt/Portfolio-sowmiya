import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav className="header__links">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => `nav-link home ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => `nav-link about ${isActive ? 'active' : ''}`}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience" className={({ isActive }) => `nav-link skills ${isActive ? 'active' : ''}`}>
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => `nav-link portfolio ${isActive ? 'active' : ''}`}>
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/testimonials" className={({ isActive }) => `nav-link testimonials ${isActive ? 'active' : ''}`}>
                        Testimonials
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link contact ${isActive ? 'active' : ''}`}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
