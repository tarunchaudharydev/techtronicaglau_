"use client";

import { useState } from "react";
import { Club } from "@/lib/config/clubs";

export default function ClubContact({ club }: { club: Club }) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // IMPORTANT: store form reference before await
    const form = e.currentTarget;

    setLoading(true);
    setSent(false);

    const formData = new FormData(form);

    try {
      await fetch("/api/club-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          topic: formData.get("topic"),
          message: formData.get("message"),
          clubName: club.name,
        }),
      });

      setSent(true);
      form.reset(); // ✅ SAFE
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-24 pt-28 px-4 bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-100">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Contact <span className="text-indigo-600">"{club.name}"</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600">
          Reach us at{" "}
          <span className="font-medium text-slate-800">
            {club.contact.instagram}
          </span>
        </p>
      </div>

      {/* Form Card */}
      <div className="relative max-w-3xl mx-auto">
        {/* glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur opacity-25"></div>

        <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900
                           focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900
                           focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            <input
              name="topic"
              placeholder="Topic (optional)"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900
                         focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder={`Write your message to ${club.name}`}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 resize-none
                         focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500"
            />

            {/* CTA BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-xl py-4 text-sm sm:text-base font-semibold text-white
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                hover:brightness-110 active:scale-[0.98]
                transition-all duration-200
                shadow-lg shadow-indigo-500/30
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-center text-sm font-medium text-emerald-600">
                Message sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
