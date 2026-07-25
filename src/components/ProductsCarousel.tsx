"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const products = [
  { title: "Photobooth Classique", description: "Photos personnalisées imprimées sur le moment.", image: "/images/products/fotomaton.png", tag: "Populaire" },
  { title: "Spin 360º", description: "Vidéos 360º personnalisées pour des souvenirs uniques.", image: "/images/products/videomaton-spin-360-1200x1200.png", tag: "Tendance" },
  { title: "Photobooth Mini", description: "Compact et élégant, parfait pour les petits espaces.", image: "/images/products/fotomaton-mini-madera-1200x1200.png", tag: "" },
  { title: "Photobooth Smart", description: "Nouveau photobooth idéal pour les services IA et Glam.", image: "/images/products/Fotomaton-Smart-1200x1200.png", tag: "Nouveau" },
  { title: "Photobooth Miroir", description: "Miroir interactif avec animations et tactile.", image: "/images/products/fotomaton-espejo-mirror-booth-1200x1200.png", tag: "" },
  { title: "Glambot", description: "Bras robotique pour capturer des mouvements incroyables.", image: "/images/products/Glambot-Brazo-Robotico-1200x1200.png", tag: "Premium" },
  { title: "Lettres Géantes", description: "Créez un selfie-corner unique avec vos initiales.", image: "/images/products/A-letras-iluminadas-luces-madera-1200x1200.png", tag: "" },
  { title: "Photobooth Zenithal", description: "Perspective zénithale pour des photos créatives.", image: "/images/products/Fotomaton-Cenital-1200x1200.png", tag: "" },
  { title: "SuperZoom", description: "Système pour générer une vidéo SuperZoom.", image: "/images/products/Super-Zoom-3-1200x1200.png", tag: "" },
  { title: "Purikura", description: "Personnalisez vos photos avec filtres et stickers.", image: "/images/products/fotomaton-purikura-maquina.jpg", tag: "" },
];

export function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const updateCardWidth = () => {
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector<HTMLElement>(":scope > div");
        if (firstCard) setCardWidth(firstCard.offsetWidth + 20);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const maxIndex = Math.max(0, products.length - 1);
  const goToPrev = useCallback(() => setCurrentIndex((prev) => Math.max(0, prev - 1)), []);
  const goToNext = useCallback(() => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1)), [maxIndex]);

  return (
    <section className="py-[6rem] max-md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <h2 className="font-platform text-[3.5rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-3">
              Nos Produits
            </h2>
            <p className="font-suisse text-[max(14px,1rem)] text-[#808080] max-w-[40ch]">
              Découvrez notre gamme complète de photobooths et accessoires.
            </p>
          </div>
          <div className="flex items-center gap-3 max-md:hidden">
            <button onClick={goToPrev} disabled={currentIndex === 0} aria-label="Produit précédent" className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border", currentIndex === 0 ? "border-[#E5E5E5] text-[#CCC] cursor-not-allowed" : "border-[#1E1E2A] text-[#1E1E2A] hover:bg-[#1E1E2A] hover:text-white")}>
              <ChevronLeftIcon size={20} />
            </button>
            <button onClick={goToNext} disabled={currentIndex >= maxIndex} aria-label="Produit suivant" className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border", currentIndex >= maxIndex ? "border-[#E5E5E5] text-[#CCC] cursor-not-allowed" : "border-[#1E1E2A] text-[#1E1E2A] hover:bg-[#1E1E2A] hover:text-white")}>
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-5 transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}>
            {products.map((product) => (
              <Link key={product.title} href="/photobooth-evenements" className="group shrink-0 w-[260px] max-md:w-[180px]">
                <div className="relative aspect-[3/4] rounded-[1rem] overflow-hidden bg-[#F8F8F8] mb-4">
                  <Image src={product.image} alt={product.title} fill sizes="260px" loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#FF0422] text-white text-[11px] font-medium font-suisse px-3 py-1 rounded-full">{product.tag}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-suisse text-[1rem] font-semibold text-[#1E1E2A] mb-1 group-hover:text-[#FF0422] transition-colors">{product.title}</h3>
                <p className="font-suisse text-[0.8125rem] text-[#808080] leading-[1.4] line-clamp-2">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex lg:hidden items-center justify-center gap-3 mt-8">
          <button onClick={goToPrev} disabled={currentIndex === 0} aria-label="Produit précédent" className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all border", currentIndex === 0 ? "border-[#E5E5E5] text-[#CCC]" : "border-[#1E1E2A] text-[#1E1E2A]")}>
            <ChevronLeftIcon size={20} />
          </button>
          <button onClick={goToNext} disabled={currentIndex >= maxIndex} aria-label="Produit suivant" className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all border", currentIndex >= maxIndex ? "border-[#E5E5E5] text-[#CCC]" : "border-[#1E1E2A] text-[#1E1E2A]")}>
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
