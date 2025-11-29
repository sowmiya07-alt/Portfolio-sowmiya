import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Nav from './components/nav/Nav';
import PageTransition from './components/PageTransition';
import HamburgerMenu from './components/hamburger/HamburgerMenu';
import MusicPlayer from './components/music/MusicPlayer';

import Background from './components/background/Background';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Background />
      <HamburgerMenu />
      <Topbar />
      <MusicPlayer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Header />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <Intro />
            </PageTransition>
          } />
          <Route path="/experience" element={
            <PageTransition>
              <Experience />
            </PageTransition>
          } />
          <Route path="/portfolio" element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          } />
          <Route path="/testimonials" element={
            <PageTransition>
              <Testimonials />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App;

