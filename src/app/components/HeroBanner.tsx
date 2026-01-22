"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Banner from "../assets/LP-banner-01.png";

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
      { label: "Understand Your Role as a Payoneer Reseller", slug: "Understand-Your-Role" },
      { label: "Success stories & testimonials", slug: "key-features" },
    ],
    viewAllHref: "/program",
  },
  
  { title: "Partner onboarding", 
    items: [
       { label: "Why we choose community?", slug: "choose-PRM" },
       { label: "What is the process?",  slug: "onboarding-process-works", },
      ],
    viewAllHref: "/partner-onboarding",  
  },

  {
    title: "Affiliate program",
    items: [
      { label: "About Payoneer", slug: "about-payoneer" },
      { label: "Why become a Payoneer affiliate", slug: "why-partner" },
      { label: "Affiliate program overview", slug: "reseller-overview" },
      { label: "Success stories & testimonials", slug: "key-features" },
    ],
    viewAllHref: "/affiliate-program",
  },


  // { title: "Affiliate onboarding", 
  //   items: [
  //   ],    
  //   viewAllHref: "/affiliate-setup",  },
  {
    title: "Client onboarding",
    items: [
      { label: "How to get started as an account holder (AH) in Payoneer ", slug: "get-started-account-holder",},
      { label: "Form Flow", slug: "referred-account-holders", },
      { label: "4 Steps Flow",slug: "clm-flow", },
      { label: "Additional KYC requirements", slug: "kyc-process-explained", },
    ],
    viewAllHref: "/client-onboarding",
  },
  {
    title: "Enablement",
    items: [
      {label: "Sales enablement tools", slug: "sales-enablement-tools",},
      {label: "Marketing guidelines", slug: "reselling-guidelines", },
      {label: "Customer personas", slug: "customer-personas", },
    ],
    viewAllHref: "/partner-activation",
  },


  { title: "Pricing", viewAllHref: "/pricing", items: [] },

  {
    title: "Features",
    items: [
      { label: "Overview", slug: "overview",  },
      { label: "Why this matters to your clients or users ", slug: "features", },
      { label: "Get started with Payoneer ", slug: "get-started-with-payoneer",  },
      { label: "How to.. ", slug: "how-to",  },
    ],
    viewAllHref: "/features",
  },
  
  { title: "Support", items: [], viewAllHref: "/faqs" },
];

type SearchEntry = {
  label: string;        // the thing you search for (item title or page title)
  href: string;         // where it goes
  pageTitle: string;    // the page name you want to show small
  kind: "page" | "item";
};

const HeroBanner: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Build searchable list: page titles + items (with page name included)
  const allItems: SearchEntry[] = useMemo(() => {
    const raw: SearchEntry[] = cards.flatMap((card) => {
      const pageEntry: SearchEntry = {
        label: card.title,
        href: card.viewAllHref,
        pageTitle: card.title,
        kind: "page",
      };

      const itemEntries: SearchEntry[] = card.items.map((item) =>
        typeof item === "string"
          ? {
              label: item,
              href: card.viewAllHref,
              pageTitle: card.title,
              kind: "item",
            }
          : {
              label: item.label,
              href: `${card.viewAllHref}#${item.slug}`,
              pageTitle: card.title,
              kind: "item",
            }
      );

      return [pageEntry, ...itemEntries];
    });

    // De-dupe exact label+href
    return Array.from(new Map(raw.map((x) => [`${x.label}|${x.href}`, x])).values());
  }, []);

  const filteredItems = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];
    return allItems.filter((i) => i.label.toLowerCase().includes(q));
  }, [searchTerm, allItems]);

  return (
    <section
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover pt-0"
      style={{ backgroundImage: `url(${Banner.src})` }}
      aria-label="Welcome to Payoneer"
    >
      <div className="h-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-start text-center pt-40 sm:pt-50 lg:pt-50">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-normal text-gray-900">
          Welcome to the <br />
          <span className="block bg-clip-text text-gray-900">Payoneer partner program</span>
        </h1>

        <p className="mt-5 mx-auto max-w-[720px] text-base sm:text-lg leading-relaxed text-gray-700">
          Powering your success with an exclusive program built for growth and next-gen infrastructure.
        </p>

        <div className="relative w-full sm:w-1/2 mx-auto mt-10">
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

          <input
            type="text"
            placeholder="Search guides, tools, and resources..."
            className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-2 text-sm text-[#252526] bg-white bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}

          {isFocused && filteredItems.length > 0 && (
            <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto text-left">
              {filteredItems.map((item, i) => (
                <li key={`${item.href}-${i}`}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <div className="flex flex-col">
                      <span className="leading-5">{item.label}</span>

                      {/* page name under it, small */}
                      <span className="text-[11px] text-gray-400 leading-4">
                        {item.pageTitle}
                        {item.kind === "page" ? "" : ""}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

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
