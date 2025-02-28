"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiCheckCircle,
  FiSend,
  FiPhone,
  FiBriefcase,
  FiMail,
  FiUser,
  FiMap,
  FiTarget
} from "react-icons/fi";
import React, { ReactNode, useState } from "react";
// import Image from "next/image";
import Link from "next/link";

interface BlurBackgroundProps {
  children?: ReactNode;
  className?: string;
}

const BlurBackground = ({ children, className }: BlurBackgroundProps) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mix-blend-soft-light filter blur-[120px] opacity-40 animate-blob"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mix-blend-soft-light filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full mix-blend-soft-light filter blur-[120px] opacity-40 animate-blob animation-delay-4000"></div>
    {children}
  </div>
);

const ACTIVITES = [
  "Pompe à chaleur",
  "Panneau solaire",
  "Assurance",
  "Travaux",
  "Isolation",
  "Rénovation globale",
  "Chaudière à granulé",
  "Thermostat Connectée",
  "Autre"
];

const LEADS_COUNT = [5, 10, 15, 20, 30, 40, 50, 75, 100, 150, 200, 300, 500];

const FEATURES = [
  {
    icon: <FiTarget className="w-6 h-6 text-indigo-600" />,
    title: "Campagne sur mesure",
    content:
      "Chaque client bénéficie d'une campagne personnalisée, adaptée à ses critères de ciblage spécifiques."
  },
  {
    icon: <FiCheckCircle className="w-6 h-6 text-green-600" />,
    title: "+25% de conversion",
    content:
      "Grâce à la réception en temps réel, nous atteignons un taux de conversion impressionnant de 25%."
  },
  {
    icon: <FiPhone className="w-6 h-6 text-blue-600" />,
    title: "Vérification du numéro",
    content:
      "Ne perdez plus de temps avec des numéros erronés ! Notre système détecte et filtre les faux numéros efficacement."
  },
  {
    icon: <FiBriefcase className="w-6 h-6 text-purple-600" />,
    title: "Frais & 100% exclusifs",
    content:
      "Les leads reçus sont générés le jour même via nos campagnes d'acquisition."
  },
  {
    icon: <FiMap className="w-6 h-6 text-rose-600" />,
    title: "Ciblage géographique",
    content:
      "Nous ciblons vos leads en fonction de vos zones de chalandise (Région, département, ville)."
  },
  {
    icon: <FiSend className="w-6 h-6 text-amber-600" />,
    title: "+ 3000 leads par semaine",
    content:
      "Pompe à chaleur, Panneaux solaires, Isolation, Rénovation globale et bien plus encore."
  }
];

const TESTIMONIALS = [
  {
    name: "Marie Dupont",
    company: "Eco-Solutions Paris",
    testimonial:
      "Nous avons augmenté notre CA de 45% en seulement 3 mois grâce aux leads qualifiés de Nuxmi. L'investissement a été rentabilisé en moins de 6 semaines!",
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    name: "Thomas Martin",
    company: "Solaris Énergie",
    testimonial:
      "La qualité des leads est exceptionnelle. Le taux de conversion a dépassé toutes nos attentes et notre équipe commerciale est enfin pleinement productive.",
    avatar: "/avatars/avatar-2.jpg"
  },
  {
    name: "Sophie Laurent",
    company: "Habitat Rénov",
    testimonial:
      "Le ciblage géographique nous permet d'optimiser nos déplacements et d'être beaucoup plus efficaces sur le terrain. Un service qui a transformé notre business.",
    avatar: "/avatars/avatar-3.jpg"
  }
];

export default function Leads() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mailSent, setMailSent] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    activite: ACTIVITES[0],
    leadsParSemaine: LEADS_COUNT[2]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("API response:", data);
      // Set mailSent to true after a successful submission
      setMailSent(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally handle errors here
    }
  };

  // Auto-rotate testimonials every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function getInitials(name: string) {
    const parts = name.trim().split(" ");
    const firstInitial = parts[0]?.[0]?.toUpperCase() || "";
    const lastInitial =
      parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }

  return (
    <>
      <Head>
        <title>Nuxmi | Leads Qualifiés & Exclusifs</title>
        <meta
          name="description"
          content="Alimentez votre business en prospects qualifiés et augmentez votre chiffre d'affaires de manière fiable et rentable"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <BlurBackground className="absolute inset-0" />
        <Navbar />

        <main className="relative z-10 pt-48 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="grid lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 self-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-purple-100 rounded-full"
              >
                <FiPhone className="w-4 h-4 text-purple-700" />
                <span className="text-purple-700 font-medium">09 67 07 46 95</span>
              </motion.div>

                <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 
                            bg-clip-text text-transparent bg-gradient-to-r 
                            from-purple-700 to-indigo-700 leading-tight"
                >
                Des leads qualifiés et{" "}
                <span className="relative inline-block !text-gray-900 !bg-none !bg-clip-border !text-opacity-100">
                    exclusifs
                    <svg
                    className="absolute -bottom-2 w-full"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                    >
                    <path
                        d="M0,5 Q40,15 80,5 T160,5"
                        stroke="rgb(168, 85, 247)"
                        strokeWidth="4"
                        fill="none"
                    />
                    </svg>
                </span>{" "}
                pour booster votre business
                </motion.h1>

              <motion.p
                className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Alimentez quotidiennement votre activité en prospects de qualité et libérez
                du temps grâce à notre système automatisé d&apos;acquisition de leads.
              </motion.p>

              <div className="space-y-4 pt-4">
                {[
                  "Sans engagement, ni frais de mise en service",
                  "Leads 100% Frais & Exclusifs",
                  "Envois en temps réel par SMS"
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-6"
              >
                <div className="inline-flex items-center space-x-3 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 border-2 border-white flex items-center justify-center text-xs text-white font-bold"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                  <span>+450 entreprises nous font confiance</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column (Form or Confirmation Message) */}
            <motion.div
              className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full opacity-50 -z-0"></div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 relative z-10">
                Obtenez des leads qualifiés maintenant
              </h3>

              {mailSent ? (
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Merci !
                  </h3>
                  <p className="text-lg text-gray-700">
                    Votre demande a bien été envoyée. Nous vous contacterons sous peu.
                  </p>
                </div>
              ) : (
                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                  {/* Grid for Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 
                            rounded-xl text-gray-800 focus:outline-none 
                            focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all placeholder-gray-400 hover:border-gray-300"
                          placeholder="Votre nom complet"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 
                            rounded-xl text-gray-800 focus:outline-none 
                            focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all placeholder-gray-400 hover:border-gray-300"
                          placeholder="Votre adresse mail"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de téléphone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 
                          rounded-xl text-gray-800 focus:outline-none 
                          focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                          transition-all placeholder-gray-400 hover:border-gray-300"
                        placeholder="Votre numéro de téléphone"
                        required
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiBriefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 
                          rounded-xl text-gray-800 focus:outline-none 
                          focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                          transition-all placeholder-gray-400 hover:border-gray-300"
                        placeholder="Nom de l'entreprise"
                        required
                      />
                    </div>
                  </div>

                  {/* Grid for Activite & Leads par semaine */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Activite select */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Activité
                      </label>
                      <div className="relative">
                        <select
                          name="activite"
                          value={formData.activite}
                          onChange={handleInputChange}
                          className="block w-full pl-3 pr-10 py-3 border border-gray-200 
                            rounded-xl text-gray-800 focus:outline-none 
                            focus:ring-2 focus:ring-purple-500 
                            focus:border-transparent transition-all appearance-none"
                        >
                          {ACTIVITES.map((activite, index) => (
                            <option key={index} value={activite}>
                              {activite}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Custom number input (1 to 1000) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Leads par semaine
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="leadsParSemaine"
                          value={formData.leadsParSemaine}
                          onChange={handleInputChange}
                          min={1}
                          max={1000}
                          className="block w-full pl-3 pr-3 py-3 border border-gray-200 
                            rounded-xl text-gray-800 focus:outline-none 
                            focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all placeholder-gray-400 hover:border-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 
                      text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                      transition-all flex items-center justify-center gap-2 group"
                    type="submit"
                  >
                    <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Demander des leads maintenant
                  </motion.button>
                </form>
              )}
            </motion.div>
          </section>

          {/* Trust Indicators */}
          {/* <section className="mb-24">
            <div className="py-8 border-y border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {["logo1", "logo2", "logo3", "logo4", "logo5"].map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="h-8 grayscale transition-all hover:grayscale-0"
                  >

                    <div className="h-full w-24 bg-gray-300 rounded-md flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-xs">Logo {index + 1}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Value Proposition */}
          <section className="text-center mb-24">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Augmentez votre CA de 30K à 190K€/mois
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Notre solution garantit un flux constant de prospects qualifiés pour assurer
              une croissance fiable, récurrente et rentable.
            </motion.p>
          </section>

          {/* Features Grid */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:shadow-xl transition-shadow"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full opacity-40"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 pt-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.content}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
        <section className="mb-24">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-bl from-purple-200 to-transparent rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-gradient-to-tr from-indigo-200 to-transparent rounded-full opacity-50"></div>

            <div className="relative z-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ce que nos clients disent
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez comment nos solutions de génération de leads ont transformé
                le business de nos clients.
                </p>
            </div>

            <div className="relative">
                <div className="overflow-hidden">
                <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto"
                >
                    <svg
                    className="text-purple-400 w-10 h-10 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>

                    <p className="text-gray-700 text-lg mb-6">
                    {TESTIMONIALS[currentTestimonial].testimonial}
                    </p>

                    <div className="flex items-center">
                    {/* 2) Render initials instead of an avatar */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center text-gray-700 font-bold">
                        {getInitials(TESTIMONIALS[currentTestimonial].name)}
                    </div>
                    {/* 3) Name and company as before */}
                    <div>
                        <p className="font-medium text-gray-900">
                        {TESTIMONIALS[currentTestimonial].name}
                        </p>
                        <p className="text-sm text-gray-500">
                        {TESTIMONIALS[currentTestimonial].company}
                        </p>
                    </div>
                    </div>
                </motion.div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                {TESTIMONIALS.map((_, i) => (
                    <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    aria-label={`Voir témoignage ${i + 1}`}
                    />
                ))}
                </div>
            </div>
            </div>
        </motion.div>
        </section>

          {/* CTA Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <svg
                  className="absolute left-0 top-0 h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 800"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <radialGradient
                      id="radialGradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="400" cy="400" r="600" fill="url(#radialGradient)" />
                </svg>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à transformer votre activité ?
                </h2>
                <p className="text-lg md:text-xl mb-8 text-purple-100">
                  Commencez dès maintenant à recevoir des leads qualifiés et
                  exclusifs adaptés à votre activité.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Demander une démo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:0967074695"
                    className="px-8 py-4 bg-purple-500 bg-opacity-90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Nous appeler
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </section>

            <Link
            href="https://wa.me/message/XP2DMY6CM7QXK1?text=Bonjour%20!"
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
