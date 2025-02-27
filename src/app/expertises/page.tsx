"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FiDollarSign, FiHome, FiZap, FiShield } from "react-icons/fi";
import Link from "next/link";

const sectors = [
  {
    title: "Finance",
    icon: <FiDollarSign className="w-8 h-8" />,
    description: "Stratégies sur mesure pour booster la croissance dans le secteur financier.",
    stats: "+150% de croissance client",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Immobilier",
    icon: <FiHome className="w-8 h-8" />,
    description: "Acquisition de leads de qualité pour transformer votre approche immobilière.",
    stats: "92% de taux de satisfaction",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Énergie",
    icon: <FiZap className="w-8 h-8" />,
    description: "Optimisez vos campagnes pour générer des prospects dans le secteur énergétique.",
    stats: "3x ROI moyen",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Assurance",
    icon: <FiShield className="w-8 h-8" />,
    description: "Des solutions innovantes pour augmenter votre portefeuille de clients.",
    stats: "200 partenaires actifs",
    color: "bg-orange-100 text-orange-600"
  }
];

export default function Secteur() {
  return (
    <>
      <Head>
        <title>Nuxmi | Secteur d&apos;activité</title>
        <meta name="description" content="Découvrez nos secteurs d'activité." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <Navbar />
        <main className="relative z-10 pt-48 pb-16 max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full"
            >
              <span className="text-purple-700 font-medium">Notre expertise</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Domaines d&apos;expertise
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Découvrez comment nous révolutionnons l&apos;acquisition client dans les secteurs clés de l&apos;économie moderne.
            </motion.p>
        </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className={`${sector.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                    {sector.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{sector.title}</h2>
                  <p className="text-gray-600 mb-6">{sector.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-purple-600">{sector.stats}</span>
                    <button className="px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      En savoir plus →
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </section>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 inline-block">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Votre secteur n&apos;est pas listé ?
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Notre approche innovante s&apos;adapte à tous les domaines d&apos;activité.
                Parlons de vos besoins spécifiques.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow">
                Contactez notre équipe
              </button>
            </div>
          </motion.div>
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
