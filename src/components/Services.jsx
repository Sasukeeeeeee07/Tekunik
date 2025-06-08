import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="text-[#00A650] mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and responsive design principles."
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to boost your online presence and drive growth."
    },
    {
      icon: "⚡",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for modern business needs."
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data."
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced AI and machine learning algorithms."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 