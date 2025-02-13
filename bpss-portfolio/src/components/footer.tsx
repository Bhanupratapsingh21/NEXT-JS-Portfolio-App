"use client";

import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-16 py-12">
        {/* Footer Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Brand Column */}
          <div className="">
            <h3 className="text-2xl  font-bold text-white mb-4">Bhanu Pratap Singh</h3>
            <p className="mb-4">
              Full Stack Developer crafting exceptional digital experiences with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
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
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <a href="mailto:bhanupss137@gmail.com" className="hover:text-blue-400">bhanupss137@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-neutral-800 text-center">
          <p>&copy; 2025 Bhanu Pratap Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
