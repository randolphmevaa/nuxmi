"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import { RocketLaunchIcon, ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export function HeroWithParallax() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.4, 0.1]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Floating Decorative Shapes */}
      <motion.div
        className="absolute bg-purple-500 rounded-full opacity-70"
        style={{ width: "120px", height: "120px", top: "15%", left: "10%" }}
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-pink-500 rounded-full opacity-70"
        style={{ width: "80px", height: "80px", bottom: "20%", right: "15%" }}
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dynamic Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#9333ea] to-transparent"
        style={{ opacity: overlayOpacity }}
      ></motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="inline-block bg-gray-100 text-[#9333ea] px-3 py-1 rounded-full text-sm font-medium">
            Vue sur BFMTV
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold text-[#9333ea] mb-6 leading-tight"
        >
          Boostez votre croissance
          <br />
          avec des leads qualifiés.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-xl text-[#9333ea] mb-10 max-w-lg"
        >
          Des stratégies digitales performantes pour multiplier vos leads, en finance,
          immobilier, énergie, assurance ou B2B.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <motion.a
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 text-white rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            <RocketLaunchIcon className="w-6 h-6" />
            Obtenir plus de clients
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRightIcon className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
      >
        <ChevronDownIcon className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
