"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons";

const faqItems = [
  {
    question: "Pourquoi choisir Marrakech PhotoBooths ?",
    answer:
      "Chez Marrakech PhotoBooths, nous offrons depuis des années un service professionnel, innovant et hautement apprécié lors d'événements d'entreprise et de mariages. Notre expérience et notre engagement envers l'excellence font de nous le choix préféré de nombreuses marques et de milliers de clients satisfaits.",
  },
  {
    question: "Y a-t-il un minimum d'heures de service ?",
    answer:
      "En général, le temps minimum de service est de 3 heures pour les services de photobooth et de 2 heures pour le spin 360.",
  },
  {
    question: "Y a-t-il un maximum de photos et de copies / vidéos ?",
    answer:
      "En général, les photos, les copies imprimées et les vidéos sont illimitées pendant tout le service.",
  },
  {
    question: "Puis-je personnaliser le service ?",
    answer:
      "La personnalisation des services est l'un de nos points forts. Vous pouvez personnaliser le vinyle, le design des bandes d'impression, le filigrane des vidéos, le photocall ou le fond, créer des vidéos d'entrée et de sortie… Nous vous offrons de nombreuses options !",
  },
  {
    question: "Combien de temps faut-il pour l'installation ?",
    answer:
      "L'installation peut varier selon le lieu de l'événement et le service choisi. Nous arrivons 30 min (mariages) / 1h (événements) avant le début du service pour installer.",
  },
  {
    question: "Comment réserver et payer le service ?",
    answer:
      "Pour confirmer la réservation, il faut effectuer le versement indiqué dans chaque devis. Le reste peut être fait avant ou le jour de l'événement par virement ou en espèces.",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="faqs bg-[#F6F6F6] pt-[10rem] max-md:pt-10 pb-[6rem] max-md:pb-12 -mt-[5rem] max-md:mt-0 relative z-[1] px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <h2 className="font-platform text-[3.375rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#FF0422]">
          Questions fréquentes
        </h2>
        <div className="accordion flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.question}
                className="accordion-item bg-transparent"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={cn(
                    "accordion-button flex w-full items-center justify-between py-5 max-md:py-4 px-5 max-md:px-4 text-left transition-all duration-150 rounded-[10rem] border font-suisse text-[max(14px,1.375rem)] max-md:text-[max(14px,1.125rem)]",
                    isActive
                      ? "border-[#1E1E2A] bg-[#1E1E2A] !text-white"
                      : "border-[#808080] bg-transparent !text-[#1E1E2A] hover:border-[#1E1E2A]"
                  )}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDownIcon
                    size={16}
                    className={cn(
                      "shrink-0 transition-transform duration-300",
                      isActive && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isActive ? "300px" : "0px",
                  }}
                >
                  <p className="px-5 pb-6 text-[#808080] font-suisse text-[max(14px,1.375rem)] max-md:text-[max(14px,1.125rem)] leading-[1.5]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
