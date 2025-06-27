"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobeAmericas, FaMapMarkerAlt, FaChevronRight, FaPlusCircle, FaArrowRight, FaDollarSign, FaStar } from 'react-icons/fa';

const Areasection = () => {
    const [expandedRegion, setExpandedRegion] = useState(null);
    const [activeCity, setActiveCity] = useState(null);

    // Enhanced region data with additional details
    const regions = [
        {
            name: "Northeast",
            cities: ["New York", "Boston", "Philadelphia", "Washington D.C.", "Baltimore"],
            description: "Our flagship region with the highest concentration of premium clients",
            projects: 128,
            color: "bg-blue-500",
            highlight: true
        },
        {
            name: "Midwest",
            cities: ["Chicago", "Detroit", "Indianapolis", "Columbus", "Milwaukee"],
            description: "Rapidly growing market with innovative partnerships",
            projects: 76,
            color: "bg-emerald-500"
        },
        {
            name: "South",
            cities: ["Houston", "Atlanta", "Miami", "Dallas", "Charlotte"],
            description: "Sunbelt expansion with exceptional growth potential",
            projects: 92,
            color: "bg-amber-500",
            highlight: true
        },
        {
            name: "West",
            cities: ["Los Angeles", "San Francisco", "Seattle", "Denver", "Phoenix"],
            description: "Tech-forward region with cutting-edge implementations",
            projects: 105,
            color: "bg-purple-500"
        },
        {
            name: "International",
            cities: ["Toronto", "London", "Sydney", "Dubai", "Tokyo"],
            description: "Global presence with localized excellence",
            projects: 64,
            color: "bg-rose-500",
            highlight: true
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const cityItem = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <section className="relative py-12 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FF6D00] blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#423F8D] blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Animated header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200">
                        <FaGlobeAmericas className="w-5 h-5 mr-2 text-[#FF6D00]" />
                        <span className="text-sm font-medium text-gray-600">Global Coverage</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#423F8D] to-[#FF6D00]">Global Reach</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Serving premium clients across continents with localized excellence and global standards
                    </p>
                </motion.div>

                {/* Enhanced Interactive map visualization */}
                <div className="relative mb-12 md:mb-20 h-64 sm:h-80 md:h-96 rounded-2xl md:rounded-3xl bg-gray-200 overflow-hidden border border-gray-300 shadow-xl">
                    {/* World map background */}
                    <div className="absolute inset-0 bg-[url('/images/world-map.svg')] bg-contain bg-center opacity-20"></div>
                    
                    {/* Map content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Map markers with text above */}
                            {regions.flatMap((region, regionIndex) => (
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
                                                delay: cityIndex * 0.2
                                            }
                                        }}
                                        onMouseEnter={() => setActiveCity(city)}
                                        onMouseLeave={() => setActiveCity(null)}
                                    >
                                        {/* City name text above dot */}
                                        <motion.div
                                            className={`mb-1 sm:mb-2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap shadow-sm ${
                                                activeCity === city 
                                                    ? 'bg-white text-gray-900 scale-110' 
                                                    : 'bg-gray-900/80 text-white scale-100'
                                            } transition-all duration-200`}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ 
                                                opacity: activeCity === city ? 1 : 0.8,
                                                y: activeCity === city ? -12 : -10
                                            }}
                                        >
                                            {city}
                                            {region.highlight && (
                                                <FaStar className="inline-block ml-1 text-yellow-400 w-3 h-3" />
                                            )}
                                        </motion.div>
                                        
                                        {/* City dot marker */}
                                        <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full ${region.color} border-2 border-white shadow-md cursor-pointer relative`}>
                                            {/* Glow effect when active */}
                                            {activeCity === city && (
                                                <motion.div
                                                    className={`absolute inset-0 rounded-full ${region.color} opacity-0`}
                                                    animate={{ 
                                                        opacity: [0, 0.5, 0],
                                                        scale: [1, 2, 3]
                                                    }}
                                                    transition={{ 
                                                        duration: 2,
                                                        repeat: Infinity
                                                    }}
                                                />
                                            )}
                                        </div>
                                        
                                        {/* Connection line to region card (visible when active) */}
                                        {activeCity === city && (
                                            <motion.div
                                                className="absolute w-0.5 bg-gray-400 origin-top"
                                                initial={{ height: 0 }}
                                                animate={{ 
                                                    height: 100,
                                                    transition: { duration: 0.5 }
                                                }}
                                                style={{ bottom: '-100px' }}
                                            />
                                        )}
                                    </motion.div>
                                ))
                            ))}
                        </div>
                    </div>
                    
                    {/* Legend */}
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

                {/* Enhanced Regions grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16"
                >
                    {regions.map((region, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl ${
                                expandedRegion === index ? 'ring-2 ring-[#423F8D]' : ''
                            } ${region.highlight ? 'border-t-4 border-t-[#423F8D]' : ''}`}
                        >
                            <div
                                className="p-4 sm:p-6 cursor-pointer"
                                onClick={() => setExpandedRegion(expandedRegion === index ? null : index)}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center mb-2 sm:mb-3">
                                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3 ${region.color}`}></div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                                                {region.name}
                                                {region.highlight && (
                                                    <span className="ml-2 bg-[#FF6D00]/10 text-[#FF6D00] text-xs px-2 py-1 rounded-full flex items-center">
                                                        <FaStar className="mr-1 w-3 h-3" />
                                                        Premium
                                                    </span>
                                                )}
                                            </h3>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{region.description}</p>
                                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                            <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                            <span>{region.cities.length} major cities</span>
                                            <span className="mx-1 sm:mx-2">•</span>
                                            <span>{region.projects}+ projects</span>
                                            <FaDollarSign className="w-2 h-2 sm:w-3 sm:h-3 ml-1 sm:ml-2 text-amber-500" />
                                        </div>
                                    </div>
                                    <FaChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform ${expandedRegion === index ? 'rotate-90' : ''}`} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedRegion === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                            <h4 className="font-medium text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">Cities we serve:</h4>
                                            <motion.ul
                                                variants={container}
                                                initial="hidden"
                                                animate="show"
                                                className="space-y-1 sm:space-y-2"
                                            >
                                                {region.cities.map((city, cityIndex) => (
                                                    <motion.li
                                                        key={cityIndex}
                                                        variants={cityItem}
                                                        className={`flex items-center py-1 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors ${
                                                            activeCity === city ? 'bg-gray-100 border-l-4 border-l-[#423F8D]' : ''
                                                        }`}
                                                        onMouseEnter={() => setActiveCity(city)}
                                                        onMouseLeave={() => setActiveCity(null)}
                                                    >
                                                        <div className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${region.color}`}></div>
                                                        <span className="text-sm sm:text-base text-gray-700">{city}</span>
                                                        {activeCity === city && (
                                                            <span className="ml-auto text-xs bg-[#423F8D] text-white px-2 py-1 rounded-full">
                                                                Active
                                                            </span>
                                                        )}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {/* Simplified New Markets card with just text and buttons */}
                    <motion.div
                        variants={item}
                        className="bg-gradient-to-br from-[#423F8D] via-[#5A3AB9] to-[#FF6D00] rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden relative"
                    >
                        {/* Animated sparkles */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bg-white rounded-full"
                                    style={{
                                        width: `${Math.random() * 4 + 2}px`,
                                        height: `${Math.random() * 4 + 2}px`,
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        opacity: 0.8
                                    }}
                                    animate={{
                                        y: [0, -20, -40],
                                        opacity: [0.8, 0.5, 0],
                                        scale: [1, 1.5, 2]
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2
                                    }}
                                />
                            ))}
                        </div>
                        
                        <div className="p-4 sm:p-6 md:p-8 text-white h-full flex flex-col relative z-10">
                            <div className="flex-1">
                                <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-white/20 mb-3 sm:mb-4">
                                    <FaPlusCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                    <span className="text-xs sm:text-sm font-medium">Expanding</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">New Markets</h3>
                                <p className="text-sm sm:text-base opacity-90 mb-4 sm:mb-6">
                                    We're actively expanding to new locations. Be the first to know when we arrive in your city.
                                </p>
                            </div>
                            <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center bg-white text-[#423F8D] py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md text-sm sm:text-base"
                                >
                                    Request Expansion
                                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center bg-transparent border border-white/30 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-white/10 transition-all text-sm sm:text-base"
                                >
                                    Join Waitlist
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Premium CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#423F8D] to-[#FF6D00] rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden relative"
                >
                    {/* Floating elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/10"></div>
                        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white/10"></div>
                    </div>
                    
                    <div className="p-6 sm:p-8 md:p-12 text-white text-center relative z-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Need service in an unlisted location?</h3>
                        <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-6 sm:mb-8">
                            Our expansion team evaluates new markets quarterly. Priority access given to enterprise clients.
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
            </div>
        </section>
    );
};

// Helper function for mock map positioning
function getCityPosition(city) {
    const positions = {
        "New York": "top-[30%] left-[80%]",
        "Boston": "top-[25%] left-[85%]",
        "Philadelphia": "top-[35%] left-[78%]",
        "Washington D.C.": "top-[40%] left-[75%]",
        "Baltimore": "top-[38%] left-[77%]",
        "Chicago": "top-[45%] left-[55%]",
        "Detroit": "top-[42%] left-[65%]",
        "Indianapolis": "top-[50%] left-[60%]",
        "Columbus": "top-[48%] left-[67%]",
        "Milwaukee": "top-[43%] left-[58%]",
        "Houston": "top-[65%] left-[55%]",
        "Atlanta": "top-[60%] left-[70%]",
        "Miami": "top-[75%] left-[75%]",
        "Dallas": "top-[62%] left-[50%]",
        "Charlotte": "top-[55%] left-[72%]",
        "Los Angeles": "top-[55%] left-[20%]",
        "San Francisco": "top-[45%] left-[15%]",
        "Seattle": "top-[30%] left-[20%]",
        "Denver": "top-[50%] left-[40%]",
        "Phoenix": "top-[60%] left-[30%]",
        "Toronto": "top-[30%] left-[70%]",
        "London": "top-[25%] left-[45%]",
        "Sydney": "top-[85%] left-[90%]",
        "Dubai": "top-[55%] left-[60%]",
        "Tokyo": "top-[40%] left-[90%]"
    };
    return positions[city] || "top-[50%] left-[50%]";
}

export default Areasection;