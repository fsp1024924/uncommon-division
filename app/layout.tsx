import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Uncommon Division | Solar Sales Careers",
  description:
    "Three paths to six figures in solar sales. $169M paid in 2024. Locals, X Team, and Retail. Freedom Forever's #1 sales organization across 38 states.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise cursor-none md:cursor-none">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
