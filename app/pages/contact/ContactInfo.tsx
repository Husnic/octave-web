import { Mail, Globe, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">
          Contact
        </span>
        <h2 className="text-2xl lg:text-3xl font-display text-dark mb-4 leading-tight">
          We'd love to hear from you
        </h2>
        <p className="text-base text-muted leading-relaxed">
          Tell us what you're working on and we'll come back to you quickly. No
          lengthy forms, no sales pressure.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:hello@octavesmartcare.co.uk"
          className="flex items-start gap-4 p-5 rounded-xl border border-gray-soft/60 hover:border-primary/30 hover:bg-surface transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-0.5">
              Email
            </p>
            <p className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
              hello@octavesmartcare.co.uk
            </p>
          </div>
        </a>

        <a
          href="https://www.octavesmartcare.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-5 rounded-xl border border-gray-soft/60 hover:border-primary/30 hover:bg-surface transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-0.5">
              Website
            </p>
            <p className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
              www.octavesmartcare.co.uk
            </p>
          </div>
        </a>

        <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-soft/60">
          <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-0.5">
                Lagos
              </p>
              <p className="text-sm text-dark leading-relaxed">
                14 Olatubosun Street, Shonibare Estate<br />
                Maryland, Ikeja, Lagos
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-0.5">
                London
              </p>
              <p className="text-sm text-dark leading-relaxed">
                128 City Road, London, EC1V 2NX
              </p>
            </div>
          </div>
        </div>
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
