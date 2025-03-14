import CustomImage from "@components/ui/CustomImage";

interface ResourceStats {
    total: string;
    expertise: string;
}

interface ResourceItem {
    icon: string;
    title: string;
    description: string;
    downloadText: string;
    downloadedBy: string;
    stats: ResourceStats;
    topics: string;
    image: string;
    image2: string;
    type: string;
    typeText: string;
}


const Resources: React.FC<ResourceItem> = ({
    title,
    icon,
    description,
    downloadText,
    downloadedBy,
    stats,
    topics,
    image,
    image2,
    type,
    typeText,
}) => {
    return (
        <div className="box flex justify-between items-start max-900:block font-inter ">
            <div className="item border border-dark20 pr-8 w-1/3 pl-[100px] h-[650px] max-900:h-[400px] flex flex-col justify-center max-900:w-full max-900:pl-[20px]">
                <CustomImage src={icon} alt="Feature Icon" width={50} height={50} className="mb-[30px]" />
                <h1 className="text-white text-xl font-semibold mb-[10px] font-kumbh">{title}</h1>
                <p className="text-lightgrey">{description}</p>
                <div className="item  max-900:w-[100%]">
                    <button className="relative overflow-hidden flex items-center justify-center gap-1 mt-[20px] w-[100%] max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover"></span>

                        <span className="relative z-10 font-medium group-hover:text-black transition duration-300">{downloadText}</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                </div>

                <div className="flex bg-black p-[10px] rounded-[10px] border border-dark20  mt-[20px] w-fit gap-[20px] ">
                    <div>
                        <p className="text-lightgrey text-[15px]">Downloaded By</p>
                        <h1 className="font-bold">{downloadedBy}</h1>
                    </div>

                    <CustomImage src={image2} alt="People" width={150} height={150} priority
                        style={{ display: "block" }} />
                </div>
            </div>

            <div className="item w-2/3 max-900:w-full max-900:h-auto pr-[100px] h-[650px]  pl-[60px] flex flex-col justify-center border border-dark20 max-900:p-[20px]">
                <div className="flex gap-[20px] max-900:block ">
                    <div className="w-[20%] max-900:w-full max-900:mb-[10px]">
                        <h1>{type}</h1>
                    </div>
                    <div className="w-[80%] max-900:w-full">
                        <p className="text-lightgrey text-[14px]">{typeText}</p>
                    </div>
                </div>

                <CustomImage src={image} alt="Quality Image" width={300} height={300} className="w-full h-auto mt-[20px]" priority
                    style={{ display: "block" }} />

                <div className="flex justify-between mt-[20px] gap-4 max-900:block">
                    <div className=" bg-black p-[15px] rounded-[10px] border border-dark20 w-1/3 max-900:w-full max-900:mb-[20px]">
                        <p className="text-lightgrey text-[15px] mb-[5px]">
                            {title === "Ebooks" ? "Total Ebooks" : "Total Whitepapers"}
                        </p>
                        <h1 className="font-semibold">{stats.total}</h1>
                    </div>

                    <div className="flex item-center justify-between gap-[20px]  bg-black p-[15px] rounded-[10px] border border-dark20 w-2/3 max-900:w-full">
                        <div>
                            <p className="text-lightgrey text-[15px] mb-[5px]">Download Formats</p>
                            <h1 className="font-semibold">
                                PDF format for access
                            </h1>
                        </div>

                        <div className="">
                            <button className="relative bg-deepblack overflow-hidden flex items-center justify-center gap-1 max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                                <span className="hover"></span>

                                <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Preview</span>
                                <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/preview.png" alt="Arrow" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" bg-black p-[15px] rounded-[10px] border border-dark20 mt-[20px]">
                    <p className="text-lightgrey text-[15px]">Average Author Expertise</p>
                    <h1 className="">{stats.expertise}</h1>
                </div>
            </div>
        </div>
    );
};

export default Resources;
