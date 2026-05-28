import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="/images/hero.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-white leading-tight mb-6">
            Intelligent Healthcare Infrastructure for a{" "}
            <span className="text-gradient">Smarter Future</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            We work with hospitals, clinics, governments, and investors to make
            healthcare more effective through technology, better operations, and
            the right infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-full hover:bg-blue transition-colors duration-200 text-sm"
            >
              Our Services
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
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-medium px-8 py-4 rounded-full border border-white/40 hover:bg-white/10 transition-colors duration-200 text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
