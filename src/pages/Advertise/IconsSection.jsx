// IconSection.jsx
import React from 'react';
import './IconsSection.css';
import { FaRocket, FaHandHoldingUsd, FaLeaf, FaEnvelopeOpenText } from 'react-icons/fa';

const IconSection = () => {
  return (
    <div className="icon-section">
      <div className="icon-container">
        <div className="icon-item">
          <FaEnvelopeOpenText className="icon" />
          <h3>10x</h3>
          <p>Have a lot more impressions than regular direct mail</p>
        </div>
        <div className="icon-item">
          <FaHandHoldingUsd className="icon" />
          <h3>Cost Effective</h3>
          <p>A lot cheaper  than regular Billbord Advertisement</p>
        </div>
        <div className="icon-item">
          <FaRocket className="icon" />
          <h3>ROI</h3>
          <p>Great return on investment (Ad direct in your clints Hand)</p>
        </div>
        <div className="icon-item">
          <FaLeaf className="icon" />
          <h3>Priceless</h3>
          <p> Helping the planet and saving lives</p>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
