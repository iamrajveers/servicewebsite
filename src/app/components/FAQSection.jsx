import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including web development, mobile apps, UI/UX design, digital marketing, and cloud services. Each service is tailored to your specific business needs.",
      icon: "💼"
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may require 3-6 months. We provide a detailed timeline after our initial consultation.",
      icon: "⏱️"
    },

    {
      question: "What's your pricing structure?",
      answer: "We offer flexible pricing models: fixed-price for well-defined projects, or time-and-materials for ongoing work. All projects include transparent pricing with no hidden costs.",
      icon: "💰"
    },

    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer various support packages including maintenance, updates, and 24/7 emergency support. Our team remains available even after project completion.",
      icon: "🔧"
    },
    {
      question: "How do you ensure quality?",
      answer: "We follow rigorous QA processes including code reviews, automated testing, and user acceptance testing. Our solutions come with a 30-day quality guarantee.",
      icon: "✅"
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing platforms and legacy systems. Our team will analyze your current setup and recommend the best approach.",
      icon: "🔄"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#2A2765] to-[#423F8D]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF6D00] font-semibold tracking-wider text-sm md:text-base">HAVE QUESTIONS?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Frequently Asked <span className="text-[#00C2FF]">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common queries about our services and processes.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <motion.div
                className={`bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 cursor-pointer transition-all duration-300 ${activeIndex === index ? 'shadow-lg' : 'shadow-md'}`}
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-6 md:p-8">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 mt-1">{faq.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 ml-10 md:ml-14">
                    <p className="text-gray-200">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}

        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Still have questions?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105">
              Contact Our Team
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#423F8D] font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </motion.div> */}


      </div>
    </section>
  );
};

export default FAQSection;