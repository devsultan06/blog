import CustomImage from "@components/ui/CustomImage";

interface PodcastResource {
    id: number;
    icon: string;
    title: string;
    title2: string;
    description: string;
    details: string;
    author: string;
    pubDate: string;
    category: string;
    image: string;
}


export const Reports: React.FC<PodcastResource> = ({
    title,
    icon,
    title2,
    description,
    details,
    author,
    pubDate,
    category,
    image,
}) => {
    return (
        <div className="box flex justify-between items-start max-900:block font-inter ">
            <div className="item border border-dark20 pr-8 w-1/3 pl-[100px] h-[650px] max-900:h-[400px] flex flex-col justify-center max-900:w-full max-900:pl-[20px]">
                <CustomImage src={icon} alt="Feature Icon" width={50} height={50} className="mb-[30px]" />
                <h1 className="text-white text-xl font-semibold mb-[10px] font-kumbh">{title}</h1>

                <p className="text-lightgrey text-[15px] mt-[10px] ">{title2}</p>


            </div>

            <div className="item w-2/3 max-900:w-full max-900:h-auto pr-[100px] h-[650px]  pl-[60px] flex flex-col justify-center border border-dark20 max-900:p-[20px]">

                <div


                >
                    <CustomImage src={image} alt="Quality Image" width={300} height={300} className="w-full h-auto"
                    />


                </div>


                <div className="mt-[20px] flex justify-between items-center max-900:block">
                    <div className="">
                        <h1 className="font-semibold text-[16px] mb-[10px]">{description}</h1>

                        <p className="text-grey60 text-[15px] ">{details}</p>
                    </div>


                    <div className="max-900:w-full max-900:mt-[30px]">
                        <button className="relative overflow-hidden max-900:w-full flex items-center justify-center gap-1 border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                            <span className="hover"></span>

                            <span className="relative z-10 font-medium group-hover:text-black transition duration-300 whitespace-nowrap">
                                Download PDF Now
                            </span>
                            <CustomImage
                                className="relative z-10 group-hover:invert transition duration-300"
                                src="/images/arrow.png"
                                alt="Arrow"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </div>

                <div className="flex justify-between mt-[20px] gap-4 max-900:flex max-900:flex-wrap">
                    <div className="bg-black w-1/3 p-[15px] rounded-[10px] border border-dark20 max-900:w-[48%] max-900:mb-[10px]">
                        <p className="text-grey60 text-[15px] mb-[5px]">Publication Date</p>
                        <h1 className="font-semibold">{pubDate}</h1>
                    </div>

                    <div className="bg-black w-1/3 p-[15px] rounded-[10px] border border-dark20 max-900:w-[48%] max-900:mb-[10px]">
                        <p className="text-grey60 text-[15px] mb-[5px]">Category</p>
                        <h1 className="font-semibold">{category}</h1>
                    </div>

                    <div className="bg-black w-1/3 p-[15px] rounded-[10px] border border-dark20 max-900:w-full">
                        <p className="text-grey60 text-[15px] mb-[5px]">Author</p>
                        <h1 className="font-semibold">{author}</h1>
                    </div>
                </div>

            </div>
        </div >
    );
};

