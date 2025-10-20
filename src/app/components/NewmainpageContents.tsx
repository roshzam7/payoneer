"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import growthIcon from "@/app/assets/images/collection-links.svg";
import Testimonial from "./Testimonial"; // Make sure this path is correct

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
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-md overflow-hidden">
        <div className="absolute right-0 top-0 -mr-24 -mt-24 w-80 h-80 bg-[radial-gradient(ellipse_at_center,#f6f0eb,#ffffff00)] opacity-60 pointer-events-none rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              Welcome to the Payoneer Partner Program
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Powering your success with an exclusive program built for growth
              and next-gen infrastructure. This hub brings together onboarding,
              enablement and rewards so you can scale with confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
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

            <div className="mt-6 text-sm text-gray-500">
              <strong className="text-gray-700">Fast facts:</strong>
              <ul className="mt-2 space-y-1">
                <li>Seamless onboarding & activation</li>
                <li>Tiered rewards and incentives</li>
                <li>Pro-level enablement & 24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-600">
                Program snapshot
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-medium text-gray-500">
                    Active partners
                  </div>
                  <div className="mt-1 text-xl font-semibold text-gray-800">
                    1,200+
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-medium text-gray-500">
                    Avg. partner growth
                  </div>
                  <div className="mt-1 text-xl font-semibold text-gray-800">
                    +34% YoY
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-medium text-gray-500">
                    Support SLA
                  </div>
                  <div className="mt-1 text-xl font-semibold text-gray-800">
                    24/7
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-medium text-gray-500">
                    Integrations
                  </div>
                  <div className="mt-1 text-xl font-semibold text-gray-800">
                    API-ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="mt-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#fff4ec] border border-[#ffe0c9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#ff6a00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Empowering our partners to Go Further, Faster
              </h2>
              <p className="mt-2 text-gray-600">
                As a trusted partner, you&apos;re at the center of our growth.
                This is your dedicated hub — packed with tools, resources, and
                insights to help you maximize your impact, unlock new revenue
                streams, and deliver more value to your customers. Unlock full
                access to our ecosystem — from seamless onboarding and
                activation to smart guides and real-time support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why partner */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Why partner with us
        </h3>

        {/* Top 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon}
              alt="Growth Tools"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              Growth Tools
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Partner Activation & Enablement, Sales Enablement Tools, Marketing
              & Reselling Guidelines, Customer Personas, Co-Branded Landing
              Pages.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon}
              alt="More Rewards"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              More Rewards & Incentives
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Performance-driven rewards and tiered incentives designed to
              motivate growth and profitable outcomes.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon}
              alt="Seamless Experience Upgrades"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              Seamless Experience Upgrades
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Faster onboarding flows, improved APIs and UX that make it easy to
              integrate Payoneer offerings into your stack.
            </p>
          </div>
        </div>

        {/* Bottom 2 cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src={growthIcon}
              alt="Expert Support & Resources"
              width={32}
              height={32}
              className="mt-2"
            />
            <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full" />
            <h4 className="mt-3 text-[18px] font-semibold text-gray-900">
              Expert Support & Resources
            </h4>
            <p className="mt-3 text-sm text-[#878787] leading-relaxed">
              Pro-level guides, onboarding playbooks, and a 24/7 support center
              to keep you moving forward.
            </p>
          </div>

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
        </div>
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
            <Link
              href="/partner-activation"
              className="mt-3 inline-block text-sm font-semibold bg-gradient-to-r from-purple-500  to-blue-500 bg-clip-text text-transparent hover:underline hover:brightness-110 transition-all duration-200"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg px-8 py-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-sm font-semibold text-gray-700">
              Claim enhanced rewards
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Check if you&apos;ve unlocked a higher tier, bonus or campaign
              reward.
            </p>
            <Link
              href="/rewards"
              className="mt-3 inline-block text-sm font-semibold bg-gradient-to-r from-purple-500  to-blue-500 bg-clip-text text-transparent hover:underline hover:brightness-110 transition-all duration-200"
            >
              Check rewards →
            </Link>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-sm font-semibold text-gray-700">
              Access new guides & assets
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Download latest collateral: templates, case studies and marketing
              toolkits.
            </p>
            <Link
              href="/assets"
              className="mt-3 inline-block text-sm font-semibold bg-gradient-to-r from-purple-500  to-blue-500 bg-clip-text text-transparent hover:underline hover:brightness-110 transition-all duration-200"
            >
              Open assets →
            </Link>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-sm font-semibold text-gray-700">
              Invite referrals
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Use referral campaigns to grow your network and earn more for
              successful referrals.
            </p>
            <Link
              href="/referrals"
              className="mt-3 inline-block text-sm font-semibold bg-gradient-to-r from-purple-500  to-blue-500 bg-clip-text text-transparent hover:underline hover:brightness-110 transition-all duration-200"
            >
              Start inviting →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: Testimonials */}
      <section className="mt-16 relative w-full">
        <Testimonial />
      </section>

      {/* SECTION 5: CTA */}
      <footer className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            Need help or want to explore more?
          </h4>
          <p className="mt-1 text-sm text-gray-600">
            Open a support ticket or browse our FAQs — we&apos;re here to help
            you succeed.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/support/ticket"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-all duration-200"
          >
            Open ticket
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
      </footer>
    </section>
  );
}
