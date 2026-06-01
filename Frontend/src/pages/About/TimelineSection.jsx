export default function TimelineSection({ timeline }) {
  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Company Timeline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of milestones and achievements in our mission to transform adventure travel.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-700 hidden md:block"></div>
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={item.id} className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <article className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-green-700 mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </article>
                </div>
                <div className="w-full md:w-auto flex justify-center md:justify-center">
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
