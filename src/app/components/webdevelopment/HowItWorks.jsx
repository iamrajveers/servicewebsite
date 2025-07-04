"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaHome, FaWind } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            icon: <FaCalendarAlt className="w-8 h-8" />,
            title: "Book Online or Call",
            description: "Schedule your service at your convenience with our easy booking system.",
            highlight: "24/7 scheduling available"
        },
        {
            number: 2,
            icon: <FaHome className="w-8 h-8" />,
            title: "On-Site Visit",
            description: "Our certified technicians perform a thorough inspection and cleaning.",
            highlight: "Average visit: 2-3 hours"
        },
        {
            number: 3,
            icon: <FaWind className="w-8 h-8" />,
            title: "Enjoy Clean Air",
            description: "Experience immediate improvement in your indoor air quality.",
            highlight: "Results guaranteed"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#423F8D]/5 blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#FF9E00]/5 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-[#423F8D]/10 text-[#423F8D] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        How Our <span className="text-[#423F8D]">Service Works</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Simple three-step process to cleaner, healthier air in your home or business
                    </p>
                </motion.div>

                {/* Steps grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
                        >
                            {/* Step number */}
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#423F8D] to-[#6A67D4] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                {step.number}
                            </div>

                            {/* Step content */}
                            <div className="text-center pt-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#423F8D]/10 to-[#6A67D4]/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-[#423F8D] group-hover:text-[#6A67D4] transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    {step.description}
                                </p>

                                <div className="flex items-center justify-center text-sm text-[#FF9E00] font-medium">
                                    {step.highlight}
                                </div>
                            </div>

                            {/* Connector line (except last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gray-200">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-[#423F8D] to-[#6A67D4]"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;