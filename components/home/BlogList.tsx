import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

const BlogList = ({ activeTab }: { activeTab: string }) => {
    const filteredBlogs = activeTab === "All" ? blogPosts : blogPosts.filter(post => post.niche === activeTab);

    return (
        <div className="blogs-type">
            {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post) => (
                    <div key={post.id} className="item flex flex-wrap justify-between items-start px-[100px] py-[40px] border-b border-dark20 max-900:px-[20px] max-900:flex-col">
                        <div className="flex items-center justify-between w-full max-900:flex-row">
                            <div className="admin-box flex gap-2 items-start">
                                <Image src={post.adminImage} alt="Admin" width={50} height={50} />
                                <div>
                                    <h1>{post.adminName}</h1>
                                    <p className="text-lightgrey text-[15px]">{post.niche}</p>
                                </div>
                            </div>

                            <div className="max-900:flex max-900:items-center max-900:justify-end">
                                <button className="relative overflow-hidden flex items-center justify-center gap-1 border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                                    <span className="absolute inset-0 bg-yellow scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                                    <span className="relative z-10 font-medium group-hover:text-white transition duration-300">View Blog</span>
                                    <Image className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                                </button>
                            </div>
                        </div>

                        <div className="w-full mt-[20px] max-900:mt-[10px]">
                            <p className="text-lightgrey text-[18px]">{post.date}</p>
                            <h1 className="text-[23px] font-medium mt-[10px]">{post.title}</h1>
                            <p className="text-lightgrey text-[16px] mb-[10px]">{post.description}</p>

                            <div className="icons flex gap-2">
                                <div className="like flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <Image src={post.isLiked ? "/images/liked.png" : "/images/like.png"} alt="Like" width={20} height={20} />
                                    <p>{post.likes}</p>
                                </div>
                                <div className="comment flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <Image src="/images/comment.png" alt="Comment" width={20} height={20} />
                                    <p>{post.comments}</p>
                                </div>
                                <div className="share flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                    <Image src="/images/share.png" alt="Share" width={20} height={20} />
                                    <p>{post.shares}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-lightgrey text-[18px] py-10">No data available for this niche.</p>
            )}
        </div>
    );
};

export default BlogList;
