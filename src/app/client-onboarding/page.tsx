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
    desc: "Now that you've registered with Payoneer, you'll see how easy it is to fulfill multiple payment functions, like converting currencies, withdrawing funds and requesting payments, all through one dashboard. Your dashboard is designed to simplify cross-border transactions and make it easy to handle all your business payment needs from a single platform! ",
    link: "https://www.youtube.com/watch?si=AP8AwXe5nZl_qIJl&v=58Rem3K1O6Q&feature=youtu.be",
    image: "/images/PayoneerAccountDashboard.png",
  },
  {
    title:
      "Convert currencies with Payoneer - learn how to convert currencies get started with Payoneer at competitive rates",
    desc: "Now that you've registered with Payoneer, you'll see how simple it is to convert currencies, right from your account dashboard. Payoneer gives you the flexibility to convert funds between currencies quickly and at competitive exchange rates - no need for third-party delays. You can reduce currency risk, avoid unnecessary fees, and make your funds work harder for your business.",
    link: "https://www.youtube.com/watch?v=paXY-XskAjQ#",
    image: "/images/ConvertCurrencies.png",
  },
  {
    title:
      "Adding funds to your account from your bank account - Keep your business moving",
    desc: "To ensure your Payoneer account always has sufficient funds for outgoing payments, you can easily add money directly from your bank account. Adding funds from your bank account helps you to ensure you're always ready to make urgent payments, invest in opportunities, or maintain a positive balance to avoid delays.",
    link: "#https://www.youtube.com/watch?si=eD_Ny7whpX9rMUvH&v=EcDhegY1v_Y&feature=youtu.be",
    image: "/images/Addingfundstoyouraccount.png",
  },
  {
    title: "Make global payments with confidence and ease",
    desc: "With Payoneer, it's easy to make secure, fast payments to your suppliers and contractors directly to their bank account or their Payoneer account if they have one. You can convert and send payments in 70+ currencies across 190+ countries, giving your business the reach it needs to grow.",
    link: "https://www.youtube.com/watch?si=ML8q8EtnQX03vSNE&v=SRjUsIMot2Q&feature=youtu.be",
    image: "/images/MakeGlobalPayments.png",
  },
];

const topics = [
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
  {
    title: "Learn about our solution and products",
    slug: "get-started-with-payoneer",
  },
];

const resellerBullets: string[] = [];
const resellerBulletsTwo = [
  "A valid company license ",
  " A personal bank statement dated within the last 3 months. This only needed for registration and verification of the owner Please select “Yes” to open a corporate account and fill out the fiel",
  "Please select the country as per license. Then, enter your personal bank details on the last page of your application. Please select the bank country where your bank account is located.  ",
];
const resellerBulletsThree = [
  "Log into your Payoneer account",
  "Click on your initials in the top right corner and go to Settings > Verification Center",
  "Upload the required documents in each section",
];
// const resellerBulletsFour = [
//   "Add your Bank Account Details in the fields provided",
// ];
// const resellerBulletsfive = [
//   "Fill in your information. It is recommended to choose a strong and unique password.",
//   "Click Next to continue to User Agreement..",
// ];
// const resellerBulletssix = ["Account is Approved."];
// const resellerBulletsseven = [
//   "Select 'Get started' on the homepage to begin the onboarding process.",
// ];
// const resellerBulletseight = [
//   " Select your preferred payment from the two available options. ",
// ];
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
      "Let's get started with sharing a basic contact detail and an overview about your business, when you finish click next and in the following ",
    note: (
      <>
        <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6">
          Here are the steps to complete your Payoneer onboarding and begin
          using your account.
        </p>
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

  // {
  //   title: "    KYC details ",
  //   bullets: resellerBulletsfive,
  //   image: Content5,
  //   note: (
  //     <>
  //       <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6">
  //         Please Click Submit Now & update the requested information​{" "}
  //       </p>
  //       <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6 font-bold ">
  //         Company Documents
  //       </p>
  //       <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[15px] mt-2 ">
  //         <li>Business License </li>
  //         <li>Certificate of Formation </li>
  //         <li>
  //           Memorandum of Association (MOA) *This should show the Number of
  //           shares held by each shareholder.{" "}
  //         </li>
  //       </ul>

  //       <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6 font-bold ">
  //         Company Documents
  //       </p>
  //       <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[15px] mt-2 ">
  //         <li>Director & Shareholder Documents </li>
  //         <li>Home Country Address </li>
  //         <li>
  //           Personal Address Proof (Any of the below is good)
  //           <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[15px] mt-2 ">
  //             <li>Personal Bank Statement</li>
  //             <li>Utility Bill</li>
  //             <li>Tenancy Agreement</li>
  //           </ul>
  //         </li>
  //         <li>
  //           Personal Bank Statement (Issued within Last 6 Months showing
  //           residential address){" "}
  //         </li>
  //       </ul>
  //     </>
  //   ),
  // },
  // {
  //   title: "    User details ",
  //   bullets: resellerBulletssix,
  //   image: Content6,
  // },
  // {
  //   title: "  Onboarding process ",
  //   bullets: resellerBulletsseven,
  //   image: Content7,
  // },
  // {
  //   title: "  Registration ",
  //   bullets: resellerBulletseight,
  //   image: Content8,
  // },
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
            <p className="mt-2 text-gray-900 text-[20px]">
              Step 1: Request your unique onboarding link
              <br />
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
            <p className="mt-2 text-gray-900 text-[20px] mt-4">
              Step 2: Follow the Step-by-Step Onboarding Guides
              <br />
              Once you sign up using the partner link, your Account Manager will
              provide you with a customized onboarding link tailored to your
              business needs.{" "}
            </p>
            <p className="mt-2 text-gray-900 text-[20px] mt-4">
              Step 3: Chose your Guide: <br />
              • Standard sign-up flow <br />• CLM flow{" "}
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mt-2">
              <p className="mt-2 text-gray-900 text-[20px]">
                Step-by-step onboarding guides for clients:
              </p>
            </div>
            <p className="text-[#878787] text-sm sm:text-[20px] sm:text-base mt-2 mb-4">
              Once you sign up on Partner link, Your Account Manager would be
              able to share a customized link for you
            </p>
          </section>
          {/* cardss */}
          {/* 2 */}
          <section
            id=""
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 "
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
              Let&apos;s get started with sharing a basic contact detail and an
              overview about your business, when you finish click next and in
              the following
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
                  {/* First Half */}
                  {steps.slice(0, splitIndex).map((section, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start my-16"
                    >
                      {/* Text Content */}
                      <div
                        className={`${
                          idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                        } self-center`}
                      >
                        <h3 className="text-[23px] font-semibold text-gray-900 mb-4">
                          {section.title}
                        </h3>
                        {section.note && section.note}

                        {section?.bullets?.length > 0 && (
                          <ul className="space-y-4 text-[18px] text-[#878787]">
                            {section.bullets.map((text) => (
                              <li key={text} className="flex items-start gap-3">
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
                        )}
                      </div>
                      {/* Image with Persistent + Button */}
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
                            alt="Expand"
                            width={20}
                            height={20}
                            className="flex-none mt-1"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
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

                  {/* Second Section Heading */}
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
                  {/* Second Half */}
                  {steps.slice(splitIndex).map((section, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start my-16"
                    >
                      {/* Text Content */}
                      <div
                        className={`${
                          idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                        } self-center`}
                      >
                        <h3 className="text-[23px] font-semibold text-gray-900 mb-4">
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
                                className="flex-none mt-1 bg-white"
                              />
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                        {section.note && section.note}
                      </div>
                      {/* Image with Persistent + Button */}
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
                            alt="Expand"
                            width={20}
                            height={20}
                            className="flex-none mt-1"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              );
            })()}
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
                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  This can be a link to your official website where your
                  services are displayed.
                </p>
                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  If you do not maintain a website, you may submit a link to
                  your verified social media profile or freelancer platform
                  account (e.g., Upwork).
                </p>
                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  Screenshots must clearly display your profile or account
                  details, including username or store name, website URL or
                  logo, and profile information such as full name, phone number,
                  and email address.
                </p>
                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  In some cases, a screenshot may be accepted in place of a live
                  link. Affiliation screenshots should be captured using
                  Autologger.
                </p>
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
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Held ID
                </p>
                <p className="text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  A Held ID submission must include a clear photograph of the
                  account holder:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>
                    Holding their government-issued ID alongside a piece of
                    paper displaying the current date.
                  </li>
                  <li>
                    Both the face of the account holder and the text on the
                    paper must be fully visible and unobstructed.
                  </li>
                  <li>The image must not be mirrored, reversed, or edited.</li>
                </ul>
                <p className="font-semibold text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  <a className="text-blue-600" href="">
                    Request for ID and Held ID
                  </a>
                </p>
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
                  there is no single “standard” template. Use your discretion to
                  determine if the invoice contains the required elements.
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
