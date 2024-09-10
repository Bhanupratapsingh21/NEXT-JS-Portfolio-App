import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ClientWrapper from "@/components/ClientWrapper"; // This is where we'll handle client-side logic

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BPSS || Portfolio || SDE",
  description: "Hi, I am Bhanu Pratap Singh, an Aspiring Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link
        rel="shortcut icon"
        href="https://i.pinimg.com/236x/01/4e/7c/014e7c41682d5e1f96bfd171b52988e9.jpg"
        type="image/x-icon"
      />
      <body className={inter.className}>
        <div className="pt-4">
          <Header />
        </div>
        {/* Use ClientWrapper for client-side logic */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
