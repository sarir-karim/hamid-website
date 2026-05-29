import { Helmet } from 'react-helmet-async'
import { FaShieldAlt, FaMapMarkerAlt, FaLeaf, FaUsers, FaHeart, FaCheckCircle } from 'react-icons/fa'

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 'safety',
      icon: '🛡️',
      title: 'Safety First',
      description: 'Professional guides and comprehensive safety protocols'
    },
    {
      id: 'expertise',
      icon: '📍',
      title: 'Local Expertise',
      description: 'Deep knowledge of terrain, culture, and communities'
    },
    {
      id: 'sustainability',
      icon: '🍃',
      title: 'Sustainable Tourism',
      description: 'Responsible travel that benefits local communities'
    },
    {
      id: 'small-groups',
      icon: '👥',
      title: 'Small Groups',
      description: 'Personalized experiences with limited group sizes'
    },
    {
      id: 'authentic',
      icon: '❤️',
      title: 'Authentic Immersion',
      description: 'Genuine cultural connections and local experiences'
    },
    {
      id: 'ethical',
      icon: '✓',
      title: 'Ethical Standards',
      description: 'Commitment to responsible and ethical practices'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mountain Soul Adventure",
    description: "Why choose Mountain Soul Adventure - our core values and commitment",
    areaServed: "Pakistan",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK"
    },
    knowsAbout: reasons.map(reason => reason.title)
  }

  return (
    <>
      <Helmet>
        <title>Why Choose Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Discover why Mountain Soul Adventure is the best choice for your Pakistan mountain adventure. Safety, expertise, sustainability, and authentic experiences." 
        />
        <meta 
          name="keywords" 
          content="why choose us, mountain adventure, safety, local expertise, sustainable tourism, ethical travel" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section 
        className="py-16 bg-green-900 text-white"
        aria-label="Why Choose Mountain Soul Adventure"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4 xl font-bold mb-3">
              Why Choose Mountain Soul Adventure
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Our commitment to excellence and authenticity
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <article 
                key={reason.id}
                className="text-center group"
              >
                {/* Icon */}
                <div className="flex justify-center text-4xl mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {reason.id === 'safety' && <FaShieldAlt />}
                  {reason.id === 'expertise' && <FaMapMarkerAlt />}
                  {reason.id === 'sustainability' && <FaLeaf />}
                  {reason.id === 'small-groups' && <FaUsers />}
                  {reason.id === 'authentic' && <FaHeart />}
                  {reason.id === 'ethical' && <FaCheckCircle />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-50 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-green-100 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-green-600 flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-green-100 text-sm">Successful Adventures</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <p className="text-green-100 text-sm">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-green-100 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
