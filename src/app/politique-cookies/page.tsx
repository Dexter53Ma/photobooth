import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Politique de cookies - Marrakech PhotoBooths",
  description: "Politique de cookies de Marrakech PhotoBooths. Informations sur l'utilisation des cookies sur notre site.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/politique-cookies" },
};

export default function PolitiqueCookies() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-[10rem] max-md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-platform text-[5.25rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-16">Politique de cookies</h1>
          <div className="font-suisse text-[max(14px,1.375rem)] leading-[1.5] text-[#1E1E2A] space-y-8">
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">Que sont les cookies ?</h2>
              <p>Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web.</p>
            </section>
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">Types de cookies</h2>
              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li><strong>Cookies techniques :</strong> Permettent la navigation et l&apos;utilisation des services.</li>
                <li><strong>Cookies de préférences :</strong> Permettent de mémoriser vos préférences.</li>
                <li><strong>Cookies analytiques :</strong> Permettent le suivi et l&apos;analyse du comportement.</li>
                <li><strong>Cookies marketing :</strong> Permettent la gestion des espaces publicitaires.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-platform text-[2.25rem] font-normal leading-[1] text-[#1E1E2A] mb-4">Comment désactiver les cookies</h2>
              <p>Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
