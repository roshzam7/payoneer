"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../assets/LP-banner-01.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import barclays from "../assets/images/globalbanks/barclays.svg";
import citi from "../assets/images/globalbanks/citi.svg";
import deutsche from "../assets/images/globalbanks/deutsche-bank.svg";
import bankLogo1 from "../assets/images/globalbanks/bank-of-america.svg";
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
import resellerPhasesImg from "../assets/images/Affiliate-Program-Phases-img.jpg";
import expandCrossBorder from "../assets/images/Expand-cross-border.svg";
import marketplaces from "../assets/images/marketplaces-icon.svg";
import transaction from "../assets/images/transaction-icon.svg";

// Key features icons
import fastOnboarding from "../assets/images/fast-onboarding.svg";
import debitCards from "../assets/images/debit-cards.svg";
import collectionLinks from "../assets/images/collection-links.svg";
import onlineCheckout from "../assets/images/online-checkout.svg";

import BoostIcon from "../assets/BoostIcon.png";
import EnhanceIcon from "../assets/EnhanceIcon.png";
import BrandIcon from "../assets/BrandIcon.png";
import FastIcon from "../assets/FastIcon.png";
import SupportIcon from "../assets/SupportIcon.png";

const topics = [
  { title: "About Payoneer", slug: "about-payoneer" },
  { title: "Why become a Payoneer affiliate ", slug: "why-partner" },
  { title: "Affiliate program overview ", slug: "reseller-overview" },
  { title: "Success stories & testimonials", slug: "keay-features" },
];

const metrics = [
  {
    value: "Millions",
    labelTop: "Customers worldwide",
    bar: "from-purple-400 to-pink-400",
  },
  {
    value: "190+",
    labelTop: "Countries and territories",
    bar: "from-purple-400 to-pink-400",
  },
  {
    value: "70+",
    labelTop: "Currencies supported",
    bar: "from-purple-400 to-blue-400",
  },
  {
    value: "2000+",
    labelTop: "Employees Worldwide",
    bar: "from-pink-400 to-yellow-400",
  },
  {
    value: "17",
    labelTop: "Languages supported",
    bar: "from-pink-400 to-yellow-400",
  },
];

const bankCols = [
  {
    title: "Global banks",
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
    title: "Selected regional & local banks",
    logos: [
      { name: "NAB", logo: nab },
      { name: "ICBC", logo: icbc },
      { name: "DBS", logo: dbs },
      { name: "ING", logo: ing },
      { name: "RBS", logo: rbs },
      { name: "UnionBank", logo: unionbank },
      { name: "BRI", logo: bri },
      { name: "6", logo: lb6 },
      { name: "7", logo: lb7 },
      { name: "8", logo: lb8 },
      { name: "9", logo: lb9 },
    ],
  },
  {
    title: "Selected payment providers",
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
  "Earn recurring commissions by referring new Payoneer users  ",
  "Provide your audience with a trusted global payment account  ",
  "Add more value to your community, services, or content  ",
  "Onboard as many referrals as you want with no caps",
  "Access professional tools to boost your conversion rates",
];
const resellerBulletsEnd = [
  "Embed Payoneer in your registration flow",
  "Add Payoneer to your onboarding packages",
  "Place banners across your website/app",
  "List Payoneer in your partner directory",
  "Include us in your FAQs",
  "Share step-by-step sign-up guides",
  "Manually introduce high-value leads",
  "Promote us in your blog or newsletter",
  "Host a webinar with our team",
  "Run email campaigns",
  "Train your sales team with our help",
  "Promote us on social media",
  "Collaborate on podcasts, videos, or content",

];

const partnerCards = [
  {
    image: expandCrossBorder,
    title: "Expand your global offering",
    link: "Enhance the value you provide to your audience with Payoneer’s global financial infrastructure.  ",
    bullets: [
      "Promote a platform that offers global receiving accounts",
      "Help your audience hold, receive, and manage multi-currency balances  ",
      "Enable them to send and receive payments in 190+ countries  ",
      "Fast, 100% digital onboarding, no minimum balance or credit scoring  ",
      "A trusted, secure alternative to traditional banking ",
      "Users can raise global payment links that accept all cards   ",
      "Seamless invoicing, tagging, reporting, and analytics  ",
      "Full accounting sync with QuickBooks and other tools  ",
      "Localized help in 19+ languages to support your referrals  ",
    ],
  },
  {
    image: transaction,
    title: "Unlock new revenue streams ",
    link: "Turn your audience, traffic, or customer base into a growing income stream.",
    bullets: [
      "Earn recurring revenue share on all transaction volume generated by your referrals  ",
      "Volume-tiered payouts- the more activity, the more you earn  ",
      "Transparent tracking and reporting  ",
      "Lifetime earning potential  ",
      "Customized affiliate support for high-potential traffic sources  ",
      "Priority handling for high-value leads  ",
      "Easy promotion with ready-made content, banners, and guides  ",
    ],
  },
  {
    image: marketplaces,
    title: "Grow Your Brand & Your Influence ",
    link: "Build authority by promoting one of the world’s most trusted global payment platforms.  ",
    bullets: [
      "Access to co-marketing opportunities & shared promotional activities  ",
      "Gain instant credibility by aligning with a global fintech leader  ",
      "Use Payoneer-branded banners, emails, guides, and assets  ",
      "Host webinars, create content, or run campaigns with our affiliate team  ",
      "Enhance your own offering by giving your audience a powerful financial tool  ",
      "Dedicated affiliate manager to support your growth  ",
      "Global customer support for your referrals  ",
    ],
  },
];

// Great for your customers
const customerBenefits = [
  {
    title: "Go global",
    desc: "Send and receive payments in over 190 countries",
  },
  {
    title: "Get paid like a local",
    desc: "Global bank account details in 9+ Currencies",
  },
  { title: "Get started, fast", desc: "Fast onboarding (100% online)" },
  {
    title: "Safeguard funds",
    desc: "Funds are safe in Global Systematically Important Banks (G-SIBs)",
  },
  {
    title: "Full transparency",
    desc: "Fully transparent fees and pricing with detailed reporting and robust SLAs",
  },
  { title: "Someone to talk to", desc: "Dedicated account manager" },
  { title: "Global support", desc: "Fast support in 17 languages" },
];

// Key features (glass cards)
const keyFeatures = [
  {
    logo: fastOnboarding,
    title: "Fast onboarding",
    desc: "Fast and digital onboarding. Get started in 1-3 days from document submission when you have a business bank account.",
  },
  {
    logo: debitCards,
    title: "International debit cards",
    desc: "Get a physical or digital Mastercard in EUR, USD, GBP and CAD.",
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
        className="bg-gray-50 h-screen sm:h-screen flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight **leading-normal** text-gray-900">
            Welcome to
            <br />
            <span className="block  bg-clip-text text-gray-900">
              Payoneer affiliate program
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
            className="mb-2 border-b border-white/10 bg-white text-black backdrop-blur"
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
                  Table of Content
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate max-w-full sm:max-w-xs md:max-w-md">
                  Affiliate program
                </span>
              </nav>
            </div>
          </section>
          {/* about-payoneer */}
          <section
            id="about-payoneer"
            className="scroll-mt-28 px-4 sm:px-6 w-full"
          >
            <h1 className="text-[20px] sm:text-[48px] font-bold mb-2 text-[#252526]">
              About Payoneer
            </h1>
            <p className="text-[#878787] mb-6 w-full text-[13px] sm:text-[17px] ">
              Payoneer is a global financial services company that provides
              solutions for cross-border payments and international transactions
              for businesses, freelancers, and sellers.
            </p>
            <div className="mt-10">
              <h2 className="text-md sm:text-[20px] font-semibold text-gray-900">
                Unmatched global infrastructure
              </h2>
              <p className="text-[#878787] text-[13px] sm:text-[17px] mt-1">
                Covering 190+ countries and territories with redundant
                capabilities in 145 countries
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="relative rounded-lg bg-white p-5 h-25"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 rounded-l-lg bg-[linear-gradient(to_bottom,#DFD902,#FF4800,#FC4911,#F44B3E,#E84F87,#DA54D8,#6974E6,#1E8AF0,#0092F4)]"></div>
                    <div className="text-2xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#DA54D8] to-[#0092F4]">
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
              <h3 className="text-md sm:text-[20px] font-semibold text-gray-900">
                Trusted by the world&apos;s leading digital brands
              </h3>
              <p className="text-xs sm:text-[17px] text-[#878787] mt-1 w-full">
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
              Why become a Payoneer affiliate
            </h1>
            <p className="mt-3 w-full text-[#878787] text-[13px] sm:text-[17px]">
              Join the Payoneer Affiliate Program and earn generous recurring
              commissions by helping global entrepreneurs, freelancers,
              creators, and businesses access a world-class payment solution.
              With fast onboarding, multi-currency accounts, competitive FX, and
              global payment capabilities, Payoneer is the platform your
              audience will love and one you&apos;ll confidently promote.{" "}
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
          {/* reseller-overview */}
          <section id="reseller-overview" className="scroll-mt-28 px-4 sm:px-6">
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Affiliate program overview
            </h2>
            <p className="mt-2 text-[#878787] text-[13px] sm:text-[17px] w-full">
              The Payoneer Affiliate Program is ideal for creators, publishers,
              influencers, consultants, service providers, incorporation
              businesses, and platforms that guide global entrepreneurs.{" "}
            </p>
            <div className="sm:mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10 items-start">
              <div className="sm:mt-0">
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4  sm:mt-10">
                  As an affiliate, you can:
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
            </div>

            <section
              id="why-partners-love-us"
              className="scroll-mt-28 px-4 sm:px-0 "
            >
              <div className="max-w-6xl mx-0 text-left mt-10">
                {/* Heading */}
                <h2 className="text-[22px] sm:text-[48px] font-bold text-gray-900 text-left ">
                  Affiliate program phases
                </h2>
              </div>
              {/* Image */}
              <div className="sm:mt-12  mt-8 relative max-w-6xl mx-auto group ">
                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 via-transparent to-yellow-100 opacity-50 rounded-2xl blur-xl group-hover:opacity-70 transition-all duration-500" />
                <Image
                  src={resellerPhasesImg}
                  alt="Why partners love working with us image"
                  width={800}
                  height={450}
                  className="relative z-10 w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </section>

            {/*  */}
          </section>
          <section className="scroll-mt-24 px-4 sm:px-6">
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Great for your customers
            </h2>
            <p className="mt-2 text-[#878787] text-[13px] sm:text-[17px]">
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
            id="keeeey-features"
            className="scroll-mt-28 px-4 sm:px-6 py-10 bg-cover bg-center"
          >
            <h1 className="text-[20px] sm:text-[48px] font-semibold text-gray-900 text-left">
              Key features your customer will value
            </h1>
            <p className="mt-3 max-w-3xl  text-[#878787] text-[13px] sm:text-[20px] text-left">
              Focus on building long-term value, not just one-time transactions.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Logo */}
                  <div className="flex justify-left mt-4">
                    <Image
                      src={f.logo}
                      alt={`${f.title} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  {/* Accent line */}
                  <div className="mt-3 h-0.5 w-10 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full ml-0" />
                  {/* Title */}
                  <h3 className="mt-3 text-[16px] sm:text-[20px] font-semibold text-gray-900 text-left">
                    {f.title}
                  </h3>
                  {/* Description */}
                  <p className="mt-3 text-[12px] sm:text-[15px] text-[#878787] text-left">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="why-partners-love-us"
            className="scroll-mt-28 px-4 sm:px-0"
          >
            <div className="max-w-6xl mx-auto text-left mt-16">
              <h2 className="text-[22px] sm:text-[48px] font-bold text-gray-900">
                Why partners love working with us
              </h2>
            </div>

            <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-3 gap-8 text-gray-800">
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center ">
                    <Image
                      src={BoostIcon}
                      alt="Boost your revenue icon"
                      width={48}
                      height={48}
                      className="h-48 w-48 object-contain pb-4"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Boost your revenue
                  </h3>
                </div>
                <p className="mt-3">
                  Earn generous revenue share on all transaction volume
                  generated by your referrals— no limits, no caps. Your
                  customers grow. Your earnings grow.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center ">
                    <Image
                      src={EnhanceIcon}
                      alt="Enhance your offering icon"
                      width={48}
                      height={48}
                      className="h-48 w-48 object-contain pb-4"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Enhance your offering
                  </h3>
                </div>
                <p className="mt-3">
                  Offer clients a complete package: Company formation + Global
                  payment solution. Add real value, increase retention, and
                  elevate your brand.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center  ">
                    <Image
                      src={BrandIcon}
                      alt="Build your brand icon"
                      width={48}
                      height={48}
                      className="h-48 w-48 object-contain pb-4"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Build your brand
                  </h3>
                </div>
                <p className="mt-3">
                  Gain visibility through co-marketing opportunities with a
                  leading global fintech. From affiliate-manager webinars to
                  joint campaigns, we help promote you.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center ">
                    <Image
                      src={FastIcon}
                      alt="Fast onboarding icon"
                      width={48}
                      height={48}
                      className="h-48 w-48 object-contain pb-4"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Fast, 100% online onboarding
                  </h3>
                </div>
                <p className="mt-3">
                  Get your customers fully set up with Payoneer in minutes. No
                  paperwork. No waiting. Instant activation.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center ">
                    <Image
                      src={SupportIcon}
                      alt="Dedicated partner support icon"
                      width={48}
                      height={48}
                      className="h-48 w-48 object-contain pb-4"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Dedicated Partner Support
                  </h3>
                </div>
                <p className="mt-3">
                  You&apos;ll work directly with our affiliate team for:
                </p>

                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Sales training</li>
                  <li>Marketing assets</li>
                  <li>Priority onboarding for high-value leads</li>
                  <li>Support in 19+ languages</li>
                </ul>

                <p className="mt-4 font-medium">
                  We&apos;re here to help you succeed.
                </p>
              </div>
            </div>
          </section>

          {/* Ways to Promote Payoneer */}
         

              <section id="reseller-overview" className="scroll-mt-28 px-4 sm:px-6">
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Ways you can promote Payoneer
            </h2>
            <div className="sm:mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10 items-start">
              <div className="sm:mt-0">
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4  sm:mt-10">
                  We make it easy to drive referrals and maximize your affiliate
                  revenue:
                </h3>
                <ul className="space-y-4 text-[#878787] text-[13px] sm:text-[17px]">
                  {resellerBulletsEnd.map((text, i) => (
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
                <p className="mt-5 font-medium text-gray-800">
                  We support you every step of the way.
                </p>
              </div>
            </div>

            <section
              id="keay-features"
              className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 h-screen"
            >
              <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
                Coming Soon..
              </h2>
            </section>

            {/*  */}
          </section>

          {/* <section
            id="keey-features"
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 h-screen"
          >
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
              <a
                href="/files/Payoneer-Co-Branded-Brochure-Sample.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-1.png"
                  alt="Success story 1"
                  className="w-full h-64 object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    Payoneer Co-Branded Brochure Sample
                  </span>
                </div>
              </a>

              <a
                href="/files/Payoneer-Partner-Brochure--MENA-Consultancy.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/success-2.png"
                  alt="Success story 2"
                  className="w-full h-64 object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    Payoneer Partner Brochure - MENA Consultancy
                  </span>
                </div>
              </a>
            </div>
          </section> */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
