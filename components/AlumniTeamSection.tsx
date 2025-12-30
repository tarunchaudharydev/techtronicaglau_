"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { alumni, Alumni } from "@/lib/data/alumni";

export default function AlumniTeamSection() {
  const [selected, setSelected] = useState<Alumni | null>(null);

  return (
    <section className=" bg-linear-to-br from-white via-sky-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-sky-600 mb-2">
            Techtronica • Alumni
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Our Alumni
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Alumni who shaped Techtronica and are now making an impact in the
            industry.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {alumni.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelected(a)}
              className="group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
            >
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="font-semibold text-slate-900">{a.name}</h3>

              <p className="text-indigo-600 text-xs mt-1">
                {a.roleInSociety} • {a.session}
              </p>

              <p className="text-xs text-slate-600 mt-2">
                {a.currentRole}
                {a.currentCompany && ` @ ${a.currentCompany}`}
              </p>

              <span className="mt-3 inline-block text-xs font-medium text-sky-700">
                View profile →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Alumni Profile Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {selected.name}
                </h3>

                <p className="text-indigo-600 mt-1">
                  {selected.roleInSociety} • {selected.session}
                </p>

                {selected.club && (
                  <p className="text-sm text-slate-600 mt-1">
                    Club: {selected.club}
                  </p>
                )}

                <p className="text-sm text-slate-700 mt-4">
                  <strong>Current Role:</strong> {selected.currentRole}
                </p>

                {selected.currentCompany && (
                  <p className="text-sm text-slate-700">
                    <strong>Company:</strong> {selected.currentCompany}
                  </p>
                )}

                {selected.currentLocation && (
                  <p className="text-sm text-slate-700">
                    <strong>Location:</strong> {selected.currentLocation}
                  </p>
                )}

                {/* Achievements */}
                {selected.achievements && (
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wide text-sky-700 mb-1">
                      Achievements
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-700">
                      {selected.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Message */}
                {selected.message && (
                  <div className="mt-4 rounded-xl bg-sky-50 p-4 text-sm text-slate-700">
                    “{selected.message}”
                  </div>
                )}

                {/* LinkedIn */}
                <div className="mt-5">
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-700"
                  >
                    <Linkedin size={16} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
