"use client";

import Head from "next/head";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef, useState} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { HeroWithParallax } from "@/components/HeroWithParallax";
// import { ParallaxGallerySection } from "@/components/ParallaxGallerySection";

// Import Heroicons
import {
  ArrowRightIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  PaperAirplaneIcon,
  MagnifyingGlassIcon,
  StarIcon,
  ClockIcon,
  BuildingOffice2Icon,
  ArrowUpIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// Import solid icons for hover states
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

import React from "react";

interface BlurBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
}

interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
  image?: string;
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    {children}
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className = "" }) => (
  <motion.div
    className={`group p-8 bg-white backdrop-blur-sm bg-opacity-90 rounded-2xl shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 ${className}`}
    whileHover={{ 
      scale: 1.03, 
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.06)"
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* ... the rest of your component JSX ... */}
    <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center">
      <div className="absolute inset-0 bg-purple-100 rounded-xl transform -rotate-6 group-hover:rotate-6 transition-all duration-300"></div>
      <div className="absolute inset-0 bg-purple-50 rounded-xl transform rotate-3 group-hover:-rotate-3 transition-all duration-300"></div>
      <div className="relative bg-white rounded-xl p-3 shadow-sm">
        <Icon className="w-10 h-10 text-purple-600 group-hover:text-purple-700 transition-all duration-300" />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-all duration-300">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, href, className = "" }) => (
  <motion.a
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    href={href}
    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.a>
);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true }) => (
  <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-16`}>
    <motion.p 
      className="text-purple-600 font-semibold mb-2 tracking-wide uppercase text-sm"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {title}
    </motion.h2>
    <motion.div 
      className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-6"
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: 80 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}
    />
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating = 5, image }) => (
  <motion.div 
    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex gap-2 mb-4">
      {[...Array(rating)].map((_, i) => (
        <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">&quot;{content}&quot;</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        {image ? (
          <Image src={image} alt={name} width={48} height={48} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-100 text-purple-600 font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </motion.div>
);

export default function Accueil() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const {  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeTab, setActiveTab] = useState(0);

  const title = "Nuxmi | Génération de Leads Haut de Gamme";
  const description =
    "Agence spécialisée en acquisition client premium - Transformez votre taux de conversion";
  const siteUrl = "https://nuxmi.com";

  // Data for the Solution section
  const solutionItems = [
    {
      icon: UserGroupIcon,
      title: "Expert en génération de leads",
      description:
        "Nous concentrons nos efforts pour offrir des résultats exceptionnels en acquisition de prospects.",
    },
    {
      icon: GlobeAltIcon,
      title: "Une stratégie 360°",
      description:
        "Nous optimisons votre présence digitale pour générer des prospects qualifiés.",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Prix du lead",
      description:
        "Sans commissions, obtenez le coût réel du lead et plus de prospects pour le même budget.",
    },
    {
      icon: CheckBadgeIcon,
      title: "Qualité de leads",
      description:
        "Des leads sur-mesure, axés sur la valeur, pour maximiser votre ROI.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Transparence & Leads Exclusifs",
      description:
        "Vous êtes l'unique propriétaire de votre compte publicitaire, garantissant l'origine de vos leads.",
    },
    {
      icon: PaperAirplaneIcon,
      title: "Sans engagements",
      description:
        "Nos services sont sans engagement, car nous croyons en la performance de nos solutions.",
    },
  ];

  // Data for the "Trouvez vos prochains clients rapidement" section
  const prospectItems = [
    {
      icon: MagnifyingGlassIcon,
      title: "Recherche avancée",
      description:
        "Des algorithmes pointus pour cibler précisément vos prospects.",
    },
    {
      icon: StarIcon,
      title: "Qui dit mieux ?",
      description:
        "Des prestations haut de gamme à des tarifs compétitifs pour surpasser la concurrence.",
    },
    {
      icon: ClockIcon,
      title: "Suivi en temps réel",
      description:
        "Un entonnoir complet qui exploite les canaux inexploités et réduit vos CPA.",
    },
  ];

  // Data for the Growth section
  const growthItems = [
    {
      icon: BuildingOffice2Icon,
      title: "Votre entreprise",
      description:
        "Nous analysons votre structure pour identifier les opportunités et optimisations clés.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Notre engagement",
      description:
        "Nous transformons votre offre en une proposition irrésistible qui génère des leads de qualité.",
    },
    {
      icon: ArrowUpIcon,
      title: "Scaling",
      description:
        "Nous automatisons la génération de leads pour propulser votre croissance vers de nouveaux sommets.",
    },
  ];

  // Testimonials data
  const testimonials: TestimonialCardProps[] = [
    {
      name: "Sophie Martin",
      role: "CEO, AgenceDigitale",
      content: "Nuxmi a transformé notre acquisition client. En seulement 3 mois, nos leads ont augmenté de 85% avec une qualité supérieure.",
      rating: 5,
    },
    {
      name: "Thomas Durand",
      role: "Fondateur, StartupInnovante",
      content: "L'approche stratégique et la transparence de Nuxmi ont fait toute la différence. Notre ROI a augmenté de 140% depuis notre collaboration.",
      rating: 5,
    },
    {
      name: "Marie Lefevre",
      role: "Directrice Marketing, EnterpriseGrowth",
      content: "La génération de leads automatisée nous a permis de nous concentrer sur la conversion. Notre chiffre d'affaires a doublé en moins d'un an.",
      rating: 5,
    },
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Comment fonctionne le processus de génération de leads ?",
      answer: "Notre processus commence par une analyse approfondie de votre entreprise et de votre marché cible. Nous développons ensuite une stratégie personnalisée, mettons en place des campagnes optimisées et suivons les résultats en temps réel pour ajuster continuellement notre approche."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "La plupart de nos clients commencent à voir des résultats tangibles dans les 2 à 4 semaines suivant le lancement des campagnes. Cependant, l'optimisation continue permet d'améliorer progressivement les performances au fil du temps."
    },
    {
      question: "Comment garantissez-vous la qualité des leads ?",
      answer: "Nous utilisons des critères de ciblage précis, des messages personnalisés et des processus de qualification rigoureux pour assurer que chaque lead correspond à votre client idéal. Notre approche se concentre sur la qualité plutôt que la quantité."
    },
    {
      question: "Est-ce que vos services conviennent à toutes les industries ?",
      answer: "Nous travaillons principalement avec des entreprises B2B et des services professionnels haut de gamme. Notre expertise s'étend à plusieurs secteurs, mais nous nous spécialisons dans les industries où la valeur du client est élevée."
    },
  ];

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Analyse",
      description: "Étude approfondie de votre marché et de vos objectifs commerciaux"
    },
    {
      number: "02",
      title: "Stratégie",
      description: "Élaboration d'un plan d'action personnalisé et optimisé"
    },
    {
      number: "03",
      title: "Déploiement",
      description: "Mise en œuvre des campagnes et canaux d'acquisition"
    },
    {
      number: "04",
      title: "Optimisation",
      description: "Amélioration continue basée sur l'analyse des données"
    },
  ];

  // Services tabs data
  const servicesTabs = [
    {
      title: "Lead Generation",
      icon: UserGroupIcon,
      content: "Génération de prospects qualifiés à partir de sources diversifiées et ciblées pour votre business.",
      features: [
        "Ciblage précis par secteur et fonction",
        "Qualification avancée des prospects",
        "Intégration avec votre CRM",
        "Reporting détaillé et transparent"
      ]
    },
    {
      title: "Stratégie Digitale",
      icon: GlobeAltIcon,
      content: "Développement d'une présence en ligne optimisée pour maximiser votre visibilité et votre conversion.",
      features: [
        "Audit de votre écosystème digital",
        "Plan stratégique personnalisé",
        "Optimisation des canaux",
        "Mesure de performance"
      ]
    },
    {
      title: "Campagnes Publicitaires",
      icon: MagnifyingGlassIcon,
      content: "Conception et gestion de campagnes publicitaires performantes sur les principales plateformes.",
      features: [
        "Recherche et analyse de mots-clés",
        "Création de contenus publicitaires",
        "Optimisation continue",
        "Suivi des KPIs"
      ]
    },
    {
      title: "Automatisation",
      icon: ArrowUpIcon,
      content: "Mise en place de systèmes automatisés pour générer et nurture vos leads en continu.",
      features: [
        "Workflows d'automatisation",
        "Séquences d'emails personnalisés",
        "Segmentation avancée",
        "Intégration multi-plateformes"
      ]
    },
  ];

  // Articles data (expanded)
  const articles = [
    {
      title: "Nouveauté en Septembre 2024",
      excerpt: "Découvrez comment nous transformons l'acquisition de leads avec notre nouvelle approche stratégique.",
      date: "09/2024",
      image: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/64fb52a42af301cacd583126_Untitled-design-2022-11-03T164246.018.png",
    },
    {
      title: "5 Stratégies pour Optimiser Votre ROI",
      excerpt: "Apprenez comment maximiser votre retour sur investissement avec ces tactiques éprouvées.",
      date: "08/2024",
      image: "/api/placeholder/600/400",
    },
    {
      title: "L'Intelligence Artificielle au Service des Leads",
      excerpt: "Comment l'IA révolutionne la génération et la qualification des prospects pour les entreprises B2B.",
      date: "07/2024",
      image: "/api/placeholder/600/400",
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="/social-preview.jpg" />
        <link rel="canonical" href={siteUrl} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" ref={targetRef}>
        <Navbar />

        <main className="relative z-10">
          {/* HERO SECTION - Enhanced version */}
          <section className="relative overflow-hidden" ref={containerRef}>
          <BlurBackground className="absolute inset-0" />
            
            <div className="relative z-10 pt-40 pb-20 md:pt-48 md:pb-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                  <motion.div 
                    className="md:w-1/2 md:pr-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.span 
                      className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      Agence Lead Generation Premium
                    </motion.span>
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Transformez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">acquisition client</span> pour plus de croissance
                    </motion.h1>
                    <motion.p 
                      className="text-xl text-gray-600 mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Obtenez des leads qualifiés qui génèrent un véritable impact sur votre chiffre d&apos;affaires. Atteignez 1M€ en 12 mois avec notre approche unique.
                    </motion.p>
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <PrimaryButton href="/contact">
                        Obtenir des leads
                        <ArrowRightIcon className="w-5 h-5" />
                      </PrimaryButton>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="#solution"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        Découvrir plus
                        <ChevronRightIcon className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                    <motion.div 
                      className="mt-8 flex items-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-bold text-purple-600">+500</span> clients satisfaits
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 mt-12 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="relative w-full h-[500px] perspective-700">
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 transform rotate-3"
                        animate={{ 
                          rotateY: [0, 5, 0, -5, 0],
                          rotateX: [0, -5, 0, 5, 0]
                        }}
                        transition={{ 
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 10,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute inset-1 rounded-xl overflow-hidden bg-white shadow-xl"
                        animate={{ 
                          rotateY: [0, 3, 0, -3, 0],
                          rotateX: [0, -3, 0, 3, 0]
                        }}
                        transition={{ 
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 10,
                          delay: 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="p-6 h-full">
                          <div className="flex justify-between items-center mb-6">
                            <div className="w-32 h-8 bg-gray-100 rounded"></div>
                            <div className="flex gap-1">
                              {[1, 2, 3].map((item) => (
                                <div key={item} className="w-2 h-2 rounded-full bg-gray-300"></div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            {[1, 2, 3, 4].map((item) => (
                              <div key={item} className="flex items-center p-3 border border-gray-100 rounded-lg">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                  <UserGroupIcon className="w-5 h-5 text-purple-600" />
                                </div>
                                <div className="ml-4 flex-1">
                                  <div className="w-24 h-3 bg-gray-100 rounded mb-2"></div>
                                  <div className="w-32 h-2 bg-gray-50 rounded"></div>
                                </div>
                                <div className="flex items-center justify-center w-16 h-8 bg-purple-50 rounded-lg">
                                  <div className="w-8 h-2 bg-purple-200 rounded"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                              <ArrowRightIcon className="w-8 h-8 text-purple-600" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Stats banner */}
            <div className="relative z-10">
              <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="bg-white rounded-2xl shadow-xl py-8 px-8 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
                      +25%
                    </div>
                    <div className="text-gray-600 font-medium">Taux de conversion</div>
                  </div>
                  <div className="text-center border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
                      2X
                    </div>
                    <div className="text-gray-600 font-medium">Plus de croissance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
                      -40%
                    </div>
                    <div className="text-gray-600 font-medium">Coût d&apos;acquisition</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SOLUTION SECTION - Redesigned */}
          <section id="solution" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                title="Notre Solution" 
                subtitle="Pourquoi nous choisir"
              />
              <motion.p 
                className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Ne payez plus pour des leads non qualifiés. Nous aidons les entrepreneurs
                ambitieux à atteindre plus d&apos;1M de chiffre d&apos;affaires en 12 mois.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {solutionItems.map((item, idx) => (
                  <FeatureCard 
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </motion.div>
              
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <PrimaryButton href="/contact">
                  Obtenez des leads
                  <ArrowRightIcon className="w-5 h-5" />
                </PrimaryButton>
              </motion.div>
            </div>
          </section>

          {/* PROCESS SECTION - New */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                title="Notre Processus" 
                subtitle="Comment nous travaillons"
              />
              
              <div className="mt-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {processSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 border-2 border-purple-100">
                          <span className="text-2xl font-bold text-purple-600">{step.number}</span>
                        </div>
                        {idx < processSteps.length - 1 && (
                          <div className="absolute top-8 left-16 h-0.5 bg-purple-100 w-full hidden md:block" />
                        )}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES TABS SECTION - New */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                title="Nos Services" 
                subtitle="Comment nous vous aidons"
              />
              
              <div className="mt-12">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {servicesTabs.map((tab, idx) => (
                    <motion.button
                      key={idx}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeTab === idx 
                          ? 'bg-purple-600 text-white shadow-lg' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveTab(idx)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <tab.icon className="w-5 h-5" />
                      {tab.title}
                    </motion.button>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-12">
                    <motion.div 
                      className="md:w-1/2"
                      key={activeTab}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
                        {/* <servicesTabs[activeTab].icon className="w-8 h-8 text-purple-600" /> */}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {servicesTabs[activeTab].title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {servicesTabs[activeTab].content}
                      </p>
                      <PrimaryButton href="/contact" className="mt-4">
                        En savoir plus
                        <ArrowRightIcon className="w-5 h-5" />
                      </PrimaryButton>
                    </motion.div>
                    <motion.div 
                      className="md:w-1/2"
                      key={`list-${activeTab}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                        <h4 className="text-xl font-semibold text-gray-900 mb-6">Caractéristiques</h4>
                        <ul className="space-y-4">
                          {servicesTabs[activeTab].features.map((feature, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                            >
                              <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                                <CheckBadgeIcon className="w-3 h-3 text-green-600" />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TROUVEZ VOS PROCHAINS CLIENTS RAPIDEMENT - Enhanced */}
          <section className="py-24 bg-gray-50 relative overflow-hidden">
          <BlurBackground className="absolute inset-0" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionHeader 
                title="Trouvez vos prochains clients rapidement" 
                subtitle="Acquisition client"
              />
              <motion.p 
                className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Nous utilisons des techniques avancées pour identifier et cibler les prospects idéaux pour votre entreprise.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {prospectItems.map((item, idx) => (
                  <FeatureCard 
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
              
              <motion.div 
                className="relative p-8 md:p-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl text-white overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                    <h3 className="text-3xl font-bold mb-4">Prêt à transformer votre acquisition client ?</h3>
                    <p className="text-purple-100 leading-relaxed mb-8">
                      Rejoignez les entreprises qui ont déjà augmenté leur taux de conversion de 25% et réduit leur coût d&apos;acquisition de 40% grâce à notre approche unique de génération de leads.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl text-lg font-semibold shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      Démarrer maintenant
                      <ArrowRightIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <div className="md:w-1/3">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-4xl font-bold mb-2">500+</div>
                      <div className="text-purple-100 font-medium mb-6">Clients satisfaits</div>
                      <div className="text-4xl font-bold mb-2">98%</div>
                      <div className="text-purple-100 font-medium">Taux de rétention</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* TESTIMONIALS SECTION - New */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                title="Ce que disent nos clients" 
                subtitle="Témoignages"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {testimonials.map((testimonial, idx) => (
                  <TestimonialCard 
                    key={idx}
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    image={testimonial.image}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* GROWTH SECTION - Enhanced */}
          <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionHeader 
                title="Croissance Automatisée" 
                subtitle="Growth"
              />
              <motion.p 
                className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                La génération de leads 100% automatisée pour une croissance exponentielle.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {growthItems.map((item, idx) => (
                  <FeatureCard 
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    className="backdrop-blur-sm bg-white bg-opacity-80"
                  />
                ))}
              </div>
              
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <PrimaryButton href="/contact">
                  Obtenez des leads
                  <ArrowRightIcon className="w-5 h-5" />
                </PrimaryButton>
              </motion.div>
            </div>
          </section>

          {/* FAQ SECTION - New */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                title="Questions fréquentes" 
                subtitle="FAQ"
              />
              
              <div className="max-w-3xl mx-auto mt-16">
                <div className="space-y-6">
                  {faqItems.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-6 text-lg font-semibold cursor-pointer">
                        <span className="text-black">{item.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>
                        <div className="px-6 pb-6 text-gray-600">
                          {item.answer}
                        </div>
                      </details>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-12 p-8 bg-gray-50 rounded-2xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-xl text-black font-semibold mb-4">Vous avez d&apos;autres questions ?</h3>
                  <p className="text-gray-600 mb-6">Notre équipe est disponible pour répondre à toutes vos interrogations.</p>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl text-base font-medium transition-all duration-300"
                  >
                    Contactez-nous
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ARTICLES SECTION - Enhanced */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                title="Nos articles" 
                subtitle="Ressources"
              />
              <motion.p 
                className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Retrouvez nos derniers articles ici et suivez toutes les tendances du marketing digital.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, idx) => (
                  <motion.div
                    key={idx}
                    className="group overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.06)"
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="h-52 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          Actualité
                        </span>
                        <span className="text-gray-500 text-sm">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {article.excerpt}
                      </p>
                      <motion.a
                        href="#"
                        className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
                        whileHover={{ x: 5 }}
                      >
                        Lire l&apos;article
                        <ChevronRightIcon className="w-4 h-4 ml-1" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Voir tous les articles
                  <ChevronRightIcon className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* FINAL CTA SECTION - New */}
          <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-96 bg-white opacity-20 rounded-full -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-full h-96 bg-white opacity-20 rounded-full translate-y-1/2 blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.span 
                  className="inline-block py-1 px-3 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  Commencez aujourd&apos;hui
                </motion.span>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Prêt à transformer votre acquisition client ?
                </motion.h2>
                <motion.p 
                  className="text-xl text-purple-100 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Rejoignez les entreprises qui ont déjà augmenté leur croissance et réduit leurs coûts grâce à notre approche unique.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl text-lg font-semibold shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    Démarrer maintenant
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="#solution"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white text-white rounded-xl text-lg font-semibold shadow-sm hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    En savoir plus
                    <ChevronRightIcon className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
