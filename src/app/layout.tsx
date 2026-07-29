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
  themeColor: "#FF0422",
};

export const metadata: Metadata = {
  title: "Marrakech PhotoBooths | Location de photobooth pour événements",
  description:
    "Location de photobooth pour événements et mariages à Marrakech. Divertissement pour vos invités avec Marrakech PhotoBooths. Services personnalisés !",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.marrakechphotobooths.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Marrakech PhotoBooths | Location de photobooth pour événements",
    description:
      "Location de Photobooth à Marrakech pour événements, mariages et fêtes. Divertissement et beaux souvenirs pour vos invités.",
    url: "https://www.marrakechphotobooths.com/",
    siteName: "Marrakech PhotoBooths",
    images: [
      {
        url: "https://www.marrakechphotobooths.com/seo/og-image.jpg",
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
    images: ["https://www.marrakechphotobooths.com/seo/og-image.jpg"],
    site: "@marrakechpb",
    creator: "@marrakechpb",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Marrakech PhotoBooths",
    "google-site-verification": "jZaWHAufOSxUcbGbITY3EpvzN1ZB-X-VPvsmLauAO-8",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marrakech PhotoBooths",
    url: "https://www.marrakechphotobooths.com",
    telephone: "+212621189496",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@marrakechphotobooths.com",
      telephone: "+212621189496",
      availableLanguage: ["French", "Arabic"],
    },
    image: "https://www.marrakechphotobooths.com/images/logo%20header.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marrakech",
      addressLocality: "Marrakech",
      addressRegion: "Marrakech-Safi",
      postalCode: "40000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.6295,
      longitude: -7.9811,
    },
    description: "Location de photobooth pour événements et mariages à Marrakech.",
    priceRange: "2500-5000 MAD",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 31.6295,
        longitude: -7.9811,
      },
      geoRadius: "30000",
    },
    sameAs: [
      "https://www.youtube.com/@marrakechpb",
      "https://www.tiktok.com/@marrakechpb",
      "https://www.linkedin.com/company/marrakechpb",
      "https://www.facebook.com/MarrakechPhotoBooths",
      "https://www.instagram.com/marrakechpb/",
      "https://x.com/marrakechpb",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "22:00",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marrakech PhotoBooths",
    url: "https://www.marrakechphotobooths.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.marrakechphotobooths.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location de Photobooth à Marrakech",
    description: "Service professionnel de location de photobooth pour événements, mariages et fêtes à Marrakech et dans un rayon de 30km.",
    provider: {
      "@type": "LocalBusiness",
      name: "Marrakech PhotoBooths",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 31.6295,
        longitude: -7.9811,
      },
      geoRadius: "30000",
    },
    serviceType: "Photobooth Rental",
    billingDuration: {
      "@type": "QuantitativeValue",
      value: "4",
      unitCode: "HUR",
    },
    offers: {
      "@type": "Offer",
      price: "2500",
      priceCurrency: "MAD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "800",
        maxPrice: "5000",
        priceCurrency: "MAD",
      },
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${platform.variable} ${suisse.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-89VBCBGT6G"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KPKM0DTYVR"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-89VBCBGT6G');
              gtag('config', 'G-KPKM0DTYVR');
              gtag('config', 'AW-XXXXXXXXX');
            `,
          }}
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
