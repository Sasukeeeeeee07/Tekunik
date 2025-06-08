import React, { useState } from 'react';

const MobileAppQuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    address: '',
    companyDescription: '',
    decisionMakerName: '',
    requirements: '',
    appDescription: '',
    appParts: [],
    deadline: '',
    budget: '',
    platform: [],
    orientation: [],
    language: '',
    targetUsers: '',
    businessObjective: '',
    buildOnPhases: '',
    freeOrPaid: '',
    techStack: '',
    apiIntegration: '',
    backendApi: '',
    webBasedBackend: '',
    hostingPreference: '',
    paymentGateway: '',
    thirdPartyIntegrations: [],
    images: '',
    logo: '',
    content: '',
    hostingDomain: '',
    ssl: '',
    flowOfApp: '',
    brandGuidelines: '',
    competitors: '',
    desiredApps: '',
    updateResponsibility: '',
    updateFrequency: '',
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
    setFormData(prevState => ({
      ...prevState,
      [category]: checked 
        ? [...prevState[category], value]
        : prevState[category].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#00A9F4]/10 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mobile App Questionnaire</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mobile *</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
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
              <label className="block text-gray-700 mb-2">What's your company into?</label>
              <textarea
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Decision Maker */}
            <div>
              <label className="block text-gray-700 mb-2">Decision Maker's Name</label>
              <input
                type="text"
                name="decisionMakerName"
                value={formData.decisionMakerName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-gray-700 mb-2">Requirements?</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* App Description */}
            <div>
              <label className="block text-gray-700 mb-2">Summarize the app in few sentences</label>
              <textarea
                name="appDescription"
                value={formData.appDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* App Parts */}
            <div>
              <label className="block text-gray-700 mb-2">Which part of the application should be done by us? (may)</label>
              <div className="space-y-2">
                {["UI/UX", "Design", "Testing", "Development"].map((part) => (
                  <label key={part} className="flex items-start">
                    <input
                      type="checkbox"
                      value={part}
                      checked={formData.appParts.includes(part)}
                      onChange={(e) => handleCheckboxChange(e, 'appParts')}
                      className="mt-1 form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{part}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Deadline and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">App Deadline</label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                />
              </div>
            </div>

            {/* Platform */}
            <div>
              <label className="block text-gray-700 mb-2">Platform</label>
              <div className="space-y-2">
                {["Android Phone", "Android tablet", "iPad", "iPhone"].map((platform) => (
                  <label key={platform} className="flex items-start">
                    <input
                      type="checkbox"
                      value={platform}
                      checked={formData.platform.includes(platform)}
                      onChange={(e) => handleCheckboxChange(e, 'platform')}
                      className="mt-1 form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{platform}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Orientation */}
            <div>
              <label className="block text-gray-700 mb-2">Orientation</label>
              <div className="space-y-2">
                {["Portrait", "Landscape", "Both"].map((orientation) => (
                  <label key={orientation} className="flex items-start">
                    <input
                      type="checkbox"
                      value={orientation}
                      checked={formData.orientation.includes(orientation)}
                      onChange={(e) => handleCheckboxChange(e, 'orientation')}
                      className="mt-1 form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{orientation}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block text-gray-700 mb-2">Language</label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                placeholder="English / Hindi / Regional"
              />
            </div>

            {/* Target Users */}
            <div>
              <label className="block text-gray-700 mb-2">Target Users</label>
              <input
                type="text"
                name="targetUsers"
                value={formData.targetUsers}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
              />
            </div>

            {/* Business Objective */}
            <div>
              <label className="block text-gray-700 mb-2">Business objective for the mobile app?</label>
              <textarea
                name="businessObjective"
                value={formData.businessObjective}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Build Phases */}
            <div>
              <label className="block text-gray-700 mb-2">Do you wish to build this in phases?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="buildOnPhases"
                    value="yes"
                    checked={formData.buildOnPhases === 'yes'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="buildOnPhases"
                    value="no"
                    checked={formData.buildOnPhases === 'no'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">No</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="buildOnPhases"
                    value="maybe"
                    checked={formData.buildOnPhases === 'maybe'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">May Be</span>
                </label>
              </div>
            </div>

            {/* Free or Paid */}
            <div>
              <label className="block text-gray-700 mb-2">Will it be free or paid app?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="freeOrPaid"
                    value="free"
                    checked={formData.freeOrPaid === 'free'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Free</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="freeOrPaid"
                    value="paid"
                    checked={formData.freeOrPaid === 'paid'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Paid</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="freeOrPaid"
                    value="both"
                    checked={formData.freeOrPaid === 'both'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Both</span>
                </label>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-gray-700 mb-2">Tech Stack/Language?</label>
              <input
                type="text"
                name="techStack"
                value={formData.techStack}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
              />
            </div>

            {/* API Integration */}
            <div>
              <label className="block text-gray-700 mb-2">API Integration (Specify if any)</label>
              <input
                type="text"
                name="apiIntegration"
                value={formData.apiIntegration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
              />
            </div>

            {/* Backend API */}
            <div>
              <label className="block text-gray-700 mb-2">Do we have to build the API or need to be designed?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="backendApi"
                    value="yes"
                    checked={formData.backendApi === 'yes'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="backendApi"
                    value="no"
                    checked={formData.backendApi === 'no'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {/* Web-based Backend */}
            <div>
              <label className="block text-gray-700 mb-2">Do you need web based back end to manage?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="webBasedBackend"
                    value="yes"
                    checked={formData.webBasedBackend === 'yes'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="webBasedBackend"
                    value="no"
                    checked={formData.webBasedBackend === 'no'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {/* Hosting Preference */}
            <div>
              <label className="block text-gray-700 mb-2">Where do you want us to host?</label>
              <input
                type="text"
                name="hostingPreference"
                value={formData.hostingPreference}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
              />
            </div>

            {/* Payment Gateway */}
            <div>
              <label className="block text-gray-700 mb-2">Will there be any payment transaction in the app?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentGateway"
                    value="yes"
                    checked={formData.paymentGateway === 'yes'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentGateway"
                    value="no"
                    checked={formData.paymentGateway === 'no'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {/* Third Party Integrations */}
            <div>
              <label className="block text-gray-700 mb-2">Any third party integration?</label>
              <div className="space-y-2">
                {[
                  "Push notification",
                  "Email notification",
                  "Streaming server",
                  "Payment gateway",
                  "SMS / OTP / IVR integration",
                  "SMS services",
                  "Payment gateway integration",
                  "Shipping gateway integration"
                ].map((integration) => (
                  <label key={integration} className="flex items-start">
                    <input
                      type="checkbox"
                      value={integration}
                      checked={formData.thirdPartyIntegrations.includes(integration)}
                      onChange={(e) => handleCheckboxChange(e, 'thirdPartyIntegrations')}
                      className="mt-1 form-checkbox text-[#00A650]"
                    />
                    <span className="ml-2">{integration}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Resource Providers */}
            {[
              { label: "Images", name: "images" },
              { label: "Logo", name: "logo" },
              { label: "Content", name: "content" },
              { label: "Hosting and Domain", name: "hostingDomain" },
              { label: "SSL", name: "ssl" },
              { label: "Flow of the App", name: "flowOfApp" }
            ].map((resource) => (
              <div key={resource.name}>
                <label className="block text-gray-700 mb-2">{resource.label}</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={resource.name}
                      value="myCompany"
                      checked={formData[resource.name] === 'myCompany'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">My Company</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={resource.name}
                      value="tekunik"
                      checked={formData[resource.name] === 'tekunik'}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">TekUnik</span>
                  </label>
                </div>
              </div>
            ))}

            {/* Brand Guidelines */}
            <div>
              <label className="block text-gray-700 mb-2">Does your company have a logo / established image & branding guidelines (e.g. fonts, colour schemes etc)?</label>
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
              <label className="block text-gray-700 mb-2">Could you give us the App link of your top 3 competitors?</label>
              <textarea
                name="competitors"
                value={formData.competitors}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Desired Apps */}
            <div>
              <label className="block text-gray-700 mb-2">If you had to pick 3 apps you would love to have, which would they be?</label>
              <textarea
                name="desiredApps"
                value={formData.desiredApps}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00A650] focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Update Responsibility */}
            <div>
              <label className="block text-gray-700 mb-2">Would you like us to update your app or would you like to be responsible for updates?</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="updateResponsibility"
                    value="myCompany"
                    checked={formData.updateResponsibility === 'myCompany'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">My Company</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="updateResponsibility"
                    value="tekunik"
                    checked={formData.updateResponsibility === 'tekunik'}
                    onChange={handleInputChange}
                    className="form-radio text-[#00A650]"
                  />
                  <span className="ml-2">TekUnik</span>
                </label>
              </div>
            </div>

            {/* Update Frequency */}
            <div>
              <label className="block text-gray-700 mb-2">How often do you require updates?</label>
              <div className="flex flex-wrap gap-4">
                {[
                  "Daily",
                  "Weekly",
                  "Monthly",
                  "Quaterly",
                  "Half Yearly",
                  "Yearly"
                ].map((frequency) => (
                  <label key={frequency} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="updateFrequency"
                      value={frequency.toLowerCase()}
                      checked={formData.updateFrequency === frequency.toLowerCase()}
                      onChange={handleInputChange}
                      className="form-radio text-[#00A650]"
                    />
                    <span className="ml-2">{frequency}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Training Need */}
            <div>
              <label className="block text-gray-700 mb-2">Would you like to book a dedicated training session for your employees to learn to update the app?</label>
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

            {/* Submit Section */}
            <div className="text-center pt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">That's all we need for now!</h2>
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

export default MobileAppQuoteForm; 