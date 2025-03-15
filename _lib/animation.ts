// utils/animations.ts
import { useRef } from "react";
import { useInView } from "framer-motion";

export const useInViewAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return { ref, isInView };
};

export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Stagger each child by 0.3s
        },
    },
};

export const childVariants = {
    hidden: { opacity: 0, y: -50 }, 
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
