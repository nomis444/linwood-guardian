"use client";

import { useState } from "react";
import { COVERAGE_TYPES } from "@/lib/constants";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-sky rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
          Thank You
        </h3>
        <p className="text-text-secondary">
          We&apos;ve received your inquiry and will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-navy mb-1.5">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            name="business"
            className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition"
            placeholder="Your company"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition"
            placeholder="(716) 555-0100"
          />
        </div>
      </div>
      <div>
        <label htmlFor="coverage" className="block text-sm font-medium text-navy mb-1.5">
          Coverage Type <span className="text-red-500">*</span>
        </label>
        <select
          id="coverage"
          name="coverage"
          required
          className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            Select coverage type
          </option>
          {COVERAGE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition resize-none"
          placeholder="Tell us about your business and coverage needs..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request a Quote"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please call us at (716) 710-8910.
        </p>
      )}
    </form>
  );
}
