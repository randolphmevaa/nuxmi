"use client";

import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
// import { AnimatedNumber } from "@/components/AnimatedNumber";

// Import Heroicons
import {
  RocketLaunchIcon,
  ChevronDownIcon,
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

// ---------------------------------------------------------
// EnhancedParallaxImage Component (as defined in Navbar file)
// ---------------------------------------------------------
function EnhancedParallaxImage({
  src,
  alt,
  speed = 50,
  customStyle = {},
}: {
  src: string;
  alt: string;
  speed?: number;
  customStyle?: React.CSSProperties;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.05]);
  return (
    <motion.div style={{ y, scale, ...customStyle }} className="absolute">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="rounded-lg shadow-2xl"
      />
    </motion.div>
  );
}

export default function Accueil() {
  const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start start", "end start"],
  // });
  // const yProgress = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // const sectionVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0 },
  // };

  const title = "Nuxmi | Génération de Leads Haut de Gamme";
  const description =
    "Agence spécialisée en acquisition client premium - Transformez votre taux de conversion";
  const siteUrl = "https://nuxmi.com";

  // Data for the Enhanced Parallax Images Section
  const parallaxImagesData = [
    {
      src: "https://via.placeholder.com/300x200?text=Digital+Insight+1",
      style: { top: "10%", left: "5%" },
      speed: 30,
    },
    {
      src: "https://via.placeholder.com/300x200?text=Digital+Insight+2",
      style: { top: "20%", right: "5%" },
      speed: -40,
    },
    {
      src: "https://via.placeholder.com/300x200?text=Digital+Insight+3",
      style: { bottom: "15%", left: "15%" },
      speed: 50,
    },
    {
      src: "https://via.placeholder.com/300x200?text=Digital+Insight+4",
      style: { bottom: "10%", right: "10%" },
      speed: -30,
    },
    {
      src: "https://via.placeholder.com/300x200?text=Digital+Insight+5",
      style: { top: "50%", left: "40%" },
      speed: 40,
    },
  ];

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
          <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-4"
                >
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    Vue sur BFMTV
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
                >
                  Boostez votre croissance<br />
                  avec des leads qualifiés.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-gray-700 mb-10 max-w-lg"
                >
                  Des stratégies digitales performantes pour multiplier vos leads, en finance, immobilier, énergie, assurance ou B2B.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 text-white rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                  >
                    <RocketLaunchIcon className="w-6 h-6" />
                    Obtenir plus de clients
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRightIcon className="w-5 h-5" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
              >
                <Image
                  src="https://via.placeholder.com/600x400?text=Digital+Marketing+Illustration"
                  alt="Digital Marketing Illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
            {/* Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDownIcon className="w-8 h-8 text-gray-600 animate-bounce" />
            </motion.div>
          </section>

          {/* PARALLAX IMAGES SECTION */}
          <section className="relative py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Inspiration Digitale
              </h2>
              <div className="relative h-[600px]">
                {parallaxImagesData.map((item, idx) => (
                  <EnhancedParallaxImage
                    key={idx}
                    src={item.src}
                    alt={`Inspiration ${idx + 1}`}
                    speed={item.speed}
                    customStyle={{
                      ...item.style,
                      width: "300px",
                      height: "200px",
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* SOLUTION SECTION */}
          <section id="solution" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Solution</h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                Ne payez plus pour des leads non qualifiés. Nous aidons les entrepreneurs ambitieux à atteindre plus d&apos;1M de chiffre d&apos;affaires en 12 mois.
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
                    src="https://via.placeholder.com/600x400?text=Article+Preview"
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
