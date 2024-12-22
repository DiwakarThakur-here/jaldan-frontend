import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Scroll to top whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="header">
      <div className="logo">JalDaan</div>

      {/* Navigation links for larger screens */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" className="nav-item" activeClassName="active">Home</NavLink>
        <NavLink to="/advertise" className="nav-item" activeClassName="active">Advertise</NavLink>
        <NavLink to="/distribute" className="nav-item" activeClassName="active">Distribute</NavLink>
        <NavLink to="/hall-of-fame" className="nav-item" activeClassName="active">Hall of Fame</NavLink>
        <NavLink to="/faq" className="nav-item" activeClassName="active">FAQ</NavLink>
        <NavLink to="/contact-us" className="nav-item" activeClassName="active">Contact Us</NavLink>
      </nav>

      {/* Hamburger menu for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
