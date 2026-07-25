"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";

const steps = [
  { number: "1", title: "Posez devant le photobooth", description: "Choisissez le fond, les accessoires et les poses. Amusez-vous au maximum !" },
  { number: "2", title: "Service illimité !", description: "Toutes les copies que vous voulez, sans limite. Photos illimitées pour tous vos invités." },
  { number: "3", title: "Impression instantanée", description: "Impression professionnelle avec design personnalisé avec le logo de votre événement." },
];

const extras = [
  { title: "Vinyle personnalisé", description: "Personnalisez le photobooth avec le logo de votre marque.", image: "/images/fotomaton-classic-vinilado-evento.webp" },
  { title: "Photocall personnalisé", description: "Fonds et structures personnalisés pour votre photocall.", image: "/images/Photocall-Red-Carpet-1600x1600.webp" },
  { title: "Papier d'impression", description: "Choisissez entre papier photo brillant ou mat.", image: "/images/fotografias-personalizadas-1600x1600.webp" },
  { title: "Envoi par QR ou email", description: "Envoyez les photos directement sur le mobile de vos invités.", image: "/images/fotografia-personalizada-impresora-smartphone-1600x1600.webp" },
  { title: "Vogue booth", description: "Photobooth avec éclairage professionnel style Vogue.", image: "/images/vogue-photo-booth-led-1600x1600.webp" },
  { title: "Photobooth Miroir", description: "Miroir interactif avec animations et tactile.", image: "/images/Fotomaton-Espejo.webp" },
  { title: "Mosaic Wall", description: "Créez une mosaïque géante avec les photos de tous les invités.", image: "/images/services/Fotomaton-Mosaico-Wall-team-building.webp" },
  { title: "Photobooth zénithal", description: "Perspective zénithale pour des photos créatives.", image: "/images/services/Fotomaton-Barcelona-Cenital-Evento-Corporativo-1600x1600.webp" },
  { title: "Slow motion", description: "Vidéos au ralenti pour des moments épiques.", image: "/images/services/fotomaton-video-360-confeti-boda-1600x1600.webp" },
  { title: "Chroma IA", description: "Fonds virtuels avec technologie chroma key.", image: "/images/services/Fotomaton-IA-ficcion-heroe-1240x1600.webp" },
  { title: "Photocall paillettes", description: "Fond de paillettes avec enseignes néon personnalisées.", image: "/images/letras-madera-iluminadas-1600x1600.webp" },
  { title: "Atrezzo", description: "Accessoires et props amusants pour les photos.", image: "/images/azafato-smartphoto.webp" },
];

const faqItems = [
  { question: "Que puis-je personnaliser du service ?", answer: "Vous pouvez personnaliser le vinyle, le design des bandes d'impression, le filigrane des vidéos, le photocall ou le fond…" },
  { question: "Quelle est la taille des impressions ?", answer: "Les impressions sont de 10x15cm ou 15x20cm, selon le type de photobooth choisi." },
  { question: "Puis-je envoyer la copie numérique aux invités ?", answer: "Oui, nous offrons l'envoi par QR, email HTML ou WhatsApp." },
  { question: "Pouvons-nous collecter des données depuis le photobooth ?", answer: "Oui, nous pouvons intégrer un formulaire digital pour collecter les données des invités." },
  { question: "N'avez-vous qu'un seul type de photobooth ?", answer: "Non, nous proposons plusieurs types : Standard, Smart, Miroir, Mini, Miroir Retro et Réalité Augmentée." },
  { question: "Quels sont les besoins techniques requis ?", answer: "Nous avons besoin d'une prise électrique et d'un espace d'environ 3x3 mètres." },
  { question: "Le service inclut-il un personnel d'assistance ?", answer: "Oui, tous nos services incluent un technicien/opérateur pendant tout l'événement." },
  { question: "Comment fonctionnent le montage et le démontage ?", answer: "Nous nous occupons du montage et du démontage. Nous arrivons entre 30 min et 1 heure avant le début du service." },
];

export default function EventosContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
      <main>
        {/* Hero with image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/Fotomaton-Barcelona-Fotomaton-para-eventos.webp" alt="Photobooth pour événements" fill sizes="100vw" className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 py-[8rem] max-md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-platform text-[5rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-4">Photobooth pour événements</h1>
              <h2 className="font-platform text-[2.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] tracking-[-0.01em] text-white/90 mb-6 max-w-[40ch]">Photobooth idéal pour événements d&apos;entreprise et campagnes marketing</h2>
              <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.5] text-white/80 mb-8 max-w-[60ch]">Notre photobooth est l&apos;outil parfait pour générer de l&apos;engagement, créer des souvenirs inoubliables et renforcer votre marque.</p>
              <Link href="/contact" className="inline-block rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.375rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Demander un devis</Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="features py-[8rem] max-md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[3rem] max-md:text-[1.75rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-12 max-md:mb-8 text-center">Comment ça marche ?</h2>
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
            <h2 className="font-platform text-[3rem] max-md:text-[1.75rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-12 max-md:mb-8 text-center">Extras</h2>
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
            <h2 className="font-platform text-[3rem] max-md:text-[1.75rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-10 max-md:mb-6 text-center">Questions fréquentes</h2>
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
            <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1.1] text-[#1E1E2A] mb-6">Prêt à rendre votre événement inoubliable ?</h2>
            <Link href="/contact" className="inline-block rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.125rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Contactez-nous</Link>
          </div>
        </section>
      </main>
  );
}
