'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import PricingHeader from '@/components/PricingHeader'
import PricingGrid   from '@/components/PricingGrid'
import PricingCompare from '@/components/PricingCompare'
import FAQPricing    from '@/components/FAQPricing'

export default function PricingPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section className="relative w-full overflow-visible bg-transparent">
      {/*
        ─────────────────────────────────────────────────────────────
        BACKGROUND “BANDS” WRAPPER
        • We keep `absolute top-0 left-0 w-screen` so that
          all child bands can use left-0 / right-0 to bleed fully.
        ─────────────────────────────────────────────────────────────
      */}
      <div className="absolute top-0 left-0 w-screen overflow-visible -z-10">
        {/* ─ Right Band 3 (moved 50px higher: was 202, now 152) ─ */}
        <div className="absolute top-[52px] right-0 w-[467px] h-[129px] opacity-75">
          <Image
            src="/images/right-band-3.svg"
            alt="Right Band 3"
            width={467}
            height={129}
            unoptimized
          />
        </div>

        {/* ─ Right Band 1 (moved 50px higher: was 350, now 300) ─ */}
        <div className="absolute top-[150px] right-0 w-[467px] h-[129px] opacity-60">
          <Image
            src="/images/right-band-1.svg"
            alt="Right Band 1"
            width={467}
            height={129}
            unoptimized
          />
        </div>

        {/* ─ Right Band 2 (moved 50px higher: was 416, now 366) ─ */}
        <div className="absolute top-[216px] right-0 w-[680px] h-[156px] opacity-50">
          <Image
            src="/images/right-band-2.svg"
            alt="Right Band 2"
            width={680}
            height={156}
            unoptimized
          />
        </div>

        {/* ─ Left Band 1 (moved 50px higher: was 558, now 508) ─ */}
        <div className="absolute top-[318px] left-0 w-[467px] h-[129px] opacity-75">
          <Image
            src="/images/left-band-1.svg"
            alt="Left Band 1"
            width={467}
            height={129}
            unoptimized
          />
        </div>

        {/* ─ Left Band 2 (moved 50px higher: was 650, now 600) ─ */}
        <div className="absolute top-[400px] left-0 w-[467px] h-[129px] opacity-60">
          <Image
            src="/images/left-band-2.svg"
            alt="Left Band 2"
            width={467}
            height={129}
            unoptimized
          />
        </div>
      </div>

      {/*
        ─────────────────────────────────────────────────────────────
        PRICING CONTENT (z-10 so it floats above the bands)
        • Removed the large pt-[202px] so there is no blank gap under the Navbar.
        • You can add small pt-6 or pt-8 if you want a little breathing room.
      ─────────────────────────────────────────────────────────────
      */}
      <main className="
          relative 
          z-10 
          mx-auto max-w-screen-2xl 
          px-4 sm:px-6 lg:px-8 
          pt-16
          pb-40 
          flex flex-col items-center gap-8
        ">
        <PricingHeader activeIndex={activeIndex} onChange={setActiveIndex} />
        <PricingGrid   activeIndex={activeIndex} />
        <PricingCompare />

         <div className="w-full mt-16">
          <FAQPricing />
        </div>

      </main>
    </section>
  )
}
