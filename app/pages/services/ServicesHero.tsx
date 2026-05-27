export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-5">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
            What We Do
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
            Five service areas technology, operations, equipment, concierge
            care, and training. Use one or combine them based on what your
            organisation needs.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {[
            { label: "HealthTech Software", anchor: "#healthtech" },
            { label: "Medical Concierge", anchor: "#concierge" },
            { label: "Hospital Management", anchor: "#hospital-management" },
            { label: "Medical Equipment", anchor: "#equipment" },
            { label: "Clinical Training", anchor: "#training" },
          ].map((item) => (
            <a
              key={item.anchor}
              href={item.anchor}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
