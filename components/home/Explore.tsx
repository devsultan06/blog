import CustomImage from "@components/ui/CustomImage";
import { motion, useInView } from "framer-motion";
import { useInViewAnimation, containerVariants, childVariants } from "@/_lib/animation";

export const Explore = () => {
    const { ref, isInView } = useInViewAnimation(); 
    return (
        <section className="pt-[60px] pb-[60px] px-[100px] bg-black max-900:px-[20px] ">
            <div className="flex justify-between items-center max-900:block">
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
                            Your Gateway to In-Depth Information
                        </motion.button>
                        <motion.h1
                            className="text-[35px] text-white font-kumbh"
                        >
                            Explore FutureTech's In-Depth Blog Posts
                        </motion.h1>
                    </motion.div>
                </motion.div>
                <div className="item max-900:w-[100%]">
                    <button className="relative overflow-hidden flex items-center justify-center gap-1 mt-[20px] max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover"></span>

                        <span className="relative z-10 font-medium group-hover:text-black transition duration-300">View All Blogs</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                </div>


            </div>

        </section>
    );
};

