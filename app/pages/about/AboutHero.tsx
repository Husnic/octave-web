export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-dark dot-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-5">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
            Bridging Healthcare Delivery and Modern Innovation
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
            At Octave Smartcare, we are dedicated to transforming healthcare
            systems through a combination of clinical expertise, operational
            excellence, and cutting-edge technology.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
