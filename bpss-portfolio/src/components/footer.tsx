"use client";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  flex flex-col md:flex-row bg-black justify-center md:justify-between items-center py-8 px-4 md:px-40">
      {/* Attribution and Name */}
      <div className="text-sm text-gray-400 text-center md:text-left">
        <span className="text-gray-400">© {currentYear}</span>
        <span className="px-2 font-medium">Created By Bhanu Pratap Singh</span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://github.com/Bhanupratapsingh21" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <Github className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com/in/bhanu-pratap-singh-bbb976257" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://x.com/bhanu_pratap_21" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <Twitter className="h-6 w-6" />
        </a>
        <a href="https://instagram.com/bpss.code/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <Instagram className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile Bottom Spacer */}
      <div className="h-20 block md:hidden" />
    </footer>
  );
};

export default Footer