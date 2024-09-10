'use client'; // This is a client-side component

import { usePathname } from 'next/navigation';
import Footer from "@/components/footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current path

  // List of paths where the footer should not be displayed
  const noFooterPaths = ["/My-Ai"];

  return (
    <>
      {children}
      {/* Conditionally render the footer based on the path */}
      {!noFooterPaths.includes(pathname) && <Footer />}
    </>
  );
}
