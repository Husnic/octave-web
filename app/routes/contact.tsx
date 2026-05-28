import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import ContactHero from "~/pages/contact/ContactHero";
import ContactForm from "~/pages/contact/ContactForm";
import ContactInfo from "~/pages/contact/ContactInfo";
import { useSEO } from "~/hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact Us",
    description:
      "Get in touch with Octave Smartcare. We work with hospitals, governments, and healthcare organisations across Lagos and London.",
    canonical: "/contact",
  });
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <ContactInfo />
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-soft/50">
                <div className="mb-8">
                  <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">
                    Send a Message
                  </span>
                  <h2 className="text-2xl font-display text-dark">
                    Tell Us How We Can Help
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
