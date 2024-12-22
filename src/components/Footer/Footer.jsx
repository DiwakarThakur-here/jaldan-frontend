import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Footer.css'; // Footer styles

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigateToContactUs = () => {
    navigate('/contact-us'); // Navigate to Contact Us page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-description">
          <h3>JalDaan</h3>
          <p>Providing sustainable and innovative advertising solutions.</p>
          <button className="contact-button" onClick={handleNavigateToContactUs}>
            Contact Us
          </button>
        </div>
        
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="icon-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/diwakart14/" target="_blank" rel="noreferrer" className="icon-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/9334399482" target="_blank" rel="noreferrer" className="icon-link">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="icon-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="icon-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-details">
        <p><strong>Address:</strong> 123, Ratu Road, Ranchi, India</p>
        <p><strong>Working Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM</p>
        <p><strong>Contact Number:</strong> +91 9334399482</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 JalDaan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
