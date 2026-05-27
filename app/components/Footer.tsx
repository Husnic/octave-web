import { Link } from "react-router";
import { Mail } from "lucide-react";

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
              Healthcare technology, operations, and infrastructure under one
              roof.
            </p>
            <a
              href="mailto:hello@octavesmartcare.co.uk"
              className="inline-flex items-center gap-2 mt-5 text-sm text-gray-soft hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              hello@octavesmartcare.co.uk
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-soft mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
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
              Offices
            </h4>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                  Lagos
                </p>
                <p className="text-sm text-gray-soft leading-relaxed">
                  14 Olatubosun Street
                  <br />
                  Shonibare Estate, Maryland
                  <br />
                  Ikeja, Lagos
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                  London
                </p>
                <p className="text-sm text-gray-soft leading-relaxed">
                  128 City Road
                  <br />
                  London, EC1V 2NX
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-soft">
            © {new Date().getFullYear()} Octave Smartcare. All rights reserved.
          </p>
          <p className="text-sm text-gray-soft">www.octavesmartcare.co.uk</p>
        </div>
      </div>
    </footer>
  );
}
