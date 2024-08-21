import { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: 'Do you provide career counseling for all fields?', answer: 'Yes, Ms. Chauhan specializes in helping students map out their careers in specific disciplines. STEM, arts, business management, healthcare or media, you name it and Ms. Chauhan has got you covered.' },
    { question: 'When should I start my application process?', answer: 'Based on the country and university you are applying to, the timelines for the application process varies. Typically, most universities have a Spring intake (January/February), a Summer intake (May/June), and a Winter intake (September/October).' },
    { question: 'I don\'t know what I want to pursue yet. Can I still sign for a consultation?', answer: 'Yes, it is quite common for students to be at the crossroads when it comes to choosing their major. Ms. Chauhan is trained to help you identify your interests and capabilities. Taking a simple psychometric test can offer a new perspective among other things.' },
    { question: 'How does the consultation process work?', answer: 'Once you have filled out the enquiry form at the bottom of this page, Ms. Chauhan will contact you shortly thereafter. Ms. Chauhan will guide you right from your initial inquiry to your final application.' },
    { question: 'My parents are concerned about my overseas education. Do you offer support for parents as well?', answer: 'Sending their children to a different country for higher education is often a challenging task for parents. Ms. Chauhan is here to ease your parents’ worries and help your family navigate your admission process seamlessly.' }
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
