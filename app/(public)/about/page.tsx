import type { Metadata } from "next";
import Image from "next/image";
import AboutTeamSection from "@/components/AboutTeamSection";

export const metadata: Metadata = {
  title: "About Us | Techtronica Society",
  description:
    "Learn about Techtronica Society, our mission, vision, values, and the team behind it.",
};

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-700 min-h-screen -pt-20">
      {/* HERO SECTION */}
      <section className="relative h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Technology background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900/70 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Techtronica Society
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
              A student-driven technical society fostering innovation and
              collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-lg mb-4">
              Techtronica Society is a community of enthusiastic students
              passionate about technology, innovation, and problem-solving.
            </p>
            <p className="text-lg">
              We bridge the gap between classroom learning and real-world skills
              through workshops, projects, hackathons, and industry exposure.
            </p>
          </div>

          <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://techtronica.vercel.app/_next/image?url=%2Fimages%2Foverview%2Fteam.jpg&w=828&q=75"
              alt="Techtronica team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Our Mission
            </h3>
            <p>
              To empower students with technical expertise and leadership
              skills.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Our Vision
            </h3>
            <p>
              To build a strong, innovative, and future-ready tech community.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              Our Values
            </h3>
            <p>Innovation, teamwork, integrity, and continuous learning.</p>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      {/* <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              The dedicated students behind Techtronica Society.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Student Name",
                role: "President",
                image:
                  "https://i.ibb.co/ksDwTG0g/Whats-App-Image-2025-12-26-at-8-51-33-PM.jpg",
              },
              {
                name: "Student Name",
                role: "Vice President",
                image: "https://i.ibb.co/xqbNfRq7/IMG-20250813-121405.jpg",
              },
              {
                name: "Student Name",
                role: "Technical Lead",
                image:
                  "https://images.unsplash.com/photo-1556157382-97eda2d62296",
              },
              {
                name: "Student Name",
                role: "Event Coordinator",
                image:
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
              },
            ].map((member) => (
              <div
                key={member.role}
                className="bg-white p-5 rounded-xl shadow-md text-center"
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <AboutTeamSection />
    </main>
  );
}
