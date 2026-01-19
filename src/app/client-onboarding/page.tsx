"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../assets/LP-banner-01.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Checkicon from "../assets/images/Check-icon.svg";
import Content1 from "../assets/images/sectionfour/newimg1.png";
import Content2 from "../assets/images/sectionfour/newimg2.png";
import Content3 from "../assets/images/sectionfour/newimg3.png";
import Content4 from "../assets/images/sectionfour/Content4.png";
import Content5 from "../assets/images/sectionfour/Content5.png";
import Content6 from "../assets/images/sectionfour/Content6.png";
import Content7 from "../assets/images/sectionfour/Content7.png";
import Content8 from "../assets/images/sectionfour/Content8.png";
import Content9 from "../assets/images/sectionfour/Content9.png";
import Content10 from "../assets/images/sectionfour/Content10.png";
import Content11 from "../assets/images/sectionfour/Content11.png";
import Content12 from "../assets/images/sectionfour/Content12.png";
import Content13 from "../assets/images/sectionfour/Content13.png";
import Content14 from "../assets/images/sectionfour/Content14.png";
import Content15 from "../assets/images/sectionfour/Content15.png";
import Content16 from "../assets/images/sectionfour/Content16.png";
import Content17 from "../assets/images/sectionfour/Content17.png";
import expandicon from "../assets/images/expandIcon.png";
import Footer from "../components/Footer";

const topics = [
   {
    title: "How to get started as an account holder (AH) in Payoneer ",
    slug: "get-started-account-holder",
  },
  {
    title: "Standard sign-up flow",
    slug: "referred-account-holders",
  },
  {
    title: "CLM flow",
    slug: "clm-flow",
  },
  {
    title: "Additional KYC requirements",
    slug: "kyc-process-explained",
  },
 
];

const resellerBullets: string[] = [];
const resellerBulletsTwo = [
  "A valid company license ",
  "A personal bank statement dated within the last 3 months. This only needed for registration and verification of the owner",
];
const resellerBulletsThree = [
  "Log into your Payoneer account",
  "Click on your initials in the top right corner and go to Settings > Verification Center",
  "Upload the required documents in each section",
];
const resellerBulletsnine = [
  "Select the category that best describes your business from the drop-down selection.",
  "Click Next to continue.!",
];
const resellerBulletsTen = [
  "Enter your business email address in the space provided.",
  "Select Next to continue. .",
  "Verify your email address by entering the six-digit code, sent to your email account.",
  "Select Next to continue.",
];
const resellerBulletswleven = [
  "Confirm your business registration by selecting the relevant option.",
  "Complete the form fields by filling in the required information.",
  "Select Next to continue.",
];
const resellerBulletswtwelve = [
  "Select your country/region of residence from the drop-down options.",
  "Select Next to continue. ",
];
const resellerBulletsthirteen = [
  "Type your mobile number in the available space. This will be used for a two-step verification process.",
  "Select Next to continue.",
  "Enter the 6-digit code, sent to your mobile number.",
  "Select Next to continue.",
];
const resellerBulletsfourteen = [
  "Create a password which will be used to sign in. ",
  "Select Register to continue. ",
];
const resellerBulletsfifteen = [
  "The screen will display a list of documents that are required to verify your Payoneer account.",
  "Select the document option that you wish to submit and upload the relevant documentation.",
  "Completes this process for each of the required documents.  ",
  "After submitting all required documents, select Save and Close to continue.",
];
const resellerBulletssisteen = [
  "The screen will display the requirements for the company owner's photo ID.",
  "Drag the relevant file into the space provided and select Submit to complete the process.",
];
const resellerBulletsseventeen = [
  "Select the country or region where the document was issued from the drop-down options.",
  "Drag the relevant file into the space provided and select Submit  to complete the process.",
];

// Steps with bullets and optional note content
const steps = [
  {
    title:
      "Here are the steps to complete your Payoneer onboarding and begin using your account.",
    note: (
      <>
        {/* <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6">
          Here are the steps to complete your Payoneer onboarding and begin
          using your account.
        </p> */}
      </>
    ),

    bullets: resellerBullets,
    image: Content1,
  },
  {
    title: "Step 1: Apply for a Payoneer Account ",
    note: (
      <>
        <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6">
          Please use the link provided by our provider to start your
          application. Before applying, make sure you have the following
          documents ready:{" "}
        </p>
      </>
    ),

    bullets: resellerBulletsTwo,
    image: Content2,
  },
  {
    title: "    Step 2: Upload Your Documents  ",
    note: (
      <>
        <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6">
          Once your account is created, you&apos;ll need to upload verification
          documents. <br />
          To upload your documents:
        </p>
      </>
    ),
    bullets: resellerBulletsThree,
    image: Content3,
  },

  {
    title: "    Business details ",
    bullets: resellerBulletsnine,
    image: Content9,
  },
  {
    title: "  Email verification ",
    bullets: resellerBulletsTen,
    image: Content10,
  },
  {
    title: "  Confirm business registration ",
    bullets: resellerBulletswleven,
    image: Content11,
  },
  {
    title: "  Location information ",
    bullets: resellerBulletswtwelve,
    image: Content12,
  },
  {
    title: "  Mobile number verification ",
    bullets: resellerBulletsthirteen,
    image: Content13,
  },
  {
    title: "  Password creation  ",
    bullets: resellerBulletsfourteen,
    image: Content14,
  },
  {
    title: "  Document submission ",
    bullets: resellerBulletsfifteen,
    image: Content15,
  },
  {
    title: "  ID photo submission ",
    bullets: resellerBulletssisteen,
    image: Content16,
  },
  {
    title: "  Final document submission ",
    bullets: resellerBulletsseventeen,
    image: Content17,
  },
];

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Scrollspy for sidebar
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

      {/* Modal for image preview */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)} // closes when clicking outside
        >
          <div
            className="relative w-[90%] max-w-3xl h-[80vh] p-4 flex items-center justify-center bg-transparent"
            onClick={(e) => e.stopPropagation()} // prevent outside click closing
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 z-50 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200"
              onClick={() => setModalImage(null)}
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full h-full relative">
              <Image
                src={modalImage}
                alt="Preview"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-screen sm:h-screen flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight **leading-normal** text-gray-900">
            {/* Referred Account Holder (AH) */}
            <br />
            <span className="block  bg-clip-text text-gray-900">
              Onboarding process
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

        {/* Main content */}
        <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-20 bg-white relative z-10">
          {/* Breadcrumb */}
          <section
            aria-label="Breadcrumb"
            className="border-b mb-2 border-white/10 bg-white text-black backdrop-blur"
          >
            <div className="max-w-5xl mx-auto flex flex-wrap sm:flex-row sm:items-center justify-between gap-2 px-4 sm:px-6 lg:px-0 py-2">
              {/* Left Side: Back + Breadcrumb */}
              <div className="flex items-center gap-2">
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
                    Table of Content
                  </span>
                  <span className="opacity-60">›</span>
                  <span className="truncate max-w-full sm:max-w-xs md:max-w-md">
                    Onboarding process
                  </span>
                </nav>
              </div>

              {/* Right Side: Download PDF Button */}
              <a
                href="/files/referred-account-holder-Page.pdf" // update with your actual file
                download
                className="inline-flex items-center gap-2 rounded-xl border border-black bg-white px-4 py-2 text-sm text-[#878787] shadow-sm hover:bg-gray-100"
                aria-label="Download PDF"
                title="Download PDF"
              >
                {/* Download Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
                <span>Download Page as PDF</span>
              </a>
            </div>
          </section>
          {/* How to Join */}
          <section
            id="referred-account-holders"
            className="scroll-mt-36 max-w-5xl mx-auto"
          >
            {/* Main heading */}
            <p className="text-gray-900 text-[48px] font-semibold">
              How to get started as an account holder (AH) in Payoneer
            </p>
            <p className="mt-2 font-bold text-bold text-gray-900 text-[20px]">
              Step 1: Request your unique onboarding link
            </p>
            <p className="mt-2 text-gray-900 text-[20px]">
              Contact your Partner Manager and ask for your personalized
              registration link or reach out to <br />
              <a
                className="text-blue-500"
                href="support@payoneerpartnerships.com"
              >
                {" "}
                support@payoneerpartnerships.com
              </a>
            </p>
            <p className="mt-2 font-bold text-gray-900 text-[20px] mt-4">
              Step 2: Follow the Step-by-Step Onboarding Guides
            </p>
            <p className="mt-2 text-gray-900 text-[20px] mt-4">
              Once you sign up using the partner link, your Account Manager will
              provide you with a customized onboarding link tailored to your
              business needs.{" "}
            </p>
            <p className="mt-2 font-bold text-gray-900 text-[20px] mt-4">
              Step 3: Choose your Guide: <br />
            </p>
          </section>
          {/* 2 */}
          <section
            id=""
            className="scroll-mt-10 sm:py-0 px-4 sm:px-6 mb-0 sm:mb-20 "
          >
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
              <a
                href="#Standard-sign-up-flow"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/sign-up-flow.png"
                  alt="Success story 1"
                  className="w-full h-64 object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    Standard sign-up flow
                  </span>
                </div>
              </a>

              <a
                href="#clm-flow"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-gray-200"
              >
                <img
                  src="/images/clm-flow.png"
                  alt="Success story 2"
                  className="w-full h-64 object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    CLM flow
                  </span>
                </div>
              </a>
            </div>
          </section>
          <section
            id="Standard-sign-up-flow"
            className="scroll-mt-36 max-w-5xl mx-auto"
          >
            {/* Main heading */}
            <p className="text-gray-900 text-[48px] font-semibold">
              Standard sign-up flow
            </p>
            <p className="mt-2 text-gray-900 text-[20px]">
              Here are the steps to complete your Payoneer onboarding and begin
              using your account.
            </p>
          </section>
          <section
            id="referred-account-holders"
            className="scroll-mt-36 max-w-5xl mx-auto"
          >
            {/* Main scroll */}

            {(() => {
              const splitIndex = 3;
              return (
                <>
                  {/* First Half */}
                  <section className="mb-20">
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center">
                        {/* Left – Text */}
                        <div className="items-start align-middle align-center content-center">
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                            Let&apos;s get started with sharing a basic contact
                            detail and an overview about your business, when you
                            finish click next and in the following
                          </h3>

                          <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed"></p>
                        </div>
                        {/* RIGHT – PDF */}

                        <div className="self-center justify-center">
                          <div className="self-center justify-center items-center place-items-center">
                            <div
                              onClick={() => setModalImage("/images/i/1.png")}
                              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 self-center justify-center"
                            >
                              <img
                                src="/images/i/1.png"
                                alt="Sample certificate"
                                className="w-cover h-100  object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mb-20">
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center">
                        {/* Left – Text */}
                        <div className="items-start align-middle align-center content-center">
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                            Step 1: Apply for a Payoneer Account
                          </h3>

                          <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                            Please use the link provided by our provider to
                            start your application. Before applying, make sure
                            you have the following documents ready:{" "}
                          </p>
                          <ul className="space-y-0 text-[18px] text-[#878787]">
                            <li className="flex items-start gap-3">
                              <Image
                                src={Checkicon}
                                alt="Check"
                                width={20}
                                height={20}
                                className="flex-none mt-1"
                              />
                              <span>A valid company license </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Image
                                src={Checkicon}
                                alt="Check"
                                width={20}
                                height={20}
                                className="flex-none mt-1"
                              />
                              <span>
                                A personal bank statement dated within the last
                                3 months. This only needed for registration and
                                verification of the owner {" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* RIGHT – PDF */}

                        <div>
                          <div>
                            <div
                              onClick={() => setModalImage("/images/i/2.png")}
                              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                            >
                              <img
                                src="/images/i/2.png"
                                alt="Sample certificate"
                                className="w-cover h-100  object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/*  */}
                  <section className="mb-20">
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center">
                        {/* Left – Text */}
                        <div className="items-start align-middle align-center content-center">
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                            Please note the below:
                          </h3>

                          <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                            Please select as below in the first page to open a
                            corporate account{" "}
                          </p>
                        </div>
                        {/* RIGHT – PDF */}

                        <div>
                          <div>
                            <div
                              onClick={() => setModalImage("/images/i/3.png")}
                              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                            >
                              <img
                                src="/images/i/3.png"
                                alt="Sample certificate"
                                className="w-cover h-35  object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                        {/* Left – Text */}
                        <div className="items-start align-middle align-center content-center">
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                          <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                            Please select the country as per your license{" "}
                          </p>
                        </div>
                        {/* RIGHT – PDF */}

                        <div>
                          <div>
                            <div
                              onClick={() => setModalImage("/images/i/4.png")}
                              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                            >
                              <img
                                src="/images/i/4.png"
                                alt="Sample certificate"
                                className="w-cover h-50  object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                        {/* Left – Text */}
                        <div className="items-start align-middle align-center content-center">
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                          <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                            Please select as below then enter your personal bank
                            details in the last page your application. Please
                            select the bank country as per your bank account is
                            situated.{" "}
                          </p>
                        </div>
                        {/* RIGHT – PDF */}

                        <div>
                          <div>
                            <div
                              onClick={() => setModalImage("/images/i/5.png")}
                              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                            >
                              <img
                                src="/images/i/5.png"
                                alt="Sample certificate"
                                className="w-cover h-50  object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* step 2 */}
                  <section className="mb-20">
                    <div className="bg-white  ">
                      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 items-start">
                        {/* Left – Text */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                            Step 2: Upload Your Documents
                          </h3>

                          <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                            Once your account is created, you&apos;ll need to
                            upload verification documents. <br />
                            To upload your documents:
                          </p>
                          <ul className="space-y-0 text-[18px] text-[#878787]">
                            <li className="flex items-start gap-3">
                              <Image
                                src={Checkicon}
                                alt="Check"
                                width={20}
                                height={20}
                                className="flex-none mt-1"
                              />
                              <span>Log into your Payoneer account</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Image
                                src={Checkicon}
                                alt="Check"
                                width={20}
                                height={20}
                                className="flex-none mt-1"
                              />
                              <span>
                                Click on your initials in the top right corner
                                and go to Settings {">"} Verification Center
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Image
                                src={Checkicon}
                                alt="Check"
                                width={20}
                                height={20}
                                className="flex-none mt-1"
                              />
                              <span>
                                Upload the required documents in each section
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* RIGHT – PDF */}
                      </div>
                    </div>
                  </section>

                  {/* table */}
                  <section className="mb-20">
                    <h3 className="text-[28px] sm:text-[36px] font-semibold text-gray-900 mb-4">
                      Required Documents for Account Verification
                    </h3>

                    <p className="text-[#878787] text-[14px] sm:text-[16px] mb-6">
                      For each of the categories below, please upload one valid
                      document from the list provided.
                    </p>

                    <div className="overflow-x-auto border border-gray-200 rounded-xl">
                      <table className="min-w-full border-collapse text-left text-sm sm:text-base">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900 w-[30%]">
                              Verification Step
                            </th>
                            <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                              Acceptable Documents (Choose one per category)
                            </th>
                          </tr>
                        </thead>

                        <tbody className="bg-white">
                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Company Verification
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Certificate of Incorporation or Business License
                              or Certificate of Registration or PAN (India) or
                              Proof of Company Activity or Electronic Business
                              License (China)
                            </td>
                          </tr>

                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Company Address Verification
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Recent utility bill (gas, water, electricity –
                              dated within the last 3 months) or Certificate of
                              Incorporation (showing address) or recent company
                              bank statement
                            </td>
                          </tr>

                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Ownership Structure
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Government-issued document showing ownership
                              structure or certified copy signed by a
                              notary/lawyer
                            </td>
                          </tr>

                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Proof of Residential Address
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Document issued by a government or recognized
                              institution (e.g., bank statement, utility bill)
                              showing your name and address
                            </td>
                          </tr>

                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Government-Issued Photo ID
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Valid ID with full name, date of birth, ID number,
                              photo, and not expired
                            </td>
                          </tr>

                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Bank Account Verification
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Personal bank statement (within the last 3 months)
                              in the name of one of the company owners
                            </td>
                          </tr>

                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Receiving Account Questionnaire
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Brief description of your business, intended use
                              of Payoneer, and a business website or supporting
                              docs like signed agreements/invoices
                            </td>
                          </tr>

                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium text-black">
                              Authorized Representative Letter
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-[#878787]">
                              Company letter on official letterhead confirming
                              the authorized contact person, signed by the CEO,
                              UBO, or attorney
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                  {/* table end */}

                  {/* CLM flow main */}
                  <div id="clm-flow" className="scroll-mt-36 mt-20 mb-20">
                    <p className="text-gray-900 text-[48px] font-semibold">
                      CLM flow
                    </p>
                    <p className="mt-2 text-gray-900 text-[23px]">
                      Request for your unique onboarding link at
                      <a
                        className="text-blue-500"
                        href="support@payoneerpartnerships.com"
                      >
                        {" "}
                        support@payoneerpartnerships.com
                      </a>
                      <br />
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mt-2">
                      <p className="mt-2 text-gray-900 text-[23px]">
                        Step-by-step onboarding guides for clients:
                      </p>
                    </div>
                    <p className="text-[#878787] text-sm sm:text-[20px] sm:text-base mt-2 mb-4">
                      View the step-by-step guide for onboarding and
                      registration of your Payoneer business account.
                    </p>
                  </div>
                </>
              );
            })()}
          </section>
          {/* CLM flow */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    1. Sign Up & Account Details
                  </h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    Email Verification{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Enter your email address. </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Verify it using the code sent to your inbox. </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/a.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/a.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* b */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    {" "}
                    Business Information{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Indicate whether you own a registered business.{" "}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Provide the business name and where it is registered.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/b.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/b.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    Mobile Verification{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Enter your phone number. </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Verify it using the SMS code sent to you. </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/c.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/c.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    Set a Strong Password{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Use a secure mix of letters, numbers, and symbols.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/d.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/d.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    Business & Payment Information{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Select your industry. </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/e.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/e.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    {" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        If you operate through a marketplace, specify which one.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/f.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/f.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                    {" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Describe where the money you will receive comes from.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/g.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/g.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Estimate the number of payments you usually send and
                        receive per month.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/h.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/h.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                    {" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Enter the total monthly payment value. </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/i.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/i.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed"></p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Specify your type of business and its URL (if
                        applicable).{" "}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Provide the location of your business activities.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/j.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/j.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    Personal Details{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Enter your full name and nationality. </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/k.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/k.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    2. Verify Your Identity{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Upload a government-issued photo ID (passport,
                        driver&apos;s license, or national ID).{" "}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Upload proof of address (utility bill or bank statement
                        showing your name and address).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Verification ensures compliance with financial
                        regulations.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/l.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/l.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    3. Add a Bank Account
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Choose your bank country. </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/m.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/m.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed"></p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Enter your bank name and account number. </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/n.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/n.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    4. Submit & Wait for Approval{" "}
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Submit your application and uploaded documents.{" "}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Payoneer will review your information. </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>Approval usually takes a few business days. </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>
                        Once approved, you&apos;ll receive a confirmation email
                        and can start using your account.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* RIGHT – PDF */}
                <div>
                  <div>
                    <div
                      onClick={() => setModalImage("/images/a/o.png")}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
                        src="/images/a/o.png"
                        alt="Sample certificate"
                        className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-10  align-center mt-4">
                {/* Left – Text */}
                <div className="items-start align-middle align-center content-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4"></h3>

                  <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                    5. Start Receiving Payments
                  </p>
                  <ul className="space-y-0 text-[18px] text-[#878787]">
                    <li className="flex items-start gap-3">
                      <Image
                        src={Checkicon}
                        alt="Check"
                        width={20}
                        height={20}
                        className="flex-none mt-1"
                      />
                      <span>After verification, your account is active. </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  */}

              {/*  */}
            </div>
          </section>

          {/* Additional KYC Requirements */}
          <section id="kyc-process-explained" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10">
              {/* Left column (Text) */}
              <div className="mt-0">
                <h3 className="text-[20px] sm:text-[48px] font-semibold text-gray-900 mb-4 mt-10">
                  Additional KYC requirements
                </h3>
                <p className="mt-2 text-gray-900 text-[17px]">
                  As part of the onboarding process, you may be asked to provide
                  additional documentation. The following outlines the
                  requirements, with clear guidance to help you prepare the
                  information in the correct format and avoid processing delays.
                </p>
                {/* Affiliation */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Affiliation URL / Screenshot showing affiliation
                </p>

                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  You may be asked to provide evidence of your professional
                  affiliation:
                </p>

                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>
                    This can be a link to your official website where your
                    services are displayed.
                  </li>
                  <li>
                    {" "}
                    If you do not maintain a website, you may submit a link to
                    your verified social media profile or freelancer platform
                    account (e.g., Upwork).
                  </li>
                  <li>
                    {" "}
                    Screenshots must clearly display your profile or account
                    details, including username or store name, website URL or
                    logo, and profile information such as full name, phone
                    number, and email address.
                  </li>
                  <li>
                    {" "}
                    In some cases, a screenshot may be accepted in place of a
                    live link. Affiliation screenshots should be captured using
                    Autologger.
                  </li>
                </ul>
                {/* <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  Autologger for Affiliation Screenshot:{" "}
                  <a className="text-blue-600" href="">
                    Autologger 7650
                  </a>
                </p> */}
                {/* Business Profile */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Business profile / Merchant application form (MAF)
                </p>
                <p className="text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  For accounts receiving payments via the Payment Request
                  Service (PRQ), submission of a Business Profile — also known
                  as the Merchant Application Form (MAF) — is required. This
                  form provides essential information for Line of Business (LOB)
                  verification.
                </p>
                {/* Held ID */}
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  align-center mt-4">
                    {/* Left – Text */}
                    <div className="items-start align-middle align-center content-center">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                        {" "}
                        Held ID{" "}
                      </h3>

                      <p className="text-[#000] text-sm font-bold sm:text-xl mb-4 leading-relaxed">
                        A Held ID submission must include a clear photograph of
                        the account holder:
                      </p>
                      <ul className="space-y-0 text-[18px] text-[#878787]">
                        <li className="flex items-start gap-3">
                          <Image
                            src={Checkicon}
                            alt="Check"
                            width={20}
                            height={20}
                            className="flex-none mt-1"
                          />
                          <span>
                            Holding their government-issued ID alongside a piece
                            of paper displaying the current date.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Image
                            src={Checkicon}
                            alt="Check"
                            width={20}
                            height={20}
                            className="flex-none mt-1"
                          />
                          <span>
                            Both the face of the account holder and the text on
                            the paper must be fully visible and unobstructed.{" "}
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Image
                            src={Checkicon}
                            alt="Check"
                            width={20}
                            height={20}
                            className="flex-none mt-1"
                          />
                          <span>
                            The image must not be mirrored, reversed, or edited.
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* RIGHT – PDF */}
                    <div>
                      <div>
                        <div
                          className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                        >
                          {/* <a target="_blank" href="/files/Held-ID.pdf ">
                          <img
                            src="/images/Held-IDimg.png"
                            alt="Sample certificate"
                            className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          </a> */}
                      <a
                      href="/files/Held-ID.pdf"
                      rel="Held ID"
                      className="group relative block overflow-hidden rounded-xl border border-gray-200"
                    ><img
                        src="/images/Held-IDimg.png"                  
                        alt="Success story 2"
                        className="w-full h-64 object-cover"
                        />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-3 text-center text-sm sm:text-base font-semibold text-white">
                    CLM flow
                  </span>
                </div>
              </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Invoice */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Invoice submission requirements
                </p>
                <p className="text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  To verify a payment, the account holder must submit the
                  invoice issued to their client. This document serves as proof
                  of the transaction and should include the following details:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>A description of the services provided</li>
                  <li>
                    The full names of both the buyer (payer) and the seller
                    (account holder)
                  </li>
                  <li>The payment amount</li>
                </ul>
                <p className="text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  Each business may use a different invoice format. Therefore,
                  there is no single &apos;standard&apos; template. Use your
                  discretion to determine if the invoice contains the required
                  elements.
                </p>

                {/* Invoice for Alias Review */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Invoice requirements for alias review
                </p>
                <p className="text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  For reviews involving an alias, the invoice must meet
                  additional criteria to demonstrate a clear connection between
                  the customer and the payment.
                </p>
                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  The invoice must include:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>The original seller&apos;s full name</li>
                  <li>The buyer&apos;s name</li>
                  <li>
                    A general description of the products or services provided
                  </li>
                </ul>
                <p className="text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  In addition, the invoice must establish a link to the customer
                  by meeting at least one of the following criteria:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>The alias name matches</li>
                  <li>Verified phone number</li>
                  <li>Customer&apos;s name</li>
                  <li>Email address</li>
                </ul>

                {/* Selfie */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Visual Identity Verification (Selfie)
                </p>
                <p className="text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  In some cases, the account holder will be asked to complete
                  Visual Identity Verification. This process involves taking a
                  selfie and uploading a valid ID document. When required, the
                  customer will see a prompt titled{" "}
                  <strong>Visual Identity Verification</strong> in their
                  account.
                </p>
                <p className="font-semibold text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  Please note that these are part of the overall selfie
                  requirement and should not be manually uploaded or reviewed;
                  they must be completed by the account holder and reviewed only
                  by KYC.
                </p>
                <p className="text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  What the customer experience looks like:
                </p>
                <ol className="list-decimal list-outside pl-5 text-[12px] text-[#878787] space-y-2 sm:text-[17px]">
                  <li>
                    When Selfie is requested, the customer clicks on the Visual
                    Identity Verification requirement.
                  </li>
                  <li>
                    After a customer clicks on it, they are directed to a
                    &apos;Selfie submission wizard&apos;.
                  </li>
                  <li>
                    They select their country and choose the appropriate ID
                    type.
                  </li>
                  <li>
                    Next, they are prompted to take a photo of their ID document
                    (as required for the document type & country).
                  </li>
                  <li>Finally, they take a live selfie.</li>
                </ol>
                {/* <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  How to submit a Selfie (Visual Identity Verification)
                </p>
                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  If the account holder wishes to opt out of the service, refer
                  to the “How can an account holder opt out of the
                  &apos;Selfie&apos; requirement &apos;(Visual Identity
                  Verification)&apos; section“ in the{" "}
                  <a className="text-blue-600" href="">
                    How to handle documents guide
                  </a>
                  .
                </p> */}
              </div>
            </div>
          </section>
          {/* <section
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

                    <div className="md:w-1/2 w-full">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {faq.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg mb-4">
                        {faq.desc}
                      </p>

                      <a
                        href={faq.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" font-semibold hover:underline mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00] transition-all"
                      >
                        View the tutorial video →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section> */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
