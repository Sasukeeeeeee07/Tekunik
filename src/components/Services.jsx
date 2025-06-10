import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEnquiry } from '../context/EnquiryContext';

const Services = () => {
  const { openMainEnquiry } = useEnquiry();
  
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web solutions that combine stunning design with powerful functionality.",
      features: [
        "Responsive website design",
        "E-commerce development",
        "Custom web applications",
        "Website maintenance & support"
      ],
      path: "/services/web-development"
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to boost your online presence and drive growth.",
      features: [
        "SEO optimization",
        "Social media marketing",
        "PPC advertising",
        "Email marketing campaigns"
      ],
      path: "/services/digital-marketing"
    },
    {
      icon: "✍️",
      title: "Content Writing",
      description: "Compelling content that engages your audience and tells your brand story.",
      features: [
        "Blog & article writing",
        "Website content",
        "SEO copywriting",
        "Social media content"
      ],
      path: "/services/content-writing"
    },
    {
      icon: "🎨",
      title: "Brand Building",
      description: "Comprehensive brand development to establish a strong market presence.",
      features: [
        "Brand strategy",
        "Visual identity design",
        "Brand guidelines",
        "Brand messaging"
      ],
      path: "/services/brand-building"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Link
                to={service.path}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 block h-full"
              >
                <div className="flex items-start gap-4">
                  <motion.span 
                    variants={iconVariants}
                    className="text-4xl"
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {service.icon}
                  </motion.span>
                  <div>
                    <motion.h3 
                      variants={itemVariants}
                      className="text-2xl font-bold text-gray-800 mb-2"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      variants={itemVariants}
                      className="text-gray-600 mb-4"
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul 
                      variants={containerVariants}
                      className="space-y-2"
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          variants={featureVariants}
                          className="flex items-center text-gray-600"
                        >
                          <motion.svg 
                            variants={iconVariants}
                            className="w-5 h-5 text-[#00A650] mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </motion.svg>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#00A650]/5 to-[#2B3990]/5 rounded-2xl transition-opacity duration-300" 
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            onClick={openMainEnquiry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#00A650] text-white rounded-full text-base md:text-lg font-semibold hover:bg-[#008c43] transition-all duration-300"
          >
            Start Your Project
            <motion.svg
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="w-4 h-4 md:w-5 md:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services; 