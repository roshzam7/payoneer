"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import growthIcon1 from "@/app/assets/images/newlogos/8.png";
import growthIcon2 from "@/app/assets/images/newlogos/7.png";
import growthIcon3 from "@/app/assets/images/newlogos/6.png";
import growthIcon4 from "@/app/assets/images/newlogos/5.png";

import Testimonial from "./Testimonial"; // testimonial on codesace

export default function NewmainpageContents() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 ">
      {/* HERO */}
      <header className="relative py-0 lg:py-0 w-full text-l">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center  w-full">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800  w-full">
              Unlock full access to our ecosystem
            </h1>
            <p className="mt-4 text-gray-600  w-full">
              Power your growth with a next-gen ecosystem that simplifies how
              you start, learn, and succeed. Our all-in-one hub connects
              onboarding, enablement, and rewards-designed to help you move
              faster, perform better, and scale sustainably. It&apos;s more than
              a program; it&apos;s your gateway to limitless opportunity. This
              hub brings together onboarding, enablement and rewards so you can
              scale with confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3  w-full">
              <Link
                href="/partner-onboarding"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-all duration-200"
              >
                Get started
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
              </Link>

              <div className="inline-block rounded-md bg-gradient-to-r from-purple-500 to-blue-500 p-[1px] hover:brightness-110 transition-all duration-200">
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
                >
                  Browse FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* SECTION 1 */}
      <section className="mt-10">
        <div className="bg-white rounded-2xl py-0 ">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Empowering our partners to go further, faster
            </h2>
            <p className="mt-2 text-gray-600">
              As a trusted partner, you&apos;re at the center of our growth.
              This is your dedicated hub - packed with tools, resources, and
              insights to help you maximize your impact, unlock new revenue
              streams, and deliver more value to your customers. Unlock full
              access to our ecosystem - from seamless onboarding and activation
              to smart guides and real-time support.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 2: Why partner */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Why partner with us
        </h3>

        {/* Top 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon1}
              alt="Growth Tools"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              Growth tools
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Partner activation & enablement, sales enablement tools, marketing
              assets, guidelines and customer personas.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon2}
              alt="More Rewards"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              More rewards & incentives
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Performance-driven rewards and tiered incentives designed to
              motivate growth and profitable outcomes.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon3}
              alt="Seamless Experience Upgrades"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              Seamless experience upgrades
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Faster onboarding flows, smarter tools and a seamless experience
              that makes it easy to grow.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon4}
              alt="Expert Support & Resources"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              Expert support & resources
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Pro-level guides, onboarding playbooks, and local support to keep
              you moving forward.
            </p>
          </div>
        </div>

        {/* Bottom 2 cards */}
        {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">


          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon}
              alt="Reference"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              Reference
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              See more details on the affiliate & partner program for ideas and
              collateral.
            </p>
            <Link
              href="https://www.payoneer.com/affiliate-program/"
              className="mt-3 inline-block text-sm font-semibold bg-gradient-to-r from-purple-500  to-blue-500 bg-clip-text text-transparent hover:underline hover:brightness-110 transition-all duration-200"
            >
              Visit reference
            </Link>
          </div>
        </div> */}
      </section>
      {/* SECTION 3: Next steps */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Your next steps for maximum impact
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-sm font-semibold text-gray-700">
              Activate new features
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              We will share new modules, integrations, and product feature
              updates as they&apos;re released.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg px-8 py-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-sm font-semibold text-gray-700">
              Claim enhanced rewards
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Check if you&apos;ve unlocked a higher tier, bonus or campaign
              reward.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-sm font-semibold text-gray-700">
              Access new guides & assets
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Download latest collateral and marketing toolkits.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-sm font-semibold text-gray-700">
              Invite referrals
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Use referral campaigns to grow your network and earn more for
              successful referrals.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 4: Testimonials */}
      <section className="mt-16 relative w-full">
        <Testimonial />
      </section>
      {/* SECTION 5: CTA */}
      <footer className="mt-12 bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            Need help or want to explore more?
          </h4>
          <p className="mt-1 text-sm text-gray-600">
            Open a support ticket or browse our FAQs - we&apos;re here to help
            you succeed
          </p>
        </div>
        <div className="flex gap-3">
          <div className="inline-block rounded-md bg-gradient-to-r from-purple-500 to-blue-500 p-[1px] hover:brightness-110 transition-all duration-200">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              Browse FAQs
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
