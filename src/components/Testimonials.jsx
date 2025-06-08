import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Tekunik transformed our digital presence completely. Their team's expertise and dedication to quality is unmatched.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, Innovation Labs",
      content: "The AI solutions provided by Tekunik have revolutionized our data processing capabilities. Exceptional work!",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emma Williams",
      role: "Marketing Director, GlobalTech",
      content: "Their digital marketing strategies helped us achieve a 300% growth in online engagement. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <div className="text-[#00A650] mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.2 0-4 1.8-4 4v12h8V12h-6c0-3.2 2.8-6 6-6V8zm12 0c-2.2 0-4 1.8-4 4v12h8V12h-6c0-3.2 2.8-6 6-6V8z"/>
                  </svg>
                </div>
                <p className="text-gray-600 text-lg mb-6 italic">
                  {testimonials[currentIndex].content}
                </p>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 