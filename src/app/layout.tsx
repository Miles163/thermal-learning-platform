import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "热设计工程师成长学习平台",
  description: "从零开始学习热设计，成为专业热设计工程师",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-tech-900 text-foreground min-h-screen flex">
        <Sidebar />
        <main className="flex-1 ml-64 min-h-screen heatmap-bg">
          {children}
        </main>
      </body>
    </html>
  );
}
