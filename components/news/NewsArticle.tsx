import { newsArticles } from "@/data/newsArticle"
import CustomImage from "@components/ui/CustomImage";

const NewsArticle = () => {
    return (
        <div className="px-[100px] max-900:px-[10px] py-[50px] max-900:py-[50px] border border-dark20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article) => (
                    <div key={article.id} className="p-4 rounded-lg">
                        <CustomImage
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={250}
                            className="w-full rounded-lg"
                        />
                        <h3 className="text-white mt-4 mb-[10px]">{article.title}</h3>
                        <p className="text-lightgrey">{article.category}</p>
                        <div className="flex justify-between items-center mt-[10px]">
                            <div>
                                <div className="icons flex gap-2">
                                    <div className="like flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                        <CustomImage src="/images/liked.png" alt="Like" width={20} height={20} />
                                        <p className="text-lightgrey">10k</p>
                                    </div>

                                    <div className="share flex gap-1 justify-center cursor-pointer items-center border border-dark20 bg-black px-3 py-1 rounded-[30px]">
                                        <CustomImage src="/images/share.png" alt="Share" width={20} height={20} />
                                        <p className="text-lightgrey">200</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <button className="relative overflow-hidden flex items-center justify-center gap-1 border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                                    <span className="hover"></span>

                                    <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Read More</span>
                                    <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                                </button>
                            </div>
                        </div>


                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewsArticle