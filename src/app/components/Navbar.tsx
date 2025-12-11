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

const cards: Card[] = [
  {
    title: "Reseller program",
    items: [
      { label: "About Payoneer", slug: "about-payoneer" },
      { label: "Why partner with us", slug: "why-partner" },
      { label: "Reseller program overview", slug: "reseller-overview" },
      {
        label: "Understand Your Role as a Payoneer Reseller",
        slug: "Understand-Your-Role",
      },
      { label: "Success stories & testimonials", slug: "key-features" },
    ],
    viewAllHref: "/program",
  },
  {
    title: "Partner onboarding",
    items: [
      { label: "How to join the program", slug: "How-to-Join" },
      // {
      //   label: "Understanding partner tiers",
      //   slug: "Understanding-Partner-Tiers",
      // },
      // {
      //   label: "Understanding commercials & payment calculators",
      //   slug: "Payment-Calculators",
      // },
    ],
    viewAllHref: "/partner-onboarding",
  },
  {
    title: "Affiliate program",
    items: [
      { label: "About Payoneer", slug: "about-payoneer" },
      { label: "Why become a Payoneer affiliate", slug: "why-partner" },
      { label: "Affiliate program overview", slug: "reseller-overview" },
      { label: "Success stories & testimonials", slug: "keay-features" },
    ],
    viewAllHref: "/affiliate-program",
  },

  {
    title: "Affiliate onboarding",
    items: [
      {
        label: "How to get onboarded to Payoneer with Hasoffer",
        slug: "How-to-Join-two",
      },
    ],
    viewAllHref: "/affiliate-setup",
  },

  {
    title: "Client onboarding",
    items: [
      { label: "Standard sign-up flow", slug: "referred-account-holders" },
      { label: "CLM Flow", slug: "clm-flow" },
      { label: "Additional kyc requirements", slug: "kyc-process-explained" },
      { label: "Get started with Payoneer", slug: "get-started-with-payoneer" },
    ],
    viewAllHref: "/client-onboarding",
  },
  {
    title: "Enablement",
    items: [
      { label: "Sales enablement tools", slug: "sales-enablement-tools" },
      {
        label: "Marketing & reselling guidelines",
        slug: "reselling-guidelines",
      },
      { label: "Customer personas", slug: "onboarding-overview" },
      {
        label: "Co-branded or dedicated landing pages",
        slug: "co-branded-or-dedicated-landing-pages",
      },
    ],
    viewAllHref: "/partner-activation",
  },
  {
    title: "Pricing",
    items: [{ label: "Payoneer pricing", slug: "newpage" }],
    viewAllHref: "/pricing",
  },

  {
    title: "Features",
    items: [
      { label: "Overview", slug: "overview" },
      {
        label: "Key features & benefits",
        slug: "features",
      },
      {
        label: "Business tools",
        slug: "business-tools",
      },
      {
        label: "Who is it for?",
        slug: "who-its-for",
      },
      {
        label: "Learn more",
        slug: "learn-more",
      },
    ],
    viewAllHref: "/features",
  },
  {
    title: "Support",
    items: [
      { label: "Frequently asked questions (FAQs)", slug: "faqs" },
      {
        label: "Support ticket questionnaire",
        slug: "support-ticket-questionnaire",
      },
    ],
    viewAllHref: "/faqs",
  },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="backdrop-blur-md bg-white/80 shadow-md border-b border-white/40">
        <div className="relative px-4 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image src={Logo} alt="Logo" width={100} height={30} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-wrap items-center gap-6 text-sm text-black font-medium">
              {cards.map((card, index) => {
                const isLast = index === cards.length - 1;

                return (
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
                    <div
                      className={`absolute mt-2 w-64 bg-white rounded-md shadow-lg transform translate-y-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out ${
                        isLast ? "right-0" : "left-0"
                      }`}
                    >
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
                );
              })}
            </nav>

            {/* Mobile toggle button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
            <div className="md:hidden mt-2 space-y-3 text-sm text-black font-medium pb-4 border-t border-gray-100 pt-3">
              <Link href="/" className="block font-semibold py-1.5">
                Home
              </Link>

              {cards.map((card) => (
                <div key={card.title} className="space-y-1">
                  <Link
                    href={card.viewAllHref}
                    className="block font-semibold py-1.5"
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
