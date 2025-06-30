"use client";
import { motion } from "framer-motion";

const Milestone = ({ year, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative flex odd:justify-start even:justify-end mb-12"
  >
    <div
      className={`w-full md:w-1/2 p-8 rounded-2xl shadow-md bg-white relative z-10 ${
        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
      }`}
    >
      <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-[#423F8D] to-[#FF6D00] border-4 border-white shadow-lg"></div>
      <div className="flex items-center mb-3">
        <span className="text-2xl font-bold text-gray-900 mr-4">{year}</span>
        <span className="px-4 py-1 bg-[#FF6D00]/10 text-[#FF6D00] text-sm font-bold rounded-full">
          {title}
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Milestone;
