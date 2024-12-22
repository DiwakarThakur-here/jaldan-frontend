import React, { useState } from 'react'; 
import ReCAPTCHA from 'react-google-recaptcha';
import './Form.css';

const Form = ({ formType }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    city: '',
    companyName: '',
    typeOfBusiness: '',
    budget: '',
    advertiseMessage: '',
    distributionPoint: '',
    shippingAddress: '',
    footTraffic: '',
    ageRange: '',
    beveragesPerMonth: '',
    reason: '',
    subject: '',
    message: '',
    isForEvent: false,
    agreeToShare: false,
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // Success feedback
  const [errorMessage, setErrorMessage] = useState(''); // Error feedback

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Store CAPTCHA value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }
   
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/form-submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: formType,
          captcha: captchaValue, // Send CAPTCHA to the server for verification
        }),
      });
  
      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message); // Show success message
        setErrorMessage(''); // Clear error message if any
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          city: '',
          companyName: '',
          typeOfBusiness: '',
          budget: '',
          advertiseMessage: '',
          distributionPoint: '',
          shippingAddress: '',
          footTraffic: '',
          ageRange: '',
          beveragesPerMonth: '',
          reason: '',
          subject: '',
          message: '',
          isForEvent: false,
          agreeToShare: false,
        }); // Reset form
        setCaptchaValue(null); // Reset CAPTCHA
    } else {
      setErrorMessage(result.message); // Show error message
      setSuccessMessage(''); // Clear success message if any
    }
  } catch (error) {
    setErrorMessage('An error occurred while submitting the form.');
    setSuccessMessage('');
  }
};

  return (
    <form className="form-container" onSubmit={handleSubmit} id={formType + '-form'}>
      <div className="cta-text">
        <h2 className="cta-heading">Partner with Us And help Jaldaan!</h2>
        <p className="cta-subheading">
          Help us in our mission of Give away "Jaldaan" water, and help humanity.
        </p>
      </div>
      
      {/* Form inputs */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input"
      />
       <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
            id="advertise-phoneNumber"
          />
          
      {/* Conditional fields based on formType */}
      {formType === 'advertise' && (
        <>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
            id="advertise-companyName"
          />
          <input
            type="text"
            name="typeOfBusiness"
            placeholder="Type of Business"
            value={formData.typeOfBusiness}
            onChange={handleChange}
            className="form-input"
            id="advertise-typeOfBusiness"
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-input"
            id="advertise-budget"
          />
          <textarea
            name="advertiseMessage"
            placeholder="What do you want to advertise?"
            value={formData.advertiseMessage}
            onChange={handleChange}
            className="form-textarea"
            id="advertise-advertiseMessage"
          />
        </>
      )}

      {formType === 'distribute' && (
        <>
          <input
            type="text"
            name="distributionPoint"
            placeholder="Distribution Point Address"
            value={formData.distributionPoint}
            onChange={handleChange}
            className="form-input"
            id="distribute-distributionPoint"
          />
          <input
            type="text"
            name="shippingAddress"
            placeholder="Shipping Address (if different)"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="form-input"
            id="distribute-shippingAddress"
          />
          <input
            type="text"
            name="footTraffic"
            placeholder="Daily Foot Traffic"
            value={formData.footTraffic}
            onChange={handleChange}
            className="form-input"
            id="distribute-footTraffic"
          />
          <input
            type="text"
            name="ageRange"
            placeholder="Age Range"
            value={formData.ageRange}
            onChange={handleChange}
            className="form-input"
            id="distribute-ageRange"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
            id="distribute-companyName"
          />
          <input
            type="text"
            name="typeOfBusiness"
            placeholder="Type of Business"
            value={formData.typeOfBusiness}
            onChange={handleChange}
            className="form-input"
            id="distribute-typeOfBusiness"
          />
        </>
      )}

      {formType === 'contact' && (
        <>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            id="contact-subject"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            id="contact-message"
          />
        </>
      )}

      {/* Recaptcha and Submit button */}
      <div className="form-recaptcha">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}  // Use environment variables
          onChange={handleCaptchaChange}
        />
      </div>


      {/* Success/Error Messages */}
      {successMessage && <div className="form-success">{successMessage}</div>}
      {errorMessage && <div className="form-error">{errorMessage}</div>}

      <button type="submit" className="form-button">
        Send
      </button>
    </form>
  );
};

export default Form;
