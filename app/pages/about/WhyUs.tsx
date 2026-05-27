import { Link } from "react-router";

const differentiators = [
  {
    title: "Healthcare Expertise",
    description:
      "Deep understanding of healthcare operations, digital transformation, and patient-centred service delivery.",
  },
  {
    title: "Technology-Driven Solutions",
    description:
      "Modern, scalable, and secure healthcare technologies tailored for real-world healthcare environments.",
  },
  {
    title: "End-to-End Service Delivery",
    description:
      "From strategy and procurement to implementation and support, we provide integrated healthcare solutions under one trusted partner.",
  },
  {
    title: "Operational Excellence",
    description:
      "We focus on measurable improvements in efficiency, patient outcomes, workforce performance, and system sustainability.",
  },
  {
    title: "Global Outlook",
    description:
      "Built to support healthcare systems, institutions, and organisations across emerging and developed markets.",
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
              A Partner Built for Healthcare
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              We don't just provide services — we become an extension of your
              organisation, committed to delivering sustainable outcomes that
              make a real difference in healthcare delivery.
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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop"
              alt="Modern hospital infrastructure"
              className="rounded-2xl shadow-xl w-full h-96 lg:h-[560px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-dark text-white rounded-2xl p-6 shadow-xl hidden lg:block">
              <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
                Serving
              </p>
              <p className="text-xl font-display">8+ Industries</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-full hover:bg-primary-dark transition-colors text-sm"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
