import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const VisionSection = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#423F8D] to-[#2A2765]">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Column - Content */}
                    <motion.div
                        className="lg:w-1/2 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <span className="text-[#FF6D00] font-semibold tracking-wider">OUR VISION</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                                Transforming <span className="text-[#FF6D00]">Ideas</span> Into Digital Reality
                            </h2>

                            <p className="text-lg text-gray-200 mb-8">
                                We bridge imagination and implementation, crafting digital experiences that
                                captivate audiences and drive measurable results. Our vision is to redefine
                                what's possible through technology and creativity.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-white/20 p-3 rounded-lg mr-4 mt-1 flex-shrink-0 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Innovation at Speed</h3>
                                        <p className="text-gray-300">Rapid prototyping to accelerate your time-to-market</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white/20 p-3 rounded-lg mr-4 mt-1 flex-shrink-0 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Future-Proof Solutions</h3>
                                        <p className="text-gray-300">Architected for tomorrow's challenges today</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white/20 p-3 rounded-lg mr-4 mt-1 flex-shrink-0 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Seamless Integration</h3>
                                        <p className="text-gray-300">Connected ecosystems for unified experiences</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105">
                                    Explore Possibilities
                                </button>
                                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#423F8D] font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105">
                                    View Case Studies
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stylish Image */}
                    <motion.div
                        className="lg:w-1/2 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500 h-[600px]">
                            {/* New tech-focused image */}
                            <Image
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80"
                                alt="Digital transformation concept"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Floating tech elements */}
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF6D00] rounded-full filter blur-xl opacity-20"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#00C2FF] rounded-full filter blur-xl opacity-20"></div>

                            {/* Overlay with digital elements */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                            {/* Floating card elements */}
                            <motion.div
                                className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-xs border border-white/20"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-3 h-3 bg-[#FF6D00] rounded-full mr-2"></div>
                                    <h3 className="text-white font-medium">Digital Strategy</h3>
                                </div>
                                <p className="text-gray-200 text-sm">Comprehensive plans for digital transformation success</p>
                            </motion.div>

                            <motion.div
                                className="absolute top-12 right-8 bg-white/10 backdrop-blur-md p-4 rounded-xl max-w-[180px] border border-white/20"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-2"></div>
                                    <h3 className="text-white font-medium text-sm">Innovation</h3>
                                </div>
                                <p className="text-gray-200 text-xs">Cutting-edge solutions for modern challenges</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;