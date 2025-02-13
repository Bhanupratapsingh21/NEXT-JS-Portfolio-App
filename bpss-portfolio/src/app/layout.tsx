import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ClientWrapper from "@/components/ClientWrapper";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Analytics } from '@vercel/analytics/next';
 
const notoSans = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhanu Pratap Singh | Full Stack Developer | BPSS Tech",
  description:
    "Bhanu Pratap Singh – Full Stack Developer skilled in MERN, Next.js, TypeScript, and DevOps. Passionate about building scalable, high-performance digital solutions. Explore BPSS Tech.",
  keywords:
    "Bhanu Pratap Singh, Full Stack Developer, MERN Stack, Next.js, TypeScript, DevOps, Software Engineer Bhanu, Software Developer Bhanu, BPSS Tech",
  openGraph: {
    title: "Bhanu Pratap Singh | Full Stack Developer | BPSS Tech",
    description:
      "Bhanu Pratap Singh – Full Stack Developer skilled in MERN, Next.js, TypeScript, and DevOps. Passionate about building scalable, high-performance digital solutions.",
    url: "https://bpss.tech",
    type: "website",
    images: [
      {
        url: "https://bpss.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BPSS Tech - Bhanu Pratap Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Pratap Singh | Full Stack Developer",
    description:
      "Bhanu Pratap Singh – Full Stack Developer skilled in MERN, Next.js, TypeScript, and DevOps.",
    images: ["https://bpss.tech/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dhvkjanwa/image/upload/v1739371613/juedxiinyxgg30ibyadz.avif" type="image/x-icon" />
        <link rel="preload" href="https://fonts.gstatic.com" as="font" type="font/woff2" />
      </head>
      <body className={`${notoSans.className} ${inter.className} bg-black text-white`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
