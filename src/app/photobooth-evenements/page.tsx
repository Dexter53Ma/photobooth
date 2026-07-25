import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import EventosContent from "@/components/EventosContent";

export const metadata = {
  title: "Photobooth pour Événements - Marrakech PhotoBooths",
  description: "Location de photobooth pour événements d'entreprise et campagnes marketing à Marrakech. Service professionnel avec impression instantanée et personnalisation.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/photobooth-evenements" },
  openGraph: {
    title: "Photobooth pour Événements - Marrakech PhotoBooths",
    description: "Location de photobooth pour événements d'entreprise à Marrakech.",
    url: "https://MarrakechPhotoBooth.com/photobooth-evenements",
  },
};

export default function FotomatonParaEventos() {
  return (
    <>
      <Navbar />
      <div className="pt-[70px] max-md:pt-[60px]">
        <EventosContent />
      </div>
      <Footer />
    </>
  );
}
