"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import React, { ReactNode } from "react";

interface BlurBackgroundProps {
  children?: ReactNode;
  className?: string;
}

const BlurBackground = ({ children, className }: BlurBackgroundProps) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full mix-blend-soft-light filter blur-[100px] opacity-30 animate-blob"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-soft-light filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-300 rounded-full mix-blend-soft-light filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
    {children}
  </div>
);

export default function Contact() {
  return (
    <>
      <Head>
        <title>Nuxmi | Contact</title>
        <meta name="description" content="Contactez-nous pour en savoir plus sur nos solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <BlurBackground className="absolute inset-0" />
        <Navbar />
        
        <main className="relative z-10 pt-48 pb-16 max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full"
            >
              <span className="text-purple-700 font-medium">Discutons ensemble</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contactez-nous
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Pour toute demande d&apos;information, remplissez le formulaire ci-dessous ou contactez-nous directement.
            </motion.p>
        </header>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-purple-100 rounded-xl">
                    <FiMapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Notre siège</h3>
                    <p className="text-gray-600">12 Rue de l&apos;Innovation<br/>75001 Paris, France</p>
                  </div>
                </div>

                <div className="h-48 rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647356148514!5m2!1sfr!2sfr" 
                    className="w-full h-full rounded-lg border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FiPhone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                      <p className="text-gray-600 font-medium">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-pink-100 rounded-lg">
                      <FiMail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 font-medium">contact@nuxmi.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <form className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-300"
                      placeholder="Jean Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-300"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 hover:border-gray-300"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                >
                  <FiSend className="w-5 h-5" />
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-600">
              Nous répondons généralement sous <span className="font-semibold text-purple-600">24 heures</span>
            </p>
            <div className="mt-4 flex justify-center gap-4">
              {/* Social media links can be added here */}
            </div>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}