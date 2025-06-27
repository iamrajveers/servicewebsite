"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Modal from './Model';
import RequestForm from './RequestForm';
import logo from "../../../public/logo (2).png";

const AreasWeServeHero = () => {
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

  
 


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video_preview_h264.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#423F8D]/80 to-[#FF6D00]/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full">
          {/* Text Content (Left Side) */}
          <motion.div
            className="lg:w-1/2 text-white text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 drop-shadow-lg">
              Serving Communities Across the Nation
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow-md">
              We proudly provide our services to major cities and regions nationwide.
              <span className="block mt-2 sm:mt-3">
                Expanding our reach to serve you better, wherever you are.
              </span>
            </p>

            {/* Areas Served Grid */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 sm:mb-8">
              {areasServed.map((area, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                  <span className="text-white font-medium text-sm sm:text-base">{area}</span>
                </div>
              ))}
            </div> */}

            

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/coverage"
                className="bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 text-center shadow-lg transform hover:scale-105 text-sm sm:text-base"
              >
                Full Coverage Map
              </Link>

              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#423F8D] font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 text-center shadow-lg transform hover:scale-105 text-sm sm:text-base"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right Side Box */}
          <motion.div
            className="lg:w-1/2 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-md w-full border border-white/30 shadow-2xl">
              {/* Logo */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg">
                  <Image
                    src={logo}
                    alt="Company Logo"
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-15 sm:h-15 object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* Text */}
              <div className="text-center text-white mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Service In Your Area?</h3>
                <p className="text-base sm:text-lg">Check if we're available in your location or request expansion to your city.</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-3 sm:space-y-4">
                <Link
                  href="/coverage-check"
                  className="flex items-center justify-center bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-[1.02] text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Check Coverage
                </Link>
                
                <Link
                  href="/expansion-request"
                  className="flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#423F8D] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 border border-white/30 shadow-lg transform hover:scale-[1.02] text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Request Expansion
                </Link>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center bg-[#423F8D] hover:bg-white hover:text-[#423F8D] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-[1.02] text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Local Service Inquiry
                </button>
              </div>
            </div>
          </motion.div>
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

export default AreasWeServeHero;