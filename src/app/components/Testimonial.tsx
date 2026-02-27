"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  company,
  image,
}) => (
  <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-8 py-12 bg-white rounded-3xl shadow-2xl">
    <img
      src={image}
      alt={author}
      className="w-20 h-20 rounded-full object-cover mb-6 shadow-xl ring-4 ring-blue-200 "
    />
    <h4 className="text-lg font-bold text-gray-900 mb-2">{author}</h4>
    <p className="text-gray-600 mb-8">{company}</p>
    <p className="text-gray-700 text-lg leading-relaxed">{quote}</p>
  </div>
);

export default function PayoneerTestimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      quote:
        "We’re proud to partner as an affiliate with Payoneer, a trusted leader in global payments. Their seamless and secure solutions empower businesses to expand beyond borders, and together, we’re making international growth easier than ever! ",
      author: "Julie Nguyen",
      company: "Chief Legal Officer, JNT Consultancy & Services, Vietnam",
      image:
        "https://www.payoneer.com/wp-content/uploads/quote-julie-nguyen.png.webp",
    },
    {
      quote:
        "Our Affiliate Partnership with Payoneer has transformed our business. Their reliability and efficiency have helped thousands of companies expand globally, with fast payment processing and ongoing support. Our collaboration has driven growth and received positive client feedback. Together, we’re achieving outstanding results! ",
      author: "Andriy Matyash",
      company: "Managing Partner, Company 4B , Ukraine",
      image:
        "https://www.payoneer.com/wp-content/uploads/quote-andriy-matyash.png.webp",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + testimonials.length) % testimonials.length
        : (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  return (
    <section
      className="py-20 bg-white relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          See what businesses are saying about partnering with Payoneer.
        </h2>

        <div className="relative min-h-[400px] flex items-center">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-gray-900 text-white shadow-2xl hover:bg-gradient-to-r from-purple-500  to-blue-500 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-gray-900 text-white shadow-2xl hover:bg-gradient-to-r from-purple-500  to-blue-500 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="w-full px-16">
            <div className="transition-all duration-500 ease-in-out">
              <Testimonial {...testimonials[currentIndex]} />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-purple-500  to-blue-500 w-8 shadow-lg"
                  : "bg-gray-300 hover:bg-blue-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
