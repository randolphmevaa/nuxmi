// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import Custom Header Font
const fontHeader = localFont({
  src: [
    {
      path: "./fonts/lemfont-Bold.otf",
      style: "normal",
    },
  ],
  variable: "--font-header",
  display: "swap",
});

// Import Custom Body Font
const fontBody = localFont({
  src: [
    {
      path: "./fonts/RedHatDisplayMedium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  // Basic Meta
  title: {
    default: "Nuxmi | Agence de Génération de Leads B2B & B2C Premium",
    template: "%s | Nuxmi - Génération de Leads",
  },
  description:
    "Agence experte en génération de leads qualifiés. Obtenez des prospects sur-mesure et atteignez 1M€ de CA en 12 mois. Sans engagement, leads exclusifs, transparence totale.",
  keywords: [
    "génération de leads",
    "leads qualifiés",
    "acquisition client",
    "agence lead generation",
    "leads B2B",
    "leads B2C",
    "prospection digitale",
    "growth marketing",
    "leads exclusifs",
    "agence marketing digital",
    "leads premium",
    "acquisition de prospects",
    "marketing automation",
    "stratégie digitale",
    "campagnes publicitaires",
  ],
  authors: [{ name: "Nuxmi", url: "https://nuxmi.fr" }],
  creator: "Nuxmi",
  publisher: "Nuxmi",

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical & Alternates
  metadataBase: new URL("https://nuxmi.fr"),
  alternates: {
    canonical: "https://nuxmi.fr",
    languages: {
      "fr-FR": "https://nuxmi.fr",
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nuxmi.fr",
    siteName: "Nuxmi",
    title: "Nuxmi | Génération de Leads Premium pour Entreprises Ambitieuses",
    description:
      "Transformez votre acquisition client avec des leads qualifiés et exclusifs. +500 clients satisfaits, +25% de taux de conversion, -40% de coût d'acquisition.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nuxmi - Agence de Génération de Leads Premium",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 600,
        height: 600,
        alt: "Nuxmi Logo",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@nuxmi",
    creator: "@nuxmi",
    title: "Nuxmi | Génération de Leads Premium",
    description:
      "Agence experte en acquisition client. Leads qualifiés, exclusifs et sur-mesure pour propulser votre croissance.",
    images: ["/twitter-image.jpg"],
  },

  // App & Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#7c3aed",
      },
    ],
  },
  manifest: "/site.webmanifest",

  // Theme & App
  applicationName: "Nuxmi",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nuxmi",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Category
  category: "business",

  // Other
  other: {
    "msapplication-TileColor": "#7c3aed",
    "theme-color": "#ffffff",
  },
};

// JSON-LD Structured Data for Rich Snippets & Sitelinks
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://nuxmi.fr/#organization",
      name: "Nuxmi",
      url: "https://nuxmi.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://nuxmi.fr/logo.png",
        width: 500,
        height: 200,
      },
      image: "https://nuxmi.fr/og-image.jpg",
      description:
        "Agence de génération de leads premium spécialisée en acquisition client B2B et B2C.",
      foundingDate: "2022",
      founders: [
        {
          "@type": "Person",
          name: "Fondateur Nuxmi",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
        addressLocality: "France",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+33967074695",
          contactType: "customer service",
          availableLanguage: ["French"],
          areaServed: "FR",
        },
        {
          "@type": "ContactPoint",
          telephone: "+33967074695",
          contactType: "sales",
          availableLanguage: ["French"],
          areaServed: "FR",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/nuxmi",
        "https://twitter.com/nuxmi",
        "https://www.facebook.com/nuxmi",
        "https://www.instagram.com/nuxmi",
      ],
      // Aggregate Rating (if you have reviews)
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
    },

    // WebSite Schema with SearchAction (for sitelinks search box)
    {
      "@type": "WebSite",
      "@id": "https://nuxmi.fr/#website",
      url: "https://nuxmi.fr",
      name: "Nuxmi",
      description: "Agence de Génération de Leads Premium",
      publisher: {
        "@id": "https://nuxmi.fr/#organization",
      },
      inLanguage: "fr-FR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://nuxmi.fr/recherche?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://nuxmi.fr/#webpage",
      url: "https://nuxmi.fr",
      name: "Nuxmi | Agence de Génération de Leads B2B & B2C Premium",
      description:
        "Agence experte en génération de leads qualifiés. Obtenez des prospects sur-mesure et atteignez 1M€ de CA en 12 mois.",
      isPartOf: {
        "@id": "https://nuxmi.fr/#website",
      },
      about: {
        "@id": "https://nuxmi.fr/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://nuxmi.fr/og-image.jpg",
      },
      datePublished: "2022-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      inLanguage: "fr-FR",
    },

    // SiteNavigationElement for Sitelinks (Facebook-style navigation in search results)
    {
      "@type": "SiteNavigationElement",
      "@id": "https://nuxmi.fr/#navigation",
      name: "Navigation principale",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          name: "Accueil",
          url: "https://nuxmi.fr",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Secteur d'activité",
          description: "Solutions personnalisées pour votre industrie",
          url: "https://nuxmi.fr/secteur",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Nos expertises",
          description: "Lead generation, stratégie digitale, campagnes publicitaires",
          url: "https://nuxmi.fr/expertises",
        },
        {
          "@type": "SiteNavigationElement",
          name: "À propos",
          description: "Notre histoire et notre équipe",
          url: "https://nuxmi.fr/about",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Contact",
          description: "Parlons de votre projet",
          url: "https://nuxmi.fr/contact",
        },
      ],
    },

    // Service Schema (for rich service snippets)
    {
      "@type": "Service",
      "@id": "https://nuxmi.fr/#service-leadgen",
      serviceType: "Génération de Leads",
      provider: {
        "@id": "https://nuxmi.fr/#organization",
      },
      name: "Génération de Leads Premium",
      description:
        "Service de génération de leads qualifiés B2B et B2C avec ciblage précis et leads exclusifs.",
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Nuxmi",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lead Generation B2B",
              description: "Génération de prospects qualifiés pour entreprises B2B",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Stratégie Digitale 360°",
              description: "Optimisation de votre présence digitale complète",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Campagnes Publicitaires",
              description: "Gestion de campagnes publicitaires performantes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Marketing Automation",
              description: "Automatisation de la génération et nurture de leads",
            },
          },
        ],
      },
    },

    // LocalBusiness Schema (helps with local SEO)
    {
      "@type": "ProfessionalService",
      "@id": "https://nuxmi.fr/#localbusiness",
      name: "Nuxmi",
      image: "https://nuxmi.fr/logo.png",
      url: "https://nuxmi.fr",
      telephone: "+33967074695",
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "48.8566",
        longitude: "2.3522",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/nuxmi",
        "https://twitter.com/nuxmi",
        "https://www.facebook.com/nuxmi",
      ],
    },

    // FAQ Schema (for FAQ rich snippets)
    {
      "@type": "FAQPage",
      "@id": "https://nuxmi.fr/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment fonctionne le processus de génération de leads ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notre processus commence par une analyse approfondie de votre entreprise et de votre marché cible. Nous développons ensuite une stratégie personnalisée, mettons en place des campagnes optimisées et suivons les résultats en temps réel pour ajuster continuellement notre approche.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps faut-il pour voir des résultats ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La plupart de nos clients commencent à voir des résultats tangibles dans les 2 à 4 semaines suivant le lancement des campagnes. Cependant, l'optimisation continue permet d'améliorer progressivement les performances au fil du temps.",
          },
        },
        {
          "@type": "Question",
          name: "Comment garantissez-vous la qualité des leads ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous utilisons des critères de ciblage précis, des messages personnalisés et des processus de qualification rigoureux pour assurer que chaque lead correspond à votre client idéal. Notre approche se concentre sur la qualité plutôt que la quantité.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que vos services conviennent à toutes les industries ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous travaillons principalement avec des entreprises B2B et des services professionnels haut de gamme. Notre expertise s'étend à plusieurs secteurs, mais nous nous spécialisons dans les industries où la valeur du client est élevée.",
          },
        },
      ],
    },

    // BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      "@id": "https://nuxmi.fr/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://nuxmi.fr",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontHeader.variable} ${fontBody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}