import { FooterSection } from "@/types/footerLinks";

export const footerLinks: FooterSection[] = [
    {
        title: "Home",
        links: [
            { name: "Features", url: "/" },
            { name: "Blogs", url: "/blogs" },
            { name: "Resources", url: "/resources", badge: "New" },
            { name: "Testimonials", url: "/testimonials" },
            { name: "Contact Us", url: "/contact" },
            { name: "Newsletter", url: "/newsletter" },
        ],
    },
    {
        title: "News",
        links: [
            { name: "Trending Stories", url: "/news/trending" },
            { name: "Featured Videos", url: "/news/videos" },
            { name: "Technology", url: "/news/technology" },
            { name: "Health", url: "/news/health" },
            { name: "Politics", url: "/news/politics" },
            { name: "Environment", url: "/news/environment" },
        ],
    },
    {
        title: "Blogs",
        links: [
            { name: "Quantum Computing", url: "/blogs/quantum" },
            { name: "AI Ethics", url: "/blogs/ai-ethics" },
            { name: "Space Exploration", url: "/blogs/space" },
            { name: "Biotechnology", url: "/blogs/biotech", badge: "New" },
            { name: "Renewable Energy", url: "/blogs/renewable" },
            { name: "Biohacking", url: "/blogs/biohacking" },
        ],
    },
    {
        title: "Podcasts",
        links: [
            { name: "AI Revolution", url: "/podcasts/ai-revolution" },
            { name: "AI Revolution", url: "/podcasts/ai-revolution", badge: "New" },
            { name: "TechTalk AI", url: "/podcasts/techtalk" },
            { name: "AI Conversations", url: "/podcasts/ai-conversations" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Whitepapers", url: "/resources/whitepapers", icon: "↗" },
            { name: "Ebooks", url: "/resources/ebooks", icon: "↗" },
            { name: "Reports", url: "/resources/reports", icon: "↗" },
            { name: "Research Papers", url: "/resources/research", icon: "↗" },
        ],
    },
];
