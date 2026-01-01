"use client";

import { useState } from "react";

type ResearchFormData = {
  name: string;
  email: string;
  type: "research" | "patent";
  title: string;
  domain: string;
  description: string;
};

export default function ResearchAndPatentSection() {
  const [form, setForm] = useState<ResearchFormData>({
    name: "",
    email: "",
    type: "research",
    title: "",
    domain: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to your API / Google Sheet / email service
    console.log("Research / Patent form submitted:", form);
  };

  return (
    <section className="bg-gradient-to-br from-white via-sky-50 to-purple-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Research & Patent Cell
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Share your research ideas, potential patents, or ongoing projects so
            seniors and mentors can guide you on publications, IP protection,
            and funding opportunities.
          </p>
        </div>

        {/* Content grid: info + form */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr,1.4fr] items-start">
          {/* Left: info / highlights */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white/80 border border-slate-200 shadow-sm px-5 py-5 sm:px-6 sm:py-6">
              <h3 className="text-base sm:text-lg font-semibold text-purple-800 mb-3">
                What this cell does
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 text-sm sm:text-base text-slate-700">
                <li>Helps students refine research and innovation ideas.</li>
                <li>Guides on paper writing, conferences, and journals.</li>
                <li>
                  Supports patent search, novelty checks, and filing flow.
                </li>
                <li>
                  Connects you with mentors, faculty, and industry experts.
                </li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
              <div className="rounded-2xl bg-purple-50 border border-purple-100 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
                  For students
                </p>
                <p className="text-slate-700">
                  Have an idea, prototype, or project? Get feedback on whether
                  it can become a paper or a patent.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 border border-sky-100 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 mb-1">
                  For teams
                </p>
                <p className="text-slate-700">
                  Submit details of hackathon projects or final‑year work to
                  explore IP and publication opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl bg-white/95 backdrop-blur border border-slate-200 shadow-lg px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-5">
              Submit your research / patent idea
            </h3>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm sm:text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm sm:text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Type + Domain */}
              <div className="grid gap-4 sm:grid-cols-[1.1fr,1.3fr]">
                <div>
                  <label
                    htmlFor="type"
                    className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Submission type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm sm:text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="research">Research / paper</option>
                    <option value="patent">Patent / IP idea</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="domain"
                    className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Domain / area
                  </label>
                  <input
                    id="domain"
                    name="domain"
                    type="text"
                    value={form.domain}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm sm:text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="AI, DSA, IoT, Robotics, VLSI, etc."
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5"
                >
                  Project / idea title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm sm:text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Give a short title to your work"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5"
                >
                  Brief summary (problem, approach, novelty)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={form.description}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm sm:text-base text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Describe what you are working on, why it matters, and what might be new or innovative."
                  required
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                <p className="text-[11px] sm:text-xs text-slate-500 max-w-sm">
                  After you submit, the research cell team will review your idea
                  and contact you on email with next steps or suggestions.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-white"
                >
                  Submit idea
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
