import React from 'react';

const MapSection = () => {
    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] overflow-hidden">
            {/* Decorative glow */}

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header - Updated text colors for light bg */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[#00C2FF] font-semibold tracking-wider text-sm md:text-base">VISIT US</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-3 mb-4 leading-tight">
                        Find Our <span className="text-[#FF6D00]">Location</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Come say hello at our headquarters or connect virtually
                    </p>
                </div>

                {/* Gradient-border Map Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Gradient border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6D00] to-[#00C2FF] rounded-2xl blur-md opacity-75"></div>

                    {/* Actual map container */}
                    <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132579!2d-73.98784492452526!3d40.74844097138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1718789876459!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                        ></iframe>
                    </div>

                    {/* Location info card - Updated for light theme */}
                    <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:bottom-6 md:w-96 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-gray-200 shadow-xl">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6D00]" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Our Headquarters
                        </h3>
                        <p className="text-gray-700 mb-4">350 5th Ave, New York, NY 10118</p>
                        <div className="space-y-2">
                            <p className="text-gray-700 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00C2FF]" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                Mon-Fri: 9AM - 6PM
                            </p>
                            <p className="text-gray-700 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00C2FF]" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                +1 (555) 123-4567
                            </p>
                        </div>
                        <button className="mt-4 w-full bg-gradient-to-r from-[#FF6D00] to-[#00C2FF] text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition">
                            Get Directions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;