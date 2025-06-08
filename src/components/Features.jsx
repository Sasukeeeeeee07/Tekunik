import React from 'react';

const Features = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose Tekunik?
            </h2>
            <p className="text-gray-600 mb-8">
              We combine innovation with reliability to deliver exceptional technology solutions that drive business growth and success.
            </p>
            <div className="space-y-4">
              {[
                "Industry-leading expertise in latest technologies",
                "Dedicated support and maintenance",
                "Customized solutions for your specific needs",
                "Agile development methodology",
                "Transparent communication and reporting"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#00A650] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#00A650] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 