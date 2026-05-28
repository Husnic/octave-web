export default function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/new-tower.jpeg"
                alt="Healthcare professionals collaborating"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl hidden lg:block">
              <p className="text-3xl font-display font-bold">5+</p>
              <p className="text-sm text-white/80 mt-1">Service Lines</p>
            </div>
          </div>

          <div>
            <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display text-dark leading-tight mb-6">
              Better healthcare, built on the right foundations
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              To improve healthcare access, efficiency, and patient outcomes
              through practical solutions, good operations, and the right
              technology for each context.
            </p>
            <p className="text-base text-muted leading-relaxed mb-8">
              We work with hospitals, clinics, governments, and healthcare
              investors across digital health, clinical operations, medical
              infrastructure, and workforce development.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
            >
              Learn About Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
