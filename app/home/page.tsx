"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutSociety } from "../data/home-data";
// import HomeComponent from "../components/SocietyText";


gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  // (animations commented out for now – you can re‑enable later)
  // useEffect(() => { ... }, []);

  return (
    <main className="min-h-screen pt-28 px-4 flex items-start justify-center bg-linear-to-br from-white via-sky-50 to-purple-100">
      <section className="w-full max-w-5xl text-black space-y-20 pb-20">
        {/* <HomeComponent /> */}
        {/* HERO */}
        <div ref={heroRef} className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4">
            Techtronica • GLA University
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Empowering
            <span className="mx-2 bg-linear-to-r from-sky-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
              student clubs
            </span>
            for a brighter campus.
          </h1>

          <p className="text-sm sm:text-base text-slate-800 max-w-2xl mb-8 mx-auto md:mx-0">
            Explore five dynamic clubs, join events, and collaborate with peers
            to build a vibrant, inclusive college community.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-8">
            <Link
              href="/clubs"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-black bg-yellow-300 hover:bg-yellow-400 transition-colors shadow-md shadow-yellow-400/40 "
            >
              Explore Clubs
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold border border-purple-200 text-sky-900 bg-white/70 hover:bg-white transition-colors shadow-sm"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* STATS / HIGHLIGHTS */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm mb-8"
        >
          <div className="rounded-2xl border border-purple-100 bg-white/80 shadow-sm p-4">
            <p className="font-semibold text-sky-900">5 Clubs</p>
            <p className="text-[11px] sm:text-xs text-slate-700">
              Technovation, Code-E-Phobia, Gizmo, Unnati, Mindblogger.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-100 bg-white/80 shadow-sm p-4">
            <p className="font-semibold text-sky-900">20+ Events</p>
            <p className="text-[11px] sm:text-xs text-slate-700">
              Fests, hackathons, workshops, and competitions.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-100 bg-white/80 shadow-sm p-4">
            <p className="font-semibold text-sky-900">100+ Members</p>
            <p className="text-[11px] sm:text-xs text-slate-700">
              Active students from all departments.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-100 bg-white/80 shadow-sm p-4">
            <p className="font-semibold text-sky-900">Mentors</p>
            <p className="text-[11px] sm:text-xs text-slate-700">
              Guided by experienced faculty coordinators.
            </p>
          </div>
        </div>

        {/* 1. Clubs overview */}
       <div className="max-w-6xl mx-auto px-4">
  <div
    ref={(el) => setSectionRef(el, 0)}
    className="
      flex flex-col
      md:flex-row
      gap-8
      items-center
    "
  >
    {/* LEFT: text */}
    <div className="w-full md:w-1/2 space-y-3 mb-8">
      <h2 className="text-xl sm:text-4xl font-bold text-sky-900">
        {aboutSociety.title}
      </h2>

      {aboutSociety.description.map((para, index) => (
        <p
          key={index}
          className="text-sm sm:text-base text-slate-700 leading-relaxed"
        >
          {para}
        </p>
      ))}

      
    </div>

    {/* RIGHT: image */}
    <div className="w-full md:w-1/2">
      <Image
        src="/images/overview/team.jpg"
        alt="Students collaborating in different clubs"
        width={800}
        height={500}
        className="
          w-full h-52 sm:h-64 md:h-72
          rounded-3xl object-cover
          shadow-[0_18px_60px_rgba(15,23,42,0.25)]
        "
        priority
      />
    </div>
  </div>
</div>



        {/* 2. Technical club */}
        <div
          ref={(el) => setSectionRef(el, 1)}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="feature-text space-y-3 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
              Build real technical projects
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Join coding marathons, electronics builds, and hackathons that
              push you beyond the classroom. Learn by doing with peers and
              mentors who ship real projects.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              From basic problem solving to full‑stack/web, IoT and automation,
              the technical club is your launchpad into engineering practice.
            </p>
          </div>

          <div className="feature-image md:col-span-1">
            <Image
              src="/images/technovation/ai.jpg"
              alt="Students working on laptops and circuits"
              width={800}
              height={500}
              className="h-52 sm:h-64 md:h-72 w-full rounded-3xl object-cover shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
            />
          </div>
        </div>

        {/* 3. Cultural & arts */}
        <div
          ref={(el) => setSectionRef(el, 2)}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="feature-text space-y-3 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
              Showcase culture, art, and design
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Whether you dance, sing, act, paint, or design, the cultural and
              arts clubs give you a stage and a team that backs your creativity.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              Take part in stage shows, design college branding, and curate
              exhibitions that transform the campus vibe.
            </p>
          </div>

          <div className="feature-image md:col-span-1">
            <Image
              src="/images/unnati/event.jpg"
              alt="Stage performance and art displayed on walls"
              width={800}
              height={500}
              className="h-52 sm:h-64 md:h-72 w-full rounded-3xl object-cover shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
            />
          </div>
        </div>

        {/* 4. Sports & fitness */}
        <div
          ref={(el) => setSectionRef(el, 3)}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="feature-text space-y-3 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
              Compete, play, and stay fit
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              The sports club runs tournaments, selection trials, and practice
              sessions across multiple games, from cricket and football to
              badminton and athletics.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              Balance academics with fitness and discipline, and represent your
              college on the field.
            </p>
          </div>

          <div className="feature-image md:col-span-1">
            <Image
              src="/images/unnati/event.jpg"
              alt="Students playing sports"
              width={800}
              height={500}
              className="h-52 sm:h-64 md:h-72 w-full rounded-3xl object-cover shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
            />
          </div>
        </div>

        {/* 5. Social impact */}
        <div
          ref={(el) => setSectionRef(el, 4)}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="feature-text space-y-3 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
              Create real impact outside campus
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Take part in teaching drives, cleanliness campaigns, blood
              donation camps, and awareness events that touch real people’s
              lives.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              The social impact club turns your ideas into action by partnering
              with NGOs, local communities, and college administration.
            </p>
          </div>

          <div className="feature-image md:col-span-1">
            <Image
              src="/images/unnati/event.jpg"
              alt="Volunteers doing community service"
              width={800}
              height={500}
              className="h-52 sm:h-64 md:h-72 w-full rounded-3xl object-cover shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
            />
          </div>
        </div>

        {/* 6. Leadership & core team */}
        <div
          ref={(el) => setSectionRef(el, 5)}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="feature-text space-y-3 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
              Step into leadership roles
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              From event coordinators to presidents and media leads, the society
              offers structured roles where you can practise leadership every
              week.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              Plan budgets, manage teams, talk to sponsors, and host events that
              the entire campus remembers.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center justify-center mt-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 transition-colors shadow-sm"
            >
              Meet the core team
            </Link>
          </div>

          <div className="feature-image md:col-span-1">
            <Image
              src="/images/overview/team.jpg"
              alt="Core team standing together"
              width={800}
              height={500}
              className="h-52 sm:h-64 md:h-72 w-full rounded-3xl object-cover shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
            />
          </div>
        </div>

        {/* How to get involved */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
            How to get involved
          </h2>
          <div className="relative border-l border-sky-200 pl-5 space-y-6">
            <div className="relative">
              <span className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-sky-500" />
              <h3 className="text-sm font-semibold text-sky-900">
                1. Explore clubs
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                Visit the Clubs page to read about each club&apos;s vision,
                activities, and team.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-purple-500" />
              <h3 className="text-sm font-semibold text-sky-900">
                2. Fill interest form
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                Submit a short form or contact the club representatives shown on
                the Team page.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-yellow-400" />
              <h3 className="text-sm font-semibold text-sky-900">
                3. Join events & meets
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                Attend orientations, weekly meets, and events to become an
                active member.
              </p>
            </div>
          </div>
        </div>

        {/* CTA STRIP */}
        <div className="rounded-3xl border border-sky-100 bg-white/80 shadow-md px-5 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-sky-900">
              Ready to be part of the core team?
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 max-w-xl">
              Join the organizing team, manage events, and build your leadership
              profile with the college society.
            </p>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 transition-colors shadow-sm"
          >
            Meet the Team
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
