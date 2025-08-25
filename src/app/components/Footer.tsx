"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/Logo.svg"
            alt="Payoneer"
            width={110}
            height={30}
          />
          <span className="text-xs md:text-sm">
            © 2005-{new Date().getFullYear()} Payoneer Inc., All Rights Reserved
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <Image
            src="/images/pci-logo.svg" 
            alt="PCI"
            width={50}
            height={25}
          />

          <nav className="flex space-x-4 text-xs md:text-sm">
            <a target="_blank" href="https://www.payoneer.com/legal/" className="hover:text-white">
              Legal
            </a>
            <a target="_blank" href="https://www.payoneer.com/legal/privacy-policy/" className="hover:text-white">
              Privacy Policy
            </a>
            <a target="_blank" href="https://www.payoneer.com/legal/cookies-policy/" className="hover:text-white">
              Cookies Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
