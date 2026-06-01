import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useGallery, DEFAULT_GALLERY } from "../../hooks/useAPI";
import bannerImg from "../../assets/hero.png";
import Top from "../../components/Top";

const categoryLabels = {
  all: "All Moments",
  trekking: "Trekking & Hiking",
  safari: "Jeep Safaris",
  culture: "Cultural Tours",
  camping: "Cultural Tours",
  people: "Cultural Tours",
};

export default function Gallery() {
  const { data: apiGallery } = useGallery(1, 12);
  const galleryItems = apiGallery || DEFAULT_GALLERY;
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(() => {
    const unique = new Set(
      galleryItems.map((item) => item.category || "other"),
    );
    return ["all", ...Array.from(unique)];
  }, [galleryItems]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  return (
    <>
      <Helmet>
        <title>Gallery - Mountain Soul Adventure</title>
        <meta
          name="description"
          content="A journey in pictures: explore Mountain Soul Adventure moments, treks, cultural tours, and landscapes."
        />
      </Helmet>

      <Top title="Gallery" />

      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-900 hover:text-slate-900"
                }`}
              >
                {categoryLabels[category] ||
                  category
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item, index) => (
              <article
                key={item.title + index}
                className={`group overflow-hidden rounded-[28px] shadow-xl border border-slate-200 bg-white ${
                  index % 3 === 0 ? "sm:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-200/80 mb-2">
                      {categoryLabels[item.category] || item.category}
                    </p>
                    <h2 className="text-xl font-semibold leading-tight">
                      {item.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-200/80">
                      <span>{item.description || "Adventure moment"}</span>
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
