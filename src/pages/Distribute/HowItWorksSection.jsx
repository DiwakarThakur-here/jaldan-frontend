import React from 'react';
import './HowItWorksSection.css';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-icon"> {/* Add your custom icon or image here */}</div>
            <h3 className="step-title">Step 1: Choose Your Campaign</h3>
            <p className="step-description">
              Pick the right advertising campaign that suits your brand and goals.
            </p>
          </div>
          
          <div className="step">
            <div className="step-icon"> {/* Add your custom icon or image here */}</div>
            <h3 className="step-title">Step 2: Distribute the Product</h3>
            <p className="step-description">
              We handle product distribution to reach your target audience effectively.
            </p>
          </div>

          <div className="step">
            <div className="step-icon"> {/* Add your custom icon or image here */}</div>
            <h3 className="step-title">Step 3: Your Product reach</h3>
            <p className="step-description">
              Your product's Advetisement have been spread throught out the city spreading smiles,In your clints hand.
            </p>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="partners-container">
          <h3 className="partners-title">Our Clients</h3>
          <img 
            src="src/assets/images/how it work bgr.png"
            alt="Partner logos" 
            className="partners-logos"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
