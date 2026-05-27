export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 gradient-dark dot-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-5">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
            Partner With Octave Smartcare
          </h1>
          <p className="text-lg text-white/75 leading-relaxed">
            Whether you are building a digital healthcare platform, improving
            hospital operations, sourcing medical infrastructure, or expanding
            healthcare access — we are ready to support your journey.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
