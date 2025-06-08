import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#00A650] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#2B3990] rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#00A650] mb-8"></div>
          
          {/* Main heading with animated typing effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We believe in a
            <span className="block">unique approach to</span>
            <span className="text-[#00A650]">each business.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
            Transforming ideas into digital excellence with innovative solutions tailored to your unique business needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#00A650] text-white rounded-full text-lg font-semibold hover:bg-[#008c43] transition-all duration-300 transform hover:scale-105">
              GET STARTED
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Floating Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold text-[#00A650] mb-2">500+</div>
              <div className="text-white">Projects Delivered</div>
            </div>
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl">
              <div className="text-3xl font-bold text-[#00A650] mb-2">98%</div>
              <div className="text-white">Client Satisfaction</div>
            </div>
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl hidden md:block">
              <div className="text-3xl font-bold text-[#00A650] mb-2">24/7</div>
              <div className="text-white">Support Available</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-0.5 h-16 bg-white/20"></div>
          <div className="mt-4 text-white/60 text-sm">Scroll to explore</div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 