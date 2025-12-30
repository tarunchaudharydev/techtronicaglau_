"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Send,
  Sparkles,
  Youtube,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(rightRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-4 py-16 overflow-hidden"
    >
      {/* Background gradient + glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#0ea5e9_0,_transparent_60%),_radial-gradient(circle_at_bottom,_#6366f1_0,_transparent_60%)] opacity-30" />
      <div className="absolute inset-0 bg-slate-950/5 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-sky-200">
            <Sparkles className="h-3 w-3 text-sky-400" />
            <span>Techtronica • Contact</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Let&apos;s Build Something Great
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Have a question, idea, or collaboration proposal? Drop a message and
            the Techtronica team will get back to you as soon as possible.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-10 items-start">
          {/* LEFT: Contact Info */}
          <div
            ref={leftRef}
            className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl border border-white/10 shadow-xl shadow-sky-900/20 p-8 text-slate-100 overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-24 -right-16 h-52 w-52 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

            <h2 className="relative text-xl md:text-2xl font-semibold mb-2">
              Contact Information
            </h2>
            <p className="relative text-sm text-slate-300 mb-6">
              Reach out through any of these channels. The team usually responds
              within 24–48 hours.
            </p>

            <div className="relative grid gap-4 text-sm">
              <div className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-100">Location</p>
                  <p className="text-slate-300 text-xs md:text-sm">
                    GLA University, Mathura, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-100">Working Hours</p>
                  <p className="text-slate-300 text-xs md:text-sm">
                    Monday – Friday: 10:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-100">Email</p>
                  <p className="text-slate-300 text-xs md:text-sm">
                    techtronica@gla.ac.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-100">Phone</p>
                  <p className="text-slate-300 text-xs md:text-sm">
                    +91 9XXXXXXXXX
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="relative mt-6 pt-5 border-t border-white/10">
              <p className="text-sm font-medium text-slate-100 mb-3">
                Stay connected
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="group h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 hover:bg-sky-500 hover:text-white transition"
                >
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-yellow-400 text-white hover:brightness-110 transition"
                >
                  <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-red-500 text-white hover:brightness-110 transition"
                >
                  <Youtube className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (unchanged logic / fields) */}
          <form
            ref={rightRef}
            onSubmit={handleSubmit}
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-sky-900/10 border border-slate-200/70 p-8 space-y-5"
          >
            <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />

            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Send us a message
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mb-2">
              Tell us a bit about what you&apos;re looking for and we&apos;ll
              reach out with next steps.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-400 transition"
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-400 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white/60 border-t-transparent animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  Send Message
                </>
              )}
            </button>

            {success && (
              <p className="text-green-600 text-sm text-center">
                Message sent successfully!
              </p>
            )}

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
