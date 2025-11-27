import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Hello I'm Sowmiya,</h1>
        <h3> A second-year Computer Science & Engineering student at KSR College passionate about data analysis, visualization, and turning complex datasets into clear, actionable insights and data analytics Enthusiast."</h3>
        <h5 className="text-light">Data Analytics Enthusiast|Future Data Analyst</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
