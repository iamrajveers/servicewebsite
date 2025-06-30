"use client";
import { motion } from "framer-motion";
const StatCard = ({ number, label }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-6 rounded-xl shadow-md text-center"
  >
    <div className="text-5xl font-bold bg-gradient-to-r from-[#423F8D] to-[#FF6D00] bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-gray-600 uppercase text-sm font-medium">
      {label}
    </div>
  </motion.div>
);

export default StatCard;
