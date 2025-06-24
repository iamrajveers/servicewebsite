"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo (2).png";

const menus = [

    { label: "Home", href: "/" },

    { label: "Our Service", href: "/ourservices" },
    { label: "About", href: "/aboutus" },
    { label: "Area We Served", href: "/aboutus" },
    { label: "Solutions", href: "/solutions " },
    { label: "Our Blogs", href: "/blog" },

];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const phoneNumber = "+1 (234) 567-890";

    return (
        <>
            <nav className="sticky top-0 z-50 px-8 md:px-16 py-4 flex items-center justify-between bg-white ">
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
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-4 text-[18px] font-bold text-[#423F8D]">
                        {menus.map((menu, i) => (
                            <li key={i}>
                                <Link
                                    href={menu.href}
                                    className={`relative px-4 py-2 rounded-[4px] transition-all duration-300 ${pathname === menu.href
                                        ? "bg-white text-[#FF6D00] font-semibold"
                                        : "hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                                        }`}
                                >
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="ml-4 bg-[#FF6D00] text-white hover:bg-white hover:text-[#FF6D00] border-2 border-transparent hover:border-[#FF6D00] px-10 py-2 rounded-full font-semibold transition"
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
                    className="md:hidden fixed inset-0 z-40 pt-20 px-6 flex flex-col overflow-y-auto"
                    style={{
                        background: "linear-gradient(to bottom, #FF6D00 0%, #423F8D 100%)",
                    }}
                >
                    <div className="space-y-2">
                        {menus.map((menu, i) => (
                            <Link
                                key={i}
                                href={menu.href}
                                className={`block py-4 px-4 rounded-md text-lg font-medium transition-colors ${pathname === menu.href
                                    ? "bg-white text-[#FF6D00] font-semibold"
                                    : "text-white hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {menu.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA - Mobile */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="mt-8 bg-[#FF6D00] text-white hover:bg-white hover:text-[#FF6D00] border-2 border-transparent hover:border-white px-6 py-2 rounded-full transition font-semibold text-center text-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <FiPhone className="inline mr-2" />
                        Call Now
                    </a>
                </div>
            )}
        </>
    );
};

export default Header;
