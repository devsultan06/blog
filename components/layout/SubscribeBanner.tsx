import Image from "next/image";
import Link from "next/link";

const SubscribeBanner = () => {
    return (
        <Link href="/subscribe" className="block">
            <div className="flex items-center gap-2 bg-deepblack text-md justify-center py-2 text-grey60 max-500:pt-[40px] max-500:pb-[20px] max-500:text-[16px] max-500:gap-[13px] max-400:text-[14px] max-400:gap-[5px]">
                <span>Subscribe to our Newsletter <span className="max-500:hidden">New & Latest </span>For Blogs and Resources</span>
                <Image src="/images/arrow.png" alt="Logo" width={16.5} height={16.5} />
            </div>
        </Link>
    );
};

export default SubscribeBanner;
