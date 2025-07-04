"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const GlobalMap = ({ regions, activeCity, setActiveCity, getCityPosition }) => {
  return (
    <div className="relative mb-12 md:mb-20 h-64 sm:h-80 md:h-96 rounded-2xl md:rounded-3xl bg-gray-200 overflow-hidden border border-gray-300 shadow-xl">
      <div className="absolute inset-0 bg-[url('/images/world-map.svg')] bg-contain bg-center opacity-20"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {regions.flatMap((region, regionIndex) =>
            region.cities.map((city, cityIndex) => (
              <motion.div
                key={`${regionIndex}-${cityIndex}`}
                className={`absolute ${getCityPosition(city)} flex flex-col items-center group`}
                initial={{ scale: 1 }}
                animate={{
                  scale: activeCity === city ? [1, 1.1, 1] : [1, 1.05, 1],
                  transition: {
                    duration: activeCity === city ? 0.8 : 2,
                    repeat: Infinity,
                    delay: cityIndex * 0.2,
                  },
                }}
                onMouseEnter={() => setActiveCity(city)}
                onMouseLeave={() => setActiveCity(null)}
              >
                <motion.div
                  className={`mb-1 sm:mb-2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap shadow-sm ${
                    activeCity === city
                      ? "bg-white text-gray-900 scale-110"
                      : "bg-gray-900/80 text-white scale-100"
                  } transition-all duration-200`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: activeCity === city ? 1 : 0.8,
                    y: activeCity === city ? -12 : -10,
                  }}
                >
                  {city}
                  {region.highlight && (
                    <FaStar className="inline-block ml-1 text-yellow-400 w-3 h-3" />
                  )}
                </motion.div>
                <div
                  className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full ${region.color} border-2 border-white shadow-md cursor-pointer relative`}
                >
                  {activeCity === city && (
                    <motion.div
                      className={`absolute inset-0 rounded-full ${region.color} opacity-0`}
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [1, 2, 3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                </div>
                {activeCity === city && (
                  <motion.div
                    className="absolute w-0.5 bg-gray-400 origin-top"
                    initial={{ height: 0 }}
                    animate={{
                      height: 100,
                      transition: { duration: 0.5 },
                    }}
                    style={{ bottom: "-100px" }}
                  />
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>

      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 shadow-sm flex items-center text-xs sm:text-sm">
        <div className="flex items-center mr-2 sm:mr-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 mr-1 sm:mr-2"></div>
          <span className="font-medium">Primary</span>
        </div>
        <div className="flex items-center mr-2 sm:mr-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500 mr-1 sm:mr-2"></div>
          <span className="font-medium">Tech</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-rose-500 mr-1 sm:mr-2"></div>
          <span className="font-medium">Global</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
