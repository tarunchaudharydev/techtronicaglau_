import Image from "next/image";

type Sponsor = {
  name: string;
  logo: string;
};

const sponsors: Sponsor[] = [
  { name: "Sponsor One", logo: "/sponsors/google.jpg" },
  { name: "Sponsor Two", logo: "/sponsors/microsoft.jpg" },
  { name: "Sponsor Three", logo: "/sponsors/apple.jpg" },
  { name: "Sponsor Four", logo: "/sponsors/nvidia.jpg" },
  { name: "Sponsor Five", logo: "/sponsors/tesla.jpg" },
];

export default function SponsorsMarquee() {
  return (
    <section className="space-y-6">
      {/* Heading */}
      <div className="text-center space-y-2">
        <p className="text-xs uppercase tracking-widest text-sky-600">
          Our Sponsors & Partners
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
          Trusted by Industry & Institutions
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="marquee flex items-center gap-12">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[140px] sm:min-w-[180px] opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
