"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Model';
import Link from 'next/link';
import RequestForm from './RequestForm';
const Faqsectioncontactus = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };


  const faqs = [
    {
      question: "I submitted the contact form multiple times. Did you receive it?",
      answer: "Yes, we received your submission. There's no need to send it again—our team will respond within 24 hours.",
      icon: "📨"
    },
    {
      question: "I'm not sure how to get help after checking the FAQ. What should I do?",
      answer: "If the FAQ didn’t help, you can reach us directly through the contact form or use live chat to speak with a team member.",
      icon: "💬"
    },
    {
      question: "Why do I have to complete a CAPTCHA?",
      answer: "We use CAPTCHA to protect against spam and bots. It ensures your request reaches us securely and quickly.",
      icon: "🔒"
    },
    {
      question: "Why did I get a reply from a no-reply email address?",
      answer: "Auto-confirmation emails come from a no-reply address, but our team will follow up with a proper response soon.",
      icon: "📧"
    },
    {
      question: "The Submit button isn't working—what should I do?",
      answer: "Make sure all required fields are filled out correctly. If the problem continues, try refreshing the page or disabling browser extensions.",
      icon: "⚠️"
    },
    {
      question: "I tried calling but only reached voicemail. How can I contact someone?",
      answer: "Our team prioritizes written support for faster responses. Please leave a message or contact us through the form or chat for urgent help.",
      icon: "📞"
    }
  ];



  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#2A2765] to-[#423F8D]">
      {/* Glowy background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#ff9e00] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#00d2ff] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with sassy subtitle */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00d2ff] font-semibold tracking-wider text-sm md:text-base">NO ROBOT ANSWERS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            "Wait, but what about..."
            <span className="text-[#ff9e00] block md:inline"> FAQs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Real questions from confused humans (like you), answered properly.
          </p>
        </motion.div>

        {/* FAQ Items - Designed for confused users */}
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
                className={`bg-white/5 backdrop-blur-md rounded-xl border border-white/10 cursor-pointer transition-all duration-300 ${activeIndex === index ? '!bg-white/10 shadow-xl' : 'shadow-lg hover:shadow-xl'}`}
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-6 md:p-7">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 mt-0.5 opacity-90">{faq.icon}</span>
                    <h3 className="text-lg md:text-xl font-medium text-white/90">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-7 md:pb-7 ml-12">
                    <p className="text-gray-300/90 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA for still-confused humans */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Still staring at the screen confused?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff9e00] hover:bg-[#ffaa33] text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              Live Chat (Real Human)
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/30 hover:border-[#00d2ff] text-white hover:text-[#00d2ff] font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
              </svg>
              Send a Screenshot
            </motion.button>
          </div>
        </motion.div> */}


        {/* CTA Buttons */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link
              href="tel:+1234567890"
              className="flex items-center justify-center bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-[1.02] text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#423F8D] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 border border-white/30 shadow-lg transform hover:scale-[1.02] text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Message Us
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center bg-[#423F8D] hover:bg-white hover:text-[#423F8D] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-[1.02] text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Request Now
            </button>
          </div>
        </div>


      </div>


      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RequestForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Modal>

    </section>


  );
};

export default Faqsectioncontactus