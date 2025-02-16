// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl =
    "https://cdn.prod.website-files.com/62d355d9727756759479db7a/62d46c98fd4c7100ffdf88fe_Logo%20fond%20transparent-p-500.png";

  // Define menu items.
  // Notice "Solution" now uses an anchor link to scroll down to the solution section.
  const menuItems = [
    { name: "Votre secteur d'activité", path: "/secteur" },
    { name: "Solution", path: "#solution" },
    { name: "Nos expertises", path: "/expertises" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white py-2 shadow-md">
        <div className="max-w-8xl mx-auto flex items-center justify-center space-x-4 px-4">
          <span className="text-sm font-medium">
            Recevez des clients récurrents 🎯
          </span>
          <Link
            href="/cta"
            className="bg-white text-purple-600 font-semibold px-4 py-1 rounded-full shadow-sm hover:shadow-md transition duration-300"
          >
            GO 📍
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-md transition-colors duration-300">
        <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-16 w-48">
            <Image src={logoUrl} alt="Logo" fill className="object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={item.path}
                  className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Phone Number and CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:0967074695"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              09.67.07.46.95 📞
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              Je suis intéressé
              <motion.svg
                whileHover={{ x: 5 }}
                className="w-4 h-4 ml-2"
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
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Basculer le menu mobile"
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 8h16M4 16h16"
                }
              />
            </svg>
          </button>
        </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b shadow-md"
          >
            <div className="px-6 py-8 space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block text-xl text-gray-700 hover:text-purple-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4">
                <a
                  href="tel:0967074695"
                  className="block text-xl text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  09.67.07.46.95 📞
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Je suis intéressé
                  <motion.svg
                    whileHover={{ x: 5 }}
                    className="w-4 h-4 ml-2"
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
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
  );
}
