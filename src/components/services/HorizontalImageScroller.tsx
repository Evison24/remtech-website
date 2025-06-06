"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

export default function HorizontalImageScroller({
  images,
}: {
  images: string[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Project Snapshots
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 bg-white/90 hover:bg-white text-[#017bff] p-3 rounded-full shadow"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 bg-white/90 hover:bg-white text-[#017bff] p-3 rounded-full shadow"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-10 py-4"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] h-[200px] rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={src}
              alt={`Project image ${i + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog
        open={lightboxIndex !== null}
        onClose={closeLightbox}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <Dialog.Panel className="relative max-w-4xl w-full px-6">
            <Image
              src={images[lightboxIndex ?? 0]}
              alt="Lightbox image"
              width={1000}
              height={600}
              className="object-contain w-full h-auto rounded"
            />
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-0 right-4 bg-white/90 hover:bg-white text-[#017bff] p-3 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Nav Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#017bff] p-3 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#017bff] p-3 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
