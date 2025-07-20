import type { Metadata } from "next";
import {  Comic_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400"
});

const comic = Comic_Neue({
  variable: "--font-comic",
  subsets: ["latin"],
  weight: "700"
});

export const metadata: Metadata = {
  title: "the Round Table",
  description: "Creating financial self-reliance for African communities",
  icons: {
    icon: '/round.png',
  },
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${comic.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
