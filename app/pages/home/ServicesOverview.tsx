import { Link } from "react-router";

const services = [
  {
    number: "01",
    title: "HealthTech Software Development",
    description:
      "Scalable telehealth platforms, EMR/EHR systems, hospital management software, patient portals, and AI-enabled healthcare workflows tailored for modern healthcare systems.",
    link: "/services#healthtech",
  },
  {
    number: "02",
    title: "Medical Concierge Services",
    description:
      "Premium, personalised healthcare coordination for individuals, executives, corporates, and international patients — from specialist referrals to medical travel.",
    link: "/services#concierge",
  },
  {
    number: "03",
    title: "Hospital Management Services",
    description:
      "Operational, strategic, and administrative management solutions that improve service delivery, governance, and sustainability across public and private healthcare systems.",
    link: "/services#hospital-management",
  },
  {
    number: "04",
    title: "Medical Equipment Supply & Technical Support",
    description:
      "End-to-end procurement, installation, and maintenance of high-quality medical and diagnostic equipment from globally recognised manufacturers.",
    link: "/services#equipment",
  },
  {
    number: "05",
    title: "Clinical & Non-Clinical Training",
    description:
      "Workforce development programmes for healthcare professionals, administrators, and operational teams to build capacity and improve standards.",
    link: "/services#training",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-surface dot-pattern-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display text-dark leading-tight mb-6">
              We're delivering this through:
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              From healthcare technology deployment to hospital management and
              specialist medical concierge support, Octave Smartcare bridges the
              gap between healthcare delivery and modern innovation.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition-colors text-sm"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-soft/50">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="py-8 group"
                >
                  <div className="flex gap-6">
                    <span className="text-4xl font-display font-bold text-accent/40 group-hover:text-accent transition-colors duration-300 select-none tabular-nums leading-none mt-1">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-display font-medium text-dark mb-2 group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm lg:text-base text-muted leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:text-primary-dark transition-colors"
                      >
                        Learn more
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
