"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 space-y-4 md:space-y-0">
        {/* Left side - Logo + Copyright */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/payoneer-logo.png" // put your logo in /public/images/
            alt="Payoneer"
            width={110}
            height={30}
          />
          <span className="text-xs md:text-sm">
            © 2005-{new Date().getFullYear()} Payoneer Inc., All Rights Reserved
          </span>
        </div>

        {/* Right side - PCI + Links */}
        <div className="flex items-center space-x-6">
          <Image
            src="/images/pci-badge.png" // put PCI badge in /public/images/
            alt="PCI"
            width={50}
            height={25}
          />

          <nav className="flex space-x-4 text-xs md:text-sm">
            <a href="#" className="hover:text-white">
              Legal
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookies Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookies Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
