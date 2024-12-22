// src/components/Partnership/Partnership.jsx
import React from 'react';
import './Partnership.css';
import PartnerImage from '../../../assets/images/man-1550501_1920.jpg'; // Replace with your image path
import CharityImage from '../../../assets/images/StockCake-Desert Water Drop_1728056076.jpg'; // Replace with your image path
import EcoFriendlyImage from '../../../assets/images/StockCake-Polluted Shoreline Debris_1728053874.jpg'; // Replace with your image path

const Partnership = () => {
  return (
    <section className="partnership">
      <div className="partnership-container">
        {/* Partnership Section */}
        <div className="section">
          <div className="text">
            <h2>Help Needy</h2>
            <p>"Our conpany 'Jaldaan' is dedicated to giving back. We are proud to support our community by providing essential resorces to those in need."</p>
            <button>Learn More</button>
          </div>
          <div className="image">
            <img src={PartnerImage} alt="Partner logo" />
          </div>
        </div>

        {/* Charity Section */}
        <div className="section">
          <div className="text">
            <h2>Our Charity</h2>
            <p>"We donate to communities, organization and charities working to solve the global water crisis."</p>
            <button>Learn More</button>
          </div>
          <div className="image">
            <img src={CharityImage} alt="Charity logo" />
          </div>
        </div>

        {/* Eco-Friendly Section */}
        <div className="section">
          <div className="text">
            <h2>Eco-Friendly Practices</h2>
            <p>"Let's keep our city beautiful.We collaborate with local communities to revitalize our environment & inspire positive change.".</p>
            <button>Learn More</button>
          </div>
          <div className="image">
            <img src={EcoFriendlyImage} alt="Eco-Friendly logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
