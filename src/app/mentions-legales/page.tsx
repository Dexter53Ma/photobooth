import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Mentions légales - Marrakech PhotoBooths",
  description: "Mentions légales de Marrakech PhotoBooths. Informations sur le propriétaire du site et conditions d'utilisation.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-[10rem] max-md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-platform text-[5.25rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-16">Mentions légales</h1>
          <div className="font-suisse text-[max(14px,1.375rem)] leading-[1.5] text-[#1E1E2A] space-y-8">
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">1. Informations du titulaire</h2>
              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li><strong>Dénomination sociale :</strong> Marrakech PhotoBooths</li>
                <li><strong>Adresse :</strong> Marrakech, Maroc</li>
                <li><strong>Email :</strong> contact@marrakechphotobooth.com</li>
                <li><strong>Téléphone :</strong> +212 6 21 18 94 96</li>
              </ul>
            </section>
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">2. Propriété intellectuelle</h2>
              <p>L&apos;ensemble du contenu de ce site web constitue la propriété intellectuelle de Marrakech PhotoBooths.</p>
            </section>
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">3. Protection des données</h2>
              <p>Conformément au RGPD, consultez notre <Link href="/politique-confidentialite" className="text-[#FF0422] hover:underline">Politique de confidentialité</Link>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
