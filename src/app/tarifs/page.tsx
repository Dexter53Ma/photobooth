import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Tarifs - Marrakech PhotoBooths | Prix location photobooth Marrakech",
  description: "Découvrez nos tarifs de location de photobooth pour événements et mariages à Marrakech. Forfaits à partir de 2 500 MAD. Devis gratuit et personnalisé.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/tarifs" },
  openGraph: {
    title: "Tarifs - Marrakech PhotoBooths",
    description: "Forfaits de location de photobooth à Marrakech. À partir de 2 500 MAD.",
    url: "https://MarrakechPhotoBooth.com/tarifs",
  },
};

const plans = [
  {
    name: "Premium",
    price: "2 500",
    currency: "MAD",
    duration: "4h de service",
    description: "Notre forfait complet pour mariages et événements d'entreprise.",
    features: [
      "Photobooth au choix",
      "Photos & vidéos illimitées",
      "Impression haute qualité",
      "Accessoires premium",
      "Technicien dédié",
      "Personnalisation complète",
      "Partage QR / WhatsApp",
      "Galerie en ligne",
    ],
    highlighted: true,
  },
];

const addOns = [
  { name: "Vidéomaton Spin 360°", price: "2 000", unit: "/ 3h", description: "Vidéos circulaires slow motion spectaculaires." },
  { name: "Photobooth IA", price: "1 800", unit: "/ 3h", description: "Face swap et fonds générés par intelligence artificielle." },
  { name: "Photobooth Glam", price: "1 600", unit: "/ 3h", description: "Effet beauté professionnel style Kardashian." },
  { name: "Photobooth Miroir", price: "1 800", unit: "/ 3h", description: "Miroir interactif tactile avec animations." },
  { name: "Mosaic Wall", price: "2 500", unit: "/ événement", description: "Photo-mural géant pour team building." },
  { name: "Lettres Géantes", price: "800", unit: "/ événement", description: "Lettres illuminées de 120cm pour selfie corner." },
  { name: "Photocall Tapis Rouge", price: "1 200", unit: "/ événement", description: "Décomplet avec fond et moquette premium." },
  { name: "Heure supplémentaire", price: "500", unit: "/ heure", description: "Extension de service sur demande." },
];

const faqItems = [
  {
    question: "Comment réserver un service ?",
    answer: "Contactez-nous par WhatsApp, téléphone ou via notre formulaire de contact. Nous vous enverrons un devis personnalisé sous 24h. La confirmation se fait avec un acompte.",
  },
  {
    question: "Les prix incluent-ils le déplacement ?",
    answer: "Les tarifs incluent le déplacement dans un rayon de 30km autour de Marrakech. Au-delà, des frais de déplacement supplémentaires peuvent s'appliquer.",
  },
  {
    question: "Puis-je combiner plusieurs services ?",
    answer: "Oui ! Nous offrons des réductions pour les combinaisons de services. Contactez-nous pour un devis personnalisé adapté à votre événement.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les virements bancaires et les espèces. Un acompte de 30% est requis pour confirmer la réservation.",
  },
];

export default function Tarifs() {
  return (
    <>
      <Navbar />
      <main className="pt-[90px] max-md:pt-[75px]">
        {/* Hero */}
        <section className="bg-[#F6F6F6] py-[5rem] max-md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="font-platform text-[4rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
              Nos Tarifs
            </h1>
            <p className="font-suisse text-[max(14px,1.125rem)] text-[#666] max-w-[55ch] mx-auto">
              Des forfaits clairs et compétitifs pour rendre votre événement inoubliable. Tous nos prix sont en dirhams marocains (MAD).
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-[5rem] max-md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex justify-center">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative flex flex-col rounded-[1.5rem] p-6 lg:p-10 transition-all duration-300 bg-[#1E1E2A] text-white shadow-2xl max-w-lg w-full"
                >
                  <div className="mb-6">
                    <h3 className="font-platform text-[1.5rem] font-normal leading-[1] mb-2 text-white">
                      {plan.name}
                    </h3>
                    <p className="font-suisse text-[0.875rem] leading-[1.5] text-white/70">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-suisse text-[1rem] text-white/60">À partir de</span>
                      <span className="font-platform text-[3.5rem] max-md:text-[3rem] font-normal leading-[1] text-white">
                        {plan.price}
                      </span>
                      <span className="font-suisse text-[1rem] text-white/60">
                        {plan.currency}
                      </span>
                    </div>
                    <span className="font-suisse text-[0.875rem] text-white/50">
                      {plan.duration}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF0422"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="font-suisse text-[0.9375rem] text-white/90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-medium font-suisse transition-all bg-[#FF0422] text-white hover:bg-[#E0031F] hover:shadow-lg hover:shadow-[#FF0422]/20"
                  >
                    Demander un devis
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-[5rem] max-md:py-12 bg-[#F6F6F6]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-platform text-[3rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
                Services à la carte
              </h2>
              <p className="font-suisse text-[max(14px,1rem)] text-[#666] max-w-[50ch] mx-auto">
                Complétez votre forfait avec nos services additionnels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="bg-white rounded-[1rem] p-5 hover:shadow-md transition-all duration-300 border border-[#E5E5E5]"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-suisse text-[1rem] font-semibold text-[#1E1E2A] pr-2">
                      {addon.name}
                    </h3>
                    <div className="flex items-baseline gap-0.5 shrink-0">
                      <span className="font-platform text-[1.5rem] font-normal text-[#FF0422]">
                        {addon.price}
                      </span>
                      <span className="font-suisse text-[0.75rem] text-[#999]">
                        MAD{addon.unit}
                      </span>
                    </div>
                  </div>
                  <p className="font-suisse text-[0.8125rem] text-[#808080] leading-[1.4]">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why our pricing */}
        <section className="py-[5rem] max-md:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="font-platform text-[3rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
                Pourquoi nos tarifs ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FF0422]/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="font-suisse text-[1.125rem] font-semibold text-[#1E1E2A] mb-2">Matériel professionnel</h3>
                <p className="font-suisse text-[0.875rem] text-[#808080] leading-[1.5]">
                  Caméras DSLR, éclairage studio et imprimantes haute qualité pour des résultats impeccables.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FF0422]/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="font-suisse text-[1.125rem] font-semibold text-[#1E1E2A] mb-2">Équipe dédiée</h3>
                <p className="font-suisse text-[0.875rem] text-[#808080] leading-[1.5]">
                  Technicien professionnel sur place pendant toute la durée de votre événement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FF0422]/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3 className="font-suisse text-[1.125rem] font-semibold text-[#1E1E2A] mb-2">Flexibilité totale</h3>
                <p className="font-suisse text-[0.875rem] text-[#808080] leading-[1.5]">
                  Personnalisation complète et adaptation à vos besoins. Devis sur mesure gratuit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-[5rem] max-md:py-12 bg-[#F6F6F6]">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-10 text-center">
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((item) => (
                <details key={item.question} className="group bg-white rounded-[1rem] border border-[#E5E5E5] overflow-hidden">
                  <summary className="flex items-center justify-between py-4 px-5 cursor-pointer font-suisse text-[max(14px,1.0625rem)] font-medium text-[#1E1E2A] list-none [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 text-[#666] font-suisse text-[max(14px,0.9375rem)] leading-[1.6]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[5rem] max-md:py-12 text-center bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">
              Besoin d&apos;un devis personnalisé ?
            </h2>
            <p className="font-suisse text-[max(14px,1.125rem)] text-[#666] mb-8 max-w-[45ch] mx-auto">
              Chaque événement est unique. Contactez-nous pour un forfait adapté à vos besoins et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1rem)] font-medium text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="https://wa.me/212621189496?text=Bonjour%2C%20je%20souhaite%20avoir%20un%20devis%20pour%20un%20service%20de%20photobooth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-[max(14px,1rem)] font-medium text-white transition-colors hover:bg-[#128C7E] font-suisse"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
