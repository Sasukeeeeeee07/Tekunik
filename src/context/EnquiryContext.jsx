import React, { createContext, useState, useContext } from 'react';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openEnquiry = (service = '') => {
    setSelectedService(service);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedService('');
  };

  return (
    <EnquiryContext.Provider value={{ isEnquiryOpen, selectedService, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}; 