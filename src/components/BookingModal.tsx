"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/icons";
import { trackFormSubmission } from "@/lib/gtag";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { title: "Type d'événement", subtitle: "Quel type d'événement organisez-vous ?" },
  { title: "Détails", subtitle: "Quand et où aura lieu l'événement ?" },
  { title: "Service", subtitle: "Quel service vous intéresse ?" },
  { title: "Contact", subtitle: "Vos coordonnées pour le devis" },
];

const eventTypes = [
  { id: "mariage", label: "Mariage", emoji: "💒" },
  { id: "entreprise", label: "Événement d'entreprise", emoji: "🏢" },
  { id: "anniversaire", label: "Anniversaire", emoji: "🎂" },
  { id: "fete", label: "Fête privée", emoji: "🎉" },
  { id: "salon", label: "Salon / Expo", emoji: "🎪" },
  { id: "autre", label: "Autre", emoji: "✨" },
];

const services = [
  { id: "photobooth", label: "Photobooth Classique", desc: "Photos imprimées instantanées" },
  { id: "videomaton360", label: "Vidéomaton 360º", desc: "Vidéos circulaires spectaculaires" },
  { id: "photobooth-ia", label: "Photobooth IA", desc: "Filtres et face swap IA" },
  { id: "glam", label: "Photobooth Glam", desc: "Effet beauté professionnel" },
  { id: "mosaic", label: "Mosaic Wall", desc: "Mur de photos géant" },
  { id: "miroir", label: "Photobooth Miroir", desc: "Miroir interactif tactile" },
  { id: "plusieurs", label: "Plusieurs services", desc: "Combinez et économisez" },
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    eventType: "",
    date: "",
    location: "",
    guests: "",
    service: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const sanitize = (str: string) => str.replace(/[<>&"']/g, "").trim();

  const handleSendWhatsApp = () => {
    const eventTypeLabel = eventTypes.find(e => e.id === formData.eventType)?.label || formData.eventType;
    const serviceLabel = services.find(s => s.id === formData.service)?.label || formData.service;
    
    const message = `Bonjour ! Je souhaite réserver un service de photobooth.

📋 *Détails de l'événement:*
• Type: ${sanitize(eventTypeLabel)}
• Date: ${sanitize(formData.date) || "À définir"}
• Lieu: ${sanitize(formData.location) || "À définir"}
• Nombre d'invités: ${sanitize(formData.guests) || "À définir"}

📸 *Service souhaité:*
• ${sanitize(serviceLabel)}

👤 *Mes coordonnées:*
• Nom: ${sanitize(formData.name)}
• Téléphone: ${sanitize(formData.phone)}
• Email: ${sanitize(formData.email)}

${formData.message ? `💬 *Message:* ${sanitize(formData.message)}` : ""}

Merci !`;

    const encodedMessage = encodeURIComponent(message);
    trackFormSubmission();
    window.open(`https://wa.me/212621189496?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    onClose();
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.eventType !== "";
      case 1: return true;
      case 2: return formData.service !== "";
      case 3: return formData.name !== "" && formData.phone !== "";
      default: return true;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 max-md:p-2">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[1.5rem] w-full max-w-[500px] max-h-[95vh] max-md:max-h-[98vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 max-md:px-4 max-md:py-3 border-b border-[#EEE] shrink-0">
          <div>
            <h3 className="font-platform text-[1.375rem] max-md:text-[1.125rem] font-normal text-[#1E1E2A]">Réserver un service</h3>
            <p className="font-suisse text-[0.8125rem] text-[#808080] mt-0.5">Étape {currentStep + 1} sur {steps.length}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors">
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-5 pt-3 max-md:px-4 max-md:pt-2 shrink-0">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div key={index} className={cn("h-1 flex-1 rounded-full transition-all duration-500", index <= currentStep ? "bg-[#FF0422]" : "bg-[#E5E5E5]")} />
            ))}
          </div>
        </div>

        {/* Step content - scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-4 max-md:px-4 max-md:py-3 min-h-0">
          <h4 className="font-suisse text-[1.0625rem] max-md:text-[1rem] font-medium text-[#1E1E2A] mb-1">{steps[currentStep].title}</h4>
          <p className="font-suisse text-[0.8125rem] text-[#808080] mb-4 max-md:mb-3">{steps[currentStep].subtitle}</p>

          {/* Step 0: Event type */}
          {currentStep === 0 && (
            <div className="grid grid-cols-2 gap-2 max-md:gap-1.5 animate-in fade-in slide-in-from-right-4 duration-300">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormData({ ...formData, eventType: type.id })}
                  className={cn(
                    "flex flex-col items-center gap-1.5 p-3 max-md:p-2.5 rounded-[1rem] border-2 transition-all duration-200 hover:scale-[1.02]",
                    formData.eventType === type.id
                      ? "border-[#FF0422] bg-[#FF0422]/5"
                      : "border-[#E5E5E5] hover:border-[#CCC]"
                  )}
                >
                  <span className="text-xl max-md:text-lg">{type.emoji}</span>
                  <span className="font-suisse text-[0.8125rem] max-md:text-[0.75rem] font-medium text-[#1E1E2A] text-center leading-tight">{type.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 1: Details */}
          {currentStep === 1 && (
            <div className="flex flex-col gap-3 max-md:gap-2.5 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <label className="font-suisse text-[0.8125rem] font-medium text-[#1E1E2A] mb-1 block">Date de l&apos;événement</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#E5E5E5] rounded-[0.75rem] font-suisse text-[0.9375rem] focus:outline-none focus:border-[#FF0422] transition-colors" />
              </div>
              <div>
                <label className="font-suisse text-[0.8125rem] font-medium text-[#1E1E2A] mb-1 block">Lieu de l&apos;événement</label>
                <input type="text" placeholder="Ex: Marrakech, Casablanca..." value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#E5E5E5] rounded-[0.75rem] font-suisse text-[0.9375rem] placeholder-[#BBB] focus:outline-none focus:border-[#FF0422] transition-colors" />
              </div>
              <div>
                <label className="font-suisse text-[0.8125rem] font-medium text-[#1E1E2A] mb-1 block">Nombre d&apos;invités (approximatif)</label>
                <select value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#E5E5E5] rounded-[0.75rem] font-suisse text-[0.9375rem] focus:outline-none focus:border-[#FF0422] transition-colors appearance-none bg-white">
                  <option value="">Sélectionner</option>
                  <option value="Moins de 50">Moins de 50</option>
                  <option value="50-100">50 - 100</option>
                  <option value="100-200">100 - 200</option>
                  <option value="200-500">200 - 500</option>
                  <option value="Plus de 500">Plus de 500</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Service */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-2 max-md:gap-1.5 animate-in fade-in slide-in-from-right-4 duration-300">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setFormData({ ...formData, service: service.id })}
                  className={cn(
                    "flex items-start gap-3 p-3 max-md:p-2.5 rounded-[1rem] border-2 text-left transition-all duration-200",
                    formData.service === service.id
                      ? "border-[#FF0422] bg-[#FF0422]/5"
                      : "border-[#E5E5E5] hover:border-[#CCC]"
                  )}
                >
                  <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all", formData.service === service.id ? "border-[#FF0422]" : "border-[#CCC]")}>
                    {formData.service === service.id && <div className="w-2.5 h-2.5 rounded-full bg-[#FF0422]" />}
                  </div>
                  <div>
                    <span className="font-suisse text-[0.875rem] font-medium text-[#1E1E2A] block">{service.label}</span>
                    <span className="font-suisse text-[0.75rem] text-[#808080]">{service.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 3: Contact */}
          {currentStep === 3 && (
            <div className="flex flex-col gap-3 max-md:gap-2.5 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <label className="font-suisse text-[0.8125rem] font-medium text-[#1E1E2A] mb-1 block">Votre nom *</label>
                <input type="text" placeholder="Nom complet" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#E5E5E5] rounded-[0.75rem] font-suisse text-[0.9375rem] placeholder-[#BBB] focus:outline-none focus:border-[#FF0422] transition-colors" />
              </div>
              <div>
                <label className="font-suisse text-[0.8125rem] font-medium text-[#1E1E2A] mb-1 block">Téléphone *</label>
                <input type="tel" placeholder="+212 6XX XX XX XX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#E5E5E5] rounded-[0.75rem] font-suisse text-[0.9375rem] placeholder-[#BBB] focus:outline-none focus:border-[#FF0422] transition-colors" />
              </div>
              <div>
                <label className="font-suisse text-[0.8125rem] font-medium text-[#1E1E2A] mb-1 block">Email</label>
                <input type="email" placeholder="email@exemple.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#E5E5E5] rounded-[0.75rem] font-suisse text-[0.9375rem] placeholder-[#BBB] focus:outline-none focus:border-[#FF0422] transition-colors" />
              </div>
              <div>
                <label className="font-suisse text-[0.8125rem] font-medium text-[#1E1E2A] mb-1 block">Message (optionnel)</label>
                <textarea placeholder="Précisions sur votre événement..." rows={2} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#E5E5E5] rounded-[0.75rem] font-suisse text-[0.9375rem] placeholder-[#BBB] focus:outline-none focus:border-[#FF0422] transition-colors resize-none" />
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="flex gap-3 px-5 py-4 max-md:px-4 max-md:py-3 border-t border-[#EEE] shrink-0">
          {currentStep > 0 && (
            <button onClick={handleBack} className="flex-1 py-2.5 max-md:py-2 rounded-full border border-[#E5E5E5] font-suisse text-[0.875rem] font-medium text-[#1E1E2A] hover:bg-[#F5F5F5] transition-colors">
              Retour
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button onClick={handleNext} disabled={!canProceed()} className={cn("flex-1 py-2.5 max-md:py-2 rounded-full font-suisse text-[0.875rem] font-medium transition-all", canProceed() ? "bg-[#FF0422] text-white hover:bg-[#E0031F]" : "bg-[#E5E5E5] text-[#BBB] cursor-not-allowed")}>
              Continuer
            </button>
          ) : (
            <button onClick={handleSendWhatsApp} disabled={!canProceed()} className={cn("flex-1 py-2.5 max-md:py-2 rounded-full font-suisse text-[0.875rem] font-medium flex items-center justify-center gap-2 transition-all", canProceed() ? "bg-[#25D366] text-white hover:bg-[#128C7E]" : "bg-[#E5E5E5] text-[#BBB] cursor-not-allowed")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Envoyer sur WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
