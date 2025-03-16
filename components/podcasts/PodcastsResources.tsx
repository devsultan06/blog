import CustomImage from "@components/ui/CustomImage";

interface PodcastResource {
    id: number;
    icon: string;
    title: string;
    host: string;
    rating: number;
    description: string;
    details: string;
    totalEpisodes: number;
    avgEpisodeLength: string;
    releaseFrequency: string;
    image: string;
}


const PodcastsResources: React.FC<PodcastResource> = ({
    title,
    icon,
    host,
    description,
    details,
    totalEpisodes,
    avgEpisodeLength,
    releaseFrequency,
    image,
}) => {
    return (
        <div className="box flex justify-between items-start max-900:block font-inter ">
            <div className="item border border-dark20 pr-8 w-1/3 pl-[100px] h-[650px] max-900:h-[400px] flex flex-col justify-center max-900:w-full max-900:pl-[20px]">
                <CustomImage src={icon} alt="Feature Icon" width={50} height={50} className="mb-[30px]" />
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-xl font-semibold mb-[10px] font-kumbh">{title}</h1>
                    <div className="flex justify-center rounded-[20px] border border-dark20 bg-deepblack px-3 py-1">
                        {"⭐".repeat(5)}
                    </div>
                </div>

                <div className="flex items-center justify-between max-900:w-full bg-black p-[20px] rounded-[10px] border border-dark20 mt-[20px] w-full gap-[20px]">
                    <div>
                        <p className="text-lightgrey text-[15px] ">Host</p>
                        <h1 className="font-bold whitespace-nowrap text-[15px]">{host}</h1>
                    </div>

                    <div className="max-900:w-full flex justify-end ">
                        <button className="relative overflow-hidden flex items-center justify-center gap-1 border border-dark20 text-lightgrey px-2 py-3 rounded-md transition duration-300 ease-in-out group">
                            <span className="hover"></span>

                            <span className="relative z-10 font-medium group-hover:text-black transition duration-300">
                                Listen Podcast
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

            </div>

            <div className="item w-2/3 max-900:w-full max-900:h-auto pr-[100px] h-[650px]  pl-[60px] flex flex-col justify-center border border-dark20 max-900:p-[20px]">

                <div
                    className="relative bg-cover bg-center w-full h-[300px] rounded-md"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <CustomImage
                            src="/images/play.png"
                            alt="Play"
                            width={50}
                            height={50}
                            className="cursor-pointer"
                        />
                    </div>
                </div>


                <div className="mt-[20px]">
                    <h1 className="font-semibold text-[16px] mb-[10px]">{description}</h1>

                    <p className="text-grey60 text-[15px] ">{details}</p>
                </div>

                <div className="flex justify-between mt-[20px] gap-4 max-900:block">
                    <div className=" bg-black p-[15px] rounded-[10px] border border-dark20 w-1/3 max-900:w-full max-900:mb-[20px]">
                        <p className="text-grey60 text-[15px] mb-[5px]">
                            Total Episodes
                        </p>
                        <h1 className="font-semibold">{totalEpisodes}</h1>
                    </div>
                    <div className=" bg-black p-[15px] rounded-[10px] border border-dark20 w-1/3 max-900:w-full max-900:mb-[20px]">
                        <p className="text-grey60 text-[15px] mb-[5px]">
                            Average Episode Length
                        </p>
                        <h1 className="font-semibold">{avgEpisodeLength}
                        </h1>
                    </div>
                    <div className=" bg-black p-[15px] rounded-[10px] border border-dark20 w-1/3 max-900:w-full max-900:mb-[20px]">
                        <p className="text-grey60 text-[15px] mb-[5px]">
                            Release Frequency
                        </p>
                        <h1 className="font-semibold">{releaseFrequency}</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PodcastsResources;
