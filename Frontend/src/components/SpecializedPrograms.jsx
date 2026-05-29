import { Helmet } from 'react-helmet-async'
import { usePrograms, DEFAULT_PROGRAMS } from '../hooks/useAPI'

export default function SpecializedPrograms() {
  // Fetch programs from API or use default fallback data
  const { data: apiPrograms } = usePrograms()
  const programs = apiPrograms || DEFAULT_PROGRAMS

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: programs.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: program.title,
      description: program.longDescription,
      url: `#${program.id}`
    }))
  }

  return (
    <>
      <Helmet>
        <title>Specialized Programs - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Explore our specialized programs: hunting expeditions, cultural exchange programs, and volunteer opportunities across Pakistan." 
        />
        <meta 
          name="keywords" 
          content="hunting expeditions, exchange programs, volunteer programs, Pakistan, specialized experiences" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="py-16 bg-white" aria-label="Specialized Programs">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              Specialized Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unique experiences beyond traditional adventure travel
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <article 
                key={program.id}
                id={program.id}
                className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center"
              >
                {/* Icon */}
                <div 
                  className="text-5xl mb-4 flex justify-center" 
                  aria-hidden="true"
                  role="img"
                >
                  {program.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Hidden long description for SEO */}
                <p className="sr-only">
                  {program.longDescription}
                </p>

                {/* Learn More Link */}
                <a
                  href={`#${program.id}`}
                  className="inline-block text-green-700 font-medium hover:text-green-900 transition-colors duration-200"
                  role="button"
                >
                  Learn More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
