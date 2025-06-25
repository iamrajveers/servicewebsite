import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechSolutions Inc.",
      content: "Working with this team transformed our digital presence. Their expertise in web development and digital strategy delivered results beyond our expectations.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateX",
      content: "The mobile app they developed for us has increased our user engagement by 300%. Their attention to detail and user experience is unparalleled.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Marketing Director, BrandVision",
      content: "Their data analytics services provided insights we never knew existed. Now we make all our marketing decisions based on solid data.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Product Manager, CloudScale",
      content: "The cloud infrastructure they set up scaled perfectly during our peak season. Zero downtime and flawless performance.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "UX Lead, DesignHub",
      content: "Their UI/UX designs helped us win two industry awards. They understand user psychology better than anyone we've worked with.",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      id: 6,
      name: "James Peterson",
      role: "Director of Operations, DataSystems",
      content: "The digital transformation roadmap they created saved us 18 months of trial and error. Worth every penny.",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      id: 7,
      name: "Olivia Zhang",
      role: "VP Engineering, NextGen Tech",
      content: "Their team integrated seamlessly with ours, delivering complex features ahead of schedule. Truly exceptional partnership.",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([0, 1, 2, 3]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 3) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating, testimonials.length]);

  useEffect(() => {
    // Always show 4 testimonials, starting from activeIndex
    const newVisible = [];
    for (let i = 0; i < 4; i++) {
      newVisible.push((activeIndex + i) % testimonials.length);
    }
    setVisibleTestimonials(newVisible);
  }, [activeIndex, testimonials.length]);

  const handleDotClick = (index) => {
    setIsAutoRotating(false);
    setActiveIndex(index);
    // Restart auto rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#423F8D] via-[#3A3780] to-[#2A2765]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF6D00] font-semibold tracking-wider">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            What Our <span className="text-[#00C2FF]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleTestimonials.map((index) => {
            const testimonial = testimonials[index];
            return (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#00C2FF] rounded-full blur opacity-75"></div>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Auto-rotation indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-[#00C2FF] w-6' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;