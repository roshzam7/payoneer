"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Sectionthree1 from "../assets/images/Sectionthree/Sectionthree1.png";
import Sectionthree2 from "../assets/images/Sectionthree/Sectionthree2.png";
import Sectionthree3 from "../assets/images/Sectionthree/Sectionthree3.png";
import Sectionthree4 from "../assets/images/Sectionthree/Sectionthree4.png";
import Footer from "../components/Footer";
import Newpage from "../newpage/page";


const topics = [
  {
    title: "Sales Enablement Tools",
    slug: "sales-enablement-tools",
  },
  {
    title: "Marketing & Reselling Guidelines",
    slug: "reselling-guidelines",
  },
  {
    title: "Customer Personas",
    slug: "customer-personas",
  },
    {
    title: "Co-Branded or Dedicated Landing Pages",
    slug: "co-branded-or-dedicated-landing-pages",
  },
      {
    title: "Payoneer Pricing",
    slug: "payoneer-pricing",
  },
];

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

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

  return (
    <div>
      <Navbar />


      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-[400px] sm:h-[500px] flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-12 leading-snug">
            Partner
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Activation & Enablement
            </span>
          </h1>
        </div>
      </section>

      <div className="flex">
        {/* Sidebar */}
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

        {/* Page Content */}
        <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-20 bg-white">
          <section
            aria-label="Breadcrumb"
            className="border-b border-white/10 bg-white text-black backdrop-blur"
          >
            <div className="max-w-7xl mx-auto flex h-6 items-center gap-3 px-4 sm:px-6 lg:px-0">
              {/* Back button */}
              <button
                type="button"
                onClick={() => router.push("/")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black"
                aria-label="Back"
                title="Back"
              >
                <Image
                  src={backBtn}
                  alt="Back"
                  width={32}
                  height={32}
                  className="mt-0"
                />
              </button>

              {/* Crumb text */}
              <nav className="flex items-center gap-2 text-sm text-[#878787]">
                <span
                  className="cursor-pointer font-medium "
                  onClick={() => router.push("/")}
                >
                  Table of Content
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate">
                  Partner Activation & Enablement
                </span>
              </nav>
            </div>
          </section>

          <section id="sales-enablement-tools" className="scroll-mt-24 mb-0">
            <h2 className="text-[48px] font-bold text-gray-900 mt-10">
              Sales Enablement Tools
            </h2>
            <div className="mt-8 w-full">
              <Image
                src={Sectionthree1}
                alt="Reseller Program Phases"
                width={800}
                height={450}
                className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
              />
            </div>
          </section>

          <section id="kyc-process-explained" className="scroll-mt-28 mb-0">
            <div className="grid grid-cols-1 gap-8">
              <div>
                {/* Pitch Decks & Sales Scripts */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                  Pitch Decks & Sales Scripts
                </h3>
                <p className="text-[#878787] text-sm sm:text-base mt-2 mb-4">
                  View the Payoneer Global Payments Training Document to gain an
                  overview of our international reach, available payment
                  solutions, and step-by-step guidance on opening an account.
                </p>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                 <a
                    href="/files/Payoneer-Global-Payments-Training-Document.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Payoneer Training Document
                  </a>
                </p>

                {/* Training Webinars & Certifications */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                  {" "}
                  Training Webinars & Certifications
                </h3>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  This certificate recognizes Authorised Channel Partners of Payoneer. It confirms your status as a trusted partner, authorized to promote Payoneer&apos;s global payment solutions. <br />
                  Please find a sample certificate, and to request one, please raise a request at support@payoneerpartnerships.com.
                </p>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  <a
                    href="/files/Partnership_Certificate-Sample.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Sample Certificate
                  </a>
                </p>

                {/* Brand Positioning Guide */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                  {" "}
                  Brand Positioning Guide
                </h3>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  View the brand battlecards to gain a breakdown of
                  Payoneer&apos;s core features and see how our services compare
                  with competitors, Wio and 3S Money.
                </p>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4 space-x-4">
           <a
                    href="/files/Payoneer_wio_Battlecard.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Payoneer vs Wio Battlecard
                  </a>
                          <a
                    href="/files/Payoneer_3s_money_battlecard.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Payoneer vs 3S Money Battlecard
                  </a>
                </p>

                {/* Marketing & Reselling Guidelines */}
                <h3
                  id="reselling-guidelines"
                  className="scroll-mt-24 text-2xl sm:text-4xl font-semibold text-gray-900 mt-10 mb-4"
                >
                  Marketing & Reselling Guidelines
                </h3>
                <Image
                  src={Sectionthree2}
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl border border-gray-100 shadow-sm mt-4 mb-8"
                />

                {/* Branding & Messaging Compliance */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                  {" "}
                  Branding & Messaging Compliance
                </h3>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  View the Payoneer Design Guidelines to gain a comprehensive
                  understanding of our brand&apos;s visual identity. This
                  document provides detailed examples of the correct use of
                  logos, color palettes, typography, imagery, tone of voice, and
                  other design variations.
                </p>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  <a className="text-blue-600 hover:underline" target="_blank" href="https://brand.payoneer.com/d/JRx9ZTaTPq6K/guidelines#/design-guidelines/overview">
                    View Payoneer Design Guidelines
                  </a>
                </p>

                {/* Do's and Don'ts */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-10 mb-4">
                  {" "}
                  Do&apos;s and Don&apos;ts in Promotions
                </h3>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  Refer to the Do&apos;s & Dont&apos;s Guidelines to understand
                  how to accurately and effectively promote Payoneer. This
                  document outlines approved messaging, visual assets, and key
                  compliance points to ensure all promotional efforts align with
                  brand standards.
                </p>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  <a className="text-blue-600 hover:underline" href="">
                    View Do&apos;s and Dont&apos;s Guidelines
                  </a>
                </p>

                {/* Personas */}
                <h2
                  id="customer-personas"
                  className="text-2xl sm:text-4xl font-bold text-gray-900 scroll-mt-24 mt-10 mb-4"
                >
                  Personas
                </h2>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  View the customer profiles to gain an understanding of their
                  specific requirements, preferred payment functionalities, and
                  how they engage with Payoneer&apos;s products.
                </p>
                <Image
                  src={Sectionthree3}
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl mt-4 mb-8"
                />
                <Image
                  src={Sectionthree4}
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl mt-4 mb-8"
                />

                {/* Restricted Businesses */}
                <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mt-10 mb-4">
                  Business we can&apos;t support
                </h2>
                <p className="text-[#878787] text-xs sm:text-sm mt-2 mb-4">
                  To protect our network and stay compliant, certain high-risk
                  or restricted businesses are not eligible for Payoneer
                  services.
                </p>
              </div>
            </div>
          </section>

          {/* //c */}

          <section className="scroll-mt-28  rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl">
              {[
                [
                  "Any criminal or illegal act earnings.",
                  "Adult Entertainment Services",
                  "Art, antiquity and collectibles",
                  "Auction houses or antiques",
                  "Charities, Donations & Trusts",
                  "Chemicals (Of Any Kind)",
                  "Collection agencies",
                  "Counterfeited Products",
                  "Cryptocurrency exchanges, Crypto Earnings & Binary Options.",
                  "Dating Services",
                  "Domain registration & buying/ selling",
                  "Energy Industry like Crude Oil, Natural Gas, Petroleum, Diesel & Nuclear.",
                  "Fantasy Sports",
                  "Financial institutions",
                  "Finished Metal Products & Hardware",
                ],
                [
                  "Fish and seafood of any kind (fresh, frozen or dry)",
                  "Gambling, Betting & Fantasy Sports",
                  "Insurance sales and services",
                  "Intrusive beauty and cosmetic products",
                  "Jewelry & bullion trading",
                  "Maritime Crewing & Staffing",
                  "Medical or healthcare services",
                  "Money exchange",
                  "Multi-level marketing (MLM)",
                  "Pharmaceuticals, Medicine, Drugs, Fertilizers & Tobacco",
                  "Prepaid cards or gift card/gift certificates",
                  "Raw & Semi-processed Steel & Iron",
                  "Real Estate sales, Investments & Trading.",
                  "Trusts or funds",
                  "Venture Capital and investments",
                  "Web Hosting & VPS",
                ],
              ].map((list, idx) => (
                <div
                  key={idx}
                  className="rounded-[12px] border border-gray-200 p-6 bg-white shadow-md"
                >
                  <ul className="list-disc list-outside pl-5 space-y-2 text-xs sm:text-sm text-[#878787]">
                    {list.map((item, i) => (
                      <li key={i} className="-ml-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
           <section
            id="co-branded-or-dedicated-landing-pages"
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 h-screen"
          >
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Coming Soon..
            </h2>
          </section>
          <Newpage />
        </main>
      </div>
    <Footer />
    </div>
  );
}
