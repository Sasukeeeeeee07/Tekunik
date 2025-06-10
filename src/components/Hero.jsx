import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { useEnquiry } from '../context/EnquiryContext';

const Hero = () => {
  const { openEnquiry } = useEnquiry();
  
  const stats = [
    { number: 500, suffix: '+', label: 'Projects Delivered' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 24, suffix: '/7', label: 'Support Available' }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#00A650] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#2B3990] rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          {/* Decorative line */}
          <div className="w-20 h-1 bg-[#00A650] mb-6 md:mb-8"></div>
          
          {/* Main heading with animated typing effect */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            <span className="block mb-2">We believe in a</span>
            <span className="block mb-2">unique approach to</span>
            <span className="text-[#00A650]">each business.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl">
            Transforming ideas into digital excellence with innovative solutions tailored to your unique business needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-20">
            <button 
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#00A650] text-white rounded-full text-base sm:text-lg font-semibold hover:bg-[#008c43] transition-all duration-300 transform hover:scale-105"
            >
              GET STARTED
            </button>
            <button 
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Discuss Your Project
            </button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="backdrop-blur-lg bg-white/10 p-4 sm:p-6 rounded-xl text-center sm:text-left"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#00A650] mb-1 sm:mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-base text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 