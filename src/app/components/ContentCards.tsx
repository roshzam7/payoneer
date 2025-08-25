"use client";
import React, { useState } from "react";
import Link from "next/link";

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
      { label: "Co-Branded or Dedicated Landing Pages", slug: "co-branded-or-dedicated-landing-pages" },


    ],
    viewAllHref: "/partner-activation",
  },
  {
    title: "Referred Account Holder Onboarding Journey",
    items: [
      {
        label: "Standard Sign-up Flow",
        slug: "referred-account-holders",
      },
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

const ContentCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cards
    .map((card) => {
      const filteredItems = card.items.filter((item) =>
        typeof item === "string"
          ? item.toLowerCase().includes(searchTerm.toLowerCase())
          : item.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...card, items: filteredItems };
    })
    .filter((card) => card.items.length > 0);

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      {/* Search Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4 text-[#878787]">
          Table of Contents
        </h2>

        {/* Search Input with SVG and Clear Button */}
        <div className="relative w-full sm:w-1/2 mx-auto">
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
            placeholder="Search"
            className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-2 text-sm text-[#252526] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
        </div>
      </div>

      {/* Card Grid */}
      {filteredCards.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No matching results found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>

              <ul className="text-sm text-gray-600 space-y-1">
                {card.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i}>{item}</li>
                  ) : (
                    <li key={i}>
                      <Link
                        href={`${card.viewAllHref}#${item.slug}`}
                        className="text-[#878787] hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              <Link
                href={card.viewAllHref}
                className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline"
              >
                View all →
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ContentCards;
