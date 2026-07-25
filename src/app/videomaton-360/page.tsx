import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import VideomatonContent from "@/components/VideomatonContent";

export const metadata = {
  title: "Vidéomaton 360 - Marrakech PhotoBooths | Vidéos circulaires",
  description: "Location de vidéomaton 360 pour événements et mariages à Marrakech. Créez des vidéos circulaires spectaculaires pour vos invités.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/videomaton-360" },
  openGraph: {
    title: "Vidéomaton 360 - Marrakech PhotoBooths",
    description: "Location de vidéomaton 360 pour événements à Marrakech.",
    url: "https://MarrakechPhotoBooth.com/videomaton-360",
  },
};

export default function Videomaton360() {
  return (
    <>
      <Navbar />
      <div className="pt-[70px] max-md:pt-[60px]">
        <VideomatonContent />
      </div>
      <Footer />
    </>
  );
}
