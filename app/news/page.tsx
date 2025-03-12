"use client";

import Image from "next/image";
import { useState } from "react";

import NewsArticle from "../../components/news/NewsArticle";
import HeadLines from "../../components/news/HeadLines";
import Tabs from "@components/layout/Tabs";
import BlogList from "@components/layout/BlogList";
import { tab2 } from "@/data/tabs";
import { blogPosts2 } from "@/data/blogPosts";
import Insights from "@components/news/Insights";
import InsightVideos from "@components/news/InsightVideos";
import Future from "@components/layout/Future";

export default function News() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className="news bg-deepblack text-white ">

            <div className=" max-900:block px-[100px] max-900:px-[20px] border-b  border-dark20 py-[100px] max-900:py-[50px]">
                <h1 className="text-[40px] max-900:text-[33px] font-kumbh text-white">Today's Headlines: Stay</h1>
                <div className="flex gap-9 items-center justify-center mt-[10px] max-900:block">
                    <div>
                        <h1 className="text-[40px] max-900:text-[33px] text-white">Informed</h1>

                    </div>
                    <div>
                        <p className="text-lightgrey text-[17px]">Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>

                    </div>
                </div>


            </div>

            <div className="box flex justify-between items-start max-900:block border-b border-t border-dark20 px-[100px] max-900:px-[20px] py-[100px] max-900:py-[50px]">
                <div className="item flex-[1] max-900:w-full max-900:mb-[30px]">

                    <Image src="/images/news1.png" alt="AI Illustration" width={400} height={400} className="max-900:w-full max-900:h-auto max-900:max-h-[300px]" />


                </div>

                <div className="flex-[2]">
                    <h1 className="text-[32px] max-900:text-[30px] text-white">Global Climate Summit Addresses Urgent Climate Action

                    </h1>
                    <div>
                        <p className="text-lightgrey text-[17px] mt-[20px] mb-[30px]">World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.

                        </p>
                    </div>

                    <div className="text-white flex gap-9 max-900:gap-4">
                        <div className="category">
                            <p className="text-lightgrey">Category</p>
                            <p className="">Climate Change</p>
                        </div>
                        <div className="publication">
                            <p className="text-lightgrey">Publication Date</p>
                            <p className="">October 10, 2021</p>
                        </div>
                        <div className="author">
                            <p className="text-lightgrey">Author</p>
                            <p className="">John Doe</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-[30px]">
                        <div>
                            <div className="icons flex gap-2">
                                <div className="like flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <Image src="/images/like.png" alt="Like" width={20} height={20} />
                                    <p className="text-lightgrey">10k</p>
                                </div>

                                <div className="share flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <Image src="/images/share.png" alt="Share" width={20} height={20} />
                                    <p className="text-lightgrey">200</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item max-900:w-[100%]">
                                <button className="relative overflow-hidden max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                                    <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

                                    <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Read More</span>

                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

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