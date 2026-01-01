"use client";

export default function JoinCodeEPhobia() {
  return (
    <main className="min-h-screen px-4 py-24 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-purple-100 p-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-900">
          Join Code-E-Phobia
        </h1>

        <p className="text-slate-700 leading-relaxed">
          Code-E-Phobia is the programming and problem-solving club under
          Techtronica. We welcome beginners as well as experienced coders who
          want to improve their logic, coding skills, and confidence.
        </p>

        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>Weekly coding sessions & problem-solving meets</li>
          <li>Hackathons, contests, and challenges</li>
          <li>Mentorship from seniors and peers</li>
          <li>Interview & competitive programming prep</li>
        </ul>

        <div className="pt-4">
          {/* Replace this link with Google Form / internal form later */}
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-purple-950 bg-yellow-300 hover:bg-yellow-400 transition-colors shadow-md"
          >
            Apply to Join
          </a>
        </div>
      </div>
    </main>
  );
}
