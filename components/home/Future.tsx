import { features3 } from "@/data/features3";
import Image from "next/image";
import Link from "next/link";

const Future = () => {
    return (
        <section className="bg-black pt-[60px] pb-[60px] px-[100px] max-900:px-[20px] ">
            <div className="flex  items-center max-900:block gap-9">
                <div className="item max-900:w-[100%] flex gap-9 items-center ">
                    <Image src="/images/logo3.png" alt="Future" width={100} height={100} />
                    <button className="hidden max-900:block bg-dark20 text-white px-2 py-[2px] rounded-[1px] hover:bg-opacity-80 transition duration-300 ease-in-out">
                        Learn, Connect, and Innovate
                    </button>
                </div>

                <div className="item">
                    <button className="max-900:hidden bg-dark20 text-white px-2 py-[2px] rounded-[1px] hover:bg-opacity-80 transition duration-300 ease-in-out">
                        Learn, Connect, and Innovate
                    </button>
                    <h1 className="text-[35px] text-white font-kumbh my-[10px] ">Be Part of the Future Tech Revolution</h1>
                    <p className="text-lightgrey text-[15px]">Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>

                </div>


            </div>

            <div className="flex  items-center gap-6 bg-deepblack p-2 rounded-[10px] border border-dark20 mt-[50px] max-900:block">
                {features3.map((feature) => (
                    <div key={feature.id} className="bg-black w-1/3 p-6 rounded-[10px] border border-dark20 max-900:w-full max-900:my-[15px]">
                        <div className="flex justify-between items-center ">
                            <h2 className="text-white font-semibold">{feature.title}</h2>
                            <Link href="" >
                                <div className="flex justify-center items-center h-[40px] w-[40px] bg-yellow rounded-full hover:bg-white transition ">
                                    <Image src="/images/arrow3.png" alt="Arrow" width={20} height={20} />
                                </div>
                            </Link>                        </div>
                        <p className="text-gray-400 mt-2 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Future;
