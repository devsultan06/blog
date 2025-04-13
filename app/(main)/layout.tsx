// app/(main)/layout.tsx
import type { Metadata } from "next";

import {
    ClerkProvider,
} from '@clerk/nextjs';
import { SubscribeBanner } from "@components/layout/SubscribeBanner";
import NavBar from "@components/layout/NavBar";
import BloggerModal from "@components/layout/BloggerModal";
import Footer from "@components/layout/Footer";

export const metadata: Metadata = {
    title: "AI Blog",
    description: "Generated by create next app",
};

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <SubscribeBanner />
            <NavBar />
            <BloggerModal />
            <div className="pt-[100px] bg-deepblack">
                {children}
            </div>
            <Footer />
        </ClerkProvider>
    );
}
