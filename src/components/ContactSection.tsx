import Link from "next/link";

export function ContactSection() {
  return (
    <section className="bg-white py-20 max-md:py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
        <h2 className="font-platform text-[3.375rem] max-md:text-[2.25rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A]">
          Contact
        </h2>
        <div className="wpcf7 flex flex-col gap-4 max-w-2xl">
          <p className="font-suisse text-[max(14px,1.375rem)] max-md:text-[max(14px,1.125rem)] text-[#1E1E2A] leading-[1.5]">
            Vous avez un événement ou une célébration et vous souhaitez surprendre vos invité(e)s ?
          </p>
          <p className="font-suisse text-[max(14px,1.375rem)] max-md:text-[max(14px,1.125rem)] text-[#1E1E2A] leading-[1.5]">
            Vous souhaitez que vos invité(e)s s&apos;amusent et repartent avec un beau souvenir ?
          </p>
          <p className="font-suisse text-[max(14px,1.375rem)] max-md:text-[max(14px,1.125rem)] text-[#1E1E2A] leading-[1.5]">
            Vous aimeriez concrétiser vos idées et offrir des services entièrement personnalisés ?
          </p>
          <p className="font-suisse text-[max(14px,1.375rem)] max-md:text-[max(14px,1.125rem)] text-[#1E1E2A] leading-[1.5]">
            Chez Marrakech PhotoBooths, nous avons tous les outils, l&apos;expérience et la motivation pour rendre votre événement unique et mémorable.
          </p>
        </div>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center rounded-full bg-[#FF0422] px-8 py-3 text-[max(14px,1.375rem)] max-md:text-[max(14px,1.125rem)] font-medium text-white transition-colors hover:bg-[rgb(220,4,30)] font-suisse"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
