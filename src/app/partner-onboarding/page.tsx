"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "./../assets/Hero-header.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Content from "../assets/images/gettingstarted/Content.png";
import Content2 from "../assets/images/gettingstarted/Content2.png";
import Content3 from "../assets/images/gettingstarted/Content3.png";
import Checkicon from "../assets/images/Check-icon.svg";
import expandicon from "../assets/images/expandIcon.png";
import Footer from "../components/Footer";

const topics = [
  { title: "How to join the program", slug: "How-to-Join" },
  { title: "Understanding partner tiers", slug: "Understanding-Partner-Tiers" },
  {
    title: "Understanding commercials & payment calculators",
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
                  Getting started: partner onboarding
                </span>
              </nav>
            </div>
          </section>

          {/* reseller-overview */}
          <section id="How-to-Join" className="scroll-mt-36 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <p className="text-gray-900 text-[48px] font-semibold">
                How to join the program
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium text-sm sm:text-base mt-2 mb-4"
              ></a>
            </div>
            <p className="text-[#878787] text-sm sm:text-base mt-2 mb-4">
              After sign-up you will receive partnership contract. Please find a
              sample contract below:
            </p>
            <p className="text-[#878787] text-sm sm:text-base mt-2 mb-4">
              <a
                href="/files/REFERRAL-MARKETING-AGREEMENT.pdf"
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
                title: "Account details",
                bullets: resellerBullets,
                image: Content,
              },
              {
                title: "User details",
                bullets: resellerBulletsTwo,
                image: Content2,
              },
              {
                title: "User agreement",
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

          {/* <section
            id="Understand-Your-Role"
            className="scroll-mt-28 mb-4 w-full sm:px-0 py-12 text-left "
          >
            <div className="w-full">
              <h2 className="text-[26px] sm:text-[48px] font-bold text-gray-900">
                Understand your role as a Payoneer reseller
              </h2>
              <p className="mt-4 text-[#878787] text-[14px] sm:text-[18px] max-w-4xl">
                View the following details to ensure you meet all requirements
                and maintain compliance with our program.{" "}
              </p>
            </div>
          </section> */}
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
      <Footer />
    </div>
  );
}
