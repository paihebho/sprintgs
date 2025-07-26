import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower"; // <-- 1. Import the new component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sprint G. S. Ltd",
  description:
    "Pioneering the future of construction and logistics in Nigeria with an unwavering commitment to quality, safety, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CursorFollower /> {/* <-- 2. Add the component here */}
        <Header />
        <main>{children}</main>{" "}
        {/* It's good practice to wrap children in a <main> tag */}
        <Footer />
      </body>
    </html>
  );
}
