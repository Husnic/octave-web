import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
            value={form.name}
            onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
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
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-dark mb-2 uppercase tracking-wide">
            Service of Interest
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service</option>
            <option value="healthtech">HealthTech Software Development</option>
            <option value="concierge">Medical Concierge Services</option>
            <option value="hospital-management">
              Hospital Management Services
            </option>
            <option value="equipment">
              Medical Equipment Supply & Support
            </option>
            <option value="training">Clinical & Non-Clinical Training</option>
            <option value="general">General Enquiry</option>
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
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white font-medium py-4 rounded-full hover:bg-primary-dark transition-colors duration-200 text-sm mt-2"
      >
        Send Message
      </button>
    </form>
  );
}
