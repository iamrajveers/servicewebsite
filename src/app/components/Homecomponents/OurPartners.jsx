"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const OurPartner = () => {
    const partners = [
        {
            id: 1,
            name: "Tech Innovators",
            logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 2,
            name: "Global Solutions",
            logo: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        },
        {
            id: 3,
            name: "Future Labs",
            logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        },
        {
            id: 4,
            name: "Alpha Ventures",
            logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 5,
            name: "Nova Systems",
            logo: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        },
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-[#423F8D]"
                        style={{
                            width: Math.random() * 300 + 100 + "px",
                            height: Math.random() * 300 + 100 + "px",
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                            filter: "blur(40px)",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Trusted Partners
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Collaborating with industry leaders to deliver exceptional results
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    {/* Navigation arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <FiArrowLeft className="text-gray-700 text-xl" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <FiArrowRight className="text-gray-700 text-xl" />
                    </button>

                    {/* Partner logos */}
                    <div className="overflow-hidden px-12">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                        >
                            {partners.map((partner) => (
                                <motion.div
                                    key={partner.id}
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-xl p-6 h-48 flex items-center justify-center shadow-md hover:shadow-xl transition-all"
                                >
                                    <div className="relative w-full h-full">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-contain object-center"
                                            loading="lazy"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4"
                                        >
                                            <span className="text-white font-medium">
                                                {partner.name}
                                            </span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center mt-8 gap-2">
                    {partners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-[#423F8D] w-6" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPartner;