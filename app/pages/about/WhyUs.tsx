import { Link } from "react-router";

const differentiators = [
  {
    title: "Healthcare Expertise",
    description:
      "We understand how healthcare organisations actually operate; the pressures, the constraints, and what good looks like on the ground.",
  },
  {
    title: "Practical Technology",
    description:
      "We build and deploy tools that work in real healthcare environments. Not overly complex, not underpowered.",
  },
  {
    title: "One Partner, Full Scope",
    description:
      "From strategy through to implementation and ongoing support. One team, one relationship, fewer gaps.",
  },
  {
    title: "Focus on Results",
    description:
      "We track what matters: operational performance, patient experience, and whether the work we did is still working.",
  },
  {
    title: "Global Reach",
    description:
      "We operate across the UK, Nigeria, and other markets. Experienced in both developed and emerging healthcare environments.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-surface dot-pattern-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Why Octave Smartcare
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-dark leading-tight mb-6">
              A partner who stays involved
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              We don't hand over a solution and disappear. We stay close, track
              what's working, and adjust until we get results that matter.
            </p>

            <div className="flex flex-col gap-6">
              {differentiators.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-display shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/health-partner.png"
              alt="Modern hospital infrastructure"
              className="rounded-2xl shadow-xl w-full h-96 lg:h-[560px] object-cover"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-full hover:bg-primary-dark transition-colors text-sm"
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
        </div>
      </div>
    </section>
  );
}
