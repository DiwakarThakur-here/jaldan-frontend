import React from 'react';
import Form from '../../components/Form';


const ContactUs = () => {
  return (
    <section className="contact-us-section">
    <div>
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <Form formType="contact" />
    </div>
    </div>
   
    </section>
  

  );
};

export default ContactUs;
