import { footerLinks } from "@/data/footerLinks";
import { FooterLink, FooterSection } from "@/types/footerLinks";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import CustomImage from "@components/ui/CustomImage";

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <footer className=" text-white px-[100px] max-900:px-[20px] bg-deepblack py-[40px] w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                {footerLinks.map((section: FooterSection) => (
                    <div key={section.title} className="w-1/5">
                        <h3 className="font-semibold mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link: FooterLink, index) => (
                                <li key={index} className={`whitespace-nowrap ${link.icon ? "border border-dark20 rounded-md px-4 py-3 w-fit" : ""}`}>
                                    <a href={link.url} className={`text-lightgrey hover:text-white transition flex items-center gap-2 
                                     ${link.icon ? "justify-center" : ""}`}>
                                        {link.name}
                                        {link.badge && (
                                            <span className="bg-deepblack text-white text-xs rounded-md border border-dark20 px-[10px] py-[5px]">
                                                {link.badge}
                                            </span>

                                        )}
                                        {link.icon && (<CustomImage src="/images/arrow.png" alt={link.name} width={20} height={20} />)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center mt-10 text-gray-400 text-sm max-md:flex-col max-md:gap-3 max-900:block max-900:text-center">
                <div className="flex flex-col items-center text-center gap-3 md:flex-row md:justify-between">
                    <div className="flex gap-5 justify-center md:justify-start">
                        <a href="#" className="hover:text-white text-lightgrey">Terms & Conditions</a>
                        <div className="text-lightgrey">|</div>
                        <a href="#" className="hover:text-white text-lightgrey">Privacy Policy</a>
                    </div>
                </div>


                <div className="flex justify-center md:justify-end gap-4 text-lg max-900:my-[20px]">
                    <a href="https://x.com/devsultan06" className="hover:text-lightgrey text-white"><FaTwitter /></a>
                    <a href="https://github.com/devsultan06" className="hover:text-lightgrey text-white"><FaGithub /></a>
                    <a href="https://www.instagram.com/devsultan06" className="hover:text-lightgrey text-white"><FaInstagram /></a>
                </div>

                <p className="text-lightgrey text-sm">
                    {year} FutureTech. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
