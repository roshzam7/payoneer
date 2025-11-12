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
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

const personas = [
  {
    id: 1,
    alt: "Persona 1",
    src: Sectionthree3, // ← Use the imported image
  },
  {
    id: 2,
    alt: "Persona 2",
    src: Sectionthree4, // ← Use the imported image
  },
];

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? personas.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === personas.length - 1 ? 0 : prevIndex + 1
    );
  };

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
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-12 leading-snug">
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
            <div className="max-w-7xl mx-0 flex h-6 items-center gap-3 px-4 sm:px-6 lg:px-2">
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

          <section id="sales-enablement-tools" className="scroll-mt-28 mb-12">
            <div className="grid grid-cols-1 gap-10">
              {/* Header Section */}
              <div className="rounded-3xl p-8 sm:p-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  Sales Enablement Tools
                </h2>
                {/* <div className="mt-6 w-full flex justify-center">
                  <Image
                    src={Sectionthree1}
                    alt="Reseller Program Phases"
                    width={800}
                    height={450}
                    className="w-full max-w-5xl h-auto rounded-2xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div> */}
              </div>

              {/* Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Pitch decks & sales scripts
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    View the Payoneer Global Payments Training Document to gain
                    an overview of our international reach, available payment
                    solutions, and step-by-step guidance on opening an account.
                  </p>
                  <a
                    href="/files/Payoneer-Global-Payments-Training-Document.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
                  >
                    View Payoneer Training Document →
                  </a>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Training Webinars & Certifications
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                    This certificate recognizes Authorised Channel Partners of
                    Payoneer. It confirms your status as a trusted partner,
                    authorized to promote Payoneer&apos;s global payment
                    solutions.
                  </p>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    To request one, please raise a request at{" "}
                    <a
                      href="mailto:support@payoneerpartnerships.com"
                      className="text-blue-600 hover:underline hover:text-blue-700 transition-colors"
                    >
                      support@payoneerpartnerships.com
                    </a>
                    .
                  </p>
                  <a
                    href="/files/Partnership_Certificate-Sample.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
                  >
                    View Sample Certificate →
                  </a>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Brand Positioning Guide
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    View the brand battlecards to gain a breakdown of
                    Payoneer&apos;s core features and see how our services
                    compare with competitors, Wio and 3S Money.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-3">
                    <a
                      href="/files/Payoneer_wio_Battlecard.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
                    >
                      Payoneer vs Wio Battlecard →
                    </a>
                    <a
                      href="/files/Payoneer_3s_money_battlecard.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
                    >
                      Payoneer vs 3S Money Battlecard →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing & Reselling Guidelines */}
          <section
            id="marketing-reselling-guidelines"
            className="scroll-mt-28 mb-12"
          >
            <div className="grid grid-cols-1 gap-10">
              {/* Header Section */}
              <div className="rounded-3xl  p-8 sm:p-0">
                <h3
                  id="reselling-guidelines"
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2"
                >
                  Marketing & Reselling Guidelines
                </h3>
                {/* <Image
                  src={Sectionthree2}
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-2xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-[1.02]"
                /> */}
              </div>

              {/* Cards Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Branding & Messaging Compliance */}
                <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Branding & Messaging Compliance
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    View the Payoneer Design Guidelines to gain a comprehensive
                    understanding of our brand&apos;s visual identity. This
                    document provides detailed examples of the correct use of
                    logos, color palettes, typography, imagery, tone of voice,
                    and other design variations.
                  </p>
                  <a
                    className="inline-block text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
                    target="_blank"
                    href="https://brand.payoneer.com/d/JRx9ZTaTPq6K/guidelines#/design-guidelines/overview"
                  >
                    View Payoneer Design Guidelines →
                  </a>
                </div>

                {/* Do's and Don'ts */}
                <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Do&apos;s and Don&apos;ts in Promotions
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    Refer to the Do&apos;s & Don&apos;ts Guidelines to
                    understand how to accurately and effectively promote
                    Payoneer. This ensures all promotional efforts align with
                    brand standards.
                  </p>
                  <a
                    className="inline-block text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
                    href="/files/Payoneer-Dos-Donts.pdf"
                    target="_blank"
                  >
                    View Do&apos;s & Don&apos;ts Guidelines →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Personas */}

          <section className="scroll-mt-28 mb-0">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
                <h2
                  id="customer-personas"
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                >
                  Personas
                </h2>
                <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                  View the customer profiles to understand their requirements,
                  preferred payment functionalities, and engagement patterns.
                </p>

                {/* Slider Container */}
                <div className="relative w-full max-w-xl mx-auto flex items-center">
                  {/* Previous Button */}
                  <button
                    onClick={goToPrevious}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 mr-2"
                    aria-label="Previous persona"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>

                  {/* Image Display */}
                  <div className="overflow-hidden w-full rounded-2xl">
                    <Image
                      src={personas[currentIndex].src}
                      alt={personas[currentIndex].alt}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      width={800}
                      height={450}
                    />
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={goToNext}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ml-2"
                    aria-label="Next persona"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {personas.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-blue-600 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to persona ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Restricted Businesses */}
          {/* 
          <section className="scroll-mt-28  rounded-xl">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Businesses We Can’t Support
              </h2>
              <p className="text-[#666] text-sm sm:text-base leading-relaxed">
                To protect our network and maintain compliance, certain
                high-risk or restricted businesses are not eligible for Payoneer
                services.
              </p>
            </div>
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
          </section> */}

          <section
            id="co-branded-or-dedicated-landing-pages"
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 "
          >
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Coming Soon..
            </h2>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
