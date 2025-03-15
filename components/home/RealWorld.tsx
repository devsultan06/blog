import CustomImage from "@components/ui/CustomImage";
import { childVariants, containerVariants, useInViewAnimation } from "@/_lib/animation";
import { motion } from "framer-motion";

const RealWorld = () => {
    const { ref, isInView } = useInViewAnimation();


    return (
        <motion.section className="bg-black pt-[60px] pb-[60px] px-[100px] max-900:px-[20px] " ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}>
            <motion.div className="flex justify-between items-center max-900:block" variants={childVariants}>
                <div className="item">
                    <button className="bg-dark20 text-white px-2 py-[2px] rounded-[1px] hover:bg-opacity-80 transition duration-300 ease-in-out">
                        What Our Readers Say
                    </button>
                    <h1 className="text-[35px] text-white font-kumbh ">Real Words from Real Readers</h1>

                </div>
                <div className="item max-900:w-[100%]">
                    <button className="relative overflow-hidden flex items-center justify-center gap-1 mt-[20px] max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover"></span>

                        <span className="relative z-10 font-medium group-hover:text-black transition duration-300">View All Testimonials</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                </div>


            </motion.div>

        </motion.section>
    );
};

export default RealWorld;
