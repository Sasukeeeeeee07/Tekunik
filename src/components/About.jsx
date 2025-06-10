import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [showJobForm, setShowJobForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
    alert('Application submitted successfully!');
    setShowJobForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">About Tekunik</h1>
            <p className="text-xl text-gray-200">
              Transforming ideas into digital excellence with innovative solutions tailored to your unique business needs.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Our Story Section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600">
                TekUnik is a believer of embracing change! We are one of the fastest growing digital marketing agencies based out of Mumbai serving globally.
              </p>
              <p className="text-lg text-gray-600">
                We offer the most effective multi-channel and multi-platform Internet marketing services that will help your brand, products and services reach their full marketing reach and potential.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-[#00A650] mb-2">500+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-[#00A650] mb-2">50+</h3>
                  <p className="text-gray-600">Team Members</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-w-16 aspect-h-9 min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Team meeting"
                className="w-full h-full object-cover rounded-xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#2B3990] text-white p-6 rounded-xl shadow-lg">
                <p className="text-xl font-semibold">10+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "💡", title: "Innovation", desc: "At the core of everything we do" },
              { icon: "🎯", title: "Client Success", desc: "Our primary measure of achievement" },
              { icon: "📚", title: "Continuous Learning", desc: "Adaptation and growth mindset" },
              { icon: "🌱", title: "Sustainability", desc: "Ethical and sustainable practices" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of thinkers, creators, and problem-solvers, united by our passion for innovation and excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2B3990] to-[#00A650] p-8 rounded-xl text-white"
            >
              <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
              {!showJobForm ? (
                <div>
                  <p className="mb-6">
                    We're always looking for talented individuals who share our passion for innovation and excellence. If you're interested in joining our team, we'd love to hear from you.
                  </p>
                  <button
                    onClick={() => setShowJobForm(true)}
                    className="bg-white text-[#2B3990] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      required
                      className="w-full px-4 py-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Position Applied For"
                      required
                      className="w-full px-4 py-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg text-gray-800"
                    >
                      <option value="">Years of Experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white text-gray-800"
                    />
                    <p className="text-sm mt-1 text-white/80">Upload your resume (PDF, DOC, DOCX)</p>
                  </div>
                  <div>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Cover Letter (Optional)"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg text-gray-800"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setShowJobForm(false)}
                      className="text-white hover:underline"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-white text-[#2B3990] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-w-16 aspect-h-9 min-h-[400px] rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Our team culture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 