import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, features, path }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(path)}
    >
      <div className="text-[#00A650] mb-6 text-5xl">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-[#00A650] mt-1 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-end">
        <button className="text-[#00A650] font-semibold hover:text-[#008c43] transition-colors duration-300 flex items-center">
          Learn More
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Services = () => {
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
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center">
              <div className="h-1 w-12 bg-[#00A650]"></div>
              <span className="mx-4 text-[#00A650] font-semibold">OUR SERVICES</span>
              <div className="h-1 w-12 bg-[#00A650]"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
            Transforming Ideas into Digital Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs, helping you achieve your goals and stand out in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-[#00A650] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008c43] transition-all duration-300 transform hover:scale-105">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 