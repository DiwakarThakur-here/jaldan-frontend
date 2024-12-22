import React from 'react';
import './HeroSection.css';
import heroImage from '/src/assets/images/siddhi web bg.png'; // Import the image

const HeroSection = () => {
  const scrollToAdvertiseForm = () => {
    const formElement = document.getElementById('advertise-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="advertise-hero-section">
      <div className="advertise-hero-container">
        <div className="advertise-hero-content">
          <h1 className="advertise-hero-title">PUT YOUR BRAND IN EVERYONE’S HAND</h1>
          <p className="advertise-hero-description">
            Receive meaningful impressions and utilize the greatest brand loyalty platform in the ad industry.
          </p>
          <button className="advertise-hero-button" onClick={scrollToAdvertiseForm}>
            Get Advertise Form
          </button>
        </div>
        <div className="advertise-hero-image-container">
          <img 
            src={heroImage}
            alt="Advertise Bottle" 
            className="advertise-hero-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
