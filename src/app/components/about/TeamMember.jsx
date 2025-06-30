"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamMember = ({ name, role, image, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay * 0.15 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="group text-center relative"
  >
    {/* Image container */}
    <div className="relative overflow-hidden rounded-2xl mb-5 h-80 shadow-lg">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="text-gray-300">{role}</p>
          <div className="flex justify-center mt-3 space-x-3">
            {["#FF6D00", "#423F8D", "#4F46E5"].map((color, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Name + Role (shown always) */}
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-gray-500">{role}</p>
  </motion.div>
);

export default TeamMember;
