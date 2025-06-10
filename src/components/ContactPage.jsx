import React from 'react';
import { motion } from 'framer-motion';
import { useEnquiry } from '../context/EnquiryContext';

const ContactPage = () => {
  const { openMainEnquiry } = useEnquiry();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: "📱",
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST",
      action: "Call Now",
      link: "tel:+15551234567"
    },
    {
      icon: "✉️",
      title: "Email",
      info: "info@tekunik.com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      link: "mailto:info@tekunik.com"
    },
    {
      icon: "💬",
      title: "Live Chat",
      info: "Chat with our team",
      description: "Instant response during business hours",
      action: "Start Chat",
      onClick: openMainEnquiry
    }
  ];

  const locations = [
    {
      city: "New York",
      address: "123 Tech Avenue, NY 10001",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "London",
      address: "456 Digital Street, EC1A 1BB",
      phone: "+44 20 7123 4567"
    },
    {
      city: "Singapore",
      address: "789 Innovation Road, 018956",
      phone: "+65 6789 0123"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#00A650] to-[#2B3990] py-24">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-20 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10"
        />

        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-white relative z-10"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Let's Start a Conversation
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12"
            >
              Have a project in mind? We'd love to hear about it. Get in touch with us and let's create something extraordinary together.
            </motion.p>
            <motion.button
              variants={itemVariants}
              onClick={openMainEnquiry}
              className="bg-white text-[#2B3990] px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{method.title}</h3>
              <p className="text-lg text-gray-600 mb-1">{method.info}</p>
              <p className="text-sm text-gray-500 mb-6">{method.description}</p>
              {method.onClick ? (
                <button
                  onClick={method.onClick}
                  className="text-[#00A650] hover:text-[#2B3990] font-semibold transition-colors duration-300 flex items-center gap-2"
                >
                  {method.action}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              ) : (
                <a
                  href={method.link}
                  className="text-[#00A650] hover:text-[#2B3990] font-semibold transition-colors duration-300 flex items-center gap-2"
                >
                  {method.action}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Global Presence Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Global Presence
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              With offices around the world, we're ready to serve you wherever you are.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{location.city}</h3>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-[#00A650] font-semibold">{location.phone}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Have More Questions?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8"
          >
            Our team is here to help. Get in touch with us and we'll be happy to answer any questions you may have.
          </motion.p>
          <motion.button
            variants={itemVariants}
            onClick={openMainEnquiry}
            className="bg-gradient-to-r from-[#00A650] to-[#2B3990] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage; 