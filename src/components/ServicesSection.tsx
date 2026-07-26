"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  image: string;
  category: string[];
  slug: string;
}

const services: Service[] = [
  { title: "Photobooth Classique", description: "Personnalisez avec votre logo ou image corporative.", image: "/services section imgs/images-1.jpeg", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Vidéomaton Spin 360º", description: "Créez des vidéos circulaires en vitesse réelle ou au ralenti.", image: "/services section imgs/images-2.jpeg", category: ["evenements", "mariages"], slug: "/videomaton-360" },
  { title: "Photobooth Smart", description: "À la pointe de la technologie et du design.", image: "/services section imgs/images-3.jpeg", category: ["evenements"], slug: "/photobooth-evenements" },
  { title: "Photobooth IA", description: "Devenez qui vous voulez avec le nouveau face swap.", image: "/services section imgs/images-4.jpeg", category: ["evenements"], slug: "/photobooth-evenements" },
  { title: "Photobooth Glam", description: "Plus de beauté, moins d'imperfections… Très Kardashian.", image: "/services section imgs/images-5.jpeg", category: ["mariages"], slug: "/photobooth-evenements" },
  { title: "Photobooth Signature", description: "Collectez signatures et messages vidéo de tous vos invités.", image: "/services section imgs/images-6.jpeg", category: ["evenements"], slug: "/photobooth-evenements" },
  { title: "Photobooth Catwalk", description: "Défilez devant la caméra comme Naomi Campbell.", image: "/services section imgs/images-7.jpeg", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Vogue Booth", description: "Créez des vidéos avec un décor digne d'un clip des années 2000.", image: "/images/vogue-photo-booth-led-1600x1600.webp", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Glambot Robotique", description: "Créez des vidéos avec un bras robotique comme aux Oscars !", image: "/images/services/brazo-robotico-1600x1600.webp", category: ["evenements"], slug: "/photobooth-evenements" },
  { title: "Photobooth Miroir", description: "Posez devant le miroir et déclenchez !", image: "/images/Fotomaton-Espejo.webp", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Mosaic Wall", description: "Créez un photo-mural comme expérience de team building.", image: "/images/services/Fotomaton-Mosaico-Wall-team-building.webp", category: ["evenements"], slug: "/photobooth-evenements" },
  { title: "Photocall Tapis Rouge", description: "Nombreux fonds et moquetas pour donner à votre événement le niveau qu'il mérite.", image: "/images/Photocall-Red-Carpet-1600x1600.webp", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Photobooth Zenithal", description: "Donnez à vos photos une nouvelle perspective.", image: "/images/services/Fotomaton-Barcelona-Cenital-Evento-Corporativo-1600x1600.webp", category: ["evenements"], slug: "/photobooth-evenements" },
  { title: "Printoku", description: "Imprimez les photos réalisées par les invités depuis leurs appareils.", image: "/images/fotografias-personalizadas-1600x1600.webp", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Lettres Géantes", description: "Créez un selfie-corner idéal avec vos initiales.", image: "/images/letras-madera-iluminadas-1600x1600.webp", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Purikura", description: "Unique et venu du Japon… très Kawaii !", image: "/images/products/fotomaton-purikura-maquina.webp", category: ["evenements", "mariages"], slug: "/photobooth-evenements" },
  { title: "Photographe Itinérant", description: "Capturez et imprimez les meilleurs moments.", image: "/images/Fotografo-itinerante.webp", category: ["evenements"], slug: "/photobooth-evenements" },
  { title: "Hôte(sse) Smartphoto", description: "Nous vous arrachons un sourire et une impression personnalisée !", image: "/images/azafato-smartphoto.webp", category: ["evenements"], slug: "/photobooth-evenements" },
];

const tabs = [
  { id: "todos", label: "Tous" },
  { id: "evenements", label: "Événements" },
  { id: "mariages", label: "Mariages & Fêtes" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("todos");

  const filteredServices =
    activeTab === "todos"
      ? services
      : services.filter((s) => s.category.includes(activeTab));

  return (
    <section id="services" className="relative overflow-hidden py-[6rem] max-md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-platform text-[3.5rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
            Nos Services
          </h2>
          <p className="font-suisse text-[max(14px,1.125rem)] text-[#666] max-w-[50ch] mx-auto">
            Découvrez notre gamme complète de photobooths et services pour rendre votre événement unique.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "font-suisse cursor-pointer rounded-full px-5 py-2 text-[14px] font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-[#1E1E2A] text-white shadow-lg"
                  : "bg-[#F5F5F5] text-[#666] hover:bg-[#E5E5E5] hover:text-[#1E1E2A]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Link
              key={service.title}
              href={service.slug}
              className="group relative overflow-hidden rounded-[1rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={480}
                  height={360}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-suisse text-[1.125rem] font-semibold text-white mb-1 drop-shadow-md">
                  {service.title}
                </h3>
                <p className="font-suisse text-[0.8125rem] text-white/80 leading-[1.4] line-clamp-2 drop-shadow-sm">
                  {service.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[0.75rem] font-medium text-white/90 group-hover:text-white transition-colors">
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
