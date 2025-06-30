"use client";
import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, type: "spring" }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-center mb-16 relative"
  >
    {/* Big faded first word in background */}
    <motion.div
      className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#423F8D]/5 text-9xl font-black z-0"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      {title.split(" ")[0]}
    </motion.div>

    {/* Title text */}
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10">
      {title}
    </h2>

    {/* Gradient underline */}
    <div className="w-24 h-1 bg-gradient-to-r from-[#423F8D] to-[#FF6D00] mx-auto mb-6"></div>

    {/* Subtitle */}
    {subtitle && (
      <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
