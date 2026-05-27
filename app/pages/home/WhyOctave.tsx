import { ShieldCheck, Monitor, Layers, Zap, Globe } from "lucide-react";

const reasons = [
  {
    Icon: ShieldCheck,
    title: "Healthcare Expertise",
    description:
      "We've worked across diverse healthcare settings and understand the real pressures facing providers, managers, and patients.",
  },
  {
    Icon: Monitor,
    title: "Practical Technology",
    description:
      "Our software and digital tools are built for how healthcare actually works  secure, straightforward, and easy to adopt.",
  },
  {
    Icon: Layers,
    title: "One Partner, Full Scope",
    description:
      "Strategy, procurement, implementation, ongoing support  we manage the full journey so you're not juggling multiple vendors.",
  },
  {
    Icon: Zap,
    title: "Focus on Results",
    description:
      "We measure success by actual outcomes: faster operations, better patient experience, and systems that hold up over time.",
  },
  {
    Icon: Globe,
    title: "Global Reach",
    description:
      "We work with clients in the UK, Nigeria, and across other markets  in both established and developing healthcare environments.",
  },
];

export default function WhyOctave() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Why Octave Smartcare
          </span>
          <h2 className="text-3xl lg:text-4xl font-display text-dark leading-tight">
            Why Work With Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl border border-gray-soft/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group ${
                i === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <reason.Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-display font-medium text-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
