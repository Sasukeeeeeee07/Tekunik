import React, { useState } from 'react';

const WebsiteQuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    address: '',
    companyDescription: '',
    hasURL: '',
    needHosting: '',
    needDomain: '',
    projectDeadline: '',
    budget: '',
    reasonForWebsite: [],
    targetAudience: {
      under20: false,
      '21to30': false,
      '31to40': false,
      '41to50': false,
      '51plus': false
    },
    choiceReason: {
      offeredService: false,
      priceOfProduct: false,
      bestInMarket: false
    },
    successSaying: '',
    uniqueValue: '',
    proofPoints: '',
    websiteFeatures: [],
    specialFeatures: [],
    widgets: '',
    links: '',
    content: '',
    hostingDomain: '',
    sslCertificate: '',
    brandGuidelines: '',
    competitors: '',
    businessValues: '',
    needTraining: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    if (typeof formData[category] === 'object' && !Array.isArray(formData[category])) {
      // Handle object-based checkboxes (like targetAudience)
      setFormData(prevState => ({
        ...prevState,
        [category]: {
          ...prevState[category],
          [value]: checked
        }
      }));
    } else {
      // Handle array-based checkboxes
      setFormData(prevState => ({
        ...prevState,
        [category]: checked 
          ? [...prevState[category], value]
          : prevState[category].filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#00A9F4]/10 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Website Questionnaire</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mobile *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="2"
              />
            </div>

            {/* Company Description */}
            <div>
              <label className="block text-gray-700 mb-2">What does your company do?</label>
              <textarea
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="4"
              />
            </div>

            {/* Yes/No Questions */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Do you have a URL in mind for your website?</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="hasURL"
                      value="yes"
                      checked={formData.hasURL === 'yes'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="hasURL"
                      value="no"
                      checked={formData.hasURL === 'no'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Do you need us to handle hosting?</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needHosting"
                      value="yes"
                      checked={formData.needHosting === 'yes'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needHosting"
                      value="no"
                      checked={formData.needHosting === 'no'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Do you need us to buy your domain?</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needDomain"
                      value="yes"
                      checked={formData.needDomain === 'yes'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needDomain"
                      value="no"
                      checked={formData.needDomain === 'no'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Project Deadline */}
            <div>
              <label className="block text-gray-700 mb-2">Is there any deadline for this project?</label>
              <input
                type="text"
                name="projectDeadline"
                value={formData.projectDeadline}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-gray-700 mb-2">Could you give us a ballpark figure for your available budget for this website project?</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
              />
            </div>

            {/* Reason for Website */}
            <div>
              <label className="block text-gray-700 mb-2">I want this site because:</label>
              <div className="space-y-2">
                {[
                  "I need to build awareness for my brand",
                  "I want to sell my products/services online",
                  "I need my company to have a better image online",
                  "I want to provide better service to my customers",
                  "I need to use it to build customer loyalty",
                  "I want to reach a broader market",
                  "I need somewhere to promote my latest products/services",
                  "I have my own reasons"
                ].map((reason, index) => (
                  <label key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      value={reason}
                      checked={formData.reasonForWebsite.includes(reason)}
                      onChange={(e) => handleCheckboxChange(e, 'reasonForWebsite')}
                      className="mt-1 form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{reason}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Target Audience Age */}
            <div>
              <label className="block text-gray-700 mb-2">My target clients are in age bracket:</label>
              <div className="space-y-2">
                {[
                  { label: "Under 20", value: "under20" },
                  { label: "21-30", value: "21to30" },
                  { label: "31-40", value: "31to40" },
                  { label: "41-50", value: "41to50" },
                  { label: "51 plus", value: "51plus" }
                ].map((age) => (
                  <label key={age.value} className="flex items-center">
                    <input
                      type="checkbox"
                      value={age.value}
                      checked={formData.targetAudience[age.value]}
                      onChange={(e) => handleCheckboxChange(e, 'targetAudience')}
                      className="form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{age.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Choice Reasons */}
            <div>
              <label className="block text-gray-700 mb-2">My clients come to me because:</label>
              <div className="space-y-2">
                {[
                  { label: "I offer excellent service", value: "offeredService" },
                  { label: "I have the best price on the market", value: "priceOfProduct" },
                  { label: "I have the best quality on the market", value: "bestInMarket" }
                ].map((reason) => (
                  <label key={reason.value} className="flex items-center">
                    <input
                      type="checkbox"
                      value={reason.value}
                      checked={formData.choiceReason[reason.value]}
                      onChange={(e) => handleCheckboxChange(e, 'choiceReason')}
                      className="form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{reason.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Success Saying */}
            <div>
              <label className="block text-gray-700 mb-2">Success's saying the web for your business. What words or phrases will they search to find you?</label>
              <textarea
                name="successSaying"
                value={formData.successSaying}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Unique Value */}
            <div>
              <label className="block text-gray-700 mb-2">What is it that makes your products or services unique on the market?</label>
              <textarea
                name="uniqueValue"
                value={formData.uniqueValue}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Proof Points */}
            <div>
              <label className="block text-gray-700 mb-2">Do you have any proof that your solutions are better than your competitors?</label>
              <textarea
                name="proofPoints"
                value={formData.proofPoints}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Website Features */}
            <div>
              <label className="block text-gray-700 mb-2">Our new website would need to include:</label>
              <div className="space-y-2">
                {[
                  "Basic HTML",
                  "Content Management System (we can update & edit)",
                  "eCommerce features",
                  "WordPress Based CMS",
                  "PHP / Laravel / ASP Custom",
                  "Blog Integration",
                  "Online Review/Blog",
                  "Newsletter signup",
                  "Social media integration",
                  "CMS Integration",
                  "Login/Registration",
                  "Search Engine Optimization",
                  "Separate dedicated landing pages",
                  "Mobile responsive website",
                  "Additional Requirements"
                ].map((feature, index) => (
                  <label key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      value={feature}
                      checked={formData.websiteFeatures.includes(feature)}
                      onChange={(e) => handleCheckboxChange(e, 'websiteFeatures')}
                      className="mt-1 form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Features */}
            <div>
              <label className="block text-gray-700 mb-2">We want the following special features to be included in our new website:</label>
              <div className="space-y-2">
                {[
                  "Video streaming",
                  "Audio streaming",
                  "Newsletter/Email sign-up forms",
                  "Infographics/Feature Items",
                  "Advanced search",
                  "Password login",
                  "Registration form",
                  "Pop-up/slide",
                  "Image slider",
                  "Other features"
                ].map((feature, index) => (
                  <label key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      value={feature}
                      checked={formData.specialFeatures.includes(feature)}
                      onChange={(e) => handleCheckboxChange(e, 'specialFeatures')}
                      className="mt-1 form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Widgets */}
            <div>
              <label className="block text-gray-700 mb-2">Widgets</label>
              <input
                type="text"
                name="widgets"
                value={formData.widgets}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                placeholder="My Company — Tekunik"
              />
            </div>

            {/* Links */}
            <div>
              <label className="block text-gray-700 mb-2">Links</label>
              <input
                type="text"
                name="links"
                value={formData.links}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                placeholder="My Company — Tekunik"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-gray-700 mb-2">Content</label>
              <input
                type="text"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                placeholder="My Company — Tekunik"
              />
            </div>

            {/* Hosting and Domain */}
            <div>
              <label className="block text-gray-700 mb-2">Hosting and Domain</label>
              <input
                type="text"
                name="hostingDomain"
                value={formData.hostingDomain}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                placeholder="My Company — Tekunik"
              />
            </div>

            {/* SSL Certificate */}
            <div>
              <label className="block text-gray-700 mb-2">SSL Certificate</label>
              <input
                type="text"
                name="sslCertificate"
                value={formData.sslCertificate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                placeholder="My Company — Tekunik"
              />
            </div>

            {/* Brand Guidelines */}
            <div>
              <label className="block text-gray-700 mb-2">Does your company have a logo / established brand guidelines (e.g. fonts, colors schemes)?</label>
              <textarea
                name="brandGuidelines"
                value={formData.brandGuidelines}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Competitors */}
            <div>
              <label className="block text-gray-700 mb-2">Could you give us the websites of your top 3 competitors?</label>
              <textarea
                name="competitors"
                value={formData.competitors}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Business Values */}
            <div>
              <label className="block text-gray-700 mb-2">If you had to pick 3 websites you would like to be responsible for updating?</label>
              <textarea
                name="businessValues"
                value={formData.businessValues}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Training Need */}
            <div>
              <label className="block text-gray-700 mb-2">Would you like to book a dedicated training session for your employees to learn to update the site?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="needTraining"
                    value="yes"
                    checked={formData.needTraining === 'yes'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="needTraining"
                    value="no"
                    checked={formData.needTraining === 'no'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-gray-700 mb-2">Is there anything else you'd like to tell us?</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <p className="text-gray-700 mb-4">That's all we need for now!</p>
              <p className="text-gray-700 mb-8">Thanks for taking time to fill this in - we'll be in touch with a quotation shortly.</p>
              <button
                type="submit"
                className="bg-[#00A650] text-white px-8 py-3 rounded-lg hover:bg-[#008c43] transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WebsiteQuoteForm; 