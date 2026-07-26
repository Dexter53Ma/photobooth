import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import VideomatonContent from "@/components/VideomatonContent";

export const metadata = {
  title: "Vidéomaton 360 - Marrakech PhotoBooths | Vidéos circulaires",
  description: "Location de vidéomaton 360 pour événements et mariages à Marrakech. Créez des vidéos circulaires spectaculaires pour vos invités.",
  alternates: { canonical: "https://www.marrakechphotobooths.com/videomaton-360" },
  openGraph: {
    title: "Vidéomaton 360 - Marrakech PhotoBooths",
    description: "Location de vidéomaton 360 pour événements à Marrakech.",
    url: "https://www.marrakechphotobooths.com/videomaton-360",
  },
};

export default function Videomaton360() {
  return (
    <>
      <Navbar />
      <div className="pt-[90px] max-md:pt-[75px]">
        <Breadcrumbs items={[{ label: "Vidéomaton 360", href: "/videomaton-360" }]} />
        <VideomatonContent />
      </div>
      <Footer />
    </>
  );
}
