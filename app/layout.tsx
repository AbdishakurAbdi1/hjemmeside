import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abdishakur Abdi",
  description: "Datateknologistudent ved Universitetet i Bergen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="bg-bg-ytre dark:bg-gray-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-ytre dark:bg-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
