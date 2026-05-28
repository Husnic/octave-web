import { Link } from "react-router";

const services = [
  {
    number: "01",
    title: "HealthTech Software Development",
    description:
      "Scalable telehealth platforms, EMR/EHR systems, hospital management software, patient portals, and AI-enabled healthcare workflows tailored for modern healthcare systems.",
    link: "/services#healthtech",
    image: "/images/software-development.jpeg",
  },
  {
    number: "02",
    title: "Medical Concierge Services",
    description:
      "Premium, personalised healthcare coordination for individuals, executives, corporates, and international patients, from specialist referrals to medical travel.",
    link: "/services#concierge",
    image: "/images/concierge.jpeg",
  },
  {
    number: "03",
    title: "Hospital Management Services",
    description:
      "Operational, strategic, and administrative management solutions that improve service delivery, governance, and sustainability across public and private healthcare systems.",
    link: "/services#hospital-management",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80&fit=crop",
  },
  {
    number: "04",
    title: "Medical Equipment Supply & Technical Support",
    description:
      "End-to-end procurement, installation, and maintenance of high-quality medical and diagnostic equipment from globally recognised manufacturers.",
    link: "/services#equipment",
    image: "/images/equipments.jpeg",
  },
  {
    number: "05",
    title: "Training and Capacity Development",
    description:
      "Workforce development programmes for healthcare professionals, administrators, and operational teams to build capacity and improve standards.",
    link: "/services#training",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop",
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

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-5">
              {services.map((service) => (
                <Link
                  key={service.number}
                  to={service.link}
                  className="group relative rounded-2xl overflow-hidden flex flex-col sm:flex-row h-auto sm:h-44 bg-dark hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="absolute inset-0 sm:relative sm:inset-auto sm:w-48 sm:shrink-0 h-44 sm:h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-dark/40" />
                  </div>

                  <div className="relative z-10 flex flex-col justify-center px-6 py-5 sm:py-0 flex-1 bg-dark/80 sm:bg-dark/0 backdrop-blur-[2px] sm:backdrop-blur-0">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-display font-bold text-accent/30 group-hover:text-accent/60 transition-colors duration-300 select-none tabular-nums leading-none shrink-0 mt-0.5">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="text-base lg:text-lg font-display font-medium text-white mb-1.5 group-hover:text-accent transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-white/60 leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-accent text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Learn more
                          <svg
                            className="w-3 h-3"
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
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
