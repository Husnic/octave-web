import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden gradient-dark dot-pattern"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/assets/pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
          {Array.from({ length: 20 }).map((_, row) =>
            Array.from({ length: 20 }).map((_, col) => {
              const x = col * 30 + 15;
              const y = row * 30 + 15;
              const cx = 300;
              const cy = 300;
              const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
              const maxDist = 280;
              if (dist > maxDist) return null;
              const opacity = 1 - dist / maxDist;
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  r={2}
                  fill="white"
                  opacity={opacity}
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-6">
            Healthcare Innovation
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-white leading-tight mb-6">
            Intelligent Healthcare Infrastructure for a{" "}
            <span className="text-gradient">Smarter Future</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
            We combine healthcare expertise, digital innovation, and operational
            excellence to help healthcare organisations deliver safer, faster,
            and more connected care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-full hover:bg-blue transition-colors duration-200 text-sm"
            >
              Explore Our Solutions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-medium px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200 text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
