import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useDestinations, DEFAULT_DESTINATIONS } from '../../hooks/useAPI'

export default function Destinations() {
  const { data: apiDestinations, loading, error } = useDestinations()
  const destinations = apiDestinations || DEFAULT_DESTINATIONS

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: destinations.map((destination, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: destination.name,
      description: destination.longDescription,
      image: destination.thumbnail,
      url: `#${destination.id}`
    }))
  }

  return (
    <>
      <Helmet>
        <title>Our Destinations - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Explore our featured destinations across Pakistan. From Gilgit-Baltistan to Balochistan, discover Pakistan's most stunning regions." 
        />
        <meta 
          name="keywords" 
          content="Pakistan destinations, Gilgit-Baltistan, Chitral, Kashmir, Balochistan, mountain destinations" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>



      <section className="py-16 bg-white" aria-label="Our Destinations">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the peaks of Gilgit-Baltistan to the valleys of Kashmir
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.slug || destination.id}`}
                id={destination.id}
                className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={destination.thumbnail}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {destination.description}
                  </p>
                  <p className="sr-only">
                    {destination.longDescription}
                  </p>
                  <p className="text-xs text-gray-300 flex items-center gap-2">
                    <span>📅</span>
                    Best Season: {destination.bestSeason}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-700 mb-6">
              Ready to explore your next adventure?
            </p>
            <Link
              to="/destinations"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors duration-200 font-medium"
              role="button"
            >
              View all Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
