import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HowWeWork = () => {
    const [activeStep, setActiveStep] = useState(0);
    const processSteps = [
        {
            title: "Discovery",
            description: "Understand business goals, challenges, and target audience.",
            icon: "🔍",
            color: "bg-[#FF6D00]",
            features: [
                "Goal analysis",
                "Audience research",
                "Competitive review"
            ]
        },
        {
            title: "Strategy",
            description: "Craft tailored roadmap with clear milestones.",
            icon: "🧠",
            color: "bg-[#423F8D]",
            features: [
                "Solution design",
                "Roadmap development",
                "KPIs definition"
            ]
        },
        {
            title: "Design",
            description: "Create intuitive user interfaces and experiences.",
            icon: "🎨",
            color: "bg-[#9C27B0]",
            features: [
                "Wireframing",
                "UI/UX design",
                "Prototyping"
            ]
        },
        {
            title: "Development",
            description: "Build with agile methodology and modern tech.",
            icon: "⚡",
            color: "bg-[#00C2FF]",
            features: [
                "Agile sprints",
                "Progress updates",
                "QA testing"
            ]
        },
        {
            title: "Launch",
            description: "Deploy with thorough testing and training.",
            icon: "🚀",
            color: "bg-[#10B981]",
            features: [
                "Final testing",
                "Training",
                "Ongoing support"
            ]
        },
        {
            title: "Optimize",
            description: "Continuous improvement based on analytics.",
            icon: "📈",
            color: "bg-[#FFC107]",
            features: [
                "Performance tracking",
                "User feedback",
                "Iterative updates"
            ]
        }
    ];

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % processSteps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [processSteps.length]);

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#423F8D] to-[#2A2765]">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#FF6D00] font-semibold tracking-wider">HOW WE WORK</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                        Our <span className="text-[#00C2FF]">Process</span>
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        A streamlined approach ensuring quality at every stage.
                    </p>
                </motion.div>

                {/* Progress Steps Indicator */}
                <div className="relative max-w-5xl mx-auto mb-12 px-8">
                    <div className="flex justify-between relative z-10">
                        {processSteps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                            >
                                <div className={`${step.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-2 transition-all duration-300 ${activeStep === index ? 'scale-110' : ''}`}>
                                    {index + 1}
                                </div>
                                <span className="text-white text-sm font-medium text-center">{step.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="absolute top-4 left-0 right-0 h-1 bg-gray-600/50 rounded-full z-0"></div>
                    <motion.div 
                        className="absolute top-4 left-0 h-1 bg-gradient-to-r from-[#FF6D00] to-[#10B981] rounded-full z-0"
                        initial={{ width: '0%' }}
                        animate={{ 
                            width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                            transition: { duration: 0.5 }
                        }}
                    />
                </div>

                {/* Process Steps - Carousel */}
                <div className="relative overflow-hidden max-w-4xl mx-auto h-96 px-10"> {/* Added px-10 for side padding */}
                    <div className="relative h-full">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`absolute inset-0 w-full h-full p-6 ${activeStep === index ? 'z-10' : 'z-0'}`}
                                initial={{ opacity: 0, x: index > activeStep ? 100 : -100 }}
                                animate={{ 
                                    opacity: activeStep === index ? 1 : 0,
                                    x: activeStep === index ? 0 : (index > activeStep ? 100 : -100),
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="bg-white/10 backdrop-blur-sm h-full p-8 rounded-xl shadow-lg border border-white/20 flex flex-col">
                                    <div className="flex items-center mb-6">
                                        <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4`}>
                                            {step.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-300 uppercase tracking-wider">STEP {index + 1}</div>
                                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-200 mb-6">{step.description}</p>
                                    <ul className="space-y-3">
                                        {step.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className={`${step.color} w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-200">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Arrows - Adjusted positioning */}
                    <button 
                        onClick={() => setActiveStep(prev => (prev - 1 + processSteps.length) % processSteps.length)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg z-20 transition-all duration-300"
                        style={{ left: '10px' }} // Adjusted from negative to positive position
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => setActiveStep(prev => (prev + 1) % processSteps.length)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-lg z-20 transition-all duration-300"
                        style={{ right: '10px' }} // Adjusted from positive to container edge
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Step Dots */}
                <div className="md:hidden flex justify-center gap-2 mt-8">
                    {processSteps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-white scale-125' : 'bg-white/40'}`}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Ready to begin your project?
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105">
                            Get Started
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#423F8D] font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowWeWork;