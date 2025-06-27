
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import loaderSvg from '../../../public/next.svg'

function Loader({ loading = false, children }) {
    if (!loading) {
        return <>{children}</>;
    }

    return (
        <motion.div
            className="min-h-screen w-full rounded-sm flex items-center justify-center bg-white/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative flex items-center justify-center">
                <motion.div
                    className="w-28 h-28 border-[4px] bg-white border-gray-300 border-t-[#FB5704] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
                />

                <motion.div
                    className="absolute"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <Image
                        src={loaderSvg}
                        width={500}
                        height={500}
                        alt="loader"
                        className="w-16 h-16 object-contain"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Loader;
