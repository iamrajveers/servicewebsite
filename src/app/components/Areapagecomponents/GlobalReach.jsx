"use client";
import { motion } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";

const GlobalReach = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-12 md:mb-20"
    >
      <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200">
        <FaGlobeAmericas className="w-5 h-5 mr-2 text-[#FF6D00]" />
        <span className="text-sm font-medium text-gray-600">Global Coverage</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#423F8D] to-[#FF6D00]">
          Global Reach
        </span>
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
        Serving premium clients across continents with localized excellence and global standards
      </p>
    </motion.div>
  );
};

export default GlobalReach;
