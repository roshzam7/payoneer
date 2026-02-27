"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../assets/LP-banner-01.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Footer from "../components/Footer";
import Freelancers from "../assets/images/Freelancers.png";
import commercesellers from "../assets/images/E-commerce-sellers.png";
import SMBbusinesses from "../assets/images/SMB-businesses.png";
import Globalteams from "../assets/images/Global-teams.png";

const tutorials = [
  {
    title:
      "Get paid with Payoneer - learn how to simplify getting paid with Payoneer",
    desc: "Now that you've registered with Payoneer, you'll find that getting paid is simple, flexible, and efficient. There are three convenient ways to receive funds, making it easy to tailor your payment experience to fit your business needs. You can also track and monitor payments in real-time so you're always in control.",
    link: "https://www.youtube.com/watch?si=kjS57x0NMEZx8xlU&v=2Z-YtRV8wec&feature=youtu.be",
    image: "/images/GetPaidWithPayoneer.png",
  },
  {
    title:
      "Payoneer account dashboard - introduction to basic features & functions",
    desc: "Now that you've registered with Payoneer, you'll see how easy it is to fulfill multiple payment functions, like converting currencies when making transactions, withdrawing funds and requesting payments, all through one dashboard. Your dashboard is designed to simplify cross-border transactions and make it easy to handle all your business payment needs from a single platform! ",
    link: "https://www.youtube.com/watch?si=AP8AwXe5nZl_qIJl&v=58Rem3K1O6Q&feature=youtu.be",
    image: "/images/PayoneerAccountDashboard.png",
  },
  {
    title:
      "Convert currencies while making a transaction with Payoneer - learn how to convert currencies while making a transaction. Get started with Payoneer at competitive rates ",
    desc: "Now that you've registered with Payoneer, you'll see how simple it is to convert currencies while making a transaction, right from your account dashboard. Payoneer gives you the flexibility to convert funds between currencies quickly and at competitive exchange rates - no need for third-party delays. You can reduce currency risk, avoid unnecessary fees, and make your funds work harder for your business.",
    link: "https://www.youtube.com/watch?v=paXY-XskAjQ#",
    image: "/images/ConvertCurrencies.png",
  },
  // {
  //   title:
  //     "Adding funds to your account from your bank account - Keep your business moving",
  //   desc: "To ensure your Payoneer account always has sufficient funds for outgoing payments, you can easily add money directly from your bank account. Adding funds from your bank account helps you to ensure you're always ready to make urgent payments, invest in opportunities, or maintain a positive balance to avoid delays.",
  //   link: "https://www.youtube.com/watch?v=EcDhegY1v_Y",
  //   image: "/images/Addingfundstoyouraccount.png",
  // },
  {
    title: "Make global payments with confidence and ease",
    desc: "With Payoneer, it's easy to make secure, fast payments to your suppliers and contractors directly to their bank account or their Payoneer account if they have one. You can convert and send payments in 70+ currencies across 190+ countries and territories , giving your business the reach it needs to grow.",
    link: "https://www.youtube.com/watch?si=ML8q8EtnQX03vSNE&v=SRjUsIMot2Q&feature=youtu.be",
    image: "/images/MakeGlobalPayments.png",
  },
];

const partnerCards = [
  {
    image: Freelancers,
    title: "Freelancers ",
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
      "Use working capital options to fund inventory, or expansion when cash flow is tight.  ",
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
  { title: "Overview", slug: "overview" },
  { title: "Why this matters to your clients or users ", slug: "features" },
  { title: "Get started with Payoneer ", slug: "get-started-with-payoneer" },
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
            <h2 className="text-[25px] font-bold text-gray-900">
              Simplify your international payments.
            </h2>
            <p className="text-[#878787] text-[14px] leading-relaxed">
              With Payoneer, clients and customers can pay you globally and you
              can receive payments like a local. Multi-currency receiving
              accounts, flexible payment options, and easy withdrawals make it a
              solid fit for freelancers, e-commerce sellers, SMBs, and global
              teams.{" "}
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
              platforms as if you had local accounts in multiple countries. You
              can hold balances in different currencies, choose how you get
              paid, and withdraw funds to your local bank when it suits your
              cash flow. On top of that, you get tools that help you manage
              global pay.{" "}
            </p>
          </section>

          {/* KEY FEATURES */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                  Global reach and multi-currency accounts
                </h3>
                {/* Gradient underline */}
                <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

                <ul className=" text-[14px] space-y-2 text-[#878787] text-sm list-disc list-outside pl-5 marker:text-gray-400">
                  <li>
                    Available in 190+ countries and territories so you can work
                    with clients and platforms almost anywhere{" "}
                  </li>
                  <li>
                    {" "}
                    Hold and manage balances in multiple currencies: USD, EUR,
                    GBP, JPY, AUD, CAD, SGD, HKD, AED, MXN{" "}
                  </li>
                  <li>
                    {" "}
                    Get paid via receiving accounts in major currencies, so
                    clients can pay you like a local.
                  </li>
                  <li>
                    Smart global routing helps with efficient cross-border
                    payments.
                  </li>
                  <li>
                    Backed by strong banking partnerships for reliability and
                    uptime.
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                  Pay and get paid with flexibility{" "}
                </h3>
                {/* Gradient underline */}
                <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

                <ul className=" text-[14px] space-y-2 text-[#878787] text-sm list-disc list-outside pl-5 marker:text-gray-400">
                  <li>
                    Accept payments from clients via cards, ACH (US), and local
                    bank transfers so they can pick what works for them{" "}
                  </li>
                  <li>
                    Send simple payment requests through a shareable link for
                    quick approvals and payments.
                  </li>
                  <li>
                    Transfer funds to bank accounts in 190+ countries and
                    territories. Pay businesses with competitive FX rates.
                  </li>
                  <li>
                    Pay individuals or businesses with competitive FX rates.
                  </li>
                  <li>
                    Order and use a physical or virtual card for online
                    purchases, ATMs, and day-to-day business expenses. .
                  </li>
                  <li>
                    Card requirements usually include a $100+ balance, advance
                    request, and proof of residence.
                  </li>
                </ul>
              </div>

              {/* Card 3 */}

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                  Business tools to run global payouts{" "}
                </h3>
                {/* Gradient underline */}
                <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

                <ul className=" text-[14px] space-y-2 text-[#878787] text-sm list-disc list-outside pl-5 marker:text-gray-400">
                  <li>
                    <span className="font-semibold">Payoneer Checkout:</span> If
                    you run an online store, you can accept payments from
                    customers worldwide directly on your site.
                  </li>
                  <li>
                    <span className="font-semibold">Batch Payments:</span> Send
                    bulk payouts to contractors, partners, or affiliates in one
                    shot.
                  </li>
                  <li>
                    <span className="font-semibold">Role Management:</span> Add
                    team members with different permissions to handle payments
                    and approvals.
                  </li>
                  <li>
                    <span className="font-semibold">API integrations:</span>{" "}
                    Connect Payoneer to your systems to automate payments and
                    reporting.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Accounting integrations:
                    </span>{" "}
                    Sync with your accounting tools to make reconciliation
                    easier.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* WHO IT'S FOR */}

          <section id="features" className="scroll-mt-28 px-4 sm:px-6">
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

          {/*  */}
          <section
            id="get-started-with-payoneer"
            className="scroll-mt-10 max-w-6xl mx-auto px-4 sm:px-6 py-16"
          >
            <section className="scroll-mt-28 mt-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Get started with Payoneer
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                An overview of Payoneer&apos;s features, including payment
                collection, currency conversion, account funding, and global
                payouts—helping referred customers activate and grow with their
                new account.
              </p>
              <div className="flex flex-col space-y-20">
                {tutorials.map((faq, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-10 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="md:w-1/2 w-full">
                      <div className="overflow-hidden rounded-2xl shadow-lg">
                        <Image
                          src={faq.image}
                          alt={faq.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 w-full">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {faq.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg mb-4">
                        {faq.desc}
                      </p>

                      {/* Gradient link */}
                      <a
                        href={faq.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" font-semibold hover:underline mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00] transition-all"
                      ></a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
          {/* how to */}
          {/* <section id="how-to" className="scroll-mt-28 px-4 sm:px-0 mb-0">
            <h1 className="text-[20px] sm:text-[48px] font-semibold text-gray-900">
              How to..
            </h1>
          </section> */}
          {/* pdf */}
          {/* <section
            id="keey-features"
            className="scroll-mt-10 sm:py-5 px-4 sm:px-6 mb-0 sm:mb-20 h-auto"
          >
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
              <a
                href="/files/How-to-get-paid.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-get-paid.jpeg"
                  alt="How to get paid"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to get paid
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-track-and-cancel-payment-requests.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-track-and-cancel-payment-requests.jpeg"
                  alt="Track and cancel payment requests"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to track and cancel payment requests
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-see-fees.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-see-fees.jpeg"
                  alt="See fees"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to see fees
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-request-a-payment.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-request-a-payment.jpeg"
                  alt="Request a payment"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to request a payment
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-make-a-payment-to-a-recipients-payoneer-account.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-make-a-payment-to-a-recipients-payoneer-account.jpeg"
                  alt="Make payment to recipient"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to make a payment to a recipient&apos;s Payoneer account
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-enable-swift-wire-account.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-enable-swift-wire-account.jpeg"
                  alt="Enable SWIFT wire account"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to enable SWIFT wire account
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-enable-local-receiving-accounts.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-enable-local-receiving-accounts.jpeg"
                  alt="Enable local receiving accounts"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to enable local receiving accounts
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-check-a-payments-status.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-check-a-payments-status.jpeg"
                  alt="Check payment status"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to check a payment&apos;s status
                  </span>
                </div>
              </a>

              <a
                href="/files/Payoneer-mobile-app.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/payoneer-mobile-app.jpeg"
                  alt="Payoneer mobile app"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    Payoneer mobile app
                  </span>
                </div>
              </a>

              <a
                href="/files/How-to-withdraw-funds-from-your-Payoneer-Account-to-your-bank-account.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/how-to-withdraw-funds-from-your-payoneer-account-to-your-bank-account.jpeg"
                  alt="Withdraw funds"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    How to withdraw funds from your Payoneer account to your
                    bank account
                  </span>
                </div>
              </a>
            </div>
          </section> */}

          {/* LEARN MORE */}
          {/* <section
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
          </section> */}
        </main>
      </div>

      <Footer />
    </div>
  );
}
