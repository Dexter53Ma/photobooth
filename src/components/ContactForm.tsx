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
          <Image src="/images/fotomaton-eventos-empresa-1600x1600.jpg" alt="Contactez Marrakech PhotoBooths" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 py-[6rem] max-md:py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-platform text-[4rem] max-md:text-[2.5rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-4">Contactez-nous</h1>
            <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.5] text-white/80 max-w-[50ch] mx-auto">Des expériences inoubliables pour des jours inoubliables. Demandez votre devis personnalisé.</p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-[6rem] max-md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-suisse text-[1.75rem] max-md:text-[1.25rem] font-medium leading-[1.2] text-[#1E1E2A] mb-4">Parlons de votre projet</h2>
                <p className="font-suisse text-[max(14px,1.125rem)] leading-[1.6] text-[#444] mb-4">Vous avez un événement ou une célébration et vous souhaitez surprendre vos invité(e)s ? Contactez-nous pour un devis personnalisé.</p>
                <p className="font-suisse text-[max(14px,1.125rem)] leading-[1.6] text-[#444]">Chez Marrakech PhotoBooths, nous avons tous les outils, l&apos;expérience et la motivation pour rendre votre événement unique.</p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image src="/images/about/Videomaton-360-Evento-corporativo.jpg" alt="Notre showroom" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
              </div>

              <div className="flex flex-col gap-4 p-6 bg-[#F6F6F6] rounded-[1.5rem]">
                <h3 className="font-platform text-[1.25rem] font-normal leading-[1] text-[#1E1E2A]">Nos coordonnées</h3>
                <a href="tel:+212621189496" className="font-suisse text-[max(14px,1rem)] text-[#FF0422] hover:underline">+212 6 21 18 94 96</a>
                <a href="mailto:contact@marrakechphotobooth.com" className="font-suisse text-[max(14px,1rem)] text-[#FF0422] hover:underline">contact@marrakechphotobooth.com</a>
                <p className="font-suisse text-[max(14px,1rem)] text-[#666]">Marrakech, Maroc</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 max-md:p-4 bg-[#F6F6F6] rounded-[1.5rem]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div><input type="text" placeholder="Nom" required maxLength={100} value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} className="w-full px-5 py-3 border border-[#DDD] rounded-[1rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] transition-all" /></div>
                <div><input type="email" placeholder="Email" required maxLength={254} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-3 border border-[#DDD] rounded-[1rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] transition-all" /></div>
                <div><input type="tel" placeholder="Téléphone" required maxLength={20} value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} className="w-full px-5 py-3 border border-[#DDD] rounded-[1rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] transition-all" /></div>
                <div>
                  <select value={formData.typeEvenement} onChange={(e) => setFormData({ ...formData, typeEvenement: e.target.value })} className="w-full px-5 py-3 border border-[#DDD] rounded-[1rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white focus:outline-none focus:border-[#FF0422] transition-all appearance-none">
                    <option value="">Type d&apos;événement</option>
                    <option value="entreprise">Événement entreprise</option>
                    <option value="mariage">Mariages & Fêtes</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div><input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-5 py-3 border border-[#DDD] rounded-[1rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white focus:outline-none focus:border-[#FF0422] transition-all" /></div>
                <div><textarea placeholder="Message (lieu, nombre d'invités, durée souhaitée...)" rows={5} required maxLength={2000} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-3 border border-[#DDD] rounded-[1rem] text-[max(14px,1rem)] font-suisse text-[#333] bg-white placeholder-[#999] focus:outline-none focus:border-[#FF0422] transition-all resize-y" /></div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="legal" required checked={formData.legal} onChange={(e) => setFormData({ ...formData, legal: e.target.checked })} className="mt-1 w-4 h-4 accent-[#FF0422]" />
                  <label htmlFor="legal" className="font-suisse text-[max(14px,0.875rem)] text-[#666]">J&apos;accepte la <Link href="/politique-confidentialite" className="text-[#FF0422] hover:underline">politique de confidentialité</Link></label>
                </div>
                <button type="submit" className="w-full rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.125rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
