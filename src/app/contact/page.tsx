import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Marrakech PhotoBooths | Demandez un devis",
  description: "Contactez Marrakech PhotoBooths pour un devis personnalisé de photobooth pour votre événement à Marrakech. Réponse rapide par WhatsApp ou email.",
  alternates: { canonical: "https://www.marrakechphotobooths.com/contact/" },
  openGraph: {
    title: "Contact - Marrakech PhotoBooths",
    description: "Contactez-nous pour un devis personnalisé de photobooth à Marrakech.",
    url: "https://www.marrakechphotobooths.com/contact/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Marrakech PhotoBooths",
    description: "Contactez-nous pour un devis personnalisé de photobooth à Marrakech.",
  },
};

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact - Marrakech PhotoBooths",
    url: "https://www.marrakechphotobooths.com/contact/",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Marrakech PhotoBooths",
      telephone: "+212621189496",
      email: "contact@marrakechphotobooths.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakech",
        addressCountry: "MA",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien de temps pour recevoir un devis ?",
        acceptedAnswer: { "@type": "Answer", text: "Nous vous répondons sous 24 heures avec une offre détaillée adaptée à votre événement." },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en dehors de Marrakech ?",
        acceptedAnswer: { "@type": "Answer", text: "Oui, nous couvrons tout le Maroc. Des frais de déplacement peuvent s'appliquer pour les villes éloignées de Marrakech." },
      },
      {
        "@type": "Question",
        name: "Quel est le délai minimum de réservation ?",
        acceptedAnswer: { "@type": "Answer", text: "Nous recommandons de réserver au moins 2 semaines à l'avance. Pour les périodes haute saison (juin-septembre), 1 mois à l'avance est conseillé." },
      },
      {
        "@type": "Question",
        name: "Comment se passe le paiement ?",
        acceptedAnswer: { "@type": "Answer", text: "Un acompte de 30% est demandé à la réservation. Le solde est réglé le jour de l'événement. Nous acceptons les virements, espèces et cartes bancaires." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
        <div className="pt-[90px] max-md:pt-[75px]">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
        <ContactForm />
      </div>
      {/* Why contact us section */}
      <section className="py-16 max-md:py-10 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-10 text-center">Pourquoi nous contacter ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[1.5rem] p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FF0422]/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-platform text-[1.25rem] font-normal text-[#1E1E2A] mb-2">Devis gratuit et rapide</h3>
              <p className="font-suisse text-[max(14px,1rem)] leading-[1.6] text-[#666]">Réponse sous 24 heures. Pas de frais cachés, pas d&apos;engagement. Recevez une offre adaptée à votre budget et à vos besoins.</p>
            </div>
            <div className="bg-white rounded-[1.5rem] p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FF0422]/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="font-platform text-[1.25rem] font-normal text-[#1E1E2A] mb-2">Installation en 30 minutes</h3>
              <p className="font-suisse text-[max(14px,1rem)] leading-[1.6] text-[#666]">Notre équipe installe et configure tout avant l&apos;arrivée de vos invités. Aucune intervention technique requise de votre part.</p>
            </div>
            <div className="bg-white rounded-[1.5rem] p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FF0422]/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="font-platform text-[1.25rem] font-normal text-[#1E1E2A] mb-2">Support dédié</h3>
              <p className="font-suisse text-[max(14px,1rem)] leading-[1.6] text-[#666]">Un technicien reste sur place pendant toute la durée de votre événement pour assurer le bon fonctionnement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 max-md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-10 text-center">Nos services de photobooth à Marrakech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 p-5 bg-[#F6F6F6] rounded-[1.25rem]">
              <div className="w-10 h-10 rounded-full bg-[#FF0422] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-1">Photobooth pour événements d&apos;entreprise</h3>
                <p className="font-suisse text-[max(14px,0.9375rem)] leading-[1.5] text-[#666]">Branding personnalisé, fonds d&aposécran sur mesure, impressions avec le logo de votre marque. Idéal pour les lancements, salons et team buildings.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#F6F6F6] rounded-[1.25rem]">
              <div className="w-10 h-10 rounded-full bg-[#FF0422] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-1">Photobooth pour mariages</h3>
                <p className="font-suisse text-[max(14px,0.9375rem)] leading-[1.5] text-[#666]">Accessoires fun, impressions personnalisées avec vos initiales, galerie photo en ligne pour partager vos souvenirs.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#F6F6F6] rounded-[1.25rem]">
              <div className="w-10 h-10 rounded-full bg-[#FF0422] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-1">Vidéomaton 360°</h3>
                <p className="font-suisse text-[max(14px,0.9375rem)] leading-[1.5] text-[#666]">Vidéos circulaires en vitesse réelle ou au ralenti. Contenu parfait pour les réseaux sociaux et les campagnes marketing.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-[#F6F6F6] rounded-[1.25rem]">
              <div className="w-10 h-10 rounded-full bg-[#FF0422] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-1">Photobooth IA</h3>
                <p className="font-suisse text-[max(14px,0.9375rem)] leading-[1.5] text-[#666]">Face swap intelligent, filtres beauté, fonds générés par IA. Une expérience technologique qui impressionne vos invités.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-md:py-10 bg-[#F6F6F6]">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-10 text-center">Questions fréquentes</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-[1.25rem] p-6">
              <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-2">Combien de temps pour recevoir un devis ?</h3>
              <p className="font-suisse text-[max(14px,1rem)] leading-[1.6] text-[#666]">Nous vous répondons sous 24 heures avec une offre détaillée adaptée à votre événement.</p>
            </div>
            <div className="bg-white rounded-[1.25rem] p-6">
              <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-2">Intervenez-vous en dehors de Marrakech ?</h3>
              <p className="font-suisse text-[max(14px,1rem)] leading-[1.6] text-[#666]">Oui, nous couvrons tout le Maroc. Des frais de déplacement peuvent s&apos;appliquer pour les villes éloignées de Marrakech.</p>
            </div>
            <div className="bg-white rounded-[1.25rem] p-6">
              <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-2">Quel est le délai minimum de réservation ?</h3>
              <p className="font-suisse text-[max(14px,1rem)] leading-[1.6] text-[#666]">Nous recommandons de réserver au moins 2 semaines à l&apos;avance. Pour les périodes haute saison (juin-septembre), 1 mois à l&apos;avance est conseillé.</p>
            </div>
            <div className="bg-white rounded-[1.25rem] p-6">
              <h3 className="font-platform text-[1.125rem] font-normal text-[#1E1E2A] mb-2">Comment se passe le paiement ?</h3>
              <p className="font-suisse text-[max(14px,1rem)] leading-[1.6] text-[#666]">Un acompte de 30% est demandé à la réservation. Le solde est réglé le jour de l&apos;événement. Nous acceptons les virements, espèces et cartes bancaires.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
