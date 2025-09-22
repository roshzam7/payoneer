"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import barclays from "../assets/images/globalbanks/barclays.svg";
import citi from "../assets/images/globalbanks/citi.svg";
import deutsche from "../assets/images/globalbanks/deutsche-bank.svg";
import bankLogo1 from "../assets/images/globalbanks/bank-of-america.svg"
import Footer from "../components/Footer";



// Local banks
import nab from "../assets/images/localbanks/nab.svg";
import icbc from "../assets/images/localbanks/icbc.svg";
import dbs from "../assets/images/localbanks/1.svg";
import ing from "../assets/images/localbanks/2.svg";
import rbs from "../assets/images/localbanks/3.svg";
import unionbank from "../assets/images/localbanks/4.svg";
import bri from "../assets/images/localbanks/5.svg";
import lb6 from "../assets/images/localbanks/6.svg";
import lb7 from "../assets/images/localbanks/7.svg";
import lb8 from "../assets/images/localbanks/8.svg";
import lb9 from "../assets/images/localbanks/9.svg";

// Payment providers
import pp1 from "../assets/images/paymentproviders/1.svg";
import pp2 from "../assets/images/paymentproviders/2.svg";
import pp3 from "../assets/images/paymentproviders/3.svg";
import pp4 from "../assets/images/paymentproviders/4.svg";
import pp5 from "../assets/images/paymentproviders/5.svg";
import pp6 from "../assets/images/paymentproviders/6.svg";
import pp7 from "../assets/images/paymentproviders/7.svg";
import pp8 from "../assets/images/paymentproviders/8.svg";
import pp9 from "../assets/images/paymentproviders/9.svg";

// Brands
import adobe from "../assets/images/brands/adobe.svg";
import airbnb from "../assets/images/brands/airbnb.svg";
import amazon from "../assets/images/brands/amazon.svg";
import booking from "../assets/images/brands/booking.svg";
import daraz from "../assets/images/brands/daraz.svg";
import cdiscount from "../assets/images/brands/cdiscount.svg";
import facebook from "../assets/images/brands/facebook.svg";
import fiverr from "../assets/images/brands/fiverr.svg";
import gettyimages from "../assets/images/brands/gettyimages.svg";
import google from "../assets/images/brands/google.svg";
import homeaway from "../assets/images/brands/homeaway.svg";
import joom from "../assets/images/brands/joom.svg";
import jumia from "../assets/images/brands/jumia.svg";
import lazada from "../assets/images/brands/lazada.svg";
import linio from "../assets/images/brands/linio.svg";
import mercadolibre from "../assets/images/brands/mercadolibre.svg";
import noon from "../assets/images/brands/noon.svg";
import wayfair from "../assets/images/brands/wayfair.svg";
import rakuten from "../assets/images/brands/rakuten.svg";
import shopee from "../assets/images/brands/shopee.svg";
import shutterstock from "../assets/images/brands/shutterstock.svg";
import uber from "../assets/images/brands/uber.svg";
import upwork from "../assets/images/brands/upwork.svg";
import walmart from "../assets/images/brands/walmart.svg";
import wish from "../assets/images/brands/wish.svg";
import realde from "../assets/images/brands/realde.svg";

// Others
import checkIcon from "../assets/images/Check-icon.svg";
import resellerImg from "../assets/images/ResellerProgram-img.png";
import resellerPhasesImg from "../assets/images/Reseller-Program-Phases-img.png";
import expandCrossBorder from "../assets/images/Expand-cross-border.svg";
import marketplaces from "../assets/images/marketplaces-icon.svg";
import transaction from "../assets/images/transaction-icon.svg";

import resellerCardBg from "../assets/images/Reseller-card-bg.png";

// Key features icons
import fastOnboarding from "../assets/images/fast-onboarding.svg";
import debitCards from "../assets/images/debit-cards.svg";
import collectionLinks from "../assets/images/collection-links.svg";
import onlineCheckout from "../assets/images/online-checkout.svg";


const topics = [
  { title: "About Payoneer", slug: "about-payoneer" },
  { title: "Why Partner with Us", slug: "why-partner" },
  { title: "Reseller Program Overview", slug: "reseller-overview" },
  { title: "Success Stories & Testimonials", slug: "key-features" },
];

const metrics = [
    {
    value: "Millions",
    labelTop: "Customers Worldwide",
    bar: "from-purple-400 to-pink-400",
  },
  { value: "190+", labelTop: "countries and territories", bar: "from-purple-400 to-pink-400" },
  { value: "70+", labelTop: "Currencies Supported", bar: "from-purple-400 to-blue-400" },
  {
    value: "2000+",
    labelTop: "Employees Worldwide",
    bar: "from-pink-400 to-yellow-400",
  },


];

const bankCols = [
  {
    title: "Global Banks",
    logos: [
      {
        name: "Bank of America",
        logo: bankLogo1,
      },
{ name: "Barclays", logo: barclays },
      { name: "Citi", logo: citi },
      { name: "Deutsche Bank", logo: deutsche },
    ],
  },
  {
    title: "Selected Regional & Local Banks",
    logos: [
      { name: "NAB", logo: nab },
      { name: "ICBC", logo: icbc },
      { name: "DBS", logo: dbs },
      { name: "ING", logo: ing },
      { name: "RBS", logo: rbs },
      { name: "UnionBank", logo: unionbank },
      { name: "BRI", logo: bri },
      { name: "6", logo: lb6 },
      { name: "7", logo: lb7},
      { name: "8", logo: lb8 },
      { name: "9", logo: lb9 },
    ],
  },
  {
    title: "Selected Payment Providers",
    logos: [
      { name: "1", logo: pp1 },
      { name: "2", logo: pp2 },
      { name: "3", logo: pp3 },
      { name: "4", logo: pp4 },
      { name: "5", logo: pp5 },
      { name: "6", logo: pp6 },
      { name: "7", logo: pp7 },
      { name: "8", logo: pp8 },
      { name: "9", logo: pp9 },
    ],
  },
];

const brands = [
  { name: "Adobe", logo: adobe },
  { name: "Airbnb", logo: airbnb },
  { name: "Amazon", logo: amazon },
  { name: "Booking.com", logo: booking },
  { name: "Daraz", logo: daraz },
  { name: "Cdiscount", logo: cdiscount },
  { name: "Facebook", logo: facebook },
  { name: "Fiverr", logo: fiverr },
  { name: "Getty Images", logo: gettyimages },
  { name: "Google", logo: google },
  { name: "HomeAway", logo: homeaway },
  { name: "JOOM", logo: joom },
  { name: "JUMIA", logo: jumia },
  { name: "LAZADA", logo: lazada },
  { name: "LINIO", logo: linio },
  { name: "Mercado Libre", logo: mercadolibre },
  { name: "Noon", logo: noon },
  { name: "Wayfair", logo: wayfair },
  { name: "Rakuten", logo: rakuten },
  { name: "Shopee", logo: shopee },
  { name: "Shutterstock", logo: shutterstock },
  { name: "Uber", logo: uber },
  { name: "Upwork", logo: upwork },
  { name: "Walmart", logo: walmart },
  { name: "Wish", logo: wish },
  { name: "Real.de", logo: realde },
];

const resellerBullets = [
  "Offer a one-stop financial experience",
  "Capture more value across the customer lifecycle",
  "Get paid for onboarding and activating clients",
];

const partnerCards = [
  {
    image: expandCrossBorder,
    title: "Expand cross-border offering",
    link: "Compliment your offering with Payoneers global infrastructure",
    bullets: [
      "Hold 9+ currency balances in your global virtual accounts",
      "Send and receive payments in over 190+ countries/markets",
      "100% digital onboarding with 1-3 days onboarding SLA",
      "White-glove service supported by dedicated local account managers",
    ],
  },
  {
    image: transaction,
    title: "Unlock new revenue streams",
    link: "Generate new revenue streams via tailored revenue-share model",
    bullets: [
      "Volume-tiered revenue share model based on monthly transaction volume",
      "Fully transparent fees and pricing with detailed reporting and robust SLAs",
    ],
  },
  {
    image: marketplaces,
    title: "Grow your international brand",
    link: "Leverage Payoneer's resources and reach to grow your business",
    bullets: [
      "Co-marketing campaigns leveraging Payoneer's global channels",
      "Payoneer's global customer support in 22 languages",
    ],
  },
];

// Great for your customers
const customerBenefits = [
  {
    title: "Go Global",
    desc: "Send and receive payments in over 190 countries",
  },
  {
    title: "Get paid like a local",
    desc: "Global bank account details in 9+ Currencies",
  },
  { title: "Get started, fast", desc: "Fast Onboarding (100% online)" },
  {
    title: "Safeguard funds",
    desc: "Funds are safe in Global Systematically Important Banks (G-SIBs)",
  },
  {
    title: "Full transparency",
    desc: "Fully transparent fees and pricing with detailed reporting and robust SLAs",
  },
  { title: "Someone to talk to", desc: "Dedicated account manager" },
  { title: "Global support", desc: "Fast support in 22 languages" },
];

// Key features (glass cards)
const keyFeatures = [
  {
    logo: fastOnboarding,
    title: "Fast Onboarding",
    desc: "Fast and digital onboarding. Get started in 1–3 days from document submission when you have a business bank account.",
  },
  {
    logo: debitCards,
    title: "International debit cards",
    desc: "Get a physical or digital Mastercard in EUR, USD, GBP and CAD. + great cashback rewards*",
  },
  {
    logo: collectionLinks,
    title: "Payment collection links",
    desc: "Accept card payments from all over the world and tag them to invoices.",
  },
  {
    logo: onlineCheckout,
    title: "Online checkout",
    desc: "Accept payments on webstores with our online checkout solution.",
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
        className="w-full bg-gray-50 min-h-[60vh] flex items-center justify-center px-4 text-center border-b border-gray-200 md:bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto py-12 sm:py-20">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight mb-6 sm:mb-8">
            Welcome to
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              the Payoneer Reseller Program
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            {/* Optional subtext or description */}
          </p>
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
        <main className="flex-1 px-4 sm:px-6 py-10 max-w-7xl mx-auto space-y-20 bg-white">
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
                  Welcome to Payoneer Reseller Program
                </span>
              </nav>
            </div>
          </section>

          {/* about-payoneer */}
          <section id="about-payoneer" className="scroll-mt-28 px-4 sm:px-6">
            <h1 className="text-[20px] sm:text-[48px] font-bold mb-2 text-[#252526]">
              About Payoneer
            </h1>
            <p className="text-[#878787] mb-6 max-w-2xl text-[13px] sm:text-[20px]">
              Payoneer is a global financial services company that provides
              solutions for cross-border payments and international transactions
              for businesses, freelancers, and sellers.
            </p>

            <div className="mt-10">
              <h2 className="text-md sm:text-[23px] font-semibold text-gray-900">
                Unmatched Global Infrastructure
              </h2>
              <p className="text-[#878787] text-[13px] sm:text-[20px] mt-1">
                Covering 190+ countries with redundant capabilities in 145
                countries
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="relative rounded-lg bg-white p-5 h-25"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 rounded-l-lg bg-[linear-gradient(to_bottom,#DFD902,#FF4800,#FC4911,#F44B3E,#E84F87,#DA54D8,#6974E6,#1E8AF0,#0092F4)]"></div>
                    <div className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#DA54D8] to-[#0092F4]">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-[14px] text-[#878787]">
                      {m.labelTop}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank/Provider Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bankCols.map((col, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white border border-gray-100 shadow-sm p-6"
                >
                  <h3 className="text-[23px] font-semibold text-gray-800 mb-4">
                    {col.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {col.logos.map((bank, j) => (
                      <div
                        key={j}
                        className="h-10 px-3 rounded-md border border-gray-200 bg-white flex items-center justify-center shadow-sm"
                      >
                        <Image
                          src={bank.logo}
                          alt={`${bank.name} logo`}
                          width={60}
                          height={24}
                          className="object-contain"
                          style={{ height: "auto" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted brands */}
            <div className="mt-10">
              <h3 className="text-md sm:text-[23px] font-semibold text-gray-900">
                Trusted by the world&apos;s leading digital brands
              </h3>
              <p className="text-xs sm:text-[20px] text-[#878787] mt-1 max-w-3xl">
                Serving over 2000 leading global marketplaces & digital
                platforms, sending tens of billions of dollars a year to SMBs
                across the world
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {brands.map((b, i) => (
                  <div
                    key={i}
                    className="h-14 rounded-lg border border-gray-100 bg-white shadow-sm flex items-center justify-center"
                  >
                    <Image
                      src={b.logo}
                      alt={`${b.name} logo`}
                      width={100}
                      height={40}
                      className="max-h-10 object-contain"
                      style={{ height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* why-partner */}
          <section id="why-partner" className="scroll-mt-28 px-4 sm:px-6">
            <h1 className="text-[20px] sm:text-[48px] font-semibold text-gray-900">
              Why Partner with Us
            </h1>
            <p className="mt-3 max-w-3xl text-[#878787] text-[13px] sm:text-[20px]">
              Partner with Payoneer to unlock global payouts, world-class
              infrastructure, and co-marketing opportunities. Empower your
              merchants and creators to scale internationally with seamless
              onboarding and localized compliance.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerCards.map(({ image, title, link, bullets }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 shadow-gray-300"
                >
                  {/* Icon above title */}
                  <Image
                    src={image}
                    alt="Expand cross-border"
                    width={32}
                    height={32}
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

          {/* reseller-overview */}
          <section id="reseller-overview" className="scroll-mt-28 px-4 sm:px-6">
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Reseller Program Overview
            </h2>
            <p className="mt-2 text-[#878787] text-[13px] sm:text-[20px] max-w-2xl">
              The Payoneer Reseller Program enables incorporation agencies and
              VAS providers to become full-service financial partners for SMB
              clients.
            </p>

            <div className="sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="sm:mt-10">
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4  sm:mt-10">
                  Grow revenue by bundling Payoneer with your services
                </h3>
                <ul className="space-y-4 text-[#878787] text-[13px] sm:text-[17px]">
                  {resellerBullets.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Image
                        src={checkIcon}
                        alt="Check icon"
                        width={20}
                        height={20}
                        className="flex-none"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-auto">
                <Image
                  src={resellerImg}
                  alt="Reseller program"
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>

            {/* Reseller Phases */}
            <section id="reseller-phases" className="scroll-mt-24 sm:mb-24">
              <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900 mt-10">
                Reseller Program Phases
              </h2>
              <div className="sm:mt-8 w-full">
                <Image
                  src={resellerPhasesImg}
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl  "
                />
              </div>
            </section>

            {/* Partner Cards Block */}
            <section className="sm:mt-16 mt-4">
              <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
                Payoneer, your ideal banking services partner
              </h2>
              <p className="mt-2 text-[#878787] text-[13px] sm:text-[20px] max-w-4xl">
                The proposed reseller partnership enables cross-border access
                for customers and unlocks new revenue streams.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerCards.map(({ image, title, link, bullets }) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 shadow-gray-300"
                  >
                    {/* Icon above title */}
                    <Image
                      src={image}
                      alt="Expand cross-border"
                      width={32}
                      height={32}
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
          </section>

          <section className="scroll-mt-24 px-4 sm:px-6">
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Great for Your Customers
            </h2>
            <p className="mt-2 text-[#878787] text-[13px] sm:text-[20px]">
              Keeping your customers happy is always good for business.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10">
              {customerBenefits.map((item, i) => (
                <div key={i}>
                  <h3 className="text-[17px] sm:text-[20px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 mt-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
                  <p className="mt-3 text-[#878787] text-[13px] sm:text-[14px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* key-features */}
          <section
            className="scroll-mt-10 sm:py-10 px-4 sm:px-6 mb-0 sm:mb-20"
          >
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Key features your customer will value most
            </h2>
            <p className="mt-2 text-[#878787] text-[13px] sm:text-[20px]">
              Focus on building long-term value, not just one-time transactions.
            </p>
          </section>

          <section
            className="scroll-mt-28 relative py-0 sm:py-10 bg-cover bg-center"
      style={{
    backgroundImage: `url(${resellerCardBg.src})`,
      }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mt-6 sm:mt-10 mb-6 sm:mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
                {keyFeatures.map((f, i) => (
                  <div
                    key={i}
                    className="h-full p-6 sm:p-8 md:p-10 border border-white/20 bg-white/70 backdrop-blur-md shadow-lg hover:bg-white/20 transition flex flex-col items-center text-center"
                  >
                    {/* Logo */}
                    <div className="mb-4">
                      <Image
                        src={f.logo}
                        alt={`${f.title} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-[11px] sm:text-[17px] font-semibold text-black">
                      {f.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-[10px] sm:text-[14px] text-black flex-grow">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0" />
          </section>
           <section
            id="key-features"
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 h-screen"
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
