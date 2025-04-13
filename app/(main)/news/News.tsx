"use client"
import CustomImage from "@components/ui/CustomImage";
import { tab2 } from "@/data/tabs";
import { blogPosts2 } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { NewsArticle } from "@components/news/NewsArticle";
import { HeadLines } from "@components/news/HeadLines";
import { Tabs } from "@components/layout/Tabs";
import { BlogList } from "@components/layout/BlogList";
import { Insights } from "@components/news/Insights";
import { InsightVideos } from "@components/news/InsightVideos";
import { Future } from "@components/layout/Future";
import { useActiveTab } from "@/hooks/useActiveTabs";
import TopNews from "@components/news/TopNews";



export default function News() {
    const { activeTab, setActiveTab } = useActiveTab();
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

            <motion.div className=" max-900:block px-[100px] max-900:px-[20px] border-b  border-dark20 py-[100px] max-900:py-[50px]"
                variants={containerVariants}
                initial="hidden"
                animate="show">
                <motion.h1 className="text-[40px] max-900:text-[33px] font-kumbh text-white" variants={childVariants}>Today's Headlines: Stay</motion.h1>
                <div className="flex gap-9 items-center justify-center mt-[10px] max-900:block">
                    <motion.div variants={childVariants}>
                        <h1 className="text-[40px] max-900:text-[33px] text-white">Informed</h1>

                    </motion.div>
                    <motion.div variants={childVariants}>
                        <p className="text-grey60 text-[17px]">Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>

                    </motion.div>
                </div>


            </motion.div>

            <TopNews />

            <NewsArticle />
            <HeadLines />
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tab2} />
            <BlogList activeTab={activeTab} blogPosts={blogPosts2} buttonText="Read More" />
            <Insights />
            <InsightVideos />
            <Future />
        </div>
    );
}   