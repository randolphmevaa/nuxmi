"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { HeroWithParallax } from "@/components/HeroWithParallax";
import { ParallaxGallerySection } from "@/components/ParallaxGallerySection";
// import { AnimatedNumber } from "@/components/AnimatedNumber";

// Import Heroicons
import {
  // RocketLaunchIcon,
  // ChevronDownIcon,
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
} from "@heroicons/react/24/outline";

export default function Accueil() {
  const targetRef = useRef(null);

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
        "Vous êtes l’unique propriétaire de votre compte publicitaire, garantissant l’origine de vos leads.",
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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="/social-preview.jpg" />
        <link rel="canonical" href={siteUrl} />
      </Head>

      <div className="min-h-screen bg-white" ref={targetRef}>
        {/* Background particles */}
        <Particles />

        <Navbar />

        <main className="relative z-10">
          {/* HERO SECTION */}
          <div>
            <HeroWithParallax />
            <ParallaxGallerySection />
          </div>

          {/* SOLUTION SECTION */}
          <section id="solution" className="py-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Solution</h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                Ne payez plus pour des leads non qualifiés. Nous aidons les entrepreneurs
                ambitieux à atteindre plus d&apos;1M de chiffre d&apos;affaires en 12 mois.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutionItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:border-purple-200 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <item.icon className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 text-white rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Obtenez des leads
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* TROUVEZ VOS PROCHAINS CLIENTS RAPIDEMENT */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Trouvez vos prochains clients rapidement
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                Nous utilisons des techniques avancées pour identifier et cibler les prospects idéaux.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {prospectItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-purple-200 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <item.icon className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <motion.div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <div className="text-5xl font-bold text-purple-600 mb-2">
                    +25%
                  </div>
                  <div className="text-gray-600 font-medium">Taux de conversion</div>
                </motion.div>
                <motion.div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <div className="text-5xl font-bold text-purple-600 mb-2">
                    2X
                  </div>
                  <div className="text-gray-600 font-medium">Plus de croissance</div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* GROWTH SECTION */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Growth</h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                La génération de leads 100% automatisée.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {growthItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:border-purple-200 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <item.icon className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 text-white rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Obtenez des leads
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* ARTICLES SECTION */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Articles</h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                Retrouvez nos derniers articles ici et suivez toutes les tendances.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-purple-200 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src="https://cdn.prod.website-files.com/62d355d9727756759479db7a/64fb52a42af301cacd583126_Untitled-design-2022-11-03T164246.018.png"
                    alt="Article Preview"
                    width={600}
                    height={400}
                    className="rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Nouveauté en Septembre 2024
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez comment nous transformons l&apos;acquisition de leads...
                  </p>
                  <span className="text-purple-600 font-semibold">
                    09/2024
                  </span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center justify-center p-8 bg-purple-600 rounded-2xl shadow-xl text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-3xl font-bold mb-4">Parcourir</h3>
                  <p className="text-lg">
                    Parcourez l&apos;ensemble de nos articles pour rester à la pointe des tendances.
                  </p>
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
