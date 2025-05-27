'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const STEPS = [
  {
    number: '01',
    title: 'Sign up',
    text:
      'Download the app on your store, create an account with your name, phone number and email.',
  },
  {
    number: '02',
    title: 'Add product',
    text: 'Set up your store with product photos and specifications.',
  },
  {
    number: '03',
    title: 'Start selling',
    text: 'Show your store live, start selling and accepting payments.',
  },
];

export default function HowItWorks() {
  // we'll watch this container's scroll progress
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // start animating when top of ref hits bottom of viewport
    // finish when bottom of ref hits top of viewport
    offset: ['start end', 'end start'],
  });
  // slide tablet down from 0px → 200px
  const tabletY = useTransform(scrollYProgress, [0, 1], ['0px', '200px']);
  // timeline line goes from gray → blue
  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ['#4A5568', '#06B6D4', '#06B6D4']
  );

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row gap-12">
      {/* LEFT: all your copy */}
      <div className="md:w-1/2 flex flex-col">
        <span className="text-sm font-semibold text-[#FBBF24]">HOW IT WORKS</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
          It takes only 5 minutes
        </h2>

        {/* steps + vertical line */}
        <div className="mt-8 flex">
          {/* the timeline “rail” */}
          <motion.div
            style={{ backgroundColor: lineColor }}
            className="w-1 bg-gray-500 rounded-l"
          />

          {/* each step */}
          <div className="ml-4 flex flex-col space-y-12">
            {STEPS.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-mono">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-base text-gray-200 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: scrolling tablet image */}
      <div className="md:w-1/2 relative h-[300px] md:h-[540px] overflow-hidden">
        <motion.div style={{ y: tabletY }} className="absolute right-0">
          <Image
            src="/images/tablet.svg"
            alt="Vancore on tablet"
            width={720}
            height={540}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
