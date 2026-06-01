export default function MissionVisionSection({ mission, vision }) {
  return (
    <section className="py-16 md:py-24 bg-gray-50" aria-label="Mission and Vision">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <article className="bg-white p-8 md:p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{mission}</p>
          </article>
          <article className="bg-white p-8 md:p-10 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="text-2xl">🔮</span>
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{vision}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
