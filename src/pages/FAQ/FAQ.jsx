import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <span>{question}</span>
      <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="faq-answer">{answer}</div>}
  </div>
);

const FAQSection = ({ title, questions, openIndex, setOpenIndex }) => (
  <div className="faq-section">
    <h2 className="faq-section-title">{title}</h2>
    {questions.map((q, index) => (
      <FAQItem
        key={index}
        question={q.question}
        answer={q.answer}
        isOpen={openIndex === index}
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      />
    ))}
  </div>
);

const FAQ = () => {
  const [openGeneralIndex, setOpenGeneralIndex] = useState(null);
  const [openDistributionIndex, setOpenDistributionIndex] = useState(null);
  const [openAdvertisingIndex, setOpenAdvertisingIndex] = useState(null);
  const [openOtherIndex, setOpenOtherIndex] = useState(null);

  const generalQuestions = [
    { question: 'How is Jaldaan free?', answer: 'Jaldaan is free due to ad sponsorship on the packaging.' },
    { question: 'Will you ship Jaldaan to me?', answer: 'We currently offer local distribution. Just pay for the shipping and the water is free and each water donates to charity too.' },
    { question: 'Why aluminum bottles and paper cartons?', answer: 'Looking carefully at the pros and cons of both aluminum bottles and paper cartons, we know neither is perfect – but both are far more sustainable than plastic bottles. Our long term goal is to cultivate, manufacture, fill, distribute, and recycle all our beverages in 100% hemp cartons from the same location.'},
    // Add more questions here
  ];

  const distributionQuestions = [
    { question: 'How do I distribute Jaldaan?', answer: 'You can apply to be a distributor through our website Distribute page "Form".' },
    { question: 'What are the minimum requirements to be a distributor?', answer: 'The requirements vary by location.' },
    // Add more questions here
  ];

  const advertisingQuestions = [
    { question: 'How much does it cost to advertise?', answer: 'The cost depends on the size and location of the ad. Number of units' },
    { question: 'How does Jaldaan compare to other mediums?', answer: 'Jaldaan offers a unique and highly effective advertising medium.' },
    { question: 'How do I advertise with Jaldaan?', answer: 'To advertise with Jaldaan, please visit https://Jaldan.io/advertise.' },
    // Add more questions here
  ];

  const otherQuestions = [
    { question: 'Can I use Jaldaan for fundraising?', answer: 'Yes! Contact us for more details on how to get involved.' },
    { question: 'How do I invest?', answer: 'Please visit and fill out the form making sure to type a"investor" as a subject line.   https://jaldan.io/contact-us' },
    { question: 'How do I advertise with Jaldaan?', answer: 'To advertise with Jaldaan, please visit https://Jaldaan.io/advertise.' },
    // Add more questions here
  ];

  return (
    <div className="faq-container">
      <FAQSection
        title="General"
        questions={generalQuestions}
        openIndex={openGeneralIndex}
        setOpenIndex={setOpenGeneralIndex}
      />
      <FAQSection
        title="Distribution"
        questions={distributionQuestions}
        openIndex={openDistributionIndex}
        setOpenIndex={setOpenDistributionIndex}
      />
      <FAQSection
        title="Advertising"
        questions={advertisingQuestions}
        openIndex={openAdvertisingIndex}
        setOpenIndex={setOpenAdvertisingIndex}
      />
      <FAQSection
        title="Other"
        questions={otherQuestions}
        openIndex={openOtherIndex}
        setOpenIndex={setOpenOtherIndex}
      />
    </div>
  );
};

export default FAQ;
