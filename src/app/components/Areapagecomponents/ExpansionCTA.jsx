"use client";
import { motion } from "framer-motion";

const ExpansionCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#423F8D] to-[#FF6D00] rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden relative mt-12"
    >
      {/* Blurred gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/10"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white/10"></div>
      </div>

      <div className="p-6 sm:p-8 md:p-12 text-white text-center relative z-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
          Need service in an unlisted location?
        </h3>
        <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-6 sm:mb-8">
          Our expansion team evaluates new markets quarterly. Priority access
          given to enterprise clients.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#423F8D] hover:bg-gray-100 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl text-sm sm:text-base"
          >
            Schedule Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-transparent border border-white hover:bg-white/10 font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all text-sm sm:text-base"
          >
            Contact Expansion Team
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpansionCTA;
