import React, { Suspense } from 'react';
import HeroSection from './HeroSection';
import HowItWorksSection from './HowItWorksSection';

import Form from '../../components/Form';


const Distribute = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <HowItWorksSection />      
       
        <Form formType="distribute" />
      </Suspense>
    </div>
  );
};

export default Distribute;
