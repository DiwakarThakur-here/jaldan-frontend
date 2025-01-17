import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);  // Ref for the menu
  const hamburgerRef = useRef(null);  // Ref for the hamburger icon

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Scroll to top whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Function to handle outside clicks
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        hamburgerRef.current && !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu if click is outside
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const closeMenuAndNavigate = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <div className="logo">JalDaan</div>

      {/* Navigation links for larger screens */}
      <nav ref={menuRef} className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" className="nav-item" activeClassName="active" onClick={closeMenuAndNavigate}>Home</NavLink>
        <NavLink to="/advertise" className="nav-item" activeClassName="active" onClick={closeMenuAndNavigate}>Advertise</NavLink>
        <NavLink to="/distribute" className="nav-item" activeClassName="active" onClick={closeMenuAndNavigate}>Distribute</NavLink>
        <NavLink to="/hall-of-fame" className="nav-item" activeClassName="active" onClick={closeMenuAndNavigate}>Hall of Fame</NavLink>
        <NavLink to="/faq" className="nav-item" activeClassName="active" onClick={closeMenuAndNavigate}>FAQ</NavLink>
        <NavLink to="/contact-us" className="nav-item" activeClassName="active" onClick={closeMenuAndNavigate}>Contact Us</NavLink>
      </nav>

      {/* Hamburger menu for small screens */}
      <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
