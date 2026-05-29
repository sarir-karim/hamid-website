import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields' })
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you! We\'ll get back to you within 24 hours.' 
      })
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Error submitting form. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mountain Soul Adventure",
    description: "Get in touch with Mountain Soul Adventure for your next adventure",
    url: "https://mountainsouladventure.com",
    telephone: "+92 XXX XXXXXXX",
    email: "info@mountainsoul.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gilgit-Baltistan",
      addressCountry: "PK"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+92 XXX XXXXXXX",
      email: "info@mountainsoul.com"
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Get in touch with Mountain Soul Adventure. Contact us for booking inquiries, custom itineraries, and adventure planning. Available 24/7 via email, phone, and WhatsApp." 
        />
        <meta 
          name="keywords" 
          content="contact us, get in touch, booking inquiries, adventure planning, mountain soul adventure contact" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="py-16 bg-gray-50" aria-label="Get in Touch">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to embark on your adventure? Let's plan your journey
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <article className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Status Messages */}
                {formStatus && (
                  <div 
                    className={`p-4 rounded ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                    role="alert"
                  >
                    {formStatus.message}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 XXX XXXXXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your adventure dream..."
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 text-white py-3 rounded font-semibold hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </article>

            {/* Contact Information */}
            <article className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                {/* Address */}
                <div className="mb-6 flex gap-4">
                  <FiMapPin className="text-2xl text-gray-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Address</p>
                    <p className="text-gray-900 font-semibold">
                      <a 
                        href="https://maps.google.com/?q=Gilgit+Baltistan+Pakistan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-800"
                      >
                        Gilgit-Baltistan, Pakistan
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6 flex gap-4">
                  <FiPhone className="text-2xl text-gray-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Phone</p>
                    <p className="text-gray-900 font-semibold">
                      <a 
                        href="tel:+92XXXXXXXXX"
                        className="text-gray-700 hover:text-blue-800"
                      >
                        +92 XXX XXXXXXX
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6 flex gap-4">
                  <FiMail className="text-2xl text-gray-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email</p>
                    <p className="text-gray-900 font-semibold">
                      <a 
                        href="mailto:info@mountainsoul.com"
                        className="text-gray-700 hover:text-blue-800"
                      >
                        info@mountainsoul.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <FaWhatsapp className="text-2xl text-gray-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">WhatsApp</p>
                    <p className="text-gray-900 font-semibold">
                      <a 
                        href="https://wa.me/92XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-800"
                      >
                        +92 XXX XXXXXXX
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Box */}
              <div className="bg-green-700 text-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3">Quick Response</h4>
                <p className="text-green-100 text-sm leading-relaxed mb-6">
                  We typically respond within 24 hours. For urgent inquiries, please contact us via WhatsApp.
                </p>
                <a
                  href="https://wa.me/92XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-50 transition-colors"
                >
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </a>
              </div>
            </article>
          </div>

          {/* Response Time Info */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Response Time:</span> We respond to all inquiries within 24 hours. For immediate assistance, please reach out via WhatsApp or phone during business hours.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
