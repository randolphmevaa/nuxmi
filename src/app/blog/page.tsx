// app/blog/page.tsx
import { Metadata } from "next";
import BlogPage from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Nuxmi - Conseils et Actualités sur la Génération de Leads",
  description:
    "Découvrez nos articles experts sur la génération de leads, l'acquisition client, le marketing digital et les meilleures pratiques pour développer votre activité B2B et B2C.",
  keywords: [
    "blog génération de leads",
    "conseils marketing digital",
    "acquisition client",
    "leads B2B",
    "leads B2C",
    "stratégie digitale",
    "growth marketing",
    "conversion leads",
  ],
  alternates: {
    canonical: "https://nuxmi.fr/blog",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nuxmi.fr/blog",
    siteName: "Nuxmi",
    title: "Blog Nuxmi | Expertise en Génération de Leads",
    description:
      "Articles, conseils et actualités sur la génération de leads qualifiés et l'acquisition client.",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Nuxmi - Génération de Leads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nuxmi",
    title: "Blog Nuxmi | Génération de Leads",
    description: "Conseils experts pour générer des leads qualifiés.",
    images: ["/twitter-blog.jpg"],
  },
};

// JSON-LD for Blog listing page
const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://nuxmi.fr/blog#blog",
  name: "Blog Nuxmi",
  description:
    "Articles et conseils sur la génération de leads et l'acquisition client",
  url: "https://nuxmi.fr/blog",
  publisher: {
    "@type": "Organization",
    name: "Nuxmi",
    logo: {
      "@type": "ImageObject",
      url: "https://nuxmi.fr/logo.png",
    },
  },
  inLanguage: "fr-FR",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://nuxmi.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://nuxmi.fr/blog",
    },
  ],
};

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPage />
    </>
  );
}