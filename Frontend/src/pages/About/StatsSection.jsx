export default function StatsSection({ stats }) {
  return (
    <section className="py-16 md:py-24 bg-green-800 text-white" aria-label="Company Statistics">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <article key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3">{stat.value}</div>
              <p className="text-lg font-medium mb-2">{stat.label}</p>
              {stat.label2 && <p className="text-sm opacity-90">{stat.label2}</p>}
              <div className="text-3xl mt-4 opacity-60">{stat.icon}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
