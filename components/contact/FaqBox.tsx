import CustomImage from "@components/ui/CustomImage";
import Faq from "./Faq";


export const FaqBox = () => {
    return (
        <div className="box flex justify-between items-start max-900:block font-inter ">
            <div className="item border border-dark20 pr-8 w-1/3 pl-[100px] h-[650px] max-900:h-[400px] flex flex-col justify-center max-900:w-full max-900:pl-[20px]">
                <CustomImage src="/images/faqimg.png" alt="Feature Icon" width={50} height={50} className="mb-[30px]" />
                <h1 className="text-white text-[30px] font-medium mb-[10px] font-kumbh">Asked question</h1>

                <p className="text-lightgrey text-[15px] mt-[10px] ">If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>

                <div className="item max-900:w-[100%]">
                    <button className="relative overflow-hidden flex items-center justify-center gap-1 mt-[20px] max-900:w-[100%] border border-dark20 text-lightgrey px-4 py-3 rounded-md transition duration-300 ease-in-out group">
                        <span className="hover"></span>

                        <span className="relative z-10 font-medium group-hover:text-black transition duration-300">Ask Question</span>
                        <CustomImage className="relative z-10 group-hover:invert transition duration-300" src="/images/arrow.png" alt="Arrow" width={20} height={20} />
                    </button>
                </div>
            </div>

            <div className="item w-2/3 max-900:w-full max-900:h-auto pr-[100px] h-[650px]  pl-[60px] flex flex-col justify-center border border-dark20 max-900:p-[20px]">

                <Faq />
            </div>
        </div >
    );
};

