// components/BlogPage.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiSearch, FiCalendar, FiClock, FiArrowRight, FiChevronRight } from "react-icons/fi";

// Blog posts data
const BLOG_POSTS = [
  {
    id: "markave-agence-ux-ui-design-marketing-digital",
    slug: "markave-agence-ux-ui-design-marketing-digital",
    title: "Markave : L'Agence UX/UI Design et Marketing Digital qui Révolutionne le Web",
    excerpt: "Découvrez comment Markave, agence spécialisée en UX/UI design et marketing digital, transforme les entreprises avec des solutions web innovantes.",
    date: "13 janvier 2025",
    author: "Équipe Nuxmi",
    categories: ["Partenaires", "Design"],
    image: "https://uploads-ssl.webflow.com/65666b7d3e4d8058ee4c34d2/665ef53e29a1b4e56e1c8cf6_Markave%20OpenGraph%20URL.png",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "nouveaute-septembre-2024",
    slug: "nouveaute-septembre-2024",
    title: "Nouveauté en Septembre 2024",
    excerpt: "Découvrez comment nous transformons l'acquisition de leads avec notre nouvelle approche stratégique.",
    date: "15 septembre 2024",
    author: "Marie Dupont",
    categories: ["Marketing", "ROI"],
    image: "https://cdn.prod.website-files.com/62d355d9727756759479db7a/64fb52a42af301cacd583126_Untitled-design-2022-11-03T164246.018.png",
    readTime: "8 min",
    featured: false,
  },
  {
    id: "strategies-optimiser-roi",
    slug: "strategies-optimiser-roi",
    title: "5 Stratégies pour Optimiser Votre ROI",
    excerpt: "Apprenez comment maximiser votre retour sur investissement avec ces tactiques éprouvées.",
    date: "3 août 2024",
    author: "Thomas Martin",
    categories: ["Acquisition", "Conseils"],
    image: "/blog/blog-2.jpg",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "intelligence-artificielle-leads",
    slug: "intelligence-artificielle-leads",
    title: "L'Intelligence Artificielle au Service des Leads",
    excerpt: "Comment l'IA révolutionne la génération et la qualification des prospects pour les entreprises B2B.",
    date: "25 juillet 2024",
    author: "Sophie Laurent",
    categories: ["Technologie", "IA"],
    image: "/blog/blog-3.jpg",
    readTime: "10 min",
    featured: false,
  },
  {
    id: "automatisation-suivi-client",
    slug: "automatisation-suivi-client",
    title: "Comment automatiser votre suivi client",
    excerpt: "Les outils et techniques pour mettre en place un système de suivi automatisé qui transforme plus de prospects en clients.",
    date: "18 janvier 2025",
    author: "Jean Moreau",
    categories: ["Automatisation", "CRM"],
    image: "/blog/blog-4.jpg",
    readTime: "7 min",
    featured: false,
  },
];

const CATEGORIES = [
  "Tous",
  "Marketing",
  "Acquisition",
  "Technologie",
  "IA",
  "Automatisation",
  "CRM",
  "Design",
  "Partenaires",
  "ROI",
  "Conseils",
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Tous" || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          </div>

          <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
            {/* Breadcrumbs */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-gray-500 mb-8"
            >
              <Link href="/" className="hover:text-purple-600 transition-colors">
                Accueil
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Blog</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Notre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Découvrez nos derniers articles, conseils et actualités sur la
                génération de leads et les meilleures pratiques pour développer
                votre activité.
              </p>
            </motion.div>

            {/* Search & Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-2 flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all cursor-pointer sm:w-48"
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
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "Tous" && !searchTerm && (
          <section className="py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl overflow-hidden group"
              >
                <Link href={`/blog/${featuredPost.slug}`} className="block">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full w-fit mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Article à la une
                      </span>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                        {featuredPost.title}
                      </h2>
                      <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-purple-200 text-sm mb-8">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiClock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                        Lire l'article
                        <FiArrowRight className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 md:h-auto md:min-h-[400px]">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 md:from-transparent to-transparent" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(searchTerm || selectedCategory !== "Tous"
                  ? filteredPosts
                  : regularPosts
                ).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden bg-gray-100">
                        {post.image && !post.image.startsWith("/blog/") ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
                            <span className="text-purple-400 text-sm">Image à venir</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1.5">
                            <FiCalendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <FiClock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.categories.map((category) => (
                            <span
                              key={category}
                              className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                        </div>

                        {/* Author & CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-xs text-white font-bold">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </div>
                          <span className="text-purple-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                            Lire
                            <FiArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiSearch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-gray-500">
                  Essayez de modifier votre recherche ou vos filtres.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl shadow-purple-100/50 p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ne manquez aucun article
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers
                conseils directement dans votre boîte mail.
              </p>

              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  S'inscrire
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                Pas de spam, désinscription en un clic.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}