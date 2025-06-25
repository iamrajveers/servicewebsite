"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone, FiMail, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo (2).png";

const menus = [
    { label: "Home", href: "/" },
    { 
        label: "Our Service", 
        href: "/ourservices",
        submenu: [
            { label: "Web Development", href: "/ourservices/web-development" },
            { label: "Mobile App Development", href: "/ourservices/mobile-app-development" },
            { label: "UI/UX Design", href: "/ourservices/ui-ux-design" },
            { label: "Digital Marketing", href: "/ourservices/digital-marketing" },
            { label: "SEO Services", href: "/ourservices/seo-services" },
        ]
    },
    { label: "About", href: "/aboutus" },
    { label: "Area We Served", href: "/aboutus" },
    { label: "Solutions", href: "/solutions" },
    { label: "Our Blogs", href: "/blog" },
];

const socialIcons = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const pathname = usePathname();
    const phoneNumber = "+1 (234) 567-890";
    const email = "info@example.com";

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    return (
        <>
            {/* Top Bar with contact info and social icons */}
            <div className="bg-[#423F8D] text-white py-2 px-8 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <a href={`tel:${phoneNumber}`} className="flex items-center hover:text-[#FF6D00] transition">
                            <FiPhone className="mr-2" />
                            <span>{phoneNumber}</span>
                        </a>
                        <a href={`mailto:${email}`} className="flex items-center hover:text-[#FF6D00] transition">
                            <FiMail className="mr-2" />
                            <span>{email}</span>
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        {socialIcons.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 hover:text-[#FF6D00] transition"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="sticky top-0 z-50 px-8 md:px-16 py-4 flex items-center justify-between bg-white shadow-sm max-w-8xl mx-auto">
                {/* Logo */}
                <div className="h-auto">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={110}
                            height={30}
                            className="hover:opacity-90 transition-opacity"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center space-x-1 text-[18px] font-bold text-[#423F8D]">
                        {menus.map((menu, i) => (
                            <li key={i} className="relative group">
                                {menu.submenu ? (
                                    <>
                                        <button 
                                            onClick={() => toggleSubmenu(i)}
                                            className={`flex items-center px-4 py-2 rounded-[4px] transition-all duration-300 ${pathname === menu.href || menu.submenu.some(sub => pathname === sub.href)
                                                ? "bg-white text-[#FF6D00] font-semibold"
                                                : "hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                                            }`}
                                        >
                                            {menu.label}
                                            {openSubmenu === i ? (
                                                <FiChevronUp className="ml-1" />
                                            ) : (
                                                <FiChevronDown className="ml-1" />
                                            )}
                                        </button>
                                        <div 
                                            className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-300 ${openSubmenu === i ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                        >
                                            {menu.submenu.map((subitem, j) => (
                                                <Link
                                                    key={j}
                                                    href={subitem.href}
                                                    className={`block px-4 py-2 text-[#423F8D] hover:bg-[#FF6D00] hover:text-white ${pathname === subitem.href ? 'bg-[#FF6D00] text-white' : ''}`}
                                                >
                                                    {subitem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={menu.href}
                                        className={`relative px-4 py-2 rounded-[4px] transition-all duration-300 ${pathname === menu.href
                                            ? "bg-white text-[#FF6D00] font-semibold"
                                            : "hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                                            }`}
                                    >
                                        {menu.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="ml-6 bg-[#FF6D00] text-white hover:bg-white hover:text-[#FF6D00] border-2 border-transparent hover:border-[#FF6D00] px-6 py-2 rounded-[5px] font-semibold transition whitespace-nowrap"
                    >
                        {phoneNumber}
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-full border border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white transition"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 pt-32 px-6 flex flex-col overflow-y-auto"
                    style={{
                        background: "linear-gradient(to bottom, #FF6D00 0%, #423F8D 100%)",
                    }}
                >
                    <div className="space-y-2 max-w-4xl mx-auto w-full">
                        {menus.map((menu, i) => (
                            <div key={i}>
                                {menu.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubmenu(i)}
                                            className={`w-full text-left py-4 px-4 rounded-md text-lg font-medium flex justify-between items-center ${pathname === menu.href || menu.submenu.some(sub => pathname === sub.href)
                                                ? "bg-white text-[#FF6D00] font-semibold"
                                                : "text-white hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                                            }`}
                                        >
                                            {menu.label}
                                            {openSubmenu === i ? (
                                                <FiChevronUp className="ml-2" />
                                            ) : (
                                                <FiChevronDown className="ml-2" />
                                            )}
                                        </button>
                                        {openSubmenu === i && (
                                            <div className="pl-4">
                                                {menu.submenu.map((subitem, j) => (
                                                    <Link
                                                        key={j}
                                                        href={subitem.href}
                                                        className={`block py-3 px-4 rounded-md text-lg font-medium ${pathname === subitem.href
                                                            ? "bg-white text-[#FF6D00] font-semibold"
                                                            : "text-white hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                                                        }`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subitem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={menu.href}
                                        className={`block py-4 px-4 rounded-md text-lg font-medium transition-colors ${pathname === menu.href
                                            ? "bg-white text-[#FF6D00] font-semibold"
                                            : "text-white hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {menu.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA - Mobile */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="mt-8 mx-auto max-w-xs bg-[#FF6D00] text-white hover:bg-white hover:text-[#FF6D00] border-2 border-transparent hover:border-white px-6 py-2 rounded-full transition font-semibold text-center text-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <FiPhone className="inline mr-2" />
                        Call Now
                    </a>

                    {/* Social Icons - Mobile */}
                    <div className="flex justify-center space-x-4 mt-8 pb-8">
                        {socialIcons.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 hover:text-[#FF6D00] transition text-xl"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;