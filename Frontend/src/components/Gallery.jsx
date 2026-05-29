import { Helmet } from 'react-helmet-async'
import { useGallery, DEFAULT_GALLERY } from '../hooks/useAPI'

export default function Gallery() {
  // Fetch gallery images from API or use default fallback data
  const { data: apiGallery } = useGallery()
  const galleryImages = apiGallery || DEFAULT_GALLERY

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Mountain Soul Adventure Gallery",
    description: "Moments captured from our adventures",
    image: galleryImages.map(img => ({
      "@type": "ImageObject",
      url: img.image,
      name: img.title,
      description: img.description
    }))
  }

  return (
    <>
      <Helmet>
        <title>Gallery - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="View our adventure gallery - stunning moments from mountain treks, cultural experiences, and team celebrations across Pakistan." 
        />
        <meta 
          name="keywords" 
          content="gallery, adventure photos, mountain photography, Pakistan trekking, travel moments" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="py-16 bg-white" aria-label="Gallery">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              Gallery
            </h2>
            <p className="text-lg text-blue-600">
              Moments captured from our adventures
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <article 
                key={image.id}
                className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={image.thumbnail} 
                    alt={image.alt || image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-70">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    {image.description}
                  </p>
                </div>

                {/* Hidden description for SEO */}
                <p className="sr-only">
                  {image.alt} - {image.description}
                </p>
              </article>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="text-center mt-16">
           
            <a
              href="#book"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors duration-200 font-medium"
              role="button"
            >
              See all photos →  
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
