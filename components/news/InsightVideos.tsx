import { insightvideoPosts } from "@/data/insightVideoPosts";
import CustomImage from "@components/ui/CustomImage";


const InsightVideos = () => {
    return (
        <div className="grid grid-cols-2 max-900:grid-cols-1 gap-6 text-white px-[100px] max-900:px-[10px] py-[50px] max-900:py-[50px] ">
            {insightvideoPosts.map((video) => (
                <div key={video.id} className="rounded-lg p-4 shadow-lg border border-dark20">
                    <div
                        className="relative bg-cover bg-center w-full h-[300px] rounded-md"
                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>

                        <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center p-2">
                            <CustomImage src="/images/play.png" alt="Play" width={50} height={50} className="cursor-pointer" />
                            <span className="text-sm text-lightgrey">{video.duration}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mt-4">{video.title}</h3>
                    <p className="text-lightgrey mt-2">{video.description}</p>
                </div>
            ))
            }
        </div >
    );
};

export default InsightVideos;
