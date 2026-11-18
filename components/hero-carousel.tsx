"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/img/hero_1.jpg", alt: "Sherry Chang, photo 1" },
  { src: "/img/hero_2.jpg", alt: "Sherry Chang, photo 2" },
  { src: "/img/hero_3.jpg", alt: "Sherry Chang, photo 3" },
  { src: "/img/hero_4.jpeg", alt: "Sherry Chang, photo 4" },
  { src: "/img/hero_5.jpg", alt: "Sherry Chang, photo 5" },
];

// 每張照片的微傾角（Tailwind 需要完整字串，不能動態拼接）
const tilts = [
  "rotate-[-2deg]",
  "rotate-[1.5deg]",
  "rotate-[-1deg]",
  "rotate-[2deg]",
  "rotate-[-1.5deg]",
];

const INTERVAL_MS = 3500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[520px] md:mx-0 md:ml-auto">
      <div
        className={`relative border-[16px] border-b-[40px] border-white bg-white shadow-[4px_6px_20px_rgba(0,0,0,0.25)] transition-transform duration-700 ${tilts[index]}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-accent/30">
          {slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="(min-width: 768px) 42vw, 100vw"
              className={`object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
