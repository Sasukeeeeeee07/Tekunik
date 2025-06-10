import React, { createContext, useState, useContext } from 'react';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isMainEnquiryOpen, setIsMainEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openEnquiry = (service = '') => {
    setSelectedService(service);
    setIsEnquiryOpen(true);
    setIsMainEnquiryOpen(false);
  };

  const openMainEnquiry = () => {
    setIsMainEnquiryOpen(true);
    setIsEnquiryOpen(false);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
    setIsMainEnquiryOpen(false);
    setSelectedService('');
  };

  return (
    <EnquiryContext.Provider value={{ 
      isEnquiryOpen, 
      isMainEnquiryOpen,
      selectedService, 
      openEnquiry, 
      openMainEnquiry,
      closeEnquiry 
    }}>
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