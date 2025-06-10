import React from 'react';
import { useEnquiry } from '../../context/EnquiryContext';

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
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Brand Building"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center p-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">Brand Building</h1>
              <p className="text-xl text-gray-200">
                Transform your business into an unforgettable brand
              </p>
            </div>
          </div>
        </div>

        {/* Brand Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Brand Building Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-[#00A650] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Impact Metrics */}
        <div className="bg-[#2B3990] text-white rounded-2xl p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Brand Impact Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brandMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-xl font-semibold mb-2">{metric.label}</div>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Building Process */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Brand Building Process</h2>
          <div className="space-y-6">
            {[
              { phase: "Discovery", description: "Understanding your vision, market, and audience" },
              { phase: "Strategy", description: "Developing a comprehensive brand strategy" },
              { phase: "Creation", description: "Designing and crafting brand elements" },
              { phase: "Implementation", description: "Rolling out your brand across all channels" },
              { phase: "Growth", description: "Monitoring and evolving your brand" }
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A650] text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800">{step.phase}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-100 rounded-2xl p-12 mb-20">
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
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Build Your Brand?</h2>
          <p className="text-gray-600 mb-8">
            Let's create a brand that resonates with your audience and drives business growth.
          </p>
          <button 
            onClick={() => openEnquiry('Brand Building')}
            className="bg-[#00A650] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008c43] transition-all duration-300 transform hover:scale-105"
          >
            Start Your Brand Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandBuilding; 