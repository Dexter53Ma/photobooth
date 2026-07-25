import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MariagesContent from "@/components/MariagesContent";

export const metadata = {
  title: "Photobooth pour Mariages - Marrakech PhotoBooths",
  description: "Location de photobooth pour mariages à Marrakech. Service professionnel avec impression instantanée, design personnalisé et accessoires élégants pour votre jour spécial.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/mariages" },
  openGraph: {
    title: "Photobooth pour Mariages - Marrakech PhotoBooths",
    description: "Location de photobooth pour mariages à Marrakech. Créez des souvenirs inoubliables pour votre jour spécial.",
    url: "https://MarrakechPhotoBooth.com/mariages",
  },
};

export default function MariagesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[90px] max-md:pt-[75px]">
        <MariagesContent />
      </div>
      <Footer />
    </>
  );
}
