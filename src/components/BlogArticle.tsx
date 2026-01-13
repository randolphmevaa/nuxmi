// components/BlogArticle.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiTag, 
  FiShare2, 
  FiTwitter, 
  FiLinkedin, 
  FiFacebook,
  FiArrowLeft,
  FiExternalLink,
  FiChevronRight
} from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogPost, BLOG_POSTS_DATA } from "@/app/blog/[slug]/page";

interface BlogArticleProps {
  post: BlogPost;
  allPosts: Record<string, BlogPost>;
}

export default function BlogArticle({ post, allPosts }: BlogArticleProps) {
  const shareUrl = `https://nuxmi.fr/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };

  // Get related posts
  const relatedPosts = post.relatedPosts
    ?.map((slug) => allPosts[slug])
    .filter(Boolean)
    .slice(0, 3);

  // Custom components for ReactMarkdown
  const MarkdownComponents = {
    h2: ({ children, ...props }: any) => (
      <h2 
        className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b border-gray-100"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 
        className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }: any) => (
      <p 
        className="text-gray-700 leading-relaxed mb-6 text-lg"
        {...props}
      >
        {children}
      </p>
    ),
    a: ({ href, children, ...props }: any) => {
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-purple-600 font-medium hover:text-purple-800 underline decoration-purple-200 hover:decoration-purple-400 transition-colors inline-flex items-center gap-1"
          {...props}
        >
          {children}
          {isExternal && <FiExternalLink className="w-3.5 h-3.5" />}
        </a>
      );
    },
    ul: ({ children, ...props }: any) => (
      <ul 
        className="list-none space-y-3 mb-6 ml-0"
        {...props}
      >
        {children}
      </ul>
    ),
    li: ({ children, ...props }: any) => (
      <li 
        className="flex items-start gap-3 text-gray-700 text-lg"
        {...props}
      >
        <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    ol: ({ children, ...props }: any) => (
      <ol 
        className="list-decimal list-inside space-y-3 mb-6 text-gray-700 text-lg"
        {...props}
      >
        {children}
      </ol>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote 
        className="border-l-4 border-purple-500 pl-6 py-4 my-8 bg-purple-50/50 rounded-r-xl italic text-gray-700"
        {...props}
      >
        {children}
      </blockquote>
    ),
    strong: ({ children, ...props }: any) => (
      <strong className="font-semibold text-gray-900" {...props}>
        {children}
      </strong>
    ),
    hr: () => (
      <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    ),
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto my-8 rounded-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: any) => (
      <th 
        className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-900"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td 
        className="px-6 py-4 text-sm text-gray-700 border-t border-gray-100"
        {...props}
      >
        {children}
      </td>
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          </div>

          <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
            {/* Breadcrumbs */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm text-gray-500 mb-8"
              aria-label="Fil d'Ariane"
            >
              <Link href="/" className="hover:text-purple-600 transition-colors">
                Accueil
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-purple-600 transition-colors">
                Blog
              </Link>
              <FiChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium truncate max-w-[200px]">
                {post.title}
              </span>
            </motion.nav>

            {/* Back to blog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors group"
              >
                <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Retour au blog</span>
              </Link>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-1.5 text-sm font-medium text-purple-700 bg-purple-100 rounded-full"
                >
                  {category}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
            >
              {post.title}
            </motion.h1>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-gray-600"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                  {post.author.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4 text-gray-400" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4 text-gray-400" />
                <span>{post.readTime} de lecture</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative -mt-8 mb-12"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </motion.section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="flex gap-8">
              {/* Share sidebar - Desktop */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="hidden lg:block"
              >
                <div className="sticky top-32">
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Partager
                    </span>
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 flex items-center justify-center transition-all duration-300"
                      aria-label="Partager sur Twitter"
                    >
                      <FiTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 flex items-center justify-center transition-all duration-300"
                      aria-label="Partager sur LinkedIn"
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 flex items-center justify-center transition-all duration-300"
                      aria-label="Partager sur Facebook"
                    >
                      <FiFacebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.aside>

              {/* Main content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex-1 min-w-0"
              >
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={MarkdownComponents}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-3 flex-wrap">
                    <FiTag className="w-5 h-5 text-gray-400" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile share */}
                <div className="mt-8 pt-8 border-t border-gray-100 lg:hidden">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-sm font-medium text-gray-500">Partager :</span>
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 flex items-center justify-center transition-all"
                    >
                      <FiTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 flex items-center justify-center transition-all"
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 flex items-center justify-center transition-all"
                    >
                      <FiFacebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Author box */}
                <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {post.author.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-purple-600 mb-1">À propos de l'auteur</div>
                      <div className="text-xl font-bold text-gray-900 mb-1">{post.author.name}</div>
                      <div className="text-gray-600 mb-3">{post.author.role}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expert en génération de leads et stratégie digitale chez Nuxmi, 
                        passionné par l'optimisation des performances commerciales.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Articles similaires
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span>{relatedPost.readTime}</span>
                          <span>•</span>
                          <span>{relatedPost.categories[0]}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Prêt à transformer votre acquisition client ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-purple-100 mb-10"
            >
              Découvrez comment Nuxmi peut vous aider à générer des leads qualifiés.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Contactez-nous
                <FiChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}