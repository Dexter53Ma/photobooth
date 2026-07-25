// eslint-disable-next-line @next/next/no-img-element
import { cn } from "@/lib/utils";

const tags = [
  "Fêtes",
  "Anniversaires",
  "Mariages",
  "Congrès",
  "Salons",
  "Célébrations",
  "Réunions",
];

export function EventsTags() {
  return (
    <section className="tags relative w-full min-h-[max(90vw,90vh)] max-md:min-h-0 py-[10rem] max-md:py-16 flex items-center justify-center bg-[#F6F6F6] -mt-[8rem] max-md:-mt-0 z-[1] px-4">
      {/* Background image with rounded bottom */}
      <div className="tags__image absolute inset-0 overflow-hidden bg-[#1E1E2A] rounded-b-[max(50vw,50vh)] max-md:rounded-b-[2rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Fotomaton-Barcelona-Fotomaton-para-eventos.jpg"
          alt="Photobooth pour événements"
          width={1600}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover object-center opacity-50"
        />
      </div>

      {/* Content */}
      <div className="tags__info relative z-[5] text-center text-white pb-[10rem] max-md:pb-8">
        <h2 className="tags__title font-platform text-[10rem] max-md:text-[2.25rem] max-[1200px]:text-[6rem] font-normal leading-[0.8] tracking-[-0.01em] max-w-[14ch] mx-auto mb-[5rem] max-md:mb-6 max-[1200px]:mb-[2.5rem]">
          Pour tout type d&apos;événements
        </h2>
        <div className="tags__cta flex flex-wrap justify-center gap-3 max-md:gap-2 max-w-[60rem] max-[1200px]:max-w-[50rem] mx-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "tag font-platform text-[3rem] max-md:text-[1.25rem] max-[1200px]:text-[2rem] font-normal border border-white text-white rounded-[10rem] px-5 max-md:px-3 py-1 min-h-[44px] flex items-center cursor-pointer transition-all duration-150 hover:bg-[#FF0422] hover:border-[#FF0422]"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
