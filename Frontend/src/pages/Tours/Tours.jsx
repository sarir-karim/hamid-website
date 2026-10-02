import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { TOUR_DATA } from "./tourData";
import Top from "../../components/Top";

const TOUR_TYPE_ALIASES = {
  "Cultural & Heritage Tours": ["Cultural Tours"],
  "Customized Private Tours": ["Cultural Tours", "Trekking & Hiking", "Jeep Safaris"],
  "Corporate & Group Tours": ["Cultural Tours", "Jeep Safaris", "Mountaineering"],
  "Trekking": ["Trekking & Hiking"],
  "Expeditions": ["Mountaineering"],
};

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
  const location = useLocation();
  const selectedType = new URLSearchParams(location.search).get("type") || "";

  const pageTitleMap = {
    "Cultural Tours": "Cultural Tours",
    "Trekking & Hiking": "Trekking",
    Mountaineering: "Expeditions",
    "Customized Private Tours": "Customized Private Tours",
    "Corporate & Group Tours": "Corporate & Group Tours",
  };

  const pageTitle = pageTitleMap[selectedType] || "Our Tours";

  const filtered = TOUR_DATA.filter((tour) => {
    if (!selectedType) return true;

    const aliases = TOUR_TYPE_ALIASES[selectedType] || [selectedType];
    return aliases.includes(tour.type);
  });

  return (
    <>
      <Helmet>
        <title>{pageTitle} - Mountain Soul Adventure</title>
        <meta
          name="description"
          content={selectedType ? `Explore ${pageTitle.toLowerCase()} in Pakistan.` : "Explore our tours across Pakistan."}
        />
      </Helmet>
      <Top title={pageTitle} />
      <section className="py-12 bg-gray-50" aria-label="Tours">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-600 mt-8">
              No tours available in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
