import Image from "next/image";

export default function Blog() {
    return (
        <div className="text-white">
            <div className="relative  h-[50vh] w-full z-0 bg-no-repeat bg-cover bg-right flex items-end justify-center text-center pt-[80px]"
                style={{ backgroundImage: `url(/images/blog1.png)` }}>

                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 to-transparent"></div>

                <h1 className="relative z-10 text-white text-3xl pb-4 font-semibold">
                    The Rise of Artificial Intelligence in Healthcare
                </h1>
            </div>

            <div className="blog flex max-900:flex-col-reverse ">
                <div className="item flex-[2] ">
                    <div className="intro border-b border-r border-dark20 px-[100px] py-[50px] max-900:px-[20px]">
                        <h1 className="mb-[20px]">Introduction</h1>
                        <p className="text-lightgrey">
                            Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.
                        </p>
                    </div>

                    <div className="content border-b border-r border-dark20 px-[100px] py-[50px] max-900:px-[20px] relative">
                        <h1 className="mb-[20px] text-[20px]">Artificial Intelligence (AI)</h1>
                        <p className="text-lightgrey mb-[20px]">
                            Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
                        </p>
                        <p className="text-lightgrey mb-[20px]">
                            Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
                        </p>


                        <h1 className="mb-[20px] text-[20px]">Predictive Analytics and Disease Prevention</h1>

                        <div className="relative max-h-[150px] overflow-hidden">
                            <p className="text-lightgrey">
                                One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.
                            </p>

                            <div className="absolute bottom-0 left-0 right-0 h-[230px] bg-gradient-to-t from-[#141414] to-transparent"></div>
                        </div>

                        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
                            <button className="relative overflow-hidden flex items-center justify-center gap-1 border border-dark20 text-lightgrey px-6 py-3 rounded-md transition duration-300 ease-in-out group">
                                <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                                <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Read More</span>
                                <Image className="relative z-10 group-hover:invert transition duration-300" src="/images/down.png" alt="Arrow" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>



                <div className="item flex-[1] ">
                    <div className="icons flex gap-2 border-b border-dark20 px-[60px] py-[50px] max-900:px-0 max-900:justify-center">
                        <div className="like flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                            <Image src="/images/liked.png" alt="Like" width={20} height={20} />
                            <p className="text-lightgrey">10.6k</p>
                        </div>
                        <div className="comment flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                            <Image src="/images/read.png" alt="Comment" width={20} height={20} />
                            <p className="text-lightgrey">50k</p>
                        </div>
                        <div className="share flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                            <Image src="/images/share.png" alt="Share" width={20} height={20} />
                            <p className="text-lightgrey">2k</p>
                        </div>
                    </div>

                    <div className="border-b border-dark20 px-[60px] py-[50px] max-900:px-[20px] ">
                        <div className="text-white  ">
                            <div className="flex gap-8 mb-[20px] max-900:gap-[100px]">
                                <div className="publication">
                                    <p className="text-lightgrey">Publication Date</p>
                                    <p className="">October 10, 2021</p>
                                </div>
                                <div className="category">
                                    <p className="text-lightgrey">Category</p>
                                    <p className="">Healthcare</p>
                                </div>

                            </div>
                            <div className="flex gap-8 max-900:gap-[120px]">
                                <div className="author">
                                    <p className="text-lightgrey">Reading Time</p>
                                    <p className="">10 Min</p>
                                </div>
                                <div className="author">
                                    <p className="text-lightgrey">Author</p>
                                    <p className="">Dr. Emily Walker</p>
                                </div>
                            </div>

                        </div>

                        <div className="table mt-[50px] max-900:w-full">
                            <p className="mb-[20px]">Table of Contents</p>
                            <ul className="bg-black text-lightgrey p-6 text-[15px] rounded-lg space-y-[24.2px] list-disc list-outside">
                                <li>Introduction</li>
                                <li>AI in Diagnostic Imaging</li>
                                <li>Predictive Analytics and Disease Prevention</li>
                                <li>Personalized Treatment Plans</li>
                                <li>Drug Discovery and Research</li>
                                <li>AI in Telemedicine</li>
                                <li>Ethical Considerations</li>
                                <li>The Future of AI in Healthcare</li>
                                <li>Conclusion</li>
                            </ul>

                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
}
