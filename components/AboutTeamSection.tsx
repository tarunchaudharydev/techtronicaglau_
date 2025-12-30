"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, MessageCircle } from "lucide-react";
import { members, Member } from "@/lib/data/teamData";

export default function AboutTeamSection() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            The people who plan, build, and lead Techtronica Society.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelected(m)}
              className="group bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
            >
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="font-semibold text-gray-900">{m.name}</h3>

              <p className="text-indigo-600 text-sm mt-1">
                {m.roles.join(" • ")}
              </p>

              <p className="text-xs text-gray-600 mt-2">{m.shortBio}</p>

              <span className="mt-3 inline-block text-xs font-medium text-sky-700">
                View profile →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* PROFILE MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 relative">
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              Close (✕)
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
                <h3 className="text-2xl font-semibold text-gray-900">
                  {selected.name}
                </h3>

                <p className="text-indigo-600 mt-1">
                  {selected.roles.join(" • ")}
                </p>

                <p className="text-sm text-gray-700 mt-4">{selected.longBio}</p>

                {/* Categories */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full text-xs bg-sky-100 text-sky-700"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-5 flex gap-3">
                  {selected.linkedin && (
                    <a
                      href={selected.linkedin}
                      target="_blank"
                      className="h-9 w-9 flex items-center justify-center rounded-full bg-sky-600 text-white"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {selected.whatsApp && (
                    <a
                      href={selected.whatsApp}
                      target="_blank"
                      className="h-9 w-9 flex items-center justify-center rounded-full bg-green-500 text-white"
                    >
                      <MessageCircle size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
