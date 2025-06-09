import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-blue-600 opacity-10 pattern-dots"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center animate-fade-in">
            Innovating the Digital Future
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <section className="mb-20 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
              TekUnik is a believer of embracing change!
              We are one of the fastest growing digital marketing agencies based out of Mumbai serving globally. We offer the most effective multi-channel and multi-platform Internet marketing services that will help your brand, products and services reach their full marketing reach and potential. We take pride in delivering Intelligent Designs and Engaging Experiences for clients all over the World. We thrive on problem-solving and working with clients to seek out the best possible digital solution.
              </p>
              <p className="text-lg text-gray-600">
              We are a bunch of determined techies and creative fanatics and we cover every aspect of digital from graphic designers, web developers, project management, account management, and a full marketing suite and we are determined to lift your brand to the top.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✦</span>
                  <span className="text-gray-700">Innovation at the core of everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✦</span>
                  <span className="text-gray-700">Client success as our primary measure of achievement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✦</span>
                  <span className="text-gray-700">Continuous learning and adaptation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✦</span>
                  <span className="text-gray-700">Ethical and sustainable practices</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                description: "Creating powerful, scalable web applications using cutting-edge technologies",
                icon: "🌐"
              },
              {
                title: "Digital Marketing",
                description: "Strategic marketing solutions to boost your online presence",
                icon: "📈"
              },
              {
                title: "Content Writing",
                description: "Compelling content that tells your story and engages your audience",
                icon: "✍️"
              },
              {
                title: "Brand Building",
                description: "Building strong, memorable brands that stand out in the digital space",
                icon: "🎯"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translate-y-[-5px]"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Discover</h3>
              <p className="text-gray-600">
                We begin by deeply understanding your business, goals, and challenges. This discovery phase helps us craft solutions that truly matter.
              </p>
            </div>
            <div className="space-y-4 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Design</h3>
              <p className="text-gray-600">
                Our creative team designs innovative solutions that combine aesthetics with functionality, ensuring an exceptional user experience.
              </p>
            </div>
            <div className="space-y-4 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Deliver</h3>
              <p className="text-gray-600">
                We implement solutions with precision and care, ensuring quality, performance, and reliability at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            We're a diverse team of thinkers, creators, and problem-solvers, united by our passion for innovation and excellence in everything we do.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who share our passion for innovation and excellence. If you're interested in joining our team, we'd love to hear from you.
              </p>
             
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Culture</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Collaborative and inclusive environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Continuous learning and growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Work-life balance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Innovation-driven mindset</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 