import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-start">
              <div className="flex items-center">
                <span className="text-[#00A650] text-3xl font-light">T</span>
                <span className="text-[#00A650] text-3xl mx-1">E</span>
                <span className="text-[#00A650] text-3xl font-light">K</span>
                <span className="text-[#2B3990] text-3xl font-light mx-1">U</span>
                <span className="text-[#2B3990] text-3xl font-light">N</span>
                <span className="text-[#2B3990] text-3xl font-light">I</span>
                <span className="text-[#2B3990] text-3xl font-light">K</span>
              </div>
              <span className="text-gray-600 text-[10px] tracking-wider mt-[-4px]">
                UNIQUENESS IN TECHNOLOGY
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link
              to="/request-quote"
              className="bg-[#00A650] text-white px-4 py-2 rounded-md hover:bg-[#008c43] transition duration-300"
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
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
    </header>
  );
};

export default Header; 