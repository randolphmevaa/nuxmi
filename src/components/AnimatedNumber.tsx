// components/AnimatedNumber.tsx
"use client";

import { motion } from "framer-motion";

export const AnimatedNumber = ({ value, suffix }: { value: number; suffix?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {value}
      {suffix && <span className="text-2xl">{suffix}</span>}
    </motion.span>
  );
};