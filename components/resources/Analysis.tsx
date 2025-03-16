"use client";
import { childVariants, containerVariants, useInViewAnimation } from "@/_lib/animation";
import { analysis } from "@/data/analysis";
import CustomImage from "@components/ui/CustomImage";
import { motion } from "framer-motion";


export const Analysis = () => {
    const { ref, isInView } = useInViewAnimation();

    return (
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 text-white px-[100px] max-900:px-[10px] py-[50px] max-900:py-[50px] border border-dark20 "
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            {analysis.map((analysis) => (
                <motion.div key={analysis.id} className="rounded-lg p-4 shadow-lg " variants={childVariants}>
                    <CustomImage
                        src={analysis.thumbnail}
                        alt={analysis.title}
                        width={400}
                        height={250}
                        className="w-full rounded-lg"
                    />

                    <h3 className="text-xl font-bold mt-4">{analysis.title}</h3>
                    <p className="text-lightgrey mt-2">{analysis.description}</p>
                    <div className="flex justify-between mt-[20px] gap-5">
                        <button className="relative overflow-hidden max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                            <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

                            <span className="relative z-10 font-medium group-hover:text-black transition duration-300">View Details</span>

                        </button>

                        <button className="relative overflow-hidden max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                            <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

                            <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Download PDF Now</span>

                        </button>
                    </div>
                </motion.div>
            ))
            }
        </motion.div >
    );
};

