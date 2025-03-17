import CustomImage from "@components/ui/CustomImage";
import Form from "./Form";


export const Reach = () => {
    return (
        <div className="box flex justify-between items-start max-900:block font-inter ">
            <div className="item border border-dark20 pr-8 w-1/3 pl-[100px] h-[650px] max-900:h-[400px] flex flex-col justify-center max-900:w-full max-900:pl-[20px]">
                <CustomImage src="/images/get.png" alt="Feature Icon" width={50} height={50} className="mb-[30px]" />
                <h1 className="text-white text-[30px] font-medium mb-[10px] font-kumbh">Get in Touch with AI Podcasts</h1>


            </div>

            <div className="item w-2/3 max-900:w-full max-900:h-auto pr-[100px] h-[650px]  pl-[100px] flex flex-col justify-center border border-dark20 max-900:p-[20px]">


                <Form />


            </div>
        </div >
    );
};

