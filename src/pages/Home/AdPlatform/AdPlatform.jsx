// src/components/AdPlatform/AdPlatform.jsx
import React from 'react';
import './AdPlatform.css';
import BottleImage from '../../../assets/images/kozy_new-removebg-preview.png'; // Replace with your image path

const AdPlatform = () => {
  return (
    <section className="ad-platform">
      <div className="ad-platform-container">
        <div className="ad-platform-image">
          <img src={BottleImage} alt="FreeWater bottle" />
        </div>
        <div className="ad-platform-text">
          <h2>Jaldaan is an innovative advertising platform</h2>
          <p>
            Jaldaan is an innovative advertising platform that utilizes premium spring water as a new type of advertising medium while prioritizing philanthropy and sustainability. Ten paise from each beverage is donated to charity to help peeple in need, clean environment & fight the global water crisis. We only need you guys to choose Jaldaan so we can solve the global water crisis permanently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdPlatform;
