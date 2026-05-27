import nodemailer from "nodemailer";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import ContactHero from "~/pages/contact/ContactHero";
import ContactForm from "~/pages/contact/ContactForm";
import ContactInfo from "~/pages/contact/ContactInfo";
import type { Route } from "./+types/contact";

export function meta() {
  return [
    { title: "Contact — Octave Smartcare" },
    {
      name: "description",
      content:
        "Get in touch with Octave Smartcare to discuss how we can support your healthcare transformation journey.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "hello@octavesmartcare.co.uk",
      to: process.env.CONTACT_EMAIL || "hello@octavesmartcare.co.uk",
      subject: `Octave Smartcare — New Contact: ${service || "General Enquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Organisation:</strong> ${company}</p>` : ""}
        ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ""}
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: "Failed to send message. Please try again or email us directly." };
  }
}

export default function Contact() {
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
