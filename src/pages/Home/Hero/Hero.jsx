import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import WordRotate from '../../../components/WordRotate'; // No need to specify `.jsx` explicitly in the path
import './Hero.css';
import heroImage from '../../../assets/images/produc_bgr-removebg-preview.png';

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const rotatingWords = ["Brand", "Business", "Product", "Company", "Work"];

  // Force page to scroll to top and reset layout on re-mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle navigation to the Advertise page
  const handleNavigateToAdvertise = () => {
    navigate('/advertise'); // Programmatically navigate to the Advertise page
  };

  return (
    <section className="hero-container">
      <div className="hero-heading">
        <h3>Stunning Advertisement: Empowering Your </h3>
        {/* Word rotation with inline color styles */}
        <WordRotate
          words={rotatingWords.map((word, index) => (
            <span
              key={index}
              style={{ color: '#FF5733' }} // Example color (change as needed)
            >
              {word}
            </span>
          ))}
        />
        <h3> in Everyone's Hand.</h3>
      </div>
      {/* Add onClick to the button to navigate to the Advertise page */}
      <button className="hero-button" onClick={handleNavigateToAdvertise}>
        Advertise with us
      </button>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
