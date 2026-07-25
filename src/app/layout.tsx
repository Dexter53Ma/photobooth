import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";

const platform = localFont({
  src: "../../public/fonts/Platform-Regular.woff2",
  variable: "--font-platform",
  weight: "400",
  style: "normal",
  display: "swap",
});

const suisse = localFont({
  src: "../../public/fonts/SuisseBPIntl-Regular.woff2",
  variable: "--font-suisse",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Marrakech PhotoBooths | Location de photobooth pour événements",
  description:
    "Location de photobooth pour événements et mariages à Marrakech. Divertissement pour vos invités avec Marrakech PhotoBooths. Services personnalisés !",
  alternates: {
    canonical: "https://MarrakechPhotoBooth.com/",
  },
  icons: {
    icon: [
      { url: "/seo/cropped-favicon-fotomaton-32x32.png", sizes: "32x32" },
      { url: "/seo/cropped-favicon-fotomaton-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/cropped-favicon-fotomaton-180x180.png",
  },
  openGraph: {
    title: "Marrakech PhotoBooths | Location de photobooth pour événements",
    description:
      "Location de Photobooth à Marrakech pour événements, mariages et fêtes. Divertissement et beaux souvenirs pour vos invités.",
    url: "https://MarrakechPhotoBooth.com/",
    siteName: "Marrakech PhotoBooths",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 742,
        type: "image/jpeg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrakech PhotoBooths | Location de photobooth pour événements",
    description: "Location de photobooth pour événements et mariages à Marrakech.",
    images: ["/seo/og-image.jpg"],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Marrakech PhotoBooths",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Marrakech PhotoBooths",
  url: "https://MarrakechPhotoBooth.com",
  telephone: "+212621189496",
  email: "contact@marrakechphotobooth.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  description: "Location de photobooth pour événements et mariages à Marrakech.",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "22:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${platform.variable} ${suisse.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-white text-[#1e1e2a] antialiased"
        style={{
          fontFamily: "var(--font-suisse), sans-serif",
          fontSize: "max(14px, 1.375rem)",
          lineHeight: "1.5",
          fontWeight: 400,
          letterSpacing: "-0.005em",
        }}
      >
        {children}
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
