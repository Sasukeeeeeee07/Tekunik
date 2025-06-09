import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'Web Development',
      path: '/services/web-development',
      description: 'Custom websites and web applications that drive results',
      icon: '🌐',
      bgColor: 'from-blue-500 to-indigo-600',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Custom Web Applications',
        'Website Maintenance',
        'Performance Optimization'
      ]
    },
    {
      title: 'Digital Marketing',
      path: '/services/digital-marketing',
      description: 'Strategic digital marketing solutions to boost your online presence',
      icon: '📈',
      bgColor: 'from-green-500 to-teal-600',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Pay-Per-Click Advertising',
        'Email Marketing',
        'Content Strategy'
      ]
    },
    {
      title: 'Content Writing',
      path: '/services/content-writing',
      description: 'Engaging content that tells your story and converts visitors',
      icon: '✍️',
      bgColor: 'from-purple-500 to-pink-600',
      features: [
        'Website Content',
        'Blog Posts',
        'Social Media Content',
        'Technical Writing',
        'Copywriting'
      ]
    },
    {
      title: 'Brand Building',
      path: '/services/brand-building',
      description: 'Create a strong, memorable brand identity that stands out',
      icon: '🎯',
      bgColor: 'from-orange-500 to-red-600',
      features: [
        'Brand Strategy',
        'Visual Identity',
        'Brand Guidelines',
        'Logo Design',
        'Brand Messaging'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden bg-gray-900 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#0000_25%,#fff2_50%,#0000_75%)] animate-shimmer bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto animate-fade-in-delay">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>
      </div>

      {/* Services Grid with Interactive Cards */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative bg-white rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-center text-gray-700 transform transition-transform duration-300 ${
                          hoveredService === index ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="group-hover:font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className={`inline-flex items-center px-6 py-3 rounded-lg text-white transition-all duration-300 bg-gradient-to-r ${service.bgColor} hover:shadow-lg`}
                  >
                    <span>Learn More</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with us to discuss how we can help your business grow in the digital landscape.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <span>Contact Us</span>
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0, 0 0; }
          100% { background-position: -200% 0, 0 0; }
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage; 