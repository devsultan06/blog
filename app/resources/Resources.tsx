"use client"
import { reportdata } from "@/data/reportdata";
import { Counter } from "@components/home/Counter";
import { Future } from "@components/layout/Future";
import { Analysis } from "@components/resources/Analysis";
import { ReportHeader } from "@components/resources/ReportHeader";
import { Reports } from "@components/resources/Reports";
import { motion } from "framer-motion";


export default function Resources() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };
    return (
        <div className="news bg-deepblack text-white ">

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show" className=" max-900:block px-[100px] max-900:px-[20px] border-b  border-dark20 py-[100px] max-900:py-[50px]">
                <h1 className="text-[40px] max-900:text-[33px] font-kumbh text-white">Unlock a World of </h1>
                <div className="flex gap-9 items-center justify-center mt-[10px] max-900:block">
                    <motion.div variants={childVariants}>
                        <h1 className="text-[40px] max-900:text-[33px] text-white">Knowledge</h1>

                    </motion.div >
                    <motion.div variants={childVariants}>
                        <p className="text-grey60 text-[17px]">Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>

                    </motion.div>
                </div>


            </motion.div>

            <div className="box flex flex-wrap border border-dark20 max-900:border-none  max-900:w-[100%]">
                <div className="item border-r max-900:border-b border-dark20 w-1/4 p-[50px] pl-[100px] max-900:w-1/2 max-900:pl-[20px] text-[25px] font-semibold">
                    <Counter from={1} to={300} /><span className="text-yellow">+</span>
                    <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Resources Available</p>
                </div>

                <div className="item border-r max-900:border-b border-dark20 w-1/4 p-[50px] text-[25px] font-semibold max-900:w-1/2 max-900:pl-[30px] max-900:border-r">
                    <Counter from={1} to={520} /><span className="text-yellow">+</span>
                    <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Total Downloads</p>
                </div>

                <div className="item border-r max-900:border-b border-dark20 w-1/4 p-[50px] text-[25px] font-semibold max-900:w-1/2">
                    <Counter from={1} to={900} /><span className="text-yellow">+</span>
                    <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Active Users</p>
                </div>

                <div className="item w-1/4 max-900:border-b border-dark20 p-[50px] text-[25px] font-semibold max-900:w-1/2">
                    <Counter from={1} to={100} /><span className="text-yellow">+</span>
                    <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Countries Accessing Our Content</p>
                </div>
            </div>

            <ReportHeader />

            {reportdata.map((reports, index) => (
                <Reports key={index} {...reports} />
            ))}



            <Analysis />
            <Future />

        </div>
    )
}
