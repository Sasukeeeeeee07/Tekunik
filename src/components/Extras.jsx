import React from 'react';

const ExtraCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-col items-center text-center">
        <div className="text-5xl mb-6 text-blue-500 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Extras = () => {
  const extras = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"/>
        </svg>
      ),
      title: "Web Hosting",
      description: "Shared Hosting to Private Server whatever you demand."
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M2 12h20" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
        </svg>
      ),
      title: "Domain Buying",
      description: "Guide you in procurement of right domain name for you."
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2"/>
          <path d="M9 12l2 2 4-4" strokeWidth="2"/>
        </svg>
      ),
      title: "SSL Certificate",
      description: "Let your user know, that there identity is safe on your website."
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="2"/>
        </svg>
      ),
      title: "Website Management",
      description: "Everything to keep your site up and running."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-800">Few</span>
            <span className="text-blue-600"> Extras</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apart from the various digital service, we also take care of the basics so that everything is under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {extras.map((extra, index) => (
            <ExtraCard
              key={index}
              icon={extra.icon}
              title={extra.title}
              description={extra.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extras; 