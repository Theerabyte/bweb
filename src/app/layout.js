import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from '@/[language]/LanguageContext';
import "@/app/[styles]/globals.css";
import Nav from "@/components/Nav";
import Bav from "@/components/Bav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naomi Bächler",
  description: "A subpage of The Bächler Family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
        <Nav />
        {children}
        <Bav />
        </LanguageProvider>
      </body>
    </html>
  );
}
