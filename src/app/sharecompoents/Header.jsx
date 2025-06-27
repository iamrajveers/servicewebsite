"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo (2).png";

const menus = [
  { label: "Home", href: "/" },
  {
    label: "Our Service",
    href: "/ourserivces",
    submenu: [
      { label: "Web Development", href: "/ourserivces/web-development" },
      { label: "Mobile App Development", href: "/ourservices/mobile-app-development" },
      { label: "UI/UX Design", href: "/ourservices/ui-ux-design" },
      { label: "Digital Marketing", href: "/ourservices/digital-marketing" },
      { label: "SEO Services", href: "/ourservices/seo-services" },
    ],
  },
  { label: "About", href: "/aboutus" },
  { label: "Area We Served", href: "/areaweserved" },
  { label: "Contact", href: "/contact" },
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
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();
  const phoneNumber = "+1 (234) 567-890";
  const email = "info@example.com";
  const submenuRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSubmenu = (index) => {
    if (!isDesktop) {
      setOpenSubmenu(openSubmenu === index ? null : index);
    }
  };

  const handleMouseEnter = (index) => {
    if (isDesktop) {
      setOpenSubmenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setOpenSubmenu(null);
    }
  };

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#423F8D] text-white py-2 px-4 sm:px-8 lg:px-16 hidden md:block">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center hover:text-[#FF6D00] transition text-sm sm:text-base">
              <FiPhone className="mr-1 sm:mr-2" />
              <span>{phoneNumber}</span>
            </a>
            <a href={`mailto:${email}`} className="flex items-center hover:text-[#FF6D00] transition text-sm sm:text-base">
              <FiMail className="mr-1 sm:mr-2" />
              <span>{email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#FF6D00] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition">
                {React.cloneElement(social.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 px-4 sm:px-8 lg:px-16 py-3 sm:py-4 flex items-center justify-between bg-white shadow-sm max-w-8xl mx-auto">
        <Link href="/">
          <Image src={logo} alt="Logo" width={180} height={70} className="hover:opacity-90 transition-opacity w-24 sm:w-auto" priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-1 text-base lg:text-[18px] font-bold text-[#423F8D]">
            {menus.map((menu, i) => (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                ref={el => submenuRefs.current[i] = el}
              >
                {menu.submenu ? (
                  <>
                    <div className="flex items-center px-3 lg:px-4 py-1 lg:py-2 rounded-[4px] transition-all duration-300 group">
                      <Link
                        href={menu.href}
                        className={`font-bold ${pathname === menu.href || menu.submenu.some(sub => pathname === sub.href)
                          ? "text-[#FF6D00]"
                          : "text-[#423F8D] group-hover:text-[#FF6D00]"
                          }`}
                      >
                        {menu.label}
                      </Link>
                      <span className="ml-1 text-[#FF6D00] group-hover:text-[#FF6D00]">
                        <FiChevronDown className={`transition-transform ${openSubmenu === i ? 'rotate-180' : ''}`} />
                      </span>
                    </div>
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 z-50 transition-all duration-300 ${openSubmenu === i ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}
                    >
                      {menu.submenu.map((subitem, j) => (
                        <Link key={j} href={subitem.href}
                          className={`block px-4 py-3 text-[#423F8D] hover:bg-[#FF6D00] hover:text-white transition-all duration-200 flex items-center ${pathname === subitem.href ? "bg-[#FF6D00] text-white" : ""}`}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#FF6D00] mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={menu.href}
                    className={`relative px-3 lg:px-4 py-1 lg:py-2 rounded-[4px] transition-all duration-300 ${pathname === menu.href
                      ? "bg-white text-[#FF6D00] font-semibold"
                      : "hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                      }`}
                  >
                    {menu.label}
                    {pathname === menu.href && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-[#FF6D00] rounded-full"></span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Call Button */}
          <a href={`tel:${phoneNumber}`} className="ml-4 lg:ml-6 bg-[#FF6D00] text-white hover:bg-white hover:text-[#FF6D00] border-2 border-transparent hover:border-[#FF6D00] px-4 lg:px-6 py-1 lg:py-2 rounded-[5px] font-semibold transition whitespace-nowrap text-sm lg:text-base">
            {phoneNumber}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full border border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX className="text-xl sm:text-2xl" /> : <FiMenu className="text-xl sm:text-2xl" />}
          </button>
        </div>
      </nav>



      {/* Mobile Menu */}

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 pt-20 px-4 sm:px-6 flex flex-col overflow-y-auto bg-gradient-to-b from-[#FF6D00] to-[#423F8D]"
        >
          <div className="space-y-1 max-w-4xl mx-auto w-full">
            {menus.map((menu, i) => (
              <div key={i}>
                {menu.submenu ? (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={menu.href}
                        onClick={() => setIsOpen(false)}
                        className={`py-3 px-4 text-base sm:text-lg font-medium rounded-md ${pathname === menu.href || menu.submenu.some(sub => pathname === sub.href)
                          ? "bg-white text-[#FF6D00] font-semibold"
                          : "text-white hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                          }`}
                      >
                        {menu.label}
                      </Link>
                      <button
                        onClick={() => toggleSubmenu(i)}
                        className="text-white hover:text-[#FF6D00] p-2"
                        aria-label="Toggle Submenu"
                      >
                        {openSubmenu === i ? <FiChevronUp /> : <FiChevronDown />}
                      </button>
                    </div>
                    {openSubmenu === i && (
                      <div className="pl-6 bg-white bg-opacity-10 rounded-lg mx-2 my-1">
                        {menu.submenu.map((subitem, j) => (
                          <Link
                            key={j}
                            href={subitem.href}
                            className={`block py-2 px-4 rounded-md text-base sm:text-lg font-medium ${pathname === subitem.href
                              ? "bg-white text-[#FF6D00] font-semibold"
                              : "text-[#423F8D] hover:bg-white hover:text-[#FF6D00] hover:bg-opacity-20"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-[#FF6D00] mr-2"></span>
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={menu.href}
                    className={`block py-3 px-4 rounded-md text-base sm:text-lg font-medium transition-colors ${pathname === menu.href
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
            className="mt-6 mx-auto max-w-xs bg-[#FF6D00] text-white hover:bg-white hover:text-[#FF6D00] border-2 border-transparent hover:border-white px-6 py-2 rounded-full transition font-semibold text-center text-base sm:text-lg"
            onClick={() => setIsOpen(false)}
          >
            <FiPhone className="inline mr-2" />
            Call Now
          </a>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 pb-8">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 hover:text-[#FF6D00] transition text-base sm:text-xl"
              >
                {React.cloneElement(social.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
              </a>
            ))}
          </div>
        </div>
      )}



       
          
    





    </>
  );
};

export default Header;