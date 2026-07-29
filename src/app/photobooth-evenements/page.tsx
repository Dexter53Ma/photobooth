import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import EventosContent from "@/components/EventosContent";

export const metadata = {
  title: "Photobooth pour Événements - Marrakech PhotoBooths",
  description: "Location de photobooth pour événements d'entreprise et campagnes marketing à Marrakech. Service professionnel avec impression instantanée et personnalisation.",
  alternates: { canonical: "https://www.marrakechphotobooths.com/photobooth-evenements/" },
  openGraph: {
    title: "Photobooth pour Événements - Marrakech PhotoBooths",
    description: "Location de photobooth pour événements d'entreprise à Marrakech.",
    url: "https://www.marrakechphotobooths.com/photobooth-evenements/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photobooth pour Événements - Marrakech PhotoBooths",
    description: "Location de photobooth pour événements d'entreprise à Marrakech.",
  },
};

export default function FotomatonParaEventos() {
  return (
    <>
      <Navbar />
      <div className="pt-[90px] max-md:pt-[75px]">
        <Breadcrumbs items={[{ label: "Événements", href: "/photobooth-evenements" }]} />
        <EventosContent />
      </div>
      <Footer />
    </>
  );
}
