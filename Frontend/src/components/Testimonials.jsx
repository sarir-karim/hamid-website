import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Sarah Mitchell',
      location: 'United Kingdom',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      quote: 'An unforgettable journey through Hunza. The team\'s knowledge and hospitality made every moment special. Truly authentic Pakistan.'
    },
    {
      id: 'testimonial-2',
      name: 'James Anderson',
      location: 'United States',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      quote: 'Professional, safe, and incredibly organized. The Fairy Meadows trek exceeded all expectations. Highly recommended!'
    },
    {
      id: 'testimonial-3',
      name: 'Emma Thompson',
      location: 'Australia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      quote: 'The cultural immersion was genuine and heartwarming. This team truly understands what makes Pakistan special.'
    },
    {
      id: 'testimonial-4',
      name: 'Marco Rossi',
      location: 'Italy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      quote: 'Amazing guides, breathtaking scenery, and unforgettable experiences. This is adventure done right!'
    },
    {
      id: 'testimonial-5',
      name: 'Lisa Chen',
      location: 'Canada',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      quote: 'Every detail was perfect. From safety to comfort to authentic experiences – Mountain Soul Adventure delivers excellence.'
    },
    {
      id: 'testimonial-6',
      name: 'Heinrich Mueller',
      location: 'Germany',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      quote: 'The best adventure company I\'ve traveled with. Professional, passionate, and deeply committed to their craft.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  // Detect screen size and set items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.ceil(testimonials.length / itemsPerSlide))
    }, 5000)
    return () => clearInterval(timer)
  }, [itemsPerSlide])

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + Math.ceil(testimonials.length / itemsPerSlide)) % Math.ceil(testimonials.length / itemsPerSlide))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % Math.ceil(testimonials.length / itemsPerSlide))
  }

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)
  const startIndex = currentIndex * itemsPerSlide
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerSlide)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "234"
    },
    reviewRating: testimonials.map(testimonial => ({
      "@type": "Rating",
      ratingValue: testimonial.rating,
      author: {
        "@type": "Person",
        name: testimonial.name
      }
    }))
  }

  const StarRating = ({ rating }) => (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" size={16} />
      ))}
    </div>
  )

  return (
    <>
      <Helmet>
        <title>Traveler Reviews - Mountain Soul Adventure</title>
        <meta 
          name="description" 
          content="Read real testimonials from travelers who've experienced Mountain Soul Adventure. Discover why adventurers choose us for their Pakistan journeys." 
        />
        <meta 
          name="keywords" 
          content="reviews, testimonials, traveler reviews, mountain adventure reviews, customer feedback" 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="py-16 bg-gray-50" aria-label="What Our Travelers Say">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from real adventurers
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className="min-w-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                      {testimonials.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((testimonial) => (
                        <article 
                          key={testimonial.id}
                          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                        >
                          {/* Star Rating */}
                          <div className="mb-4">
                            <StarRating rating={testimonial.rating} />
                          </div>

                          {/* Quote */}
                          <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Traveler Info */}
                          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                              <img 
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover"
                                loading="lazy"
                              />
                            </div>

                            {/* Name and Location */}
                            <div className="flex-grow">
                              <p className="font-semibold text-gray-900">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-green-700 text-white p-2 md:p-3 rounded-full hover:bg-green-800 transition-colors duration-200 z-10"
              aria-label="Previous testimonials"
              title="Previous"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-green-700 text-white p-2 md:p-3 rounded-full hover:bg-green-800 transition-colors duration-200 z-10"
              aria-label="Next testimonials"
              title="Next"
            >
              ❯
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-green-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Testimonials CTA */}
          <div className="text-center mt-16">
            <a
              href="#book"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors duration-200 font-medium"
              role="button"
            >
              Write Your Own Review
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-gray-200 flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">4.9/5</div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">234+</div>
              <p className="text-gray-600 text-sm">Verified Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">98%</div>
              <p className="text-gray-600 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
