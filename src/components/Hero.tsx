// src/components/Hero.tsx
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center w-[591px] gap-[48px] mx-auto">
      
      {/* Headline */}
      <h1 className="text-[56px] font-semibold leading-[60px] text-black text-center">
        Smart commerce for growing businesses
      </h1>

      {/* Sub-headline */}
      <p className="w-[500px] text-[16px] font-normal leading-[24px] text-[#667085] text-center">
        Run your business better with powerful tools for sales, inventory,
        payments, and growth, all in one place.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex items-center gap-[24px]">

        {/* Primary CTA */}
        <Link
          href="/signup"
          className="
            group relative flex flex-col items-center justify-end
            w-[177px] h-[44px]
            pt-[12px] pr-[19px] pb-0 pl-[21px]
            gap-[15px]
            rounded-[8px]
            bg-[#0A6DEE]
            shadow-[0px_12px_20px_-1px_rgba(59,115,255,0.40),
                    0px_2px_1px_-1px_rgba(255,255,255,0.50)_inset,
                    0px_-1px_2px_0px_rgba(16,24,40,0.60)_inset,
                    0px_0px_0px_1px_#126BDF]
            overflow-hidden
          "
        >
          {/* Default label */}
          <span className="
            absolute inset-0 flex items-end justify-center pb-[12px]
            text-white font-sans font-medium text-[15px]
            transform transition-transform duration-300 ease-out
            translate-y-0 group-hover:-translate-y-full
          ">
            Create free account
          </span>
          {/* Hover label */}
          <span className="
            absolute inset-0 flex items-end justify-center pb-[12px]
            text-white font-sans font-medium text-[15px]
            transform transition-transform duration-300 ease-out
            translate-y-full group-hover:translate-y-0
          ">
            Get started now
          </span>
        </Link>

        {/* Secondary CTA */}
        <Link
          href="/contact"
          className="
            flex items-center justify-center gap-[8px]
            px-[24px] py-[10px]
            rounded-[8px]
            bg-[#E3E5E8]
            text-[15px] font-sans font-normal
            text-grey-90
          "
        >
          Contact sales
        </Link>

      </div>
    </section>
  );
}
