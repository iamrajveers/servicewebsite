"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const IMAGES = {
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}

const HeroSection = ({ image }) => (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
        >
            <Image src={image} alt="Hero" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Our Global</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6D00] to-amber-300">Story</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
                    Connecting continents through innovation, expertise, and unparalleled service
                </p>
            </motion.div>
        </div>
    </section>
);

export default HeroSection;
