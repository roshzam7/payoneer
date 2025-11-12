"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Footer from "../components/Footer";

type ListPrice = {
  type: "list";
  question: string;
  answers: string[];
};

type TablePrice = {
  type: "table";
  question: string;
  subHeading?: string;
  tableData: {
    headers: string[];
    rows: string[][];
  };
};

type Price = ListPrice | TablePrice;

const topics = [
  {
    title: "Table",
    slug: "table",
  },
  {
    title: "The prices and fees",
    slug: "The-prices-and-fees",
  },
];

const priceSection = [
  {
    type: "table",
    question: "",
    subHeading:
      "",
    tableData: {
      headers: ["Category", "Service Description", "Fee"],
      rows: [
        ["Receiving Funds ", "From another Payoneer user", "Free"],

        ["", "From client via credit/debit card", "Up to 3.99% + $0.4 9"],
        ["", "From US client via ACH bank debit", "1%"],

        [
          "",
          "From marketplaces & platforms (e.g., Fiverr, Upwork)",
          "Varies – set by platform",
        ],
        [
          "",
          "Receiving account – same currency (e.g. USD to your USD account)",
          "Free",
        ],
        [
          "",
          "Receiving account – different currency (e.g. EUR to your USD account)",
          "Up to 1% or fixed fee, based on location and currency",
        ],
        ["", "", ""],
        ["", "", ""],
        ["Making Payments", "To another Payoneer user", "Up to 1% (min. $4 )"],
        ["", "To non-Payoneer user's bank account", "Up to 3%"],
        ["", "", ""],
        ["", "", ""],
        ["Payoneer Card", "Annual fee (first card)", "$29.95/year"],

        ["", "Additional cards", "Free"],
        ["", "Purchases in same currency as card ", "Free"],
        ["", "Currency conversion (e.g., USD to EUR) ", "Up to 3.5%"],
        ["", "Cross-border purchases", "Up to 1.8%"],
        ["", "", ""],
        ["", "", ""],
        [
          "Withdraw to Bank",
          "Same currency to local bank (up to $50K/month)",
          "~$1. 50 / €1.50 / £1.50",
        ],
        ["", "Above $50K/month (USD/EUR/GBP", "0. 5% of the amount"],
        ["", "With currency conversion (e.g., USD → EUR)", "Up to 3%"],
        ["", "", ""],
        ["", "", ""],
        [
          "Other Fees",
          "Annual inactivity fee (if < $2,000 received in 12 months)",
          "$29.95",
        ],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  },
];
const linkify = (text: string) => {
  const urlRegex = /((https?:\/\/|www\.)[^\s)]+)|(mailto:[^\s)]+)/gi;
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (!part) return null;
    const looksLikeUrl = part.startsWith("http") || part.startsWith("www.");
    const isMailto = part.startsWith("mailto:");
    if (looksLikeUrl) {
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {part}
        </a>
      );
    }
    if (isMailto) {
      return (
        <a key={i} href={part} className="underline">
          {part.replace("mailto:", "")}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  const [faqOpenMap, setFaqOpenMap] = useState<Record<string, boolean>>({
    "faqs-0": true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const topic of topics) {
        const el = document.getElementById(topic.slug);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActive(topic.slug);
            window.history.replaceState(null, "", `?section=${topic.slug}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleFaq = (key: string) => {
    setFaqOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-[400px] sm:h-[500px] flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-12">
            Payoneer
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Fees
            </span>
          </h1>
        </div>
      </section>
      <div className="flex">
        <aside className="sticky top-24 h-screen w-[400px] p-10 border-r hidden lg:block">
          <h3 className="text-2xl text-black font-semibold mb-6">Topics</h3>
          <nav className="space-y-3">
            {topics.map((topic) => (
              <button
                key={topic.slug}
                onClick={() => scrollTo(topic.slug)}
                className={`block text-left w-full px-4 py-2 rounded-full text-xs sm:text-sm transition border ${
                  active === topic.slug
                    ? "bg-[#EFEFEF] text-[#878787] border-white"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {topic.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-20 bg-white">
          <section
            aria-label="Breadcrumb"
            className="border-b border-white/10 bg-white text-black backdrop-blur"
          >
            <div className="max-w-5xl mx-0 flex sm:flex-row sm:items-center gap-2 px-4 sm:px-6 lg:px-2 py-2">
              {/* Back button */}
              <button
                type="button"
                onClick={() => router.push("/")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black"
                aria-label="Back"
                title="Back"
              >
                <Image src={backBtn} alt="Back" width={32} height={32} />
              </button>

              {/* Crumb text */}
              <nav className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm text-[#878787]">
                <span
                  className="cursor-pointer font-medium hover:underline"
                  onClick={() => router.push("/")}
                >
                  Table
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate max-w-full sm:max-w-xs md:max-w-md">
                 Payoneer Fees
                </span>
              </nav>
            </div>
          </section>

          {/* ---------- Section 1: FAQs ---------- */}
          <section id="table" className="scroll-mt-28 mb-4">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10">
              <div className="mt-0">
                <h2 className="text-[25px] font-bold text-gray-900">
                  Our goal is to help you keep more of what your business earns.
                  That&apos;s why we work hard to keep our pricing low, and whenever
                  possible, completely free.
                </h2>

              <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
              Use the table below to find the correct request type and how to categorize common issues.
                </p>
              </div>
            </div>
          </section>
          {/*  */}
          <section className="scroll-mt-28 space-y-12">
            {(priceSection as Price[])
              .filter((faq) => faq.type === "table" && "tableData" in faq)
              .map((faq, index) => (
                <div
                  key={`table-${index}`}
                  className="bg-gradient-to-br from-[#ffffff] to-[#f8f9fc] border border-gray-100 shadow-xl rounded-3xl p-8"
                >
                  {/* Section Heading */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 bg-clip-text  bg-gradient-to-r from-[#5f6df3] to-[#aa5cc3]">
                      {faq.question}
                    </h3>
                    {faq.subHeading && (
                      <p className="mt-2 text-[#666] text-[15px] leading-relaxed">
                        {faq.subHeading}
                      </p>
                    )}
                  </div>

                  {/* Grouped Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-gray-700">
                      <thead>
                        <tr className="bg-[#f3f4f6] text-[#555] text-[13px] uppercase tracking-wide">
                          {faq.tableData?.headers?.map((header, i) => (
                            <th
                              key={i}
                              className="px-6 py-3 text-left font-semibold border-b border-gray-200"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {(() => {
                          let currentCategory: string | null = null;

                          return faq.tableData?.rows?.map((row, rowIndex) => {
                            const [category, description, fee] = row;

                            // Empty line = visual gap
                            if (!category && !description && !fee) {
                              return (
                                <tr key={rowIndex}>
                                  <td colSpan={3} className="py-3"></td>
                                </tr>
                              );
                            }

                            // If category exists, start a new group
                            if (category && category.trim() !== "") {
                              currentCategory = category;
                              return (
                                <tr key={rowIndex} className="bg-[#f8f8ff]">
                                  <td className="px-6 py-3 font-semibold text-gray-900 text-[13px] rounded-t-lg border-t border-[#eaeaea]">
                                    {category}
                                  </td>
                                  <td className="px-6 py-3 text-gray-800 text-[13px]">
                                    {description}
                                  </td>
                                  <td className="px-6 py-3 text-right font-medium text-gray-900 text-[13px]">
                                    {fee}
                                  </td>
                                </tr>
                              );
                            }

                            // Otherwise, sub-item under current category
                            return (
                              <tr
                                key={rowIndex}
                                className="hover:bg-[#fafafa] transition-all duration-200"
                              >
                                <td className="px-6 py-3 text-gray-500 w-1/4">
                                  {currentCategory ? "" : ""}
                                </td>
                                <td className="px-6 py-3 w-2/4 text-gray-800">
                                  {description}
                                </td>
                                <td className="px-6 py-3 w-1/4 text-right font-medium text-gray-900">
                                  {fee}
                                </td>
                              </tr>
                            );
                          });
                        })()}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
                              <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
                  For full details, visit the official page:{" "}
                  <a
                    href="https://www.payoneer.com/pricing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Payoneer Pricing
                  </a>
                </p>
          </section>

          <section
            id="The-prices-and-fees"
            className="max-w-8xl mx-auto px-4 sm:px-6 py-16 text-center "
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              *The prices and fees displayed on this page present an estimation
              based on our most standard and common fee structure, available for
              majority of the account types in the majority of the regions where
              our services may be available. Different prices and fees may be
              applied in different territories, for different account types. The
              pricing and fees applicable to you are provided for review during
              account registration and are also available any time from the Fees
              link in your Payoneer account. Sign in to your account to review
              the most updated fees.
              <br />
              Please note that Making a payment with currency conversion is
              available in permitted jurisdictions only.
            </p>
          </section>
        </main>
      </div>
      <Footer />{" "}
    </div>
  );
}
