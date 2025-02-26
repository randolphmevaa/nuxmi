"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FiHeart, FiTarget, FiStar, FiUsers, FiGlobe } from "react-icons/fi";

const BlurBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>
);

export default function About() {
  return (
    <>
      <Head>
        <title>Nuxmi | À Propos</title>
        <meta name="description" content="Apprenez-en plus sur Nuxmi, notre histoire, notre mission et notre équipe." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <BlurBackground />
        <Navbar />
        <main className="relative z-10 pt-48 pb-16 max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <motion.header
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-purple-700 font-medium">Notre Histoire & Vision</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              À Propos de Nuxmi
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Découvrez notre parcours, notre mission et l’équipe qui révolutionne le digital.
            </motion.p>
          </motion.header>

          {/* Our History Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Notre Histoire"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Fondée sur la passion du digital, Nuxmi est devenue une référence en génération de leads premium.
                Nous avons transformé des défis en opportunités grâce à l&apos;innovation et à une technologie de pointe.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </section>

          {/* Our Mission Section */}
          <section className="mt-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Notre Mission</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Nous visons à transformer l&apos;acquisition client grâce à l&apos;innovation, l&apos;excellence et une approche centrée sur vos besoins.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FiTarget className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Innovation</h3>
                <p className="text-gray-700 text-center">
                  Nous adoptons les technologies les plus avancées pour rester à la pointe de l&apos;acquisition digitale.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FiHeart className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Passion</h3>
                <p className="text-gray-700 text-center">
                  Notre équipe est animée par la passion de créer des solutions sur mesure pour nos clients.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FiStar className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Excellence</h3>
                <p className="text-gray-700 text-center">
                  Nous nous engageons à fournir des résultats exceptionnels en alliant expertise et créativité.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="mt-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nos Valeurs</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                L&apos;intégrité, l&apos;innovation, la collaboration et l&apos;excellence guident chacune de nos actions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FiGlobe className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Vision</h3>
                <p className="text-gray-700">
                  Nous visons à impacter positivement le marché mondial en connectant les meilleures technologies.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FiTarget className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">
                  Toujours à la recherche des solutions les plus créatives et efficaces.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FiUsers className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-700">
                  Travailler ensemble pour créer des solutions impactantes.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FiStar className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-700">
                  Pousser nos limites pour obtenir des résultats remarquables.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="mt-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Notre Équipe</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Rencontrez les esprits brillants derrière Nuxmi.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Membre de l'équipe"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Alice Dupont</h3>
                <p className="text-gray-700">CEO & Fondatrice</p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Membre de l'équipe"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Jean Martin</h3>
                <p className="text-gray-700">Directeur Technique</p>
              </motion.div>
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Membre de l'équipe"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Sophie Legrand</h3>
                <p className="text-gray-700">Responsable Marketing</p>
              </motion.div>
            </div>
          </section>

          {/* Call to Action Section */}
          <motion.section
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 inline-block">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vous avez des questions ou un projet en tête ?
              </h3>
              <p className="text-gray-700 max-w-xl mx-auto mb-6">
                Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons transformer votre vision en réalité.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Contactez-nous
              </motion.button>
            </div>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  );
}
