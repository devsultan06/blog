// app/layout.tsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <div>
                        <ToastContainer position="top-right" autoClose={3000} />
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
