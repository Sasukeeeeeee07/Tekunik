import React from 'react';
import Contact from './Contact';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-[#00A650] to-[#2B3990] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions, concerns, or project inquiries.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage; 