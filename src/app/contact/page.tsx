import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Marrakech PhotoBooths | Demandez un devis",
  description: "Contactez Marrakech PhotoBooths pour un devis personnalisé de photobooth pour votre événement à Marrakech. Réponse rapide par WhatsApp ou email.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/contact" },
  openGraph: {
    title: "Contact - Marrakech PhotoBooths",
    description: "Contactez-nous pour un devis personnalisé de photobooth à Marrakech.",
    url: "https://MarrakechPhotoBooth.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-[70px] max-md:pt-[60px]">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
