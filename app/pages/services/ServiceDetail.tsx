interface ServiceDetailProps {
  id: string;
  number: string;
  title: string;
  intro: string;
  description: string;
  solutionsLabel: string;
  solutions: string[];
  taglineLabel: string;
  tagline: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function ServiceDetail({
  id,
  number,
  title,
  intro,
  description,
  solutionsLabel,
  solutions,
  taglineLabel,
  tagline,
  image,
  imageAlt,
  reversed = false,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className="py-20 lg:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
            reversed ? "lg:flex lg:flex-row-reverse" : ""
          }`}
        >
          <div>
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl font-display font-bold text-accent/30 leading-none tabular-nums select-none">
                {number}
              </span>
              <div>
                <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-1">
                  Service
                </span>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-display text-dark leading-tight">
                  {title}
                </h2>
              </div>
            </div>

            <p className="text-base text-muted leading-relaxed mb-4">{intro}</p>
            <p className="text-base text-muted leading-relaxed mb-8">{description}</p>

            <div className="bg-surface rounded-2xl p-8 border border-gray-soft/60">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
                {solutionsLabel}
              </h4>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-dark">
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pl-6 border-l-2 border-accent">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                {taglineLabel}
              </p>
              <p className="text-base text-dark leading-relaxed">{tagline}</p>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-32">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
