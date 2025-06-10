'use client'

import React from 'react'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section
      className="
        mt-16 md:mt-24
        flex flex-col items-center text-center
        w-full max-w-[37rem]
        mx-auto gap-12
        px-4 sm:px-0
      "
    >
      <p className="uppercase text-sm text-[#2575E5] font-medium tracking-wide">
        About Vancore
      </p>

      {/* Headline */}
      <h1
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-[56px]
          font-semibold
          leading-snug md:leading-[60px]
          text-black
        "
      >
        Helping African Businesses thrive in the digital economy
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
        At Vancore, we’re building tools that empower small and growing businesses
        to manage inventory, process orders, track payments, and sell across
        multiple channels
      </p>

      {/* Mobile-only CTAs */}
      <div className="flex flex-col gap-4 w-full max-w-xs mx-auto md:hidden">
        <Link
          href="/signup"
          className="
            block text-center py-3 rounded-lg bg-[#0A6DEE] text-white font-medium
            hover:bg-[#0856C1] transition
          "
        >
          Create free account
        </Link>
        <Link
          href="/contact"
          className="
            block text-center py-3 rounded-lg bg-[#E3E5E8] text-[#1D2939] font-medium
            hover:bg-gray-200 transition
          "
        >
          Contact sales
        </Link>
      </div>
    </section>
  )
}
