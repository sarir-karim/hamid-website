import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const slides = [
  {
    title: 'Explore with Soul',
    subtitle:
      'Authentic mountain experiences across Pakistan\'s most breathtaking landscapes. Where mountains meet the soul.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=1000&fit=crop',
  },
  {
    title: 'Adventure Beyond the Ordinary',
    subtitle:
      'From glacier lakes to high passes, discover journeys crafted for explorers and storytellers.',
    image:
      'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=1600&h=1000&fit=crop',
  },
  {
    title: 'Travel with Local Guidance',
    subtitle:
      'Experience Pakistan through the eyes of expert guides who know every trail, valley, and tradition.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=1000&fit=crop',
  },
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const currentSlide = slides[activeSlide]

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

      <section className="relative w-full h-screen overflow-hidden" aria-label="Hero section with mountain imagery">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
              aria-hidden={index !== activeSlide}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" aria-hidden="true" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{currentSlide.title}</h1>
            <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
              {currentSlide.subtitle}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/tours"
                className="inline-block rounded bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
                role="button"
              >
                Explore Tours
              </Link>
              <Link
                to="/contact"
                className="inline-block rounded border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-800"
                role="button"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === activeSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
