import { Helmet } from 'react-helmet-async'
import { Link, Links } from 'react-router-dom'
import { useFeaturedTours, DEFAULT_FEATURED_TOURS } from '../../hooks/useAPI'

export default function FeaturedTours() {
  // Fetch featured tours from API or use default fallback data
  const { data: apiTours } = useFeaturedTours()
  const tours = apiTours || DEFAULT_FEATURED_TOURS

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tour.title,
      description: tour.longDescription,
      image: tour.thumbnail,
      url: `/tours/${tour.slug}`
    }))
  }

  return (
    <>
      <Helmet>
        <title>Featured Tours - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Discover our handpicked featured tours across Pakistan's most stunning regions. Explore Hunza Valley, Fairy Meadows, Skardu and more." 
        />
        <meta 
          name="keywords" 
          content="featured tours, Hunza Valley, Fairy Meadows, Skardu, Pakistan adventures, trekking tours" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="py-16 bg-gray-50" aria-label="Featured Tours">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              Featured Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked adventures across Pakistan's most stunning regions
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <article 
                key={tour.id}
                id={tour.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Tour Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.thumbnail} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Tour Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tour.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {tour.description}
                  </p>

                  {/* Hidden long description for SEO */}
                  <p className="sr-only">
                    {tour.longDescription}
                  </p>

                  {/* Duration */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600 text-sm font-medium">
                      {tour.duration.days} Days
                    </span>
                    <Link
                      to={`/tours/${tour.slug}`}
                      className="text-green-700 font-medium hover:text-green-900 transition-colors duration-200 flex items-center gap-1"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
              
            <Link
              to="/tours"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors duration-200 font-medium"
              role="button"
            >
              Browse All Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
