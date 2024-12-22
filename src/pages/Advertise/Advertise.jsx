import React from 'react';
import './Advertise.css';
import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import IconSection from './IconsSection.jsx'
import BillboardSection from './BillboardSection';
import TestimonialsSection from './TestimonialsSection';
import Form from '../../components/Form';


const Advertise = () => {
  return (
    <div className="advertise-page">
      <HeroSection />
      <ProductSection />
      <IconSection />
      <BillboardSection />
      <TestimonialsSection />
    
      <Form formType="advertise" />
    </div>
  );
};

export default Advertise;
