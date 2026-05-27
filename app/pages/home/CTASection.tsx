import { Link } from "react-router";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden gradient-dark">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-10 lg:px-16 py-16 lg:py-20">
            <div>
              <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                Work With Us
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display text-white leading-tight mb-4">
                Let's build something that works
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Healthcare is changing quickly. Organisations that get the
                foundations right now technology, operations, people are the
                ones best placed to deliver better care tomorrow.
              </p>
            </div>

            <div className="lg:text-right">
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Whether you're building a digital platform, improving how a
                hospital runs, sourcing equipment, or training your team we're
                ready to help.
              </p>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-medium px-8 py-4 rounded-full hover:bg-accent hover:text-dark transition-colors duration-200 text-sm"
                >
                  Get in Touch
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
