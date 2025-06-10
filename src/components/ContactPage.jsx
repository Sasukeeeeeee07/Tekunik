import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen bg-[#F8F9FC] pt-16 md:pt-20 pb-12 md:pb-20"
    >
      {/* Header Section with Dark Background */}
      <div className="w-full bg-[#1E293B] text-white py-12 md:py-16 mb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Send us a message!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div 
              variants={itemVariants}
              className="group"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:border-[#2C5282] focus:ring-2 focus:ring-[#EBF4FF] outline-none transition-all duration-300"
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="group"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:border-[#2C5282] focus:ring-2 focus:ring-[#EBF4FF] outline-none transition-all duration-300"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="group"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:border-[#2C5282] focus:ring-2 focus:ring-[#EBF4FF] outline-none transition-all duration-300 resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-center pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#2C5282] text-white rounded font-medium hover:bg-[#1E3A5F] transition-colors duration-300 min-w-[160px]"
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 mb-2">
            Based in Mumbai, India
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tekunik. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage; 