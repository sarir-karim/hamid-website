export default function StorySection({ story }) {
  return (
    <section className="bg-white py-14 md:py-20" aria-label="Our Story">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <article>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
            The Journey So Far
          </p>
          <h2 className="mb-6 text-3xl font-bold text-green-800 md:text-4xl">
            {story.title}
          </h2>
          {story.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-base leading-7 text-gray-700 md:text-lg">
              {paragraph}
            </p>
          ))}
        </article>
        <img
          src={story.image}
          alt="Mountain landscape from the regions where Mountain Soul Adventure operates"
          className="aspect-[4/3] w-full rounded-sm object-cover shadow-md lg:aspect-[5/4]"
          loading="lazy"
        />
      </div>
    </section>
  )
}
