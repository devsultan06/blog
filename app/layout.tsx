// app/layout.tsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
