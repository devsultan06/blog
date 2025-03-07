import Image from "next/image";

interface FeatureItem {
    title: string;
    description: string;
}

interface FeatureSectionProps {
    icon: string;
    heading: string;
    subtext: string;
    features: FeatureItem[];
}

const FeatureSection2: React.FC<FeatureSectionProps> = ({ icon, heading, subtext, features }) => {
    return (
        <div className="box flex justify-between items-start max-900:block">
            {/* Left Section */}
            <div className="item border border-dark20 pr-8 w-1/3 pl-[100px] h-[400px] flex flex-col justify-center max-900:w-full max-900:pl-[20px]">
                <Image src={icon} alt="Feature Icon" width={50} height={50} className="mb-[30px]" />
                <h1 className="text-white text-xl font-semibold mb-[10px]">{heading}</h1>
                <p className="text-lightgrey">{subtext}</p>
            </div>

            {/* Right Section with Quality Boxes */}
            <div className="item w-2/3 max-900:w-full max-900:h-auto pr-[100px] h-[400px] pl-[60px] flex flex-col justify-center border border-dark20 max-900:p-[20px]">
                <div className="grid grid-cols-2 gap-6 max-900:grid-cols-1 max-900:gap-2">
                    {features.map((feature, index) => (
                        <div key={index} className="item bg-black p-5 rounded-lg max-900:p-6 border border-dark20">
                            <h1 className="text-white text-lg font-semibold mb-[5px]">{feature.title}</h1>
                            <p className="text-lightgrey">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection2;
