import Contact from './Contact'
import bannerImg from '../../assets/hero.png'
import Top from '../../components/Top'

export default function ContactPage() {
  return (
    <>
     <Top title="Contact Us" />

      <Contact />

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group rounded-2xl border border-gray-200 p-5 bg-white">
                  <summary className="flex items-center justify-between cursor-pointer text-gray-900 font-semibold">
                    What are your cancellation policies?
                    <span className="text-xl transition-transform duration-200 group-open:-rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    We offer flexible cancellation policies depending on the tour package. Please contact us for exact details before booking.
                  </p>
                </details>
                <details className="group rounded-2xl border border-gray-200 p-5 bg-white">
                  <summary className="flex items-center justify-between cursor-pointer text-gray-900 font-semibold">
                    How do you handle altitude sickness preventatively?
                    <span className="text-xl transition-transform duration-200 group-open:-rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Our guides adjust pacing and itinerary to help you acclimatize safely. We also provide expert advice and support throughout the journey.
                  </p>
                </details>
                <details className="group rounded-2xl border border-gray-200 p-5 bg-white">
                  <summary className="flex items-center justify-between cursor-pointer text-gray-900 font-semibold">
                    Are visas easy to arrange?
                    <span className="text-xl transition-transform duration-200 group-open:-rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    We help with visa guidance and documentation support for travelers visiting Pakistan. Reach out early so we can assist on time.
                  </p>
                </details>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
              <p className="text-sm leading-relaxed text-slate-300 mb-6">
                We typically respond within 24 hours. For urgent inquiries, please contact us via WhatsApp.
              </p>
              <a
                href="https://wa.me/92XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-gray-200 shadow-xl h-[420px]">
            <iframe
              title="Mountain Soul Adventure location"
              src="https://maps.google.com/maps?q=Gilgit%20Baltistan%20Pakistan&t=k&z=8&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
