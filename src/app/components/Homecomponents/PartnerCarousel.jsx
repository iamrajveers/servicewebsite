"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const PartnerCarousel = () => {
    // Premium partner data
    const partners = [
        {
            id: 1,
            name: "Quantum Innovations",
            logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=150&q=80",
        },
        {
            id: 2,
            name: "Nebula Systems",
            logo: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=150&q=80",
        },
        {
            id: 3,
            name: "Aurora Technologies",
            logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=150&q=80",
        },
        {
            id: 4,
            name: "Vertex Solutions",
            logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=150&q=80",
        },
        {
            id: 5,
            name: "Infinity Labs",
            logo: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=150&q=80",
        },
        {
            id: 6,
            name: "Horizon Group",
            logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=150&q=80",
        },
        {
            id: 7,
            name: "Pinnacle Corp",
            logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=150&q=80",
        },
    ];

    const [visiblePartners, setVisiblePartners] = React.useState(partners.slice(0, 5));

    // Slow auto-scroll effect (8 seconds per transition)
    useEffect(() => {
        const interval = setInterval(() => {
            setVisiblePartners(prev => {
                const currentFirstIndex = partners.findIndex(p => p.id === prev[0].id);
                const nextIndex = (currentFirstIndex + 1) % partners.length;

                // Handle wrapping around to beginning
                if (nextIndex + 4 >= partners.length) {
                    const end = partners.slice(nextIndex);
                    const start = partners.slice(0, 5 - end.length);
                    return [...end, ...start];
                }

                return partners.slice(nextIndex, nextIndex + 5);
            });
        }, 8000); // Slow 8-second interval

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Collaborating with industry leaders to drive innovation
                    </p>
                </motion.div>

                <div className="relative overflow-hidden h-[200px]">
                    {/* Gradient fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

                    {/* Animated partner cards */}
                    <motion.div
                        key={visiblePartners[0].id} // Force re-render animation
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="flex justify-center gap-8 absolute inset-0"
                    >
                        {visiblePartners.map((partner, index) => (
                            <motion.div
                                key={partner.id}
                                className="w-56 h-full  flex items-center justify-center p-6"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 1.5,
                                    delay: index * 0.1
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                                }}
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-16 w-full object-contain"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Minimal dot indicators */}

                <div className="flex justify-center mt-12 gap-1">
                    {partners.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-1 rounded-full ${partners.findIndex(p => p.id === visiblePartners[0].id) === index
                                ? "bg-[#423F8D] w-6"
                                : "bg-gray-300 w-3"
                                }`}
                            initial={{ width: 3 }}
                            animate={{
                                width: partners.findIndex(p => p.id === visiblePartners[0].id) === index ? 24 : 12
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerCarousel;