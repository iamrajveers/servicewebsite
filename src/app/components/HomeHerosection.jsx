import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../../../public/hero-img.png'; 

const  HomeHerosection = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={heroImage}
                alt="Brand Growth"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#423F8D] leading-tight mb-6">
              Build audience and grow your brand
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Content marketing is nothing but offering users value. 
              <span className="block mt-2">
                It is not just about traffic minion customers.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started"
                className="bg-[#FF6D00] hover:bg-[#E66200] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-md"
              >
                Get Started
              </Link>
              
              <Link
                href="/learn-more"
                className="border-2 border-[#423F8D] text-[#423F8D] hover:bg-[#423F8D] hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  HomeHerosection

