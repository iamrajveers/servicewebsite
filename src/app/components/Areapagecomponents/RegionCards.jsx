"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDollarSign, FaMapMarkerAlt, FaStar, FaCrown } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const RegionCards = ({ regions, activeCity, setActiveCity }) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const cityItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative">
      {/* Premium decoration */}
      {regions.some((r) => r.highlight) && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#423F8D] to-[#6A67D4] text-white px-4 py-2 rounded-full shadow-lg flex items-center z-10">
          <IoSparkles className="mr-2 text-yellow-300" />
          <span className="font-medium">Premium Regions</span>
          <IoSparkles className="ml-2 text-yellow-300" />
        </div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {regions.map((region) => (
          <motion.div
            key={region.name}
            variants={item}
            className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 relative ${
              region.highlight ? "border-t-4 border-t-[#423F8D]" : ""
            }`}
            whileHover={{ y: -5 }}
          >
            {/* Premium badge */}
            {region.highlight && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF6D00] to-[#FF9E00] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-md flex items-center">
                <FaCrown className="mr-1.5" />
                <span>PREMIUM</span>
              </div>
            )}

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-center mb-3">
                <motion.div
                  className={`w-3 h-3 rounded-full mr-3 ${region.color}`}
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: region.highlight
                      ? `0 0 0 3px ${region.color.replace("bg-", "rgba(").replace(")", ", 0.2)")}`
                      : "none",
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  {region.name}
                  {region.highlight && (
                    <span className="ml-2 bg-gradient-to-r from-[#FF6D00]/10 to-[#FF6D00]/20 text-[#FF6D00] text-xs px-2 py-1 rounded-full flex items-center">
                      <FaStar className="mr-1 w-3 h-3" />
                      Top Rated
                    </span>
                  )}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">{region.description}</p>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                <span>{region.cities.length} cities</span>
                <span className="mx-2">•</span>
                <span>{region.projects}+ projects</span>
                <FaDollarSign className="w-3 h-3 ml-2 text-amber-500" />
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Cities:</h4>
                <motion.ul variants={container} className="space-y-2">
                  {region.cities.map((city) => (
                    <motion.li
                      key={city}
                      variants={cityItem}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                        activeCity === city
                          ? "bg-gradient-to-r from-[#423F8D]/5 to-[#423F8D]/10 border-l-4 border-l-[#423F8D]"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveCity(city)}
                    >
                      <div className={`w-2 h-2 rounded-full mr-3 ${region.color}`} />
                      <span className="text-gray-700">{city}</span>
                      {activeCity === city && (
                        <motion.span
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="ml-auto text-xs bg-[#423F8D] text-white px-2 py-1 rounded-full"
                        >
                          Selected
                        </motion.span>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RegionCards;