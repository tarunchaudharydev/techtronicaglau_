"use client";

import Image from "next/image";
import { useState } from "react";

import EventCountdown from "@/components/events/EventCountdown";
import EventGallery from "@/components/events/EventGallery";
import RegisterButton from "@/components/events/RegisterButton";
import BackButton from "@/components/events/BackButton";

import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiUser,
  FiX,
} from "react-icons/fi";
import { FaMedal } from "react-icons/fa";

type ClientEventDetailsProps = {
  event: any;
  isUpcoming: boolean;
};

export default function ClientEventDetails({
  event,
  isUpcoming,
}: ClientEventDetailsProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <>
      <main className="min-h-screen bg-emerald-50 -mt-28 pt-25 pb-20 px-4">
        {/* Back */}
        <div className="max-w-6xl mx-auto mb-6">
          <BackButton />
        </div>

        <section className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* LEFT */}
          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={event.coverImage}
                alt={event.title}
                width={400}
                height={520}
                priority
                className="w-full max-h-[520px] object-cover"
              />
            </div>

            <div className="rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <p className="text-xs text-slate-500 mb-1">Hosted By</p>
              <p className="font-semibold text-slate-800">{event.club}</p>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                {event.title}
              </h1>

              <div className="space-y-2 text-sm text-emerald-900/80">
                <p className="flex items-center gap-2">
                  <FiCalendar /> {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <FiClock /> {event.time}
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin /> {event.location}
                </p>
              </div>
            </div>

            {/* UPCOMING */}
            {isUpcoming && (
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm space-y-4 border border-emerald-100">
                <p className="text-lg font-semibold text-emerald-900">
                  Time Left
                </p>

                {event.registrationDeadline && (
                  <EventCountdown deadline={event.registrationDeadline} />
                )}

                <RegisterButton
                  registrationLink={event.registrationLink}
                  registrationDeadline={event.registrationDeadline}
                />
              </div>
            )}

            {/* DESCRIPTION */}
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3">
              {event.description.map((line: string, i: number) => (
                <p key={i} className="text-slate-700 text-sm sm:text-base">
                  {line}
                </p>
              ))}
            </div>

            {/* PAST EVENT – WINNERS */}
            {!isUpcoming && event.winners && (
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <FaMedal className="text-emerald-600" />
                  Winners
                </h2>

                {event.winners.map((team: any) => {
                  const pos = team.position.toLowerCase();
                  const isGold =
                    pos.includes("winner") && !pos.includes("runner");

                  const medalColor = isGold
                    ? "text-yellow-500"
                    : pos.includes("runner-up") && !pos.includes("2nd")
                      ? "text-slate-400"
                      : "text-amber-700";

                  return (
                    <div
                      key={team.name}
                      className={`rounded-xl border p-5 space-y-4 ${
                        isGold
                          ? "bg-gradient-to-br from-yellow-50 via-amber-50 to-white border-yellow-300 ring-2 ring-yellow-200"
                          : "border-emerald-100"
                      }`}
                    >
                      {/* HEADER */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setPreviewImage(team.image)}
                          className="relative h-16 w-16 overflow-hidden rounded-lg border bg-white dark:bg-slate-900"
                        >
                          <Image
                            src={team.image || "/placeholder-team.png"}
                            alt={team.name}
                            fill
                            className="object-cover"
                          />
                        </button>

                        <div>
                          <p
                            className={`flex items-center gap-2 font-semibold ${medalColor}`}
                          >
                            <FaMedal />
                            {team.position}
                          </p>
                          <p className="flex items-center gap-2 text-slate-800 font-medium">
                            <FiUsers className="text-slate-500" />
                            {team.name}
                          </p>
                        </div>
                      </div>

                      {/* MEMBERS */}
                      <div className="grid gap-3 sm:grid-cols-2">
                        {team.members.map((member: any) => (
                          <div
                            key={member.rollNo}
                            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 p-3 text-sm"
                          >
                            <p className="flex items-center gap-2 font-medium text-slate-800">
                              <FiUser className="text-slate-500" />
                              {member.name}
                            </p>
                            <div className="mt-1 ml-6 text-muted space-y-0.5">
                              <p>
                                <span className="font-medium">Roll No:</span>{" "}
                                {member.rollNo}
                              </p>
                              <p>
                                <span className="font-medium">Course:</span>{" "}
                                {member.course}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* GALLERY */}
            {event.gallery?.length > 0 && (
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Event Gallery</h2>
                <EventGallery images={event.gallery} />
              </div>
            )}
          </div>
        </section>
      </main>

      {/* IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setPreviewImage(null)}
          >
            <FiX />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Winner"
              width={1600}
              height={1000}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
