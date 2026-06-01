import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TOUR_DATA } from "./tourData";
import Top from "../../components/Top";

function TourCard({ tour }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-44 md:h-52 bg-gray-100">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{tour.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {tour.destination} • {tour.type}
        </p>
        <div className="mt-3 text-sm text-gray-700">
          <div>
            <strong>Price:</strong> {tour.priceRange}
          </div>
          <div>
            <strong>Duration:</strong> {tour.duration}
          </div>
          <div>
            <strong>Difficulty:</strong> {tour.difficulty}
          </div>
        </div>
        <div className="mt-4">
          <Link
            to={`/tours/${tour.slug}`}
            className="block w-full text-center rounded bg-emerald-700 hover:bg-emerald-800 text-white py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Tours() {
  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState("All");
  const [type, setType] = useState("All");

  const destinations = useMemo(
    () => ["All", ...new Set(TOUR_DATA.map((t) => t.destination))],
    [],
  );
  const types = useMemo(
    () => ["All", ...new Set(TOUR_DATA.map((t) => t.type))],
    [],
  );

  const filtered = useMemo(() => {
    return TOUR_DATA.filter((t) => {
      const matchesQuery =
        query.trim() === "" ||
        t.title.toLowerCase().includes(query.toLowerCase());
      const matchesDestination =
        destination === "All" || t.destination === destination;
      const matchesType = type === "All" || t.type === type;
      return matchesQuery && matchesDestination && matchesType;
    });
  }, [query, destination, type]);

  return (
    <>
      <Helmet>
        <title>Tours - Mountain Soul Adventure</title>
        <meta name="description" content="Explore our tours across Pakistan." />
      </Helmet>
     <Top title="Our Tours"/>
      <section className="py-12 bg-gray-50" aria-label="Tours">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Search
                </label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search tours"
                  className="mt-1 block w-full border border-gray-200 rounded p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="mt-1 block w-full border border-gray-200 rounded p-2 bg-white"
                >
                  {destinations.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tour Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 block w-full border border-gray-200 rounded p-2 bg-white"
                >
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-right md:text-left">
                <button
                  onClick={() => {
                    setQuery("");
                    setDestination("All");
                    setType("All");
                  }}
                  className="mt-1 inline-flex items-center px-4 py-2 border border-gray-300 rounded text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-600 mt-8">
              No tours match your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
