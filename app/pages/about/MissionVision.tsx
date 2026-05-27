export default function MissionVision() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          <div>
            <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-dark leading-tight mb-6">
              Intelligent Healthcare Infrastructure for a Smarter Future
            </h2>
            <p className="text-base text-muted leading-relaxed mb-5">
              At Octave Smartcare, we combine healthcare expertise, digital
              innovation, and operational excellence to help healthcare
              organisations deliver safer, faster, and more connected care.
            </p>
            <p className="text-base text-muted leading-relaxed mb-5">
              We support hospitals, clinics, governments, healthcare investors,
              and enterprise healthcare providers with end-to-end healthcare
              transformation solutions across digital health, clinical
              operations, medical infrastructure, and workforce development.
            </p>
            <p className="text-base text-muted leading-relaxed">
              From healthcare technology deployment to hospital management and
              specialist medical concierge support, Octave Smartcare is built
              to bridge the gap between healthcare delivery and modern
              innovation.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop"
              alt="Healthcare professionals at work"
              className="rounded-2xl shadow-xl w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-dark/20 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10">
              <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                Our Mission
              </span>
              <p className="text-xl lg:text-2xl font-display leading-relaxed">
                To improve healthcare access, efficiency, and patient outcomes
                through intelligent healthcare solutions, operational
                excellence, and technology-driven innovation.
              </p>
            </div>
          </div>

          <div className="bg-surface border border-gray-soft/60 rounded-2xl p-10 relative overflow-hidden dot-pattern-dark">
            <div className="relative z-10">
              <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                Our Approach
              </span>
              <p className="text-xl lg:text-2xl font-display text-dark leading-relaxed">
                Delivering integrated, end-to-end healthcare solutions that are
                scalable, compliant, and built for real-world performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
