"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// reuse your existing components/assets
import Navbar from "../components/Navbar";
import PhoneMockup from "./../assets/images/pricing-header-1.png.webp";
import bgimage from "../assets/reseller-banner.png";

type FeeRow = { item: string; fee: string; note?: string };
type FeeGroup = { title: string; rows: FeeRow[] };

const sections = [
  { id: "get-paid", label: "Get paid" },
  { id: "pay-use", label: "Pay & use funds" },
  { id: "withdraw", label: "Withdraw" },
  { id: "other-fees", label: "Other fees" },
] as const;

/** CHANGE THESE VALUES to your real fees/content */
const DATA: Record<
  (typeof sections)[number]["id"],
  { intro?: string; groups: FeeGroup[] }
> = {
  "get-paid": {
    intro:
      "Receive from customers, marketplaces, and via local receiving details. Actual fees vary by country, currency, and corridor.",
    groups: [
      {
        title: "By another account holder",
        rows: [
          {
            item: "From another customer balance",
            fee: "Free",
            note: "Same-network transfer",
          },
        ],
      },
      {
        title: "Directly by your clients",
        rows: [
          {
            item: "Credit/debit card",
            fee: "Up to 3.99%*",
            note: "Country rules may add a fixed fee",
          },
          { item: "ACH bank debit (US)", fee: "1%" },
          {
            item: "Local bank / instant methods",
            fee: "1%–2.5%",
            note: "Method dependent",
          },
        ],
      },
      {
        title: "Marketplaces & networks",
        rows: [
          {
            item: "Partner platforms (Fiverr/Upwork/etc.)",
            fee: "Set by marketplace",
            note: "Check partner rates",
          },
        ],
      },
      {
        title: "Receiving accounts (USD/EUR/GBP/etc.)",
        rows: [
          {
            item: "Local currency of your primary region",
            fee: "Free",
            note: "E.g., EUR-in-EU",
          },
          {
            item: "Other currencies / corridors",
            fee: "Fixed or 1%",
            note: "Min fee may apply",
          },
        ],
      },
    ],
  },
  "pay-use": {
    intro:
      "Pay suppliers and teams from your balance, or use a business card for expenses.",
    groups: [
      {
        title: "Pay from your balance",
        rows: [
          {
            item: "To another account holder (cross-border)",
            fee: "Up to 1% (min applies)",
          },
          {
            item: "To another account holder (same country USD/EUR/GBP)",
            fee: "Flat ~$1.50/€1.50/£1.50",
          },
          {
            item: "To recipient’s bank (non-customer)",
            fee: "Up to 3%*",
            note: "Lower fees for higher volume",
          },
        ],
      },
      {
        title: "Business card (virtual/physical)",
        rows: [
          {
            item: "Card issuance",
            fee: "$0–$20",
            note: "Shipping extra if applicable",
          },
          {
            item: "Purchases (same currency)",
            fee: "Free",
            note: "Supported countries only",
          },
          { item: "Purchases (FX involved)", fee: "Up to ~3.5%" },
          { item: "Cross-border purchase fee", fee: "Up to ~1.8%" },
          {
            item: "ATM cash withdrawal",
            fee: "$3.15 / €2.50 / £1.95 + ATM fee",
          },
        ],
      },
    ],
  },
  withdraw: {
    intro:
      "Move funds from your balance to your local bank. Timings and fees vary by bank/route.",
    groups: [
      {
        title: "Local withdrawals",
        rows: [
          {
            item: "Same-currency local bank",
            fee: "$1.50–$3.00",
            note: "Varies by destination",
          },
          {
            item: "FX withdrawal to different currency",
            fee: "FX margin + withdrawal fee",
            note: "~0.5%–2.0% FX",
          },
        ],
      },
      {
        title: "High-volume tier (example)",
        rows: [
          {
            item: "Over $50k monthly local withdrawals",
            fee: "~0.5% of amount",
            note: "Illustrative threshold",
          },
        ],
      },
    ],
  },
  "other-fees": {
    intro: "Occasional fees that may apply depending on activity and region.",
    groups: [
      {
        title: "General",
        rows: [
          { item: "Card replacement", fee: "$9.95–$12.95" },
          { item: "Balance inquiry at ATM", fee: "$1.00 / €0.87 / £0.65" },
          {
            item: "Wire receiving (SWIFT)",
            fee: "$7–$15",
            note: "By corridor",
          },
          {
            item: "FX between balances",
            fee: "~0.5%–2.0%",
            note: "Margin over mid-market",
          },
        ],
      },
      {
        title: "Edge cases",
        rows: [
          {
            item: "Disputes / chargebacks",
            fee: "Varies",
            note: "Method & region dependent",
          },
          {
            item: "Inactivity / compliance",
            fee: "Varies",
            note: "Case-by-case",
          },
        ],
      },
    ],
  },
};

export default function PricingPage() {
  const router = useRouter();
  const [active, setActive] =
    useState<(typeof sections)[number]["id"]>("get-paid");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className="relative border-b border-gray-200"
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-purple-100/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Payoneer Fees.
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg">
              Our goal is to help you keep more of what your business earns.
              That&apos;s why we work hard to keep our pricing low, and whenever
              possible, completely free.
            </p>
            <div className="mt-8">
              <a
                href="#get-started"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black transition"
              >
                Open your free account
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={PhoneMockup}
              alt="Phone showing balances"
              className="w-[320px] lg:w-full drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* TOP ANCHOR NAV (sticky) */}
      <div className="z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 sm:py-6">
          <nav className="flex justify-center items-center text-sm font-medium text-gray-600">
            {sections.map((s, i) => (
              <div key={s.id} className="relative flex items-center">
                {/* Left border (show for all, adjust height here) */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-px bg-gray-300"></span>

                <a
                  href={`#${s.id}`}
                  className={`px-16 py-3 transition ${
                    active === s.id
                      ? "text-gray-900 font-semibold"
                      : "hover:text-gray-900"
                  }`}
                >
                  {s.label}
                </a>

                {/* Right border (only on last item) */}
                {i === sections.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-px bg-gray-300"></span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* SECTIONS */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Get Paid */}
        <section>
          <section
            id="get-paid"
            className="max-w-6xl mx-auto px-4 sm:px-6 py-10 scroll-m-16"
          >
            <div>
              <h3 className="text-[36px] text-center font-semibold text-gray-900">
                Get Paid
              </h3>
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            {/* Section wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Left side */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  By another Payoneer customer
                </h3>
                <p className="mt-2 text-gray-600">
                  Receive payments from another Payoneer customer&apos;s balance
                  for free.
                </p>
              </div>

              {/* Right side */}
              <div>
                <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  FREE
                </span>
                <p className="mt-2 text-gray-600">EUR, USD, GBP, and more.</p>
              </div>

              {/* Vertical divider */}
              <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
            </div>
          </section>
          {/*  */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
              {/* Left side */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Directly by your clients
                </h3>
                <p className="mt-2 text-gray-600">
                  Send your clients payment requests which they can pay via
                  credit card, ACH bank debit, and direct bank payments. They
                  can also pay you via receiving accounts, see below
                </p>
              </div>

              {/* Right side */}
              <div>
                <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                  Up to 3.99%*
                </span>
                <p className="mt-2 text-gray-600">
                  Credit card (all currencies)
                </p>
                <p className="mt-2 text-gray-600">
                  * In certain countries, an additional fix fee of 0.49$ will be
                  added to the above rate
                </p>
                <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                  1%
                </span>
                <p className="mt-2 text-gray-600">ACH bank debits (US only)</p>
                <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                  3.99% + $0.49
                </span>
                <p className="mt-2 text-gray-600">PayPal (US only)</p>
              </div>

              {/* Vertical divider */}
              <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
            </div>
          </section>

          {/*  */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10  rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
              {/* Left side */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Directly by marketplaces and networks
                </h3>
                <p className="mt-2 text-gray-600">
                  Get paid directly into your Payoneer account by Wish, Fiverr,
                  Upwork, Airbnb, and more than 2,000 more of the world&apos;s
                  top marketplaces, platforms, and networks that have partnered
                  with us. Treat yourself to a seamless payment experience.
                </p>
              </div>

              {/* Right side */}
              <div>
                <p className="mt-2 text-gray-600"></p>
                <p className="mt-2 text-gray-600">
                  Fees set by each marketplace, platform, and network vary.
                  Please check with them to get exact rates.
                </p>
              </div>

              {/* Vertical divider */}
              <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
              {/* Left side */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Via your receiving accounts
                </h3>
                <p className="mt-2 text-gray-600">
                  Need a local bank account for a marketplace or client? Use
                  your Payoneer receiving accounts like a local bank account in
                  the country and currency you get paid - USD, EUR, GBP, and
                  more. We can also support SWIFT (wire) payments to keep things
                  consolidated.
                </p>
              </div>

              {/* Right side */}
              <div>
                <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  FREE
                </span>
                <p className="mt-2 text-gray-600">
                  When receiving funds in the local currency of your primary
                  location (e.g., EUR in Europe, GBP in the UK).
                </p>

                <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                  Fixed fee OR 1% fee
                </span>
                <p className="mt-2 text-gray-600">
                  (depending on the amount received)
                </p>
                <p className="mt-2 text-gray-600">
                  For all other currencies (e.g., receiving USD in Europe)
                </p>
                <p className="mt-2 text-gray-600">
                  * Some countries may be exempt from the fee <br />
                  ** Minimum fee may apply
                </p>
              </div>

              {/* Vertical divider */}
              <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
            </div>
          </section>
        </section>
        {/* ay and use funds */}
        <section>
          <section
            id="pay-use"
            className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Pay and use funds
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Paying suppliers, employees, and contractors is easy, flexible,
              and cost-effective with Payoneer.
            </p>

            {/* Highlighted text */}
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
              Directly from your Payoneer balance
            </h3>

            {/* Body */}
            <p className="text-gray-700 text-base leading-relaxed">
              Your earnings from clients and marketplaces will land in your
              Payoneer balance. From there you can pay people and organizations
              directly with the following fees:
            </p>
          </section>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            {/* Section wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Left side */}

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  If recipient has a Payoneer account
                </h3>
                <p className="mt-2 text-gray-600">
                  Payments from your Payoneer balance to a recipient&apos;s
                  Payoneer account.
                </p>
              </div>

              {/* Right side */}
              <div>
                <p className="mt-2 text-gray-600">
                  For payments made to recipients from a different country than
                  you, up to 1% of the transaction amount with a minimum fee of
                  up to 4.00 USD.
                  <br />
                  <br />
                </p>
                <p className="mt-2 text-gray-600">
                  For payments made in USD, EUR, or GBP to recipients from the
                  same country as you, a flat fee of up to 4.00 USD/EUR/GBP*
                  respectively, will be applied per transaction
                  <br />
                  <br />
                </p>
                <p className="mt-2 text-gray-600 text-[10px]">
                  * For payments in other currencies, the exact fee will be
                  presented to you on screen before making the payment.
                  <br />
                </p>
              </div>

              {/* Vertical divider */}
              <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
              {/* Left side */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  If recipient doesn&apos;t have a Payoneer account
                </h3>
                <p className="mt-2 text-gray-600">
                  If the recipient is not a Payoneer customer, you can still pay
                  them directly from your Payoneer balance to their bank account
                  via bank transfer.
                  <br />
                  <br />A lower fee is available for higher-earning customers.
                </p>
              </div>

              {/* Right side */}
              <div>
                <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Up to 3%
                </span>
                <p className="mt-2 text-gray-600">of transaction amount</p>

                <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                  Fixed fee OR 1% fee
                </span>
                <p className="mt-2 text-gray-600">
                  (depending on the amount received)
                </p>
                <p className="mt-2 text-gray-600">
                  For all other currencies (e.g., receiving USD in Europe)
                </p>
                <p className="mt-2 text-gray-600">
                  * Some countries may be exempt from the fee <br />
                  ** Minimum fee may apply
                </p>
              </div>

              {/* Vertical divider */}
              <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
            </div>
          </section>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Left side */}

            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                For customers located in the USA, United Kingdom or European
                Union
              </h3>
              <p className="mt-2 text-gray-600">
                For payments to a recipient&apos;s bank account, in local
                currency, when the total amount of withdrawals and payments made
                in a single calendar month is up to 50,000 USD, GBP or EUR.
              </p>
              <p className="mt-2 text-gray-600">If the bank account:</p>
              <ul className=" text-[15px] space-y-2 text-gray-600 text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>Is in the same currency as your balance and</li>
                <li>
                  Is in a country where the withdrawing currency is the local
                  currency and
                </li>
                <li>
                  Is in the same country that you have listed in your Payoneer
                  account
                </li>
              </ul>
              <p className="mt-2 text-gray-600">
                Example: Payoneer account registered in USA -{">"} USD balance -
                {">"} USD bank account, where the recipients bank is in the USA
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                Up to 3%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                USD to USD payments
                <br />
                <br />
                <br />
              </p>

              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                1.50 EUR
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                EUR to EUR payments <br />
                <br />
                <br />
              </p>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                1.50 EUR
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                GBP to GBP payments <br />
                <br />
                <br />
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Left side */}

            <div className="flex flex-col justify-center">
              <p className="mt-2 text-gray-600">
                For customers located in the USA, United Kingdom or European
                Union
              </p>
              <p className="mt-2 text-gray-600">If the bank account:</p>
              <ul className=" text-[15px] space-y-2 text-gray-600 text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>Is in the same currency as your balance and</li>
                <li>
                  Is in a country where the withdrawing currency is the local
                  currency and
                </li>
                <li>
                  Is in the same country that you have listed in your Payoneer
                  account
                </li>
              </ul>
              <p className="mt-2 text-gray-600">
                Example: Payoneer account registered in USA -{">"} USD balance -
                {">"} USD bank account, where the recipients bank is in the USA
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                0.5%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                of total withdrawal amount
                <br />
                USD to USD withdrawal
                <br />
                <br />
              </p>

              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                0.5%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                of total withdrawal amount
                <br />
                EUR to EUR withdrawal
                <br />
                <br />
              </p>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                0.5%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                of total withdrawal amount
                <br />
                GBP to GBP withdrawal
                <br />
                <br />
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div>
            <p className="mt-2 text-gray-600">
              Example: You withdraw $40,000 USD on 5th of January and pay a flat
              fee of $1.50. On 10th January you make a payment to a
              recipient&apos;s bank account for $10,000 and pay a flat fee of
              $1.50 ($50,000 cumulative month-to-date). On the 20th January you
              withdraw $1,000 and pay a $5 fee (at the new rate of 0.5% for
              transactions above $50,000 in a calendar month). At the beginning
              of the next calendar month, the threshold resets.
            </p>
          </div>
        </section>
        <section
          id="pay-and-use-funds"
          className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Not with Payoneer? Not a problem.
          </h3>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Left side */}

            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Pay a Payoneer customer for their business services
              </h3>
              <p className="mt-2 text-gray-600">
                Millions of suppliers, freelancers, and other contractors get
                paid with Payoneer. You can pay any of them via credit card,
                local bank transfer, ACH bank debit, or direct bank payment at
                competitively low rates.
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                Up to 3.99%*
              </span>
              <p className="mt-2 text-gray-600 font-bold">Credit card</p>
              <p className="mb-2 text-gray-600 ">
                * In certain countries, an additional fix fee of 0.49$ will be
                added to the above rate
                <br />
              </p>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                1%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                ACH bank debit (US only)
              </p>

              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                3.99% + $0.49
              </span>
              <p className="mt-2 text-gray-600 font-bold">PayPal (US only)</p>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                1%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                Direct bank payment (UK only)
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            The Payoneer card
          </h3>
          <p className="text-gray-600 mb-6">
            The Payoneer card makes it easy to use your Payoneer funds globally.
            You can make business purchases, pay for advertising, buy goods and
            business services online or in stores, and withdraw funds at ATMs.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl">
              {/* Header */}
              <thead>
                <tr className="bg-[#ffffff] text-gray-900 text-left text-sm">
                  <th className="px-4 py-3 font-semibold ">Fee type</th>
                  <th className="px-4 py-3 font-semibold">Fee</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-sm text-gray-900">
                <tr className="border-0">
                  <td className="px-4 py-3 font-medium">
                    Card delivery (standard delivery)
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      FREE
                    </span>
                  </td>
                </tr>

                <tr className="bg-[#ffffff]">
                  <td className="px-4 py-3 font-medium">
                    Card delivery with express shipping (via DHL)
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      40.00 USD
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">
                    Annual card fees, first card
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      29.95 USD
                    </span>
                  </td>
                </tr>

                <tr className="bg-[#ffffff]">
                  <td className="px-4 py-3 font-medium">
                    Additional cards in any currency
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      FREE
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">
                    Transactions in the same currency as your card, in supported
                    countries*
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      FREE
                    </span>
                  </td>
                </tr>

                <tr className="bg-[#ffffff]">
                  <td className="px-4 py-3 font-medium">
                    Transactions involving currency conversion
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      UP TO 3.5%
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">
                    Transactions where merchant country is different from
                    card-issuing country (cross-border fee)
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      UP TO 1.8%
                    </span>
                  </td>
                </tr>

                <tr className="bg-[#ffffff]">
                  <td className="px-4 py-3 font-medium">
                    ATM: Withdrawals (cash advance)
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      3.15 USD
                    </span>{" "}
                    /{" "}
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      2.50 EUR
                    </span>{" "}
                    /{" "}
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      1.95 GBP
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">Balance inquiry</td>
                  <td className="px-4 py-3 font-semibold">
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      1.00 USD
                    </span>{" "}
                    /{" "}
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      0.87 EUR
                    </span>{" "}
                    /{" "}
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      0.65 GBP
                    </span>
                  </td>
                </tr>

                <tr className="bg-[#ffffff]">
                  <td className="px-4 py-3 font-medium">Card replacement</td>
                  <td className="px-4 py-3 font-semibold">
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      12.95 USD
                    </span>{" "}
                    /{" "}
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      9.95 EUR
                    </span>{" "}
                    /{" "}
                    <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                      9.95 GBP
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-6">
            *The Payoneer Commercial Mastercard program offers 2 types of card
            services: the Payoneer Business Premium Debit Mastercard® issued by
            Payoneer Europe Limited under a license by Mastercard and the
            Corporate Purchasing Mastercard issued by First Century Bank, N.A
            pursuant to a license by Mastercard and provided by Payoneer Inc. to
            its eligible customers. Payoneer will not apply a per-transaction
            fee for purchases made in USD using the Payoneer Corporate
            Purchasing Mastercard, across the globe; and for purchases in USD,
            EUR, GBP, and CAD made using the Business Premium Debit Mastercard ®
            of the same currency within the EEA region.
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Left side */}

            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Manage currencies with ease
              </h3>
              <p className="mt-2 text-gray-600">
                You&apos;ll always have the currency you need for your
                international payments with the ability to move funds between
                your Payoneer balances
                <br />
                Fees are automatically calculated so you always know how much
                money you&apos;ll receive.
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                0.5%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                {" "}
                of amount to transfer
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        {/* Withdraw */}
        <section
          id="withdraw"
          className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Withdraw
          </h2>

          {/* Highlighted text */}
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Withdraw to your bank account
          </h3>

          {/* Body */}
          <p className="text-gray-700 text-base leading-relaxed">
            Once you get paid, you can withdraw those funds to your local bank
            account. Fees vary depending on the currency of your account, but
            the speed, convenience, and simplicity are always the same.
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Left side */}

            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Withdraw in local currency from a Payoneer balance of a
                different currency
              </h3>
              <p className="mt-2 text-gray-600">
                Example: USD balance {">"} EUR bank account, bank is in EU
                <br />
                <br />
                You can withdraw funds to bank accounts in most currencies and
                enjoy competitive rates from Payoneer.
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                Up to 3%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                {" "}
                of transaction amount
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Withdraw in local currency from a Payoneer balance of the same
            currency
          </h3>
          <p className="text-gray-600 mb-6">
            Example: USD balance {">"} USD bank account, bank is in US
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
            {/* Left side */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                For customers located in the USA, United Kingdom, or European
                Union (Eurozone)
              </h3>
              <p className="mt-2 text-gray-600">
                For withdrawals in local currency, when the total amount of
                withdrawals and payments made in a single calendar month is up
                to 50,000 USD, GBP, or EUR.
                <br />
              </p>

              <p className="mt-2 text-gray-600">
                If the bank account: <br />
                <br />
              </p>
              <ul className=" text-[15px] space-y-2 text-gray-600 text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>Is in the same currency as your balance and</li>
                <li>
                  Is in a country where the withdrawing currency is the local
                  currency and
                </li>
                <li>
                  Is in the same country that you have listed in your Payoneer
                  account
                </li>
              </ul>
              <p className="mt-2 text-gray-600">
                Example: Payoneer account registered in USA -{">"} USD balance -
                {">"} USD bank account, where the bank is in the USA
                <br />
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                1.50 USD
              </span>
              <p className="mb-4 mt-2 text-gray-600">USD to USD withdrawal</p>

              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                1.50 EUR
              </span>
              <p className="mb-4 mt-2 text-gray-600">EUR to EUR withdrawal</p>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                1.50 GBP
              </span>
              <p className="mb-4 mt-2 text-gray-600">GBP to GBP withdrawal</p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
            {/* Left side */}
            <div className="flex flex-col justify-center">
              <p className="mt-2 text-gray-600">
                For withdrawals in local currency when the total amount of
                withdrawals and payments made in a single calendar month is over
                50,000 USD, GBP, or EUR.
                <br />
              </p>

              <p className="mt-2 text-gray-600">
                If the bank account:
                <br />
                <br />
              </p>
              <ul className=" text-[15px] space-y-2 text-gray-600 text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>
                  Is in a country where the withdrawing currency is the local
                  currency and
                </li>
                <li>
                  Is in the same country that you have listed in your Payoneer
                  account
                </li>
                <li>
                  Is in the same country that you have listed in your Payoneer
                  account
                </li>
              </ul>
              <p className="mt-2 text-gray-600">
                Example: Payoneer account registered in USA -{">"} USD balance -
                {">"} USD bank account, where the bank is in the USA
                <br />
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                0.5%
              </span>
              <p className="mb-4 mt-2 text-gray-600">
                of total withdrawal amount
                <br />
                USD to USD withdrawal
              </p>

              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                0.5%
              </span>
              <p className="mb-4 mt-2 text-gray-600">
                of total withdrawal amount
                <br />
                EUR to EUR withdrawal
              </p>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                0.5%
              </span>
              <p className="mb-4 mt-2 text-gray-600">
                of total withdrawal amount <br />
                GBP to GBP withdrawal
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
            {/* Left side */}

            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Withdraw in non-local currency
              </h3>
              <p className="mt-2 text-gray-600">
                Example:
                <br />
                USD balance {">"} USD bank account, bank is in EU
                <br />
                EUR balance {">"} USD bank account, bank is in Hong Kong
                <br /> <br />
              </p>
              <p className="mt-2 text-gray-600">
                You can withdraw funds to bank accounts in most currencies and
                enjoy competitive rates from Payoneer.
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                UP TO 3%
              </span>
              <p className="mt-2 text-gray-600 font-bold">
                {" "}
                of transaction amount
              </p>
              <p className="mt-2 text-gray-600">
                For withdrawals with no currency conversion, minimum fee may
                apply.
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        {/* other fees */}
        <section
          id="other-fees"
          className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Other fees
          </h2>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
            {/* Left side */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Annual account fee
              </h3>
              <p className="mt-2 text-gray-600">
                This fee applies only to accounts that receive less than $2,000
                USD (or equivalent) over a 12-month period. Customers who pay
                for an Annual Plan are not subject to this fee.
                <br />
              </p>
            </div>

            {/* Right side */}
            <div>
              <span className="inline-block bg-[#155135] text-white text-xs font-bold px-2 py-1 rounded">
                29.95 USD
              </span>
              <p className="mt-2 text-gray-600">Annual account fee</p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
            {/* Left side */}

            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Escheatment fee
              </h3>
              <p className="mt-2 text-gray-600">
                If we are required to escheat (when a state claims ownership of
                an account) your funds to an applicable state, we will deduct a
                processing fee in the amount permitted by that state.
              </p>
            </div>

            {/* Right side */}
            <div>
              <p className="mt-2 text-gray-600 "> Variable per state</p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 bg-[#f0f0f080] rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">
            {/* Left side */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Annual Plan
              </h3>
              <p className="mt-2 text-gray-600">
                Certain account types in specific regions require an Annual
                Plan. If applicable, details will be provided during the
                registration process.
                <br />
                <br />
                If an Annual Plan is charged, the Annual Account Fee will not
                apply for that year.
              </p>
            </div>

            {/* Right side */}
            <div>
              <p className="mt-2 text-gray-600">
                In certain countries, a registration fee may apply
              </p>
            </div>

            {/* Vertical divider */}
            <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></span>
          </div>
        </section>
        <section
          id="pay-and-use-funds"
          className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center"
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Last updated on 1st April 2025
          </p>
        </section>
                <section className="max-w-8xl mx-auto px-4 sm:px-6 py-16 text-center bg-[#fef3eb]">
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            The prices and fees displayed on this page present an estimation
            based on our most standard and common fee structure, available for
            majority of the account types in the majority of the regions where
            our services may be available. Different prices and fees may be
            applied in different territories, for different account types. The
            pricing and fees applicable to you are provided for review during
            account registration and are also available any time from the Fees
            link in your Payoneer account.
            <a
              target="_blank"
              className="text-blue-600 hover:underline"
              href="https://login.payoneer.com/?sessionDataKey=36f7faa2d580427591fc54b2930a727d----&state=e98d578a-fdd8-4c0f-9fdc-23569b1c02e8&provider_id=internal&client_id=b3d186db-4e5d-49c8-8a12-5753136af807&redirect_uri=https%3A%2F%2Fmyaccount.brand.domain%2Flogin%2Flogin.aspx&scope=myaccount+openid&response_type=code"
            >
              Sign in{" "}
            </a>
            to your account to review the most updated fees.
            <br />
            Please note that Making a payment with currency conversion is
            available in permitted jurisdictions only.
          </p>
        </section>
        {/* NOTES */}
      </main>
    </div>
  );
}
