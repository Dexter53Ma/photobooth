import Image from "next/image";
import Link from "next/link";

const clients = [
  { src: "/images/clients/Bacardi-cliente-Fotomaton-Barcelona.png", alt: "Bacardi" },
  { src: "/images/clients/Cartier-cliente-Fotomaton-Barcelona.png", alt: "Cartier" },
  { src: "/images/clients/HM-cliente-moda-Fotomaton-Barcelona.png", alt: "H&M" },
  { src: "/images/clients/Intel-cliente-tecnologico-Fotomaton-Barcelona.png", alt: "Intel" },
];

const stats = [
  { number: "1200+", label: "Marques nous font confiance" },
  { number: "5000+", label: "Événements réalisés" },
  { number: "10+", label: "Années d'expérience" },
  { number: "100%", label: "Clients satisfaits" },
];

export function ClientsSection() {
  return (
    <section className="py-[6rem] max-md:py-12 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-platform text-[3.5rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
            Ils nous font confiance
          </h2>
          <p className="font-suisse text-[max(14px,1rem)] text-[#808080] max-w-[50ch] mx-auto">
            Plus de 1200 marques ont choisi Marrakech PhotoBooths pour leurs événements.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 md:mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-[1rem] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="font-platform text-[2.5rem] max-md:text-[2rem] font-normal text-[#FF0422] mb-2">{stat.number}</div>
              <div className="font-suisse text-[max(14px,0.875rem)] text-[#666] leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="relative overflow-hidden">
          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F6F6F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F6F6F6] to-transparent z-10 pointer-events-none" />

          {/* Logo row - scroll animation */}
          <div className="flex items-center gap-12 animate-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={`${client.alt}-${index}`} className="flex items-center justify-center shrink-0 w-[160px] h-[80px] bg-white rounded-[0.75rem] px-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <Image src={client.src} alt={client.alt} width={120} height={50} loading="lazy" className="max-h-[50px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Link href="/contact" className="inline-flex items-center gap-2 font-suisse text-[max(14px,1rem)] font-medium text-[#FF0422] hover:underline underline-offset-4">
            Rejoignez nos clients satisfaits
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
