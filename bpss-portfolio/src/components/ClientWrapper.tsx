'use client';

import { usePathname } from 'next/navigation';
import Footer from "@/components/footer";
import Header from './header';
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current path

  // List of paths where the footer should not be displayed
  const noFooterPaths = ["/", "/My-Ai",  "/Contact-Form"];
  const noHeaderPaths = ["/", "/Contact-Form"];
  return (
    <>
      {/* Conditionally render the header based on the path */}
      {!noHeaderPaths.includes(pathname) && <Header />}
      {children}
      {/* Conditionally render the footer based on the path */}
      {!noFooterPaths.includes(pathname) && <Footer />}
    </>
  );
}
