"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";

const steps = [
  { number: "1", title: "Montez sur la plateforme", description: "La plateforme tourne autour de la caméra capturant une vidéo 360º complète." },
  { number: "2", title: "Amusez-vous !", description: "Dansez, sautez, posez... Ralenti ou vitesse réelle, à votre choix." },
  { number: "3", title: "Partagez instantanément", description: "Recevez votre vidéo par QR, WhatsApp ou email." },
];

const extras = [
  { title: "Vinyle personnalisé", description: "Personnalisez la plateforme avec votre marque.", image: "/images/fotomaton-classic-vinilado-evento.jpg" },
  { title: "Photocall courbe", description: "Fond courbe personnalisé pour l'environnement.", image: "/images/Photocall-Red-Carpet-1600x1600.jpg" },
  { title: "Cabine LED", description: "Cabine avec éclairage LED RGB personnalisable.", image: "/images/vogue-photo-booth-led-1600x1600.jpg" },
  { title: "Confettis", description: "Canon à confettis pour des vidéos spectaculaires.", image: "/images/services/fotomaton-video-360-confeti-boda-1600x1600.jpg" },
  { title: "Pompes de savon", description: "Machine à bulles pour un effet magique.", image: "/images/services/PHOTO-2024-06-26-12-23-28.jpg" },
  { title: "Pistolet à billets", description: "Pluie de faux billets pour des vidéos épiques.", image: "/images/services/brazo-robotico-1600x1600.jpg" },
];

const platforms = [
  { name: "Plateforme standard", size: "90x90cm", description: "Idéale pour 1-2 personnes. Parfaite pour les événements avec espace réduit.", image: "/images/hero/videomaton-360.jpg" },
  { name: "Plateforme grande", size: "120x120cm", description: "Pour des groupes de jusqu'à 4 personnes. Idéale pour mariages et fêtes.", image: "/images/hero/videomaton-photocall-personalizado.jpg" },
];

const faqItems = [
  { question: "Combien de personnes peuvent monter ?", answer: "La plateforme standard accueille 1-2 personnes et la grande jusqu'à 4 personnes." },
  { question: "La vidéo est-elle au ralenti ?", answer: "Elle peut être au ralenti ou en vitesse réelle, à votre choix." },
  { question: "Combien de temps dure chaque vidéo ?", answer: "Chaque vidéo dure entre 15 et 30 secondes, selon la configuration." },
  { question: "Peut-on personnaliser le fond ?", answer: "Oui, nous ajoutons un filigrane personnalisé avec le logo de votre événement." },
];

export default function VideomatonContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
      <main>
        {/* Hero with video/image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/hero/videomaton-360.jpg" alt="Vidéomaton 360" fill sizes="100vw" className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 py-[8rem] max-md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-platform text-[6.5rem] max-md:text-[2.5rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-4">Vidéomaton 360</h1>
              <h2 className="font-platform text-[3rem] max-md:text-[1.5rem] font-normal leading-[1.1] tracking-[-0.01em] text-white/90 mb-6 max-w-[40ch]">Créez des vidéos circulaires spectaculaires avec le Spin 360º</h2>
              <p className="font-suisse text-[max(14px,1.375rem)] leading-[1.5] text-white/80 mb-8 max-w-[60ch]">L&apos;attraction star de tout événement. Une plateforme giratoire qui capture des vidéos sous tous les angles.</p>
              <Link href="/contact" className="inline-block rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.375rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Demander un devis</Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-[8rem] max-md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[4rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-16 max-md:mb-10 text-center">Comment ça marche ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center gap-4 p-8 bg-[#F6F6F6] rounded-[1.5rem]">
                  <span className="font-platform text-[5rem] max-md:text-[3rem] font-normal leading-[1] text-[#FF0422]">{step.number}</span>
                  <h3 className="font-suisse text-[max(14px,1.375rem)] font-medium leading-[1.2] text-[#1E1E2A]">{step.title}</h3>
                  <p className="font-suisse text-[max(14px,1.125rem)] leading-[1.5] text-[#808080]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms with images */}
        <section className="py-[8rem] max-md:py-16 bg-[#F6F6F6]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[4rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-16 max-md:mb-10 text-center">Plateformes disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform) => (
                <div key={platform.name} className="group overflow-hidden rounded-[1.5rem] bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={platform.image} alt={platform.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-platform text-[1.75rem] font-normal leading-[1] text-[#1E1E2A] mb-2">{platform.name}</h3>
                    <p className="font-platform text-[1.25rem] text-[#FF0422] mb-3">{platform.size}</p>
                    <p className="font-suisse text-[max(14px,1rem)] leading-[1.5] text-[#666]">{platform.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extras with images */}
        <section className="bg-[#1E1E2A] py-[8rem] max-md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[4rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-16 max-md:mb-10 text-center">Extras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {extras.map((extra) => (
                <div key={extra.title} className="group overflow-hidden rounded-[1.5rem]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={extra.image} alt={extra.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-platform text-[1.5rem] font-normal leading-[1] text-white mb-2">{extra.title}</h3>
                      <p className="font-suisse text-[max(14px,0.875rem)] leading-[1.4] text-white/80">{extra.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs bg-[#F6F6F6] pt-[8rem] max-md:pt-10 pb-[8rem] max-md:pb-16 px-4">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[4rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-12 max-md:mb-8 text-center">Questions fréquentes</h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, index) => {
                const isActive = activeFaq === index;
                return (
                  <div key={item.question}>
                    <button type="button" onClick={() => setActiveFaq(isActive ? null : index)} className={`flex w-full items-center justify-between py-4 px-5 text-left transition-all duration-150 rounded-[1.5rem] border font-suisse text-[max(14px,1.125rem)] ${isActive ? "border-[#1E1E2A] bg-[#1E1E2A] !text-white" : "border-[#E5E5E5] bg-white !text-[#1E1E2A] hover:border-[#1E1E2A]"}`}>
                      <span className="pr-4 font-medium">{item.question}</span>
                      <ChevronDownIcon size={16} className={`shrink-0 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    </button>
                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isActive ? "300px" : "0px" }}>
                      <p className="px-5 py-4 text-[#666] font-suisse text-[max(14px,1rem)] leading-[1.6]">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[6rem] max-md:py-12 text-center bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1.1] text-[#1E1E2A] mb-6">Prêt à créer des vidéos inoubliables ?</h2>
            <Link href="/contact" className="inline-block rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.125rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Contactez-nous</Link>
          </div>
        </section>
      </main>
  );
}
