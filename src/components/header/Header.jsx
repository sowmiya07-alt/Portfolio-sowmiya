

import React, { useEffect, useState } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'experience',
      'portfolio',
      'testimonials',
      'contact',
    ];

    const observers = [];

    const onIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.1,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      if (observer && observers.length) {
        observers.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const nav = document.querySelector('.header__links');
    const navHeight = (nav && nav.offsetHeight) ? nav.offsetHeight : 64;

    const el = document.getElementById(id);
    if (el) {
      
      const targetY = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;

      
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const duration = 450; // smooth scroll duration
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <header id="home">
      <div className="container header__container">
        <nav className="header__links">
          <ul>
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e,'home')} className={`nav-link home ${active === 'home' ? 'active' : ''}`}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e,'about')} className={`nav-link about ${active === 'about' ? 'active' : ''}`}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={(e) => handleNavClick(e,'experience')} className={`nav-link skills ${active === 'experience' ? 'active' : ''}`}>
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleNavClick(e,'portfolio')} className={`nav-link portfolio ${active === 'portfolio' ? 'active' : ''}`}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleNavClick(e,'testimonials')} className={`nav-link testimonials ${active === 'testimonials' ? 'active' : ''}`}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e,'contact')} className={`nav-link contact ${active === 'contact' ? 'active' : ''}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <h1>Hello I'm Sowmiya,</h1>
        <h3> A second-year Computer Science & Engineering student at KSR College passionate about data analysis, visualization, and turning complex datasets into clear, actionable insights and data analytics Enthusiast.”</h3>
        <h5 className="text-light">Data Analytics Enthusiast|Future Data Analyst</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
