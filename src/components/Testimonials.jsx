import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Testimonials.module.css';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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

        <div className="max-w-4xl mx-auto">
          <div className={styles.testimonialSlider}>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-[#00A650] mb-4">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-2.2 0-4 1.8-4 4v12h8V12h-6c0-3.2 2.8-6 6-6V8zm12 0c-2.2 0-4 1.8-4 4v12h8V12h-6c0-3.2 2.8-6 6-6V8z"/>
                          </svg>
                        </div>
                        <p className="text-gray-600 text-lg mb-6 italic">
                          {testimonial.content}
                        </p>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 