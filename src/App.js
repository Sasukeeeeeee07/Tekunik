import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import About from './components/About.jsx';
import ServicesPage from './components/ServicesPage';
import WebDevelopment from './components/serviceDetails/WebDevelopment';
import DigitalMarketing from './components/serviceDetails/DigitalMarketing';
import ContentWriting from './components/serviceDetails/ContentWriting';
import BrandBuilding from './components/serviceDetails/BrandBuilding';
import WebsiteQuoteForm from './components/forms/WebsiteQuoteForm';
import MobileAppQuoteForm from './components/forms/MobileAppQuoteForm';
import Extras from './components/Extras';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { EnquiryProvider } from './context/EnquiryContext';
import EnquiryForm from './components/EnquiryForm';
import MainEnquiryForm from './components/MainEnquiryForm';
import './App.css';

function App() {
  return (
    <Router>
      <EnquiryProvider>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Services />
                <Features />
                <Extras />
                <Testimonials />
                <Contact />
              </main>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/content-writing" element={<ContentWriting />} />
            <Route path="/services/brand-building" element={<BrandBuilding />} />
            <Route path="/request-quote/website" element={<WebsiteQuoteForm />} />
            <Route path="/request-quote/mobile-app" element={<MobileAppQuoteForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; {new Date().getFullYear()} Tekunik. All rights reserved.</p>
            </div>
          </footer>
          <EnquiryForm />
          <MainEnquiryForm />
        </div>
      </EnquiryProvider>
    </Router>
  );
}

export default App;
