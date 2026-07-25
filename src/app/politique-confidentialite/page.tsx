import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité - Marrakech PhotoBooths",
  description: "Politique de confidentialité de Marrakech PhotoBooths. Comment nous protégeons vos données personnelles.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/politique-confidentialite" },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#F6F6F6] py-[5rem] max-md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <span className="inline-block font-suisse text-[0.8125rem] uppercase tracking-[0.15em] text-[#FF0422] mb-4">Juridique</span>
            <h1 className="font-platform text-[4rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
              Politique de confidentialité
            </h1>
            <p className="font-suisse text-[max(14px,1.0625rem)] text-[#666] max-w-[50ch] mx-auto">
              Comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-[4rem] max-md:py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="space-y-10">
              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">1. Informations du responsable</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Conformément au RGPD, nous vous informons que les données personnelles collectées seront traitées par <strong className="text-[#1E1E2A]">Marrakech PhotoBooths</strong>, Marrakech, Maroc. Email : <a href="mailto:contact@marrakechphotobooth.com" className="text-[#FF0422] hover:underline">contact@marrakechphotobooth.com</a>
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">2. Finalité du traitement</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Les données personnelles que vous nous fournissez seront traitées pour gérer la relation commerciale, traiter vos demandes de devis et envoyer des communications commerciales sous réserve de votre consentement.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">3. Vos droits</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Vous avez le droit d&apos;accéder, rectifier, supprimer vos données personnelles, ainsi que le droit à la portabilité et à l&apos;opposition. Contactez-nous à <a href="mailto:contact@marrakechphotobooth.com" className="text-[#FF0422] hover:underline">contact@marrakechphotobooth.com</a>.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">4. Durée de conservation</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles sont collectées, conformément à la législation en vigueur.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">5. Sécurité</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou altération.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E5E5]">
              <p className="font-suisse text-[0.875rem] text-[#999] text-center">
                Dernière mise à jour : Janvier 2025 · <Link href="/mentions-legales" className="text-[#FF0422] hover:underline">Mentions légales</Link> · <Link href="/politique-cookies" className="text-[#FF0422] hover:underline">Politique de cookies</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
