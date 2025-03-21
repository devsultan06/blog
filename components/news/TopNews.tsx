import CustomImage from "@components/ui/CustomImage"
import Link from "next/link"

const TopNews = () => {
    return (
        <div className="border-b border-t border-dark20 ">
            <div className="box flex justify-between items-start max-900:block  px-[100px] max-900:px-[20px] py-[100px] max-900:py-[50px]">
                <div className="item flex-[1] max-900:w-full max-900:mb-[30px]">

                    <CustomImage src="/images/news1.png" alt="AI Illustration" width={400} height={400} className="max-900:w-full max-900:h-auto max-900:max-h-[300px]" />


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
                                    <CustomImage src="/images/like.png" alt="Like" width={20} height={20} />
                                    <p className="text-lightgrey">10k</p>
                                </div>

                                <div className="share flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <CustomImage src="/images/share.png" alt="Share" width={20} height={20} />
                                    <p className="text-lightgrey">200</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item max-900:w-[100%]">
                                <Link href={`/blog/12345667789`}>
                                    <button className="relative overflow-hidden max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                                        <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                                        <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Read More</span>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="box flex justify-between items-start max-900:block px-[100px] max-900:px-[20px] py-[100px] max-900:py-[50px]">
                <div className="item flex-[1] max-900:w-full max-900:mb-[30px]">

                    <CustomImage src="/images/blog1.png" alt="AI Illustration" width={400} height={700} className="max-900:w-full h-[350px] max-900:max-h-[500px] rounded-lg" />


                </div>

                <div className="flex-[2]">
                    <h1 className="text-[32px] max-900:text-[30px] text-white">The Rise of Artificial Intelligence in Healthcare


                    </h1>
                    <div>
                        <p className="text-lightgrey text-[17px] mt-[20px] mb-[30px]"> Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.


                        </p>
                    </div>

                    <div className="text-white flex gap-9 max-900:gap-4">
                        <div className="category">
                            <p className="text-lightgrey">Category</p>
                            <p className="">Healthcare</p>
                        </div>
                        <div className="publication">
                            <p className="text-lightgrey">Publication Date</p>
                            <p className="">October 10, 2021</p>
                        </div>
                        <div className="author">
                            <p className="text-lightgrey">Author</p>
                            <p className="">Dr. Emily Walker</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-[30px]">
                        <div>
                            <div className="icons flex gap-2">
                                <div className="like flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <CustomImage src="/images/like.png" alt="Like" width={20} height={20} />
                                    <p className="text-lightgrey">10.6k</p>
                                </div>

                                <div className="share flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <CustomImage src="/images/share.png" alt="Share" width={20} height={20} />
                                    <p className="text-lightgrey">2k</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item max-900:w-[100%]">
                                <Link href={`/blog/1234`}>
                                    <button className="relative overflow-hidden max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                                        <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                                        <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Read More</span>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopNews