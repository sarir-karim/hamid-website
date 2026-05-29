import { Helmet } from 'react-helmet-async'
import { useServices, DEFAULT_SERVICES } from '../hooks/useAPI'
import { FaMountain, FaHiking,  FaUsers } from 'react-icons/fa'

import { GiJeep } from "react-icons/gi";

export default function Services() {
  // Fetch services from API or use default fallback data
  const { data: apiServices, loading, error } = useServices()
  const services = apiServices || DEFAULT_SERVICES

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      description: service.longDescription,
      url: `#${service.id}`
    }))
  }

  return (
    <>
      <Helmet>
        <title>Our Services - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Explore our core adventure services: mountaineering, trekking & hiking, jeep safaris, and cultural tours across Pakistan's most beautiful landscapes." 
        />
        <meta 
          name="keywords" 
          content="mountaineering, trekking, hiking, jeep safari, cultural tours, Pakistan adventure services" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="py-16 bg-gray-50" aria-label="Our Core Services">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3 ">
              Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional, safe, and authentic adventure experiences
            </p>
          </div>

          {/* Error State - Only show if no fallback data */}
          {error && !services && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-700">Unable to load services. Please try again later.</p>
            </div>
          )}

          {/* Loading State - Only show if no data available yet */}
          {loading && !services && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-gray-400">Loading services...</div>
            </div>
          )}

          {/* Services Grid */}
          {!loading && services && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <article 
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4" aria-hidden="true">
                    {service.id === 'mountaineering' && <FaMountain size={40} className="text-green-700" />}
                    {service.id === 'trekking-hiking' && <FaHiking size={40} className="text-green-700" />}
                    {service.id === 'jeep-safaris' && <GiJeep size={40} className="text-green-700" />}
                    {service.id === 'cultural-tours' && <FaUsers size={40} className="text-green-700" />}
                  </div>
            

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hidden long description for SEO */}
                  <p className="sr-only">
                    {service.longDescription}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors duration-200 font-medium"
              role="button"
            >
              Book Your Experience
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
