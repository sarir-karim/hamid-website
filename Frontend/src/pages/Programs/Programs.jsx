import { Helmet } from "react-helmet-async";
import Top from "../../components/Top";

export default function HuntingTour() {
  return (
    <>
      <Helmet>
        <title>Hunting Tour - Mountain Soul Adventure</title>
        <meta
          name="description"
          content="Explore our hunting tour offerings in Pakistan, guided by licensed local experts."
        />
      </Helmet>

      <Top title="Hunting Tour" />
      
      <section className="py-16 bg-white" aria-label="Hunting Tour">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Hunting Tour</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Discover licensed hunting expeditions that blend adventure with responsible wildlife management and local expertise.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Legal Hunting Experiences</h3>
              <p className="text-gray-700 leading-relaxed">
                Our hunting tours are designed for responsible travelers who want a guided outdoor experience with full compliance to local wildlife regulations.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Local Guide Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Travel with experienced guides who know the terrain and wildlife rules, ensuring safe, ethical, and memorable expeditions.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
