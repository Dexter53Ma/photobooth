import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const posts: Record<string, { title: string; date: string; category: string; readTime: string; image: string; content: string[] }> = {
  "guide-choisir-photobooth-mariage-marrakech": {
    title: "Guide complet : Comment choisir son photobooth pour un mariage à Marrakech",
    date: "15 Janvier 2024",
    category: "Mariage",
    readTime: "8 min",
    image: "/images/fotomaton-classic-vinilado-evento.jpg",
    content: [
      "Organiser un mariage à Marrakech, c'est choisir une destination de rêve pour l'un des jours les plus importants de votre vie. Et quoi de mieux qu'un photobooth pour immortaliser les moments de joie et de complicité de vos invités ? Mais comment choisir le bon photobooth parmi toutes les options disponibles ? Voici notre guide complet.",
      "## 1. Définissez vos besoins",
      "Avant de choisir un photobooth, posez-vous les bonnes questions : Combien d'invités avez-vous ? Quel est le thème de votre mariage ? Quel est votre budget ? Ces éléments vous orienteront vers le type de photobooth le plus adapté.",
      "## 2. Les différents types de photobooth",
      "Il existe plusieurs types de photobooths : le photobooth classique (cabine fermée), le photobooth ouvert (sans cabine), le photobooth miroir (écran tactile interactif), le vidéomaton 360° (vidéos circulaires) et le photobooth IA (filtres et face swap). Chacun a ses avantages selon le style de votre mariage.",
      "## 3. La personnalisation",
      "Un bon photobooth doit pouvoir se personnaliser : logo des mariés sur les impressions, fond d'écran adapté à votre thème, accessoires coordonnés. Chez Marrakech PhotoBooths, nous offrons une personnalisation complète pour chaque mariage.",
      "## 4. La qualité des impressions",
      "Vérifiez la qualité des impressions : papier photo professionnel, résolution élevée, encres durables. Les photos doivent être des souvenirs qui durent, pas des impressions qui s'estompent.",
      "## 5. Le service inclus",
      "Un bon service inclut : un technicien dédié, l'installation et le démontage, les accessoires, les impressions illimitées et le transfert digital. Assurez-vous que tout est compris dans votre forfait.",
      "## Conclusion",
      "Le choix d'un photobooth pour votre mariage à Marrakech est une décision importante. Prenez le temps de comparer les offres, de voir des exemples de travaux précédents et de discuter avec le prestataire. Chez Marrakech PhotoBooths, nous sommes à votre écoute pour créer ensemble le photobooth parfait pour votre grand jour.",
    ],
  },
  "top-10-idees-photocall-mariage": {
    title: "Top 10 des idées originales pour un photocall de mariage inoubliable",
    date: "10 Janvier 2024",
    category: "Mariage",
    readTime: "6 min",
    image: "/images/Photocall-Red-Carpet-1600x1600.jpg",
    content: [
      "Le photocall est devenu un incontournable des mariages modernes. Voici 10 idées originales pour créer un photocall qui marquera les esprits de vos invités.",
      "## 1. Le tapis rouge Hollywood",
      "Un tapis rouge avec des barrières velvet et un fond doré pour un effet glamour instantané. Parfait pour les mariages chic et sophistiqués.",
      "## 2. Le mur de fleurs",
      "Un mur couvert de fleurs fraîches ou séchées dans les couleurs de votre mariage. Élégant, romantique et parfait pour les photos.",
      "## 3. Le cadre géant",
      "Un cadre photo géant personnalisé avec vos noms et la date du mariage. Les invités posent à l'intérieur pour des photos ludiques.",
      "## 4. Le fond néon",
      "Des enseignes néon avec des messages personnalisés ('Love', 'Just Married', vos initiales) sur un fond sombre pour un effet moderne et tendance.",
      "## 5. Le jardin suspendu",
      "Des plantes suspendues, des guirlandes lumineuses et des lanternes pour un effet jardin enchanté. Idéal pour les mariages en extérieur.",
      "## 6. Le photobooth vintage",
      "Un décor rétro avec des valises, un vélo ancien et des accessoires d'époque pour un charme nostalgique.",
      "## 7. Le fond paillettes",
      "Un rideau de paillettes dorées ou argentées pour un effet scintillant et festif. Simple mais très efficace.",
      "## 8. Le miroir géant",
      "Un grand miroir orné dans lequel les invités posent. L'effet de reflet crée des photos uniques et artistiques.",
      "## 9. Le photocall thématique",
      "Adaptez le thème à votre histoire : plage pour un mariage côtier, montagne pour un mariage alpin, etc.",
      "## 10. Le photocall interactif",
      "Un tableau blanc où les invités écrivent des messages, un arbre à empreintes, ou un puzzle géant à compléter ensemble.",
      "## Conclusion",
      "Quelle que soit votre idée, l'important est qu'elle reflète votre personnalité et le thème de votre mariage. Marrakech PhotoBooths peut vous aider à réaliser le photocall de vos rêves.",
    ],
  },
  "videomaton-360-attraction-evenements-entreprise": {
    title: "Vidéomaton 360 : pourquoi c'est l'attraction star des événements d'entreprise",
    date: "5 Janvier 2024",
    category: "Entreprise",
    readTime: "7 min",
    image: "/images/hero/videomaton-360.jpg",
    content: [
      "Le vidéomaton 360° est devenu l'attraction incontournable des événements d'entreprise. Mais pourquoi un tel succès ? Découvrez les raisons de ce phénomène.",
      "## 1. Un contenu viral",
      "Les vidéos 360° sont parfaites pour les réseaux sociaux. Courtes, dynamiques et spectaculaires, elles génèrent un engagement naturel et un partage massif.",
      "## 2. Une expérience immersive",
      "Contrairement à un photobooth classique, le vidéomaton 360° offre une expérience complète. Les participants montent sur une plateforme et sont filmés sous tous les angles.",
      "## 3. Un branding puissant",
      "Chaque vidéo peut être personnalisée avec le logo de l'entreprise, un message ou un hashtag. C'est un outil marketing redoutable pour la visibilité de la marque.",
      "## 4. Un effet wow garanti",
      "L'effet de la caméra qui tourne autour crée un moment spectaculaire qui impressionne systématiquement les participants et les spectateurs.",
      "## 5. Accessible à tous",
      "Pas besoin de compétences particulières. Tout le monde peut monter sur la plateforme et créer son vidéo en quelques secondes.",
      "## 6. Un souvenir durable",
      "Les vidéos sont envoyées instantanément par QR code, WhatsApp ou email. Les participants repartent avec un souvenir numérique qu'ils partageront avec leur réseau.",
      "## Conclusion",
      "Le vidéomaton 360° est bien plus qu'un simple divertissement. C'est un outil marketing puissant qui combine divertissement, engagement et visibilité de marque. Pour votre prochain événement d'entreprise à Marrakech, c'est le choix idéal.",
    ],
  },
  "photobooth-ia-revolution-evenements-marrakech": {
    title: "Photobooth et IA : la révolution des événements à Marrakech",
    date: "28 Décembre 2023",
    category: "Technologie",
    readTime: "5 min",
    image: "/images/services/Fotomaton-IA-ficcion-heroe-1240x1600.jpg",
    content: [
      "L'intelligence artificielle transforme profondément le monde du photobooth. Découvrez comment l'IA révolutionne l'expérience des événements à Marrakech.",
      "## Le face swap intelligent",
      "Le face swap IA permet aux participants de se transformer en personnages célèbres, en super-héros ou en créatures fantastiques. L'effet est bluffant et crée des moments de rire garantis.",
      "## Les fonds générés par IA",
      "Plus besoin de fonds physiques ! L'IA peut générer des décors sur mesure : une plage paradisiaque, un paysage de montagne, une scène de film... Les possibilités sont infinies.",
      "## Les filtres beauté avancés",
      "L'IA permet des retouches naturelles en temps réel : lissage de peau, éclaircissement, ajustement des traits. Le résultat est professionnel sans être artificiel.",
      "## La personnalisation automatique",
      "L'IA peut analyser les photos et ajouter automatiquement des cadres, des stickers ou des textes adaptés au contexte de l'événement.",
      "## Conclusion",
      "Le photobooth IA représente l'avenir des événements. Chez Marrakech PhotoBooths, nous intégrons les dernières innovations IA pour offrir une expérience unique et mémorable à vos invités.",
    ],
  },
  "personnaliser-photobooth-branding-entreprise": {
    title: "Comment personnaliser votre photobooth avec le branding de votre entreprise",
    date: "20 Décembre 2023",
    category: "Entreprise",
    readTime: "6 min",
    image: "/images/fotomaton-eventos-empresa-1600x1600.jpg",
    content: [
      "Le photobooth est un outil marketing puissant pour les entreprises. Voici comment le personnaliser avec le branding de votre marque pour maximiser son impact.",
      "## 1. Le vinyle extérieur",
      "L'enveloppe du photobooth peut être entièrement personnalisée avec votre logo, vos couleurs et votre message. C'est la première chose que vos invités verront.",
      "## 2. Le design des impressions",
      "Chaque photo imprimée peut porter votre logo, votre slogan, un QR code vers votre site web ou vos réseaux sociaux. C'est un support marketing qui voyage.",
      "## 3. Le fond d'écran",
      "Le fond derrière les participants peut être personnalisé avec votre branding. Mur de logo, dégradé aux couleurs de la marque ou design sur mesure.",
      "## 4. Les accessoires",
      "Créez des accessoires aux couleurs de votre entreprise : chapeaux, lunettes, pancartes avec vos slogans... Chaque accessoire renforce la mémorisation de la marque.",
      "## 5. Le transfert digital",
      "Les photos peuvent être envoyées par email avec un template HTML personnalisé aux couleurs de votre entreprise. C'est un point de contact supplémentaire avec vos clients.",
      "## Conclusion",
      "Un photobooth bien personnalisé est un investissement marketing qui génère des retours mesurables : visibilité, engagement, leads. Marrakech PhotoBooths vous accompagne dans cette démarche.",
    ],
  },
  "tendances-photobooth-2024": {
    title: "Les tendances photobooth 2024 : ce qui va marquer l'année",
    date: "15 Décembre 2023",
    category: "Tendances",
    readTime: "7 min",
    image: "/images/vogue-photo-booth-led-1600x1600.jpg",
    content: [
      "Le monde du photobooth évolue rapidement. Découvrez les tendances qui vont marquer 2024 et comment les intégrer dans vos événements.",
      "## 1. L'IA au cœur de l'expérience",
      "L'intelligence artificielle s'invite partout : face swap, fonds générés automatiquement, filtres beauté avancés. L'IA rend le photobooth plus interactif et personnalisé que jamais.",
      "## 2. Les vidéos 360° en plein essor",
      "Le vidéomaton 360° continue sa progression. Les plateformes deviennent plus grandes, les caméras plus performantes et les effets plus spectaculaires.",
      "## 3. L'écran LED immersif",
      "Les photobooths avec écran LED en fond permettent de créer des décors dynamiques et changeants. Parfait pour s'adapter à chaque moment de l'événement.",
      "## 4. Le slow motion artistique",
      "Les vidéos au ralenti avec des accessoires (confettis, paillettes, bulles) créent des moments cinématographiques dignes d'un clip vidéo.",
      "## 5. Le partage instantané",
      "Le QR code, l'AirDrop et le WhatsApp permettent un partage immédiat des photos et vidéos. Plus besoin d'attendre la fin de l'événement.",
      "## 6. La réalité augmentée",
      "Des filtres AR superposés aux photos créent des effets spectaculaires : ailes de papillon, couronne de fleurs, effets de lumière... Le tout en temps réel.",
      "## Conclusion",
      "2024 s'annonce comme une année riche en innovations pour le photobooth. Chez Marrakech PhotoBooths, nous restons à la pointe de ces tendances pour offrir le meilleur service à nos clients.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-[70px] max-md:pt-[60px]">
          <section className="py-[8rem] max-md:py-16 text-center">
            <h1 className="font-platform text-[3rem] text-[#1E1E2A] mb-4">Article non trouvé</h1>
            <Link href="/blog" className="text-[#FF0422] hover:underline font-suisse">Retour au blog</Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-[70px] max-md:pt-[60px]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src={post.image} alt={post.title} fill sizes="100vw" className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 py-[6rem] max-md:py-12 px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-[12px] font-medium font-suisse text-[#FF0422] bg-white/20 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-[12px] font-suisse text-white/70">{post.readTime} de lecture</span>
              </div>
              <h1 className="font-platform text-[2.5rem] max-md:text-[1.75rem] font-normal leading-[1.1] tracking-[-0.01em] text-white mb-4">{post.title}</h1>
              <span className="text-[14px] font-suisse text-white/60">{post.date}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-[4rem] max-md:py-8 bg-white">
          <article className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="font-suisse text-[max(14px,1.125rem)] leading-[1.8] text-[#333]">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return <h2 key={index} className="font-platform text-[1.75rem] max-md:text-[1.25rem] font-normal leading-[1.2] text-[#1E1E2A] mt-10 mb-4">{paragraph.replace("## ", "")}</h2>;
                }
                return <p key={index} className="mb-6">{paragraph}</p>;
              })}
            </div>

            {/* Back to blog */}
            <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#FF0422] font-suisse text-[max(14px,1rem)] hover:underline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Retour au blog
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
