import React from "react";
import "./BillboardSection.css"; // Import the CSS file

const BillboardSection = () => {
  return (
    <section className="billboard-section">
      <h2 className="billboard-title">It's a mini billboard in everyone's hand</h2>
      <div className="bottle-container">
        <div className="bottle-item">
          <img
            src="src/assets/images/kozy_new-removebg-preview.png"
            alt="Bottle 1"
            className="bottle-image"
          />
          <div className="bottle-text">
            <p>Paper Carton</p>
            <p>16.9 fl oz / 500ml</p>
          </div>
          <button className="bottle-button">Learn More</button>
        </div>

        <div className="bottle-item">
          <img
            src="src/assets/images/small pack bgr.png"
            alt="Bottle 2"
            className="bottle-image"
          />
          <div className="bottle-text">
            <p>Paper Carton</p>
            <p>8.45 fl oz / 250ml</p>
          </div>
          <button className="bottle-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default BillboardSection;
