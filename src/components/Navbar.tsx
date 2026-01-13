// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const logoUrl =
    "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d46c98fd4c7100ffdf88fe_Logo%20fond%20transparent-p-500.png";

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Secteur", path: "/secteur" },
    { name: "Solution", path: "#solution" },
    { name: "Expertises", path: "/expertises" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 24 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      {/* Announcement Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(79,70,229,1) 50%, rgba(16,185,129,1) 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto py-3 px-4">
              <div className="flex items-center justify-center space-x-4 md:space-x-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:flex items-center"
                >
                  <span className="text-white text-opacity-90 font-light tracking-wider text-sm">
                    OFFRE EXCLUSIVE
                  </span>
                  <span className="mx-3 h-5 w-px bg-white bg-opacity-30"></span>
                </motion.div>
                <span className="text-white text-sm md:text-base font-medium tracking-wide flex items-center">
                  <span className="inline-block mr-2">✨</span>
                  <span>Recevez des clients récurrents</span>
                  <span className="ml-2 bg-white bg-opacity-20 rounded-full px-2 py-0.5 text-xs font-bold hidden sm:inline">
                    PREMIUM
                  </span>
                </span>
                <Link
                  href="/cta"
                  className="relative overflow-hidden bg-white text-purple-600 font-semibold px-4 md:px-5 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                >
                  <span className="relative z-10">DÉCOUVRIR</span>
                </Link>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setBannerVisible(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 p-1"
              aria-label="Fermer la bannière"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
        style={{ top: bannerVisible ? "44px" : "0" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-[60] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative h-12 w-36 lg:h-14 lg:w-44">
                <Image
                  src={logoUrl}
                  alt="Nuxmi - Agence de Génération de Leads"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative px-5 py-2.5 text-[15px] font-medium text-neutral-600 hover:text-purple-600 transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-purple-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Phone */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:0967074695"
                className="flex items-center gap-3 text-neutral-600 hover:text-purple-600 transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium tracking-wide">
                  09 67 07 46 95
                </span>
              </a>

              <Link href="/cta">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-7 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium tracking-wide rounded-full overflow-hidden group shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Démarrer
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-[60] lg:hidden flex items-center justify-center w-12 h-12 -mr-2 rounded-full transition-colors duration-300 ${
                isOpen ? "bg-white/10" : ""
              }`}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className={`absolute top-1 left-0 w-6 h-[2px] rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-purple-600" : "bg-neutral-800"
                  }`}
                />
                <motion.span
                  animate={
                    isOpen ? { opacity: 0, x: -16 } : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className={`absolute top-[11px] left-0 w-6 h-[2px] rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-purple-600" : "bg-neutral-800"
                  }`}
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className={`absolute bottom-1 left-0 w-6 h-[2px] rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-purple-600" : "bg-neutral-800"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] lg:hidden"
          >
            {/* Solid Background with gradient overlay for better readability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#F8F6FF]"
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-transparent to-indigo-100/40" />

            {/* Decorative Elements - More visible */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-purple-300/30 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-300/25 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between px-5 sm:px-8 h-20 pt-2 mt-11">
                {/* Logo visible in menu */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="relative h-12 w-36 z-10"
                >
                  <Image
                    src={logoUrl}
                    alt="Nuxmi"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>

                {/* Close Button - Prominent X with better visibility */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="Fermer le menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 sm:px-12 -mt-10">
                <div className="space-y-2">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center py-4 sm:py-5"
                      >
                        <span className="text-4xl sm:text-5xl font-medium text-gray-900 tracking-tight transition-all duration-300 group-hover:text-purple-600 group-hover:translate-x-3">
                          {item.name}
                        </span>
                        <span className="ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <svg
                            className="w-7 h-7 text-purple-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="px-8 sm:px-12 pb-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-6 border-t border-purple-200/60">
                  {/* Phone */}
                  <a
                    href="tel:0967074695"
                    className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md border border-purple-100">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold tracking-wide">
                      09 67 07 46 95
                    </span>
                  </a>

                  {/* CTA Button */}
                  <Link href="/cta" onClick={() => setIsOpen(false)}>
                    <button
                      type="button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold tracking-wide rounded-full shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                    >
                      Démarrer un projet
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}