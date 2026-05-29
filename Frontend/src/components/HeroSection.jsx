import { Helmet } from 'react-helmet-async'

export default function HeroSection() {
  return (
    <>
      <Helmet>
        <title>Mountain Soul Adventure - Explore with Soul</title>
        <meta name="description" content="Authentic mountain experiences across Pakistan's most breathtaking landscapes. Where mountains meet the soul." />
        <meta name="keywords" content="mountain tours, Pakistan adventure, hiking, trekking, mountain experiences" />
        <meta property="og:title" content="Mountain Soul Adventure - Explore with Soul" />
        <meta property="og:description" content="Authentic mountain experiences across Pakistan's most breathtaking landscapes" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')`,
        }}
        aria-label="Hero section with mountain imagery"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">Explore with Soul</h1>
          <p className="text-md md:text-xl mb-10 leading-relaxed">
            Authentic mountain experiences across Pakistan's most breathtaking landscapes. Where mountains meet the soul.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tours"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded font-semibold transition inline-block"
              role="button"
            >
              Explore Tours
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded font-semibold transition inline-block"
              role="button"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
