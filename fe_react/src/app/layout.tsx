import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/src/components/layout/Header';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House control",
  description: "Building management for your residential complex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 font-sans dark:bg-black">
        <div className="grid max-w-6xl mx-auto gap-y-8">
          <Header/>
          <main className="p-10 rounded-lg bg-white dark:bg-black">{children}</main>
        </div>
      </body>
    </html>
  );
}
