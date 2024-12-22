import React from 'react';
import './HeroSection.css';
// Import the image in the JSX file
import heroImage from '/src/assets/images/StockCake-Rooftop Evening Gathering_1725860990.jpg';

const HeroSection = () => {

  const handleScrollToDistributeForm = () => {
    const formElement = document.getElementById('distribute-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="distribute-hero" 
      style={{ backgroundImage: `url(${heroImage})` }} // Apply the image here dynamically
    >
      <div className="distribute-hero-content">
        <h1 className="distribute-hero-title">Distribute with Us</h1>
        <p className="distribute-hero-subtitle">
          <strong> We provide free water in Parties, Functions, Meetings, and More.</strong>
        </p>
        <p> Join us in making a difference through effective and eco-friendly product distribution.</p>
        <button className="cta-button" onClick={handleScrollToDistributeForm}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
