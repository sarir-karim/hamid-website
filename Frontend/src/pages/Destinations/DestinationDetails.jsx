import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { useDestinations } from '../../hooks/useAPI'

export default function DestinationDetails() {
  const { destinationId } = useParams()
  const { data: allDestinations } = useDestinations()
  const destinations = allDestinations || []

  const destination = destinations.find(d => d.id === destinationId || d.slug === destinationId)

  if (!destination) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
        <p className="text-gray-600 mb-6">We couldn't find the requested destination.</p>
        <Link to="/destinations" className="text-green-700 font-medium">Back to destinations</Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{destination.name} - Mountain Soul Adventure</title>
        <meta name="description" content={destination.description || destination.longDescription} />
      </Helmet>

      {/* Hero */}
      <div className="w-full">
        <div className="w-full h-64 md:h-96 overflow-hidden relative">
          <img
            src={destination.image || destination.thumbnail}
            alt={destination.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold uppercase text-center leading-tight drop-shadow-md">
              {destination.name}
            </h1>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-4">{destination.description}</p>
            <div className="prose prose-lg text-gray-700">
              <p>{destination.longDescription}</p>
            </div>

            {/* Highlights */}
            {destination.highlights && destination.highlights.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {destination.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="bg-gray-50 p-4 rounded shadow-sm">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Region</h4>
              <p className="text-gray-700">{destination.region || '—'}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded shadow-sm">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Best Season</h4>
              <p className="text-gray-700">{destination.bestSeason || '—'}</p>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Plan a trip</h4>
              <Link to="/tours" className="block bg-green-700 text-white text-center px-4 py-2 rounded hover:bg-green-800">View Tours</Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
