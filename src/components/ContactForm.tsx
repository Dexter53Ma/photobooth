"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function ContactForm() {
  const [formData, setFormData] = useState({ nom: "", email: "", telephone: "", typeEvenement: "", date: "", message: "", legal: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message. Nous vous contacterons rapidement.");
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/fotomaton-eventos-empresa-1600x1600.webp" alt="Contactez Marrakech PhotoBooths" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 py-10 max-md:py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-platform text-[4rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-3">Contactez-nous</h1>
            <p className="font-suisse text-[max(14px,1.125rem)] leading-[1.5] text-white/80 max-w-[50ch] mx-auto">Des expériences inoubliables pour des jours inoubliables. Demandez votre devis personnalisé.</p>
          </div>
        </div>
      </section>

      {/* Contact info bar - visible on all screens */}
      <section className="bg-[#1E1E2A] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <a href="tel:+212621189496" className="flex items-center gap-2 font-suisse text-[0.875rem] max-md:text-[0.8125rem] text-white/90 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +212 6 21 18 94 96
          </a>
          <a href="mailto:contact@marrakechphotobooth.com" className="flex items-center gap-2 font-suisse text-[0.875rem] max-md:text-[0.8125rem] text-white/90 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            contact@marrakechphotobooth.com
          </a>
          <span className="flex items-center gap-2 font-suisse text-[0.875rem] max-md:text-[0.8125rem] text-white/70">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Marrakech, Maroc
          </span>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-10 max-md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12">
            {/* Left: Info - hidden on mobile to save space */}
            <div className="flex-col gap-6 hidden lg:flex">
              <div>
                <h2 className="font-suisse text-[1.75rem] font-medium leading-[1.2] text-[#1E1E2A] mb-3">Parlons de votre projet</h2>
                <p className="font-suisse text-[max(14px,1.0625rem)] leading-[1.6] text-[#444] mb-3">Vous avez un événement ou une célébration et vous souhaitez surprendre vos invité(e)s ? Contactez-nous pour un devis personnalisé.</p>
                <p className="font-suisse text-[max(14px,1.0625rem)] leading-[1.6] text-[#444]">Chez Marrakech PhotoBooths, nous avons tous les outils, l&apos;expérience et la motivation pour rendre votre événement unique.</p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image src="/images/about/Videomaton-360-Evento-corporativo.webp" alt="Notre showroom" fill sizes="50vw" className="object-cover object-center" />
              </div>

              <div className="flex flex-col gap-3 p-5 bg-[#F6F6F6] rounded-[1.5rem]">
                <h3 className="font-platform text-[1.25rem] font-normal leading-[1] text-[#1E1E2A]">Nos coordonnées</h3>
                <a href="tel:+212621189496" className="font-suisse text-[max(14px,1rem)] text-[#FF0422] hover:underline">+212 6 21 18 94 96</a>
                <a href="mailto:contact@marrakechphotobooth.com" className="font-suisse text-[max(14px,1rem)] text-[#FF0422] hover:underline">contact@marrakechphotobooth.com</a>
                <p className="font-suisse text-[max(14px,1rem)] text-[#666]">Marrakech, Maroc</p>
              </div>
            </div>

            {/* Right: Form - full width on mobile */}
            <div className="p-5 max-md:p-4 bg-[#F6F6F6] rounded-[1.5rem]">
              <h3 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">Demandez un devis</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-md:gap-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-md:gap-2.5">
                  <div>
                    <label htmlFor="nom" className="block font-suisse text-[0.8125rem] text-[#666] mb-1">Nom complet</label>
                    <input type="text" id="nom" placeholder="Votre nom" required maxLength={100} value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#DDD] rounded-[0.875rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] focus:ring-2 focus:ring-[#FF0422]/10 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-suisse text-[0.8125rem] text-[#666] mb-1">Email</label>
                    <input type="email" id="email" placeholder="votre@email.com" required maxLength={254} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#DDD] rounded-[0.875rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] focus:ring-2 focus:ring-[#FF0422]/10 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-md:gap-2.5">
                  <div>
                    <label htmlFor="telephone" className="block font-suisse text-[0.8125rem] text-[#666] mb-1">Téléphone</label>
                    <input type="tel" id="telephone" placeholder="+212 6XX XX XX XX" required maxLength={20} value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#DDD] rounded-[0.875rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] focus:ring-2 focus:ring-[#FF0422]/10 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="typeEvenement" className="block font-suisse text-[0.8125rem] text-[#666] mb-1">Type d&apos;événement</label>
                    <select id="typeEvenement" value={formData.typeEvenement} onChange={(e) => setFormData({ ...formData, typeEvenement: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#DDD] rounded-[0.875rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white focus:outline-none focus:border-[#FF0422] focus:ring-2 focus:ring-[#FF0422]/10 transition-all appearance-none">
                      <option value="">Sélectionnez un type</option>
                      <option value="entreprise">Événement entreprise</option>
                      <option value="mariage">Mariages & Fêtes</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="date" className="block font-suisse text-[0.8125rem] text-[#666] mb-1">Date souhaitée</label>
                  <input type="date" id="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#DDD] rounded-[0.875rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white focus:outline-none focus:border-[#FF0422] focus:ring-2 focus:ring-[#FF0422]/10 transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-suisse text-[0.8125rem] text-[#666] mb-1">Message</label>
                  <textarea id="message" placeholder="Décrivez votre événement (lieu, nombre d'invités, durée souhaitée...)" rows={3} required maxLength={2000} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-2.5 max-md:py-2 border border-[#DDD] rounded-[0.875rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] focus:ring-2 focus:ring-[#FF0422]/10 transition-all resize-y" />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="legal" required checked={formData.legal} onChange={(e) => setFormData({ ...formData, legal: e.target.checked })} className="mt-1 w-4 h-4 accent-[#FF0422] shrink-0" />
                  <label htmlFor="legal" className="font-suisse text-[max(14px,0.8125rem)] text-[#666] leading-snug">J&apos;accepte la <Link href="/politique-confidentialite" className="text-[#FF0422] hover:underline">politique de confidentialité</Link></label>
                </div>
                <button type="submit" className="w-full rounded-full bg-[#FF0422] px-8 py-3 max-md:py-2.5 text-[max(14px,1.0625rem)] font-medium text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse active:scale-[0.98]">Envoyer la demande</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
