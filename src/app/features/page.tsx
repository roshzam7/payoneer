"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/Hero-header.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Footer from "../components/Footer";
import Freelancers from "../assets/images/Freelancers.png";
import commercesellers from "../assets/images/E-commerce-sellers.png";
import SMBbusinesses from "../assets/images/SMB-businesses.png";
import Globalteams from "../assets/images/Global-teams.png";

const partnerCards = [
  {
    image: Freelancers,
    title: "Freelancers & remote workers",
    link: "",
    bullets: [
      "Receive payments from international clients without chasing complex wire transfers.",
      "Get paid in multiple currencies and withdraw to your local bank when exchange rates make sense",
    ],
  },
  {
    image: commercesellers,
    title: "E-commerce sellers",
    link: "",
    bullets: [
      "Use Payoneer Checkout and multi-currency balances to sell globally and manage foreign revenue in one place.",
      "Pay suppliers and services abroad directly from your Payoneer balance.",
    ],
  },
  {
    image: SMBbusinesses,
    title: "SMB businesses",
    link: "",
    bullets: [
      "Pay suppliers, partners, and contractors worldwide without heavy bank wire fees.",
      "Use working capital options to fund inventory, payroll, or expansion when cash flow is tight.",
    ],
  },
  {
    image: Globalteams,
    title: "Global teams",
    link: "",
    bullets: [
      "Batch and scheduled payments make it easier to pay distributed teams on time.",
      "Role-based access helps finance teams control who can trigger or approve payouts.",
    ],
  },
];

const topics = [
  {
    title: "Overview",
    slug: "overview",
  },
  {
    title: "Key features & benefits",
    slug: "features",
  },
  {
    title: "Business tools",
    slug: "business-tools",
  },
  {
    title: "Who is it for?",
    slug: "who-its-for",
  },
  {
    title: "Learn more",
    slug: "learn-more",
  },
];

export default function PayoneerPaymentsPage() {
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

      {/* HERO */}
      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-screen sm:h-screen flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight **leading-normal** text-gray-900">
            Simplify your <br />
            <span className="block  bg-clip-text text-gray-900">
              international payments
            </span>
          </h1>
        </div>
      </section>

      <div className="flex">
        {/* SIDEBAR NAV */}
        <aside className="sticky top-24 h-screen w-[320px] xl:w-[400px] p-10 border-r hidden lg:block bg-white">
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

        {/* MAIN */}
        <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-20 bg-white">
          {/* BREADCRUMB */}
          <section
            aria-label="Breadcrumb"
            className="border-b border-white/10 bg-white text-black backdrop-blur"
          >
            <div className="max-w-5xl mx-0 flex sm:flex-row sm:items-center gap-2 px-4 sm:px-6 lg:px-2 py-2">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black"
                aria-label="Back"
                title="Back"
              >
                <Image src={backBtn} alt="Back" width={32} height={32} />
              </button>

              <nav className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm text-[#878787]">
                <span
                  className="cursor-pointer font-medium hover:underline"
                  onClick={() => router.push("/")}
                >
                  Home
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate max-w-full sm:max-w-xs md:max-w-md">
                  Payoneer - International Payments
                </span>
              </nav>
            </div>
          </section>

          {/* OVERVIEW */}
          <section
            id="overview"
            className="scroll-mt-28 mb-4 space-y-4 max-w-3xl"
          >
            <p className="text-[#878787] text-[14px] leading-relaxed">
              With Payoneer, clients and customers can pay you from anywhere in
              the world as if you had a local bank account. Multi-currency
              receiving accounts, flexible payment options, and easy withdrawals
              make it a solid fit for freelancers, e-commerce sellers, SMBs, and
              global teams.
            </p>
          </section>
          <section
            id="overview"
            className="scroll-mt-28 mb-4 space-y-4 max-w-3xl"
          >
            <h2 className="text-[25px] font-bold text-gray-900">
              Simplify how you get paid worldwide
            </h2>
            <p className="text-[#878787] text-[14px] leading-relaxed">
              Payoneer lets you receive payments from international clients and
              platforms as if you had local bank accounts in multiple countries.
              You can hold balances in different currencies, choose how you get
              paid, and withdraw funds to your local bank when it suits your
              cash flow. On top of that, you get tools that help you manage
              global payouts, automate flows, and access working capital.
            </p>
          </section>

          {/* KEY FEATURES */}
          <section
            id="features"
            className="scroll-mt-28 space-y-8 max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#ffffff] to-[#f8f9fc] border border-gray-100 shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-[#5f6df3] to-[#aa5cc3] mb-4">
                1. Global reach and multi-currency accounts
              </h3>
              <div className="space-y-3 text-sm text-[#555] leading-relaxed">
                <p>
                  • Available in 190+ countries so you can work with clients and
                  platforms almost anywhere.
                </p>
                <p>
                  • Hold and manage balances in multiple currencies: USD, EUR,
                  GBP, JPY, AUD, CAD, SGD, HKD, AED, MXN.
                </p>
                <p>
                  • Get paid via “virtual bank accounts” (receiving accounts) in
                  major currencies, so clients can pay you like a local.
                </p>
                <p>
                  • Smart global routing helps with efficient cross-border
                  payments.
                </p>
                <p>
                  • Backed by strong banking partnerships for reliability and
                  uptime.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ffffff] to-[#f8f9fc] border border-gray-100 shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-[#5f6df3] to-[#aa5cc3] mb-4">
                2. Pay and get paid with flexibility
              </h3>
              <div className="space-y-3 text-sm text-[#555] leading-relaxed">
                <p>
                  • Accept payments from clients via cards, ACH (US), and local
                  bank transfers so they can pick what works for them.
                </p>
                <p>
                  • Send simple payment requests through a shareable link for
                  quick approvals and payments.
                </p>
                <p>• Transfer funds to bank accounts in 190+ countries.</p>
                <p>
                  • Pay individuals or businesses with competitive FX rates.
                </p>
                <p>
                  • Order and use a physical or virtual card for online
                  purchases, ATMs, and day-to-day business expenses.
                </p>
                <p>
                  • Card requirements usually include a $100+ balance, advance
                  request, and proof of residence.
                </p>
              </div>
            </div>
          </section>

          {/* BUSINESS TOOLS */}
          <section
            id="business-tools"
            className="scroll-mt-28 space-y-8 max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#ffffff] to-[#f8f9fc] border border-gray-100 shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-[#5f6df3] to-[#aa5cc3] mb-4">
                3. Business tools to run global payouts
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm text-[#555] leading-relaxed">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Payoneer Checkout:</span> If
                    you run an online store, you can accept payments from
                    customers worldwide directly on your site.
                  </p>
                  <p>
                    <span className="font-semibold">Batch Payments:</span> Send
                    bulk payouts to contractors, partners, or affiliates in one
                    shot.
                  </p>
                  <p>
                    <span className="font-semibold">Scheduled Payments:</span>{" "}
                    Automate recurring payouts to suppliers or contractors so
                    you don&apos;t have to track dates manually.
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Role Management:</span> Add
                    team members with different permissions to handle payments
                    and approvals.
                  </p>
                  <p>
                    <span className="font-semibold">API integrations:</span>{" "}
                    Connect Payoneer to your systems to automate payments and
                    reporting.
                  </p>
                  <p>
                    <span className="font-semibold">
                      Accounting integrations:
                    </span>{" "}
                    Sync with your accounting tools to make reconciliation
                    easier.
                  </p>
                  <p>
                    <span className="font-semibold">Working capital:</span> Get
                    access to funds to buy inventory, pay contractors, and push
                    growth without waiting on payouts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHO IT'S FOR */}

          <section id="why-partner" className="scroll-mt-28 px-4 sm:px-6">
            <h1 className="text-[20px] sm:text-[48px] font-semibold text-gray-900">
              Why this matters to your clients or users
            </h1>
            <p className="mt-3 w-full text-[#878787] text-[13px] sm:text-[17px]">
              Partner with Payoneer to unlock global payouts, world-class
              infrastructure, and co-marketing opportunities. Empower your
              merchants and creators to scale internationally with seamless
              onboarding and localized compliance.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {partnerCards.map(({ image, title, link, bullets }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 shadow-gray-300"
                >
                  {/* Icon above title */}
                  <Image
                    src={image}
                    alt="Expand cross-border"
                    width={48}
                    height={48}
                    className="mt-4"
                  />
                  <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
                  <h3 className="mt-2 text-[20px] font-semibold text-gray-900">
                    {title}
                  </h3>
                  <span className="mt-2 block text-[11px] sm:text-[14px] font-medium bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {link}
                  </span>
                  <ul className="mt-4 text-[10px] sm:text-[14px] text-[#878787] space-y-2">
                    {bullets.map((b, i) => (
                      <li
                        key={i}
                        className="relative before:content-['•'] before:absolute before:left-0 before:text-[#878787] pl-3"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* how to */}
          <section id="how-to" className="scroll-mt-28 px-4 sm:px-0 mb-0">
            <h1 className="text-[20px] sm:text-[48px] font-semibold text-gray-900">
              How to..
            </h1>
          </section>
          {/* pdf */}
          <section
            id="keey-features"
            className="scroll-mt-10 sm:py-5 px-4 sm:px-6 mb-0 sm:mb-20 h-auto"
          >
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
              {/* PDF 1 */}
              <a
                href="/files/How-to-get-paid.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-1.png"
                  alt="How to get paid"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-get-paid
                  </span>
                </div>
              </a>

              {/* PDF 2 */}
              <a
                href="/files/How-to-track-and-cancel-payment-requests.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-2.png"
                  alt="Track and cancel payment requests"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-track-and-cancel-payment-requests
                  </span>
                </div>
              </a>

              {/* PDF 3 */}
              <a
                href="/files/How-to-see-fees.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-2.png"
                  alt="See fees"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-see-fees
                  </span>
                </div>
              </a>

              {/* PDF 4 */}
              <a
                href="/files/How-to-request-a-payment.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-1.png"
                  alt="Request a payment"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-request-a-payment
                  </span>
                </div>
              </a>

              {/* PDF 5 */}
              <a
                href="/files/How-to-make-a-payment-to-a-recipients-payoneer-account.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-2.png"
                  alt="Make payment to recipient"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-make-a-payment-to-a-recipients-payoneer-account
                  </span>
                </div>
              </a>

              {/* PDF 6 */}
              <a
                href="/files/How-to-enable-swift-wire-account.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-2.png"
                  alt="Enable SWIFT wire account"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-enable-swift-wire-account
                  </span>
                </div>
              </a>

              {/* PDF 7 */}
              <a
                href="/files/How-to-enable-local-receiving-accounts.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-1.png"
                  alt="Enable local receiving accounts"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-enable-local-receiving-accounts
                  </span>
                </div>
              </a>

              {/* PDF 8 */}
              <a
                href="/files/How-to-check-a-payments-status.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-2.png"
                  alt="Check payment status"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-check-a-payments-status
                  </span>
                </div>
              </a>

              {/* PDF 9 */}
              <a
                href="/files/Payoneer-mobile-app.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-2.png"
                  alt="Payoneer mobile app"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    Payoneer-mobile-app
                  </span>
                </div>
              </a>

              {/* PDF 10 */}
              <a
                href="/files/How-to-withdraw-funds-from-your-Payoneer-Account-to-your-bank-account.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-1.png"
                  alt="Withdraw funds"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How-to-withdraw-funds-from-your-Payoneer-Account-to-your-bank-account
                  </span>
                </div>
              </a>
            </div>
          </section>

          {/* LEARN MORE */}
          <section
            id="learn-more"
            className="scroll-mt-28 max-w-4xl mx-auto px-4 sm:px-0 py-10 text-center"
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Want to go deeper into limits, fees, and exact eligibility?
            </p>
            <p className="text-gray-700 text-sm">
              Learn more about the product and full details on{" "}
              <a
                href="https://www.payoneer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                payoneer.com
              </a>
              .
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
