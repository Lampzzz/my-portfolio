"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-9 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div className="space-y-8 lg:col-span-4">
            <div>
              <span className="badge mb-4">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
            Let's Work Together
          </h2>
              <p className="mt-6 text-[var(--color-text-muted)] leading-relaxed max-w-md">
                Have a project in mind? I'd love to hear about it. Fill out the
                form and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-alt)] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-subtle)] mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-alt)] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-subtle)] mb-1">
                    Location
                  </div>
                  <span className="text-[var(--color-text)]">
                    Your City, Country
                  </span>
                </div>
              </div>

            </div>

            {/* Testimonial Highlight */}
            <div className="p-6 bg-[var(--color-bg-alt)] rounded-2xl">
              <blockquote className="text-[var(--color-text-muted)] italic">
                "A skilled frontend developer who writes clean code and
                communicates effectively. Highly recommended!"
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&q=80"
                  alt="David Park"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">David Park</div>
                  <div className="text-xs text-[var(--color-text-subtle)]">
                    CEO, InnovateTech
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Share the details of your project, goals, and timeline..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full">
                Send Message
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

