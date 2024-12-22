import React from "react";
import "./BillboardSection.css"; // Import the CSS file
import bottle1 from "/src/assets/images/kozy_new-removebg-preview.png"; // Import the first image
import bottle2 from "/src/assets/images/small pack bgr.png"; // Import the second image

const BillboardSection = () => {
  return (
    <section className="billboard-section">
      <h2 className="billboard-title">It's a mini billboard in everyone's hand</h2>
      <div className="bottle-container">
        <div className="bottle-item">
          <img
            src={bottle1} // Use the imported image here
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
            src={bottle2}
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
