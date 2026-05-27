import { Link } from "react-router";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden gradient-dark dot-pattern">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-10 lg:px-16 py-16 lg:py-20">
            <div>
              <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                Interested in Octave Smartcare?
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display text-white leading-tight mb-4">
                The Future of Healthcare Starts Here
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Healthcare is evolving rapidly. Organisations require partners
                who understand both healthcare delivery and the technologies
                shaping its future. Octave Smartcare exists to help healthcare
                organisations modernise confidently, operate efficiently, and
                deliver better outcomes at scale.
              </p>
            </div>

            <div className="lg:text-right">
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Whether you are building a digital healthcare platform, improving
                hospital operations, sourcing medical infrastructure, or expanding
                healthcare access — we are ready to support your journey.
              </p>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-medium px-8 py-4 rounded-full hover:bg-accent hover:text-dark transition-colors duration-200 text-sm"
                >
                  Partner With Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-medium px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200 text-sm"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
