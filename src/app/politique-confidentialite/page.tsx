import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Politique de confidentialité - Marrakech PhotoBooths",
  description: "Politique de confidentialité de Marrakech PhotoBooths. Comment nous protégeons vos données personnelles.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/politique-confidentialite" },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-[10rem] max-md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-platform text-[5.25rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-16">Politique de confidentialité</h1>
          <div className="font-suisse text-[max(14px,1.375rem)] leading-[1.5] text-[#1E1E2A] space-y-8">
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">1. Informations du responsable</h2>
              <p>Conformément au RGPD, nous vous informons que les données personnelles collectées seront traitées par Marrakech PhotoBooths, Marrakech, Maroc. Email : contact@marrakechphotobooth.com</p>
            </section>
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">2. Finalité du traitement</h2>
              <p>Les données personnelles que vous nous fournissez seront traitées pour gérer la relation commerciale, traiter vos demandes de devis et envoyer des communications commerciales sous réserve de votre consentement.</p>
            </section>
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">3. Vos droits</h2>
              <p>Vous avez le droit d&apos;accéder, rectifier, supprimer vos données personnelles, ainsi que le droit à la portabilité et à l&apos;opposition. Contactez-nous à contact@marrakechphotobooth.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
