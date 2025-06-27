import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialLinks = [
    { label: "Facebook", icon: <FaFacebookF />, href: "#" },
    { label: "Twitter", icon: <FaTwitter />, href: "#" },
    { label: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
    { label: "Instagram", icon: <FaInstagram />, href: "#" },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
        "Cloud Solutions",
        "Custom Software"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
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
                    <span className="text-[#FF6D00] font-semibold tracking-wider text-sm md:text-base">GET IN TOUCH</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
                        Let's Build <span className="text-[#423F8D]">Something Amazing</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to start your project? Contact us today for a free consultation.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                        {/* Contact Info */}
                        <motion.div
                            className="lg:w-1/3"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-[#423F8D]/10 p-3 rounded-lg mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#423F8D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-[#FF6D00]/10 p-3 rounded-lg mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                            <p className="text-gray-600">contact@yourcompany.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-[#00C2FF]/10 p-3 rounded-lg mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">Office</h4>
                                            <p className="text-gray-600">123 Business Ave, Suite 456<br />San Francisco, CA 94107</p>
                                        </div>
                                    </div>

                                    <div className="pt-6">

                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>




                                        <div className="flex space-x-4">
                                            {socialLinks.map((social, index) => (
                                                <motion.a
                                                    key={index}
                                                    href={social.href}
                                                    className="hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 text-gray-600"
                                                    whileHover={{ y: -3 }}
                                                    aria-label={social.label}
                                                >
                                                    {social.icon}
                                                </motion.a>
                                            ))}
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="lg:w-2/3"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#423F8D] focus:border-[#423F8D] transition-all duration-300"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#423F8D] focus:border-[#423F8D] transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#423F8D] focus:border-[#423F8D] transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#423F8D] focus:border-[#423F8D] transition-all duration-300"
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#423F8D] focus:border-[#423F8D] transition-all duration-300"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="privacy"
                                            name="privacy"
                                            type="checkbox"
                                            className="h-4 w-4 text-[#423F8D] focus:ring-[#423F8D] border-gray-300 rounded"
                                            required
                                        />
                                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                                            I agree to the privacy policy and terms of service
                                        </label>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#423F8D] to-[#FF6D00] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Request
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;