"use client";

import { features2 } from "@/data/features2";
import { resourcesData } from "@/data/resourcesData";

import CustomImage from "@components/ui/CustomImage";
import { useEffect, useState } from "react";

import { tab1 } from "@/data/tabs";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { Counter } from "@components/home/Counter";
import { FeaturesSection } from "@components/home/FeatureSection";
import { HeroSection } from "@components/home/HeroSection";
import { FeatureSection2 } from "@components/home/FeatureSection2";
import { Explore } from "@components/home/Explore";
import { Tabs } from "@components/layout/Tabs";
import { BlogList } from "@components/layout/BlogList";
import { GateWay } from "@components/home/GateWay";
import Resources from "./resources/page";
import { RealWorld } from "@components/home/RealWorld";
import { Future } from "@components/layout/Future";
import { Testimonials } from "@components/home/Testimonials";


export default function Home() {

    const [activeTab, setActiveTab] = useState("All");

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                console.log("Fetched posts:", data);
            })
            .catch((err) => console.error("Error fetching posts:", err));
    }, []);

    useEffect(() => {
        console.log("Updated posts state:", posts);
    }, [posts]);


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
        <div className="home text-white">

            <header className="bg-deepblack text-white border-b border-dark20">
                <div className="box flex justify-between items-start max-900:block">
                    <div className="item flex-1 border-r border-b border-t border-dark20  pt-[100px] max-900:pt-[50px]">

                        <motion.div
                            className="pl-[100px] max-900:pl-[20px] max-900:pr-[20px]"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.p className="text-lightgrey text-[18px] font-kumbh" variants={childVariants}>
                                Your Journey to Tomorrow Begins Here
                            </motion.p>
                            <motion.h1 className="text-[40px] max-900:text-[32px] font-kumbh" variants={childVariants}>
                                Explore the Frontiers of
                            </motion.h1>
                            <motion.h1 className="text-[40px] max-900:text-[32px]" variants={childVariants}>
                                Artificial Intelligence
                            </motion.h1>
                            <motion.p className="text-grey50 text-[17px] mt-[5px]" variants={childVariants}>
                                Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
                            </motion.p>
                        </motion.div>


                        <div className="box flex  justify-between items-center mt-[80px] border-r border-t border-b border-dark20 max-900:w-[100%]">
                            <div className="item border-r border-dark20 w-1/3 p-[50px] pl-[100px] max-900:pl-[20px] text-[25px] font-semibold">
                                <Counter from={1} to={300} /><span className="text-yellow">+</span>
                                <p className="text-lightgrey text-[15px]  font-normal mt-[7px]">Resources Available</p>
                            </div>
                            <div className="item border-r border-dark20 w-1/3 p-[50px] text-[25px] font-semibold  max-900:pl-[30px] ">
                                <Counter from={1} to={520} />
                                <span className="text-yellow">+</span>
                                <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Total Downloads</p>
                            </div>

                            <div className="item w-1/3 p-[50px] text-[25px] font-semibold ">
                                <Counter from={1} to={900} />
                                <span className="text-yellow">+</span>
                                <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Active Users</p>
                            </div>
                        </div>

                    </div>

                    <div className="item w-1/3 flex flex-col items-start max-900:w-full max-900:pb-[30px]">
                        <CustomImage src="/images/ray.png" alt="AI Illustration" width={300} height={300} />
                        <div className="pl-[40px] mt-[-30px] max-900:px-[20px] ">
                            <CustomImage src="/images/people.png" alt="Arrow" width={150} height={150} />
                            <h1 className="text-[20px] my-[10px]">Explore 1000+ resources</h1>
                            <p className="text-grey60 text-[14px]">Over 1,000 articles on emerging tech trends and breakthroughs.</p>

                            <button className="relative overflow-hidden flex justify-center  max-900:w-[100%] items-center gap-1 mt-[20px] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                                <span className="hover"></span>

                                <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Explore Resources</span>
                                <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                            </button>


                        </div>

                    </div>
                </div>
            </header>

            <FeaturesSection />

            <HeroSection />

            <section className="bg-deepblack">

                {features2.map((section, index) => (
                    <FeatureSection2 key={index} {...section} />
                ))}


            </section>

            <Explore />

            <section className="blogs bg-deepblack">

                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tab1} />
                <BlogList activeTab={activeTab} blogPosts={blogPosts} buttonText="View Blog" />

            </section>

            <GateWay />

            <section className="bg-deepblack">

                {resourcesData.map((resources, index) => (
                    <Resources key={index} {...resources} />
                ))}


            </section>

            <RealWorld />
            <Testimonials />

            <Future />


        </div>

    );
}
