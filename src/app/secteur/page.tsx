"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { JSX, useState } from "react";
import React from "react";
import Link from "next/link";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Define prop types for the BlurBackground component.
interface BlurBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    {children}
  </div>
);

// Define a type for individual stats.
interface Stat {
  label: string;
  value: string;
}

// Define prop types for the SectorCard component.
interface SectorCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  stats: Stat[];
  delay: number;
}

const SectorCard: React.FC<SectorCardProps> = ({ title, description, icon, stats, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden group"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`p-8 md:p-10 rounded-2xl shadow-lg h-full transition-all duration-300 ${isHovered ? 'bg-gradient-to-br from-purple-600 to-indigo-700 transform scale-[1.02]' : 'bg-white'}`}>
        <div className="flex items-start">
          <div className={`p-4 rounded-xl ${isHovered ? 'bg-white bg-opacity-20' : 'bg-purple-100'} mr-4`}>
            {icon}
          </div>
          <div>
            <h2 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            <p className={`transition-colors duration-300 ${isHovered ? 'text-white text-opacity-90' : 'text-gray-700'}`}>
              {description}
            </p>
            
            <div className={`mt-6 grid grid-cols-2 gap-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              {stats.map((stat, i) => (
                <div key={i} className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <p className="text-white text-opacity-80 text-sm">{stat.label}</p>
                  <p className="text-white font-bold text-xl">{stat.value}</p>
                </div>
              ))}
            </div>
            
            <motion.div 
              className={`mt-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <button className="px-6 py-2 bg-white text-purple-700 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                En savoir plus
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-300 ${isHovered ? 'bg-white' : 'bg-purple-500 opacity-0'}`}></div>
    </motion.div>
  );
};

// Define a type for the sector data.
interface Sector {
  title: string;
  description: string;
  icon: JSX.Element;
  stats: Stat[];
}

export default function Secteur() {
  const sectors: Sector[] = [
    {
      title: "Finance",
      description:
        "Stratégies sur mesure pour booster la croissance dans le secteur financier. Nos solutions aident les institutions financières à acquérir de nouveaux clients qualifiés tout en optimisant leur ROI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: [
        { label: "Taux de conversion", value: "+45%" },
        { label: "Clients", value: "250+" },
        { label: "ROI moyen", value: "3.8x" },
        { label: "Leads qualifiés", value: "12K+" }
      ]
    },
    {
      title: "Immobilier",
      description:
        "Acquisition de leads de qualité pour transformer votre approche immobilière. Nous aidons les agences et promoteurs à identifier et convertir les acheteurs et vendeurs potentiels.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      stats: [
        { label: "Transactions facilitées", value: "1.2K+" },
        { label: "Coût/Acquisition", value: "-32%" },
        { label: "Partenaires", value: "85+" },
        { label: "Valeur générée", value: "320M€" }
      ]
    },
    {
      title: "Énergie",
      description:
        "Optimisez vos campagnes pour générer des prospects dans le secteur énergétique. Nos stratégies aident les fournisseurs d'énergie traditionnels et verts à développer leur clientèle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: [
        { label: "Clients acquis", value: "45K+" },
        { label: "Énergie verte", value: "68%" },
        { label: "Croissance", value: "+52%" },
        { label: "Rétention", value: "94%" }
      ]
    },
    {
      title: "Assurance",
      description:
        "Des solutions innovantes pour augmenter votre portefeuille de clients. Nous aidons les compagnies d'assurance à identifier et convertir les prospects à fort potentiel.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: [
        { label: "Primes générées", value: "76M€" },
        { label: "Satisfaction client", value: "4.8/5" },
        { label: "Taux de rétention", value: "89%" },
        { label: "Nouveaux clients", value: "17.5K" }
      ]
    },
    {
      title: "Éducation",
      description:
        "Stratégies d'acquisition pour les établissements d'enseignement supérieur. Nous aidons les écoles et universités à attirer des étudiants qualifiés et motivés.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      stats: [
        { label: "Inscriptions", value: "+38%" },
        { label: "Établissements", value: "45+" },
        { label: "Taux de qualification", value: "92%" },
        { label: "ROI moyen", value: "4.2x" }
      ]
    },
    {
      title: "Santé",
      description:
        "Solutions de marketing pour les professionnels et établissements de santé. Nous aidons à connecter les patients avec les bons professionnels et services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      stats: [
        { label: "Rendez-vous générés", value: "124K+" },
        { label: "Cliniques partenaires", value: "78" },
        { label: "Satisfaction patient", value: "97%" },
        { label: "Croissance annuelle", value: "+42%" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Nuxmi | Secteurs d&apos;activité</title>
        <meta name="description" content="Découvrez nos secteurs d'activité et comment nous créons des stratégies d'acquisition client sur mesure pour chaque industrie." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <BlurBackground className="absolute inset-0" />
          {/* You can pass children here if needed */}
        {/* </BlurBackground> */}
        <Navbar />
        <main className="relative z-10 pt-48 pb-16 max-w-7xl mx-auto px-4">
          <motion.header 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 font-medium">Expertise sectorielle</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Secteurs d&apos;activité
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Nous développons des stratégies d&apos;acquisition client adaptées aux spécificités de chaque secteur.
              Découvrez comment nous transformons les défis de votre industrie en opportunités de croissance.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sectors.map((sector, index) => (
              <SectorCard 
                key={index}
                title={sector.title}
                description={sector.description}
                icon={sector.icon}
                stats={sector.stats}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
          
          <motion.section 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vous ne trouvez pas votre secteur?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Chaque industrie présente des défis uniques. Contactez-nous pour discuter de votre secteur spécifique
              et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <motion.a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Discutons de votre projet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.section>
          
          <motion.section 
            className="mt-24 bg-white bg-opacity-90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise sectorielle</h3>
                <p className="text-gray-700">
                  Nos consultants sont spécialisés par secteur, avec une connaissance approfondie des enjeux spécifiques.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stratégies sur mesure</h3>
                <p className="text-gray-700">
                  Nous développons des approches adaptées à chaque secteur, en tenant compte des réglementations et tendances du marché.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Résultats mesurables</h3>
                <p className="text-gray-700">
                  Nos indicateurs de performance sont alignés sur les objectifs spécifiques de votre secteur et de votre entreprise.
                </p>
              </div>
            </div>
          </motion.section>
          <Link
            href="https://wa.me/1234567890?text=Bonjour%20!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center
                        w-14 h-14 bg-[#25D366] rounded-full shadow-md
                        hover:bg-[#20b358] transition-all"
            aria-label="WhatsApp Chat"
            >
                {/* Replace the old SVG with this new one */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" 
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    // Keeping Tailwind classes so it appears white and sized properly:
                    className="text-white w-7 h-7"
                >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 
                            .068 3.558.064 7.926c0 1.399.366 2.76 1.057 
                            3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 
                            0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 
                            14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433
                            -.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 
                            6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 
                            1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934
                            c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099
                            -.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1
                            -.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114
                            -.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114
                            .133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445
                            -1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247
                            -.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 
                            1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47
                            .205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171
                            -.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133
                            -.38-.232"/>
                </svg>
            </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
