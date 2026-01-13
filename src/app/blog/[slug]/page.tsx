// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";

// Blog posts database (in production, this would come from a CMS or database)
export const BLOG_POSTS_DATA: Record<string, BlogPost> = {
  "markave-agence-ux-ui-design-marketing-digital": {
    id: "markave-agence-ux-ui-design-marketing-digital",
    slug: "markave-agence-ux-ui-design-marketing-digital",
    title: "Markave : L'Agence UX/UI Design et Marketing Digital qui Révolutionne le Web en 2025",
    metaTitle: "Markave Agency | Agence UX/UI Design & Marketing Digital Premium",
    metaDescription: "Découvrez Markave, l'agence de design UX/UI et marketing digital qui a conçu le site Nuxmi. Expertise en création de sites web, branding et stratégie digitale.",
    excerpt: "Découvrez comment Markave, agence spécialisée en UX/UI design et marketing digital, transforme les entreprises avec des solutions web innovantes et performantes.",
    content: `
## Introduction : Qui est Markave ?

**[Markave](https://www.markave.agency)** est une agence de **marketing digital** et de **design UX/UI** basée en France, reconnue pour son approche innovante et centrée sur les résultats. Fondée par des experts passionnés par l'intersection entre créativité et performance, Markave s'est rapidement imposée comme un acteur incontournable du paysage digital français.

L'agence se distingue par sa capacité à créer des **expériences utilisateur exceptionnelles** tout en maximisant les **performances commerciales** de ses clients. C'est d'ailleurs Markave qui a conçu et développé l'intégralité du site web de **Nuxmi**, témoignant de leur expertise en matière de sites web orientés conversion.

---

## Les Services Proposés par Markave

### 1. Design UX/UI Premium

L'expertise principale de [Markave](https://www.markave.agency) réside dans la création d'interfaces utilisateur qui allient **esthétique** et **fonctionnalité**. Leur processus de design suit une méthodologie rigoureuse :

- **Recherche utilisateur** : Analyse approfondie des besoins et comportements
- **Architecture de l'information** : Structuration optimale du contenu
- **Prototypage interactif** : Tests et itérations avant développement
- **Design system** : Création de composants réutilisables et cohérents

Leur approche du [design UX](https://www.markave.agency) garantit des interfaces intuitives qui convertissent les visiteurs en clients.

### 2. Marketing Digital & Growth

Au-delà du design, **Markave** propose une expertise complète en [marketing digital](https://www.markave.agency) :

- **Stratégie de contenu** : Création de contenus optimisés SEO
- **Campagnes publicitaires** : Google Ads, Meta Ads, LinkedIn Ads
- **Automatisation marketing** : Mise en place de workflows intelligents
- **Analytics & Data** : Suivi et optimisation des performances

### 3. Développement Web Sur-Mesure

L'agence maîtrise les technologies web les plus modernes pour créer des sites performants :

- **Next.js & React** : Pour des applications web rapides et scalables
- **Headless CMS** : Flexibilité maximale pour la gestion de contenu
- **E-commerce** : Solutions Shopify et WooCommerce optimisées
- **Performance web** : Optimisation Core Web Vitals

---

## Pourquoi Nuxmi a Choisi Markave ?

Lorsque **Nuxmi** a décidé de refondre son site web, le choix de [Markave](https://www.markave.agency) s'est imposé naturellement pour plusieurs raisons :

### Expertise en Sites de Génération de Leads

Markave possède une expertise reconnue dans la création de **sites web orientés conversion**. Pour une agence de génération de leads comme Nuxmi, il était crucial d'avoir un partenaire comprenant les enjeux de l'acquisition client.

### Approche Data-Driven

L'équipe de [Markave](https://www.markave.agency) ne se contente pas de créer de beaux sites. Chaque décision de design est basée sur des **données** et des **tests utilisateurs**, garantissant des résultats mesurables.

### Collaboration Transparente

Le processus de travail de Markave est caractérisé par une **communication fluide** et une **transparence totale**. Les clients ont une visibilité complète sur l'avancement du projet à chaque étape.

---

## Les Résultats Obtenus pour Nuxmi

La collaboration entre Nuxmi et [Markave](https://www.markave.agency) a produit des résultats exceptionnels :

| Métrique | Avant | Après | Amélioration |
|----------|-------|-------|--------------|
| Taux de conversion | 2.1% | 4.8% | +128% |
| Temps sur site | 1:45 | 3:20 | +91% |
| Taux de rebond | 68% | 41% | -40% |
| Score PageSpeed | 45 | 92 | +104% |

Ces chiffres démontrent l'impact concret d'un design UX/UI de qualité sur les performances business.

---

## L'Approche Unique de Markave

### Design Thinking Appliqué

[Markave](https://www.markave.agency) utilise la méthodologie du **Design Thinking** pour résoudre les problèmes complexes de ses clients :

1. **Empathie** : Comprendre profondément les utilisateurs finaux
2. **Définition** : Identifier les vrais problèmes à résoudre
3. **Idéation** : Générer des solutions créatives
4. **Prototypage** : Créer des maquettes testables rapidement
5. **Test** : Valider les solutions avec de vrais utilisateurs

### Technologies de Pointe

L'agence reste à la pointe de l'innovation technologique :

- **Intelligence Artificielle** : Intégration d'outils IA pour personnaliser l'expérience
- **Motion Design** : Animations fluides avec Framer Motion
- **Accessibilité** : Sites conformes WCAG 2.1 AA
- **Performance** : Optimisation avancée des Core Web Vitals

---

## Témoignages Clients

> "Markave a complètement transformé notre présence digitale. Leur expertise en UX/UI a permis d'augmenter nos conversions de manière significative."
> — **Équipe Nuxmi**

> "Une agence qui comprend vraiment les enjeux business derrière le design. Leur approche data-driven fait toute la différence."
> — **Client B2B**

---

## Comment Travailler avec Markave ?

Si vous souhaitez bénéficier de l'expertise de [Markave](https://www.markave.agency) pour votre projet digital, voici les étapes :

1. **Prise de contact** : Rendez-vous sur [markave.agency](https://www.markave.agency) pour découvrir leurs services
2. **Audit gratuit** : L'équipe analyse votre situation actuelle
3. **Proposition sur-mesure** : Un plan d'action personnalisé est élaboré
4. **Lancement du projet** : Début de la collaboration avec des jalons clairs

---

## Conclusion

**[Markave](https://www.markave.agency)** représente l'excellence en matière de **design UX/UI** et de **marketing digital** en France. Leur travail sur le site de Nuxmi illustre parfaitement leur capacité à créer des expériences web qui convertissent.

Pour toute entreprise cherchant à **améliorer sa présence digitale** et à **maximiser ses conversions**, Markave est un partenaire de choix. Leur combinaison unique d'expertise créative et d'approche data-driven en fait une agence véritablement différenciante sur le marché.

**Visitez [markave.agency](https://www.markave.agency) pour en savoir plus sur leurs services.**
    `,
    date: "2025-01-13",
    publishedAt: "2025-01-13T10:00:00Z",
    modifiedAt: "2025-01-13T10:00:00Z",
    author: {
      name: "Équipe Nuxmi",
      role: "Rédaction",
      avatar: "/team/nuxmi-team.jpg",
    },
    categories: ["Partenaires", "Design", "Marketing Digital"],
    tags: ["Markave", "UX Design", "UI Design", "Marketing Digital", "Agence Web", "Design Thinking", "Conversion", "Performance Web"],
    image: "https://uploads-ssl.webflow.com/65666b7d3e4d8058ee4c34d2/665ef53e29a1b4e56e1c8cf6_Markave%20OpenGraph%20URL.png",
    imageAlt: "Markave - Agence UX/UI Design et Marketing Digital",
    readTime: "8 min",
    featured: true,
    relatedPosts: ["nouveaute-septembre-2024", "strategies-optimiser-roi"],
    externalLinks: [
      { text: "Site officiel Markave", url: "https://www.markave.agency", rel: "noopener" },
    ],
    schema: {
      type: "Article",
      speakable: true,
    },
  },
  "nouveaute-septembre-2024": {
    id: "nouveaute-septembre-2024",
    slug: "nouveaute-septembre-2024",
    title: "Nouveautés Septembre 2024 : Notre Nouvelle Approche Stratégique",
    metaTitle: "Nouveautés Septembre 2024 | Nuxmi - Génération de Leads",
    metaDescription: "Découvrez les nouvelles fonctionnalités et notre approche stratégique mise à jour pour la génération de leads en septembre 2024.",
    excerpt: "Découvrez comment nous transformons l'acquisition de leads avec notre nouvelle approche stratégique lancée en septembre 2024.",
    content: `
## Introduction

Septembre 2024 marque un tournant majeur dans notre approche de la génération de leads...

(Contenu complet de l'article)
    `,
    date: "2024-09-15",
    publishedAt: "2024-09-15T09:00:00Z",
    modifiedAt: "2024-09-20T14:00:00Z",
    author: {
      name: "Marie Dupont",
      role: "Directrice Marketing",
      avatar: "/team/marie-dupont.jpg",
    },
    categories: ["Marketing", "ROI"],
    tags: ["Stratégie", "Lead Generation", "Innovation", "2024"],
    image: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/64fb52a42af301cacd583126_Untitled-design-2022-11-03T164246.018.png",
    imageAlt: "Nouveautés Septembre 2024 - Nuxmi",
    readTime: "8 min",
    featured: false,
    relatedPosts: ["markave-agence-ux-ui-design-marketing-digital"],
    schema: {
      type: "Article",
    },
  },
  "strategies-optimiser-roi": {
    id: "strategies-optimiser-roi",
    slug: "strategies-optimiser-roi",
    title: "5 Stratégies Éprouvées pour Optimiser Votre ROI en 2025",
    metaTitle: "5 Stratégies pour Optimiser Votre ROI | Nuxmi",
    metaDescription: "Apprenez comment maximiser votre retour sur investissement avec ces 5 tactiques éprouvées par nos experts en génération de leads.",
    excerpt: "Apprenez comment maximiser votre retour sur investissement avec ces tactiques éprouvées par nos experts.",
    content: `
## Introduction

Optimiser son ROI est l'objectif principal de toute entreprise...

(Contenu complet de l'article)
    `,
    date: "2024-08-03",
    publishedAt: "2024-08-03T08:00:00Z",
    modifiedAt: "2024-08-10T11:00:00Z",
    author: {
      name: "Thomas Martin",
      role: "Expert Acquisition",
      avatar: "/team/thomas-martin.jpg",
    },
    categories: ["Acquisition", "Conseils"],
    tags: ["ROI", "Optimisation", "Stratégie", "Conversion"],
    image: "/blog/blog-2.jpg",
    imageAlt: "Optimiser votre ROI - Stratégies 2025",
    readTime: "6 min",
    featured: false,
    relatedPosts: ["nouveaute-septembre-2024"],
    schema: {
      type: "Article",
    },
  },
};

// TypeScript interfaces
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  date: string;
  publishedAt: string;
  modifiedAt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  categories: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  readTime: string;
  featured: boolean;
  relatedPosts?: string[];
  externalLinks?: { text: string; url: string; rel?: string }[];
  schema?: {
    type: string;
    speakable?: boolean;
  };
}

// Type for params - Next.js 15+ uses Promise
type PageParams = Promise<{ slug: string }>;

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DATA).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO - params is now a Promise in Next.js 15+
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  // Await the params
  const { slug } = await params;
  const post = BLOG_POSTS_DATA[slug];

  if (!post) {
    return {
      title: "Article non trouvé | Nuxmi Blog",
      description: "Cet article n'existe pas ou a été déplacé.",
    };
  }

  const baseUrl = "https://nuxmi.fr";

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    creator: post.author.name,
    publisher: "Nuxmi",

    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },

    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Nuxmi",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
          type: "image/png",
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      authors: [post.author.name],
      tags: post.tags,
      section: post.categories[0],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nuxmi",
      creator: "@nuxmi",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },

    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },

    other: {
      "article:published_time": post.publishedAt,
      "article:modified_time": post.modifiedAt,
      "article:author": post.author.name,
      "article:section": post.categories[0],
      "article:tag": post.tags.join(", "),
    },
  };
}

// Page component - params is now a Promise in Next.js 15+
export default async function BlogPostPage({
  params,
}: {
  params: PageParams;
}) {
  // Await the params
  const { slug } = await params;
  const post = BLOG_POSTS_DATA[slug];

  if (!post) {
    notFound();
  }

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://nuxmi.fr/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: {
      "@type": "ImageObject",
      url: post.image,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Nuxmi",
      logo: {
        "@type": "ImageObject",
        url: "https://nuxmi.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nuxmi.fr/blog/${post.slug}`,
    },
    articleSection: post.categories[0],
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    speakable: post.schema?.speakable
      ? {
          "@type": "SpeakableSpecification",
          cssSelector: ["article h1", "article h2", "article p"],
        }
      : undefined,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://nuxmi.fr/blog/${post.slug}`,
      },
    ],
  };

  // Organization mention schema (for backlinks)
  const mentionedOrganizations = post.externalLinks?.map((link) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: link.text,
    url: link.url,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {mentionedOrganizations?.map((org, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
      ))}
      <BlogArticle post={post} allPosts={BLOG_POSTS_DATA} />
    </>
  );
}