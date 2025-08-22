"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Content from "../assets/images/gettingstarted/Content.png";
import Content2 from "../assets/images/gettingstarted/Content2.png";
import Content3 from "../assets/images/gettingstarted/Content3.png";
import Checkicon from "../assets/images/Check-icon.svg";
import expandicon from "../assets/images/expandIcon.png";


const topics = [
  { title: "How to Join the Program", slug: "How-to-Join" },
  {
    title: "Understand Your Role as a Payoneer Reseller",
    slug: "Understand-Your-Role",
  },
  { title: "Understanding Partner Tiers", slug: "Understanding-Partner-Tiers" },
  {
    title: "Understanding Commercials & Payment Calculators",
    slug: "Payment-Calculators",
  },
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
        className="bg-gray-50 min-h-[400px] sm:min-h-[500px] flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto py-12 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Getting Started
            <br />
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Partner Onboarding
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
                  Getting Started: Partner Onboarding
                </span>
              </nav>
            </div>
          </section>

          {/* reseller-overview */}
          <section id="How-to-Join" className="scroll-mt-36 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <p className="text-gray-900 text-[48px] font-semibold">
                How to Join the Program
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base mt-2 mb-4"
              >
                
              </a>
            </div>
             <p className="text-[#878787] text-sm sm:text-base mt-2 mb-4">
              After sign-up you will receive partnership contract. Please find a sample contract below:
            </p>
            <p className="text-[#878787] text-sm sm:text-base mt-2 mb-4">
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base mt-2 mb-4"
                >
                View Contracting & Legal Agreements
                </a>
            </p>
            <p className="mt-2 text-gray-900 text-[23px]">
              Reseller Sign-Up Process
            </p>
            <p className="text-[#878787] text-sm sm:text-base mt-2 mb-4">
              View the guided steps below to learn how to get onboarded to
              Payoneer with Hasoffer.
            </p>

            {[
              {
                title: "Account Details",
                bullets: resellerBullets,
                image: Content,
              },
              {
                title: "User Details",
                bullets: resellerBulletsTwo,
                image: Content2,
              },
              {
                title: "User Agreement",
                bullets: resellerBulletsThree,
                image: Content3,
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start my-10"
              >
                {/* Text */}
                <div className={idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"}>
                  <h3 className="text-[23px] font-semibold text-gray-900 mb-4 mt-0 sm:mt-30">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-[#878787] text-[18px]">
                    {section.bullets.map((text, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <Image
                          src={Checkicon}
                          alt="Check"
                          width={20}
                          height={20}
                          className="flex-none mt-1"
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image with modal trigger */}
                <div
                  className={`relative w-full max-w-[300px] mx-auto lg:mx-0 order-last ${
                    idx % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  } lg:flex lg:justify-center`}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={300}
                    height={300}
                    className="rounded-xl object-cover w-full h-auto cursor-pointer"
                    onClick={() => setModalImage(section.image.src)}
                  />

                  {/* Persistent + button */}
                  <button
                    onClick={() => setModalImage(section.image.src)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow cursor-pointer"
                  >
                  <Image
                          src={expandicon}
                          alt="Check"
                          width={20}
                          height={20}
                          className="flex-none mt-1"
                        />

                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* 2 */}
          {/* 4th */}
          <section id="Understand-Your-Role" className="scroll-mt-28 mb-3">
            <h2 className="text-[48px] font-bold text-gray-900">
              Understand Your Role as a Payoneer Reseller
            </h2>

            <p className="mt-2 text-[#878787] text-[23px] max-w-2xl">
              View the following details to ensure you meet all requirements and
              maintain compliance with our program.{" "}
            </p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                Your Role as a Reseller
              </h3>
              {/* Gradient underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

              <ul className=" text-[14px] space-y-2 text-[#878787] text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>
                  Actively promote Payoneer&apos;s services to potential clients
                  (“Prospects”)
                </li>
                <li>Refer those Prospects using special tracking links</li>
                <li>
                  Ensure that any referred client completes the Payoneer
                  registration process
                </li>
                <li>
                  Provide basic support to approved clients (“Registered Users”)
                </li>
                <li>
                  Never alter or interfere with the applicant&apos;s
                  registration data
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                How to Refer Clients Share Payoneer-provided links that contain
                your unique tracking code
              </h3>
              {/* Gradient underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

              <ul className=" text-[14px] space-y-2 text-[#878787] text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>
                  You may only promote Payoneer using official Payoneer
                  marketing materials and branding
                </li>
                <li>
                  Use of Payoneer&apos;s Brand: limited, non-exclusive license
                  to use logos, trademarks, and marketing materials
                </li>
                <li>
                  You cannot alter marketing content or use the brand in a
                  misleading or damaging way
                </li>
                <li>This license can be revoked at any time</li>
              </ul>
            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]">
                Important Limits You cannot bind Payoneer or speak on its behalf
              </h3>
              {/* Gradient underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full mt-1 mb-4"></div>

              <ul className=" text-[14px] space-y-2 text-[#878787] text-sm list-disc list-outside pl-5 marker:text-gray-400">
                <li>
                  You may not charge clients any extra fees without written
                  approval from Payoneer
                </li>
                <li>
                  You must not share or modify a Prospect&apos;s data unless
                  explicitly approved
                </li>
                <li>
                  You must always follow the Promotion and Marketing Guidelines
                </li>
              </ul>
            </div>
          </div>
          <section
            id="Understanding-Partner-Tiers"
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 h-screen"
          >
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Coming Soon..
            </h2>
          </section>
          <section
            id="Payment-Calculators"
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 h-screen"
          >
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Coming Soon..
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
}
