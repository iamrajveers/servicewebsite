"use client";
import SectionHeader from "./SectionHeader";
import Milestone from "./Milestone";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimelineSection = ({ milestones }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Journey"
          subtitle="Milestones in global expansion"
        />
        <div className="relative max-w-5xl mx-auto" ref={ref}>
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[#423F8D] to-[#FF6D00]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />

          {/* Glowing dot at current position */}
          <motion.div
            className="absolute left-1/2 w-6 h-6 rounded-full bg-[#FF6D00] -ml-3 -mt-3 shadow-lg shadow-[#FF6D00]/50"
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
          />

          {/* Milestones container with animation */}
          <motion.div
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {milestones.map((milestone, index) => (
              <Milestone
                key={index}
                index={index}
                {...milestone}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;