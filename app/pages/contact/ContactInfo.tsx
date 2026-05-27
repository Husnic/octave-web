const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@octavesmartcare.co.uk",
    href: "mailto:hello@octavesmartcare.co.uk",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: "Website",
    value: "www.octavesmartcare.co.uk",
    href: "https://www.octavesmartcare.co.uk",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone (UK)",
    value: "+44 7990 464 460",
    href: "tel:+447990464460",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone (Nigeria)",
    value: "+234 906 767 1952",
    href: "tel:+2349067671952",
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">
          Contact Information
        </span>
        <h2 className="text-2xl lg:text-3xl font-display text-dark mb-4 leading-tight">
          Ready to Transform Your Healthcare Organisation?
        </h2>
        <p className="text-base text-muted leading-relaxed">
          Reach out to our team to discuss how Octave Smartcare can support
          your healthcare goals, whether operational, technological, or
          strategic.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-start gap-4 p-5 rounded-xl border border-gray-soft/60 hover:border-primary/30 hover:bg-surface transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-0.5">
                {item.label}
              </p>
              <p className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop"
          alt="Healthcare professionals"
          className="w-full h-52 object-cover"
        />
      </div>
    </div>
  );
}
