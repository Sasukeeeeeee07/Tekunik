import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{service.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-[#00A650] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A650]/5 to-[#2B3990]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={openMainEnquiry}
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#00A650] text-white rounded-full text-base md:text-lg font-semibold hover:bg-[#008c43] transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <svg
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
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 