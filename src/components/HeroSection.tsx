"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDownIcon } from "@/components/icons";

/* Top row images with size classes matching original CSS */
const topRowImages = [
  {
    src: "/images/hero/fotomaton-madera.webp",
    alt: "Photobooth en bois pour événements à Marrakech",
    size: "small" as const,
  },
  {
    src: "/images/hero/fotomaton-pantalla-lateral-boda.webp",
    alt: "Photobooth avec écran latéral pour mariage",
    size: "big" as const,
  },
  {
    src: "/images/hero/fotomaton-evento-empresa.webp",
    alt: "Photobooth pour événement d'entreprise",
    size: "medium" as const,
  },
  {
    src: "/images/hero/videomaton-360.webp",
    alt: "Vidéomaton 360 pour événements d'entreprise",
    size: "small" as const,
  },
];

/* Bottom row images */
const bottomRowImages = [
  {
    src: "/images/hero/fotomaton-espejo-mirror-booth.webp",
    alt: "Photobooth miroir interactif à Marrakech",
    size: "small" as const,
  },
  {
    src: "/images/hero/voguebooth-led-fotomaton.webp",
    alt: "Photobooth LED Vogue pour événements",
    size: "medium" as const,
  },
  {
    src: "/images/hero/videomaton-photocall-personalizado.webp",
    alt: "Vidéomaton spin 360 avec photocall personnalisé",
    size: "big" as const,
  },
  {
    src: "/images/hero/totem-fotomaton-pantalla.webp",
    alt: "Totem photobooth avec écran interactif",
    size: "small" as const,
  },
];

const sizeClasses = {
  small: "w-[20vw] max-md:w-[30vw]",
  medium: "w-[30vw] max-md:w-[40vw]",
  big: "w-[40vw] max-md:w-[50vw]",
};

const sizeSizes = {
  small: "(max-width: 768px) 30vw, 20vw",
  medium: "(max-width: 768px) 40vw, 30vw",
  big: "(max-width: 768px) 50vw, 40vw",
};

const sizeWidths = {
  small: { width: 400, height: 225 },
  medium: { width: 480, height: 270 },
  big: { width: 640, height: 360 },
};

function HeroImage({
  src,
  alt,
  size,
  priority = false,
}: {
  src: string;
  alt: string;
  size: "small" | "medium" | "big";
  priority?: boolean;
}) {
  const dims = sizeWidths[size];
  return (
    <div
      className={`${sizeClasses[size]} relative shrink-0 aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-[#B3B3B3]`}
    >
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        sizes={sizeSizes[size]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}

function MarqueeRow({
  images,
  direction,
  isFirstRow = false,
}: {
  images: typeof topRowImages;
  direction: "left" | "right";
  isFirstRow?: boolean;
}) {
  return (
    <div className="hero__slider-row flex gap-4 max-md:gap-3 overflow-hidden">
      <div
        className="hero__slider-wrapper flex gap-4 max-md:gap-3"
        style={{
          animation: `scrollSlider${direction === "left" ? "" : "Reverse"} 20s linear infinite`,
        }}
      >
        {images.map((img, i) => (
          <HeroImage key={`a-${img.src}`} {...img} priority={isFirstRow && i < 2} />
        ))}
        {images.map((img) => (
          <HeroImage key={`b-${img.src}`} {...img} />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero py-[7.5rem] pb-[10rem] max-md:py-6 max-md:pb-8">
      {/* Centered heading */}
      <div className="hero__text relative z-10 mx-auto max-w-[100vw] overflow-hidden px-4 text-center md:px-0">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">
          <h2 className="mb-2 text-[0.875rem] max-md:text-[0.75rem] leading-none text-[#6B6B6B] uppercase font-suisse font-medium">
            Marrakech PhotoBooths
          </h2>
          <h1
            className="max-w-[21ch] font-platform font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A]"
            style={{ fontSize: "clamp(1.75rem, 6.5vw, 6.5rem)" }}
          >
            Location de photobooth pour{" "}
            <a
              href="#services"
              className="inline-block rounded-[10rem] bg-[#F6F6F6] px-6 max-md:px-4 pb-3 max-md:pb-2 pt-2 max-md:pt-1.5 text-[#1E1E2A] no-underline mix-blend-multiply transition-all duration-150 hover:bg-[#FF0422] hover:text-white"
            >
              événements
            </a>{" "}
            et{" "}
            <a
              href="#contact"
              className="inline-block rounded-[10rem] bg-[#F6F6F6] px-6 max-md:px-4 pb-3 max-md:pb-2 pt-2 max-md:pt-1.5 text-[#1E1E2A] no-underline mix-blend-multiply transition-all duration-150 hover:bg-[#FF0422] hover:text-white"
            >
              mariages
            </a>
          </h1>
        </div>
      </div>

      {/* Arrow row */}
      <div className="hero__slider relative z-10 mx-auto max-w-[100vw]">
        <div className="relative z-10 flex items-center justify-center px-4 py-4 max-md:py-3">
          <a
            href="#services"
            aria-label="Voir les services"
            className="hero__btn flex items-center justify-center w-10 h-10 max-md:w-9 max-md:h-9 text-[#1E1E2A] transition-all duration-150 hover:text-[#808080]"
          >
            <ArrowDownIcon size={22} />
          </a>
        </div>

        {/* Two rows of images with infinite marquee */}
        <div className="flex flex-col gap-4 max-md:gap-3">
          <MarqueeRow images={topRowImages} direction="left" isFirstRow />
          <MarqueeRow images={bottomRowImages} direction="right" />
        </div>
      </div>
    </section>
  );
}
