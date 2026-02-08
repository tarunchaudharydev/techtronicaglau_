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

  /* ---------- CLOSE ---------- */
  const closeGallery = useCallback(() => {
    setPlaying(false);
    setIndex(null);
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

  /* ---------- DOWNLOAD ---------- */
  const downloadImage = async (src: string) => {
    const res = await fetch(src);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = src.split("/").pop() || "image.jpg";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* 🎨 WALL-STYLE MASONRY */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={`${img}-${i}`}
            whileHover={{ y: -6, rotateZ: -0.4 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative break-inside-avoid cursor-pointer rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.18)] bg-neutral-900"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img}
              alt=""
              width={600}
              height={800}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-auto object-cover"
            />

            {/* Glass hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm tracking-wide">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔍 LIGHTBOX */}
      <AnimatePresence>
        {isOpen && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onPointerDown={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex items-center justify-center px-4 sm:px-10"
              onPointerDown={(e) => e.stopPropagation()}
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
                width={1800}
                height={1200}
                priority
                className="max-h-[85vh] w-auto object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />

              {/* NAV */}
              <button
                onClick={prev}
                className="absolute left-3 sm:left-6 text-white text-4xl opacity-70 hover:opacity-100 select-none"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 sm:right-6 text-white text-4xl opacity-70 hover:opacity-100 select-none"
              >
                ›
              </button>

              {/* TOP CONTROLS */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 text-white text-xs sm:text-sm">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="px-3 py-1 bg-white/10 rounded hover:bg-white/20"
                >
                  {playing ? "Pause" : "Play"}
                </button>

                <button
                  onClick={() => downloadImage(images[index])}
                  className="px-3 py-1 bg-white/10 rounded hover:bg-white/20"
                >
                  Download
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
