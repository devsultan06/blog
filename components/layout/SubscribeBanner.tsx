"use client";

import CustomImage from "@components/ui/CustomImage";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SubscribeBanner = () => {
    const [showBanner, setShowBanner] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowBanner(false);
            } else {
                setShowBanner(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: showBanner ? 0 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-deepblack shadow-md"
        >
            <Link href="/subscribe" className="block">
                <div className="flex items-center gap-2 text-md justify-center py-2 px-[15px] text-grey60 max-500:gap-[13px] max-900:text-[13px] max-400:gap-[5px]">
                    <span>
                        Subscribe to our Newsletter{" "}
                        <span className="max-500:hidden">New & Latest </span>
                        For Blogs and Resources
                    </span>
                    <CustomImage src="/images/arrow.png" alt="Logo" width={16.5} height={16.5} />
                </div>
            </Link>
        </motion.div>
    );
};

