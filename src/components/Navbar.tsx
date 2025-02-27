// components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Explicit type union
  const navRef = useRef(null);
  const bannerControls = useAnimation();
  
  const logoUrl =
    "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d46c98fd4c7100ffdf88fe_Logo%20fond%20transparent-p-500.png";

  // Handle scroll event for appearance changes and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const newScrolled = window.scrollY > 20;
      setScrolled(newScrolled);
      
      // Determine active section based on scroll position
      const sections = ["home", "secteur", "solution", "expertises", "about", "contact"];
      
      // Use a type guard so that TypeScript knows these are HTMLElements
      const sectionElements = sections
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      
      if (sectionElements.length > 0) {
        const scrollPosition = window.scrollY + 100;
        const currentSection = sectionElements.reduce((closest, section) => {
          return Math.abs(section.offsetTop - scrollPosition) <
            Math.abs(closest.offsetTop - scrollPosition)
            ? section
            : closest;
        }, sectionElements[0]);
        
        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Play shimmer animation on banner periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (bannerVisible) {
        bannerControls.start({
          background: [
            "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(79,70,229,1) 50%, rgba(16,185,129,1) 100%)",
            "linear-gradient(90deg, rgba(124,58,237,0.9) 0%, rgba(79,70,229,0.95) 50%, rgba(16,185,129,0.9) 100%)",
            "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(79,70,229,1) 50%, rgba(16,185,129,1) 100%)",
          ],
          transition: { duration: 2, ease: "easeInOut" }
        });
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [bannerVisible, bannerControls]);

  // Enhanced menu items with rich metadata
  const menuItems = [
    { 
      name: "Votre secteur d'activité", 
      path: "/secteur", 
      icon: "🏢",
      id: "secteur",
      description: "Solutions personnalisées pour votre industrie" 
    },
    { 
      name: "Solution", 
      path: "#solution", 
      icon: "⚡",
      id: "solution",
      description: "Notre approche unique et innovante" 
    },
    { 
      name: "Nos expertises", 
      path: "/expertises", 
      icon: "🔍",
      id: "expertises",
      description: "Domaines où nous excellons" 
    },
    { 
      name: "À propos", 
      path: "/about", 
      icon: "ℹ️",
      id: "about",
      description: "Notre histoire et notre équipe" 
    },
    { 
      name: "Contact", 
      path: "/contact", 
      icon: "✉️",
      id: "contact",
      description: "Parlons de votre projet" 
    },
  ];

  // Calculate if we should show light or dark text based on scroll position
  const textColorClass = scrolled ? "text-gray-800" : "text-gray-700";
  const textHoverClass = scrolled ? "hover:text-purple-700" : "hover:text-purple-600";

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Announcement Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div 
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            animate={bannerControls}
            className="relative overflow-hidden"
            style={{
              background: "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(79,70,229,1) 50%, rgba(16,185,129,1) 100%)"
            }}
          >
            <div className="max-w-8xl mx-auto py-3 px-4">
              <div className="flex items-center justify-center space-x-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:flex items-center"
                >
                  <span className="text-white text-opacity-90 font-light tracking-wider">OFFRE EXCLUSIVE</span>
                  <span className="mx-2 h-6 w-px bg-white bg-opacity-30"></span>
                </motion.div>
                <span className="text-white text-sm md:text-base font-medium tracking-wide flex items-center">
                  <span className="inline-block mr-2">✨</span>
                  <span>Recevez des clients récurrents</span>
                  <span className="ml-2 bg-white bg-opacity-20 rounded-full px-2 py-0.5 text-xs font-bold">PREMIUM</span>
                </span>
                <Link
                  href="/cta"
                  className="relative overflow-hidden bg-white text-purple-600 font-semibold px-5 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">DÉCOUVRIR</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-emerald-600/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Link>
              </div>
            </div>
            <button 
              onClick={() => setBannerVisible(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Fermer la bannière"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <div 
        className={`backdrop-blur-lg transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 border-b border-gray-100 shadow-xl' 
            : bannerVisible 
              ? 'bg-white/80 border-b border-white/10' 
              : 'bg-white/80 shadow-lg'
        }`}
      >
        <div className="max-w-8xl mx-auto px-8 md:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-16 w-48 group z-10">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 to-emerald-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
            <Image 
              src={logoUrl} 
              alt="Logo" 
              fill 
              className="object-contain transition-all duration-500 group-hover:scale-105 relative z-10" 
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mx-auto">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative px-5"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.path}
                    className={`relative ${textColorClass} ${textHoverClass} transition-colors duration-300 group flex items-center font-medium`}
                  >
                    <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1.5 text-xs ${activeSection === item.id ? 'opacity-100' : ''}`}>
                      {item.icon}
                    </span>
                    <span className="tracking-wide">{item.name}</span>
                    {/* Active/Hover indicator */}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full transition-all duration-500 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                  
                  {/* Tooltip description */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-white rounded-lg shadow-xl text-gray-700 text-sm font-light whitespace-nowrap z-50"
                      >
                        {item.description}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Phone Number and CTA Button */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="tel:0967074695"
              className={`${textColorClass} ${textHoverClass} transition-colors duration-300 group flex items-center`}
            >
              <span className="mr-3 bg-white/80 rounded-full p-2.5 shadow-sm group-hover:shadow group-hover:bg-purple-50 transition-all duration-300 relative overflow-hidden">
                <svg className="w-4 h-4 text-purple-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-emerald-600/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-light tracking-wider">APPELEZ-NOUS</span>
                <span className="font-medium tracking-wide">09.67.07.46.95</span>
              </div>
            </a>
            <Link href="/cta">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center relative overflow-hidden group"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center font-medium tracking-wide">
                  Je suis intéressé
                  <motion.svg
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </motion.svg>
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Basculer le menu mobile"
            className="lg:hidden relative z-20 p-2.5 rounded-full border border-gray-200 shadow-sm bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: -3 },
                  open: { rotate: 45, y: 0 }
                }}
                className="w-5 h-0.5 bg-gray-700 block absolute origin-center transition-transform duration-300"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-5 h-0.5 bg-gray-700 block absolute origin-center transition-opacity duration-300"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 3 },
                  open: { rotate: -45, y: 0 }
                }}
                className="w-5 h-0.5 bg-gray-700 block absolute origin-center transition-transform duration-300"
              />
            </motion.div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu - Fullscreen for premium feel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 w-full h-full bg-white/95 backdrop-blur-xl z-10 overflow-auto"
          >
            <div className="px-8 py-24 min-h-screen flex flex-col justify-between">
              <div className="space-y-8">
                <h3 className="text-gray-400 text-sm tracking-widest uppercase font-light mb-6">Navigation</h3>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className="flex items-center group py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="bg-gradient-to-r from-purple-600/10 to-emerald-600/10 p-3 rounded-xl mr-4 group-hover:shadow-md transition-all duration-300">
                        <span className="text-xl">{item.icon}</span>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xl text-gray-800 font-medium group-hover:text-purple-600 transition-colors duration-300">{item.name}</span>
                        <span className="text-sm text-gray-500 mt-1">{item.description}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 space-y-6 border-t border-gray-100 pt-8"
              >
                <h3 className="text-gray-400 text-sm tracking-widest uppercase font-light mb-6">Contact</h3>
                <a
                  href="tel:0967074695"
                  className="flex items-center py-3 group"
                >
                  <span className="bg-gradient-to-r from-purple-600/10 to-emerald-600/10 p-3 rounded-xl mr-4 transition-all duration-300 group-hover:shadow-md">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-light">APPELEZ-NOUS</span>
                    <span className="text-xl text-gray-800 group-hover:text-purple-600 transition-colors duration-300">09.67.07.46.95</span>
                  </div>
                </a>
                <Link href="/cta">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center relative overflow-hidden group"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center font-medium tracking-wide text-lg">
                      Je suis intéressé
                      <motion.svg
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                        className="w-5 h-5 ml-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
