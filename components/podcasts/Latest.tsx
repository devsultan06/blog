"use client";
import { childVariants, containerVariants } from "@/_lib/animation";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/_lib/animation";

const Latest = () => {
    const { ref, isInView } = useInViewAnimation();

    return (
        <section className="bg-black pt-[60px] pb-[60px] px-[100px] max-900:px-[20px] ">
            <motion.div
                ref={ref}
                className="item"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <motion.div variants={childVariants} className="flex flex-col items-start gap-3">
                    <motion.button
                        className="bg-dark20 text-white px-2 py-[2px] rounded-[1px] hover:bg-opacity-80 transition duration-300 ease-in-out"
                    >
                        Stay Informed with Fresh Content
                    </motion.button>
                    <motion.h1
                        className="text-[35px] text-white font-kumbh"
                    >
                        Latest Podcast Episodes
                    </motion.h1>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Latest;
