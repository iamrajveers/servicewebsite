import React from 'react';
import { motion } from 'framer-motion';

const NewsletterBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#423F8D] via-[#3A3780] to-[#2A2765] py-12 px-6  shadow-2xl">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#FF6D00] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#00C2FF] rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Text content with icon */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#FF6D00] tracking-wider">NEWSLETTER</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Get Exclusive <span className="text-[#FF6D00]">Content</span> & Updates
            </h3>
            <p className="text-gray-300 mt-2 max-w-md">
              Join our community and receive curated tips, insights, and special offers directly to your inbox.
            </p>
          </div>

          {/* Email form */}
          <motion.div
            className="w-full lg:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6D00] backdrop-blur-sm transition-all duration-300"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-4 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <button className="bg-[#FF6D00] hover:bg-[#FF8E53] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF6D00]/30 whitespace-nowrap">
                Subscribe Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-white/60 mt-2 text-center sm:text-left">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterBanner;