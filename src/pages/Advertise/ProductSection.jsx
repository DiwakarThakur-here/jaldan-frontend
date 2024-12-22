import React from 'react';
import './ProductSection.css';

const ProductSection = () => {

  // Function to scroll to the form with formType 'advertise'
  const handleScrollToAdvertiseForm = () => {
    const advertiseForm = document.getElementById('advertise-form');
    if (advertiseForm) {
      advertiseForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="product-section">
      <div className="product-content">
        <h2>Our product is a blank canvas</h2>
        <p>
          We are the opposite of traditional advertising because we are not annoying. Instead of making the audience cringe or run for cover, we put a smile on their face, and from that state of happiness is when they'll be excited to support your brand.
        </p>
        <ul>
          <li><strong>Use QR Codes</strong> to connect anything on the internet, such as websites, coupons, and videos.</li>
          <li><strong>Sell or Freely Distribute</strong> ad supported Water in aluminum bottles and paper cartons.</li>
          <li><strong>Choose a Distribution Model</strong> if you want us to distribute it or ship it anywhere in Ranchi.</li>
          <li><strong>Subsidize or Cover the Entire Cost by Sharing the Ad Space</strong> with non-competing brands.</li>
        </ul>
        <button className="get-quote-btn" onClick={handleScrollToAdvertiseForm}>
          Get Advertised
        </button>
      </div>
      <div className="product-image">
        <img src="src/assets/images/blank_long-removebg-preview.png" alt="Product Advertisement" />
      </div>
    </div>
  );
};

export default ProductSection;
