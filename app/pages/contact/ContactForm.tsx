import { useState, useRef } from "react";

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    ) as FormState;

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json() as { success: boolean; error?: string };
      if (json.success) {
        setSuccess(true);
        formRef.current?.reset();
      } else {
        setError(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send message. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-accent"
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
        </div>
        <h3 className="text-2xl font-display text-dark mb-3">
          Message Received
        </h3>
        <p className="text-muted text-base max-w-sm">
          Thank you for reaching out. Our team will be in touch with you
          shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-soft rounded-xl px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted/50";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wide">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wide">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wide">
            Organisation
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your organisation"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wide">
            Service of Interest
          </label>
          <select name="service" className={inputClass}>
            <option value="">Select a service</option>
            <option value="HealthTech Software Development">
              HealthTech Software Development
            </option>
            <option value="Medical Concierge Services">
              Medical Concierge Services
            </option>
            <option value="Hospital Management Services">
              Hospital Management Services
            </option>
            <option value="Medical Equipment Supply & Support">
              Medical Equipment Supply &amp; Support
            </option>
            <option value="Clinical & Non-Clinical Training">
              Clinical &amp; Non-Clinical Training
            </option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wide">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your organisation and how we can help..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-white font-medium py-4 rounded-full hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 text-sm mt-2 flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
