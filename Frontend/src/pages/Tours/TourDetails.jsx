import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getTourBySlug, getRelatedTours } from './tourData'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wide px-3 py-1">
      {children}
    </span>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < rating ? '★' : '☆'}</span>
      ))}
    </div>
  )
}

function RelatedTours({ tours }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Related Tours</h2>
      {tours.map((tour) => (
        <Link key={tour.slug} to={`/tours/${tour.slug}`} className="block rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white">
          <div className="h-24 overflow-hidden">
            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-3">
            <p className="font-semibold text-gray-900">{tour.title}</p>
            <p className="text-sm text-gray-600">{tour.destination}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function TourDetails() {
  const { tourSlug } = useParams()
  const navigate = useNavigate()
  const tour = useMemo(() => getTourBySlug(tourSlug), [tourSlug])
  const relatedTours = useMemo(() => (tour ? getRelatedTours(tour) : []), [tour])

  if (!tour) {
    return (
      <div className="py-20 px-6 text-center">
        <p className="text-xl text-gray-700">Tour not found.</p>
        <button onClick={() => navigate('/tours')} className="mt-6 inline-flex items-center rounded bg-emerald-700 px-5 py-3 text-white hover:bg-emerald-800">
          Back to Tours
        </button>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{tour.title} - Mountain Soul Adventure</title>
        <meta name="description" content={tour.description} />
      </Helmet>

      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-emerald-700">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/tours" className="hover:text-emerald-700">Our Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{tour.title}</span>
          </nav>

          <div className="grid gap-8 xl:grid-cols-[1.5fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-sm bg-white">
                <img src={tour.heroImage} alt={tour.title} className="w-full h-96 object-cover" />
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h1 className="text-4xl font-bold text-gray-900">{tour.title}</h1>
                <p className="mt-4 text-gray-600 max-w-3xl">{tour.description}</p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm uppercase text-gray-500">Price Range</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{tour.priceRange}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm uppercase text-gray-500">Duration</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{tour.duration}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm uppercase text-gray-500">Difficulty</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{tour.difficulty}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm uppercase text-gray-500">Max Altitude</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{tour.maxAltitude}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-5">Tour Highlights</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {tour.highlights.map((item) => (
                    <div key={item} className="rounded-3xl bg-gray-50 p-4 text-center">
                      <p className="font-semibold text-gray-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <h2 className="text-2xl font-semibold text-gray-900">Detailed Itinerary</h2>
                  <Badge>{tour.type}</Badge>
                </div>
                <div className="space-y-4">
                  {tour.itinerary.map((step) => (
                    <div key={step.day} className="flex flex-col gap-4 rounded-3xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-emerald-700">{step.day}</p>
                        <p className="mt-2 text-lg font-semibold text-gray-900">{step.title}</p>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Inclusions & Exclusions</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm uppercase text-gray-500 mb-3">Inclusions</h3>
                      <ul className="space-y-2 text-gray-700">
                        {tour.inclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase text-gray-500 mb-3">Exclusions</h3>
                      <ul className="space-y-2 text-gray-700">
                        {tour.exclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Required Gear</h2>
                  <ul className="space-y-3 text-gray-700">
                    {tour.requiredGear.map((item) => (
                      <li key={item} className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-emerald-800 p-6 text-white shadow-sm">
                <h2 className="text-2xl font-semibold">Booking Inquiry</h2>
                <p className="mt-3 text-sm text-emerald-100">Send us your details and we’ll help you plan the perfect trip.</p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <input type="text" placeholder="Enter your name" className="mt-2 w-full rounded-xl border border-emerald-600 bg-emerald-900/10 px-4 py-3 text-gray-900" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <input type="tel" placeholder="Enter phone" className="mt-2 w-full rounded-xl border border-emerald-600 bg-emerald-900/10 px-4 py-3 text-gray-900" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" placeholder="Enter email" className="mt-2 w-full rounded-xl border border-emerald-600 bg-emerald-900/10 px-4 py-3 text-gray-900" />
                  </div>
                  <button type="submit" className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">Submit Inquiry</button>
                </form>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <RelatedTours tours={relatedTours} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
