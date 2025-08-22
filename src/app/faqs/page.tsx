"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Togglebtn from "../assets/images/toggle-faq.svg";


type ListFAQ = {
  type: "list";
  question: string;
  answers: string[];
};

type TableFAQ = {
  type: "table";
  question: string;
  subHeading?: string;
  tableData: {
    headers: string[];
    rows: string[][];
  };
};

type FAQ = ListFAQ | TableFAQ;


const topics = [
  {
    title: "Frequently Asked Questions (FAQs)",
    slug: "faqs",
  },
  {
    title: "Support Ticket Questionnaire",
    slug: "support-ticket-questionnaire",
  },
];

const faqs = [
  {
    type: "list",
    question: "How do I submit a request to Reseller Operations?",
    answers: [
      "Use the official Reseller Operations Support Request Form available here: https://forms.cloud.microsoft/r/BNYvLecaG6 . Ensure all required fields are filled accurately to avoid delays.er",
    ],
  },
  {
    type: "list",
    question:
      "What type of queries can I raise via the Reseller Operations Support Request Form?",
    answers: [
      "You can raise requests related to:",
      "· Account approval (BO opening, document/risk alert)",
      "· Account blockages (pre-risk, suspicious activity)",
      "· Payment reviews (non-loaded, declined payments)",
      "· Product activation (BLS, GLPS, Card, etc.)",
      "· Products upsell (Working Capital, Checkout, WFM, etc.)",
      "· Price reduction for newly acquired accounts",
      "· Name mismatch on bank account",
      "· General account information query",
    ],
  },
  {
    type: "list",
    question: "What information is mandatory while submitting the form?",
    answers: [
      "Please ensure you include:",
      "· 5-digit Affiliate ID and Registered email id (8-digit Account Holder ID)",
      "· Region of the partner",
      "· Detailed description and rationale for the request",
      "· Estimated monthly volume (if applicable)",
      "· Valid email address (ticket will not be generated if email is incorrect)",
    ],
  },
  {
    type: "list",
    question: "What is the expected turnaround time for a resolution?",
    answers: [
      "The Reseller Ops team aims to respond within 3 business days. This may vary based on the complexity of the request and the quality of information provided. Incomplete requests may be closed if not acted upon within 5 business days.",
    ],
  },
  {
    type: "list",
    question: "How will I receive updates regarding my request?",
    answers: [
      "Once submitted, you will receive an email confirmation. All further communication will be via email. For follow-ups or additional queries on the same issue please write back to us on the same form.",
      "Please avoid creating duplicate requests, as it may affect the resolution SLA by recency - only the most recent ticket will be worked on, causing delays.",
    ],
  },
  {
    type: "list",
    question:
      "Who do I contact if I face issues with the form or have additional questions?",
    answers: [
      "Please reach out to our support email id:",
      "APAC - resellersupport_apac@payoneer.com ",
      "EMEA - resellersupport_emea@payoneer.com",
      "LATAM - resellersupport_latam@payoneer.com",
      "CHINA - resellersupport_china@payoneer.com",
      "NORTH AMERICA - resellersupport_nam@payoneer.com",
    ],
  },

  {
    type: "table",
    question: "How to Choose the Right Region and Sub-Region",
    subHeading:
      "When submitting a request, select the region based on where the reseller partner is headquartered or primarily operating. If you select EMEA or APAC, you must also specify the relevant sub-region.",
    tableData: {
      headers: ["Region", "Sub-Region", "Countries Included"],
      rows: [
        [
          "LATAM",
          "N/A",
          "Brazil, Mexico, Argentina, Colombia, Chile, Peru, other Latin American countries",
        ],
        ["North America", "N/A", "United States, Canada"],
        ["China", "N/A", "Mainland China"],
        [
          "APAC",
          "South Asia",
          "Pakistan, Bangladesh, Sri Lanka, other South Asian countries",
        ],
        ["APAC", "India", "India"],
        [
          "APAC",
          "Southeast Asia",
          "Vietnam, Thailand, Singapore, Philippines, Malaysia, Indonesia, Korea, Japan, Australia, New Zealand, other ASEAN countries",
        ],
        [
          "EMEA",
          "Europe",
          "UK, France, Germany, Poland, Romania, Serbia, Estonia, Cyprus, Malta, other European countries",
        ],
        [
          "EMEA",
          "CIS Region",
          "Russia, Ukraine, Georgia, Armenia, Moldova, Kazakhstan, other post-soviet countries",
        ],
        [
          "EMEA",
          "Middle East & Africa",
          "UAE, Saudi Arabia, other GCC countries, Egypt, Morocco, Nigeria, Kenya, South Africa",
        ],
      ],
    },
  },
  {
    type: "table",
    question:
      "What types of requests should be sent via the Reseller Operations Support Request Form?",
    subHeading:
      "Use this guide to identify the appropriate query category while submitting your request through the Reseller Operations Support Request Form. Select the relevant query type exactly as mentioned in the form, to help ensure faster routing and resolution.",
    tableData: {
      headers: [
        "#",
        "Type of Request",
        "Example Issue",
        "Select This Option in Form (Query Type)",
      ],
      rows: [
        [
          "1",
          "Account opening issues",
          "Pending Account Approval",
          "Account approval - Opening requirements",
        ],
        [
          "2",
          "Account opening issues",
          "Account Holder not able to see the docs",
          "Account approval - Opening requirements",
        ],
        [
          "3",
          "Account opening issues",
          "ID number mismatch",
          "Account approval - Document approval",
        ],
        [
          "4",
          "Account opening issues",
          "Account Opened KYC not reflecting in the dashboard",
          "Account approval - Opening requirements",
        ],
        [
          "5",
          "Account issues",
          "Account Suspended or blocked",
          "Account blocked - Manually by risk (suspicious activity)",
        ],
        [
          "6",
          "Account issues",
          "Account Holder has Section Alerts",
          "Account approval - Risk alert",
        ],
        [
          "7",
          "Account issues",
          "Account In rule",
          "Account blocked - Pre-risk, automatic",
        ],
        [
          "8",
          "Account issues",
          "Account Bare Issue",
          "Account blocked - Pre-risk, automatic",
        ],
        [
          "9",
          "Access issues",
          "Issue with Log in to MyAccount",
          "Account requests - Need additional Information",
        ],
        [
          "10",
          "Access issues",
          "Unable to receive the confirmation email",
          "Account requests - Need additional Information",
        ],
        [
          "11",
          "Account issues",
          "Date of birth / Date of incorporation mismatch",
          "Account approval - Document approval",
        ],
        [
          "12",
          "Account issues",
          "Unable to upload documents",
          "Account approval - Document approval",
        ],
        [
          "13",
          "Access issues",
          "Unable to receive the MFA code",
          "Account requests - Need additional Information",
        ],
        [
          "14",
          "Receiving Account",
          "Request the receiving bank account",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "15",
          "Receiving Account",
          "Request additional receiving bank account",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "16",
          "Receiving Account",
          "Request Wire PS Bank account for taxes purposes",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "17",
          "Receiving Account",
          "Request to cancel/close a receiving bank account",
          "Account approval - Opening requirements",
        ],
        [
          "18",
          "Receiving Account",
          "Transfer the receiving bank account to another AH",
          "Payment review - Payment not loaded",
        ],
        [
          "19",
          "Payments",
          "Payment Review - Pending Payment",
          "Payment review - Payment not loaded",
        ],
        [
          "20",
          "Payments",
          "Payment Review - Missing Payment",
          "Payment review - Payment not loaded",
        ],
        [
          "21",
          "Payments",
          "Payment Review - Cancel Payment",
          "Payment review - Payment declined",
        ],
        [
          "22",
          "Payments",
          "Payment Review - Stop cancelling a GLPS payment",
          "Payment review - Payment declined",
        ],
        [
          "23",
          "Payments",
          "GBT - GLPS - Stop Return of Payment",
          "Payment review - Payment declined",
        ],
        [
          "24",
          "Payments",
          "LATRefund to Sender statusAM",
          "Payment review - Payment not loaded",
        ],
        [
          "25",
          "Product activation",
          "Issue New VAN (Hongkong account)",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "26",
          "Withdrawal to bank",
          "New bank account pending for review",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "27",
          "Withdrawal to bank",
          "Pending withdrawal to bank",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "28",
          "Withdrawal to bank",
          "Payment not received",
          "Payment review - Payment not loaded",
        ],
        [
          "29",
          "Withdrawal to bank",
          "Remove a withdrawal to bank account",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "30",
          "Withdrawal to bank",
          "Reopen withdrawal to bank account for deflate",
          "Account approval - Document approval",
        ],
        [
          "31",
          "Withdrawal to bank",
          "Cancel withdrawal to bank",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "32",
          "Withdrawal to bank",
          "Increase withdrawal to bank Limit",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "33",
          "Payout Network",
          "New supplier's bank account pending for review",
          "Account approval - Document approval",
        ],
        [
          "34",
          "Payout Network",
          "Pending payment to supplier's bank account",
          "Payment review - Payment not loaded",
        ],
        [
          "35",
          "Payout Network",
          "Payment not received",
          "Payment review - Payment declined",
        ],
        [
          "36",
          "Payout Network",
          "Increase limit",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "37",
          "Make a Payment (MAP)",
          "Re-enable MAP",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "38",
          "Make a Payment (MAP)",
          "Missing MAP incoming payment",
          "Payment review - Payment not loaded",
        ],
        [
          "39",
          "Make a Payment (MAP)",
          "Increase MAP limit",
          "Payment review - Payment not loaded",
        ],
        [
          "40",
          "Payoneer Card",
          "Cash back",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "41",
          "Payoneer Card",
          "Unable to use card",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "42",
          "Payoneer Card",
          "Card review",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "43",
          "Payoneer Card",
          "Cancel card",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "44",
          "Payoneer Card",
          "Tracking card delivery status",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "45",
          "Payoneer Card",
          "Reissue new card",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "46",
          "Payoneer Card",
          "Increase card transaction limit",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "47",
          "Billing Services",
          "Increase Payment Limit",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
        [
          "48",
          "Billing Services",
          "Re-enable Invoice/Link Payments",
          "Product activation - BLS, Card, GLPS etc. (Link Payments, Cards, Bank accounts)",
        ],
      ],
    },
  },
];
const faqsSectionTwo = [
  {
    type: "table",
    question: "Helpdesk FAQ: Request Type & Resolution Mapping",
    subHeading:
      "Use the table below to find the correct request type and how to categorize common issues.",
    tableData: {
      headers: [
        "Type of Request",
        "Name of the Issue",
        "Relevant Request/Query Type",
      ],
      rows: [
        [
          "",
          "Pending Account Approval",
          "account approval - opening requirements in BO",
        ],
        [
          "",
          "Account Holder not able to see the docs",
          "account approval - opening requirements in BO",
        ],
        ["", "ID number mismatch", "account approval - document approval"],
        [
          "",
          "Account Opned KYC not reflecting in the dashboard",
          "account approval - opening requirements in BO",
        ],
        [
          "",
          "Account Suspended or blocked",
          "account blocked - manually by risk (suspicious activity)",
        ],
        [
          "",
          "Account Holder has Saction Alerts",
          "account approval - risk alert",
        ],
        [
          "Account opening issues",
          "Account Inrule",
          "account blocked - pre-risk, automatic (in-rule)",
        ],
        [
          "",
          "Account Bare Issue",
          "account blocked - pre-risk, automatic (in-rule)",
        ],
        [
          "",
          "Issue with Log In to MyAccount",
          "Account requests - Need additional Information",
        ],
        [
          "",
          "Unable to receive the confirmation email",
          "Account requests - Need additional Information",
        ],
        [
          "",
          "Date of birth / Date of incorporation mismatch",
          "account approval - document approval",
        ],
        [
          "",
          "Unable to upload documents",
          "account approval - document approval",
        ],
        [
          "",
          "Unable to receive the MFA code",
          "	Account requests - Need additional Information",
        ],
        ["", "", ""],
        ["", "", ""],
        [
          "",
          "Request the receiving bank account",
          "product activation - BLS, Card, GLPS etc.",
        ],
        [
          "",
          "Request additional receiving bank account",
          "product activation - BLS, Card, GLPS etc.",
        ],
        [
          "",
          "Request WirePS Bank account for taxes purposes",
          "product activation - BLS, Card, GLPS etc.",
        ],
        [
          "",
          "Request to cancel/close a receiving bank account",
          "account approval - opening requirements in BO",
        ],
        [
          "",
          "Transfer the receiving bank account to another AH",
          "payment review - payment not loaded",
        ],
        [
          "Receiving Account",
          "Payment Review - Pending Payment",
          "payment review - payment not loaded",
        ],
        [
          "",
          "Payment Review - Missing Payment",
          "payment review - payment not loaded",
        ],
        [
          "",
          "Payment Review - Cancel Payment",
          "payment review - payment declined",
        ],
        [
          "",
          "Payment Review - Stop cancelling a GLPS payment",
          "payment review - payment declined",
        ],
        [
          "",
          "GBT - GLPS Stop Return of Payment",
          "payment review - payment declined",
        ],
        ["", "Refund to Sender status", "payment review - payment not loaded"],
        ["", "Issue New VAN", "product activation - BLS, Card, GLPS etc."],
        ["", "", ""],
        ["", "", ""],
        [
          "",
          "New bank account pending for review",
          "product activation - BLS, Card, GLPS etc.",
        ],
        ["", "Pending w2b", "product activation - BLS, Card, GLPS etc."],
        ["", "Payment not received", "payment review - payment not loaded"],
        [
          "Withdraw 2 Bank",
          "Remove a w2b bank account",
          "product activation - BLS, Card, GLPS etc.",
        ],
        [
          "",
          "reopen w2b bank account for deflate",
          "account approval - document approval",
        ],
        ["", "Cancel W2b", "product activation - BLS, Card, GLPS etc."],
        ["", "Increase W2b Limit", "product activation - BLS, Card, GLPS etc."],
        ["", "", ""],
        ["", "", ""],
        [
          "",
          "New supplier's bank account pending for review",
          "account approval - document approval",
        ],
        [
          "",
          "Pending payment to supplier's bank account",
          "payment review - payment not loaded",
        ],
        ["", "Payment not received", "payment review - payment declined"],
        ["", "Increase limit", "product activation - BLS, Card, GLPS etc."],
        ["", "Cancel PON", ""],
        ["", "", ""],
        ["", "", ""],
        ["", "Re-able MAP", "product activation - BLS, Card, GLPS etc."],
        [
          "Make a payment to another Payoneer account (MAP).",
          "Missing MAP incoming payment",
          "payment review - payment not loaded",
        ],
        ["", "Increase MAP limit", "payment review - payment not loaded"],
        ["", "", ""],
        ["", "", ""],
        ["", "Cash back", "product activation - BLS, Card, GLPS etc."],
        ["", "Unable to use card", "product activation - BLS, Card, GLPS etc."],
        [
          "Payoneer Card",
          "Card review",
          "product activation - BLS, Card, GLPS etc.",
        ],
        ["", "Cancel card", "product activation - BLS, Card, GLPS etc."],
        [
          "",
          "Tracking card delivery status",
          "product activation - BLS, Card, GLPS etc.",
        ],
        ["", "Reissue new card", "product activation - BLS, Card, GLPS etc."],
        [
          "",
          "Increase card transaction limit",
          "product activation - BLS, Card, GLPS etc.",
        ],
        ["", "", ""],
        ["", "", ""],

        [
          "Billing Services",
          "Increase BLS Limit",
          "product activation - BLS, Card, GLPS etc.",
        ],
        ["", "Re-enable BLS", "product activation - BLS, Card, GLPS etc."],
        ["", "", ""],
        ["", "", ""],
      ],
    },
  },
];
const linkify = (text: string) => {
  const urlRegex =
    /((https?:\/\/|www\.)[^\s)]+)|(mailto:[^\s)]+)/gi;
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (!part) return null;
    const looksLikeUrl =
      part.startsWith("http") || part.startsWith("www.");
    const isMailto = part.startsWith("mailto:");
    if (looksLikeUrl) {
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="underline">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Supporting Your Referred
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Account Holders
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
            <div className="max-w-5xl mx-auto flex sm:flex-row sm:items-center gap-2 px-4 sm:px-6 lg:px-0 py-2">
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
                  Table of Content
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate max-w-full sm:max-w-xs md:max-w-md">
                  Supporting Your Referred Account Holders (AHs)
                </span>
              </nav>
            </div>
          </section>


          {/* ---------- Section 1: FAQs ---------- */}
          <section id="faqs" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10">
              <div className="mt-0">
                <h2 className="text-[25px] font-bold text-gray-900">
                  Reseller Operations External FAQ Guide
                </h2>
                <p className="mt-2 text-[#878787] text-[14px] max-w-2xl">
                  This document is designed to guide reseller partners on how to
                  raise operational support queries through the official
                  Reseller Operations Support Request Form. Please refer to the
                  FAQs below to navigate the most common queries and
                  resolutions.
                </p>
              </div>
            </div>
          </section>

          <section className="scroll-mt-28 space-y-6">
            {(faqs as FAQ[]).map((faq, index) => {
              const key = `faqs-${index}`;
              const isOpen = !!faqOpenMap[key];
              return (
                <div
                  key={key}
                  className="border border-[#eee] rounded-[12px] px-6 py-4 bg-white shadow-sm"
                >
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleFaq(key)}
                  >
                    <h3 className="text-[16px] font-semibold text-gray-900 max-w-[90%] leading-snug">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(to bottom right, #5f6df3, #aa5cc3)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <Image
                        src={Togglebtn}
                        alt="Toggle FAQ"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-4">
                      {faq.type === "table" && "tableData" in faq && (
                        <div className="overflow-x-auto rounded-2xl text-sm">
                          {faq.subHeading && (
                            <p className="mb-4 text-[14px] text-[#555] font-medium">
                              {faq.subHeading}
                            </p>
                          )}
                          <table className="min-w-full text-[10px] text-[#878787]">
                            <thead className="bg-[#EFEFEF] text-[#878787]">
                              <tr>
                                {faq.tableData.headers.map((header, i) => (
                                  <th
                                    key={i}
                                    className="px-4 py-2 font-semibold text-left"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {faq.tableData.rows.map((row, rowIndex) => (
                                <tr
                                  key={rowIndex}
                                  className="even:bg-[#fafafa]"
                                >
                                  {row.map((cell, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    {faq.type === "list" && "answers" in faq && (
                      <>
                        {faq.answers.map((ans, i) => (
                          <div
                            key={i}
                            className="pl-5 space-y-2 text-[14px] text-[#555] leading-relaxed"
                          >
                            {linkify(ans)}
                          </div>
                        ))}
                      </>
                    )}
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          {/* ---------- Section 2: Support Ticket Questionnaire ---------- */}
          <section id="support-ticket-questionnaire" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-0 lg:grid-cols-0 gap-10">
              <div className="mt-0">
                <h2 className="text-[25px] font-bold text-gray-900">
                  Support Ticket Questionnaire
                </h2>
                <div className="flex justify-between items-center max-w-5xl">
                  <p className="text-gray-900 text-[20px] font-semibold">
                    Questionnaire
                  </p>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline font-medium"
                  >
                    Questionnaire
                  </a>
                </div>
                <h2 className="text-[25px] font-bold text-gray-900">
                  Nature of Support Tickets
                </h2>
                <p className="text-gray-900 text-[20px] font-semibold">
                  Some description
                </p>
              </div>
            </div>
          </section>

          <section className="scroll-mt-28 space-y-6">
            {(faqsSectionTwo as FAQ[]).map((faq, index) => {
              const key = `faqs2-${index}`;
              const isOpen = !!faqOpenMap[key];
              return (
                <div
                  key={key}
                  className="border border-[#eee] rounded-[12px] px-6 py-4 bg-white shadow-sm"
                >
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleFaq(key)}
                  >
                    <h3 className="text-[16px] font-semibold text-gray-900 max-w-[90%] leading-snug">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(to bottom right, #5f6df3, #aa5cc3)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <Image
                        src={Togglebtn}
                        alt="Toggle FAQ"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-4">
                      {faq.type === "table" && "tableData" in faq && (
                        <div className="overflow-x-auto rounded-2xl text-sm">
                          {faq.subHeading && (
                            <p className="mb-4 text-[14px] text-[#555] font-medium">
                              {faq.subHeading}
                            </p>
                          )}
                          <table className="min-w-full text-[10px] text-[#878787]">
                            <thead className="bg-[#EFEFEF] text-[#878787]">
                              <tr>
                                {faq.tableData.headers.map((header, i) => (
                                  <th
                                    key={i}
                                    className="px-4 py-2 font-semibold text-left"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {faq.tableData.rows.map((row, rowIndex) => (
                                <tr
                                  key={rowIndex}
                                  className="even:bg-[#fafafa]"
                                >
                                  {row.map((cell, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {faq.type === "list" && "answers" in faq && (
                        <>
                          {faq.answers.map((ans, i) => (
                            <p
                              key={i}
                              className="text-[14px] text-[#555] leading-relaxed mb-2"
                            >
                              {linkify(ans)}
                            </p>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
}
