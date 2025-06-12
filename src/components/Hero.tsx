'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="
        mt-16 md:mt-24
        flex flex-col items-center text-center
        w-full max-w-[37rem]  /* ~591px */
        mx-auto gap-12
        px-4 sm:px-0
      "
    >
      {/* Headline */}
      <h1
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-[56px]
          font-semibold
          leading-snug md:leading-[60px]
          text-black
        "
      >
        Smart commerce for growing businesses
      </h1>

      {/* Sub-headline */}
      <p
        className="
          w-full max-w-md
          text-base sm:text-[16px]
          leading-[24px]
          text-[#667085]
        "
      >
        Run your business better with powerful tools for sales, inventory,
        payments, and growth, all in one place.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Primary CTA */}
        <Link
          href="https://app.getvancore.com"
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
          <span
            className="
              absolute inset-0 flex items-end justify-center pb-[12px]
              text-white font-sans font-medium text-[15px]
              transform transition-transform duration-500 ease-out
              translate-y-0 group-hover:-translate-y-full
            "
          >
            Create free account
          </span>
          <span
            className="
              absolute inset-0 flex items-end justify-center pb-[12px]
              text-white font-sans font-medium text-[15px]
              transform transition-transform duration-500 ease-out
              translate-y-full group-hover:translate-y-0
            "
          >
            Get started now
          </span>
        </Link>

        {/* Secondary CTA */}
        <Link
          href="mailto:tech@getvancore.com"
          className="
            px-6 py-2
            rounded-[8px]
            bg-[#E3E5E8]
            text-[15px] font-sans font-normal
            text-grey-90
            hover:bg-gray-200
          "
        >
          Contact sales
        </Link>
      </div>
    </section>
  );
}
