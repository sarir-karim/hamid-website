import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useDestinations, DEFAULT_DESTINATIONS } from '../../hooks/useAPI'
import Top from '../../components/Top'

export default function DestinationPage() {
  const [regionFilter, setRegionFilter] = useState('All')
  const { data: apiDestinations, loading, error } = useDestinations()
  const destinations = apiDestinations || DEFAULT_DESTINATIONS

  const regions = ['All', ...Array.from(new Set(destinations.map((item) => item.region).filter(Boolean)))]
  const filteredDestinations = regionFilter === 'All'
    ? destinations
    : destinations.filter((item) => item.region === regionFilter)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredDestinations.map((destination, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: destination.name,
      description: destination.longDescription,
      image: destination.thumbnail,
      url: `/destinations/${destination.slug || destination.id}`
    }))
  }

  const heroImage = destinations[0]?.image || destinations[0]?.thumbnail || ''

  return (
    <>
      <Helmet>
        <title>Destinations – Mountain Soul Adventure</title>
        <meta
          name="description"
          content="Browse the destinations we offer across Pakistan and plan your next adventure in Gilgit-Baltistan, Kashmir, Chitral, Balochistan, and beyond."
        />
        <meta
          name="keywords"
          content="Pakistan destinations, adventure travel, Gilgit-Baltistan, Kashmir, Chitral, Balochistan, travel planning"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Top title="Our Destinations" />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Featured Destinations</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Travel-worthy regions with guided support</h2>
              <p className="mt-4 max-w-2xl text-gray-600">
                Choose from our carefully selected destinations, each designed for immersive adventure with local guides and sustainable experiences.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:mt-0">
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setRegionFilter(region)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${regionFilter === region ? 'bg-emerald-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">
              We had trouble loading destinations. Please refresh or try again later.
            </div>
          )}

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.slug || destination.id}`}
                className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.thumbnail}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-200">{destination.region}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{destination.name}</h3>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <p className="text-sm text-gray-600 line-clamp-3">{destination.description}</p>
                  <div className="flex items-center justify-between gap-4 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-2">📅 {destination.bestSeason}</span>
                    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Explore</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-sm text-gray-500">
            {loading && <span>Loading newest destinations...</span>}
            {!loading && !filteredDestinations.length && <span>No destinations match this region.</span>}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Ready to travel?</p>
          <h2 className="mt-3 text-3xl font-bold">Let us help you choose the perfect route</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Our local team builds every itinerary around the season, culture, and your adventure goals. Tell us where you want to go and we’ll take care of the rest.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Contact Our Team
            </Link>
            <Link
              to="/tours"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              See Adventure Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
