"use client";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-16 md:py-32 bg-gradient-to-br from-[#423F8D] via-[#5A3AB9] to-[#FF6D00] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('/images/world-map-white.svg')] bg-center bg-cover" />
    <div className="container mx-auto px-4 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Go Global With Us?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Join our network of international partners and expand your reach across continents with our expertise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#423F8D] font-bold py-4 px-8 rounded-full text-lg"
          >
            Contact Our Team
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg"
          >
            View Case Studies
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
