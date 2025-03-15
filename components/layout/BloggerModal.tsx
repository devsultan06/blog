"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Confetti from "react-confetti";
import { FiEdit2 } from "react-icons/fi";

export default function BloggerModal() {
    const pathname = usePathname();
    const isHome = pathname === "/"; 

    const [isOpen, setIsOpen] = useState(isHome); 
    const [showConfetti, setShowConfetti] = useState(isHome); 

    useEffect(() => {
        if (isHome) {
            const timer = setTimeout(() => setShowConfetti(false), 9000);
            return () => clearTimeout(timer);
        }
    }, [isHome]);

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotate: -5 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                        className="fixed bottom-5 right-5 max-900:right-2 max-w-sm bg-black text-white p-6 rounded-lg shadow-2xl border border-gray-700 z-30 overflow-hidden"
                    >
                        {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}

                        <motion.button
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-3 text-gray-400 hover:text-gray-300"
                        >
                            ✕
                        </motion.button>

                        <motion.h2
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1.1 }}
                            className="text-xl font-bold text-yellow-400 text-center"
                        >
                            ✨ Your Words, Your Stage! ✨
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-gray-300 text-center mt-3 text-sm"
                        >
                            Love writing? Share your thoughts with the world, build your audience,
                            and establish your brand as a blogger. Start publishing today!
                        </motion.p>

                        <Link href="/register">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 w-full bg-yellow text-black font-medium px-4 py-2 rounded-md transition-all relative"
                            >
                                <span className="relative z-10">🔥 Start Writing Now</span>
                                <motion.span
                                    className="absolute inset-0 bg-yellow-500 opacity-50 rounded-md"
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </motion.button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-5 bg-yellow text-black p-3 rounded-full shadow-lg transition-all z-20"
                >
                    <FiEdit2 size={22} />
                </motion.button>
            )}
        </div>
    );
}
