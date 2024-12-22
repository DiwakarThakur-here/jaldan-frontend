import React from 'react';
import './HallOfFame.css';

const HallOfFameSection = () => {
  // Sample data for Hall of Fame names and addresses
  const hallOfFameData = [
    { name: 'Diva Rani ', id:'@diva_r1', address: 'Lalpur, Ranchi' },
    { name: 'Akansha Singh', id:'@akanasaaa41', address: 'Bariatu, Ranchi' },
    { name: 'Suresh Mahto', id:'@suresh_m_82', address: 'Kanke, Ranchi' },
    { name: 'Alina khan', id:'@alina05', address: 'Nankun, Ranchi' },
    { name: 'Rohit sharma', id:'@unknown_rohit', address: 'Ratu road, Ranchi' },
    // Add more names and addresses here as needed
  ];

  return (
    <section className="hall-of-fame-section">
      <div className="hall-of-fame-container">
        {/* Heading and Description */}
        <h1 className="hall-of-fame-heading">Hall of Fame</h1>
        <p className="hall-of-fame-description">
          Welcome to the Jaldan Hall of Fame, where we recognize the contributions of those who have made a meaningful impact on our mission of providing free and accessible water for all. Each person on this list has donated at least $50 to help us in our efforts to make no cost water a reality. Though it may seem like a small amount, their contributions have made a big difference in our efforts to promote the idea that water is a basic human right, not a privilege. We are proud to honor these individuals by inducting them into our Hall of Fame, where their names will remain for life, as a testament to their commitment to a better world.
        </p>

        {/* Hall of Fame List */}
        <div className="hall-of-fame-list">
          {hallOfFameData.map((person, index) => (
            <div key={index} className="hall-of-fame-item">
              <h3 className="hall-of-fame-name">{person.name}</h3>
              <h5 className="hall-of-fame-id">{person.id}</h5>
              <p className="hall-of-fame-address">{person.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;
