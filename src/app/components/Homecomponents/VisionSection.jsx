"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const generateAirDuctCleaningPDF = () => {
    // Create new PDF document
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });

    // Set colors
    const blue = [0, 104, 179];
    const orange = [255, 102, 0];
    const darkGray = [51, 51, 51];
    const lightGray = [240, 240, 240];

    // Add light gray background to all pages
    doc.setFillColor(...lightGray);
    doc.rect(0, 0, 210, 297, 'F');

    // ====== COVER PAGE ======
    // Blue header
    doc.setFillColor(...blue);
    doc.rect(0, 0, 210, 40, 'F');

    // Company name (white text)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("FreshAir Duct Cleaners", 105, 25, { align: "center" });

    // Main title
    doc.setTextColor(...blue);
    doc.setFontSize(28);
    doc.text("Professional", 105, 70, { align: "center" });
    doc.text("Air Duct Cleaning", 105, 80, { align: "center" });
    doc.text("Services", 105, 90, { align: "center" });

    // Image placeholder (in real use, you'd add an actual image)
    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(220, 220, 220);
    doc.roundedRect(50, 100, 110, 80, 3, 3, 'FD');
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(12);
    doc.text("[Photo of clean ducts or happy technicians]", 105, 140, { align: "center" });

    // Contact info box
    doc.setFillColor(...orange);
    doc.roundedRect(50, 190, 110, 30, 3, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text("Call Today: (555) 123-4567", 105, 200, { align: "center" });
    doc.text("www.freshairducts.com", 105, 210, { align: "center" });

    // ====== PAGE 2 - BENEFITS ======
    doc.addPage();
    doc.setFillColor(...lightGray);
    doc.rect(0, 0, 210, 297, 'F');

    // Page title
    doc.setTextColor(...blue);
    doc.setFontSize(20);
    doc.text("Benefits of Professional", 20, 20);
    doc.text("Air Duct Cleaning", 20, 28);

    // Benefits list
    const benefits = [
        "✔ Improves indoor air quality",
        "✔ Reduces dust in your home",
        "✔ Helps allergy and asthma sufferers",
        "✔ Removes unpleasant odors",
        "✔ Increases HVAC system efficiency",
        "✔ Can lower energy bills",
        "✔ Extends equipment lifespan",
        "✔ Removes mold and bacteria"
    ];

    doc.setTextColor(...darkGray);
    doc.setFontSize(14);
    let yPos = 50;
    benefits.forEach(benefit => {
        doc.text(benefit, 30, yPos);
        yPos += 10;
    });

    // Testimonial box
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(20, 150, 170, 50, 3, 3, 'F');
    doc.setDrawColor(200, 200, 200);
    doc.roundedRect(20, 150, 170, 50, 3, 3, 'D');

    doc.setTextColor(...blue);
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text('"After FreshAir cleaned our ducts,', 30, 165);
    doc.text('we noticed less dust and my son\'s', 30, 173);
    doc.text('allergies improved significantly!"', 30, 181);

    doc.setFont("helvetica", "bold");
    doc.text("- Sarah J., Homeowner", 30, 190);

    // ====== PAGE 3 - OUR PROCESS ======
    doc.addPage();
    doc.setFillColor(...lightGray);
    doc.rect(0, 0, 210, 297, 'F');

    // Page title
    doc.setTextColor(...blue);
    doc.setFontSize(20);
    doc.text("Our 6-Step Cleaning Process", 20, 20);

    // Process steps
    const steps = [
        { num: "1", title: "Inspection", desc: "We examine your duct system for dirt and damage" },
        { num: "2", title: "Preparation", desc: "Protect your floors and furniture with covers" },
        { num: "3", title: "Vacuuming", desc: "Powerful truck-mounted vacuum removes debris" },
        { num: "4", title: "Brushing", desc: "Special tools scrub ducts clean" },
        { num: "5", title: "Sanitizing", desc: "Safe treatment kills mold and bacteria" },
        { num: "6", title: "Final Check", desc: "We ensure everything is clean and working" }
    ];

    doc.setTextColor(...darkGray);
    doc.setFontSize(12);
    yPos = 40;
    steps.forEach(step => {
        // Step number (orange circle)
        doc.setFillColor(...orange);
        doc.circle(25, yPos - 3, 5, 'F');
        doc.setTextColor(255, 255, 255);
        doc.text(step.num, 25, yPos);

        // Step title and description
        doc.setTextColor(...blue);
        doc.setFont("helvetica", "bold");
        doc.text(step.title, 40, yPos);

        doc.setTextColor(...darkGray);
        doc.setFont("helvetica", "normal");
        doc.text(step.desc, 40, yPos + 6);

        yPos += 20;
    });

    // ====== PAGE 4 - PRICING & CONTACT ======
    doc.addPage();
    doc.setFillColor(...lightGray);
    doc.rect(0, 0, 210, 297, 'F');

    // Pricing section
    doc.setTextColor(...blue);
    doc.setFontSize(20);
    doc.text("Service Packages", 20, 20);

    // Pricing table
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(20, 30, 170, 100, 3, 3, 'F');
    doc.setDrawColor(200, 200, 200);
    doc.roundedRect(20, 30, 170, 100, 3, 3, 'D');

    // Table headers
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(...blue);
    doc.rect(20, 30, 170, 10, 'F');
    doc.text("Package", 30, 37);
    doc.text("Price", 150, 37, { align: "right" });

    // Package rows
    doc.setTextColor(...darkGray);
    doc.setFontSize(12);
    const packages = [
        { name: "Basic Cleaning", price: "$299" },
        { name: "Standard Cleaning", price: "$399" },
        { name: "Premium Cleaning", price: "$499" },
        { name: "Whole House Special", price: "$699" }
    ];

    yPos = 45;
    packages.forEach(pkg => {
        doc.text(pkg.name, 30, yPos);
        doc.text(pkg.price, 150, yPos, { align: "right" });
        doc.line(20, yPos + 3, 190, yPos + 3);
        yPos += 10;
    });

    // Contact section
    doc.setTextColor(...blue);
    doc.setFontSize(20);
    doc.text("Contact Us Today", 20, 150);

    doc.setFillColor(...orange);
    doc.roundedRect(20, 160, 170, 80, 3, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text("Call: (555) 123-4567", 30, 175);
    doc.text("Email: info@freshairducts.com", 30, 185);
    doc.text("Website: www.freshairducts.com", 30, 195);
    doc.text("Hours: Mon-Sat 8am-6pm", 30, 205);

    // Guarantee
    doc.setTextColor(...blue);
    doc.setFontSize(16);
    doc.text("100% Satisfaction Guarantee", 20, 250);
    doc.setFontSize(12);
    doc.setTextColor(...darkGray);
    doc.text("We stand behind our work with a full warranty on all services.", 20, 258);

    // Save the PDF
    doc.save("FreshAir_Duct_Cleaning_Services.pdf");
};







const VisionSection = () => {
    return (
        <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-br from-[#423F8D] to-[#2A2765]">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    {/* Left Column - Content */}
                    <motion.div
                        className="lg:w-1/2 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <span className="text-[#FF6D00] font-semibold tracking-wider text-sm md:text-base">OUR VISION</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">
                                Transforming <span className="text-[#FF6D00]">Ideas</span> Into Digital Reality
                            </h2>

                            <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8">
                                We bridge imagination and implementation, crafting digital experiences that
                                captivate audiences and drive measurable results. Our vision is to redefine
                                what's possible through technology and creativity.
                            </p>

                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-white/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4 mt-1 flex-shrink-0 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Innovation at Speed</h3>
                                        <p className="text-gray-300 text-sm md:text-base">Rapid prototyping to accelerate your time-to-market</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4 mt-1 flex-shrink-0 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Future-Proof Solutions</h3>
                                        <p className="text-gray-300 text-sm md:text-base">Architected for tomorrow's challenges today</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4 mt-1 flex-shrink-0 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Seamless Integration</h3>
                                        <p className="text-gray-300 text-sm md:text-base">Connected ecosystems for unified experiences</p>
                                    </div>
                                </div>
                            </div>


                            {/* ff */}

                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">

                                <Link href="/aboutus">
                                    <span className="bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105 text-sm md:text-base block text-center">
                                        Explore Possibilities
                                    </span>
                                </Link>



                                <button
                                    onClick={generateAirDuctCleaningPDF}
                                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#423F8D] font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105 text-sm md:text-base hover:cursor-pointer"
                                >
                                    View Case Studies
                                </button>


                            </div>


                        </div>


                    </motion.div>

                    {/* Right Column - Stylish Image */}
                    <motion.div
                        className="lg:w-1/2 order-1 lg:order-2 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500 h-[400px] sm:h-[500px] md:h-[600px]">
                            <Image
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80"
                                alt="Digital transformation concept"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Floating tech elements */}
                            <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-[#FF6D00] rounded-full filter blur-xl opacity-20"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 md:w-40 md:h-40 bg-[#00C2FF] rounded-full filter blur-xl opacity-20"></div>

                            {/* Overlay with digital elements */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                            {/* Floating card elements */}
                            <motion.div
                                className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl max-w-[280px] md:max-w-xs border border-white/20"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-2 md:mb-3">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#FF6D00] rounded-full mr-2"></div>
                                    <h3 className="text-white font-medium text-sm md:text-base">Digital Strategy</h3>
                                </div>
                                <p className="text-gray-200 text-xs md:text-sm">Comprehensive plans for digital transformation success</p>
                            </motion.div>

                            <motion.div
                                className="absolute top-6 right-6 md:top-12 md:right-8 bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl max-w-[140px] md:max-w-[180px] border border-white/20"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-1 md:mb-2">
                                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full mr-2"></div>
                                    <h3 className="text-white font-medium text-xs md:text-sm">Innovation</h3>
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