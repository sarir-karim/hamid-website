import { Helmet } from "react-helmet-async";
import { FaLeaf, FaHeart, FaShieldAlt } from "react-icons/fa";

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mountain Soul Adventure",
    description:
      "A Pakistan-based adventure and travel company offering authentic mountain, cultural, and community-driven experiences",
    url: "https://mountainsouladventure.com",
    foundingDate: "2010",
    areaServed: "Pakistan",
  };

  return (
    <>
      <Helmet>
        <title>
          About Mountain Soul Adventure - Authentic Pakistan Adventures
        </title>
        <meta
          name="description"
          content="Learn about Mountain Soul Adventure - Pakistan's premier adventure company offering authentic mountain, cultural, and community-driven experiences."
        />
        <meta
          name="keywords"
          content="about us, adventure company, Pakistan travel, our story, mission"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* About Section */}
      <section
        className="py-16 bg-white"
        aria-label="About Mountain Soul Adventure"
      >
        <div className="max-w-6xl mx-auto px-6 pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <article>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                Mountain Soul Adventure
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Mountain Soul Adventure is a Pakistan-based adventure and travel
                company offering authentic mountain, cultural, and
                community-driven experiences across the country. We specialize
                in mountaineering, trekking, hunting expeditions, exchange
                programs, and volunteerism.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to connect people with the soul of Pakistan's
                landscapes and communities through responsible, safe, and
                meaningful travel.
              </p>
            </article>

            {/* Image */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                alt="Mountain Soul Adventure team on a trek"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
