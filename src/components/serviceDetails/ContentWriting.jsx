import React from 'react';
import { useEnquiry } from '../../context/EnquiryContext';
import { motion } from 'framer-motion';

const ContentWriting = () => {
  const { openEnquiry } = useEnquiry();

  const contentTypes = [
    {
      title: "Blog & Article Writing",
      description: "Engaging posts that establish thought leadership",
      icon: "📝",
      features: ["SEO-optimized", "Research-backed", "Industry-specific", "Engaging tone"]
    },
    {
      title: "Website Content",
      description: "Compelling copy that converts visitors",
      icon: "🌐",
      features: ["Clear messaging", "Call-to-actions", "Brand voice", "User-focused"]
    },
    {
      title: "Social Media Content",
      description: "Engaging posts that build community",
      icon: "📱",
      features: ["Platform-specific", "Trending topics", "Hashtag strategy", "Visual content"]
    },
    {
      title: "Technical Writing",
      description: "Complex information made simple",
      icon: "📊",
      features: ["Documentation", "White papers", "Case studies", "User guides"]
    }
  ];

  const process = [
    {
      phase: "Research",
      description: "Deep dive into your industry, audience, and objectives",
      icon: "🔍"
    },
    {
      phase: "Strategy",
      description: "Develop content plan aligned with your goals",
      icon: "📋"
    },
    {
      phase: "Creation",
      description: "Craft engaging content that resonates",
      icon: "✍️"
    },
    {
      phase: "Optimization",
      description: "Enhance content for maximum impact",
      icon: "⚡"
    }
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
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Content Writing"
            className="w-full h-[400px] object-cover"
          />
          <motion.div 
            className="absolute inset-0 z-20 flex items-center p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">Content Writing</h1>
              <p className="text-xl text-gray-200">
                Words that captivate, convince, and convert your audience
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Types Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Writing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
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
                  {type.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {type.features.map((feature, idx) => (
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

        {/* Process Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Writing Process</h2>
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#00A650] transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <motion.div 
                    className="bg-white rounded-xl p-6 text-center shadow-lg relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.phase}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quality Standards */}
        <motion.div 
          className="bg-[#2B3990] text-white rounded-2xl p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Quality Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Original Content", description: "Plagiarism-free, unique content crafted for your brand" },
                { title: "SEO Optimized", description: "Content structured for maximum search engine visibility" },
                { title: "Expert Writers", description: "Experienced professionals in your industry" }
              ].map((standard, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <motion.div 
                    className="bg-white/10 rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-semibold mb-3">{standard.title}</h3>
                    <p className="text-gray-300">{standard.description}</p>
                  </motion.div>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Content?</h2>
          <p className="text-gray-600 mb-8">
            Let's create content that engages your audience and drives results.
          </p>
          <motion.button 
            onClick={() => openEnquiry('Content Writing')}
            className="bg-[#00A650] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008c43] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Content Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentWriting; 