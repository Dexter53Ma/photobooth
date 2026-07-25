"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";

const steps = [
  { number: "1", title: "Capturez les moments magiques", description: "Vos invités posent devant le photobooth avec des accessoires élégants. Des souvenirs uniques pour chaque couple et invité." },
  { number: "2", title: "Photos illimitées", description: "Toutes les copies que vos invités veulent, sans limite. Chacun repart avec un souvenir de votre mariage." },
  { number: "3", title: "Impression instantanée", description: "Impression professionnelle avec un design personnalisé aux couleurs de votre mariage : noms, date et motifs." },
];

const extras = [
  { title: "Photocall personnalisé", description: "Fond floral, rideaux élégants ou structure sur-mesure pour votre photocall de mariage.", image: "/images/fotografo-photocall-boda-1600x1600.webp" },
  { title: "Lettres lumineuses", description: "Lettres géantes éclairées avec vos initiales ou le mot 'LOVE' pour décorer la salle.", image: "/images/letras-iluminadas-boda-E-J-madera.webp" },
  { title: "Vinyle personnalisé", description: "Habillage du photobooth aux couleurs de votre mariage avec vos noms et votre date.", image: "/images/fotomaton-classic-vinilado-evento.webp" },
  { title: "Impression papier premium", description: "Papier photo brillant ou mat avec bordure personnalisée aux couleurs de votre thème.", image: "/images/fotografias-personalizadas-1600x1600.webp" },
  { title: "Envoi par QR ou email", description: "Vos invités reçoivent leurs photos directement sur leur smartphone par QR code ou email.", image: "/images/fotografia-personalizada-impresora-smartphone-1600x1600.webp" },
  { title: "Photobooth 360°", description: "Plateforme rotative pour des vidéos spectaculaires avec confettis et effets slow-motion.", image: "/images/services/fotomaton-video-360-confeti-boda-1600x1600.webp" },
  { title: "Photobooth Miroir", description: "Miroir interactif avec animations, tactile et messages personnalisés pour vos invités.", image: "/images/Fotomaton-Espejo.webp" },
  { title: "Vogue Booth", description: "Éclairage professionnel style magazine pour des portraits glamour de vos invités.", image: "/images/vogue-photo-booth-led-1600x1600.webp" },
  { title: "Mosaic Wall", description: "Créez une mosaïque géante avec les photos de tous vos invités — une œuvre collective unique.", image: "/images/services/Fotomaton-Mosaico-Wall-team-building.webp" },
  { title: "Chroma IA", description: "Fonds virtuels magiques avec intelligence artificielle : paysages de conte de fées et décors féeriques.", image: "/images/services/Fotomaton-IA-ficcion-heroe-1240x1600.webp" },
  { title: "Photobooth Mini", description: "Compact et élégant, idéal pour les espaces restreints sans compromis sur la qualité.", image: "/images/fotomaton-mini-boda.webp" },
  { title: "Atrezzo & accessoires", description: "Chapeaux, lunettes, panneaux humoristiques et accessoires romantiques pour des photos fun.", image: "/images/azafato-smartphoto.webp" },
];

const faqItems = [
  { question: "Que puis-je personnaliser pour mon mariage ?", answer: "Tout ! Le design des impressions, le vinyle du photobooth, le photocall, les accessoires, le fond photo, et même les animations du photobooth miroir. Nous adaptons chaque élément à votre thème de mariage." },
  { question: "Quelle est la taille des impressions ?", answer: "Les impressions sont de 10x15cm ou 15x20cm selon le photobooth choisi. Le design inclut vos noms, la date du mariage et vos motifs décoratifs." },
  { question: "Le photobooth peut-il fonctionner en extérieur ?", answer: "Oui, à condition d'avoir un espace couvert ou un chapiteau pour protéger le matériel. Nous avons besoin d'une prise électrique et d'environ 3x3 mètres d'espace." },
  { question: "Combien de temps dure le service ?", answer: "Nos formules mariage commencent généralement à 4 heures de service, extensible selon vos besoins. Le service couvre le cocktail, le dîner et la soirée dansante." },
  { question: "Le technicien est-il inclus ?", answer: "Oui, tous nos services incluent un technicien/opérateur professionnel pendant toute la durée de l'événement. Il gère le montage, le démontage et assiste vos invités." },
  { question: "Pouvons-nous recevoir toutes les photos après le mariage ?", answer: "Oui ! Nous vous offrons un accès à toutes les photos et vidéos prises pendant l'événement, disponibles en téléchargement haute résolution." },
  { question: "Quand réservez-vous le créneau ?", answer: "Nous vous conseillons de réserver 3 à 6 mois à l'avance, surtout pour les mariages en haute saison (mai-septembre). Contactez-nous pour vérifier la disponibilité de votre date." },
  { question: "Comment fonctionnent le montage et le démontage ?", answer: "Nous arrivons entre 30 minutes et 1 heure avant le début du service pour le montage. Le démontage se fait à la fin de la prestation sans déranger vos invités." },
];

export default function MariagesContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/fotomaton-pantalla-lateral-boda.webp" alt="Photobooth pour mariage" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 py-[8rem] max-md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-platform text-[6.5rem] max-md:text-[2.5rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-4">Photobooth pour mariages</h1>
            <h2 className="font-platform text-[3rem] max-md:text-[1.5rem] font-normal leading-[1.1] tracking-[-0.01em] text-white/90 mb-6 max-w-[40ch]">Créez des souvenirs inoubliables pour le plus beau jour de votre vie</h2>
            <p className="font-suisse text-[max(14px,1.375rem)] leading-[1.5] text-white/80 mb-8 max-w-[60ch]">Notre photobooth apporte une touche de fun et d&apos;élégance à votre mariage. Des photos personnalisées que vos invités garderont précieusement.</p>
            <Link href="/contact" className="inline-block rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.375rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Demander un devis mariage</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="features py-[8rem] max-md:py-16 bg-white">
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

      {/* Extras with images */}
      <section className="bg-[#1E1E2A] py-[8rem] max-md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-platform text-[4rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-16 max-md:mb-10 text-center">Extras mariage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {extras.map((extra) => (
              <div key={extra.title} className="group overflow-hidden rounded-[1.5rem]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={extra.image} alt={extra.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-platform text-[1.75rem] max-md:text-[1.25rem] font-normal leading-[1] text-white mb-2">{extra.title}</h3>
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
          <h2 className="font-platform text-[4rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-12 max-md:mb-8 text-center">Questions fréquentes — Mariages</h2>
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
          <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1.1] text-[#1E1E2A] mb-6">Prêt à rendre votre mariage inoubliable ?</h2>
          <Link href="/contact" className="inline-block rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.125rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Demandez votre devis gratuit</Link>
        </div>
      </section>
    </main>
  );
}
