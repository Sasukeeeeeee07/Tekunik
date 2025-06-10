import React from 'react';
import { useEnquiry } from '../../context/EnquiryContext';
import { motion } from 'framer-motion';

const WebDevelopment = () => {
  const { openEnquiry } = useEnquiry();
  
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'PHP', icon: '🔷' }
  ];

  const process = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive development strategy.",
      icon: "🎯"
    },
    {
      title: "Design & Prototyping",
      description: "Creating intuitive interfaces and user experiences that engage.",
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Building robust, scalable solutions using cutting-edge technologies.",
      icon: "⚙️"
    },
    {
      title: "Testing & Launch",
      description: "Rigorous testing and smooth deployment of your web solution.",
      icon: "🚀"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative rounded-3xl overflow-hidden mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Web Development"
            className="w-full h-[400px] object-cover"
          />
          <motion.div 
            className="absolute inset-0 z-20 flex items-center justify-center text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">Web Development</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Creating powerful, scalable, and beautiful web solutions that drive business growth
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Expertise</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We specialize in creating custom web solutions that combine stunning design with powerful functionality. Our team of experienced developers works with the latest technologies to deliver websites and applications that exceed expectations.
              </p>
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-gray-700">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Process</h2>
            <div className="space-y-6">
              {process.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-[#00A650] rounded-full flex items-center justify-center text-2xl text-white"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Showcase */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div 
                key={index} 
                className="group relative rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={`https://picsum.photos/600/400?random=${index}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white text-left">
                    <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                    <p className="text-sm text-gray-200">Custom web application with modern architecture</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <motion.div 
            className="bg-[#2B3990] text-white rounded-2xl p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <motion.button 
              onClick={() => openEnquiry('Web Development')}
              className="bg-[#00A650] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008c43] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment; 