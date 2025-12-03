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
  title: "Princeton Public School",
  description: "Princeton Public School - Excellence in Education",
  icons: {
    icon: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
  openGraph: {
    title: 'Princeton Public School',
    description: 'Excellence in Education',
    images: [{
      url: '/images/logo.svg',
      width: 96,
      height: 100,
      alt: 'Princeton Public School Logo',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
