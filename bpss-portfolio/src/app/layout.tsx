import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import { TracingBeam } from "@/components/ui/tracing-beam";
import Fotter from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BPSS || Portfolio || SDE",
  description: "Hi iam Bhanu Pratap Singh Aspiring Software Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
        </div>
        
          {children}
        <div>
          <Fotter/>
        </div>


      </body>
    </html>
  );
}
