export type FooterLink = {
    name: string;
    url: string;
    badge?: string; // Optional badge
    icon?: string;  // Optional icon
};

export type FooterSection = {
    title: string;
    links: FooterLink[];
};
