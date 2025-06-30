"use client";
import { motion } from "framer-motion";

const ValuesSection = ({ values }) => (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Core <span className="text-[#FF6D00]">Values</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The principles that guide our mission and global impact
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(values) &&
          values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
