"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface EventGalleryProps {
  images: string[];
}

export default function EventGallery({ images }: EventGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const isOpen = index !== null;

  /* ---------- NAVIGATION ---------- */
  const next = useCallback(() => {
    setIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  }, [images.length]);

  /* ---------- CLOSE (ALWAYS PAUSES) ---------- */
  const closeGallery = useCallback(() => {
    setPlaying(false); // ✅ pause slideshow
    setIndex(null); // ✅ close modal
  }, []);

  /* ---------- KEYBOARD ---------- */
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, next, prev, closeGallery]);

  /* ---------- SLIDESHOW ---------- */
  useEffect(() => {
    if (!playing || !isOpen) return;

    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [playing, isOpen, next]);

  return (
    <>
      {/* 🖼️ MASONRY GRID */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="relative break-inside-avoid cursor-pointer rounded-xl overflow-hidden group"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img}
              alt=""
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔍 LIGHTBOX */}
      <AnimatePresence>
        {isOpen && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onPointerDown={closeGallery} // outside click
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex items-center justify-center px-4 sm:px-8"
              onPointerDown={(e) => e.stopPropagation()} // inside click
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
              }}
            >
              {/* IMAGE */}
              <Image
                src={images[index]}
                alt=""
                width={1600}
                height={1000}
                className="max-h-[85vh] w-auto object-contain rounded-xl"
              />

              {/* LEFT ARROW */}
              <button
                onClick={prev}
                className="absolute left-2 sm:left-6 text-white text-4xl opacity-70 hover:opacity-100"
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={next}
                className="absolute right-2 sm:right-6 text-white text-4xl opacity-70 hover:opacity-100"
              >
                ›
              </button>

              {/* TOP CONTROLS */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-3 text-white text-sm">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="px-3 py-1 bg-white/10 rounded hover:bg-white/20"
                >
                  {playing ? "Pause" : "Play"}
                </button>
                <button
                  onClick={closeGallery}
                  className="px-3 py-1 bg-white/10 rounded hover:bg-white/20"
                >
                  Close
                </button>
              </div>

              {/* COUNTER */}
              <div className="absolute bottom-4 sm:bottom-6 text-white text-sm opacity-80">
                {index + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
