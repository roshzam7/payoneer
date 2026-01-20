"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../assets/LP-banner-01.png";
import Navbar from "../components/Navbar";
import backBtn from "../assets/images/back-button.svg";
import Sectionthree3 from "../assets/images/Sectionthree/Sectionthree3.png";
import Sectionthree4 from "../assets/images/Sectionthree/Sectionthree4.png";
import expandicon from "../assets/images/expandIcon.png";
import banner1 from "../assets/banner-assets/banner-1.jpg";
import banner2 from "../assets/banner-assets/banner-2.jpg";
import banner3 from "../assets/banner-assets/banner-3.jpg";
import banner4 from "../assets/banner-assets/banner-4.jpg";
import banner5 from "../assets/banner-assets/banner-5.jpg";
import banner6 from "../assets/banner-assets/banner-6.jpg";
import banner7 from "../assets/banner-assets/banner-7.jpg";
import banner8 from "../assets/banner-assets/banner-8.jpg";
import banner9 from "../assets/banner-assets/banner-9.jpg";
import banner10 from "../assets/banner-assets/banner-10.jpg";
import banner11 from "../assets/banner-assets/banner-11.jpg";
import banner12 from "../assets/banner-assets/banner-12.jpg";
import banner13 from "../assets/banner-assets/banner-13.jpg";
import banner14 from "../assets/banner-assets/banner-14.jpg";
import banner15 from "../assets/banner-assets/banner-15.jpg";

import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerAssets = [
  { id: "banner1", src: banner1, name: "Banner 1" },
  { id: "banner2", src: banner2, name: "Banner 2" },
  { id: "banner3", src: banner3, name: "Banner 3" },
  { id: "banner4", src: banner4, name: "Banner 4" },
  { id: "banner5", src: banner5, name: "Banner 5" },
  { id: "banner6", src: banner6, name: "Banner 6" },
  { id: "banner7", src: banner7, name: "Banner 7" },
  { id: "banner8", src: banner8, name: "Banner 8" },
  { id: "banner9", src: banner9, name: "Banner 9" },
  { id: "banner10", src: banner10, name: "Banner 10" },
  { id: "banner11", src: banner11, name: "Banner 11" },
  { id: "banner12", src: banner12, name: "Banner 12" },
  { id: "banner13", src: banner13, name: "Banner 13" },
  { id: "banner14", src: banner14, name: "Banner 14" },
  { id: "banner15", src: banner15, name: "Banner 15" },
];

const topics = [
  {
    title: "Sales enablement tools",
    slug: "sales-enablement-tools",
  },
  {
    title: "Marketing guidelines",
    slug: "reselling-guidelines",
  },
  {
    title: "Customer personas",
    slug: "customer-personas",
  },
];

const personas = [
  {
    id: 1,
    alt: "Persona 1",
    src: Sectionthree3, // ← Use the imported image
  },
  {
    id: 2,
    alt: "Persona 2",
    src: Sectionthree4, // ← Use the imported image
  },
];

export default function ResellerLandingPage() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? personas.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === personas.length - 1 ? 0 : prevIndex + 1,
    );
  };

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

      <section
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="bg-gray-50 h-screen sm:h-screen flex items-center justify-center px-4 text-center border-b border-gray-200 bg-cover bg-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-normal text-gray-900">
            Partner
            <br />
            <span className="block  bg-clip-text text-gray-900">
              activation & enablement
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
        <main className="flex-1 px-6 py-10 max-w-5xl mx-auto space-y-20 bg-white">
          <section
            aria-label="Breadcrumb"
            className="border-b border-white/10 bg-white text-black backdrop-blur"
          >
            <div className="max-w-7xl mx-0 flex h-6 items-center gap-3 px-4 sm:px-6 lg:px-2">
              {/* Back button */}
              <button
                type="button"
                onClick={() => router.push("/")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black"
                aria-label="Back"
                title="Back"
              >
                <Image
                  src={backBtn}
                  alt="Back"
                  width={32}
                  height={32}
                  className="mt-0"
                />
              </button>

              {/* Crumb text */}
              <nav className="flex items-center gap-2 text-sm text-[#878787]">
                <span
                  className="cursor-pointer font-medium "
                  onClick={() => router.push("/")}
                >
                  Table of Content
                </span>
                <span className="opacity-60">›</span>
                <span className="truncate">
                  Partner activation & enablement
                </span>
              </nav>
            </div>
          </section>

          <section id="sales-enablement-tools" className="scroll-mt-28 mb-12">
            <div className="grid grid-cols-1 gap-10">
              {/* Header Section */}
              <div className="rounded-3xl p-8 sm:p-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  Sales enablement tools
                </h2>
                {/* <div className="mt-6 w-full flex justify-center">
                  <Image
                    src={Sectionthree1}
                    alt="Reseller Program Phases"
                    width={800}
                    height={450}
                    className="w-full max-w-5xl h-auto rounded-2xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div> */}
              </div>

              {/* Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Pitch decks & sales scripts
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    View the Payoneer Global Payments Training Document to gain
                    an overview of our international reach, available payment
                    solutions, and step-by-step guidance on opening an account.
                  </p>
                  <a
                    href="/files/Payoneer-Global-Payments-Training-Document.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-all duration-200"
                  >
                    View Payoneer training document
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
                    {/* LEFT – Text */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                        Training webinars & certifications
                      </h3>

                      <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                        This certificate recognizes Authorised Channel Partners
                        of Payoneer. It confirms your status as a trusted
                        partner, authorized to promote Payoneer&apos;s global
                        payment solutions.
                      </p>

                      <p className="text-[#666] text-sm sm:text-base leading-relaxed">
                        To request one, please raise a request at{" "}
                        <a
                          href="mailto:support@payoneerpartnerships.com"
                          className="text-blue-600 hover:underline hover:text-blue-700 transition-colors"
                        >
                          support@payoneerpartnerships.com
                        </a>
                        .
                      </p>
                    </div>

                    {/* RIGHT – PDF */}
                    <div>
                      <div>
                        <div
                          onClick={() =>
                            setModalImage("/images/Training-webinars.png")
                          }
                          className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200"
                        >
                          <img
                            src="/images/Training-webinars.png"
                            alt="Sample certificate"
                            className="w-cover   object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Brand positioning guide
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    View the brand battlecards to gain a breakdown of
                    Payoneer&apos;s core features and see how our services
                    compare with competitors, Wio and 3S Money.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href="/files/Payoneer_wio_Battlecard.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-all duration-200"
                      >
                        Payoneer vs wio battlecard
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </a>

                      <a
                        href="/files/Payoneer_3s_money_battlecard.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-all duration-200"
                      >
                        Payoneer vs 3s money battlecard
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing & Reselling Guidelines */}
          <section
            id="marketing-reselling-guidelines"
            className="scroll-mt-28 mb-12"
          >
            <div className="grid grid-cols-1 gap-10">
              {/* Header Section */}
              <div className="rounded-3xl  p-8 sm:p-0">
                <h3
                  id="reselling-guidelines"
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2"
                >
                  Marketing guidelines
                </h3>
                {/* <Image
                  src={Sectionthree2}
                  alt="Reseller Program Phases"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-2xl border border-gray-200 shadow-md transition-transform duration-300 hover:scale-[1.02]"
                /> */}
              </div>

              {/* Cards Section */}
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                {/* Branding & Messaging Compliance */}
                <div className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Branding & messaging compliance
                  </h3>
                  <p className="text-[#666] text-sm sm:text-base mb-5 leading-relaxed">
                    View the Payoneer Design Guidelines to gain a comprehensive
                    understanding of our brand&apos;s visual identity. This
                    document provides detailed examples of the correct use of
                    logos, color palettes, typography, imagery, tone of voice,
                    and other design variations.
                  </p>
                  <a
                    href="https://brand.payoneer.com/d/JRx9ZTaTPq6K/guidelines#/design-guidelines/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-all duration-200"
                  >
                    View Payoneer design guidelines
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>

                {/* Do's and Don'ts */}
              </div>
            </div>
          </section>

          {/* Banner assets */}
          <section className="mb-20">
            <h3 className="text-[28px] sm:text-[36px] font-semibold text-gray-900 mb-2">
              Banner assets
            </h3>

            <p className="text-[#878787] text-[14px] sm:text-[16px] mb-6">
              Banner assets you may use
            </p>

            <div className="flex gap-6 overflow-x-auto">
              {bannerAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="min-w-[240px] border border-gray-200 rounded-xl p-4 bg-white"
                >
                  {/* Clickable image for preview */}
                  <a
                    href={asset.src.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-[120px] mb-4 overflow-hidden rounded-lg group"
                  >
                    <Image
                      src={asset.src}
                      alt={asset.name}
                      fill
                      className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  </a>

                  {/* Download button */}
                  <a
                    href={asset.src.src}
                    download={asset.name}
                    className="block text-center text-sm font-medium text-purple-600 hover:underline"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>

            {/* Download all */}
            <div className="mt-6">
              <a
                href="/banners/banner-assets.zip"
                download
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition"
              >
                Download all assets
              </a>
            </div>
          </section>
          <section className="mb-20">
            <h3 className="text-[28px] sm:text-[36px] font-semibold text-gray-900 mb-2">
              Marketing Assets
            </h3>

            <p className="text-[#878787] text-[14px] sm:text-[16px] mb-6">
              Access Payoneer marketing assets, logos, brand elements, and
              guidelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Logo */}
              <a
                href="https://brand.payoneer.com/d/JRx9ZTaTPq6K/guidelines#/design-guidelines/logo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src="/images/Logo.jpg" // Replace with local preview image if you have
                  alt="Logo"
                  className="w-full h-50 object-contain mb-2"
                />
                <span className="text-center text-sm font-medium text-purple-600 hover:underline">
                  Logo
                </span>
              </a>

              {/* Halo */}
              <a
                href="https://brand.payoneer.com/d/JRx9ZTaTPq6K/guidelines#/design-guidelines/halo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src="/images/Halo.jpg" // Replace with your halo preview image
                  alt="Halo"
                  className="w-full h-50 object-contain mb-2"
                />
                <span className="text-center text-sm font-medium text-purple-600 hover:underline">
                  Halo
                </span>
              </a>

              {/* Colors / Brand Guidelines */}
              <a
                href="https://brand.payoneer.com/d/JRx9ZTaTPq6K/guidelines#/design-guidelines/color-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src="/images/Colors.jpg" // Replace with your colors/brand preview image
                  alt="Colors"
                  className="w-full h-50 object-contain mb-2"
                />
                <span className="text-center text-sm font-medium text-purple-600 hover:underline">
                  Colors
                </span>
              </a>

              {/* Brand Guidelines Overview */}
              <a
                href="https://brand.payoneer.com/d/JRx9ZTaTPq6K/guidelines#/design-guidelines/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src="/images/Brand-guidelines.jpg" // Replace with your overview preview image
                  alt="Brand Guidelines"
                  className="w-full h-50 object-contain mb-2"
                />
                <span className="text-center text-sm font-medium text-purple-600 hover:underline">
                  Brand Guidelines
                </span>
              </a>
            </div>
          </section>

          {/* Personas */}
          <section className="scroll-mt-28 mb-0">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-6 sm:p-8">
                <h2
                  id="customer-personas"
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                >
                  Personas
                </h2>

                <p className="text-[#666] text-sm sm:text-base mb-4 leading-relaxed">
                  View the customer profiles to understand their requirements,
                  preferred payment functionalities, and engagement patterns.
                </p>

                {/* Slider */}
                <div className="relative w-full max-w-xl mx-auto flex items-center">
                  {/* Previous */}
                  <button
                    onClick={goToPrevious}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 mr-2"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>

                  {/* Image */}
                  <div className="relative overflow-hidden w-full rounded-2xl">
                    <Image
                      src={personas[currentIndex].src}
                      alt={personas[currentIndex].alt}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover cursor-pointer rounded-2xl"
                      onClick={() => setIsModalOpen(true)}
                    />

                    {/* Expand icon */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                      <Image
                        src={expandicon}
                        alt="Expand"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>

                  {/* Next */}
                  <button
                    onClick={goToNext}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ml-2"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {personas.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-blue-600 w-8"
                          : "bg-gray-300"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]"
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full"
                  >
                    ✕
                  </button>

                  <Image
                    src={personas[currentIndex].src}
                    alt={personas[currentIndex].alt}
                    width={1000}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            )}
          </section>

          {/* <section
            id="co-branded-or-dedicated-landing-pages"
            className="scroll-mt-10 sm:py-20 px-4 sm:px-6 mb-0 sm:mb-20 "
          >
            <h2 className="text-[20px] sm:text-[48px] font-bold text-gray-900">
              Coming Soon..
            </h2>
          </section> */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
