import { features } from "@/data/features";
import FeatureItem from "./FeatureItem";



const FeaturesSection = () => {
    return (
        <section className="bg-deepblack">
            <div className="box flex justify-between items-center max-900:block">
                {features.map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
