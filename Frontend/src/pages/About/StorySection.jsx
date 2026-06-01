export default function StorySection({ story }) {
  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Our Story">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <article>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
              {story.title}
            </h2>
            {story.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </article>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src={story.image}
              alt="Mountain Soul Adventure story image"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
