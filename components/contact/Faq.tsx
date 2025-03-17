"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
    {
        question: "What is AI?",
        answer:
            "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
    },
    {
        question: "How can I listen to your podcasts?",
        answer: "You can listen to our podcasts on various platforms like Spotify, Apple Podcasts, and our website.",
    },
    {
        question: "Are your podcasts free to listen to?",
        answer: "Yes! Our podcasts are completely free to listen to on all available platforms.",
    },
    {
        question: "Can I download episodes to listen offline?",
        answer: "Yes, you can download episodes for offline listening on supported platforms.",
    },
    {
        question: "How often do you release new episodes?",
        answer: "We release new episodes every week to keep you updated with fresh content.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-[#0f0f0f] rounded-lg">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full p-4 text-white text-md font-medium bg-black rounded-lg text-left"
                    >
                        {faq.question}
                        {openIndex === index ? (
                            <FiChevronUp className="text-yellow-500 text-xl" />
                        ) : (
                            <FiChevronDown className="text-yellow-500 text-xl" />
                        )}
                    </button>

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="p-4 text-gray-400 text-left">{faq.answer}</p>
                    </motion.div>

                </div>
            ))}
        </div>
    );
};

export default Faq;
