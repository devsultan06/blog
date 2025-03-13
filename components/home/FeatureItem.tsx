import CustomImage from "@components/ui/CustomImage";
import Link from "next/link";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  stat: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, link, linkText, stat }) => {
  return (
    <div className="item border pl-[100px] border-dark20 w-1/3 py-[30px] pr-[30px] max-900:w-full max-900:pl-[20px]">
      <CustomImage src={icon} alt={title} width={30} height={30} className="mb-[20px]" />
      <div className="item-inner flex justify-between items-center">
        <div className="item-inner-text">
          <h2>{title}</h2>
          <p className="text-lightgrey text-[15px] mb-[25px] mt-[10px]">{description}</p>
        </div>
        <Link href={link} >
          <div className="flex justify-center items-center h-[40px] w-[40px] bg-yellow rounded-full hover:bg-white transition ">
            <CustomImage src="/images/arrow3.png" alt="Arrow" width={20} height={20} />
          </div>
        </Link>
      </div>
      <p className="text-lightgrey text-[15px]">{stat}</p>
    </div>
  );
};

export default FeatureItem;
