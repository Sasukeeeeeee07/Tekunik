import React from 'react';
import { useEnquiry } from '../../context/EnquiryContext';

const DigitalMarketing = () => {
  const { openEnquiry } = useEnquiry();

  const services = [
    {
      title: "Search Engine Optimization",
      description: "Improve your website's visibility in search results",
      icon: "🔍",
      metrics: ["Increased Rankings", "More Organic Traffic", "Higher Conversions"]
    },
    {
      title: "Social Media Marketing",
      description: "Build and engage with your audience on social platforms",
      icon: "📱",
      metrics: ["Brand Awareness", "Community Growth", "Social Engagement"]
    },
    {
      title: "PPC Advertising",
      description: "Drive targeted traffic and leads through paid campaigns",
      icon: "🎯",
      metrics: ["ROI Tracking", "Conversion Rate", "Cost per Acquisition"]
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships",
      icon: "📧",
      metrics: ["Open Rates", "Click-through Rates", "Subscriber Growth"]
    }
  ];

  const stats = [
    { number: "300%", label: "Average ROI" },
    { number: "80%", label: "Traffic Increase" },
    { number: "65%", label: "Conversion Rate" },
    { number: "24/7", label: "Campaign Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Digital Marketing"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center p-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">Digital Marketing</h1>
              <p className="text-xl text-gray-200">
                Data-driven strategies that deliver measurable results and drive business growth
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#00A650] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-3">
                {service.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#00A650] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Marketing Process</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: "Research & Analysis", description: "Understanding your business, competitors, and target audience" },
              { step: 2, title: "Strategy Development", description: "Creating a customized marketing plan aligned with your goals" },
              { step: 3, title: "Implementation", description: "Executing campaigns across chosen digital channels" },
              { step: 4, title: "Monitoring & Optimization", description: "Continuous tracking and improvement of campaign performance" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2B3990] rounded-full flex items-center justify-center text-xl font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#2B3990] to-[#00A650] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that helps you reach your business goals.
          </p>
          <button 
            onClick={() => openEnquiry('Digital Marketing')}
            className="bg-white text-[#2B3990] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing; 