"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaBolt, FaDollarSign, FaUserShield, FaCheckCircle } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Safe, chemical-free cleaning methods that protect your family and environment.",
      highlight: "99.9% organic"
    },
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "Fast Response",
      description: "Same-day or next-day service available for urgent cleaning needs.",
      highlight: "24/7 availability"
    },
    {
      icon: <FaDollarSign className="w-6 h-6" />,
      title: "Upfront Pricing",
      description: "Transparent quotes with no hidden charges or surprise upsells.",
      highlight: "Price match guarantee"
    },
    {
      icon: <FaUserShield className="w-6 h-6" />,
      title: "Certified Technicians",
      description: "Trained, background-checked professionals you can trust in your home.",
      highlight: "Fully insured"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#2A2765] to-[#423F8D] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#6A67D4]/10 blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#FF9E00]/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Premium Cleaning <span className="text-[#FF9E00]">Solutions</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            Exceptional service with industry-leading standards for your complete peace of mind
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl border border-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#FF9E00]/30 transition-all duration-500 pointer-events-none"></div>
              
              {/* Feature content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF9E00]/20 to-[#FF6D00]/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white group-hover:text-[#FF9E00] transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-center text-sm text-[#FF9E00] font-medium">
                  <FaCheckCircle className="mr-2" />
                  {feature.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-5 w-3 h-3 rounded-full bg-[#FF9E00]/30"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 right-5 w-2 h-2 rounded-full bg-white/30"
        ></motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;