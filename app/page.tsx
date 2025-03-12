"use client";

import { features2 } from "@/data/features2";
import { resourcesData } from "@/data/resourcesData";
import BlogList from "@components/layout/BlogList";
import Explore from "@components/home/Explore";
import FeaturesSection from "@components/home/FeatureSection";
import FeatureSection2 from "@components/home/FeatureSection2";
import GateWay from "@components/home/GateWay";
import HeroSection from "@components/home/HeroSection";
import Tabs from "@components/layout/Tabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Resources from "@components/home/Resources";
import RealWorld from "@components/home/RealWorld";
import Testimonails from "@components/home/Testimonials";
import Future from "@components/layout/Future";
import Footer from "@components/layout/Footer";
import { tab1 } from "@/data/tabs";
import { blogPosts } from "@/data/blogPosts";

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
  return (
    <div className="home text-white">

      <header className="bg-deepblack text-white border-b border-dark20">
        <div className="box flex justify-between items-start max-900:block">
          <div className="item flex-1 border-r border-b border-t border-dark20  pt-[100px] max-900:pt-[50px]">
            <div className="pl-[100px] max-900:pl-[20px] max-900:pr-[20px]">
              <p className="text-lightgrey text-[18px] font-kumbh">Your Journey to Tomorrow Begins Here</p>
              <h1 className="text-[40px] max-900:text-[32px] font-kumbh">Explore the Frontiers of</h1>
              <h1 className="text-[40px] max-900:text-[32px]">Artificial Intelligence</h1>
              <p className="text-lightgrey text-[17px] mt-[5px]">Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
            </div>

            <div className="box flex  justify-between items-center mt-[80px] border-r border-t border-b border-dark20 max-900:w-[100%]">
              <div className="item border-r border-dark20 w-1/3 p-[50px] pl-[100px] max-900:pl-[20px] text-[25px] font-semibold">
                300<span className="text-yellow">+</span>
                <p className="text-lightgrey text-[15px]  font-normal mt-[7px]">Resources Available</p>
              </div>
              <div className="item border-r border-dark20 w-1/3 p-[50px] text-[25px] font-semibold  max-900:pl-[30px] ">
                12k<span className="text-yellow">+</span>
                <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Total Downloads</p>
              </div>

              <div className="item w-1/3 p-[50px] text-[25px] font-semibold ">
                10k<span className="text-yellow">+</span>
                <p className="text-lightgrey text-[15px] font-normal mt-[7px]">Active Users</p>
              </div>
            </div>

          </div>

          <div className="item w-1/3 flex flex-col items-start max-900:w-full max-900:pb-[30px]">
            <Image src="/images/ray.png" alt="AI Illustration" width={300} height={300} />
            <div className="pl-[40px] mt-[-30px] max-900:px-[20px] ">
              <Image src="/images/people.png" alt="Arrow" width={150} height={150} />
              <h1 className="text-[20px] my-[10px]">Explore 1000+ resources</h1>
              <p className="text-lightgrey text-[14px]">Over 1,000 articles on emerging tech trends and breakthroughs.</p>

              <button className="relative overflow-hidden flex justify-center  max-900:w-[100%] items-center gap-1 mt-[20px] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

                <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Explore Resources</span>
                <Image className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
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
        <BlogList activeTab={activeTab} blogPosts={blogPosts} buttonText="View Blog"/>

      </section>

      <GateWay />

      <section className="bg-deepblack">

        {resourcesData.map((resources, index) => (
          <Resources key={index} {...resources} />
        ))}


      </section>

      <RealWorld />
      <Testimonails />

      <Future />


    </div>

  );
}
