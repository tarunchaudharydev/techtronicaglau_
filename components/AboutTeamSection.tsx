"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, MessageCircle } from "lucide-react";
import { members, Member } from "@/lib/data/teamData";

/* 🎨 Color variants (rotated by index) */
const colorVariants = [
  {
    card: "bg-indigo-50 hover:bg-indigo-100",
    role: "text-sky-600",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    card: "bg-sky-50 hover:bg-sky-100",
    role: "text-sky-600",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    card: "bg-emerald-50 hover:bg-emerald-100",
    role: "text-sky-600",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    card: "bg-rose-50 hover:bg-rose-100",
    role: "text-sky-600",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    card: "bg-amber-50 hover:bg-amber-100",
    role: "text-sky-600",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    card: "bg-violet-50 hover:bg-violet-100",
    role: "text-sky-600",
    badge: "bg-violet-100 text-violet-700",
  },
];

const mentors = members.filter((m) => m.roleType === "mentor");
const teamMembers = members.filter((m) => m.roleType === "team");

export default function AboutTeamSection() {
  const [selected, setSelected] = useState<{
    member: Member;
    colorIndex: number;
  } | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
      {/* Mentors */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-10">
          Our Mentors
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mentors.map((m, index) => {
            const color = colorVariants[index % colorVariants.length];

            return (
              <button
                key={m.id}
                onClick={() => setSelected({ member: m, colorIndex: index })}
                className={`group p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center ${color.card}`}
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 text-lg">
                  {m.name}
                </h3>

                <p className={`text-sm mt-1 font-medium ${color.role}`}>
                  {m.roles.join(" • ")}
                </p>

                <p className="text-xs text-gray-600 mt-2">{m.shortBio}</p>

                <span className="mt-3 inline-block text-xs font-medium text-gray-700">
                  View profile →
                </span>
              </button>
            );
          })}
        </div>
      </div>

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
          {members.map((m, index) => {
            const color = colorVariants[index % colorVariants.length];

            return (
              <button
                key={m.id}
                onClick={() => setSelected({ member: m, colorIndex: index })}
                className={`group p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center ${color.card}`}
              >
                {/* Avatar */}
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <h3 className="font-semibold text-gray-900">{m.name}</h3>

                <p className={`text-sm mt-1 font-medium ${color.role}`}>
                  {m.roles.join(" • ")}
                </p>

                <p className="text-xs text-gray-600 mt-2">{m.shortBio}</p>

                <span className="mt-3 inline-block text-xs font-medium text-gray-700">
                  View profile →
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* PROFILE MODAL */}
      {selected &&
        (() => {
          const { member, colorIndex } = selected;
          const color = colorVariants[colorIndex % colorVariants.length];

          return (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
              <div className="bg-white rounded-3xl max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
                >
                  ✕
                </button>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-2xl object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {member.name}
                    </h3>

                    <p className={`mt-1 font-medium ${color.role}`}>
                      {member.roles.join(" • ")}
                    </p>

                    {member.longBio.map((para, index) => (
                      <p
                        key={index}
                        className={`text-sm leading-relaxed ${
                          para.bold
                            ? "font-semibold text-slate-900"
                            : "text-gray-700"
                        }`}
                      >
                        {para.text}
                      </p>
                    ))}

                    {/* Categories */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`px-3 py-1 rounded-full text-xs ${color.badge}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="mt-5 flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          className="h-9 w-9 flex items-center justify-center rounded-full bg-sky-600 text-white"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.whatsApp && (
                        <a
                          href={member.whatsApp}
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
          );
        })()}
    </section>
  );
}
