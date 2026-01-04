"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FiArrowRight, FiSearch, FiCalendar } from "react-icons/fi";
import React, { useState } from "react";
import Link from "next/link";

// Reusing the BlurBackground component from the original code
interface BlurBackgroundProps {
  children?: React.ReactNode;
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

// Blog post data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Nouveauté en Septembre 2024",
    excerpt: "Découvrez comment nous transformons l'acquisition de leads avec notre nouvelle approche stratégique.",
    date: "15 septembre 2024",
    author: "Marie Dupont",
    categories: ["Marketing", "ROI"],
    image: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/64fb52a42af301cacd583126_Untitled-design-2022-11-03T164246.018.png",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "5 Stratégies pour Optimiser Votre ROI",
    excerpt: "Apprenez comment maximiser votre retour sur investissement avec ces tactiques éprouvées.",
    date: "3 aout 2024",
    author: "Thomas Martin",
    categories: ["Acquisition", "Conseils"],
    image: "/blog/blog-2.jpg",
    readTime: "6 min"
  },
  {
    id: 3,
    title: "L'Intelligence Artificielle au Service des Leads",
    excerpt: "Comment l'IA révolutionne la génération et la qualification des prospects pour les entreprises B2B.",
    date: "25 juillet 2024",
    author: "Sophie Laurent",
    categories: ["Énergie", "Ventes"],
    image: "/blog/blog-3.jpg",
    readTime: "10 min"
  },
  {
    id: 4,
    title: "Comment automatiser votre suivi client pour ne manquer aucune opportunité",
    excerpt: "Les outils et techniques pour mettre en place un système de suivi automatisé qui transforme plus de prospects en clients satisfaits.",
    date: "18 janvier 2026",
    author: "Jean Moreau",
    categories: ["Automatisation", "CRM"],
    image: "/blog/blog-4.jpg",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Les nouvelles réglementations 2026 dans le secteur de la rénovation énergétique",
    excerpt: "Tout ce que vous devez savoir sur les changements législatifs qui impactent le marché de la rénovation énergétique cette année.",
    date: "5 janvier 2026",
    author: "Claire Dubois",
    categories: ["Législation", "Rénovation"],
    image: "/blog/blog-5.jpg",
    readTime: "9 min"
  }
];

// Categories for filtering
const CATEGORIES = ["Tous", "Marketing", "Acquisition", "Énergie", "Ventes", "Automatisation", "CRM", "Législation", "Rénovation", "ROI", "Conseils"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Filter blog posts based on search term and selected category
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Function to get initials from name (reused from original code)
  function getInitials(name: string) {
    const parts = name.trim().split(" ");
    const firstInitial = parts[0]?.[0]?.toUpperCase() || "";
    const lastInitial = parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }

  return (
    <>
      <Head>
        <title>Nuxmi | Blog - Conseils et actualités sur la génération de leads</title>
        <meta
          name="description"
          content="Découvrez nos articles sur les meilleures pratiques pour acquérir et convertir des leads qualifiés et exclusifs"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <BlurBackground className="absolute inset-0" />
        <Navbar />

        <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="relative z-10 pt-20 pb-20 md:pt-20 md:pb-32">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 
                            bg-clip-text text-transparent bg-gradient-to-r 
                            from-purple-700 to-indigo-700 mb-6">
                Notre Blog
              </h1>
              <p className="text-xl text-gray-700 mb-10">
                Découvrez nos derniers articles, conseils et actualités sur la génération de leads
                et les meilleures pratiques pour développer votre activité.
              </p>

              {/* Search & Filter */}
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 
                              rounded-xl text-gray-800 focus:outline-none 
                              focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                              transition-all placeholder-gray-400"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="md:w-64">
                  <select
                    className="block w-full pl-3 pr-10 py-3 border border-gray-200 
                              rounded-xl text-gray-800 focus:outline-none 
                              focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                              transition-all appearance-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Blog Posts */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02]"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 font-medium">Image de couverture</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <FiCalendar className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <span>{post.readTime} de lecture</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map((category) => (
                          <span
                            key={category}
                            className="inline-block px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="px-6 pb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center text-xs text-white font-bold mr-2">
                          {getInitials(post.author)}
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-purple-600 font-medium flex items-center hover:text-purple-800 transition-colors"
                      >
                        Lire 
                        <FiArrowRight className="ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-3 py-10 text-center text-gray-500">
                  Aucun article ne correspond à votre recherche.
                </div>
              )}
            </div>
          </section>

          {/* Newsletter Section */}
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
                  Ne manquez aucun article
                </h2>
                <p className="text-lg md:text-xl mb-8 text-purple-100">
                  Inscrivez-vous à notre newsletter pour recevoir nos derniers articles
                  et conseils directement dans votre boîte mail.
                </p>

                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      className="px-6 py-4 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 rounded-xl border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex-grow"
                      placeholder="Votre adresse email"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      S&apos;inscrire
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}