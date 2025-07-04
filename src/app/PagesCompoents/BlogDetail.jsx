"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaShareAlt, FaChevronLeft } from 'react-icons/fa';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Link from "next/link";

const BlogDetail = ({ post }) => {

    const relatedPosts = [
        {
            id: 2,
            title: "UX Design Principles That Never Change",
            excerpt: "Discover the timeless principles that make user experiences intuitive and enjoyable.",
            content: "<p>...</p>",
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
        }
    ];



    return (
        <div className="bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#FF6D00]/10 rounded-full filter blur-3xl" />
                <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#423F8D]/10 rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >


                    <Link href="/blog" passHref>
                        <button className="flex items-center text-[#423F8D] hover:text-[#2A2765] font-medium hover:cursor-pointer">
                            <FaChevronLeft className="mr-2" />
                            Back to Blog
                        </button>
                    </Link>


                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex items-center mb-6">
                        <span className="bg-[#FF6D00] text-white text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 ml-4">
                            <FaCalendarAlt className="mr-2" />
                            <span className="text-sm">{post.date}</span>
                            <span className="mx-2">•</span>
                            <FaClock className="mr-2" />
                            <span className="text-sm">{post.readTime}</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        {post.excerpt}
                    </p>
                </motion.header>

                {/* Body */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col lg:flex-row gap-12"
                >
                    <main className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-10"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        <article className="prose prose-lg max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>

                        <div className="mt-12 flex flex-wrap gap-2">
                            {post.tags?.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                    className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                                >
                                    #{tag}
                                </motion.span>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                            <div className="flex gap-4">
                                {["Twitter", "Facebook", "LinkedIn", "Copy Link"].map((platform) => (
                                    <motion.button
                                        key={platform}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                        aria-label={`Share on ${platform}`}
                                    >
                                        <FaShareAlt />
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">

                        {/* Related Posts */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                            <div className="space-y-6">


                                {relatedPosts.map((item) => (
                                    <Link href={`/blog/${item.id}`} key={item.id} className="group block">
                                        <div className="flex items-center mb-2">
                                            <span className="bg-[#FF6D00]/10 text-[#FF6D00] text-xs font-medium px-2 py-1 rounded-full">
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-gray-500 ml-2">{item.date}</span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 group-hover:text-[#423F8D] transition-colors mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-2">{item.excerpt}</p>
                                        <div className="flex items-center text-sm text-[#423F8D] font-medium">
                                            Read more
                                            <IoMdArrowRoundForward className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}


                            </div>
                        </motion.div>
                    </aside>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogDetail;