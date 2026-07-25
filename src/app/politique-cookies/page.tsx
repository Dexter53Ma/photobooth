import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Politique de cookies - Marrakech PhotoBooths",
  description: "Politique de cookies de Marrakech PhotoBooths. Informations sur l'utilisation des cookies sur notre site.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/politique-cookies" },
};

export default function PolitiqueCookies() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#F6F6F6] py-[5rem] max-md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <span className="inline-block font-suisse text-[0.8125rem] uppercase tracking-[0.15em] text-[#FF0422] mb-4">Juridique</span>
            <h1 className="font-platform text-[4rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
              Politique de cookies
            </h1>
            <p className="font-suisse text-[max(14px,1.0625rem)] text-[#666] max-w-[50ch] mx-auto">
              Comment nous utilisons les cookies pour améliorer votre expérience sur notre site.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-[4rem] max-md:py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="space-y-10">
              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">Que sont les cookies ?</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils permettent au site de mémorer vos actions et préférences pendant une période donnée.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-5">Types de cookies que nous utilisons</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-[1rem]">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-suisse text-[1rem] font-semibold text-[#1E1E2A] mb-1">Cookies techniques</h3>
                      <p className="font-suisse text-[0.9375rem] text-[#666] leading-[1.5]">Permettent la navigation et l&apos;utilisation des services du site web.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-[1rem]">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-suisse text-[1rem] font-semibold text-[#1E1E2A] mb-1">Cookies de préférences</h3>
                      <p className="font-suisse text-[0.9375rem] text-[#666] leading-[1.5]">Permettent de mémoriser vos préférences pour personnaliser votre expérience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-[1rem]">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-suisse text-[1rem] font-semibold text-[#1E1E2A] mb-1">Cookies analytiques</h3>
                      <p className="font-suisse text-[0.9375rem] text-[#666] leading-[1.5]">Permettent le suivi et l&apos;analyse du comportement des visiteurs sur le site.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-[1rem]">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FF0422]/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                    </div>
                    <div>
                      <h3 className="font-suisse text-[1rem] font-semibold text-[#1E1E2A] mb-1">Cookies marketing</h3>
                      <p className="font-suisse text-[0.9375rem] text-[#666] leading-[1.5]">Permettent la gestion des espaces publicitaires et la personnalisation des annonces.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F6F6F6] rounded-[1.5rem] p-6 md:p-8">
                <h2 className="font-platform text-[1.5rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-[#1E1E2A] mb-4">Comment désactiver les cookies</h2>
                <p className="font-suisse text-[max(14px,1rem)] leading-[1.7] text-[#444]">
                  Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Veuillez noter que la désactivation de certains cookies peut affecter le fonctionnement du site. Consultez l&apos;aide de votre navigateur pour plus d&apos;informations.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E5E5]">
              <p className="font-suisse text-[0.875rem] text-[#999] text-center">
                Dernière mise à jour : Janvier 2025 · <Link href="/mentions-legales" className="text-[#FF0422] hover:underline">Mentions légales</Link> · <Link href="/politique-confidentialite" className="text-[#FF0422] hover:underline">Politique de confidentialité</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
