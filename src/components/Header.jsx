import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.jpeg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed w-full z-50">
      {/* Gradient background with glassmorphism */}
      <div className="backdrop-blur-md bg-white/80 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={logo} 
                  alt="Tekunik - Uniqueness in Technology" 
                  className="h-12 object-contain"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#00A650] relative group">
                <span className="relative">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A650] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#00A650] relative group">
                <span className="relative">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A650] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-[#00A650] relative group">
                <span className="relative">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A650] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#00A650] relative group">
                <span className="relative">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A650] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              
              {/* Request Quote Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-[#00A650] rounded-lg hover:bg-[#008c43] group text-white"
                >
                  <span className="flex items-center">
                    Request Quote
                    <svg 
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden transform origin-top transition-all duration-300">
                    <div className="py-1">
                      <Link
                        to="/request-quote/website"
                        className="group flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#00A650] hover:to-[#2B3990] hover:text-white transition-all duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Website Development
                      </Link>
                      <Link
                        to="/request-quote/mobile-app"
                        className="group flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#00A650] hover:to-[#2B3990] hover:text-white transition-all duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Mobile App Development
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-[#00A650] transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient line under header */}
      <div className="h-[2px] bg-gradient-to-r from-[#00A650] via-[#2B3990] to-[#00A650]"></div>
    </header>
  );
};

export default Header; 