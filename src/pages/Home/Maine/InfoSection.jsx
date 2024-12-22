import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-card">
        <h2>Save Lives</h2>
        <p>Ten paise from each beverage is donated to charity to help needy, And to clean Environment.</p>
      </div>
      <div className="info-card">
        <h2>what we do</h2>
        <p>We advertise you on a watter bottel and distribute it free to your reqired coustomers throughout the city.</p>
      </div>
      <div className="info-card">
        <h2>Save Money</h2>
        <p>Bottled water costs 2,000 times the price of tap water. But we give it Free.</p>
     </div>
      <div className="info-card">
        <h2>Premium Water</h2>
        <p>Jaldaan is natural water and all of our containers are BPA-free.</p>
      </div>
      <div className="info-card">
        <h2>Eco Friendly</h2>
        <p>Our goal is to reharness Nature and Environment.</p>
      </div>
      
    </div>
  );
};

export default InfoSection;
