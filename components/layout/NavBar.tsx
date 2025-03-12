"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navLinks";
import { useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); 
    };

    return (
        <div className={`flex fixed top-[40px] left-0 z-50 right-0 items-center justify-between bg-black text-white py-4 px-[100px] border-t border-b border-dark20 max-900:px-[20px] transition-all duration-300`}>
            <Link href="/">
                <div className="flex items-center gap-4">
                    <Image src="/images/Logo.png" alt="Logo" width={130} height={130} />
                </div>
            </Link>

            <nav className={`flex items-center gap-6 max-900:gap-2 
                max-700:absolute max-700:flex-col max-700:top-[69px] max-700:left-[0px] max-700:w-full max-700:bg-black max-700:items-start max-700:px-[20px]
                max-700:overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-700:h-[300px] py-[30px]" : "max-700:h-0"}
            `}>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`py-2 px-4 rounded-md transition hover:text-yellow 
                            ${pathname === link.href
                                ? "bg-deepblack text-white border border-dark20"
                                : "text-grey50 border-transparent hover:border hover:border-dark20"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <button
                className={`relative overflow-hidden bg-yellow text-black px-4 py-2 rounded-md 
  hover:bg-opacity-80 transition duration-300 ease-in-out
  max-700:absolute max-700:top-[300px] max-700:transition-all 
  ${isOpen ? "max-700:opacity-100" : "max-700:opacity-0 max-700:pointer-events-none"}
  group
  `}
            >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-yellow bg-opacity-80  w-full h-full scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </button>

            <button
                className="hidden max-700:block text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src="/images/toggle.png" alt="Menu" width={25} height={25} />
            </button>
        </div>
    );
}
