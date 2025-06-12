'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FULL_LAPTOPS = [
  '/images/laptop-mobile-A.png',
  '/images/laptop-mobile-B.png',
  '/images/laptop-mobile-C.png',
];

const STEPS = [
  {
    title: 'Sign up',
    description:
      'Download the app on your store, create an account with your name, phone number and email',
  },
  {
    title: 'Add product',
    description:
      'Setup your Store with product photos, and specifications',
  },
  {
    title: 'Start selling',
    description:
      'Share your store link, start selling and accepting payments',
  },
];

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMidText, setShowMidText] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const initialOffsetRef = useRef<number>(0);

  // Cycle through laptop images every 3 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FULL_LAPTOPS.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  // Show/hide midpoint text
  useEffect(() => {
    if (activeIndex === 0) {
      setShowMidText(null);
      return;
    }
    const prev = activeIndex - 1;
    const showTimer = setTimeout(() => setShowMidText(prev), 1500);
    const hideTimer = setTimeout(() => setShowMidText(null), 3500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [activeIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    const laptop = laptopRef.current;
    if (!container || !laptop) return;
    const containerRect = container.getBoundingClientRect();
    const laptopRect = laptop.getBoundingClientRect();
    initialOffsetRef.current = laptopRect.top - containerRect.top;

    const handleScroll = () => {
      const { top: cTop, height: cHeight } =
        container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const raw = (windowHeight - cTop) / (cHeight + windowHeight);
      const clamped = Math.min(Math.max(raw, 0), 1);
      const laptopHeight = laptop.offsetHeight;
      const maxOffset = cHeight - laptopHeight - initialOffsetRef.current;
      laptop.style.transform = `translateY(${clamped * maxOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={scrollRef}
      className="w-full py-12 overflow-hidden"
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
        {/* DESKTOP */}
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
                    {/* Title & description */}
                    <div className="ml-6">
                      <h3 className="text-white text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-300 max-w-sm">
                        {step.description}
                      </p>
                      {isLast && (
                        <Link
                          href="https://app.getvancore.com"
                          className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-md text-sm"
                        >
                          Get Started for Free
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Line & midpoint text */}
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
          </div>

          {/* RIGHT: Laptop */}
          <div className="w-1/2 flex justify-center items-start">
            <div ref={laptopRef} className="w-full max-w-2xl">
              <Image
                src={FULL_LAPTOPS[activeIndex]}
                alt={`Laptop screenshot ${activeIndex + 1}`}
                width={1000}
                height={625}
                className="w-full h-auto rounded-lg"
                placeholder="empty"
                priority={activeIndex === 0}
              />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col md:hidden w-full">
          {STEPS.map((step, idx) => {
            const isLast = idx === STEPS.length - 1;
            return (
              <div key={idx} className="flex flex-col items-start mb-8">
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      activeIndex === idx
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-gray-300 max-w-xs">
                      {step.description}
                    </p>
                    {isLast && (
                      <Link
                        href="https://app.getvancore.com"
                        className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white-rounded-md text-sm"
                      >
                        Get Started for Free
                      </Link>
                    )}
                  </div>
                </div>

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

          <div className="w-full max-w-xl mx-auto">
            <Image
              src={FULL_LAPTOPS[activeIndex]}
              alt={`Mobile Laptop ${activeIndex + 1}`}
              width={900}
              height={562}
              className="w-full h-auto rounded-lg"
              placeholder="empty"
            />
          </div>
        </div>
      </div>
    </section>
  );
}