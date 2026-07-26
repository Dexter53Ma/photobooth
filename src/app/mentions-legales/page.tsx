import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Mentions légales - Marrakech PhotoBooths",
  description: "Mentions légales de Marrakech PhotoBooths. Informations sur le propriétaire du site et conditions d'utilisation.",
  alternates: { canonical: "https://marrakechphotobooth.com/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#F6F6F6] py-[5rem] max-md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <span className="inline-block font-suisse text-[0.8125rem] uppercase tracking-[0.15em] text-[#FF0422] mb-4">Juridique</span>
            <h1 className="font-platform text-[4rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
              Mentions légales
            </h1>
            <p className="font-suisse text-[max(14px,1.0625rem)] text-[#666] max-w-[50ch] mx-auto">
              Informations légales relatives au propriétaire et à l&apos;utilisation du site.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-[4rem] max-md:py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="space-y-10">
              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-5">1. Informations du titulaire</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-[0.75rem]">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div>
                      <span className="block font-suisse text-[0.75rem] text-[#999] uppercase tracking-wider">Raison sociale</span>
                      <span className="font-suisse text-[0.9375rem] text-[#1E1E2A] font-medium">Marrakech PhotoBooths</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-[0.75rem]">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <span className="block font-suisse text-[0.75rem] text-[#999] uppercase tracking-wider">Adresse</span>
                      <span className="font-suisse text-[0.9375rem] text-[#1E1E2A] font-medium">Marrakech, Maroc</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-[0.75rem]">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <span className="block font-suisse text-[0.75rem] text-[#999] uppercase tracking-wider">Email</span>
                      <a href="mailto:contact@marrakechphotobooth.com" className="font-suisse text-[0.9375rem] text-[#FF0422] font-medium hover:underline">contact@marrakechphotobooth.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-[0.75rem]">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <span className="block font-suisse text-[0.75rem] text-[#999] uppercase tracking-wider">Téléphone</span>
                      <a href="tel:+212621189496" className="font-suisse text-[0.9375rem] text-[#FF0422] font-medium hover:underline">+212 6 21 18 94 96</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">2. Propriété intellectuelle</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  L&apos;ensemble du contenu de ce site web (textes, images, vidéos, logos, graphiques) constitue la propriété intellectuelle de <strong className="text-[#1E1E2A]">Marrakech PhotoBooths</strong> et est protégé par les lois en vigueur. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">3. Protection des données</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Conformément au RGPD, vous disposez de droits concernant vos données personnelles. Pour en savoir plus, consultez notre <Link href="/politique-confidentialite" className="text-[#FF0422] hover:underline font-medium">Politique de confidentialité</Link> et notre <Link href="/politique-cookies" className="text-[#FF0422] hover:underline font-medium">Politique de cookies</Link>.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">4. Hébergeur</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E5E5]">
              <p className="font-suisse text-[0.875rem] text-[#999] text-center">
                Dernière mise à jour : Janvier 2025 · <Link href="/politique-confidentialite" className="text-[#FF0422] hover:underline">Politique de confidentialité</Link> · <Link href="/politique-cookies" className="text-[#FF0422] hover:underline">Politique de cookies</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
