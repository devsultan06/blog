import { podcasts } from "@/data/podcasts";
import Future from "@components/layout/Future";
import Latest from "@components/podcasts/Latest";
import PodcastsResources from "@components/podcasts/PodcastsResources";
import PodcastsVideos from "@components/podcasts/PodcastsVideos";


export default function Podcasts() {


    return (
        <div className="news bg-deepblack text-white ">
            {/* FIXME Coming back to implement the motion animation to the Header */}

            <div className=" max-900:block px-[100px] max-900:px-[20px] border-b  border-dark20 py-[100px] max-900:py-[50px]">
                <h1 className="text-[40px] max-900:text-[33px] font-kumbh text-white">Unlock the World of Artificial Intelligence
                    <span className="hidden max-900:inline">
                        &nbsp; through Podcasts
                    </span>
                </h1>
                <div className="flex gap-[20px] items-center justify-center mt-[10px] max-900:block">
                    <div className="flex-[2] w-[900px] max-900:hidden">
                        <h1 className="text-[40px] max-900:text-[33px] text-white whitespace-nowrap">through Podcasts</h1>

                    </div>
                    <div className="">
                        <p className="text-grey60 text-[15px]">Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>

                    </div>
                </div>


            </div>



            {podcasts.map((podcasts, index) => (
                <PodcastsResources key={index} {...podcasts} />
            ))}

            <Latest />
            <PodcastsVideos />
            <Future />




        </div>
    );
}