import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Features />
          <Testimonials />
          <Contact />
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Tekunik. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
