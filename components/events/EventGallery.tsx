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
  const [scale, setScale] = useState(1);

  const isOpen = index !== null;

  /* ---------- NAVIGATION ---------- */
  const next = useCallback(() => {
    setIndex((i) => (i === null ? 0 : (i + 1) % images.length));
    setScale(1);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    setScale(1);
  }, [images.length]);

  /* ---------- CLOSE ---------- */
  const closeGallery = useCallback(() => {
    setPlaying(false);
    setScale(1);
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
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = src.split("/").pop() || "image.jpg";
    a.click();

    URL.revokeObjectURL(url);
  };

  /* ---------- ZOOM ---------- */
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(3, Math.max(1, s + e.deltaY * -0.001)));
  };

  return (
    <>
      {/* 🖼️ WALL-STYLE MASONRY */}
      <div className="columns-2 sm:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={`${img}-${i}`}
            whileHover={{ y: -8, rotateZ: -0.6 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative break-inside-avoid cursor-pointer overflow-hidden rounded-xl 
                       bg-neutral-900 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img}
              alt=""
              width={600}
              height={800}
              sizes="(max-width:640px) 50vw, (max-width:1280px) 33vw, 25vw"
              className="w-full h-auto object-cover"
            />

            <div
              className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 
                            transition-opacity flex items-center justify-center"
            >
              <span className="text-white text-xs tracking-widest uppercase">
                View
              </span>
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md 
                       flex items-center justify-center"
            onPointerDown={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex items-center justify-center 
                         px-3 sm:px-6 lg:px-12"
              onPointerDown={(e) => e.stopPropagation()}
              onWheel={handleWheel}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
              }}
            >
              {/* IMAGE */}
              <motion.div style={{ scale }}>
                <Image
                  src={images[index]}
                  alt=""
                  width={2000}
                  height={1400}
                  priority
                  className="max-h-[82vh] w-auto object-contain rounded-xl 
                             shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
                />
              </motion.div>

              {/* NAV BUTTONS */}
              <button
                onClick={prev}
                className="absolute left-2 sm:left-6 text-white text-4xl 
                           opacity-70 hover:opacity-100 select-none"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-2 sm:right-6 text-white text-4xl 
                           opacity-70 hover:opacity-100 select-none"
              >
                ›
              </button>

              {/* TOP CONTROLS */}
              <div
                className="absolute top-3 right-3 sm:top-6 sm:right-6 
                              flex flex-wrap gap-2 text-white text-xs sm:text-sm"
              >
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
              <div className="absolute bottom-3 sm:bottom-6 text-white text-xs sm:text-sm opacity-80">
                {index + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
