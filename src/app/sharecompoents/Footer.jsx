"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 111
import Image from "next/image";
import logo from "../../../public/logo (2).png";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const socialLinks = [
    { name: "Facebook", url: "https://facebook.com", icon: FaFacebookF },
    { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedinIn },
    { name: "GitHub", url: "https://github.com", icon: FaGithub },
    { name: "Twitter", url: "https://twitter.com", icon: FaTwitter },
];

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Facebook", url: "https://facebook.com", icon: FaFacebookF },
        { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedinIn },
        { name: "GitHub", url: "https://github.com", icon: FaGithub },
        { name: "Twitter", url: "https://twitter.com", icon: FaTwitter },
    ];


    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/work' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    const services = [
        'Web Development',
        'Mobile Apps',
        'UI/UX Design',
        'Cloud Solutions',
        'Digital Marketing',
        'Data Analytics'
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
    ];

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <footer className="relative bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] overflow-hidden">
            {/* Enhanced decorative elements with gradient colors including orange */}
            {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#423F8D] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF6D00] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-[#2A2765] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div> */}


            <div className="container mx-auto px-6 py-16 relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* Company Info */}
                    <motion.div variants={fadeInUp}>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image src={logo} alt="Logo" width={140} height={80} />
                        </Link>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We craft digital experiences that inspire, engage, and convert. Let's build something amazing together.
                        </p>


                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#423F8D] hover:bg-[#E9E9FC] transition-all hover:shadow-md group"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </motion.a>
                            ))}
                        </div>

                    </motion.div>


                    {/* Quick Links */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-3 h-3 bg-[#423F8D] rounded-full mr-2"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-[#423F8D] transition-colors flex items-center group"
                                    >
                                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#FF6D00] transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-3 h-3 bg-[#2A2765] rounded-full mr-2"></span>
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <motion.li
                                    key={service}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Link
                                        href={`/services#${service.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-600 hover:text-[#FF6D00] transition-colors flex items-center group"
                                    >
                                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#FF6D00] transition-colors"></span>
                                        {service}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                            <span className="w-3 h-3 bg-[#2A2765] rounded-full mr-2"></span>
                            Contact Us
                        </h3>
                        <address className="not-italic text-gray-600 space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#423F8D]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                    <svg
                                        className="h-4 w-4 text-[#423F8D]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <p>123 Innovation Drive, San Francisco, CA 94107</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FF6D00]/10 rounded-full flex items-center justify-center mr-3">
                                    <svg
                                        className="h-4 w-4 text-[#FF6D00]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <a href="tel:+14155550123" className="hover:text-[#FF6D00] transition-colors">
                                    +1 (415) 555-0123
                                </a>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#2A2765]/10 rounded-full flex items-center justify-center mr-3">
                                    <svg
                                        className="h-4 w-4 text-[#2A2765]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <a href="mailto:hello@nexadigital.com" className="hover:text-[#2A2765] transition-colors">
                                    hello@nexadigital.com
                                </a>
                            </div>
                        </address>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Subscribe to our newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 w-full rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6D00] focus:border-transparent"
                                />
                                <button className="bg-gradient-to-r from-[#FF6D00] to-[#FF9E00] text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity flex items-center">
                                    <span className="mr-1">Join</span>
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Enhanced Divider with gradient */}
                <motion.div
                    className="my-12 relative"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-gradient-to-r from-[#423F8D] via-[#FF6D00] to-[#2A2765] bg-clip-text text-transparent text-sm font-medium">
                            ✦Your Company ✦
                        </span>
                    </div>
                </motion.div>

                {/* Bottom Footer */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear}  • Your Company • All rights reserved.

                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-500 hover:text-[#FF6D00] text-sm transition-colors hover:underline underline-offset-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;