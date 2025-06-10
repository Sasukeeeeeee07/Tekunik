import React from 'react';
import { useEnquiry } from '../../context/EnquiryContext';
import { motion } from 'framer-motion';

const BrandBuilding = () => {
  const { openEnquiry } = useEnquiry();

  const brandServices = [
    {
      title: "Brand Strategy",
      description: "Develop a comprehensive brand strategy that sets you apart",
      icon: "🎯",
      features: ["Market analysis", "Brand positioning", "Value proposition", "Target audience"]
    },
    {
      title: "Visual Identity",
      description: "Create a stunning visual language for your brand",
      icon: "🎨",
      features: ["Logo design", "Color palette", "Typography", "Brand guidelines"]
    },
    {
      title: "Brand Voice",
      description: "Establish a unique and consistent brand personality",
      icon: "🗣️",
      features: ["Tone of voice", "Messaging framework", "Communication style", "Brand story"]
    },
    {
      title: "Brand Experience",
      description: "Design memorable interactions across all touchpoints",
      icon: "✨",
      features: ["Customer journey", "Brand touchpoints", "User experience", "Brand consistency"]
    }
  ];

  const brandMetrics = [
    { label: "Brand Recognition", value: "85%", description: "Increase in brand recognition" },
    { label: "Customer Trust", value: "92%", description: "Trust rating from customers" },
    { label: "Market Growth", value: "65%", description: "Average market share growth" },
    { label: "ROI", value: "3.5x", description: "Return on branding investment" }
  ];

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Brand Building"
            className="w-full h-[400px] object-cover"
          />
          <motion.div 
            className="absolute inset-0 z-20 flex items-center p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">Brand Building</h1>
              <p className="text-xl text-gray-200">
                Transform your business into an unforgettable brand
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Brand Services Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Brand Building Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + index * 0.2, duration: 0.4 }}
                    >
                      <svg className="w-5 h-5 text-[#00A650] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Impact Metrics */}
        <motion.div 
          className="bg-[#2B3990] text-white rounded-2xl p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Brand Impact Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brandMetrics.map((metric, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-xl font-semibold mb-2">{metric.label}</div>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Brand Building Process */}
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Brand Building Process</h2>
          <div className="space-y-6">
            {[
              { phase: "Discovery", description: "Understanding your vision, market, and audience" },
              { phase: "Strategy", description: "Developing a comprehensive brand strategy" },
              { phase: "Creation", description: "Designing and crafting brand elements" },
              { phase: "Implementation", description: "Rolling out your brand across all channels" },
              { phase: "Growth", description: "Monitoring and evolving your brand" }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A650] text-white flex items-center justify-center font-bold text-xl"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {index + 1}
                </motion.div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800">{step.phase}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="bg-gray-100 rounded-2xl p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Approach",
                  description: "Data-driven branding strategies tailored to your goals"
                },
                {
                  title: "Creative Excellence",
                  description: "Award-winning design team with industry expertise"
                },
                {
                  title: "Proven Results",
                  description: "Track record of successful brand transformations"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Build Your Brand?</h2>
          <p className="text-gray-600 mb-8">
            Let's create a brand that resonates with your audience and drives business growth.
          </p>
          <motion.button 
            onClick={() => openEnquiry('Brand Building')}
            className="bg-[#00A650] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008c43] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Brand Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandBuilding; 