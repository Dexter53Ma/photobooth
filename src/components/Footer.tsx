import Link from "next/link";
import Image from "next/image";
import {
  XIcon,
  TikTokIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/icons";

const socialLinks = [
  { href: "https://x.com/marrakechpb", icon: XIcon, label: "X" },
  { href: "https://www.tiktok.com/@marrakechpb", icon: TikTokIcon, label: "TikTok" },
  { href: "https://www.linkedin.com/company/marrakechpb", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://www.facebook.com/MarrakechPhotoBooths", icon: FacebookIcon, label: "Facebook" },
  { href: "https://www.instagram.com/marrakechpb/", icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.youtube.com/@marrakechpb", icon: YouTubeIcon, label: "YouTube" },
];

const servicesLinks = [
  { label: "Photobooth Événements", href: "/photobooth-evenements" },
  { label: "Spin 360º", href: "/videomaton-360" },
  { label: "Photobooth IA", href: "/photobooth-evenements" },
  { label: "Mosaic Wall", href: "/photobooth-evenements" },
  { label: "Photobooth Smart", href: "/photobooth-evenements" },
  { label: "Printoku", href: "/photobooth-evenements" },
  { label: "Lettres Géantes", href: "/photobooth-evenements" },
  { label: "Photocall Tapis Rouge", href: "/photobooth-evenements" },
];

const mariageLinks = [
  { label: "Photobooth Mariage", href: "/mariages" },
  { label: "Spin 360º", href: "/videomaton-360" },
  { label: "Photobooth Glam", href: "/mariages" },
  { label: "Photobooth Catwalk", href: "/mariages" },
  { label: "Printoku", href: "/mariages" },
  { label: "Lettres Géantes", href: "/mariages" },
  { label: "Photocall Tapis Rouge", href: "/mariages" },
];

const ressourcesLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Politique de cookies", href: "/politique-cookies" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="footer bg-[#1E1E2A] rounded-t-[7rem] max-md:rounded-t-[2rem] text-white font-suisse">
      {/* Social icons */}
      <div className="footer__header px-6 py-16 max-md:py-10 flex flex-col items-center gap-6">
        <div className="footer__social flex gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__btn flex items-center justify-center rounded-full border border-white px-3 py-1.5 text-white transition-all duration-150 hover:bg-[#FF0422] hover:border-[#FF0422]"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-md:gap-6 text-[max(14px,1.125rem)] max-md:text-[max(14px,0.9375rem)]">
          <div className="footer__links flex flex-col gap-3">
            <h3 className="font-platform text-[1.25rem] max-md:text-[1.125rem] font-normal leading-[1] text-white mb-2">
              Événements
            </h3>
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#AAA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__links flex flex-col gap-3">
            <h3 className="font-platform text-[1.25rem] max-md:text-[1.125rem] font-normal leading-[1] text-white mb-2">
              Mariages & Fêtes
            </h3>
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              {mariageLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#AAA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__links flex flex-col gap-3">
            <h3 className="font-platform text-[1.25rem] max-md:text-[1.125rem] font-normal leading-[1] text-white mb-2">
              Ressources
            </h3>
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              {ressourcesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#AAA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer legal */}
      <div className="footer__legal border-t border-white/10 px-6 py-10 max-md:py-6 flex flex-col items-center gap-6">
        <Image
          src="/images/logo%20footer%20(3).webp"
          alt="Marrakech PhotoBooths"
          width={250}
          height={65}
          loading="lazy"
          className="h-auto max-w-full"
        />
        <p className="copyright-text text-white/50 text-[max(11px,0.8rem)] text-center max-w-3xl leading-relaxed m-0">
          © 2026 Marrakech PhotoBooths. Tous droits réservés. MarrakechPhotoBooths.com
        </p>
      </div>
    </footer>
  );
}
