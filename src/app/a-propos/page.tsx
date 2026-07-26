import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "À propos - Marrakech PhotoBooths | Notre équipe et histoire",
  description: "Découvrez l'équipe de Marrakech PhotoBooths. Passionnés du design, de la technologie et des sourires depuis des années à Marrakech.",
  alternates: { canonical: "https://www.marrakechphotobooths.com/a-propos" },
  openGraph: {
    title: "À propos - Marrakech PhotoBooths",
    description: "Découvrez l'équipe de Marrakech PhotoBooths à Marrakech.",
    url: "https://www.marrakechphotobooths.com/a-propos",
  },
};

const team = [
  { name: "Direction", role: "Gestion & Vision", description: "Stratégie, développement et pilotage de l'entreprise. Plus de 10 ans d'expérience dans l'événementiel.", image: "/images/about/Fotomaton-Barcelona-Alquilar-Fotomaton.webp" },
  { name: "Production", role: "Technique & Logistique", description: "Installation, maintenance et innovation technique. Chaque équipement est soigneusement testé.", image: "/images/about/Videomaton-360-Evento-corporativo.webp" },
  { name: "Commercial", role: "Relations Clients", description: "Accompagnement personnalisé de A à Z. De la première prise de contact à la post-événement.", image: "/images/about/Fotomaton-Eventos-Barcelona-scaled.webp" },
];

const values = [
  { title: "Innovation", description: "Nous restons à la pointe des dernières tendances en photobooth. IA, vidéos 360°, écrans LED — nous intégrons les technologies les plus avancées pour offrir une expérience unique à chaque événement.", image: "/images/Fotomaton-eventos-personalizado-1518x1600.webp" },
  { title: "Qualité", description: "Des équipements professionnels : caméras DSLR, imprimantes haute résolution, éclairage studio. Chaque détail compte pour garantir des résultats impeccables.", image: "/images/fotomaton-classic-vinilado-evento.webp" },
  { title: "Créativité", description: "Des solutions uniques et personnalisées pour chaque événement. De la personnalisation du vinyle au design des impressions, nous donnons vie à votre vision.", image: "/images/Photocall-Red-Carpet-1600x1600.webp" },
];

export default function APropos() {
  return (
    <>
      <Navbar />
      <main className="pt-[90px] max-md:pt-[75px]">
        <Breadcrumbs items={[{ label: "À propos", href: "/a-propos" }]} />
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/about/Fotomaton-Eventos-Barcelona-scaled.webp" alt="Marrakech PhotoBooths" fill sizes="100vw" className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 py-[8rem] max-md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-platform text-[4rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-white mb-4">À propos</h1>
              <h2 className="font-platform text-[2rem] max-md:text-[1.25rem] font-normal leading-[1.1] text-white/90 max-w-[30ch]">Passionnés du design, de la technologie et... les sourires !</h2>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-[8rem] max-md:py-16 bg-[#F6F6F6]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <h3 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1] text-[#1E1E2A]">Qui sommes-nous ?</h3>
                <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.6] text-[#444]">Fondée à Marrakech, notre entreprise est née d&apos;une passion pour la création de souvenirs mémorables. Depuis notre création, nous avons accompagné plus de 1 200 marques et des milliers de particuliers dans la réalisation de leurs événements.</p>
                <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.6] text-[#444]">Notre équipe de professionnels passionnés met à votre disposition les dernières technologies en matière de photobooth : du classique au miroir, du vidéomaton 360° au photobooth IA, nous avons la solution adaptée à chaque événement.</p>
                <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.6] text-[#444]">Que ce soit pour un mariage intime dans un riad historique, un gala corporatif au La Mamounia, ou un lancement de produit dans l&apos;Hivernage, nous adaptons notre service à votre vision. Notre engagement : transformer chaque instant en souvenir que vous et vos invités chérez pendant des années.</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image src="/images/about/Fotomaton-Barcelona-Alquilar-Fotomaton.webp" alt="Notre équipe" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
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
                    <p className="font-suisse text-[max(14px,0.875rem)] text-[#FF0422] font-medium mb-1">{member.role}</p>
                    <p className="font-suisse text-[max(14px,0.8125rem)] text-[#808080] leading-[1.4]">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-[8rem] max-md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="font-platform text-[3rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-8 text-center">Notre histoire</h2>
            <div className="font-suisse text-[max(14px,1.125rem)] leading-[1.8] text-[#444] space-y-6">
              <p>Tout a commencé avec une simple observation : les événements à Marrakech méritaient un divertissement à la hauteur de la magie de cette ville. Les riads historiques, les palaces prestigieux, les jardins luxuriants — chaque lieu appelle des souvenirs extraordinaires.</p>
              <p>Nous avons lancé Marrakech PhotoBooths avec une vision claire : combiner la technologie de pointe avec un service client d&apos;exception pour transformer chaque événement en une expérience mémorable. Du premier photobooth classique à notre gamme actuelle qui comprend le vidéomaton 360°, le photobooth IA et le miroir interactif, nous n&apos;avons cessé d&apos;innover.</p>
              <p>Aujourd&apos;hui, nous sommes fiers d&apos;avoir accompagné plus de 1 200 marques et des milliers de particuliers. Des mariages intimes dans les riads du médina aux galas corporatifs au La Mamounia, chaque événement nous confirme que notre mission est la bonne : créer des moments de joie qui durent.</p>
              <p>Notre équipe grandit, nos équipements se renouvellent, mais notre philosophie reste la même : à l&apos;écoute de vos besoins, créatifs dans nos solutions, et irréprochables dans notre exécution. Nous croyons que chaque sourire capturé est une victoire, et chaque partage sur les réseaux est un témoignage de la qualité de notre travail.</p>
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
