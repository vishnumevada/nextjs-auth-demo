import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notification from "@/components/Notification/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Notification />
                <div className="flex flex-col min-h-screen">{children}</div>
            </body>
        </html>
    );
}
