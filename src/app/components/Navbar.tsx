"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Logo.png";

type LinkItem = { label: string; slug: string };
type Card = {
  title: string;
  items: Array<string | LinkItem>;
  viewAllHref: string;
};

// 🗂 Your navigation data
const cards: Card[] = [
  {
    title: "Program",
    items: [
      { label: "About Payoneer", slug: "about-payoneer" },
      { label: "Why Partner with Us", slug: "why-partner" },
      { label: "Reseller Program Overview", slug: "reseller-overview" },
      { label: "Success Stories & Testimonials", slug: "key-features" },
    ],
    viewAllHref: "/reseller-program",
  },
  {
    title: "Getting Started: Partner Onboarding",
    items: [
      { label: "How to Join the Program", slug: "How-to-Join" },
      {
        label: "Understand Your Role as a Payoneer Reseller",
        slug: "Understand-Your-Role",
      },
      {
        label: "Understanding Partner Tiers",
        slug: "Understanding-Partner-Tiers",
      },
      {
        label: "Understanding Commercials & Payment Calculators",
        slug: "Payment-Calculators",
      },
    ],
    viewAllHref: "/partner-onboarding",
  },
  {
    title: "Enablement",
    items: [
      { label: "Sales Enablement Tools", slug: "sales-enablement-tools" },
      {
        label: "Marketing & Reselling Guidelines",
        slug: "reselling-guidelines",
      },
      { label: "Customer Personas", slug: "onboarding-overview" },
      {
        label: "Co-Branded or Dedicated Landing Pages",
        slug: "co-branded-or-dedicated-landing-pages",
      },
    ],
    viewAllHref: "/partner-activation",
  },
  {
    title: "Onboarding Journey",
    items: [
      { label: "Standard Sign-up Flow", slug: "referred-account-holders" },
      { label: "CLM Flow", slug: "clm-flow" },
      { label: "Additional KYC Requirements", slug: "kyc-process-explained" },
      { label: "Get started with Payoneer", slug: "get-started-with-payoneer" },
    ],
    viewAllHref: "/referred-account-holder",
  },
  {
    title: "Pricing",
    items: [{ label: "Payoneer Pricing", slug: "newpage" }],
    viewAllHref: "/newpage",
  },
  {
    title: "Support",
    items: [
      { label: "Frequently Asked Questions (FAQs)", slug: "faqs" },
      {
        label: "Support Ticket Questionnaire",
        slug: "support-ticket-questionnaire",
      },
    ],
    viewAllHref: "/faqs",
  },
    {
    title: "Features",
    items: [
      { label: "Frequently Asked Questions (FAQs)", slug: "faqs" },
      {
        label: "Support Ticket Questionnaire",
        slug: "support-ticket-questionnaire",
      },
    ],
    viewAllHref: "/features",
  },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/30 shadow-md border-b border-white/20">
        <div className="relative px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Logo" width={100} height={30} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm text-black font-medium">
              {/* Home (no dropdown) */}
              {/* <Link href="/" className="hover:text-black">
                Home
              </Link> */}

              {/* Dynamic dropdowns */}
              {cards.map((card) => (
                <div key={card.title} className="relative group">
                  <Link
                    href={card.viewAllHref}
                    className="hover:text-black flex items-center"
                  >
                    {card.title.split(":")[0]}
                    <svg
                      className="w-4 h-4 ml-1 text-gray-500 group-hover:text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Submenu */}
                  <div className="absolute left-0 mt-0 w-64 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                    <ul className="py-2">
                      {card.items.map((item, i) => {
                        if (typeof item === "string") return null;
                        return (
                          <li key={i}>
                            <Link
                              href={`${card.viewAllHref}#${item.slug}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                      <li className="border-t mt-1">
                        <Link
                          href={card.viewAllHref}
                          className="block px-4 py-2 text-sm text-blue-600 hover:underline"
                        >
                          View all →
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </nav>

            {/* Mobile toggle button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-3 text-sm text-black font-medium pb-4">
              {/* Home first */}
              <Link href="/" className="block font-semibold py-2">
                Home
              </Link>

              {cards.map((card) => (
                <div key={card.title}>
                  <Link
                    href={card.viewAllHref}
                    className="block font-semibold py-2"
                  >
                    {card.title}
                  </Link>
                  <div className="ml-3 space-y-1">
                    {card.items.map((item, i) => {
                      if (typeof item === "string") return null;
                      return (
                        <Link
                          key={i}
                          href={`${card.viewAllHref}#${item.slug}`}
                          className="block text-gray-600 hover:underline"
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
