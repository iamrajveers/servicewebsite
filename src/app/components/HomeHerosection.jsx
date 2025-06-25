import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Modal from './Model';
import RequestForm from './RequestForm';
import logo from "../../../public/logo (2).png";

const HomeHerosection = () => {
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
    // Handle form submission here (API call, etc.)
    console.log('Form submitted:', formData);
    // You might want to add form submission logic here
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/video_preview_h264.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#423F8D]/80 to-[#FF6D00]/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content (Left Side) */}
          <motion.div
            className="md:w-1/2 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Elevate Your Brand with Our Services
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-lg drop-shadow-md">
              Experience unparalleled growth and engagement.
              <span className="block mt-3">
                Join us to create meaningful connections with your audience.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started"
                className="bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg transform hover:scale-105"
              >
                Get Started
              </Link>

              <Link
                href="/learn-more"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#423F8D] font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Side Box */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-white/30 shadow-2xl">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image
                    src={logo}
                    alt="Company Logo"
                    width={60}
                    height={60}
                    className="w-15 h-15 object-contain"
                  />
                </div>
              </div>
              
              {/* Text */}
              <div className="text-center text-white mb-8">
                <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-lg">Contact us today and let's build something amazing together.</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link
                  href="tel:+1234567890"
                  className="flex items-center justify-center bg-[#FF6D00] hover:bg-white hover:text-[#FF6D00] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-[1.02]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Link>
                
                <Link
                  href="/contact"
                  className="flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#423F8D] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 border border-white/30 shadow-lg transform hover:scale-[1.02]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Message Us
                </Link>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center bg-[#423F8D] hover:bg-white hover:text-[#423F8D] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-[1.02]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Request Now
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

export default HomeHerosection;