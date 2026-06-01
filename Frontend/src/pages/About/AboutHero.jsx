export default function AboutHero() {
  return (
    <section
      className="relative h-72 md:h-[200px] bg-cover bg-center flex items-center justify-center  "
      aria-label="About page hero section"
    >
      <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {" "}
          About Us
        </h1>
        <p className="text-xl md:text-2xl font-light">
          
        </p>
      </div>
    </section>
  );
}
