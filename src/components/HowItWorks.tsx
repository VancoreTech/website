'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * STEP 0: Make sure you have these full-laptop PNGs (frame+screen) in your /public/images folder:
 *   - /public/images/laptop-mobile-A.png
 *   - /public/images/laptop-mobile-B.png
 *   - /public/images/laptop-mobile-C.png
 *
 * Each of these is a “complete” laptop mockup (frame + screen) exported from Figma at mobile size.
 */
const FULL_LAPTOPS = [
  '/images/laptop-mobile-A.png',
  '/images/laptop-mobile-B.png',
  '/images/laptop-mobile-C.png',
];

/**
 * The three steps / text blocks to render on the left (desktop) or stacked above (mobile).
 */
const STEPS = [
  {
    title: 'Sign up',
    description:
      'Simply sign up with your name, phone number and email. You don’t need to pay anything',
  },
  {
    title: 'Add product',
    description:
      'Customize your Storefront with your colors, product photos, and more',
  },
  {
    title: 'Start selling',
    description:
      'Share your store link, start selling and accepting payments',
  },
];

/**
 * Text to display halfway along each vertical line:
 * index 0 → between step 0 and step 1,
 * index 1 → between step 1 and step 2.
 */
const MID_TEXTS: [string, string][] = [
  [
    'Simply sign up with your name, phone number and',
    'email. You don’t need to pay anything.',
  ],
  [
    'Customize your Storefront with your colors,',
    'product photos and more.',
  ],
];

export default function HowItWorks() {
  // Index of the currently active step (0,1,2)
  const [activeIndex, setActiveIndex] = useState(0);

  // Which mid‐line text to show (index of line); null = none
  const [showMidText, setShowMidText] = useState<number | null>(null);

  // Reference for the container we want to observe scroll within
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1) Cycle through FULL_LAPTOPS every 3 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FULL_LAPTOPS.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  // 2) Show/hide midpoint text
  useEffect(() => {
    if (activeIndex === 0) {
      setShowMidText(null);
      return;
    }
    const prev = activeIndex - 1;
    const showTimer = setTimeout(() => {
      setShowMidText(prev);
    }, 1500);
    const hideTimer = setTimeout(() => {
      setShowMidText(null);
    }, 3500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [activeIndex]);

  // 3) Use Framer Motion’s useScroll to track scroll progress of our container
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress [0 → 1] to a vertical movement of the laptop [0px → 200px]
  const laptopY = useTransform(scrollYProgress, [0, 1], ['0px', '200px']);

  return (
    <section
      ref={scrollRef}
      className="w-full py-12"
      style={{
        background: 'linear-gradient(180deg, #0B121B 36.38%, #101925 63.62%)',
      }}
    >
      {/* TITLE */}
      <div className="flex flex-col items-start mb-12 px-4 sm:px-6 lg:px-8">
        <span className="self-stretch text-[#F68D0D] font-sora text-[12px] text-left">
          HOW IT WORKS
        </span>
        <h2
          className="mt-2 text-[#FCFCFD] font-sora text-[40px] font-semibold text-left"
          style={{ lineHeight: '64px', letterSpacing: '-0.8px' }}
        >
          IT TAKES ONLY 5 MINUTES
        </h2>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        {/* ===================================== */}
        {/* DESKTOP (≥768px): Steps on left, scrolling laptop on right */}
        {/* ===================================== */}
        <div className="hidden md:flex md:w-full">
          {/* LEFT: Steps & Lines */}
          <div className="w-1/2 flex flex-col items-start">
            {STEPS.map((step, idx) => {
              const isLast = idx === STEPS.length - 1;
              return (
                <div key={idx} className="flex flex-col items-start mb-40">
                  <div className="flex items-center">
                    {/* Circle */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        activeIndex === idx
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    {/* Title + description */}
                    <div className="ml-6">
                      <h3 className="text-white text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-300 max-w-sm">
                        {step.description}
                      </p>
                      {isLast && (
                        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md text-sm">
                          Get Started for Free
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Vertical line + midpoint text */}
                  {!isLast && (
                    <div className="relative ml-5">
                      {/* Gray full-height bar */}
                      <div className="relative w-[2px] h-[480px] bg-gray-700 overflow-hidden">
                        {/* Blue growing segment */}
                        <div
                          className={`absolute top-0 left-0 w-full bg-blue-500 transition-all duration-[3000ms] ${
                            activeIndex > idx ? 'h-full' : 'h-0'
                          }`}
                        />
                      </div>
                      {/* Midpoint text */}
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <span
                          className={`block text-white transition-opacity duration-300 whitespace-nowrap ${
                            showMidText === idx ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          {MID_TEXTS[idx][0]}
                          <br />
                          {MID_TEXTS[idx][1]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Scrolling laptop image */}
          <div className="w-1/2 flex justify-center items-start">
            <motion.div
              className="relative w-full max-w-2xl bg-transparent"
              style={{ y: laptopY }}
            >
              <Image
                src={FULL_LAPTOPS[activeIndex]}
                alt={`Laptop screenshot ${activeIndex + 1}`}
                width={1000}
                height={625}
                className="w-full h-auto rounded-lg bg-transparent"
                placeholder="empty"
                priority={activeIndex === 0}
              />
            </motion.div>
          </div>
        </div>

        {/* ================================= */}
        {/* MOBILE (≤767px): Steps stacked, static laptop below */}
        {/* ================================= */}
        <div className="flex flex-col md:hidden w-full">
          {STEPS.map((step, idx) => {
            const isLast = idx === STEPS.length - 1;
            return (
              <div key={idx} className="flex flex-col items-start mb-8">
                <div className="flex items-center">
                  {/* Circle */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      activeIndex === idx
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  {/* Title + description */}
                  <div className="ml-4">
                    <h3 className="text-white text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-gray-300 max-w-xs">
                      {step.description}
                    </p>
                    {isLast && (
                      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md text-sm">
                        Get Started for free
                      </button>
                    )}
                  </div>
                </div>
                {/* Vertical line + midpoint text */}
                {!isLast && (
                  <div className="relative ml-5">
                    <div className="relative w-[2px] h-[480px] bg-gray-700 overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 w-full bg-blue-500 transition-all duration-[3000ms] ${
                          activeIndex > idx ? 'h-full' : 'h-0'
                        }`}
                      />
                    </div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <span
                        className={`block text-white transition-opacity duration-300 whitespace-nowrap ${
                          showMidText === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {MID_TEXTS[idx][0]}
                        <br />
                        {MID_TEXTS[idx][1]}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile laptop (static) */}
          <div className="w-full max-w-xl mx-auto bg-transparent">
            <Image
              src={FULL_LAPTOPS[activeIndex]}
              alt={`Mobile Laptop ${activeIndex + 1}`}
              width={900}
              height={562}
              className="w-full h-auto rounded-lg bg-transparent"
              placeholder="empty"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
