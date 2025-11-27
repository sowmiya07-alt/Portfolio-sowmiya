import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';


import './topbar.css';

const Topbar = () => {
  return (
    <nav className="topbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><AiOutlineHome /></NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}><AiOutlineUser /></NavLink>
      <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}><BiBook /></NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}><RiServiceLine /></NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}><BiMessageSquareDetail /></NavLink>
    </nav>
  )
}

export default Topbar;