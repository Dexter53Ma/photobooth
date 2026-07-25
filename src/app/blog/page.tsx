import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Blog - Marrakech PhotoBooths | Actualités et conseils photobooth",
  description: "Blog de Marrakech PhotoBooths. Actualités, conseils et tendances sur le photobooth et les événements à Marrakech. Guides complets pour votre mariage ou événement d'entreprise.",
  alternates: { canonical: "https://MarrakechPhotoBooth.com/blog" },
  openGraph: {
    title: "Blog - Marrakech PhotoBooths",
    description: "Actualités, conseils et tendances sur le photobooth à Marrakech.",
    url: "https://MarrakechPhotoBooth.com/blog",
  },
};

const posts = [
  {
    title: "Guide complet : Comment choisir son photobooth pour un mariage à Marrakech",
    excerpt: "Découvrez les critères essentiels pour choisir le photobooth parfait pour votre mariage à Marrakech. Du type d'appareil à la personnalisation, tout ce que vous devez savoir.",
    image: "/images/fotomaton-classic-vinilado-evento.jpg",
    date: "15 Janvier 2024",
    category: "Mariage",
    slug: "guide-choisir-photobooth-mariage-marrakech",
    readTime: "8 min",
  },
  {
    title: "Top 10 des idées originales pour un photocall de mariage inoubliable",
    excerpt: "Inspirez-vous de ces 10 idées créatives pour un photocall de mariage qui marquera les esprits. Fond personnalisé, accessoires originaux et bien plus.",
    image: "/images/Photocall-Red-Carpet-1600x1600.jpg",
    date: "10 Janvier 2024",
    category: "Mariage",
    slug: "top-10-idees-photocall-mariage",
    readTime: "6 min",
  },
  {
    title: "Vidéomaton 360 : pourquoi c'est l'attraction star des événements d'entreprise",
    excerpt: "Le vidéomaton 360 est devenu incontournable lors des événements corporate. Découvrez pourquoi cet outil booste l'engagement et la visibilité de votre marque.",
    image: "/images/hero/videomaton-360.jpg",
    date: "5 Janvier 2024",
    category: "Entreprise",
    slug: "videomaton-360-attraction-evenements-entreprise",
    readTime: "7 min",
  },
  {
    title: "Photobooth et IA : la révolution des événements à Marrakech",
    excerpt: "L'intelligence artificielle transforme le monde du photobooth. Découvrez les possibilités offertes par le face swap, les fonds générés par IA et les filtres personnalisés.",
    image: "/images/services/Fotomaton-IA-ficcion-heroe-1240x1600.jpg",
    date: "28 Décembre 2023",
    category: "Technologie",
    slug: "photobooth-ia-revolution-evenements-marrakech",
    readTime: "5 min",
  },
  {
    title: "Comment personnaliser votre photobooth avec le branding de votre entreprise",
    excerpt: "Guide étape par étape pour personnaliser votre photobooth avec le logo, les couleurs et le message de votre marque. Vinyles, impressions et fonds personnalisés.",
    image: "/images/fotomaton-eventos-empresa-1600x1600.jpg",
    date: "20 Décembre 2023",
    category: "Entreprise",
    slug: "personnaliser-photobooth-branding-entreprise",
    readTime: "6 min",
  },
  {
    title: "Les tendances photobooth 2024 : ce qui va marquer l'année",
    excerpt: "Découvrez les dernières tendances en matière de photobooth pour 2024. IA, réalité augmentée, vidéos 360, écrans LED et bien plus encore.",
    image: "/images/vogue-photo-booth-led-1600x1600.jpg",
    date: "15 Décembre 2023",
    category: "Tendances",
    slug: "tendances-photobooth-2024",
    readTime: "7 min",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] max-md:pt-[60px]">
        {/* Hero */}
        <section className="bg-[#F6F6F6] py-[4rem] max-md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="font-platform text-[3.5rem] max-md:text-[2rem] font-normal leading-[1] tracking-[-0.01em] text-[#1E1E2A] mb-4">Blog</h1>
            <p className="font-suisse text-[max(14px,1.125rem)] text-[#666] max-w-[50ch] mx-auto">Conseils, tendances et guides pour rendre votre événement inoubliable avec un photobooth à Marrakech.</p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-[4rem] max-md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="group overflow-hidden rounded-[1rem] bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-medium font-suisse text-[#FF0422] bg-[#FF0422]/10 px-2.5 py-0.5 rounded-full">{post.category}</span>
                      <span className="text-[12px] font-suisse text-[#999]">{post.readTime} de lecture</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="font-suisse text-[1.125rem] font-semibold text-[#1E1E2A] mb-2 group-hover:text-[#FF0422] transition-colors leading-tight">{post.title}</h2>
                    </Link>
                    <p className="font-suisse text-[0.875rem] text-[#666] leading-[1.5] line-clamp-3 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-suisse text-[#999]">{post.date}</span>
                      <Link href={`/blog/${post.slug}`} className="text-[13px] font-medium font-suisse text-[#FF0422] hover:underline">Lire la suite →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
