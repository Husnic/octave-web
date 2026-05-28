import {
  Building2,
  Stethoscope,
  Landmark,
  BriefcaseMedical,
  Globe,
  ScanLine,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const industries = [
  { label: "Hospitals & Healthcare Groups", Icon: Building2 },
  { label: "Primary Care Networks", Icon: Stethoscope },
  { label: "Governments & Public Health Agencies", Icon: Landmark },
  { label: "Corporate Healthcare Providers", Icon: BriefcaseMedical },
  { label: "NGOs & Development Organisations", Icon: Globe },
  { label: "Diagnostic & Imaging Centres", Icon: ScanLine },
  { label: "Healthcare Investors & PPP Projects", Icon: TrendingUp },
  { label: "Insurance & Managed Care", Icon: ShieldCheck },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/assets/pattern.png')",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Industries We Support
          </span>
          <h2 className="text-3xl lg:text-4xl font-display text-white leading-tight">
            Who We Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ label, Icon }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-200 group"
            >
              <Icon
                className="w-6 h-6 text-accent/60 group-hover:text-accent mb-3 transition-colors"
                strokeWidth={1.5}
              />
              <p className="text-sm text-white/80 font-medium leading-snug group-hover:text-white transition-colors">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
