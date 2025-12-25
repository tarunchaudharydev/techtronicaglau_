"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CloudinaryResource = {
  public_id: string;
  secure_url: string;
};

const BATCH_SIZE = 12;
const SKELETON_COUNT = 8;

export default function GalleryPage() {
  const [images, setImages] = useState<CloudinaryResource[]>([]);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ---------------- FETCH IMAGES ONCE ---------------- */
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch images");

        const data: CloudinaryResource[] = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  /* ---------------- INFINITE SCROLL ---------------- */
  useEffect(() => {
    if (!loadMoreRef.current) return;

    // disconnect old observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, images.length)
          );
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => observerRef.current?.disconnect();
  }, [visibleCount, images.length]);

  return (
    <section
      className="max-w-7xl mx-auto px-4 pt-32 pb-12 bg-linear-to-br from-white via-sky-50 to-purple-100"
      style={{ paddingTop: "calc(8rem + 29px)" }}
    >
      {/* ================= HEADER ================= */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-4">
          Techtronica • GLA University
        </p>
        <span className="mx-2 bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold leading-tight">
          Society Gallery
        </span>
      </div>

      {/* ================= ERROR ================= */}
      {error && (
        <div className="flex justify-center items-center h-[40vh]">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* ================= INITIAL SKELETON ================= */}
      {!error && loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md bg-gray-200 h-40 sm:h-44 md:h-48"
            >
              <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            </div>
          ))}
        </div>
      )}

      {/* ================= EMPTY ================= */}
      {!error && !loading && images.length === 0 && (
        <p className="text-center text-gray-500">No images available.</p>
      )}

      {/* ================= GALLERY ================= */}
      {!error && !loading && images.length > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.slice(0, visibleCount).map((img, index) => (
              <div
                key={img.public_id}
                className="overflow-hidden rounded-xl shadow-md group"
              >
                <Image
                  src={img.secure_url}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>

          {/* ================= BOTTOM LOADER ================= */}
          {visibleCount < images.length && (
            <div
              ref={loadMoreRef}
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-gray-200 h-40 sm:h-44 md:h-48"
                >
                  <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ================= SHIMMER ANIMATION ================= */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
