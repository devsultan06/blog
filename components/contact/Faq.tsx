"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqs } from "@/data/faqs";



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
