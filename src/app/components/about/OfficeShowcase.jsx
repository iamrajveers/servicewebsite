"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const OfficeShowcase = ({ image }) => (
  <section className="py-16 md:py-32 bg-gray-900 text-white relative overflow-hidden">
    <Image
      src={image}
      alt="Our global headquarters"
      fill
      className="object-cover opacity-30"
    />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Where <span className="text-[#FF6D00]">Global</span> Meets{" "}
          <span className="text-[#423F8D]">Local</span>
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our state-of-the-art headquarters in New York serves as the hub for our worldwide operations, blending international vision with local expertise.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-900 font-bold py-3 px-6 rounded-lg flex items-center"
        >
          Take Virtual Tour <FaChevronRight className="ml-2" />
        </motion.button>
      </div>
    </div>
  </section>
);

export default OfficeShowcase;
