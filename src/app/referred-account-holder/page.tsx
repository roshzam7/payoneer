"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/reseller-banner.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Checkicon from "../assets/images/Check-icon.svg";
import Content1 from "../assets/images/sectionfour/Content1.png";
import Content2 from "../assets/images/sectionfour/Content2.png";
import Content3 from "../assets/images/sectionfour/Content3.png";
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
      "Get paid with Payoneer - Learn how to simplify getting paid with Payoneer",
    desc: "Now that you've registered with Payoneer, you'll find that getting paid is simple, flexible, and efficient. There are three convenient ways to receive funds, making it easy to tailor your payment experience to fit your business needs. You can also track and monitor payments in real-time so you're always in control.",
    link: "https://www.youtube.com/watch?si=kjS57x0NMEZx8xlU&v=2Z-YtRV8wec&feature=youtu.be",
    image: "/images/GetPaidWithPayoneer.png",
  },
  {
    title:
      "Payoneer Account Dashboard - Introduction to basic features & functions",
    desc: "Now that you've registered with Payoneer, you'll see how easy it is to fulfill multiple payment functions, like converting currencies, withdrawing funds and requesting payments, all through one dashboard. Your dashboard is designed to simplify cross-border transactions and make it easy to handle all your business payment needs from a single platform! ",
    link: "https://www.youtube.com/watch?si=AP8AwXe5nZl_qIJl&v=58Rem3K1O6Q&feature=youtu.be",
    image: "/images/PayoneerAccountDashboard.png",
  },
  {
    title:
      "Convert Currencies with Payoneer - Learn how to convert currencies seamlessly at competitive rates",
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
    title: "Make Global Payments with Confidence and Ease",
    desc: "With Payoneer, it's easy to make secure, fast payments to your suppliers and contractors directly to their bank account or their Payoneer account if they have one. You can convert and send payments in 70+ currencies across 190+ countries, giving your business the reach it needs to grow.",
    link: "https://www.youtube.com/watch?si=ML8q8EtnQX03vSNE&v=SRjUsIMot2Q&feature=youtu.be",
    image: "/images/MakeGlobalPayments.png",
  },
];

const topics = [
  {
    title: "Standard Sign-up Flow",
    slug: "referred-account-holders",
  },
  {
    title: "CLM Flow",
    slug: "clm-flow",
  },
  {
    title: "Additional KYC Requirements",
    slug: "kyc-process-explained",
  },
  {
    title: "Get started with Payoneer",
    slug: "get-started-with-payoneer",
  },
];

const resellerBullets = [
  "Enter the details of your company in the provided fields.",
];
const resellerBulletsTwo = [
  "Add all relevant details in the fields provided, including UAE Company Address & Phone number ",
];
const resellerBulletsThree = ["Enter your password & Company ID Details "];
const resellerBulletsFour = [
  "Add your Bank Account Details in the fields provided",
];
const resellerBulletsfive = [
  "Fill in your information. It is recommended to choose a strong and unique password.",
  "Click Next to continue to User Agreement..",
];
const resellerBulletssix = ["Account is Approved."];
const resellerBulletsseven = [
  "Select 'Get started' on the homepage to begin the onboarding process.",
];
const resellerBulletseight = [
  " Select your preferred payment from the two available options. ",
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
    title: "Company Details",
    bullets: resellerBullets,
    image: Content1,
  },
  {
    title: "Contact Details",
    bullets: resellerBulletsTwo,
    image: Content2,
  },
  {
    title: "    Security Details",
    bullets: resellerBulletsThree,
    image: Content3,
  },
  {
    title: "    Payment Details ",
    bullets: resellerBulletsFour,
    image: Content4,
    note: (
      <>
        <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6">
          If you do not have a Company Business Bank Account (a Business Bank),
          you can enter your Personal Bank Account.
        </p>
        <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[15px]">
          <li>
            * Please Note – During KYC, you would be asked to upload your
            Personal Bank Statement (Issued within Last 3 Months){" "}
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "    KYC Details ",
    bullets: resellerBulletsfive,
    image: Content5,
    note: (
      <>
        <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6">
          Please Click Submit Now & update the requested information​{" "}
        </p>
        <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6 font-bold ">
          Company Documents
        </p>
        <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[15px] mt-2 ">
          <li>Business License </li>
          <li>Certificate of Formation </li>
          <li>
            Memorandum of Association (MOA) *This should show the Number of
            shares held by each shareholder.{" "}
          </li>
        </ul>

        <p className="text-[#878787] text-[10px] sm:text-[15px] mt-6 font-bold ">
          Company Documents
        </p>
        <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[15px] mt-2 ">
          <li>Director & Shareholder Documents </li>
          <li>Home Country Address </li>
          <li>
            Personal Address Proof (Any of the below is good)
            <ul className="list-disc list-outside pl-5 text-[10px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[15px] mt-2 ">
              <li>Personal Bank Statement</li>
              <li>Utility Bill</li>
              <li>Tenancy Agreement</li>
            </ul>
          </li>
          <li>
            Personal Bank Statement (Issued within Last 6 Months showing
            residential address){" "}
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "    User Details ",
    bullets: resellerBulletssix,
    image: Content6,
  },
  {
    title: "  Onboarding Process ",
    bullets: resellerBulletsseven,
    image: Content7,
  },
  {
    title: "  Registration ",
    bullets: resellerBulletseight,
    image: Content8,
  },
  {
    title: "    Business Details ",
    bullets: resellerBulletsnine,
    image: Content9,
  },
  {
    title: "  Email Verification ",
    bullets: resellerBulletsTen,
    image: Content10,
  },
  {
    title: "  Confirm Business Registration ",
    bullets: resellerBulletswleven,
    image: Content11,
  },
  {
    title: "  Location Information ",
    bullets: resellerBulletswtwelve,
    image: Content12,
  },
  {
    title: "  Mobile Number Verification ",
    bullets: resellerBulletsthirteen,
    image: Content13,
  },
  {
    title: "  Password Creation  ",
    bullets: resellerBulletsfourteen,
    image: Content14,
  },
  {
    title: "  Document Submission ",
    bullets: resellerBulletsfifteen,
    image: Content15,
  },
  {
    title: "  ID photo submission ",
    bullets: resellerBulletssisteen,
    image: Content16,
  },
  {
    title: "  Final Document Submission ",
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
  className="bg-gray-50 min-h-[400px] sm:min-h-[500px] flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
>
  <div className="max-w-4xl mx-auto py-12 sm:py-20">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
      Referred Account Holder (AH)
      <br />
      <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        Onboarding Journey
      </span>
    </h1>

    {/* Download PDF Button */}
    <a
      href="/files/sample.pdf" // update with your actual file
      download
      className="inline-flex items-center gap-2 rounded-xl border border-black bg-white px-5 py-2 text-black font-medium shadow-sm hover:bg-gray-100"
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
      <span>Download PDF</span>
    </a>
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
            className="border-b border-white/10 bg-white text-black backdrop-blur"
          >
            <div className="max-w-5xl mx-auto flex sm:flex-row sm:items-center gap-2 px-4 sm:px-6 lg:px-0 py-2">
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
                  Referred Account Holder Onboarding Journey
                </span>
              </nav>
            </div>
          </section>

          {/* How to Join */}

          <section
            id="referred-account-holders"
            className="scroll-mt-36 max-w-5xl mx-auto"
          >
            {/* Main heading */}
            <p className="text-gray-900 text-[48px] font-semibold">
              Standard Sign-up Flow
            </p>
            <p className="mt-2 text-gray-900 text-[23px]">
              Request for your unique onboarding link at
              support@payoneerpartnerships.com
            </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mt-2">
            <p className="mt-2 text-gray-900 text-[23px]">
                Step-by-Step Onboarding Guides for Clients:
              </p>
            </div>
            <p className="text-[#878787] text-sm sm:text-[20px] sm:text-base mt-2 mb-4">
              Once you sign up on Partner link, Your Account Manager would be
              able to share a customized link for you
            </p>

            {(() => {
              const splitIndex = 6;

              return (
                <>
                  {/* First Half */}
                  {/* First Half */}
                  {steps.slice(0, splitIndex).map((section, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start my-10"
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
                                className="flex-none mt-1"
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

                  {/* Second Section Heading */}
                  <div id="clm-flow" className="scroll-mt-36 mt-20 mb-20">
                    <p className="text-gray-900 text-[48px] font-semibold">
                      CLM Flow
                    </p>
            <p className="mt-2 text-gray-900 text-[23px]">
                      Request for your unique onboarding link at
                      support@payoneerpartnerships.com
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mt-2">
            <p className="mt-2 text-gray-900 text-[23px]">
                        Step-by-Step Onboarding Guides for Clients:
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
                      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start my-10"
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
                                className="flex-none mt-1"
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

          {/* 2 */}
          <section id="kyc-process-explained" className="scroll-mt-28">
            <div className="mt-0 grid grid-cols-1 lg:grid-cols-1 gap-10">
              {/* Left column (Text) */}
              <div className="mt-0">
                <h3 className="text-[20px] sm:text-[48px] font-semibold text-gray-900 mb-4 mt-10">
                  Additional KYC Requirements
                </h3>
            <p className="mt-2 text-gray-900 text-[17px]">
                  View this section of the guide to know which documents, links,
                  and screenshots are needed as part of the onboarding process.
                  You&apos;ll find clear explanations for each requirement,
                  along with examples of acceptable formats, to simplify the
                  process and avoid delays.
                </p>
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Affiliation URL / Screenshot showing affiliation
                </p>

                <p className=" text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  The URL or screenshot should come from the account
                  holder&apos;s official website where their services are
                  promoted. If the account holder does not have a website, they
                  may provide a link to their social media page or freelancer
                  platform profile, such as their Upwork page. The screenshot
                  must clearly show the customer&apos;s profile or account,
                  including their username or store name, the website URL or
                  logo, and profile details such as full name, phone number, and
                  email address. If they are also asked to provide a URL
                  affiliation, this should be a link to a page within the
                  account holder&apos;s website demonstrating that they can edit
                  the site and add details to it. In some cases, an affiliation
                  screenshot may be accepted instead of a live link. Affiliation
                  screenshots should be captured and saved using Autologger.
                </p>

                <p className=" text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  Autologger for Affiliation Screenshot:{" "}
                  <a className="text-blue-600" href="">
                    Autologger 7650
                  </a>{" "}
                </p>

                {/* Business Profile */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  Business profile / Merchant application form (MAF)
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  The Business Profile, also known as the Merchant Application
                  Form (MAF), is required for LOB verification when an account
                  holder receives payments through the Payment Request Service.
                  Account holders will be asked to provide their Business
                  Profile when they choose to opt in to the PRQ service.{" "}
                </p>
                {/* Held ID */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  {" "}
                  Held ID
                </p>
                <p className=" text-[#878787] text-sm mt-2 text-[12px]sm:text-[17px] sm:text-[17px]">
                  The held ID photo must show the account holder holding a piece
                  of paper with the current date written on it. The photo should
                  be clear, with the paper and the account holder&apos;s face
                  fully visible and unobstructed. Make sure the image is not
                  mirrored or reversed.
                </p>
                <p className="font-semibold text-[#878787] text-sm mt-2 text-[12px] sm:text-[17px]">
                  <a className="text-blue-600" href="">
                    Request for ID and Held ID
                  </a>
                </p>
                {/* Invoice */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  {" "}
                  Invoice
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]  sm:text-[17px]">
                  The account holder must provide the invoice they sent to their
                  client for the relevant payment. The invoice should include:
                  <br />
                  <br />
                </p>

                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400  sm:text-[17px]">
                  <li>details of the services provided </li>
                  <li>the names of both the buyer (payer) and</li>
                  <li>the seller (account holder), and the payment amount. </li>
                </ul>
                <p className=" text-[#878787] text-sm mt-6 text-[12px]  sm:text-[17px]">
                  Please note that each business uses its own invoice format, so
                  there is no single example of a “typical” invoice. The
                  contents will also vary from one business to another, so use
                  your best judgment when reviewing an invoice.
                </p>
                {/* Invoice For Alias Review */}

                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  {" "}
                  Invoice (For Alias Review)
                </p>
                <p className=" text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  A valid invoice must include the following elements:
                </p>

                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>The original seller&apos;s name</li>
                  <li>The buyer&apos;s name</li>
                  <li>A general description of the products</li>
                </ul>

                <p className=" text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  The document must also show a connection to the customer by
                  meeting the following criteria
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>The alias name matches</li>
                </ul>
                <p className=" text-[#878787] text-sm mt-6 text-[12px] sm:text-[17px]">
                  At least one of the affiliation items matches the beneficial
                  owner&apos;s (BO) information:
                </p>
                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>Verified phone number</li>
                  <li>Customer&apos;s name</li>
                  <li>Email address</li>
                </ul>

                {/* Visual identity verification (Selfie) */}
                <p className="text-[17px] sm:text-[23px] font-semibold text-gray-900 mb-4 mt-10">
                  {" "}
                  Visual identity verification (Selfie)
                </p>
                <p className=" text-[#878787] text-xs sm:text-sm mt-6 text-[12px] sm:text-[17px]">
                  Payoneer accepts selfies as part of &apos;Visual Identity
                  Verification.&apos; When a selfie requirement is opened, there
                  are also two additional sub-requirements:
                </p>

                <ul className="list-disc list-outside pl-5 text-[12px] text-[#878787] space-y-2 marker:text-gray-400 sm:text-[17px]">
                  <li>Internal Selfie Information </li>
                  <li>ID </li>
                </ul>
                <p className="font-semibold text-[#878787] text-xs sm:text-sm mt-6 text-[12px] sm:text-[17px]">
                  Please note that these are part of the overall selfie
                  requirement and should not be manually uploaded or reviewed;
                  they must be completed by the account holder and reviewed only
                  by KYC.
                </p>

                <p className=" text-[#878787] text-xs sm:text-sm mt-6 text-[12px] sm:text-[17px]">
                  What submission will look like to the customer:
                </p>
                <p className=" text-[#878787] text-xs sm:text-sm mt-2 text-[12px] sm:text-[17px]">
                  1. When Selfie is requested, it appears as a requirement
                  called &apos;Visual identity verification&apos;
                </p>
                <p className=" text-[#878787] text-xs sm:text-sm mt-2 text-[12px] sm:text-[17px]">
                  2. After a customer clicks on it, they are directed to a
                  &apos;Selfie submission wizard&apos;
                </p>
                <p className=" text-[#878787] text-xs sm:text-sm mt-2 text-[12px] sm:text-[17px]">
                  3. Here, they select their country and the type of their ID
                </p>
                <p className=" text-[#878787] text-xs sm:text-sm mt-2 text-[12px] sm:text-[17px]">
                  4. Next, they take a photo of their ID (as required for the
                  document type & country)
                </p>
                <p className=" text-[#878787] text-xs sm:text-sm mt-2 text-[12px] sm:text-[17px]">
                  5. Finally, they take a selfie
                </p>
                <p className="font-semibold text-[#878787] text-xs sm:text-sm mt-6 text-[12px] sm:text-[17px]">
                  <a className="text-blue-600" href="">
                    How to submit a Selfie (Visual Identity Verification)
                  </a>
                </p>
                <p className=" text-[#878787] text-xs sm:text-sm mt-2 text-[12px] sm:text-[17px]">
                  If the account holder wishes to opt out of the service, refer
                  to the “How can an account holder opt out of the
                  &apos;Selfie&apos; requirement &apos;(Visual Identity
                  Verification)&apos; section in the&nbsp;
                  <a className="text-blue-600" href="">
                    How to handle documents guide
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section id="get-started-with-payoneer" className="scroll-mt-10 max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column with heading + first card */}
              <div className="flex flex-col gap-6 md:mt-6">
                {/* Heading */}
                <div className="max-w-3xl">
                  <h2 className="text-gray-900 text-[48px] font-semibold">
                    Get started with Payoneer
                  </h2>
                  <p className="mt-4 text-gray-600 text-lg">
                    An overview of Payoneer’s features, including payment
                    collection, currency conversion, account funding, and global
                    payouts—helping referred customers activate and grow with
                    their new account.
                  </p>
                </div>

                {/* First Card */}
                <div className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {tutorials[0].title}
                    </h3>
                    <p className="text-gray-600 text-[16px] mb-4">
                      {tutorials[0].desc}
                    </p>
                    <a
                      href={tutorials[0].link}
                      target="_blank"
                      className="font-semibold hover:underline mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]"
                    >
                      View the tutorial video
                    </a>
                  </div>
                  <div className="bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 p-6">
                    <div className="bg-white/70 rounded-lg aspect-[4/3] flex items-center justify-center">
                      <Image
                        src={tutorials[0].image}
                        alt={tutorials[0].title}
                        width={400}
                        height={300}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* 4th card */}
                <div className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {tutorials[3].title}
                    </h3>
                    <p className="text-gray-600 text-[16px] mb-4">
                      {tutorials[3].desc}
                    </p>
                    <a
                      href={tutorials[2].link}
                      className="font-semibold hover:underline mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]"
                    >
                      View the tutorial video
                    </a>
                  </div>
                  <div className="bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 p-6">
                    <div className="bg-white/70 rounded-lg aspect-[4/3] flex items-center justify-center">
                      <Image
                        src={tutorials[3].image}
                        alt={tutorials[3].title}
                        width={400}
                        height={300}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {/* Second Card */}
                <div className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {tutorials[1].title}
                    </h3>
                    <p className="text-gray-600 text-[16px] mb-4">
                      {tutorials[1].desc}
                    </p>
                    <a
                      href={tutorials[1].link}
                      className="font-semibold hover:underline mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]"
                    >
                      View the tutorial video
                    </a>
                  </div>
                  <div className="bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 p-6">
                    <div className="bg-white/70 rounded-lg aspect-[4/3] flex items-center justify-center">
                      <Image
                        src={tutorials[1].image}
                        alt={tutorials[1].title}
                        width={400}
                        height={300}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 3 Card */}

                <div className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {tutorials[2].title}
                    </h3>
                    <p className="text-gray-600 text-[16px] mb-4">
                      {tutorials[2].desc}
                    </p>
                    <a
                      href={tutorials[2].link}
                      className="font-semibold hover:underline mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]"
                    >
                      View the tutorial video
                    </a>
                  </div>
                  <div className="bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 p-6">
                    <div className="bg-white/70 rounded-lg aspect-[4/3] flex items-center justify-center">
                      <Image
                        src={tutorials[2].image}
                        alt={tutorials[2].title}
                        width={400}
                        height={300}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* 5 Card */}
                <div className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {tutorials[4].title}
                    </h3>
                    <p className="text-gray-600 text-[16px] mb-4">
                      {tutorials[4].desc}
                    </p>
                    <a
                      href={tutorials[4].link}
                      className="font-semibold hover:underline mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0070F3] via-[#DA54D8] to-[#FF6A00]"
                    >
                      View the tutorial video
                    </a>
                  </div>
                  <div className="bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 p-6">
                    <div className="bg-white/70 rounded-lg aspect-[4/3] flex items-center justify-center">
                      <Image
                        src={tutorials[4].image}
                        alt={tutorials[4].title}
                        width={400}
                        height={300}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
            <Footer />

    </div>
  );
}
