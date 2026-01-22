"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../assets/LP-banner-01.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Content from "../assets/images/gettingstarted/Content.png";
import Content2 from "../assets/images/gettingstarted/Content2.png";
import Content3 from "../assets/images/gettingstarted/Content3.png";
import Checkicon from "../assets/images/Check-icon.svg";
import expandicon from "../assets/images/expandIcon.png";
import Footer from "../components/Footer";
import fastOnboarding from "../assets/images/fast-onboarding.svg";
import Icon1 from "../assets/images/icon-1.png";
import Icon2 from "../assets/images/icon-2.png";
import Icon3 from "../assets/images/icon-3.png";
import Icon4 from "../assets/images/icon-4.png";

import One from "../assets/Partnerimgs/1.png";
import Two from "../assets/Partnerimgs/2.png";
import Three from "../assets/Partnerimgs/3.png";
import Four from "../assets/Partnerimgs/4.png";
import Five from "../assets/Partnerimgs/5.png";
import Six from "../assets/Partnerimgs/6.png";
import Seven from "../assets/Partnerimgs/7.png";
import Eight from "../assets/Partnerimgs/8.png";
import Nine from "../assets/Partnerimgs/9.png";
import Ten from "../assets/Partnerimgs/10.png";
import Eleven from "../assets/Partnerimgs/11.png";
import Twelve from "../assets/Partnerimgs/12.png";
import Thirteen from "../assets/Partnerimgs/13.png";
import Fourteen from "../assets/Partnerimgs/14.png";

const topics = [
  { title: "Why we choose community?", slug: "choose-PRM" },
  { title: "What is the process?",  slug: "onboarding-process-works", },
  // { title: "Onboarding process", slug: "onboarding-process" },
];

const resellerBullets = [
  "Receive the link for registration from your affiliate manager.",
  "Click on the link and fill in your information in Part 1 of the Partner Sign Up form.",
  "Click Next to continue to User Details.",
];
const resellerBulletsTwo = [
  "Fill in your information. It is recommended to choose a strong and unique password.",
  "Click Next to continue to User Agreement..",
];
const resellerBulletsThree = [
  "Enable the two checkboxes. .",
  "Click Sign up. You are now successfully signed up!",
];
const keyFeatures = [
  {
    logo: Icon1,
    title: "Automation & Efficiency",
    desc: "Experience hassle-free operations with automated commission calculations, seamless integrations across platforms, and streamlined affiliate payouts. Our system ensures you spend less time on admin and more time on results. ",
  },
  {
    logo: Icon2,
    title: "Partner Experience & Transparency",
    desc: "Enjoy a personalized dashboard with real-time tracking, standardized onboarding, and clear communication of offer terms. Access all your offers and landing pages in one place, with complete visibility and accuracy. ",
  },
  {
    logo: Icon3,
    title: "Insights & Control",
    desc: "Make data-driven decisions with a central team dashboard, detailed offer metrics, and profitability analysis. Access up to three years of historical data and manage unpaid invoices directly within the PRM. ",
  },
  {
    logo: Icon4,
    title: "Flexibility & Growth",
    desc: "Customize offers by affiliate or referral, stack incentives, and manage revenue shares by product line. Our Knowledge Center provides instant access to policies, manuals, FAQs, and marketing materials- plus, our agile tools let you adapt quickly as your business evolves. ",
  },
];

const customerBenefits = [
  {
    title: "1. Registration",
    desc: "Registration Receive a welcome email with multi-factor authentication instructions and consent to terms & conditions",
  },
  {
    title: "2. Access New Offers",
    desc: "Explore a variety of offers, and revenue-based incentives.",
  },
  {
    title: "3. PRM Access ",
    desc: "Log in to view all relevant offers, landing pages, billing status, and up to three years of historical data- including any unpaid invoices. ",
  },
  {
    title: "4. Referral Links",
    desc: "Instantly generate and manage new referral links through the PRM platform. ",
  },
];
const customerBenefitstwo = [
  {
    title:
      "Step 1: Receive a welcome email with instructions to log into the Community. ",
    desc: "",
    image: One.src,
  },
  {
    title: "Step 2: Sign the terms and conditions and create a password. ",
    desc: "",
    image: Three.src,
  },
  {
    title: "",
    desc: " On the second login, you must use an authenticator app such as Google, Microsoft, or Salesforce (TOTP). ",
    test: " Please note that the username must end with XXXX@exmple.com.payoneer  ",
    image: Four.src,
  },
  // {
  //   title:
  //     "   ",
  //   desc: "",
  //   image: Five.src,
  // },
  {
    title: "",
    desc: "Press the link to immediately see your referral links ",
    image: Seven.src,
  },
  {
    title: "",
    desc: "Contact your account manager for any questions you may have ",
    image: Eight.src,
  },
  {
    title: "",
    desc: "To update profile information or reset a password, access the settings. In the settings section, affiliates can also add team members who require access to the SF PRM; each added team member will be reviewed by the affiliate manager, who will then send a welcome email to the new team member upon approval. ",
    image: Nine.src,
  },
  {
    title: "Dashboard",
    desc: "The performance overview shows past 6-month trend.  ",
    image: Ten.src,
  },
  {
    title: "Your Referral Links  ",
    desc: "This landing page shows that when a referral spend and receive a $35. ",
    image: Eleven.src,
  },
  {
    title: "My Referrals",
    desc: "You can view all details of an individual referral by selecting Action – View. ",
    image: Twelve.src,
  },
  {
    title: "Billing",
    desc: "Enables affiliates to review their billing status and access their invoices, with options available for downloading documentation. ",
    image: Fourteen.src,
  },
  // { title: "", desc: "", image: Thirteen.src },
  // {
  //   title: "",
  //   desc: " ",
  //   image: Fourteen.src,
  // },
];

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  // Modal state
  const [modalImage, setModalImage] = useState<string | null>(null);

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

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4 flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200"
              onClick={() => setModalImage(null)}
            >
              ✕
            </button>
            <Image
              src={modalImage}
              alt="Preview"
              width={800}
              height={800}
              className="rounded-xl object-contain max-h-[80vh] w-auto"
            />
          </div>
        </div>
      )}

      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-screen sm:h-screen flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight **leading-normal** text-gray-900">
            <br />
            <span className="block sm:inline bg-clip-text text-[#212529]">
                  Partner onboarding
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
        <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-20 bg-white relative z-10">
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
                  Table of Content
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate max-w-full sm:max-w-xs md:max-w-md">
                  Partner onboarding
                </span>
              </nav>
            </div>
          </section>

          {/* reseller-overview */}

          {/* 2 */}
          <section
            id="choose-PRM"
            className="scroll-mt-28 px-4 sm:px-0 py-10 bg-cover bg-center"
          >
            <h1 className="text-[20px] sm:text-[48px] font-semibold text-gray-900 text-left">
              Why we choose community?
            </h1>
            <p className="mt-3 max-w-3xl  text-[#878787] text-[13px] sm:text-[20px] text-left"></p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
          <section             id="onboarding-process-works"
 className="scroll-mt-24 px-4 sm:px-6">
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              What is the process?
            </h2>
            <p className="mt-2 text-[#878787] text-[13px] sm:text-[17px]"></p>
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

          {customerBenefitstwo.map((item, i) => (
  <section key={i} className="mb-20">
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        
        {/* LEFT – Text */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            {item.title}
          </h3>
        

          <p className="text-[#666] text-sm sm:text-base leading-relaxed">
            {item.desc}
          </p>
            <p className="font-semibold text-[#666] text-sm sm:text-base leading-relaxed">
            {item.test}
          </p>
        </div>

        {/* RIGHT – Image */}
        <div>
          <div
            onClick={() => setModalImage(item.image)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
))}


          {/* 4th */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
