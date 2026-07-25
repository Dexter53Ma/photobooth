const steps = [
  {
    number: "01",
    title: "Créez",
    description: "Des souvenirs et expériences inoubliables pour vos invités avec notre photobooth.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personnalisez",
    description: "Choisissez le design, les fonds, les accessoires et le branding de votre événement.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Partagez",
    description: "Envoi instantané par QR, AirDrop, WhatsApp ou email. Le contenu se viralise.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Imprimez",
    description: "Impression haute qualité en photo, sticker, métallisé, translucide ou lenticulaire.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
      </svg>
    ),
  },
];

export function ProcessSteps() {
  return (
    <section className="py-[6rem] max-md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-platform text-[3.5rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">
            Comment ça marche ?
          </h2>
          <p className="font-suisse text-[max(14px,1rem)] text-[#808080] max-w-[45ch] mx-auto">
            4 étapes simples pour un événement inoubliable
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#FF0422]/20 via-[#FF0422] to-[#FF0422]/20 z-0" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              {/* Step card */}
              <div className="relative z-10 flex flex-col items-center px-6 py-8 max-md:py-6">
                {/* Number circle */}
                <div className="w-[120px] h-[120px] max-md:w-[100px] max-md:h-[100px] rounded-full bg-[#F8F8F8] border-2 border-[#E5E5E5] group-hover:border-[#FF0422] group-hover:bg-[#FF0422]/5 transition-all duration-500 flex flex-col items-center justify-center mb-6">
                  <span className="font-platform text-[2rem] max-md:text-[1.5rem] font-normal text-[#FF0422] leading-none mb-1">{step.number}</span>
                  <div className="text-[#1E1E2A] group-hover:text-[#FF0422] transition-colors duration-300 mt-1">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-suisse text-[1.25rem] max-md:text-[1.125rem] font-semibold text-[#1E1E2A] mb-3">
                  {step.title}
                </h3>
                <p className="font-suisse text-[max(14px,0.875rem)] leading-[1.6] text-[#808080] max-w-[280px]">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (mobile) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex items-center justify-center py-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
