"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden bg-gradient-to-br from-[#423F8D] to-[#2A2765]">
      {/* Optional decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
      </div>

      {/* Optional image overlay - will only show if imageUrl is provided */}
      {imageUrl && (
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="container h-full mx-auto px-4 sm:px-6 relative z-10 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title || 'Our Blog'}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;