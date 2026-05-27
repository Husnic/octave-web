const industries = [
  { label: "Hospitals & Healthcare Groups", icon: "🏥" },
  { label: "Primary Care Networks", icon: "🩺" },
  { label: "Governments & Public Health Agencies", icon: "🏛️" },
  { label: "Corporate Healthcare Providers", icon: "🏢" },
  { label: "NGOs & Development Organisations", icon: "🌍" },
  { label: "Diagnostic & Imaging Centres", icon: "🔬" },
  { label: "Healthcare Investors & PPP Projects", icon: "📊" },
  { label: "Insurance & Managed Care", icon: "📋" },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark dot-pattern relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          style={{
            backgroundImage: "url('/assets/pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Industries We Support
          </span>
          <h2 className="text-3xl lg:text-4xl font-display text-white leading-tight">
            Built for the Entire Healthcare Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-200 group"
            >
              <span className="text-2xl mb-3 block">{industry.icon}</span>
              <p className="text-sm text-white/80 font-medium leading-snug group-hover:text-white transition-colors">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
