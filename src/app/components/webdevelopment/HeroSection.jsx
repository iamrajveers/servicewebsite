"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowRight, FaShieldAlt, FaLeaf, FaMedal } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-12">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#423F8D] blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#FF9E00] blur-[120px]"></div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30"
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6"
          >
            <FaMedal className="text-[#FF9E00] mr-2" />
            <span className="font-medium text-gray-900">#1 Rated in the Region</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#423F8D] to-[#6A67D4]">
              Professional Air Duct
            </span>
            <br />
            Cleaning Services
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
          >
            Breathe easier with <span className="font-semibold">certified</span> duct cleaning that removes 
            <span className="font-semibold"> 99.9% of contaminants</span> for healthier indoor air
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(66, 63, 141, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="relative overflow-hidden group bg-gradient-to-r from-[#423F8D] to-[#6A67D4] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
                Get a Free Quote <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#423F8D] to-[#5A57B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-white text-[#423F8D] px-8 py-4 rounded-xl shadow-lg hover:shadow-xl border-2 border-[#423F8D]/20 font-semibold text-lg transition-all"
            >
              <FaPhoneAlt /> Call Now
            </motion.a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12"
          >
            <div className="flex items-center gap-2 text-gray-900">
              <IoIosCheckmarkCircle className="text-[#FF9E00] text-xl" />
              <span>Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2 text-gray-900">
              <FaShieldAlt className="text-[#423F8D] text-xl" />
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 text-gray-900">
              <FaLeaf className="text-[#FF9E00] text-xl" />
              <span>Eco-Friendly</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating service image from Unsplash */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 mx-auto max-w-4xl px-4"
      >
       
       {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="HVAC system professional cleaning"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm sm:text-base">
              <span className="font-bold">Professional</span> cleaning service for your <span className="font-bold">HVAC system</span>
            </p>
          </div>


        </div> */}


      </motion.div>
    </section>
  );
};

export default HeroSection;