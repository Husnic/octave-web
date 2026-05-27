import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="/assets/logo-light.png"
              alt="Octave Smartcare"
              className="h-9 w-auto mb-4"
            />
            <p className="text-gray-soft text-sm leading-relaxed mt-4 max-w-xs">
              Intelligent healthcare infrastructure for a smarter future.
              Bridging healthcare delivery and modern innovation.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-soft mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-soft hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-soft mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "HealthTech Software",
                "Medical Concierge",
                "Hospital Management",
                "Medical Equipment",
                "Clinical Training",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-soft hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-soft mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@octavesmartcare.co.uk"
                  className="text-sm text-gray-soft hover:text-white transition-colors"
                >
                  hello@octavesmartcare.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://www.octavesmartcare.co.uk"
                  className="text-sm text-gray-soft hover:text-white transition-colors"
                >
                  www.octavesmartcare.co.uk
                </a>
              </li>
              <li className="text-sm text-gray-soft">+44 7990 464 460</li>
              <li className="text-sm text-gray-soft">+234 906 767 1952</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-soft">
            © {new Date().getFullYear()} Octave Smartcare. All rights reserved.
          </p>
          <p className="text-sm text-gray-soft">
            Intelligent Healthcare Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
