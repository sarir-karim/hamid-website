export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-green-700 text-white text-center" aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Authentic Adventure?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join us on a journey that transforms both you and the communities we serve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/destinations"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors duration-200"
            role="button"
          >
            Explore Destinations
          </a>
          <a
            href="/contact"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-green-700 transition-colors duration-200"
            role="button"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
