"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = ({ isHomePage = false }) => {
  const blogPosts = [

    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the emerging technologies that will shape web development in the coming year.",
      category: "Technology",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },

    {
      id: 2,
      title: "UX Design Principles That Never Change",
      excerpt: "Discover the timeless principles that make user experiences intuitive and enjoyable.",
      category: "Design",
      date: "April 28, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80"
    },

    {
      id: 3,
      title: "Optimizing React Performance in 2024",
      excerpt: "Learn the latest techniques to make your React applications blazing fast.",
      category: "Development",
      date: "April 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },

    {
      id: 4,
      title: "AI-Powered Design Tools Revolutionizing Creativity in 2024",
      excerpt: "How artificial intelligence is transforming the design workflow and enabling new creative possibilities.",
      category: "Design",
      date: "June 2, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80"
    },

    {
      id: 5,
      title: "The Rise of WebAssembly: Breaking Performance Barriers",
      excerpt: "Why WebAssembly is becoming the go-to solution for high-performance web applications.",
      category: "Technology",
      date: "May 22, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
    },

    {
      id: 6,
      title: "Sustainable Web Design: Reducing Digital Carbon Footprints",
      excerpt: "Practical strategies for creating eco-friendly websites without compromising user experience.",
      category: "Design",
      date: "April 5, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
    }

  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00] rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#00C2FF] rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF6D00] font-semibold tracking-wider">OUR BLOG</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Latest <span className="text-[#423F8D]">Insights</span> & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our thoughts on technology, design, and business innovation.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#FF6D00] text-white text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#423F8D] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-[#423F8D] font-semibold group">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* "View All Articles" button (only on homepage) */}
        {isHomePage && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/blog">
              <button className="bg-[#423F8D] hover:bg-[#2A2765] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105 inline-flex items-center">
                View All Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
