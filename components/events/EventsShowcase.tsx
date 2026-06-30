import Image from "next/image";

export default function EventsSection() {
  return (
    <section className=" my-[-50px] lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-lg text-slate-700">
              Participate In Communities With
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1f2a4a] sm:text-5xl lg:text-6xl">
              Exciting Tech Events Near You.
              Connect. Learn. Grow.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Whether you&apos;re a developer, designer, tech enthusiast, or
              simply exploring innovation, Techtronica helps you discover
              workshops, hackathons, speaker sessions, and networking
              opportunities.
            </p>

            <ul className="mt-8 space-y-3 text-lg text-slate-800">
              <li>✨ Stay up-to-date on the latest technologies and trends.</li>
              <li>✨ Meet professionals & experts and build your network.</li>
              <li>✨ Learn new skills with hands-on experience.</li>
            </ul>
          </div>

          {/* Images */}
          <div className="grid grid-cols-3 gap-4">

            {/* Top Row */}
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/homeImages/leadership.jpg"
                alt=""
                width={400}
                height={500}
                className="h-[180px] w-full object-cover sm:h-[220px] lg:h-[280px]"
              />
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/homeImages/design.jpg"
                alt=""
                width={400}
                height={500}
                className="h-[180px] w-full object-cover sm:h-[220px] lg:h-[280px]"
              />
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/homeImages/impact.jpg"
                alt=""
                width={600}
                height={500}
                className="h-[180px] w-full object-cover sm:h-[220px] lg:h-[280px]"
              />
            </div>

            {/* Bottom Row */}
            <div className="col-span-2 overflow-hidden rounded-[28px]">
              <Image
                src="/homeImages/team_image.JPG"
                alt=""
                width={900}
                height={500}
                className="h-[180px] w-full object-cover sm:h-[220px] lg:h-[280px]"
              />
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/events/event5.jpg"
                alt=""
                width={400}
                height={500}
                className="h-[180px] w-full object-cover sm:h-[220px] lg:h-[280px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}