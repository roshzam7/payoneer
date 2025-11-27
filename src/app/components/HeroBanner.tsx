"use client";
import React, { useState } from "react";
import Link from "next/link";
import Banner from "../assets/Hero-header.png";

type LinkItem = { label: string; slug: string };
type Card = {
  title: string;
  items: Array<string | LinkItem>;
  viewAllHref: string;
};

const cards: Card[] = [
  {
    title: "Welcome to the Payoneer Reseller Program",
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
    title: "Partner Activation & Enablement",
    items: [
      { label: "Sales Enablement Tools", slug: "sales-enablement-tools" },
      {
        label: "Marketing & Reselling Guidelines",
        slug: "reselling-guidelines",
      },
      { label: "Customer Personas", slug: "onboarding-overview" },
      { label: "Payoneer Pricing", slug: "payoneer-pricing" },
      {
        label: "Co-Branded or Dedicated Landing Pages",
        slug: "co-branded-or-dedicated-landing-pages",
      },
    ],
    viewAllHref: "/partner-activation",
  },
  {
    title: "Referred Account Holder Onboarding Journey",
    items: [
      { label: "Standard Sign-up Flow", slug: "referred-account-holders" },
      { label: "CLM Flow", slug: "clm-flow" },
      { label: "Additional KYC Requirements", slug: "kyc-process-explained" },
      { label: "Get started with Payoneer", slug: "get-started-with-payoneer" },
    ],
    viewAllHref: "/referred-account-holder",
  },
  {
    title: "Support Center",
    items: [
      { label: "Frequently Asked Questions (FAQs)", slug: "faqs" },
      {
        label: "Support Ticket Questionnaire",
        slug: "support-ticket-questionnaire",
      },
    ],
    viewAllHref: "/faqs",
  },
];

const HeroBanner: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Flatten items from all cards
  const allItems = cards.flatMap((card) =>
    card.items.map((item) =>
      typeof item === "string"
        ? { label: item, href: card.viewAllHref }
        : { label: item.label, href: `${card.viewAllHref}#${item.slug}` }
    )
  );

  // Filter based on search term
  const filteredItems =
    searchTerm.trim() === ""
      ? []
      : allItems.filter((i) =>
          i.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <section
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover pt-0"
      style={{ backgroundImage: `url(${Banner.src})` }}
      aria-label="Welcome to Payoneer"
    >
      <div className="h-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-start text-center pt-40 sm:pt-50  lg:pt-50">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight **leading-normal** text-gray-900">
          Welcome to the <br />
          <span className="block  bg-clip-text text-gray-900">
           Payoneer partner program
          </span>
        </h1>
        {/* Description */}
        <p className="mt-5 mx-auto max-w-[720px] text-base sm:text-lg leading-relaxed text-gray-700">
          Powering your success with an exclusive program built for growth and
          next-gen infrastructure.
        </p>
        {/* 🔍 Search Input with Dropdown */}
        <div className="relative w-full sm:w-1/2 mx-auto mt-10">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              ></path>
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search guides, tools, and resources..."
            className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-2 text-sm text-[#252526] bg-white bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          />

          {/* Clear Button */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}

          {/* Dropdown */}
          {isFocused && filteredItems.length > 0 && (
            <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto text-left">
              {filteredItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* No results */}
          {isFocused && searchTerm && filteredItems.length === 0 && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg p-3 text-sm text-gray-500">
              No results found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
