export default function Partners() {
  const partnerLogos = [
    {
      name: 'P&G',
      src: 'https://via.placeholder.com/220x80/ffffff/047857?text=P%26G',
    },
    {
      name: 'LUMS',
      src: 'https://via.placeholder.com/220x80/ffffff/0f766e?text=LUMS',
    },
    {
      name: 'ECOlean',
      src: 'https://via.placeholder.com/220x80/ffffff/166534?text=ECOlean',
    },
    {
      name: 'Fatima Group',
      src: 'https://via.placeholder.com/220x80/ffffff/22543d?text=Fatima+Group',
    },
    {
      name: 'Beaconhouse',
      src: 'https://via.placeholder.com/220x80/ffffff/0f766e?text=Beaconhouse',
    },
    {
      name: 'Arandaaz',
      src: 'https://via.placeholder.com/220x80/ffffff/115e59?text=Arandaaz',
    },
    {
      name: 'Tunisia Bay Travel',
      src: 'https://via.placeholder.com/220x80/ffffff/064e3b?text=Tunisia+Bay',
    },
    {
      name: 'Scarsdale Intl School',
      src: 'https://via.placeholder.com/220x80/ffffff/134e4a?text=Scarsdale+Intl',
    },
    {
      name: 'Ascend',
      src: 'https://via.placeholder.com/220x80/ffffff/0d9488?text=Ascend',
    },
  ]

  return (
    <section className="py-16 bg-white" aria-labelledby="partners-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-green-700 font-semibold">
            Our Partners
          </p>
          <h2 id="partners-heading" className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Brands we work with
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Demo logos are shown below. Additional partner logos can be added through the admin panel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          {partnerLogos.map((logo) => (
            <div
              key={logo.name}
              className="w-full h-24 flex items-center justify-center rounded-3xl border border-emerald-100 bg-emerald-50/80 shadow-sm p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.4em] text-green-700 font-semibold mb-4">
            Proudly affiliated with
          </p>
          <div className="mx-auto flex max-w-xl items-center justify-center">
            <img
              src="https://via.placeholder.com/280x80/ffffff/0f766e?text=Aptly+Group+of+Companies"
              alt="Aptly Group of Companies"
              className="mx-auto h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
