import Link from "next/link";

export function AboutSection() {
  return (
    <section className="about bg-[#F6F6F6] rounded-[7rem] max-md:rounded-[2rem] py-[8rem] max-md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading and CTA */}
        <div className="flex flex-col items-center gap-6 mb-12 md:mb-16 text-center">
          <h2 className="about__title font-platform text-[3.5rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] max-w-[27ch]">
            Location de photobooth et tendances de divertissement pour événements
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#E00320] px-8 py-3 text-[max(14px,1rem)] font-medium text-white transition-colors hover:bg-[rgb(192,2,24)] font-suisse"
          >
            Consultez nos catalogues
          </Link>
        </div>

        {/* Two-column layout: text left, video right */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6">
            <p className="about__text font-suisse text-[max(14px,1.25rem)] leading-[1.6] text-[#444]">
              Marrakech PhotoBooths est une entreprise spécialisée dans la location de photobooth, les services audiovisuels et le marketing pour l&apos;animation d&apos;événements privés et d&apos;entreprise.
            </p>
            <p className="font-suisse text-[max(14px,1.25rem)] leading-[1.6] text-[#444]">
              Nos services créent des souvenirs, du divertissement et des expériences de marque à parts égales. Chaque événement est unique et mérite un photobooth à la hauteur.
            </p>
          </div>
          {/* Reel format video container */}
          <div className="w-full lg:w-[360px] max-lg:max-w-[360px] shrink-0">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-black" style={{ aspectRatio: "9/16" }}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src="/videos/photobooth%20video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <track kind="captions" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
