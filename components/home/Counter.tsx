import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
export const Counter = ({ from, to }: { from: number; to: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            animate(count, to, { duration: 3, ease: "easeOut" });
        }
    }, [isInView]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};


