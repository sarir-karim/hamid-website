import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Top from '../components/Top'

export default function BookNow() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    adults: '',
    children: '',
    city: '',
    country: '',
    budget: '',
    areaOfInterest: '',
    howYouFoundUs: [],
    feedback: ''
  })

  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      howYouFoundUs: checked
        ? [...prev.howYouFoundUs, value]
        : prev.howYouFoundUs.filter(item => item !== value)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.adults || !formData.budget) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields' })
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000))

      setFormStatus({
        type: 'success',
        message: 'Thank you! We received your booking inquiry. Our team will contact you within 24 hours.'
      })

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        adults: '',
        children: '',
        city: '',
        country: '',
        budget: '',
        areaOfInterest: '',
        howYouFoundUs: [],
        feedback: ''
      })

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Error submitting form. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const budgetOptions = [
    'Select Budget Category',
    'Budget (Under $1500)',
    'Standard ($1500 - $3000)',
    'Premium ($3000 - $5000)',
    'Luxury ($5000+)'
  ]

  const channelOptions = [
    { label: 'Facebook', value: 'facebook' },
    { label: 'Twitter', value: 'twitter' },
    { label: 'Instagram', value: 'instagram' },
    { label: 'YouTube', value: 'youtube' },
    { label: 'Web Surfing', value: 'web-surfing' },
    { label: 'Share By Friend', value: 'share-by-friend' }
  ]

  return (
    <>
      <Helmet>
        <title>Book Now - Mountain Soul Adventure</title>
        <meta
          name="description"
          content="Book your adventure now with Mountain Soul Adventure. Fill out our inquiry form and we'll create a custom itinerary tailored to your needs."
        />
      </Helmet>

      {/* <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-green-900/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-400 mb-4">Begin Your Journey</p>
         
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Share your travel dreams with us. Our team will craft a personalized itinerary for your mountain soul adventure.
          </p>
        </div>
      </section> */}

      <Top title={"Book Your Adventure"}/>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          {/* Status Message */}
          {formStatus && (
            <div
              className={`mb-8 rounded-lg border p-4 ${
                formStatus.type === 'success'
                  ? 'border-green-200 bg-green-50 text-green-800'
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}
              role="alert"
            >
              {formStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-700 pb-3">
                Personal Information
              </h2>

              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cell# (For WhatsApp/IMO/Direct Call) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Cell Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Travel Details Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-700 pb-3">
                Travel Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="adults" className="block text-sm font-semibold text-gray-700 mb-2">
                    Adults <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    placeholder="Number of Adults"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="children" className="block text-sm font-semibold text-gray-700 mb-2">
                    Children (5-12 Years)
                  </label>
                  <input
                    type="number"
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    placeholder="Number of Children"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Category <span className="text-red-600">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition bg-white"
                  required
                >
                  {budgetOptions.map((option, idx) => (
                    <option key={idx} value={option === 'Select Budget Category' ? '' : option} disabled={option === 'Select Budget Category'}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="areaOfInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                  Area Of Interest
                </label>
                <input
                  type="text"
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  placeholder="Area Of Interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* How Did You Find Us Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-700 pb-3">
                How did you find us? <span className="text-red-600">*</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {channelOptions.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.howYouFoundUs.includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 rounded border-gray-300 text-green-700 focus:ring-green-700"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Feedback Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-700 pb-3">
                Additional Information
              </h2>

              <div>
                <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 mb-2">
                  Suggestions And Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="Any other suggestions feedback comments please feel free to write."
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg uppercase tracking-wider"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>

            <p className="text-sm text-gray-600 text-center">
              <span className="text-red-600">*</span> Required fields
            </p>
          </form>
        </div>
      </section>

      <section className="bg-green-700 py-12 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions? We're Here to Help</h2>
          <p className="text-green-100 mb-6">
            Contact our team directly if you prefer to discuss your adventure plans over the phone or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+92XXXXXXXXX"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition"
            >
              ☎ Call Us
            </a>
            <a
              href="https://wa.me/92XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
