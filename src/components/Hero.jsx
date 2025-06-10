import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { useEnquiry } from '../context/EnquiryContext';

const Hero = () => {
  const { openMainEnquiry } = useEnquiry();
  
  const stats = [
    { number: 500, suffix: '+', label: 'Projects Delivered' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 24, suffix: '/7', label: 'Support Available' }
  ];

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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-12 md:py-0">
      {/* Background with overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </motion.div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
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
          className="absolute top-20 right-20 w-32 h-32 bg-[#00A650] rounded-full blur-3xl opacity-20"
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
          className="absolute bottom-40 left-20 w-40 h-40 bg-[#2B3990] rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-[calc(100vh-6rem)] md:min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl mx-auto py-8 md:py-0"
        >
          {/* Decorative line */}
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-[#00A650] mb-8 md:mb-10"
          />
          
          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight"
          >
            <span className="block mb-1 md:mb-2">We believe in a</span>
            <span className="block mb-1 md:mb-2">unique approach to</span>
            <span className="text-[#00A650]">each business.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl leading-relaxed"
          >
            Transforming ideas into digital excellence with innovative solutions tailored to your unique business needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
          >
            <motion.button 
              onClick={openMainEnquiry}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00A650] to-[#2B3990] text-white rounded-full text-base sm:text-lg font-semibold transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">GET STARTED</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B3990] to-[#00A650] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            <motion.button 
              onClick={openMainEnquiry}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full text-base sm:text-lg font-semibold transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Discuss Your Project</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="backdrop-blur-lg bg-white/10 p-4 sm:p-6 rounded-xl text-center sm:text-left hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00A650] mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-base text-white">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 