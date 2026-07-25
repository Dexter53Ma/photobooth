import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "À propos - Marrakech PhotoBooths | Notre équipe et histoire",
  description: "Découvrez l'équipe de Marrakech PhotoBooths. Passionnés du design, de la technologie et des sourires depuis des années à Marrakech.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/a-propos" },
  openGraph: {
    title: "À propos - Marrakech PhotoBooths",
    description: "Découvrez l'équipe de Marrakech PhotoBooths à Marrakech.",
    url: "https://MarrakechPhotoBooth.com/a-propos",
  },
};

const team = [
  { name: "Direction", role: "Gestion & Vision", image: "/images/about/Fotomaton-Barcelona-Alquilar-Fotomaton.jpg" },
  { name: "Production", role: "Technique & Logistique", image: "/images/about/Videomaton-360-Evento-corporativo.jpg" },
  { name: "Commercial", role: "Relations Clients", image: "/images/about/Fotomaton-Eventos-Barcelona-scaled.jpg" },
];

const values = [
  { title: "Innovation", description: "Nous restons à la pointe des dernières tendances en photobooth.", image: "/images/Fotomaton-eventos-personalizado-1518x1600.jpg" },
  { title: "Qualité", description: "Des équipements professionnels et un service irréprochable.", image: "/images/fotomaton-classic-vinilado-evento.jpg" },
  { title: "Créativité", description: "Des solutions uniques et personnalisées pour chaque événement.", image: "/images/Photocall-Red-Carpet-1600x1600.jpg" },
];

export default function APropos() {
  return (
    <>
      <Navbar />
      <main className="pt-[90px] max-md:pt-[75px]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/about/Fotomaton-Eventos-Barcelona-scaled.jpg" alt="Marrakech PhotoBooths" fill sizes="100vw" className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 py-[8rem] max-md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-platform text-[5rem] max-md:text-[2.5rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-6">À propos</h1>
              <h2 className="font-platform text-[2.5rem] max-md:text-[1.5rem] font-normal leading-[1.1] text-white/90 max-w-[30ch]">Passionnés du design, de la technologie et... les sourires !</h2>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-[8rem] max-md:py-16 bg-[#F6F6F6]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <h3 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1] text-[#1E1E2A]">Qui sommes-nous ?</h3>
                <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.6] text-[#444]">Chez Marrakech PhotoBooths, nous offrons depuis des années des services professionnels de photobooth pour événements d&apos;entreprise et mariages à Marrakech.</p>
                <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.6] text-[#444]">Notre passion pour le design, la technologie et les expériences mémorables fait de nous le choix préféré de nombreuses marques et milliers de clients satisfaits.</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image src="/images/about/Fotomaton-Barcelona-Alquilar-Fotomaton.jpg" alt="Notre équipe" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-[8rem] max-md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[3rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-12 text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="group overflow-hidden rounded-[1.5rem]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={value.image} alt={value.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 bg-[#F6F6F6]">
                    <h3 className="font-platform text-[1.5rem] font-normal leading-[1] text-[#1E1E2A] mb-3">{value.title}</h3>
                    <p className="font-suisse text-[max(14px,1rem)] leading-[1.5] text-[#666]">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-[8rem] max-md:py-16 bg-[#F6F6F6]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[3rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-12 text-center">Notre équipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group overflow-hidden rounded-[1.5rem]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="font-platform text-[1.25rem] font-normal leading-[1] text-[#1E1E2A] mb-1">{member.name}</h4>
                    <p className="font-suisse text-[max(14px,0.875rem)] text-[#808080]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[6rem] max-md:py-12 text-center bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1.1] text-[#1E1E2A] mb-6">Envie de nous connaître ?</h2>
            <Link href="/contact" className="inline-block rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.125rem)] font-normal text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse">Contactez-nous</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
