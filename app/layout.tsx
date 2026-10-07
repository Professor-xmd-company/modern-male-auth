import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auth | Engineered Calm",
  description: "Modern Male Login and Signup System with Engineered Calm design language.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#121416] text-[#E2E4E7] antialiased">
        {children}
      </body>
    </html>
  );
}
