"use client";

import CustomImage from "@components/ui/CustomImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navLinks";
import { useState, useEffect } from "react";
import { useUser, SignOutButton, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"; // Import SignOutButton from Clerk

export default function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { user, isSignedIn } = useUser(); // Get user info from Clerk

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    console.log(user, isSignedIn)
    return (
        <div className={`flex fixed top-[40px] left-0 z-50 right-0 items-center justify-between bg-black text-white py-4 px-[100px] border-t border-b border-dark20 max-900:px-[20px] transition-all duration-300`}>
            <Link href="/">
                <div className="flex items-center gap-4">
                    <CustomImage src="/images/Logo.png" alt="Logo" width={130} height={130} priority
                        style={{ display: "block" }} />
                </div>
            </Link>

            <nav className={`flex items-center gap-6 max-900:gap-2 
                max-700:absolute max-700:flex-col max-700:top-[69px] max-700:left-[0px] max-700:w-full max-700:bg-black max-700:items-start max-700:px-[20px]
                max-700:overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-700:h-[300px] py-[30px]" : "max-700:h-0"}`}>
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

            {/* SignIn / SignOut buttons */}
            <div className={`flex gap-4 max-700:absolute max-700:left-[2px] max-700:top-[300px] max-700:bg-black max-700:items-center max-700:px-[20px] transition-all duration-300 ease-in-out ${isOpen ? "max-700:opacity-100 max-700:flex" : "max-700:opacity-0 max-700:pointer-events-none"}`}>
                {isSignedIn ? (
                    <div className="absolute right-0 top-[30px] flex items-center gap-4">
                        <UserButton />

                    </div>

                ) : (
                    <>
                        <SignInButton>
                            <button
                                className="bg-yellow text-black px-4 py-2 rounded-md transition hover:bg-opacity-80"
                            >
                                Sign In
                            </button>
                        </SignInButton>

                    </>
                )}
            </div>


            {/* Mobile menu toggle */}
            <button
                className="hidden max-700:block text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <CustomImage src="/images/toggle.png" alt="Menu" width={25} height={25} />
            </button>
        </div>
    );
}
