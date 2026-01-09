"use client";
import React, { useState } from "react";
import Link from "next/link";

type LinkItem = { label: string; slug: string };
type Card = {
  title: string;
  items?: LinkItem[];
  viewAllHref: string;
};

const cards: Card[] = [
  {
    title: "Reseller program",
    viewAllHref: "/program",
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
  },
  {
    title: "Partner onboarding",
    viewAllHref: "/partner-onboarding",
    items: [],
  },
  {
    title: "Affiliate program",
    viewAllHref: "/affiliate-program",
    items: [
      { label: "About Payoneer", slug: "about-payoneer" },
      { label: "Why become a Payoneer affiliate", slug: "why-partner" },
      { label: "Affiliate program overview", slug: "reseller-overview" },
      { label: "Success stories & testimonials", slug: "key-features" },
    ],
  },
  {
    title: "Affiliate onboarding",
    viewAllHref: "/affiliate-setup",
    items: [],
  },
  {
    title: "Client onboarding",
    viewAllHref: "/client-onboarding",
    items: [
      { label: "Standard sign-up flow", slug: "referred-account-holders" },
      { label: "CLM Flow", slug: "clm-flow" },
      { label: "Additional kyc requirements", slug: "kyc-process-explained" },
      { label: "Get started with Payoneer", slug: "get-started-with-payoneer" },
    ],
  },
  {
    title: "Enablement",
    viewAllHref: "/partner-activation",
    items: [
      { label: "Sales enablement tools", slug: "sales-enablement-tools" },
      { label: "Marketing & reselling guidelines", slug: "reselling-guidelines" },
      { label: "Customer personas", slug: "onboarding-overview" },
      {
        label: "Co-branded or dedicated landing pages",
        slug: "co-branded-or-dedicated-landing-pages",
      },
    ],
  },
  {
    title: "Pricing",
    viewAllHref: "/pricing",
    items: [],
  },
  {
    title: "Features",
    viewAllHref: "/features",
    items: [
      { label: "Overview", slug: "overview" },
      { label: "Key features & benefits", slug: "features" },
      { label: "Business tools", slug: "business-tools" },
      { label: "Who is it for?", slug: "who-its-for" },
      { label: "Learn more", slug: "learn-more" },
    ],
  },
  {
    title: "Support",
    viewAllHref: "/faqs",
    items: [],
  },
];

const ContentCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cards
    .map((card) => ({
      ...card,
      items: card.items?.filter((item) =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((card) => card.items && card.items.length > 0);

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4 text-[#878787]">
          Table of Contents
        </h2>

        {/* Search */}
        <div className="relative w-full sm:w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Search Icon */}
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          {/* Clear */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Cards */}
      {filteredCards.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No matching results found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>

              <ul className="text-sm text-gray-600 space-y-1">
                {card.items!.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`${card.viewAllHref}#${item.slug}`}
                      className="text-[#878787] hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
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
