const testimonials = [
  {
    name: "Sarah & Mehdi",
    event: "Mariage — La Palmeraie",
    text: "Le photobooth a été le succès de notre mariage ! Nos invités adoraient les accessoires et les impressions instantanées. L'équipe était professionnelle et le rendu était magnifique. Nous avons gardé un souvenir inoubliable de cette soirée.",
    rating: 5,
  },
  {
    name: "Rachid B.",
    event: "Événement d'entreprise — Royal Mansour",
    text: "Nous avons réservé le vidéomaton 360 pour notre gala corporatif. L'effet wow était garanti ! Les vidéos ont été partagées massivement sur les réseaux sociaux. Un investissement marketing redoutable qui a généré une visibilité incroyable pour notre marque.",
    rating: 5,
  },
  {
    name: "Emma & Lucas",
    event: "Mariage — Riad Yima",
    text: "En tant que couple international, nous cherchions un prestataire fiable à Marrakech. Marrakech PhotoBooths a été parfait : réactifs, créatifs et à l'écoute. Le photobooth miroir a surpris tous nos invités. Merci pour ces beaux souvenirs !",
    rating: 5,
  },
  {
    name: "Fatima Z.",
    event: "Anniversaire — La Mamounia",
    text: "Pour les 50 ans de ma mère, nous avions réservé un photobooth IA. Les transformations étaient incroyables et les rires n'ont pas cessé ! L'équipe était ponctuelle et très professionnelle. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Youssef A.",
    event: "Lancement de produit — Hivernage",
    text: "Le branding personnalisé sur le photobooth a parfaitement correspondu à notre identité visuelle. Chaque photo imprimée portait notre logo et nos couleurs. Un excellent outil pour renforcer la mémorisation de notre marque lors de cet événement.",
    rating: 5,
  },
  {
    name: "Claire & Antoine",
    event: "Mariage — Jardin Majorelle",
    text: "Le photocall que l'équipe a créé pour notre mariage était d'une créativité folle. Le mur de fleurs et les accessoires coordonnés à notre thème ont fait sensation. Nos invités n'arrêtent pas de nous demander les photos !",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-[6rem] max-md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-platform text-[3.5rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
            Ce que disent nos clients
          </h2>
          <p className="font-suisse text-[max(14px,1rem)] text-[#808080] max-w-[50ch] mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#F6F6F6] rounded-[1.25rem] p-6 flex flex-col hover:shadow-md transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FF0422" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-suisse text-[max(14px,0.9375rem)] leading-[1.6] text-[#444] flex-1 mb-5">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-[#E5E5E5] pt-4">
                <p className="font-suisse text-[max(14px,0.9375rem)] font-semibold text-[#1E1E2A]">{testimonial.name}</p>
                <p className="font-suisse text-[max(14px,0.8125rem)] text-[#808080]">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Review schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Marrakech PhotoBooths",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                reviewCount: testimonials.length.toString(),
              },
              review: testimonials.map((t) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: t.name,
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: t.rating.toString(),
                  bestRating: "5",
                },
                name: t.event,
                reviewBody: t.text,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
