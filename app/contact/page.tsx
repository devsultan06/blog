"use client";
import { reportdata } from "@/data/reportdata";
import { FaqBox } from "@components/contact/FaqBox";
import { Reach } from "@components/contact/Reach";
import { Future } from "@components/layout/Future";

import CustomImage from "@components/ui/CustomImage";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Contact = () => {

    return (
        <div className="news bg-deepblack text-white ">


            <div className="box block flex-wrap border border-dark20 max-900:border-none  sm:flex">
                <div className="item border-r max-900:border-b border-dark20 w-1/4 p-[50px] pl-[100px] max-900:w-full max-900:pl-[20px] text-[25px] font-semibold">
                    <h1 className="text-[20px]">General Enquiries</h1>
                    <button className="relative bg-black flex items-center justify-center gap-1 mt-[20px] whitespace-nowrap w-fit border border-dark20 text-lightgrey px-5 py-2 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover rounded-md"></span>

                        <span className="relative z-10 font-medium text-[16px] group-hover:text-black transition duration-300">sultanabaniks@.com</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                    <button className="relative bg-black  flex items-center justify-center gap-1 mt-[20px] whitespace-nowrap w-fit border border-dark20 text-lightgrey px-5 py-2 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover rounded-md"></span>

                        <span className="relative z-10 font-medium text-[16px] group-hover:text-black transition duration-300">+234-703-688-6069</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                </div>

                <div className="item border-r max-900:border-b border-dark20 w-1/4 p-[50px] text-[25px] max-900:pl-[20px] font-semibold max-900:w-full  max-900:border-r">
                    <h1 className="text-[20px]">Technical Support</h1>
                    <button className="relative bg-black flex items-center justify-center gap-1 mt-[20px] whitespace-nowrap w-fit border border-dark20 text-lightgrey px-5 py-2 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover rounded-md"></span>

                        <span className="relative z-10 font-medium text-[16px] group-hover:text-black transition duration-300">future@podcasts.com</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                    <button className="relative bg-black  flex items-center justify-center gap-1 mt-[20px] whitespace-nowrap w-fit border border-dark20 text-lightgrey px-5 py-2 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover rounded-md"></span>

                        <span className="relative z-10 font-medium text-[16px] group-hover:text-black transition duration-300">+2 (123) 566-2490</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                </div>

                <div className="item border-r max-900:border-b border-dark20 w-1/4 p-[50px] text-[25px] max-900:pl-[20px] font-semibold max-900:w-full">
                    <h1 className="text-[20px]">Our Office</h1>
                    <p className="text-grey60 text-[15px] font-normal mt-[7px]">Address: 123 AI Tech Avenue, Techville, 54321</p>

                    <button className="relative bg-black  flex items-center justify-center gap-1 mt-[20px] whitespace-nowrap w-fit border border-dark20 text-lightgrey px-5 py-2 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover rounded-md"></span>

                        <span className="relative z-10 font-medium text-[16px] group-hover:text-black transition duration-300">+1 (123) 456-7890</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                </div>

                <div className="item w-1/4 max-900:border-b border-dark20 p-[50px] text-[25px] max-900:pl-[20px] font-semibold max-900:w-full">
                    <h1 className="text-[20px]">Connect with Us</h1>
                    <div className="flex gap-2 text-lg max-900:my-[20px] mt-[10px]">
                        <a href="https://x.com/devsultan06" className="hover:text-lightgrey text-white bg-black px-4  py-3 border border-dark20 rounded-md"><FaTwitter /></a>
                        <a href="https://github.com/devsultan06" className="hover:text-lightgrey text-white bg-black px-4  py-3 border border-dark20 rounded-md"><FaGithub /></a>
                        <a href="https://www.instagram.com/devsultan06" className="hover:text-lightgrey text-white bg-black px-4  py-3 border border-dark20 rounded-md"><FaInstagram /></a>
                    </div>
                </div>
            </div>


            <Reach />
            <FaqBox />

            <Future />

        </div>
    )
}

export default Contact