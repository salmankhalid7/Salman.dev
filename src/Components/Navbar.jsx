import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="#home">Salman.dev</a>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleHamburger}>
        <div className={`bar ${isOpen ? 'rotate1' : ''}`}></div>
        <div className={`bar ${isOpen ? 'hide' : ''}`}></div>
        <div className={`bar ${isOpen ? 'rotate2' : ''}`}></div>
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#About" onClick={closeMenu}>About</a>
        <a href="#Projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
