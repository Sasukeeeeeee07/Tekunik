import React from 'react';
import { useEnquiry } from '../context/EnquiryContext';

const Contact = () => {
  const { openMainEnquiry } = useEnquiry();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business grow with our innovative digital solutions.
          </p>
          <button
            onClick={openMainEnquiry}
            className="px-8 py-4 bg-[#00A650] text-white rounded-lg text-lg font-semibold hover:bg-[#008c43] transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact; 